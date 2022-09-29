import type { NextPage } from 'next'
import Image from "next/image";
import header from "../public/images/custom/header.webp"

const Custom: NextPage = () => {


    return (
        <>
            <div className={'relative w-full h-[600px]'}>
                <Image
                    src={header}
                    objectFit={'cover'}
                    objectPosition={'bottom'}
                    layout={'fill'}
                />
                <div className={'absolute top-0 bottom-0 w-full flex flex-col justify-center '}>
                    <div>
                        <h1 className={'text-center text-6xl  text-laurel'}>Custom Fabrication</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Custom