import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { useForm } from "react-hook-form";

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {};
  return (
    <Layout title="CoolMinds">
      <div
        className="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-purple-700 to-amber-700"
      >
        <form
          className="p-10 bg-white rounded-xl drop-shadow-lg space-y-5"
          onSubmit={handleSubmit(submitHandler)}
        >
          <p className="text-gray-800 font-bold text-3xl pb-6 ">
            Cool<span className="text-blue-600">minds</span>
          </p>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Please enter email",
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9]+$/i,
                  message: "Please ener valid email",
                },
              })}
              className="w-96 px-3 py-2 rounded-md border border-slate-400 "
              id="email"
              autoFocus
            ></input>
            {errors.email && (
              <div className="text- -500">{errors.email.message} </div>
            )}
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password">password</label>
            <input
              type="password"
              {...register("password", {
                required: "Please enter Password",
                minLength: {
                  value: 3,
                  message: "password is more than 5 characters",
                },
              })}
              className="w-96 px-3 py-2 rounded-md border border-slate-400  "
              id="password"
              autoFocus
            ></input>
            {errors.password && (
              <div className="text- -500">{errors.password.message} </div>
            )}
          </div>
          <button
            className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in item-center"
            type="submit"
          >
            Login
          </button>
          <div className="mb-4 py-2">
            Don't have an account ? &nbsp;
            <Link href="register">Register</Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}
