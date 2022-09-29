import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, BellIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { NextComponentType } from 'next';
import { SearchBox } from './SearchBox';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronDownIcon, ShoppingBagIcon } from '@heroicons/react/20/solid';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
    { name: 'Home', route: '/'},
    { name: 'Catalog', route: '/Catalog'},
    { name: 'Custom', route: '/Custom'},
    { name: 'About', route: '/About'},
]
const userNavigation = [
    { name: 'Your Orders', href: '/account/Orders' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export const Navigation: NextComponentType = () => {
    const router = useRouter();

    return (
        <Disclosure as="header" className="bg-raisin-black">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-8xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
                        <div className="relative flex flex-row items-center h-28 justify-between">
                            <div className={'mr-0 flex flex-row justify-end items-end'}>
                                <div className={'p-5'}>
                                    <SearchBox />
                                </div>
                                <div className={'p-5'}>
                                    <Link href={'/checkout/cart'}>
                                        <ShoppingBagIcon className={'w-7 h-7'} />
                                    </Link>
                                </div>
                            </div>
                            <div className="relative z-10 flex">
                                <div className={'hidden lg:flex'}>
                                    <img
                                        src="https://imagedelivery.net/ABOKdsGnCenw7al-aeuiGQ/557c1845-e99f-4f39-e7af-6f3f72118c00/p"
                                        alt="Picture of the something nice"
                                        className={'h-20'}
                                    />
                                </div>
                                <div className={'flex lg:hidden justify-center'}>
                                    <img
                                        src="https://imagedelivery.net/ABOKdsGnCenw7al-aeuiGQ/10b62db2-d563-45b4-0d6e-70492acab200/p"
                                        alt="Picture of the something nice"
                                        className={'h-10'}
                                    />
                                </div>
                            </div>
                            <div className="relative z-10 flex items-center lg:hidden">
                                {/* Mobile menu button */}

                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            {/*<div className={'mr-1'}>*/}
                            {/*    <SearchBox />*/}
                            {/*</div>*/}

                            <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-4 flex-shrink-0">
                                    <div className={'flex flex-row items-center'}>


                                        <Menu.Button className="flex rounded-lg p-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="sr-only">Open user menu</span>
                                            <div className={'flex flex-row justify-center'}>
                                                <p className={'font-bold'}>Hi, Collin</p>
                                                <ChevronDownIcon className={'w-5 h-5'}/>
                                            </div>

                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 my-4 py-5 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {userNavigation.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <Link
                                                            href={item.href}

                                                        >
                                                            <a
                                                                className={classNames(
                                                                    router.pathname == item.href ? 'bg-gray-100' : '',
                                                                    'block py-2 px-4 text-sm text-gray-700'
                                                                )}>
                                                                {item.name}
                                                            </a>

                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                        <nav className="hidden lg:flex lg:space-x-8 lg:py-2" aria-label="Global">
                            {navigation.map((item) => (
                                <Link
                                    href={item.route}
                                    key={item.route}
                                >
                                    <a className={classNames(
                                        router.pathname == item.route ? 'bg-calm-blue': 'bg-none',
                                        'py-2 px-3 rounded-md'
                                    )}>
                                        {item.name}
                                    </a>
                                </Link>


                            ))}
                        </nav>
                    </div>

                    <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {navigation.map((item) => (
                                <Link key={item.route} href={item.route}>
                                    <a className={classNames(
                                        router.pathname == item.route ? 'bg-calm-blue': 'bg-none',
                                        'block rounded-md py-2 px-3 text-base font-medium'
                                    )}>
                                        {item.name}
                                    </a>
                                </Link>

                                    // <Disclosure.Button
                                    //     as="link"
                                    //     key={item.route}
                                    //     href={item.route}
                                    //     className={classNames(
                                    //         router.pathname == item.route ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    //         'block rounded-md py-2 px-3 text-base font-medium'
                                    //     )}
                                    //     // aria-current={router.pathname == item.route ? 'page' : undefined}
                                    // >
                                    //     {item.name}
                                    // </Disclosure.Button>
                            ))}
                        </div>
                        <div className="border-t border-gray-700 pt-4 pb-3">
                            <div className="flex items-center px-4">
                                <div className="flex-shrink-0">
                                    <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                </div>
                                <div className="ml-3">
                                    <div className="text-base font-medium text-white">{user.name}</div>
                                    <div className="text-sm font-medium text-gray-400">{user.email}</div>
                                </div>
                                <button
                                    type="button"
                                    className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                {userNavigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className="block rounded-md py-2 px-3 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}