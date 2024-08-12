import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/actions/getCurrentUser"

// Handler for POST requests
export async function POST(request: Request) {
  // Get current user
  const currentUser = await getCurrentUser();

  // If no current user, return an error response
  if(!currentUser){
    return NextResponse.error();
  }

  // Parse request body
  const body = await request.json();
  const { name, description, Size, price, Artist_Name, images } = body;

  // Create a new product using Prisma
  const product = await prisma.product.create({
    data: {
      name,
      description,
      Artist_Name,
      Size,
      images,
      price: parseFloat(price),
    },
  });

  // Return the created product as JSON response
  return NextResponse.json(product);
}
