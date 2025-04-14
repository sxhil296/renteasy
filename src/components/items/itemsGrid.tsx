import Container from "../layout/container";
import ItemCard from "./itemCard";


const mockItems = [
  {
    itemId: "1",
    itemImg: "https://picsum.photos/200/300",
    itemName: "DSLR Camera",
    location: "New York, NY",
    price: "25",
  },
  {
    itemId: "2",
    itemImg: "https://picsum.photos/200/300",
    itemName: "Electric Lawnmower",
    location: "San Francisco, CA",
    price: "15",
  },
  {
    itemId: "3",
    itemImg: "https://picsum.photos/200/300",
    itemName: "4K Projector",
    location: "Austin, TX",
    price: "30",
  },
  {
    itemId: "4",
    itemImg: "https://picsum.photos/200/300",
    itemName: "DSLR Camera",
    location: "New York, NY",
    price: "25",
  },
  {
    itemId: "5",
    itemImg: "https://picsum.photos/200/300",
    itemName: "Electric Lawnmower",
    location: "San Francisco, CA",
    price: "15",
  },
  {
    itemId: "6",
    itemImg: "https://picsum.photos/200/300",
    itemName: "4K Projector",
    location: "Austin, TX",
    price: "30",
  },
  
];

export default function ItemsGrid() {
  return (
    <div className="w-full">
      <Container>
        <div className="w-full grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 items-center justify-center">
          {mockItems.map((item) => (
            <ItemCard
              key={item.itemId}
              itemId={item.itemId}
              itemImg={item.itemImg}
              itemName={item.itemName}
              location={item.location}
              price={item.price}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
