import React, { Fragment, useState } from 'react'
import { Combobox, Dialog, Menu, Transition } from '@headlessui/react'
import { NextComponentType } from 'next';
import { UsersIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { gql, useQuery } from '@apollo/client';
import { ArchiveBoxIcon } from '@heroicons/react/20/solid';

function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ')
}

const people = [
    { id: 1, name: 'Leslie Alexander', url: '#' },
    // More people...
]

export const SearchBox: NextComponentType =(open) => {
    const [searchOpen, setSearchOpen] = useState(false)
    const [ selected, setSelected ] = useState('')

    const [selectedPerson, setSelectedPerson] = useState(people[0])
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? []
            : people.filter((person) => {
                return person.name.toLowerCase().includes(query.toLowerCase())
            })

    const GET_SEARCH_RESULTS = gql`
        query($query: String!) {
            searchWithSuggestions(searchValue: $query) {
                item_desc {
                    raw
                }
            }
        }
    `;
    const { loading, error, data  } = useQuery(GET_SEARCH_RESULTS, {
        variables: {
            query: query,
        },
    })
    console.log(data)

    return (
        <>
            <div onClick={()=>setSearchOpen(true)}>
                <MagnifyingGlassIcon className="mx-auto h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <Transition.Root show={searchOpen} as={Fragment} afterLeave={() => setQuery('')} appear>
                <Dialog as="div" className="relative z-10" onClose={setSearchOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-25 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="mx-auto max-w-xl transform rounded-xl bg-calm-blue p-2 shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                                {/*<Combobox onChange={(person) => (window.location = 'http://localhost:3000/search/Results')}>*/}
                                {/*    <Combobox.Input*/}
                                {/*        className="w-full rounded-md border-0 bg-gray-100 px-4 py-2.5 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"*/}
                                {/*        placeholder="Search..."*/}
                                {/*        onChange={(event) => setQuery(event.target.value)}*/}
                                {/*    />*/}

                                {/*    {data && (*/}
                                {/*        <Combobox.Options*/}
                                {/*            static*/}
                                {/*            className="-mb-2 max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-white"*/}
                                {/*        >*/}
                                {/*            {data.searchWithSuggestions.map((suggestion) => (*/}
                                {/*                <Combobox.Option*/}
                                {/*                    key={suggestion.item_desc.raw}*/}
                                {/*                    value={suggestion.item_desc.raw}*/}
                                {/*                    className={({ active }) =>*/}
                                {/*                        classNames(*/}
                                {/*                            'cursor-default select-none rounded-md px-4 py-2',*/}
                                {/*                            active && 'bg-laurel text-white'*/}
                                {/*                        )*/}
                                {/*                    }*/}
                                {/*                >*/}
                                {/*                    {suggestion.item_desc.raw}*/}
                                {/*                </Combobox.Option>*/}
                                {/*            ))}*/}
                                {/*        </Combobox.Options>*/}
                                {/*    )}*/}

                                {/*    /!*{data !== '' && data.searchWithSuggestions === 0 && (*!/*/}
                                {/*    /!*    <div className="py-14 px-4 text-center sm:px-14">*!/*/}
                                {/*    /!*        <ArchiveBoxIcon className="mx-auto h-6 w-6 text-white" aria-hidden="true" />*!/*/}
                                {/*    /!*        <p className="mt-4 text-sm text-white">No items found using that search term.</p>*!/*/}
                                {/*    /!*    </div>*!/*/}
                                {/*    /!*)}*!/*/}
                                {/*</Combobox>*/}
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>


    )
}
