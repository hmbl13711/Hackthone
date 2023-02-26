import React, { useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase/app";
// import "firebase/auth";
import style from "../styles/SignIn.module.css";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/config";

const SigninPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleEmailPasswordSignin = async (event) => {
    event.preventDefault();
try {
  signInWithEmailAndPassword(auth , email , password)
  alert("ok")
} 

catch (error) {
  alert(error)
}
  };

  const handleNotSignedUp = () => {
    router.push("/signin");
  };

  return (
    <div className={style.signInFormPage}>
      <div className={style.signInForm}>
        <h1>Sign in</h1>
        {error && <p>{error}</p>}
        <form onSubmit={handleEmailPasswordSignin}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </label>
          <br />
          <br />
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
        <p>
          Not signed up yet?{" "}
          <a href="#" onClick={handleNotSignedUp}>
            Sign up here
          </a>
        </p>
      </div>
    </div>
  );
};

export default SigninPage;
