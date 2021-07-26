import validator from "validator";
import { useState } from "react";

 export default function validateSignup( props) {
  const { payload, ...otherProps } = props;

  const [errors, setErrors] = useState("");

  // const errors = {};
  const [messageValidate, setmessageValidate] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  if (
    !props.payload ||
    typeof props.payload.name !== "string" ||
    props.payload.name.trim().length === 0
  ) {
    setIsFormValid(false);
    setErrors("Please provide a user name.");
  }

  if (
    !props.payload ||
    typeof props.payload.email !== "string" ||
    !validator.isEmail(props.payload.email)
  ) {
    setIsFormValid(false)
    setErrors("Please provide a correct email address.");
  }

  if (!props.payload || props.payload.confirmEmail !== props.payload.email) {
    setIsFormValid(false)
    setErrors("Email confirmation doesn't match.");
  }

  if (!isFormValid) {
    setmessageValidate("Check the form for errors.") 
  }

  return {
   isFormValid,
    messageValidate,
    errors
  };
};
