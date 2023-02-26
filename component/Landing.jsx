import Navbar from "./Navbar";
import Footer from "../component/footer"
import Image from "next/image";
import Speaker from "../Image/Speaker-1.jpg";
import style from "../styles/Landing.module.css";
const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className={style.container}>
        
      
      <div className={style.para}>
        <h1> "Actions speak louder than words." </h1>
        This proverb means that what people do is more important than what they
        say. In the context of an events web page, it could mean that the
        success of an event is based on how well it is executed and how many
        people attend, rather than just how it is advertised or described on the
        web page.
      </div>
      <div className={style.img}>
          <Image src={Speaker} alt="My Image" width={700} height={500} />
        </div>
      </div>
      <footer/>
    </div>
  );
};

export default Landing;
