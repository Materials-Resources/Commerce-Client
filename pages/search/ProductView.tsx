import {NextPage} from "next";
import Image from "next/image";
import { Fragment, useState } from 'react'
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
    CurrencyDollarIcon,

} from '@heroicons/react/20/solid'
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
const productView = {
    name: 'Safety Glasses',
    price: '$35',
    href: '#',
    images: [
        {
            id: 1,
            imageSrc: 'https://imagedelivery.net/ABOKdsGnCenw7al-aeuiGQ/92a9c930-dafd-4828-f63d-15b639e69700/p',
            imageAlt: "Safety Glasses"
        }
    ],
    description: `
    Safety glasses to protect you on the job.
  `,
}

const policies = [
    { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
]

const ProductView: NextPage =() => {
    return(
            <div className="bg-calm-blue max-w-5xl mx-auto my-5 rounded-xl">
                <main className="mt-0 max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="py-12 grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                        <div className="lg:col-start-8 lg:col-span-5">
                            <div className="flex justify-between">
                                <h1 className="text-xl font-medium text-white">{productView.name}</h1>
                                <p className="text-xl font-medium text-white">{productView.price}</p>
                            </div>
                        </div>

                        {/* Image gallery */}
                        <div className="lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
                            <h2 className="sr-only">Images</h2>

                            <div className=" grid gap-5 grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8 re">
                                {productView.images.map((image) => (
                                    <div key={image.id} className={'relative w-96 rounded-xl bg-white p-5'}>
                                        <img
                                            src={image.imageSrc}
                                            alt={image.imageAlt}
                                            className={'object-contain'}
                                        />
                                    </div>

                                ))}
                            </div>
                        </div>

                        <div className="mt-8 lg:col-span-5">
                            <form>
                                <button
                                    type="submit"
                                    className="mt-8 w-full bg-safety-red border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-raisin-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Add to cart
                                </button>
                            </form>

                            {/* Product details */}
                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-white">Description</h2>

                                <div
                                    className="mt-4 prose prose-sm text-white"
                                    dangerouslySetInnerHTML={{ __html: productView.description }}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>

    )
}

export default ProductView
