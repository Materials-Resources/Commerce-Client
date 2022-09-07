import {NextComponentType} from "next";
import {Dialog, Popover, Tab, Transition} from "@headlessui/react";
import React, {Fragment, useState} from "react";
import {MenuIcon, SearchIcon, ShoppingCartIcon, UserIcon, XIcon} from "@heroicons/react/outline";
import Image from "next/image";
import logo from "../public/static/images/logo.webp";
import icon from "../public/static/images/icon.webp";
import Link from "next/link";

const navigation = {
    categories: [
        {
            name: 'Tools',
            featured: [
                { name: 'Sleep', href: '#' },
                { name: 'Swimwear', href: '#' },
                { name: 'Underwear', href: '#' },
            ],
            collection: [
                { name: 'Everything', href: '#' },
                { name: 'Core', href: '#' },
                { name: 'New Arrivals', href: '#' },
                { name: 'Sale', href: '#' },
            ],
            categories: [
                { name: 'Basic Tees', href: '#' },
                { name: 'Artwork Tees', href: '#' },
                { name: 'Bottoms', href: '#' },
                { name: 'Underwear', href: '#' },
                { name: 'Accessories', href: '#' },
            ],
            brands: [
                { name: 'Full Nelson', href: '#' },
                { name: 'My Way', href: '#' },
                { name: 'Re-Arranged', href: '#' },
                { name: 'Counterfeit', href: '#' },
                { name: 'Significant Other', href: '#' },
            ],
        }
    ],
    pages: [
        { name: 'Company', href: '#' },
    ],
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const Navigation: NextComponentType =() => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return(
        <>
            {/* Mobile menu */}
            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 flex z-40">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative max-w-xs w-full bg-notebook shadow-xl pb-12 flex flex-col overflow-y-auto">
                                <div className="px-4 pt-5 pb-2 flex">
                                    <button
                                        type="button"
                                        className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <span className="sr-only">Close menu</span>
                                        <XIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                {/* Links */}
                                <Tab.Group as="div" className="mt-2">
                                    <div className="">
                                        <Tab.List className="-mb-px flex px-4 space-x-8">
                                            {navigation.categories.map((category) => (
                                                <Tab
                                                    key={category.name}
                                                    className={({ selected }) =>
                                                        classNames(
                                                            selected ? 'text-calm-blue border-safety-red' : 'text-gray-900 border-transparent',
                                                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                                                        )
                                                    }
                                                >
                                                    {category.name}
                                                </Tab>
                                            ))}
                                        </Tab.List>
                                    </div>
                                    <Tab.Panels as={Fragment}>
                                        {navigation.categories.map((category, categoryIdx) => (
                                            <Tab.Panel key={category.name} className="px-4 pt-10 pb-6 space-y-12">
                                                <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                                                    <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                                                        <div>
                                                            <p id={`mobile-featured-heading-${categoryIdx}`} className="font-medium text-gray-900">
                                                                Featured
                                                            </p>
                                                            <ul
                                                                role="list"
                                                                aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                                                                className="mt-6 space-y-6"
                                                            >
                                                                {category.featured.map((item) => (
                                                                    <li key={item.name} className="flex">
                                                                        <a href={item.href} className="text-calm-blue">
                                                                            {item.name}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                        <div>
                                                            <p id="mobile-categories-heading" className="font-medium text-gray-900">
                                                                Categories
                                                            </p>
                                                            <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                                                                {category.categories.map((item) => (
                                                                    <li key={item.name} className="flex">
                                                                        <a href={item.href} className="text-calm-blue">
                                                                            {item.name}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                                                        <div>
                                                            <p id="mobile-collection-heading" className="font-medium text-gray-900">
                                                                Collection
                                                            </p>
                                                            <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                                                                {category.collection.map((item) => (
                                                                    <li key={item.name} className="flex">
                                                                        <a href={item.href} className="text-gray-500">
                                                                            {item.name}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <p id="mobile-brand-heading" className="font-medium text-gray-900">
                                                                Brands
                                                            </p>
                                                            <ul role="list" aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
                                                                {category.brands.map((item) => (
                                                                    <li key={item.name} className="flex">
                                                                        <a href={item.href} className="text-gray-500">
                                                                            {item.name}
                                                                        </a>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tab.Panel>
                                        ))}
                                    </Tab.Panels>
                                </Tab.Group>

                                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                    {navigation.pages.map((page) => (
                                        <div key={page.name} className="flow-root">
                                            <a href={page.href} className="-m-2 p-2 block font-medium text-gray-900">
                                                {page.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>

                                <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                                    <div className="flow-root">
                                        <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                                            Create an account
                                        </a>
                                    </div>
                                    <div className="flow-root">
                                        <a href="#" className="-m-2 p-2 block font-medium text-gray-900">
                                            Sign in
                                        </a>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            <header className="relative z-10">
                <nav aria-label="Top">
                    {/* Secondary navigation */}
                    <div className="bg-calm-blue text-white">
                        <div className="border-b border-gray-200">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="h-28 flex items-center justify-between">
                                    {/* Logo (lg+) */}
                                        <div className={'block h-20 w-100'}>
                                            <Image
                                                layout="responsive"
                                                width={530}
                                                height={147}
                                                src={'https://imagedelivery.net/ABOKdsGnCenw7al-aeuiGQ/339e2842-2912-4420-fca9-f8ff1d3aac00/p'}
                                                alt=""
                                            />
                                        </div>

                                    <div className="hidden h-full lg:flex">
                                        {/* Mega menus */}
                                        <Popover.Group className="ml-8">
                                            <div className="h-full flex justify-center space-x-8">
                                                {navigation.categories.map((category, categoryIdx) => (
                                                    <Popover key={category.name} className="flex">
                                                        {({ open }) => (
                                                            <>
                                                                <div className="relative flex">
                                                                    <Popover.Button
                                                                        className={classNames(
                                                                            open
                                                                                ? 'border-indigo-600 text-white'
                                                                                : 'border-transparent hover:text-gray-800',
                                                                            'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px'
                                                                        )}
                                                                    >
                                                                        {category.name}
                                                                    </Popover.Button>
                                                                </div>

                                                                <Transition
                                                                    as={Fragment}
                                                                    enter="transition ease-out duration-200"
                                                                    enterFrom="opacity-0"
                                                                    enterTo="opacity-100"
                                                                    leave="transition ease-in duration-150"
                                                                    leaveFrom="opacity-100"
                                                                    leaveTo="opacity-0"
                                                                >
                                                                    <Popover.Panel className="absolute top-full inset-x-0 sm:text-sm">
                                                                        {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                                                                        <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                                                                        <div className="relative bg-white">
                                                                            <div className="max-w-7xl mx-auto px-8">
                                                                                <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                                                                        <div>
                                                                                            <p
                                                                                                id={`desktop-featured-heading-${categoryIdx}`}
                                                                                                className="font-medium text-gray-900"
                                                                                            >
                                                                                                Featured
                                                                                            </p>
                                                                                            <ul
                                                                                                role="list"
                                                                                                aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                                                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                            >
                                                                                                {category.featured.map((item) => (
                                                                                                    <li key={item.name} className="flex">
                                                                                                        <a href={item.href} className="hover:text-gray-800">
                                                                                                            {item.name}
                                                                                                        </a>
                                                                                                    </li>
                                                                                                ))}
                                                                                            </ul>
                                                                                        </div>
                                                                                        <div>
                                                                                            <p id="desktop-categories-heading" className="font-medium text-gray-900">
                                                                                                Categories
                                                                                            </p>
                                                                                            <ul
                                                                                                role="list"
                                                                                                aria-labelledby="desktop-categories-heading"
                                                                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                            >
                                                                                                {category.categories.map((item) => (
                                                                                                    <li key={item.name} className="flex">
                                                                                                        <a href={item.href} className="hover:text-gray-800">
                                                                                                            {item.name}
                                                                                                        </a>
                                                                                                    </li>
                                                                                                ))}
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                                                                        <div>
                                                                                            <p id="desktop-collection-heading" className="font-medium text-gray-900">
                                                                                                Collection
                                                                                            </p>
                                                                                            <ul
                                                                                                role="list"
                                                                                                aria-labelledby="desktop-collection-heading"
                                                                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                            >
                                                                                                {category.collection.map((item) => (
                                                                                                    <li key={item.name} className="flex">
                                                                                                        <a href={item.href} className="hover:text-gray-800">
                                                                                                            {item.name}
                                                                                                        </a>
                                                                                                    </li>
                                                                                                ))}
                                                                                            </ul>
                                                                                        </div>

                                                                                        <div>
                                                                                            <p id="desktop-brand-heading" className="font-medium text-gray-900">
                                                                                                Brands
                                                                                            </p>
                                                                                            <ul
                                                                                                role="list"
                                                                                                aria-labelledby="desktop-brand-heading"
                                                                                                className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                            >
                                                                                                {category.brands.map((item) => (
                                                                                                    <li key={item.name} className="flex">
                                                                                                        <a href={item.href} className="hover:text-gray-800">
                                                                                                            {item.name}
                                                                                                        </a>
                                                                                                    </li>
                                                                                                ))}
                                                                                            </ul>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Popover.Panel>
                                                                </Transition>
                                                            </>
                                                        )}
                                                    </Popover>
                                                ))}

                                                {navigation.pages.map((page) => (
                                                    <a
                                                        key={page.name}
                                                        href={page.href}
                                                        className="flex items-center text-sm font-medium hover:text-gray-800"
                                                    >
                                                        {page.name}
                                                    </a>
                                                ))}
                                            </div>
                                        </Popover.Group>
                                    </div>

                                    {/* Mobile menu and search (lg-) */}
                                    <div className="flex-1 flex items-center lg:hidden">
                                        <button
                                            type="button"
                                            className="-ml-2 p-2 rounded-md"
                                            onClick={() => setMobileMenuOpen(true)}
                                        >
                                            <span className="sr-only">Open menu</span>
                                            <MenuIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        {/* Search */}
                                        <div className={'px-5'}>
                                            <Link href={'search'} >
                                                <SearchIcon className="w-6 h-6 hover:text-safety-red" aria-hidden="true" />
                                            </Link>
                                        </div>

                                    </div>
                                    <div className="flex-1 flex items-center justify-end">
                                        <div className="flex items-center lg:ml-8">
                                            <div className="flex space-x-8">
                                                <div className="hidden lg:flex">
                                                    <span className="sr-only">Search</span>
                                                    <Link href={'search'} >
                                                        <SearchIcon className="w-6 h-6 hover:text-safety-red hover:cursor" aria-hidden="true" />
                                                    </Link>
                                                </div>

                                                <div className="flex">
                                                    <Link href={{pathname:"/account/login"}}>
                                                        <a href="#" className="-m-2 p-2 hover:text-slate-400">
                                                        <span className="sr-only">Account</span>
                                                        <UserIcon className="w-6 h-6" aria-hidden="true" />
                                                    </a>
                                                    </Link>
                                                </div>
                                            </div>

                                            <span className="mx-4 h-6 w-px bg-white lg:mx-6" aria-hidden="true" />

                                            <div className="flow-root">
                                                <Link href={"/cart"}>
                                                    <a href="#" className="group -m-2 p-2 flex items-center">
                                                        <ShoppingCartIcon
                                                            className="flex-shrink-0 h-6 w-6 group-hover:text-slate-400"
                                                            aria-hidden="true"
                                                        />
                                                        <span className="ml-2 text-sm font-medium group-hover:text-gray-800">0</span>
                                                        <span className="sr-only">items in cart, view bag</span>
                                                    </a>
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}