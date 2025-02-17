import Link from "next/link";
import axios from "axios";
const fetchNavigationData = async () => {
  try {
    const response = await axios.get(
      "http://localhost:1337/api/navigation-section?populate=*"
    );
    console.log(response.data, "response");
    return response;
  } catch (error) {
    console.error("Error fetching navigation data:", error);
  }
};

export default async function Navigation() {
  const response = await fetchNavigationData();
  const navData = response.data.data.navButton;
  const coaButton = response.data.data.coaButton;
  return (
    <>
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label
        htmlFor="menu-toggle"
        className="block lg:hidden cursor-pointer z-50"
      >
        <svg
          className="fill-current h-5 w-5 peer-checked:hidden"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
        <svg
          className="fill-current h-5 w-5 hidden peer-checked:block"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </label>

      <nav className="lg:flex gap-x-6 transform transition max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:bg-white max-md:p-8 max-md:w-64 max-md:translate-x-full peer-checked:max-md:translate-x-0 z-40">
        {navData.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="cursor-pointer"
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="hidden peer-checked:max-md:block fixed inset-0 bg-black bg-opacity-50 z-30"></div>

      <Link
        href={coaButton.href}
        className="items-center hidden px-5 py-2 font-medium text-gray-800 bg-white border border-gray-600 rounded-full shadow lg:inline-flex hover:bg-gray-100 cursor-pointer"
      >
        {coaButton.label}
      </Link>
    </>
  );
}
