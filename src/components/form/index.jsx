import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";

export function Form({ data, onSubmit, schema, title, loading, login }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const renderFormControl = (key, field) => {
    switch (field.type) {
      case "text":
      case "email":
      case "number":
      case "password":
        return (
          <Input
            key={key}
            name={key}
            placeholder={field.label}
            type={field.type}
            validationMsg={field.validationMsg}
            register={register}
            errors={errors}
          />
        );
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Object.entries(data).map(([key, field]) =>
        renderFormControl(key, field)
      )}
      {login ? (
        <div className="mt-5">
          <Link
            to="/forgot-password"
            className="text-[#c793e8] text-sm font-[500]"
          >
            Forgot password?
          </Link>
        </div>
      ) : (
        ""
      )}
      <Button title={title} loading={loading} />
    </form>
  );
}
export const Input = ({
  name,
  placeholder,
  validationMsg,
  type,
  register,
  errors,
  ...rest
}) => {
  const errorMessage = errors[name]?.message;
  return (
    <div>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="border-b w-full border-[#EBCBFF] outline-none bg-transparent text-white my-3 py-4"
        {...register(name, { required: validationMsg })}
        {...rest}
      />
      {errorMessage && <p className="text-red-500 text-xs">{errorMessage}</p>}
    </div>
  );
};

export const Button = ({ title, loading }) => {
  return loading ? (
    <button
      className="bg-[#901AD8] py-3 px-1 rounded-md text-white font-semibold w-full mt-5 flex items-center justify-center"
      disabled={loading}
    >
      <span className="loading loading-spinner"></span>
      <span>Loading...</span>
    </button>
  ) : (
    <button
      type="submit"
      className="bg-[#901AD8] py-3 px-1 rounded-md text-white font-semibold w-full mt-5"
    >
      {title}
    </button>
  );
};

export const NoticeMessage = ({ message, link, linkText }) => {
  return (
    <p className="">
      {message}{" "}
      <span className="bg-[#4E4E4E] py-2 px-2 text-white rounded-md ml-8">
        <Link to={link}>{linkText}</Link>
      </span>
    </p>
  );
};
