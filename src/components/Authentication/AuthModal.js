/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import FormAlert from "./FormAlert.js";
import { LockClosedIcon } from "@heroicons/react/solid";
import { XCircleIcon } from '@heroicons/react/solid'

import { useForm } from "react-hook-form";
// import { useRouter } from "next/router";
import validateSignUpForm from "./validateSignup.js"
// import AuthForm from "./AuthForm.js"

export default function AuthModal() {
  const [open, setOpen] = useState(false);

  const [pending, setPending] = useState(false);
  // const { handleSubmit, register, errors, getValues } = useForm();
  const [user, setUser] = useState({ name: "Sign Up!" });
  const [formAlert, setFormAlert] = useState(null);

  console.log(user);

  // Handle form submission
  const submit = (e) => {
    setPending(true);
    //validation next.
    //validateSignUpForm(user.name,user.email,user.confirmEmail)
    if (!isFormValid) {
      setFormAlert({ type: errors, message: messageValidate });
    }
  
    console.log({ name: user.name, email: user.email });
    const payload = JSON.stringify({
      email: user.email,
      name: user.name,
    });

    console.log(payload);

    e.preventDefault();
    fetch("https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth", {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },

      body: payload,
    })
      .then((res) => res.json())
      .then((json) => setUser(json))
      .catch((error) => {
        // Show error alert message
        console.log(error);
        setFormAlert({ type: "error", message: "didn't work!" });
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };
  // setUser(name="")

  return (
    <>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setOpen(true)}
      >
        Signup
      </button>
      {open ? (
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            static
            className="fixed z-10 inset-0 overflow-y-auto"
            open={open}
            onClose={setOpen}
          >
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                  <>
                  {formAlert ? (
                    <FormAlert  type={formAlert.type} message={formAlert.message} />
         
        ) : (
                    <div className=" flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                      <div className="max-w-md w-full space-y-8">
                        <div>
                          <img
                            className="mx-auto h-12 w-auto"
                            src="/static/example_photos/fullheaderlogo.png"
                            alt="Workflow"
                          />
                          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Create your account
                          </h2>
                        </div>

                        <form
                          className="mt-8 space-y-6"
                          onSubmit={submit}
                          method="POST"
                        >
                          <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                          />
                          <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                              <label htmlFor="Name" className="sr-only">
                                Name
                              </label>
                              <input
                                type="text"
                                name="user[name]"
                                id="name"
                                value={user.name}
                                onChange={(e) =>
                                  setUser({ ...user, name: e.target.value })
                                }
                                autoComplete="Name"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Name"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="email-address"
                                className="sr-only"
                              >
                                Email address
                              </label>
                              <input
                                id="email"
                                name="user[email]"
                                value={user.email}
                                onChange={(e) =>
                                  setUser({ ...user, email: e.target.value })
                                }
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="confirm-email"
                                className="sr-only"
                              >
                                Confirm Email address
                              </label>
                              <input
                                id="confirmEmail"
                                name="user[confirmEmail]"
                                value={user.confirmEmail}
                                onChange={(e) =>
                                  setUser({ ...user, confirmEmail: e.target.value })
                                }
                                autoComplete="confirmEmail"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm Email Address"
                              />
                            </div>
                          </div>

                          <div>
                            <button
                              type="submit"
                              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              disabled={pending}
                              onClick={submit}
                            >
                              {!pending && (
                                <div>
                                  {" "}
                                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon
                                      className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                      aria-hidden="true"
                                    />
                                  </span>
                                  Sign Up
                                </div>
                              )}

                              {pending && (
                                <>
                                  <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                  >
                                    <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                    ></circle>
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    ></path>
                                  </svg>
                                  <span>Please wait...</span>
                                
                                </>
                              )}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
         )} </>{" "}
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      ) : null}
    </>
  );
}
