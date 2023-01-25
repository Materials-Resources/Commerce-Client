import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { graphql } from "../../gql";
import { useEffect } from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import ProductDetails from "../../components/product/ProductDetails";
import ProductActions from "../../components/product/ProductActions";

const getProductById = graphql(/* GraphQL */ `
  query GetProductById($id: Int!) {
    product(invMastUid: $id) {
      ItemID
      ItemDesc
      ExtendedDesc
      Price
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
        <div className={"grid grid-cols-1 place-items-center lg:grid-cols-2"}>
          <ProductDetails
            ItemId={data.product.ItemID}
            ItemDesc={data.product.ItemDesc}
            ExtendedDesc={data.product.ExtendedDesc}
            ImageUrl={""}
            Price={data.product.Price}
          />
          <ProductActions />
        </div>
      )}
    </div>
  );
}
