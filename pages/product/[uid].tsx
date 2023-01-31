import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { graphql } from "../../gql";
import { useEffect } from "react";
import {
  ArrowLeftCircleIcon,
} from "@heroicons/react/24/outline";
import PurchaseForm from "../../components/PurchaseForm";

const getProductById = graphql(/* GraphQL */ `
  query GetProductById($id: Int!) {
    product(invMastUid: $id) {
      ItemID
      ItemDesc
      ExtendedDesc
      Price
      Available
    }
  }
`);
export default function Product() {
  const router = useRouter();
  const { uid } = router.query;
  const [getProduct, { data, loading, error }] = useLazyQuery(getProductById);
  useEffect(() => {
    if (!router.isReady) return;
    getProduct({ variables: { id: Number(uid) } });
  }, [uid, getProduct, router.isReady]);
  return (
    <div className={"mx-auto min-h-[70vh] max-w-7xl"}>
      <div className={"mb-5 border-b-2 border-gray-500"}>
        <button type={"button"} onClick={() => router.back()}>
          <ArrowLeftCircleIcon className={"w-10"} />
        </button>
      </div>
      {error && <div className={"mx-auto p-5 text-xl"}>Product not found</div>}
      {loading && <div>Loading</div>}
      {data && (
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-5"}>
          <div>
            <p className={"text-lg font-bold lg:text-3xl"}>
              {data.product.ItemDesc}
            </p>
            <p className={"my-5 font-extralight italic"}>
              Item ID: {data.product.ItemID}
            </p>

            <div className={"aspect-square rounded-lg border-2 border-black"}>
              {/*<Image*/}
              {/*  className={"object-center"}*/}
              {/*  height={"400"}*/}
              {/*  width={"400"}*/}
              {/*  src={"https://pub-9b0dea0c4c33447d8e80a3da4716fb7d.r2.dev/RP4000.jpg"}*/}
              {/*  alt={""}*/}
              {/*/>*/}
            </div>
            <div className={"mt-10 flex flex-col gap-5"}>
              <p className={"text-2xl font-bold underline underline-offset-4"}>
                About the item
              </p>
              <p>{data.product.ExtendedDesc}</p>
            </div>
          </div>
          <div className={'flex flex-col justify-evenly items-end'}>
            <PurchaseForm stock={data.product.Available} price={data.product.Price}/>
            {/*{data.product.Available ? (*/}
            {/*  <>*/}
            {/*    <div className={"flex flex-row items-center gap-5"}>*/}
            {/*      <CheckCircleIcon className={"w-10 text-green-600"} />*/}
            {/*      <p className={"text-xl"}>Available</p>*/}
            {/*      <div className={"grid grid-cols-3 grid-rows-2 place-items-center"}>*/}
            {/*        <p className={"col-start-1 row-start-2"}>Quantity</p>*/}
            {/*        <div*/}
            {/*            className={*/}
            {/*              "col-span-2 col-start-2 flex flex-row place-items-center gap-5"*/}
            {/*            }*/}
            {/*        >*/}
            {/*          <MinusCircleIcon className={"w-10"} />*/}
            {/*          <p>1</p>*/}
            {/*          <PlusCircleIcon className={"w-10"} />*/}
            {/*        </div>*/}
            {/*        <button*/}
            {/*            className={*/}
            {/*              "col-span-3 row-start-1 rounded-2xl bg-safety-red px-10 py-5 text-white"*/}
            {/*            }*/}
            {/*        >*/}
            {/*          Add to cart*/}
            {/*        </button>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </>*/}
            {/*) : (*/}

            {/*)}*/}
          </div>
        </div>
      )}
    </div>
  );
}
