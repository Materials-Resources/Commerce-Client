import Image from "next/image";

interface ProductDetails {
  ItemId: string;
  ItemDesc: string;
  ExtendedDesc: string;
  ImageUrl: string;
  Price: number;
}
export default function ProductDetails(details: ProductDetails) {
  return (
    <div>
      <p className={"text-lg font-bold lg:text-3xl"}>{details.ItemDesc}</p>
      <p className={"my-5 font-extralight italic"}>Item ID: {details.ItemId}</p>
      <p>${details.Price}</p>
      <div className={"aspect-square rounded-lg border-2 border-black"}>
        <Image
          className={"object-center"}
          height={"400"}
          width={"400"}
          src={"https://pub-9b0dea0c4c33447d8e80a3da4716fb7d.r2.dev/RP4000.jpg"}
          alt={""}
        />
      </div>
      <div className={"mt-10 flex flex-col gap-5"}>
        <p className={"text-2xl font-bold underline underline-offset-4"}>
          About the item
        </p>
        <p>{details.ExtendedDesc}</p>
      </div>
    </div>
  );
}
