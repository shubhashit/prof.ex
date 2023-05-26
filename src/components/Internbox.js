import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { companies } from '../constants/index'
import './Internship.css'

export default function Internbox(props) {
    const navigate = useNavigate();
    const [companyDetails , setcompanyDetails] = useState(null);
    useEffect(()=>{
        companies.forEach(element => {
            if(element.CompanyName === props.companyName){
                console.log('true')
                setcompanyDetails(element)
            }
        });
    },[props.CompanyName])
    console.log(companyDetails)
    function navigateToCompanyPage(){
        if (props.companyName){
            navigate(`internship/${props.companyName}`)
        }
        else{
            navigate('internship/companyname');
        }
    }
  return (
      <div className=' h-fit w-fit flex justify-center flex-col items-center internBox m-5 exit' onClick={navigateToCompanyPage}>
          <div className="tk-blob blobStyle" style={{ "--fill": "#ffc930" }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.4 394.6">
                  <path d="M369.4 109.2c43.2 55.3 71.5 121.4 53.4 167.3-18.2 45.8-82.8 71.4-140.5 91.7-57.8 20.4-108.7 35.4-152.9 20.3C85.1 373.4 47.6 328.3 23.2 267c-24.5-61.2-35.8-138.6-2.5-191.7C54.1 22.2 132-6.6 200 1.3c68 7.9 126.1 52.5 169.4 107.9z"></path>
              </svg>
          </div>
          <p className='relative bottom-20 font-extrabold text-xl right-0'>{console.log(companyDetails)}{ companyDetails ? companyDetails.CompanyName : 'Company'}</p>
          this is particular intern
          <button className='mt-2 p-1 get-started-btn' style={{ "background": "#ffc930" }} >GET STARTED</button>

      </div>
  )
}
