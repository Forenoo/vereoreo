"use client";

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import ProjectCard from "./project-card";

export default function ProjectCarousel() {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
      opts={{
        loop: true,
        align: "start",
      }}
      className="w-full max-w-full overflow-hidden"
    >
      <CarouselContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem
            key={index}
            className="md:basis-1/2 lg:basis-1/3 2xl:basis-1/4"
          >
            <ProjectCard image="/poster.webp" title="Pasargeming" year="2024" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
