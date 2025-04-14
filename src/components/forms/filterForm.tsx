import { Button } from "@/components/ui/button"
import SelectBox from "./selectBox"
import { Search } from "lucide-react"

const categoryOptions = [
  { label: "Furniture", value: "furniture" },
  { label: "Cars", value: "car" },
  { label: "Books", value: "book" },
  { label: "Electronics", value: "electronics" },
  { label: "Sports Equipment", value: "sports" },
]

const fareOptions = [
  { label: "$50-100", value: "50-100" },
  { label: "$100-200", value: "100-200" },
  { label: "$200-500", value: "200-500" },
  { label: "$500+", value: "500-plus" },
]

const locationOptions = [
  { label: "New York", value: "new-york" },
  { label: "Los Angeles", value: "los-angeles" },
  { label: "Chicago", value: "chicago" },
  { label: "San Francisco", value: "san-francisco" },
  { label: "Miami", value: "miami" },
]

export default function FilterForm() {
  return (
    <div className="w-full p-4 rounded shadow-md border ">
      <form className="flex flex-col md:flex-row items-center justify-between gap-4">
        <SelectBox placeholder="Select Category" options={categoryOptions} />
        <SelectBox placeholder="Select Fare Range" options={fareOptions} />
        <SelectBox placeholder="Select Location" options={locationOptions} />
        <Button type="button"  className="w-full md:w-auto rounded cursor-pointer">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </form>
    </div>
  )
}