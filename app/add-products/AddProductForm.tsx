'use client';

// Import necessary modules and components
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/inputs/Input";
import TextArea from "@/app/components/inputs/TextArea";
import firebaseApp from "@/libs/firebase";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import axios from "axios";
import { useRouter } from "next/navigation";
import SelectImage from "../components/inputs/SelectImage";

// Define types for image and uploaded image
export type ImageType = {
  image: File | null;
};

export type UploadedImageType = {
  image: string;
};

// Define AddProductForm component
const AddProductForm = (user_name:any) => {
  // State variables
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<ImageType | null>(null);
  const [isProductCreated, setIsProductCreated] = useState(false);
  const{user_name: Artist_name} = user_name;
  
  // Initialize React hook form
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      description: "",
      Size: "",
      Artist_Name: Artist_name,
      images: null,
      price: "",
    },
  });

  // useEffect hook to reset form and images state when product is created
  useEffect(() => {
    if (image) {
      setValue("image", image);
    }
  }, [image, setValue]);

  useEffect(() => {
    if (isProductCreated) { 
      reset();
      setImage(null);
      setIsProductCreated(false);
    }
  }, [isProductCreated, reset]);

  // Function to handle form submission
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log("Product Data", data);
    setIsLoading(true);
    let uploadedImage: UploadedImageType | null = null;

    if (!image || !image.image) {
      setIsLoading(false);
      return toast.error("No selected image!");
    }

    // Function to handle image uploads to Firebase Storage
    const handleImageUploads = async () => {
      toast("Creating product, please wait..");
      try {
        if(image && image.image){
          const fileName = new Date().getTime() + "-" + image.image.name;
          const storage = getStorage(firebaseApp);
          const storageRef = ref(storage, `products/${fileName}`);
          const uploadTask = uploadBytesResumable(storageRef, image.image);
          await new Promise<void>((resolve, reject) => {
            uploadTask.on(
              "state_changed",
              (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
              },
              (error) => {
                console.log("Error uploading image", error);
                reject(error);
              },
              () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                  uploadedImage = { image: downloadURL };
                  console.log("File available at", downloadURL);
                  resolve();
                }).catch((error) => {
                  console.log("Error getting the download URL", error);
                  reject(error);
                });
              }
            );
          });

        }
      } catch (error) {
        setIsLoading(false);
        console.log("Error handling image uploads", error);
        return toast.error("Error handling image uploads");
      }
    };

    await handleImageUploads();

    const productData = { ...data, images: uploadedImage };

    axios.post("/api/product", productData)
      .then(() => {
        toast.success("Product created");
        setIsProductCreated(true);
        router.refresh();
      })
      .catch(() => {
        toast.error("Something went wrong when saving product to db");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleFileChange = useCallback((file: File) => {
    setImage({ image: file });
  }, []);

  const handleRemoveImage = useCallback(() => {
    setImage(null);
  }, []);

  // Render form components
  return (
    <>
      <Heading title="Add a Product" center />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="price"
        label="Price"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />
      <Input
        id="Size"
        label="Size"
        disabled={isLoading}
        register={register}
        errors={errors}
      />
      <TextArea
        id="description"
        label="Description"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <div className="add-product-form-text-area">
        <div>
          <div className="font-bold">
            Upload image of your artwork.
          </div>
          <div className="text-sm">
              Click or drag image to image area:
          </div>
        </div>
        <div className="gap-3">
          <SelectImage
          item={image || { image: null }}
          handleFileChange={handleFileChange}
          handleRemoveImage={handleRemoveImage}
        />
</div>

        
      </div>
      <Button
        label={isLoading ? "Loading..." : "Add Product"}
        onClick={handleSubmit(onSubmit)}
      />
    </>
  );
};

export default AddProductForm;
