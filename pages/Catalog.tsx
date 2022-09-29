import type { NextPage } from 'next'
import { ArrowRightIcon } from '@heroicons/react/20/solid';

const categories = [
    {
        'name': 'Abrasives'
    },
    {
        'name': 'Ceramic Fiber Insulation'
    },
    {
        'name': 'Material Handling'
    },
    {
        'name': 'Tools'
    },
    {
        'name': 'Office Supplies'
    }
]
const files = [
    {
        title: '3M',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'Pyramex',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'Miluakee',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    {
        title: 'Armour Guys',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },{
        title: 'Rigid',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },


    // More files...
]

const Catalog: NextPage = () => {


    return (
        <>
            <div className={'p-10 max-w-6xl mx-auto'}>
                <div className={'flex flex-row justify-between'}>
                    <div>
                        <h1 className={'py-5 text-lg font-bold'}>Brands</h1>
                    </div>
                    <div className={'py-5 flex flex-row items-center'}>
                        <h1 className={'text-md font-light break-words'}>View all</h1>
                        <ArrowRightIcon className={'w-5'}/>
                    </div>
                </div>
                <div role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                    {files.map((file) => (
                        <div key={file.source} className="relative bg-safety-red rounded-xl">
                            <div className="group aspect-square block w-full overflow-hidden rounded-t-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                                <img src={file.source} alt="" className="pointer-events-none object-contain group-hover:opacity-75 w-full" />
                                <button type="button" className="absolute inset-0 focus:outline-none">
                                    <span className="sr-only">View details for {file.title}</span>
                                </button>
                            </div>
                            <p className="py-5 pointer-events-none mt-2 block text-center truncate text-lg font-medium text-white">{file.title}</p>
                        </div>
                    ))}
                </div>
                <div className={'flex flex-row justify-between'}>
                    <div>
                        <h1 className={'py-5 text-lg font-bold'}>Categories</h1>
                    </div>
                    <div className={'py-5 flex flex-row items-center'}>
                        <h1 className={'text-md font-light break-words'}>View all</h1>
                        <ArrowRightIcon className={'w-5'}/>
                    </div>
                </div>
                <div role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {categories.map((category) => (
                        <div key={category.name} className="relative bg-mountbatten rounded-xl">
                            <div className="group W-100 block w-full overflow-hidden ">
                                <button type="button" className="absolute inset-0 focus:outline-none">
                                    <span className="sr-only">View details for {category.name}</span>
                                </button>
                            </div>
                            <p className="py-5 pointer-events-none mt-2 block text-center truncate text-lg font-medium text-white">{category.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default Catalog