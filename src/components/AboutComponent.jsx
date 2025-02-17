import Image from "next/image";

export default function AboutComponent() {
  return (
    <div className="container py-16">
      <div className="flex items-center justify-between pb-4">
        <a
          className="py-4 text-3xl font-extrabold leading-tight text-gray-800 lg:text-5xl"
          href=""
        >
          A delightful meal is <br />
          served with love
        </a>
        <p className="tracking-wider text-gray-400">WORLD AWARD</p>
      </div>
      <div className="grid lg:grid-cols-2 place-items-center ">
        <div>
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width={900}
            height={500}
            alt=""
            className="max-md:hidden rounded-lg"
          />
        </div>

        <div className="items-center">
          <p className="px-12 pb-4 ">
            Digimax Classica is a company engaged in the field of restaurant
            services. We provide the best dining experience for our customers.
            We have been trusted by many people to serve their meals. We have
            also received many awards from various countries for our culinary
            excellence.
          </p>
          <div className="flex px-12 pt-4 gap-x-4 ">
            <Image
              src="/image/awards.png"
              width={100}
              height={80}
              alt=""
              className=" h-[100px]"
            />
            <Image
              src="/image/awards1.png"
              width={100}
              height={80}
              alt=""
              className=" h-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
