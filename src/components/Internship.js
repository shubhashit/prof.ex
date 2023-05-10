import React, { useEffect } from 'react'
import front from '../assets/pictures/internshipPic.png'
import './Internship.css'
import '../assets/css/blobz.min.css'
import Internbox from './Internbox'

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
function change(e) {
  console.log(e.target.checked)
  let t = document.getElementsByClassName('internmain');
  console.log(t);
  let l = Array.from(t);
  console.log(l)
  l[0].display = 'none'
}
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
          <p>Give a intern</p>
        </div>
      </div>
      <div className=' ml-10 mr-10 grid gridc internmain '>
        <Internbox></Internbox>
        <Internbox></Internbox>
        <Internbox></Internbox>
        <Internbox></Internbox>
        <Internbox></Internbox>
        <Internbox></Internbox>
        <Internbox></Internbox>
        <Internbox></Internbox>
      </div>
    </div>
  )
}
