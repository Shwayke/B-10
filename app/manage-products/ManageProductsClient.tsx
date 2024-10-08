"use client";

// Import necessary modules and components
import { Product } from "@prisma/client";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { formatPrices } from "@/Utils/formatPrices";
import Heading from "@/app/components/Heading";
import { MdDelete, MdRemoveRedEye } from "react-icons/md";
import ActionBtn from "@/app/components/ActionBtn";
import { JSX, useCallback, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { deleteObject, getStorage, ref } from "firebase/storage";
import firebaseApp from "@/libs/firebase";
import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import { styleClasses } from "@/Utils/tailwindClasses";

// Define interface for props
interface ManageProductsClientProps {
  products: Product[]; // Array of products
}

// Functional component for managing products
const ManageProductsClient: React.FC<ManageProductsClientProps> = ({ products }) => {
  const router = useRouter(); // Initialize useRouter hook
  const storage = getStorage(firebaseApp); // Initialize Firebase storage
  let rows: any = []; // Initialize rows variable for DataGrid

  // Populate rows with product data
  if (products) {
    rows = products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        price: formatPrices(product.price),
        artistName: product.Artist_Name,
        image: product.images,
      };
    });
  }

  // Define columns for DataGrid
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", flex: 0.3, minWidth: 200 },
    { field: "name", headerName: "Name",  flex: 0.2, minWidth: 150 },
    {
      field: "price",
      headerName: "Price(USD)",
      flex: 0.2,
      minWidth: 120,
      renderCell: (params) => {
        return <div className="font-bold text-white">{params.row.price}</div>;
      },
    },
    {
      field: "action",
      headerName: "Actions",
      flex: 0.3,
      minWidth: 150,
      renderCell: (params) => {
        return (
          <div className="flex justify-between gap-4">
            <ActionBtn
              icon={MdDelete}
              onClick={() => {
                
                handleDelete(params.row.id, params.row.image);
              }}
            />
            <ActionBtn
              icon={MdRemoveRedEye}
              onClick={() => {
                router.push(`./product/${params.row.id}`); // Note the leading slash
              }}
            />
          </div>
        );
      },
    },
  ];

  // Function to handle deleting a product
  const handleDelete = useCallback(async (id: string, images: any[]) => {
    toast("Deleting product, please wait!");
  
    // Function to handle deleting images associated with the product
    const handleImageDelete = async () => {
      try {
        for (const item of images) {
          if (item.image) {
            const imageRef = ref(storage, item.image);
            await deleteObject(imageRef);
            console.log("image deleted", item.image);
          }
        }
      } catch (error) {
        return console.log("Deleting images error", error);
      }
    };

    await handleImageDelete(); // Delete images associated with the product

    // Delete the product from the database
    axios.delete(`/api/product/${id}`)
      .then((res) => {
        toast.success("Product deleted");
        router.refresh();
      })
      .catch((err) => {
        toast.error("Failed to delete product");
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .MuiDataGrid-columnHeaderCheckbox .MuiCheckbox-root {
        color: white;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  // Render the component
  return (
    
    <div className={styleClasses.productsTable}>
      <div className="mb-4 mt-8 text-white">
        <Heading title="Manage Products" center />
      </div>
      <div className="w-full">
        <DataGrid
          rows={rows}
          columns={columns}
          style={{ width: '100%' }}
          autoHeight
          disableColumnMenu
          disableColumnSelector
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 9 },
            },
          }}
          pageSizeOptions={[9, 20]}
          disableRowSelectionOnClick

          sx={{
            // Apply white color to all row text
            "& .MuiDataGrid-row": {
              color: "white",
            },
            // Apply white color to column headers
            "& .MuiDataGrid-columnHeader": {
              color: "white",
            },
            // Apply white color to the footer container and pagination toolbar
            "& .MuiDataGrid-footerContainer, & .MuiTablePagination-toolbar": {
              color: "white",
            },
            // Apply white color to the selected row count footer text
            "& .Mui-selected": {
              color: "white",
            },
            // Apply white color to pagination controls and rows per page text
            "& .MuiTablePagination-select, & .MuiTablePagination-selectLabel": {
              color: "white",
            },
          }}
        />
      </div>
    </div>
  );
};

export default ManageProductsClient; // Export the component
