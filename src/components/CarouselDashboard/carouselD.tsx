"use client"
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay"


const imagesFromMiraflores = [
    "/costaverde.jpg",
    "malecon.jpg",
    "mirafloresNight.jpg",
]


export default function CarouselD() {

    return (
        <Carousel
            plugins={[
                Autoplay({
                    delay: 2000,
                }),
            ]}
        >
            <CarouselContent>
                {
                    imagesFromMiraflores.map((image, index) => (
                        <CarouselItem key={index}>
                            <img className="rounded-lg w-full h-96 sm:h-40" src={image} alt="" />
                        </CarouselItem>
                    ))
                }
            </CarouselContent>
        </Carousel>
    );
}