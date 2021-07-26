import React from "react";

function FormField(props) {
  const { error, type, inputRef, ...inputProps } = props;
//check this to make sure it works in future, form control removed
  return (
    <>
      {props.label && <label>{props.label}</label>}

      <input
        as={type === "textarea" ? "textarea" : "input"}
        type={type === "textarea" ? undefined : type}
        isInvalid={error ? true : undefined}
        ref={inputRef}
        {...inputProps}
      />

      {error && (
        <form type="invalid" className="text-left">
          {error.message}
        </form>
      )}
    </>
  );
}

export default FormField;
