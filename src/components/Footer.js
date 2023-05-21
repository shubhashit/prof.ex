import React from 'react'
import './Landingpage.css'

export default function Footer() {
  return (
    <div className='h-10 mainI text-white'>
      <div className=' flex w-full'>
        <div className='w-1/2   border-r-black border-r p-6 flex flex-col items-start' >
          <span className='font-bold text-2xl'>
            CONTACT US
          </span>
          <div className='ml-2 mt-2'>  <i class="fa-brands fa-instagram fa-bounce"></i> <span>instagram@id</span> </div>
          <div className='ml-2'> <i class="fa-solid fa-phone fa-shake"></i> <span>phone number</span> </div>
          <div className='ml-2'> <i class="fa-solid fa-envelope fa-shake"></i> <span>email@example.com</span> </div>
        </div>
        <div className='w-1/2   border-r-black border-r p-6 flex flex-col items-start' >
          <span className='font-bold text-2xl'>
            FEEDBACK
          </span>
          <div className='w-full flex items-start flex-col'>
            <input className=' ml-2 mt-2 w-3/4 border-b-2 border-b-black outline-none placeholder:text-white' style={{"background" : "none"}} type="email" name="" id="" placeholder='Your email goes here'/>
            <input className=' ml-2 mt-4 h-full w-3/4 border-b-2 border-b-black outline-none placeholder:text-white' style={{"background" : "none"}} type="text" name="" id="" placeholder='Write you message'/>
          </div>
        </div>
      </div>
    </div>
  )
}
