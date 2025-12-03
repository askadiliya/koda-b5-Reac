import React, { useState } from "react";

function FormLogin() {
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const submitHandler = (event) => {
    event.preventDefault();

    Object.assign({email})
    Object.assign({password})
    if (email !== "" && password !== "") {
      console.log(`email anda${email} dan password anda ${password}`);
    }
    //setEmail("")
    //setPasword("")
  };

  return (
    <>
      <form
        noValidate
        onSubmit={submitHandler}
        className="flex flex-col bg-[#FFFFFF] p-10 rounded-md shadow-md"
      >
        <label htmlFor="email" className="block mt-5">
          email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-[10px] mt-[5px] mb-[20px] border border-[#ccc] rounded box-border text-[16px]"
        />
        <label htmlFor="pwd" className="block mt-5">
          password
        </label>
        <input
          type="password"
          name="pwd"
          id="pwd"
          value={password}
          onChange={(e) => setPasword(e.target.value)}
          className="w-full p-[10px] mt-[5px] mb-[20px] border border-[#ccc] rounded box-border text-[16px]"
        />
        <button
          type="submit "
          className="w-full p-[12px] bg-[#007bff] text-white border-none rounded cursor-pointer text-[18px] font-bold mt-[10px]"
        >
          Join For Free{" "}
        </button>
        <div className=" flex justify-center mt-5">
          <p>Already have an account?</p>
          <a href="">Login</a>
        </div>
        <div className="flex justify-center">
          <img src="img/google.svg" alt="" srcSet="" />
          <img src="img/facebook.svg" alt="" srcSet="" />
        </div>
      </form>
    </>
  );
}

export default FormLogin;
