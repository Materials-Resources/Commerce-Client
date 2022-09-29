import { NextPage } from 'next';
import Image from 'next/image';
import { SetStateAction, useState } from 'react';
import { useRouter } from 'next/router';

const Reset: NextPage = () => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState('');
    const [verifyPassword, setVerifyPassword] = useState('');
    const [isPasswordValid, setPasswordValid] = useState(false);

    const checkPassword = () => {
        if(password == verifyPassword) {setPasswordValid(true)}
    }
    const updatePassword = (event: { target: { value: SetStateAction<string>; }; }) => {
        checkPassword()
        setPassword(event.target.value)
    }
    const updateVerifyPassword = (event: { target: { value: SetStateAction<string>; }; }) => {
        checkPassword()
        setVerifyPassword(event.target.value)
    }

    return(
        <>

            <div className="">
                <div className={''}>
                    <div className={'m-auto h-28 w-96 relative cursor-pointer '} onClick={() =>  router.push('/')}>
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src="https://imagedelivery.net/ABOKdsGnCenw7al-aeuiGQ/557c1845-e99f-4f39-e7af-6f3f72118c00/p"
                            alt="Materials Resources Logo"
                        />
                    </div>
                </div>

                {user? <div className="mt-8 w-3/4 m-auto lg:w-1/3 2xl:w-1/4 ">
                        <div className="bg-white py-8 px-4 shadow rounded-lg text-black">
                            <h2 className="my-6 text-center text-3xl tracking-tight font-bold">Hello Collin,</h2>
                            <p className="my-3 text-center text-xl text-light">Enter a new password here</p>
                            <form className="space-y-6" action="#" method="POST">
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            onChange={updatePassword}
                                            value={password}
                                            autoComplete="current-password"
                                            required
                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-raisin-black focus:border-raisin-black sm:text-sm"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                        Confirm Password
                                    </label>
                                    <div className="mt-1">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            onChange={updateVerifyPassword}
                                            value={verifyPassword}
                                            autoComplete="current-password"
                                            required
                                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-raisin-black focus:border-raisin-black sm:text-sm"
                                        />
                                    </div>
                                </div>
                                <div className={'w-full'}>
                                    {isPasswordValid?
                                        <></> :
                                        <label className={'border-red-600 border-l-2 p-2 bg-red-100 text-red-900'}>
                                            Please verify that both passwords are the same
                                        </label>
                                    }
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        className="w-52 m-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-safety-red hover:bg-calm-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Reset Password
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div> :
                    <div className="mt-8 w-3/4 m-auto lg:w-1/2 2xl:w-1/3 ">
                        <div className="bg-white py-8 px-4 shadow rounded-lg text-black">
                            <h2 className="my-6 text-center text-3xl tracking-tight font-bold">Hi There!</h2>
                            <p className="my-3 text-center text-l text-light">
                                {`That link is invalid, try signing in or request a new password reset email!`}
                            </p>
                            <div className={'w-9/12 m-auto border-laurel border-t-2 py-5 mt-4 flex flex-col lg:flex-row'}>
                                <button
                                    onClick={() => router.push('/account/login')}
                                    className={'w-52 my-2 mx-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-calm-blue hover:bg-calm-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'}>
                                    Sign In
                                </button>
                            </div>
                        </div>

                    </div>
                }
            </div>

        </>
    )
}
export default Reset;