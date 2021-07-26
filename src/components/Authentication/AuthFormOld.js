import React, { useState } from "react";
// import { useAuth } from "util/auth.js";
import { useForm } from "react-hook-form";
import FormField from "components/Layout/forms/FormField";

function AuthForm(props) {
  // const onSubmit = (data) => {
  //   alert(JSON.stringify(data));
  // };

  const [pending, setPending] = useState(false);
  const { handleSubmit, register, errors, getValues } = useForm();

  const submitHandlersByType = {
    signup: ({ email, pass }) => {
      useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, pass }),
        };
        fetch(
          "https://us-central1-blinkapp-684c1.cloudfunctions.net/fakeAuth",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, pass }),
          }
        )
          .then((response) => response.json())
          .then((data) => setPostId(data.id));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
      }, []);
      // return auth.signup(email, pass).then((user) => {
      //   // Call auth complete handler
      //   props.onAuth(user);
      // });
    },
  };

  // Handle form submission
  const onSubmit = ({ email, pass }) => {
    // Show pending indicator
    setPending(true);

    // Call submit handler for auth type
    submitHandlersByType[props.type]({
      email,
      pass,
    })
      .catch((error) => {
        // Show error alert message
        props.onFormAlert({
          type: "error",
          message: error.message,
        });
      })
      .finally(() => {
        // Hide pending indicator
        setPending(false);
      });
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Email Address
            </label>
            {["signup"].includes(props.type) && (
              <form className="mt-1 rounded-md shadow-sm" controlId="formEmail">
                <FormField
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  error={errors.email}
                  inputRef={register({
                    required: "Please enter an email",
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </form>
            )}
          </div>
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Confirm Address
            </label>
            {["signup"].includes(props.type) && (
              <form className="mt-1 rounded-md shadow-sm" controlId="formEmail">
                <FormField
                  type="confirmEmail"
                  name="confirmEmail"
                  placeholder="Confirm Email"
                  error={errors.email}
                  inputRef={register({
                    required: "Please enter an email",
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </form>
            )}
          </div>
          <div>
            <label
              for="email"
              className="block text-sm font-medium leading-5 text-gray-700"
            >
              Password
            </label>
            {["signup"].includes(props.type) && (
              <form
                className="mt-1 rounded-md shadow-sm"
                controlId="formPassword"
              >
                <FormField
                  name="pass"
                  type="password"
                  placeholder="Enter Password"
                  error={errors.pass}
                  inputRef={register({
                    required: "Please enter a password",
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </form>
            )}
          </div>

          <div>
            {["signup"].includes(props.type) && (
              <form
                className="mt-1 rounded-md shadow-sm"
                controlId="formConfirmPass"
              >
                <label
                  for="email"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Confirm Password
                </label>
                <FormField
                  name="confirmPass"
                  type="password"
                  placeholder="Confirm Password"
                  error={errors.confirmPass}
                  inputRef={register({
                    required: "Please enter your password again",
                    validate: (value) => {
                      if (value === getValues().pass) {
                        return true;
                      } else {
                        return "This doesn't match your password";
                      }
                    },
                  })}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                />
              </form>
            )}
          </div>

          <div className="mt-6">
            <span className="block w-full rounded-md shadow-sm">
              <button
                className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-pink-500 to-orange-500 hover:from-teal-600 hover:to-green-300 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                variant="primary"
                block={true}
                size={props.inputSize}
                type="submit"
                disabled={pending}
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
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthForm;
