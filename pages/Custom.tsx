import type { NextPage } from "next";
import Image from "next/image";
import header from "../public/images/custom/header.webp";

const Custom: NextPage = () => {
  return (
    <>
      <div className={"relative h-[600px] w-full"}>
        <Image
          alt={"Man cutting a piece of hose"}
          src={header}
          objectFit={"cover"}
          objectPosition={"bottom"}
          layout={"fill"}
        />
        <div
          className={
            "absolute top-0 bottom-0 flex w-full flex-col justify-center "
          }
        >
          <div>
            <h1 className={"text-laurel text-center  text-6xl"}>
              Custom Fabrication
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Custom;
