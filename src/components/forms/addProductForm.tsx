import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { ImageUploader } from "./imageUploader";
import SelectBox from "./selectBox";

const categoryOptions = [
  { label: "Furniture", value: "furniture" },
  { label: "Cars", value: "car" },
  { label: "Books", value: "book" },
  { label: "Electronics", value: "electronics" },
  { label: "Sports Equipment", value: "sports" },
];

export default function AddProductForm() {
  return (
    <form action="" className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Label htmlFor="product_name">Product Name</Label>
        <Input
          name="product_name"
          id="product_name"
          placeholder="Product Name"
          className="px-4 py-2 rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="product_desc">Product Description</Label>
        <Textarea
          name="product_desc"
          id="product_desc"
          placeholder="Product Description"
          className="px-4 py-2 rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="product_price">Product Price</Label>
        <Input
          name="product_price"
          id="product_price"
          placeholder="Product Price"
          className="px-4 py-2 rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="product_category">Product Category</Label>

        <SelectBox
          options={categoryOptions}
          placeholder="Select Product Category"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="product_images">Product Images</Label>
        <ImageUploader maxImages={3} />
      </div>
    </form>
  );
}
