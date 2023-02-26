import React from 'react'
import { db } from '../config/config'


const EventsInfo = () => {
  return (
    <div>
      const getdata = async () => {
  const querySnapshot = await getDocs(collection(db, "events"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};


    </div>
  )
}

export default EventsInfo
