import { NextComponentType } from 'next';
import React, { Fragment, SetStateAction, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react';
import { KeyIcon } from '@heroicons/react/24/outline';

export const AccountReset: NextComponentType =() => {
    const [open, setOpen] = useState(false);

    const processPasswordReset = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        fetch('http://localhost:3001/accounts/reset',
            {
                method: 'POST',
                headers: new Headers({'content-type': 'application/json'}),
                body: JSON.stringify({email: resetEmail})
            })
            .then(() => {
                setOpen(false);
                setResetEmail('');
            })

    }
    let [resetEmail, setResetEmail] = useState('');

    // const processLogin = (event: { preventDefault: () => void; }) => {
    //     event.preventDefault();
    //     fetch('http://localhost:3001/accounts/reset', {method: 'POST'})
    //         .then(() => {
    //             setOpen(false);
    //             setResetEmail('');
    //         })
    //
    // }



    const updateResetEmail = (event: { target: { value: SetStateAction<string>; }; }) => {
        setResetEmail(event.target.value)
    }

    return(
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-black px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                                    <div>
                                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-raisin-black">
                                            <KeyIcon className="h-6 w-6 text-laurel" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-5">
                                            <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                                Forgot your password?
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Enter your email here to receive a password reset email.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={'pt-6'}>

                                    </div>
                                    <div className="mt-5 sm:mt-6">
                                        <form onSubmit={processPasswordReset}>
                                            <input placeholder={'email@domain.org'}
                                                   type={'email'}
                                                   required
                                                   onChange={updateResetEmail}
                                                   value={resetEmail}
                                                   className={'p-2 my-5 w-full rounded-md text-center border-raisin-black border-2 focus:ring-laurel'}/>
                                            <button
                                                type="submit"
                                                className="inline-flex w-full justify-center rounded-md border border-transparent bg-safety-red px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-raisin-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                                            >
                                                Send Email
                                            </button>
                                        </form>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}