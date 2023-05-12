import React, { useContext, useState } from 'react'
import './Test.css'
import img from '../assets/pictures/online-test2.png'
import Question from "./Question.1.js"
import { useNavigate } from 'react-router-dom'
import Timer from './Timer'
import { AuthContext } from '../context/AuthContext'
import { Timestamp, addDoc, collection} from 'firebase/firestore'
import { db } from '../backend/firebase'
export default function Test() {
    const { currentUser } = useContext(AuthContext);
    const [timer, setTimer] = useState(false)

    const [score, setscore] = useState(0);
    const navigate = useNavigate();
    const handleSubmit = () => {
        console.log('handlesubmit')
        let x = score;
        x++;
        setscore(x);
        console.log(x);
    }
    async function onSubmit(e) {
        e.preventDefault();
        console.log(e.target[0].value);
        // let name = e.target[0].value;
        let email = e.target[1].value;
        // let number = e.target[2].value;
        if(email === currentUser.email){
            console.log(currentUser.uid)
            try {


                const docref = await addDoc(collection(db, "users", `${currentUser.uid}` ,"testsTaken"), {
                    companyName : 'presentconpany',
                    startTime: Timestamp.now(),
                });
                console.log(docref.id)
                document.getElementsByClassName('timer')[0].classList.remove('hidden')
                document.getElementById('question-list').classList.remove('hidden');
                document.getElementById('start-test').disabled = true;
                setTimer(true)
            } catch (e) {
                console.error("Error adding document: ", e);
            }
        }
        console.log(timer)
    }
    function navigateToTest2() {
        console.log('nexttest')
        navigate('/internship/companyname/test2')
    }
    return (
        <div className='testPage'>
            <form onSubmit={navigateToTest2} className="">
                <button type='submit' className=' next-button absolute right-0 mr-3 top-2 mt-0' disabled>next test</button>
            </form>
            <div className=' h-fit flex flex-col justify-start '>
                <div className='flex justify-between'>
                    <p className='inline-block text-7xl font-bold text-start ml-8 mt-8 items-center PointsBeforeYouBegin'>Points before you <br></br> begin</p>
                    <img className='test-img' src={img} alt="" />
                </div>
                <form id='testDetails' onSubmit={onSubmit} className="m-auto  p-3 w-1/2">
                    <div className=' p-2  flex '>
                        <label htmlFor="exampleInputEmail1" className="form-label" style={{ "width": "20vw" }}>Name :</label>
                        <input type="text" className="resinput form-control w-1/2 border-none outline-none  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Vedant Sign'  />
                    </div>
                    <div className="p-2 resinputdiv flex">
                        <label htmlFor="exampleInputPassword1" className="form-label" style={{ "width": "20vw" }}>Email :</label>
                        <input type="email" className="resinput form-control  w-1/2 border-none outline-none " id="exampleInputPassword1" placeholder='vedant@example.com'  />
                    </div>
                    <div className="p-2 resinputdiv flex">
                        <label htmlFor="exampleInputPassword1" className="form-label" style={{ "width": "20vw" }}>Phone Number :</label>
                        <input type="text" className="resinput form-control  w-1/2 border-none outline-none " id="examp" placeholder='for ex: 3948392584'  />
                    </div>
                    <button id='start-test' type='submit' className=' test-button  ml-8' >take test</button>
                    {/* disabled={!inputValue.trim() || !inputValue2.trim() || !inputValue3.trim() || timer} */}
                </form>
            </div>
            <div className='mt-4'>
                <p className='text-xl ml-12 text-start font-bold'>Rules:</p>
                <p className='ml-16 text-start mt-2'> <span className='font-bold'> - </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat ratione, quidem corporis magnam a soluta quas quos repellat, aut </p>
                <p className='ml-16 text-start mt-2'> <span className='font-bold'> - </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat ratione, quidem corporis magnam a soluta quas quos repellat, aut </p>
                <p className='ml-16 text-start mt-2'> <span className='font-bold'> - </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quaerat ratione, quidem corporis magnam a soluta quas quos repellat, aut </p>
            </div>

            <div className="timer hidden" >
                <div className="timer-display">
                    {timer && <Timer timer={600} timeUp={() => {
                        document.getElementById('question-list').classList.add('hidden');
                    }}></Timer>}
                </div>
            </div>

            <div className='hidden' id='question-list'>
                <Question handleSubmit={handleSubmit}></Question>
                <Question handleSubmit={handleSubmit}></Question>
                <Question handleSubmit={handleSubmit}></Question>
                <Question handleSubmit={handleSubmit}></Question>
                <div>{score}</div>
            </div>
        </div>
    )
}
