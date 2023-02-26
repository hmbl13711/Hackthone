import { collection, getDocs } from 'firebase/firestore'
import React, { useState } from 'react'
import style from "../styles/Event.module.css"
import { db } from '../config/config'

function NewEvents() {
  const [data , setdata] = useState([])
  let submitH = async() => {
    let arr  = []
   let Q =  await getDocs(collection(db , 'events'))
   Q.forEach((doc)=>{
    // console.log(doc.data());
    arr.push(doc.data())
   })
   setdata(arr)
   console.log(arr);
  }
  return (
    <div>
      <div>
      <ul>
      {data.map((item) => (<div className={style.event}>
        <li><h3><p>Title :{item.title}</p></h3></li>
        <li><h3><p>Date :{item.date}</p></h3></li>
        <li><h3><p>Time :{item.time}</p></h3></li>
        <li><h3><p>Location :{item.location}</p></h3></li>
        <li><h3><p>Description :{item.description}</p></h3></li>

        
        </div>

      ))}
    </ul>
      </div>
      <button onClick={submitH}>Click</button>
    </div>
  )
}

export default NewEvents
