import React, { useEffect } from 'react'
import front from '../assets/pictures/internshipPic.png'
import './Internship.css'
import '../assets/css/blobz.min.css'
import './FormApplyForStartup.css'
import Internbox from './Internbox'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../backend/firebase'

//animation for intern image  and heading
setTimeout(() => {
  const observer1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('center2');
      }
      else {
        entry.target.classList.remove('center2')
      }
    })
  })
  let t = document.getElementsByClassName('left');
  t = Array.from(t);
  // console.log(t[0])
  t.forEach(element => {
    observer1.observe(element);
  });
  const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('center2');
      }
      else {
        entry.target.classList.remove('center2')
      }
    })
  })
  let t2 = document.getElementsByClassName('right');
  t2 = Array.from(t2);
  // console.log(t[0])
  t2.forEach(element => {
    observer2.observe(element);
  });


  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('enter');
      }
      else {
        entry.target.classList.remove('enter')
      }
    })
  })
  let I = document.getElementsByClassName('internBox')
  I = Array.from(I);
  I.forEach(element => {
    observer.observe(element);
  });
}, 100);

export default function Internship() {
  // animation for the redirection of the page
  useEffect(() => {
    const observer1 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('center2');
        }
        else {
          entry.target.classList.remove('center2')
        }
      })
    })
    let t = document.getElementsByClassName('left');
    t = Array.from(t);
    // console.log(t[0])
    t.forEach(element => {
      observer1.observe(element);
    });
    const observer2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('center2');
        }
        else {
          entry.target.classList.remove('center2')
        }
      })
    })
    let t2 = document.getElementsByClassName('right');
    t2 = Array.from(t2);
    // console.log(t[0])
    t2.forEach(element => {
      observer2.observe(element);
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('enter');
        }
        else {
          entry.target.classList.remove('enter')
        }
      })
    })
    let I = document.getElementsByClassName('internBox')
    I = Array.from(I);
    I.forEach(element => {
      observer.observe(element);
    });
  }, [])
  function change(e) {
    if (e.target.checked) {
      console.log(e.target.checked)
      document.getElementById('internmain').classList.remove('internmain');
      document.getElementById('internmain').classList.add('hidden');
      document.getElementById('applyStartup').classList.remove('hidden');
      
    }
    else {
      console.log(e.target.checked)
      document.getElementById('internmain').classList.add('internmain');
      document.getElementById('internmain').classList.remove('hidden');
      document.getElementById('applyStartup').classList.add('hidden');
      
    }
  }
  async function Startupformhandlesubmit(e){
    e.preventDefault();
    console.log('submit');
    console.log(e.target[0].value);
    try {
      await addDoc(collection(db, "StartUps"), {
        Firstname : e.target[0].value,
        Lastname : e.target[1].value,
        Email: e.target[2].value,
        StartUpName: e.target[3].value,
        PhoneNumber: e.target[4].value,
        PositionOfPersonRegistering: e.target[5].value,
        PositionForHirinng: e.target[6].value,
        NumberOfRecuits: e.target[7].value,
        JobDescription: e.target[8].value,
        EligibilityCriteriaForTheRole: e.target[9].value,
        Location: e.target[10].value,
        StipendInfo: e.target[11].value,
        Duration: e.target[12].value,
        AdditionalInfo: e.target[13].value,
      });
      console.log('in try block')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <div id='internship' className='mainI'>

      <div className='flex justify-evenly m-10 mt-0 overflow-hidden' >
        <img className='front-img inline-block mt-3 left' src={front} alt=" " />
        <div className='m-10 text-white p-2 flex flex-col justify-center items-center right mt-3'>
          <p className='text-4xl font-bold mb-3'>INTERSHIP</p>
          <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores sint quam qui numquam suscipit inventore asperiores dignissimos laboriosam explicabo.</p>
          <div className="switch mt-2">
            <div className="switch_">
              <input type="checkbox" id="switch-" onChange={change} />
              <label htmlFor="switch-"></label>
            </div>
          </div>
          <p>Register as a Startup</p>
        </div>
      </div>
      <div id='internmain' className=' ml-10 mr-10 grid gridc internmain justify-items-center'>
        <Internbox company = "Pregrad"></Internbox>
        <Internbox></Internbox>
        <Internbox></Internbox>
        <Internbox></Internbox>
        <Internbox></Internbox>
        <Internbox></Internbox>
        <Internbox></Internbox>
        <Internbox></Internbox>
      </div>
      <div id='applyStartup' className='w-5/6 hidden m-auto' >
        <div className='m-auto'>
          <form className="formst m-auto" onSubmit={Startupformhandlesubmit}>
            <p className="titlest">Register </p>
            <p className="messagest">Register now to start hiring...</p>
            <div className="flexst">
            <label>
              <input required='' placeholder="Firstname" type="text" className="inputst placeholder:align-middle placeholder:justify-center" />
            </label>
            <label>
              <input required='' placeholder="Lastname" type="text" className="inputst" />
            </label>
            </div>
            <label>
              <input required='' placeholder="Email" type="email" className="inputst" />
            </label>
            <label>
              <input required='' placeholder="StartUp Name" type="text" className="inputst" />
            </label>
            <label>
              <input required='' placeholder="Phone Number" type="" className="inputst" />
            </label>
            <label>
              <input required='' placeholder="Position of person Registering" type="text" className="inputst" />
            </label>
            <div className="flexst">
            <label>
              <input required='' placeholder="Position for hiring " type="text" className="inputst" />
            </label>
            <label>
              <input required='' placeholder="Number of Recuits" type="number" className="inputst" />
            </label>
            </div>
            <label>
              <input required='' placeholder="Job Description" type="text" className="inputst" />
            </label>
            <label>
              <input required='' placeholder="Eligibility Criteria for the role" type="text" className="inputst" />
            </label>
            <label>
              <input required='' placeholder="Location" type="text" className="inputst" />
            </label>
            <label>
              <input required='' placeholder="Stipend Info" type="text" className="inputst" />
            </label>
            <label>
              <input required='' placeholder="Duration" type="text" className="inputst" />
            </label>
            <label>
              <input required='' placeholder="Additional info" type="text" className="inputst" />
            </label>

            <button className="submitst">Submit</button>
          </form>
        </div>

      </div>
    </div>
  )
}
