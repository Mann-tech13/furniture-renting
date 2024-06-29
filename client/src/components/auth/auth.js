import React, { useState } from "react";
import Modal from "../common/modal";
import { login } from "../../apis/auth";

function Auth({setAuthModal}) {
  const [isMember, setIsMember] = useState(true);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const onAuthClick = async() => {
    if(isMember){
      const data = {
        email: email,
        password: password,
      }
      const status = await login(data)
      setAuthModal(false)
      window.localStorage.setItem('accessToken', status?.data?.accessToken)
    }
  }

  return (
    <Modal setAuthModal={setAuthModal}>
      <div className="flex min-h-full flex-col justify-center px-6 pb-12 pt-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign {isMember ? "in" : "up"} to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6" action="#" method="POST">
            {!isMember ? (
              <>
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  onChange={(e) => setEmail(e.target.value)}

                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type=""
                className="flex w-full justify-center rounded-md bg-themeRed px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => onAuthClick()}
              >
                Sign in
              </button>
            </div>
          </div>

          <div className="mt-10 text-center text-sm text-gray-500">
            Not a member? &nbsp;
            <p
              href="#"
              className="font-semibold leading-6 text-themeRed cursor-pointer"
              onClick={() => setIsMember(!isMember)}
            >
              {isMember ? "Register" : "Login"}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Auth;
