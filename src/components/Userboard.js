import React, { useContext, useEffect, useState } from 'react'
import './Landingpage.css'
import { AuthContext } from '../context/AuthContext'

export default function Userboard() {
    const { currentUser } = useContext(AuthContext);
    const [user, setUser] = useState();
    useEffect(()=>{
        setUser(currentUser);
    },[currentUser])

    return (
        <div>
            <div className='main flex flex-row'>
                <div className='w-1/4 border border-black h-full inline-block left-0'>
                    <div>
                        {user && user.displayName}
                    </div>
                </div>
                <div className='navbar border border-black  h-16 opacity-50 flex justify-between  sticky top-0 items-center z-20 w-3/4'>
                    <div className='ml-4 navbarOptions'>
                        <span className=' text-4xl mr-3 cursor-pointer font-bold'>Prof.ex</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
