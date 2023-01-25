import type { NextPage } from "next";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/20/solid";

const categories = [
  {
    name: "Abrasives",
  },
  {
    name: "Ceramic Fiber Insulation",
  },
  {
    name: "Material Handling",
  },
  {
    name: "Tools",
  },
  {
    name: "Office Supplies",
  },
];
const files = [
  {
    title: "3M",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "Pyramex",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "Miluakee",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "Armour Guys",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },
  {
    title: "Rigid",
    size: "3.9 MB",
    source:
      "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
  },

  // More files...
];

const Catalog: NextPage = () => {
  return (
    <>
      <div className={"mx-auto max-w-6xl p-10"}>
        <div className={"flex flex-row justify-between"}>
          <div>
            <h1 className={"py-5 text-lg font-bold"}>Brands</h1>
          </div>
          <div className={"flex flex-row items-center py-5"}>
            <h1 className={"text-md break-words font-light"}>View all</h1>
            <ArrowRightIcon className={"w-5"} />
          </div>
        </div>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {files.map((file) => (
            <div
              key={file.source}
              className="relative rounded-xl bg-safety-red"
            >
              <div className="group block aspect-square w-full overflow-hidden rounded-t-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <Image
                  src={file.source}
                  height={"400"}
                  width={"400"}
                  alt=""
                  className="pointer-events-none w-full object-contain group-hover:opacity-75"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {file.title}</span>
                </button>
              </div>
              <p className="pointer-events-none mt-2 block truncate py-5 text-center text-lg font-medium text-white">
                {file.title}
              </p>
            </div>
          ))}
        </div>
        <div className={"flex flex-row justify-between"}>
          <div>
            <h1 className={"py-5 text-lg font-bold"}>Categories</h1>
          </div>
          <div className={"flex flex-row items-center py-5"}>
            <h1 className={"text-md break-words font-light"}>View all</h1>
            <ArrowRightIcon className={"w-5"} />
          </div>
        </div>
        <div
          role="list"
          className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
        >
          {categories.map((category) => (
            <div
              key={category.name}
              className="bg-mountbatten relative rounded-xl"
            >
              <div className="W-100 group block w-full overflow-hidden ">
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">
                    View details for {category.name}
                  </span>
                </button>
              </div>
              <p className="pointer-events-none mt-2 block truncate py-5 text-center text-lg font-medium text-white">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Catalog;
