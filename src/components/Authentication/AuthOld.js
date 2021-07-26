import React, { useState } from "react";
import FormAlert from "components/Layout/forms/FormAlert";
import AuthForm from "components/Authentication/AuthFormOld";
import { useRouter } from "next/router";

function Auth(props) {
  const router = useRouter();
  const [formAlert, setFormAlert] = useState(null);

  const handleAuth = (user) => {
    router.push(props.afterAuthPath);
  };

  const handleFormAlert = (data) => {
    setFormAlert(data);
  };

  return (
    <>
      {formAlert && (
        <FormAlert type={formAlert.type} message={formAlert.message} />
      )}

      <AuthForm
        type={props.type}
        typeValues={props.typeValues}
        inputSize={props.inputSize}
        onAuth={handleAuth}
        onFormAlert={handleFormAlert}
      />

      {["signup", "signin"].includes(props.type) && (
        <>
          {props.providers && props.providers.length && (
            <>
            <div className="mt-6">
            <div class="relative">
                <div class="absolute inset-0 flex items-center">
                  <div class="w-full border-t border-gray-300"></div>
                </div>
          
          </div>

              </div>
            </>
          )}

        </>
      )}
    </>
  );
}

export default Auth;
