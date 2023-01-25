import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";

export default function ProductActions() {
  return (
    <div className={"grid grid-cols-3 grid-rows-2 place-items-center"}>
      <p className={"col-start-1 row-start-2"}>Quantity</p>
      <div
        className={
          "col-span-2 col-start-2 flex flex-row place-items-center gap-5"
        }
      >
        <MinusCircleIcon className={"w-10"} />
        <p>1</p>
        <PlusCircleIcon className={"w-10"} />
      </div>
      <button
        className={
          "col-span-3 row-start-1 rounded-2xl bg-safety-red px-10 py-5 text-white"
        }
      >
        Add to cart
      </button>
    </div>
  );
}
