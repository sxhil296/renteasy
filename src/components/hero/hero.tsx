import FilterForm from "../forms/filterForm";
import Container from "../layout/container";

export default function Hero() {
  return (
    <div className="relative  overflow-hidden pt-10 md:pt-16 ">
      <Container>
        <div className="container relative z-20 mx-auto px-4 pt-10 md:pt-16 pb-12 md:pb-24 ">
          <div className="text-center max-w-3xl mx-auto space-y-8">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Rent Anything You Need,{" "}
              <span className="text-primary">When You Need It</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Access thousands of products without the commitment of ownership.
              Save money, reduce waste, and get exactly what you need, exactly
              when you need it.
            </p>
          </div>

          <div className="max-w-3xl mx-auto w-full mt-10">
            <FilterForm />
          </div>
        </div>
      </Container>
    </div>
  );
}
