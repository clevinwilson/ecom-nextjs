import Cards from "@/components/ui/Cards";
import Navbar from "@/components/ui/Navbar";
import "flowbite";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section>
        <Navbar />
      </section>
      <section>
        <div className="flex justify-center">
          <Image
            className="h-auto max-w-full "
            src="/iphone-banner.jpg"
            alt="image description"
            width={1000}
            height={500}
          />
        </div>
      </section>

      <section>
        <div className="flex flex-wrap justify-around">
          <Cards />
          <Cards />
          <Cards />
        </div>
      </section>
    </>
  );
}
