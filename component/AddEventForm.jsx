import style from "../styles/AddEventForm.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../config/config";

const EventForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  let submitH = () => {
    addDoc(collection(db, "users"), {
      title,
      date,
      time,
      location,
      description,
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const eventRef = collection(db, "events");
    const newEvent = {
      title,
      date,
      time,
      location,
      description,
    };
    try {
      const docRef = await addDoc(eventRef, newEvent);
      console.log('Document written with ID: ', docRef.id);
      router.push('/');
    }
    catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <div className={style.formPage}>
      <div className={style.form}>
        <h1>Create Event</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title: </label>
            <input
              type="text"
              placeholder="write a event title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="location">Loc:</label>
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="description">Description:</label>
            <br />
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-primary" onClick={submitH}>
            <b>Submit</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventForm;
