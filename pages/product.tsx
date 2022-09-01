import {NextPage} from "next";
import Image from "next/image";
import { Fragment, useState } from 'react'
import { Dialog, Popover, RadioGroup, Tab, Transition } from '@headlessui/react'
import {
    CurrencyDollarIcon,
    GlobeIcon,
    MenuIcon,
    SearchIcon,
    ShoppingBagIcon,
    UserIcon,
    XIcon,
} from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}
const product = {
    name: 'Basic Tee',
    price: '$35',
    href: '#',
    images: [
        {
            id: 1,
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
            imageAlt: "Back of women's Basic Tee in black."
        }
    ],
    description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
    details: [
        'Only the best materials',
        'Ethically and locally made',
        'Pre-washed and pre-shrunk',
        'Machine wash cold with similar colors',
    ],
}

const policies = [
    { name: 'International delivery', icon: GlobeIcon, description: 'Get your order in 2 years' },
    { name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees" },
]

const Product: NextPage =() => {
    return(
            <div className="bg-calm-blue">
                <main className="mt-0 max-w-2xl mx-auto pb-16 px-4 sm:pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="py-12 grid lg:grid-cols-12 lg:auto-rows-min lg:gap-x-8">
                        <div className="lg:col-start-8 lg:col-span-5">
                            <div className="flex justify-between">
                                <h1 className="text-xl font-medium text-white">{product.name}</h1>
                                <p className="text-xl font-medium text-white">{product.price}</p>
                            </div>
                        </div>

                        {/* Image gallery */}
                        <div className="lg:col-start-1 lg:col-span-7 lg:row-start-1 lg:row-span-3">
                            <h2 className="sr-only">Images</h2>

                            <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                                {product.images.map((image) => (
                                    <Image
                                        key={image.id}
                                        src={image.imageSrc}
                                        width={600}
                                        height={600}
                                        objectFit={'cover'}
                                        alt={image.imageAlt}
                                        className={'lg:col-span-2 lg:row-span-2hidden lg:block rounded-lg'}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 lg:col-span-5">
                            <form>
                                <button
                                    type="submit"
                                    className="mt-8 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Add to cart
                                </button>
                            </form>

                            {/* Product details */}
                            <div className="mt-10">
                                <h2 className="text-sm font-medium text-white">Description</h2>

                                <div
                                    className="mt-4 prose prose-sm text-white"
                                    dangerouslySetInnerHTML={{ __html: product.description }}
                                />
                            </div>
                            {/* Policies */}
                            <section aria-labelledby="policies-heading" className="mt-10">
                                <h2 id="policies-heading" className="sr-only">
                                    Our Policies
                                </h2>

                                <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                    {policies.map((policy) => (
                                        <div key={policy.name} className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                                            <dt>
                                                <policy.icon className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                <span className="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                                            </dt>
                                            <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </section>
                        </div>
                    </div>
                </main>
            </div>

    )
}

export default Product
