import { useRouter } from "next/router";
import { useLazyQuery, useQuery } from "@apollo/client";
import { graphql } from "../gql/";
import { FormEvent, useEffect, useState } from "react";
import SearchResult from "../components/search/SearchResult";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Facets from "../components/search/Facets";

const searchProductByIdDocument = graphql(/* GraphQL */ `
  query SearchProducts($query: String!) {
    search(query: $query) {
      ItemId
      ItemDesc
      InvMastUid
    }
  }
`);

const Results = () => {
  const router = useRouter();
  const { searchedQuery } = router.query;
  const [typedQuery, setTypedQuery] = useState("");
  const [getSearchResults, { data, loading, error }] = useLazyQuery(
    searchProductByIdDocument
  );

  function submitSearchQuery(event: FormEvent) {
    event.preventDefault();
    router.push(`/search?searchedQuery=${typedQuery}`);
  }

  useEffect(() => {
    if (!router.isReady) return;
    getSearchResults({ variables: { query: String(searchedQuery) } });
  }, [getSearchResults, searchedQuery, router.isReady]);
  return (
    <div>
      <form onSubmit={(e) => submitSearchQuery(e)}>
        <div
          className={"mx-auto flex flex-row place-items-center justify-center"}
        >
          <label className={"mx-2"} aria-hidden={"true"}>
            <MagnifyingGlassIcon className={"w-7"} />
          </label>
          <input
            aria-label={"Product search input"}
            className={"w-1/2 rounded-xl border-2 border-gray-300 p-3"}
            placeholder={"Search for a product!"}
            value={typedQuery}
            onChange={(e) => setTypedQuery(e.target.value)}
          />
        </div>
      </form>
      {data && (
        <>
          <p className={"py-5 text-5xl font-bold"}>
            Results for: <i>{searchedQuery}</i>
          </p>
          <div className={"grid grid-cols-5"}>
            <div className={"col-span-1"}></div>
            <div
              className={
                "col-span-4 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4"
              }
            >
              {data?.search.map(
                (result: {
                  ItemId: string;
                  ItemDesc: string;
                  InvMastUid: string;
                }) => (
                  <div key={result.ItemId}>
                    <SearchResult
                      ItemDesc={result.ItemDesc}
                      ItemId={result.ItemId}
                      InvMastUid={result.InvMastUid}
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Results;
