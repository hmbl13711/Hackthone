import React, { useState } from 'react';
import { useRouter } from 'next/router';
import firebase from 'firebase/app';
import 'firebase/auth';
import style from "../styles/SignUp.module.css"
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../config/config';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleSignup = async (event) => {
    event.preventDefault();
try {
  createUserWithEmailAndPassword(auth , email , password)
} catch (error) {
  alert(error)
}
  };

  const userSignUp = (event) => {
    event.preventDefault();
    handleSignup(event);
  }

  return (
    <div className={style.signUpFormPage}>
    <div className={style.signUpForm}>
      <h1>Sign up</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSignup}>
        <label>
          Email:
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label>
          Pass:
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <br />
        <br />
        <button type="submit" className="btn btn-primary" onClick={userSignUp}>Sign up</button>
      </form>
    </div>
    </div>
  );
};

export default SignupPage;
