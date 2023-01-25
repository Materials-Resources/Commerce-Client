interface facets {
  productGroups: productGroup[];
}
interface productGroup {
  name: string;
  count: number;
}

export default function Facets(facets: facets) {
  return (
    <>
      <div>
        <p>Product Groups</p>
        {facets.productGroups.map((productGroup) => (
          <>
            <div>
              <input type={"checkbox"} />
              <p>{productGroup.name}</p>
              <p>{productGroup.count}</p>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
