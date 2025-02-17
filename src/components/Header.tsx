import Image from "next/image";
import Navigation from "./Navigation";
import axios from "axios";

const fetchNavigationData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:1337/api/navigation-section?populate=*"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching navigation data:", error);
  }
};

export default async function Header() {
  const data = await fetchNavigationData();
  const logoUrl = data.data.logo[0].url;

  return (
    <div className="sticky inset-x-0 top-0 z-10 bg-opacity-60 bg-zinc-100 backdrop-blur-lg">
      <div className="container flex items-center justify-between py-8 ">
        <Image
          src={`http://localhost:1337${logoUrl}`}
          alt="logo"
          width={100}
          height={30}
          className="w-40 h-6"
        />
        <Navigation />
      </div>
    </div>
  );
}
