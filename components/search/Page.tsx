import {ReactElement, JSXElementConstructor, ReactFragment, ReactComponentElement} from "react"
import {ArrowLeftCircleIcon, ArrowRightCircleIcon} from "@heroicons/react/24/outline";
import {ClassName} from "postcss-selector-parser";

function PageLink(data: { page: number }) {
    return (
        <button>
            <div className={'flex justify-center items-center w-10 h-10 bg-space-caddet-dark text-white rounded-lg hover:bg-space-caddet-light hover:text-black'}>
                <p>{data.page}</p>
            </div>
        </button>

    )
}

export default function SearchPageSelector(data: { totalPages: number, currentPage: number }) {

    let nextFourPages = [];
    for (let i=data.currentPage + 1; i <= data.totalPages; i++) {
        if (i >= data.currentPage + 5) break;
        nextFourPages.push(<PageLink page={i} />)
    }

    return (
        <>
            <div className={'my-10 mx-auto max-w-xl grid grid-cols-7 place-items-center gap-2'}>
                {data.currentPage <= 1 ?
                    <ArrowLeftCircleIcon className={'w-7 text-gray-200'} />
                    :
                    <button>
                        <ArrowLeftCircleIcon className={'w-7'} />
                    </button>

                }

                <PageLink page={data.currentPage}  />
                {nextFourPages}
                <ArrowRightCircleIcon className={'w-7'} />
            </div>

        </>
    )
}