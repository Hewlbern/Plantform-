import FormAlert from "./FormAlert.js"
import { Fragment, useState } from "react";

  
  export default function AuthForm(props) {
    const [pending, setPending] = useState(false);
    // const { handleSubmit, register, errors, getValues } = useForm();
    const [user, setUser] = useState({ name: "Sign Up!" });
    const [formAlert, setFormAlert] = useState(null);
  
    console.log(user);
  
    // Handle form submission
    const submit = (e) => {
      setPending(true);
      console.log({ name: user.name, email: user.email });
      const payload = JSON.stringify({ "email": user["email"], "name": user["name"] });
  
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
  
    return (
      <>
        {formAlert ? (
          <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
            <FormAlert type={formAlert.type} message={formAlert.message} />
          </div>
        ) : (
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Use a permanent address where you can receive mail.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <form onSubmit={submit}>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Full name
                  </label>
                  <div className="mt-1 shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md">
                    <input
                      type="text"
                      name="user[name]"
                      id="name"
                      value={user.name}
                      onChange={(e) => setUser({ ...user, name: e.target.value })}
                      autoComplete="given-name"
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
  
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="user[email]"
                      value={user.email}
                      onChange={(e) =>
                        setUser({ ...user, email: e.target.value })
                      }
                      autoComplete="email"
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
  
                <div className="sm:col-span-4">
                  <label
                    htmlFor="confirmEmail"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm email
                  </label>
                  <div className="mt-1">
                    <input
                      id="confirmEmail"
                      name="confirmEmail"
                      type="confirmEmail"
                      autoComplete="confirmEmail"
                      className="shadow-sm focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="mt-5 sm:mt-6">
              <button
                type="submit"
                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
                disabled={pending}
                onClick={submit}
              >
                {!pending && <span>Submit</span>}
  
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
          </div>
        )}
      </>
    );
  };
  