import { getAuth, signOut } from "firebase/auth";
import style from "../styles/Navbar.module.css";
import auth, { db } from '../config/config'
import { useRouter } from "next/router";
import { collection, getDocs } from "firebase/firestore";

const Navbar = () => {

  const router = useRouter();
  const authInstance = getAuth(auth);

  const enventHandler = () => {
    router.push("/Event");
  };

  const loginHandler = () => {
    router.push("/SignIn");
  };

  const signupHandler = () => {
    router.push("/SignUp");
  };

  const logoutHandler = () => {
    signOut(authInstance)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getdata =  () => {
    router.push('/EventsInfo')
  };
  

  return (
    <div>
      <div className={style.navbar}>
        <div className={style.mainButtons}>
          <button
            type="button"
            class="btn btn-primary"
            style={{ margin: 10 }}
            onClick={enventHandler}
          >
            <b>EVENTS</b>
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={{ margin: 10 }}
            onClick={loginHandler}
          >
            <b>LOG IN</b>
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={{ margin: 10 }}
            onClick={signupHandler}
          >
            <b>SIGN UP</b>
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={{ margin: 10 }}
            onClick={logoutHandler}
          >
            <b>LOG OUT</b>
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={{ margin: 10 }}
            onClick={getdata}
          >
            <b>Events info</b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
