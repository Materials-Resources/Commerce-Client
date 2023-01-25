import { NextPage } from "next";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { useRouter } from "next/router";

const Reset: NextPage = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [password, setPassword] = useState("");
  const [verifyPassword, setVerifyPassword] = useState("");
  const [isPasswordValid, setPasswordValid] = useState(false);

  const checkPassword = () => {
    if (password == verifyPassword) {
      setPasswordValid(true);
    }
  };
  const updatePassword = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    checkPassword();
    setPassword(event.target.value);
  };
  const updateVerifyPassword = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    checkPassword();
    setVerifyPassword(event.target.value);
  };

  return (
    <>
      <div className="">
        <div className={""}>
          <div
            className={"relative m-auto h-28 w-96 cursor-pointer "}
            onClick={() => router.push("/")}
          >
            <Image
              layout="fill"
              objectFit="contain"
              src="https://imagedelivery.net/ABOKdsGnCenw7al-aeuiGQ/557c1845-e99f-4f39-e7af-6f3f72118c00/p"
              alt="Materials Resources Logo"
            />
          </div>
        </div>

        {user ? (
          <div className="m-auto mt-8 w-3/4 lg:w-1/3 2xl:w-1/4 ">
            <div className="rounded-lg bg-white py-8 px-4 text-black shadow">
              <h2 className="my-6 text-center text-3xl font-bold tracking-tight">
                Hello Collin,
              </h2>
              <p className="text-light my-3 text-center text-xl">
                Enter a new password here
              </p>
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-raisin-black focus:outline-none focus:ring-raisin-black sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                      className="block w-full rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-raisin-black focus:outline-none focus:ring-raisin-black sm:text-sm"
                    />
                  </div>
                </div>
                <div className={"w-full"}>
                  {isPasswordValid ? (
                    <></>
                  ) : (
                    <label
                      className={
                        "border-l-2 border-red-600 bg-red-100 p-2 text-red-900"
                      }
                    >
                      Please verify that both passwords are the same
                    </label>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="hover:bg-calm-blue m-auto flex w-52 justify-center rounded-md border border-transparent bg-safety-red py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Reset Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="m-auto mt-8 w-3/4 lg:w-1/2 2xl:w-1/3 ">
            <div className="rounded-lg bg-white py-8 px-4 text-black shadow">
              <h2 className="my-6 text-center text-3xl font-bold tracking-tight">
                Hi There!
              </h2>
              <p className="text-l text-light my-3 text-center">
                {`That link is invalid, try signing in or request a new password reset email!`}
              </p>
              <div
                className={
                  "border-laurel m-auto mt-4 flex w-9/12 flex-col border-t-2 py-5 lg:flex-row"
                }
              >
                <button
                  onClick={() => router.push("/account/login")}
                  className={
                    "bg-calm-blue hover:bg-calm-blue my-2 mx-auto flex w-52 justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  }
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Reset;
