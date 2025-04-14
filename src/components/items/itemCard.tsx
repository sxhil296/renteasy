import Image from "next/image";
import { Badge } from "../ui/badge";
import { MapPin } from "lucide-react";
import Link from "next/link";


interface ItemCardProps {
  itemImg: string;
  itemName: string;
  location: string;
  price: string;
  itemId: string;
}

export default function ItemCard( {itemImg, itemName, location, price, itemId}: ItemCardProps) {
  return (
    <div className="w-[280px] rounded border hover:border-blue-500 cursor-pointer transition-all duration-200 ease-in-out ">
      
      <Link className="pb-2" href={`/item/${itemId}`}>
        <Image
          src={itemImg}
          width={300}
          height={200}
          alt="item"
          className="rounded-t aspect-square p-0"
        />
      </Link>
      <div className="flex justify-between p-2">
        <div className="flex flex-col gap-1">
          <h3 className="text-lg font-semibold">{itemName}</h3>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            <MapPin size={20}/> {location}
          </p>
        </div>
        <Badge className="rounded px-2 h-[34px] text-xl">${price}</Badge>
      </div>
    </div>
  );
}
