import React, { useState } from "react";

export const SignupUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: "",
  });

  const [passwordMatch, setPasswordMatch] = useState(true);

  if (name == "confirmPassword") {
    setPasswordMatch(value === formData.password);
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setPasswordMatch(false);
    } else {
      console.log("Password does not match");
    }
  };

  return (
    <>
      <div className="flex justify-between items-center container mx-auto ">
        <h1 className="mx-auto m-8 text-2xl text-zinc-950">Signup as User</h1>
      </div>
      <div className="justify-center mx-auto">
        <form className="flex flex-col  w-1/2 mx-auto">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className=" mx-auto size-min border-2 border-zinc-950 p-2 m-2"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className=" mx-auto border-2 border-zinc-950 p-2 m-2"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className=" mx-auto border-2 border-zinc-950 p-2 m-2"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className={`mx-auto border-2 border-zinc-950 p-2 m-2${
              !passwordMatch ? "border-red-500" : ""
            }`}
            required
          />
          {!passwordMatch && (
            <p className="text-red-500 mx-auto">Password does not match</p>
          )}
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className=" mx-auto border-2 border-zinc-950 p-2 m-2"
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            className=" mx-auto border-2 border-zinc-950 p-2 m-2"
            required
          />
          <button
            type="submit"
            onClick={handleSubmit}
            className=" mx-auto bg-zinc-950 text-white p-2 m-2"
          >
            Signup
          </button>
        </form>
      </div>
    </>
  );
};
