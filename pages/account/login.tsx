import { NextPage } from 'next';
import Image from 'next/image';

const Login: NextPage =() => {
    return(
        <>
            <div className="">
                <div className={''}>
                    <div className={'m-auto h-28 w-96 relative'}>
                        <Image
                            layout="fill"
                            objectFit="contain"
                            src="https://imagedelivery.net/ABOKdsGnCenw7al-aeuiGQ/557c1845-e99f-4f39-e7af-6f3f72118c00/p"
                            alt="Materials Resources Logo"
                        />
                    </div>
                    <h2 className="mt-6 text-center text-3xl tracking-tight font-bold">Sign in to your account</h2>
                </div>


                <div className="mt-8 w-1/2 m-auto ">
                    <div className="bg-white py-8 px-4 shadow rounded-lg">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-raisin-black focus:border-raisin-black sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-raisin-black focus:border-raisin-black sm:text-sm"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-raisin-black focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-calm-blue hover:text-indigo-500">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-52 m-auto flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-safety-red hover:bg-calm-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;