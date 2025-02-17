"use client";
import Image from "next/image";
import { TbArrowUpRight } from "react-icons/tb";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function CatalogSwiperSection() {
  const images = [
    "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1586999768265-24af89630739?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <div className="py-8 lg:py-28">
      <div className="container grid pb-8 lg:grid-cols-2">
        <div className="text-left ">
          <h1 className="py-4 text-4xl font-medium lg:text-6xl lg:py-0">
            Modern Classic
          </h1>
        </div>
        <div>
          <h2 className="pb-6 text-xl font-bold tracking-wider">
            LUXURY DECOR TO CREATE COMFORT IN OUR HOME
          </h2>
          <div className="grid grid-cols-2 text-gray-500 gap-x-8">
            <div>
              <p>
                With our passion for design and decor, we have created a
                collection of furniture and accessories that will help you
                create a comfortable and stylish home.
              </p>
            </div>
            <div>
              <p>
                We create distinctive and unique designs that are inspired by
                the latest trends in interior design and fashion.
              </p>
              <a
                href=""
                className="inline-flex items-center pt-4 text-lg font-bold text-black underline"
              >
                View Gallery <TbArrowUpRight />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        modules={[Autoplay]}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt="LOGO"
              width={520}
              height={220}
              className="w-full rounded-lg"
              style={{ width: "520px", height: "220px", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
