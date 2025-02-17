import React from "react";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";

const splitTitle = (title: string) => {
  const words = title.split(" ");
  const middleIndex = Math.ceil(words.length / 2);
  return (
    <>
      {words.slice(0, middleIndex).join(" ")}
      <br />
      {words.slice(middleIndex).join(" ")}
    </>
  );
};

const splitDescription = (description: string) => {
  const sentences = description.split(".");
  return sentences.map((sentence, index) => (
    <React.Fragment key={index}>
      {sentence.trim()}
      {index < sentences.length - 1 && <br />}
    </React.Fragment>
  ));
};

interface HeroSectionData {
  subTitle: string;
  title: string;
  description: string;
  heroCOA: {
    label: string;
  };
  heroImage: {
    url: string;
  };
}

// A helper function to fetch hero section data
async function getHeroSectionData(): Promise<HeroSectionData | null> {
  try {
    const response = await fetch(
      "http://localhost:1337/api/hero-section?populate=*"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // Adjust this line if your API response structure differs
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

// The default export is now an async Server Component
export default async function Page() {
  const heroSection = await getHeroSectionData();

  if (!heroSection) {
    return <div>Error loading hero section</div>;
  }

  return (
    <div className="bg-zinc-50">
      <div className="container py-8 text-center lg:py-0 lg:text-left lg:flex lg:justify-between">
        <div className="lg:w-1/2 xl:py-14 lg:py-8">
          <p className="tracking-widest">{heroSection.subTitle}</p>
          <h1 className="py-4 text-3xl font-extrabold leading-tight text-gray-800 xl:text-6xl lg:text-4xl">
            {splitTitle(heroSection.title)}
          </h1>
          <p className="pb-6 text-gray-500 xl:pb-10">
            {splitDescription(heroSection.description)}
          </p>
          <button className="inline-flex items-center px-8 py-3 text-white rounded-full shadow-lg bg-gray-950 hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2">
            {heroSection.heroCOA.label}{" "}
            <SquareArrowOutUpRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        <div className="w-1/2">
          <Image
            src={`http://localhost:1337${heroSection.heroImage.url}`}
            width={800}
            height={500}
            alt=""
            className="absolute right-0 xl:h-[448px] xl:w-[700px] lg:h-[344px] lg:w-[500px] hidden lg:block rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
