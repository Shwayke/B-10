
export const revalidate=0; 

// Import necessary components and functions
import HomeBanner from "./components/HomeBanner";
import Container from "./components/Container";



// Define the Home component as an asynchronous function
export default async function Home() {


  // Render the home page layout
  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Container component to provide layout structure */}
      <Container>
        <div>
          {/* Render the HomeBanner component */}
          <HomeBanner />
        </div>
      </Container>
    </div>
  );
}
