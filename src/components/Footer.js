import React from 'react'
import './Landingpage.css'
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../backend/firebase';

export default function Footer() {
  async function feedbackSubmit(e){
    e.preventDefault();
    try {
      await addDoc(collection(db, "Feedback"), {
        email : e.target[0].value,
        message : e.target[1].value,
      });
      console.log('in try block')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div className='h-10 mainI text-white pt-4'>
      <div className=' flex w-full'>
        <div className='w-1/2   border-r-black border-r-4 p-6 flex flex-col items-start' >
          <span className='font-bold text-2xl'>
            CONTACT US
          </span>
          <div className='ml-2 mt-2'>  <i className="fa-brands fa-instagram fa-bounce"></i> <span>instagram@id</span> </div>
          <div className='ml-2'> <i className="fa-solid fa-phone fa-shake"></i> <span>phone number</span> </div>
          <div className='ml-2'> <i className="fa-solid fa-envelope fa-shake"></i> <span>email@example.com</span> </div>
        </div>
        <div className='w-1/2   border-r-black border-r p-6 flex flex-col items-start' >
          <span className='font-bold text-2xl'>
            FEEDBACK
          </span>
            <form action="" onSubmit={feedbackSubmit} className='w-full flex items-start flex-col'>
              <input required className=' ml-2 mt-2 w-3/4 border-b-2 border-b-black outline-none placeholder:text-white' style={{ "background": "none" }} type="email" name="" id="" placeholder='Your email goes here' />
              <input required className=' ml-2 mt-4 h-full w-3/4 border-b-2 border-b-black outline-none placeholder:text-white' style={{ "background": "none" }} type="text" name="" id="" placeholder='Write you message' />
            <button className=' ml-2 mt-4 border-b-2  w-20  border-b-black'>Submit</button>
            </form>
        </div>
      </div>
    </div>
  )
}
