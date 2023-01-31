import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import {
  CheckCircleIcon,
  ClipboardDocumentListIcon,
  GiftIcon,
  ListBulletIcon,
  XCircleIcon
} from "@heroicons/react/24/solid";

interface ProductDetails {
  ItemId: string;
  ItemDesc: string;
  ExtendedDesc: string;
  ImageUrl: string;
  Price: number;
  Available: boolean;
}

export default function PurchaseForm( data:{stock: boolean, price: number}) {
  const formattedPrice = new Intl.NumberFormat('en-US', {style: "currency", currency: "USD"}).format(data.price);
  return (
      <>
        <p className={'text-2xl font-bold border-gray-300 border-b-2 w-full'}>{formattedPrice}</p>
        {data.stock ?
            <>
              <div className={'flex flex-row items-center gap-5'}>
                <CheckCircleIcon className={'w-10 text-green-600'} />
                <p>In Stock</p>
              </div>

              <button className={'bg-space-caddet-dark text-white py-3 px-5 rounded-lg'}>
                Add to cart
              </button>
            </>
            :
            <div className={"flex flex-row items-center gap-5 text-gray-500"}>
              <XCircleIcon className={"w-10"}></XCircleIcon>
              <p className={"text-xl italic"}>Not Available</p>
            </div>
        }
        <button className={'bg-space-caddet-dark text-white py-3 px-5 rounded-lg flex flex-row justify-center gap-2'}>
          Add to list <GiftIcon className={'w-5'} />
        </button>

      </>
  )
}

export function ProductDetails(details: ProductDetails) {
  return <></>;
}


