import Container from "@/components/layout/container";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ItemPage({
  params,
}: Readonly<{
  params: {
    itemId: string;
  };
}>) {
  return (
    <div className="w-full pt-20">
      <Container>
        <div className="w-full flex flex-col md:flex-row gap-6">
          {/* image carousel */}
          <div className=" w-full md:w-1/2 overflow-hidden">
            <Carousel className="w-full max-w-[80%] mx-auto">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          {/* details */}
          <div className=" w-full md:w-1/2 overflow-hidden">
            <h1 className="text-4xl font-bold">Item {params.itemId}</h1>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              id libero nec odio facilisis efficitur. Donec ut dui in ligula
              cursus bibendum.
            </p>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded">
                Rent Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
