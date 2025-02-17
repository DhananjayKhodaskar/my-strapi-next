"use client";
import Image from "next/image";
import { TbArrowNarrowRight } from "react-icons/tb";

export default function CatalogueSection() {
  const items = [
    {
      id: "01",
      catagory: "BEDROOM SETUP",
      title: "Cossy Bedroom Setup",
      image:
        "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdGF1cmFudHxlbnwwfHwwfHx8Mg%3D%3D",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "02",
      catagory: "KITCHING SETUP",
      title: "Neat & Clean Kitchen",
      image:
        "https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDI%3D",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "03",
      catagory: "DROWING SETUP",
      title: "Family Drowing Room",
      image:
        "https://images.unsplash.com/photo-1578474846511-04ba529f0b88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8Mg%3D%3D",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
    {
      id: "04",
      catagory: "LIVING SETUP",
      title: "Clean Family Room",
      image:
        "https://images.unsplash.com/photo-1620360289928-dacf4e46f604?q=80&w=3016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "family drowing room with a clean and comfortable design for your family.",
    },
  ];

  return (
    <div className="grid gap-8 divide-gray-300 lg:divide-x lg:gap-0 lg:grid-cols-4 md:grid-cols-2">
      {items.map((item) => (
        <div key={item.id} className="relative overflow-hidden group">
          <div>
            <Image
              src={item.image}
              width={380}
              height={100}
              alt=""
              className="w-full "
            />
          </div>
          <div className="absolute top-0 p-8 m-12 bg-white bg-opacity-60 backdrop-blur">
            <div className="flex justify-between pb-4 ">
              <p className="text-sm">{item.catagory}</p>
              <span className="text-sm ">{item.id}</span>
            </div>
            <a className="block text-xl font-semibold" href="">
              {item.title}
            </a>
            <p className="py-4 text-gray-500">{item.description}</p>
            <a className="inline-flex items-center font-medium" href="">
              See Details <TbArrowNarrowRight className="ml-2 text-xl " />
            </a>
          </div>

          <div className="inset-0 flex-col items-center justify-end hidden gap-32 pb-16 text-xl transition duration-300 ease-in-out border-b-2 md:flex md:absolute group-hover:translate-y-full md:border-b-0 bg-zinc-100">
            <p className="tracking-wider -rotate-90 ">{item.catagory} </p>
            <span className="">{item.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
