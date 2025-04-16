import AddProductForm from "@/components/forms/addProductForm";
import Container from "@/components/layout/container";

export default function AddProduct() {
  return (
    <div className="w-full pt-20">
      <Container>
        <h1>Add Product to rent</h1>
       <div className="max-w-3xl mx-auto"> <AddProductForm /></div>
      </Container>
    </div>
  );
}
