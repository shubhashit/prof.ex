import React, { useContext, useEffect, useState } from 'react'
import './Test.css'
import img from '../assets/pictures/online-test2.png'
import Question from "./Question.1.js"
import { useNavigate } from 'react-router-dom'
import Timer from './Timer'
import { AuthContext } from '../context/AuthContext'
import { Timestamp, addDoc, collection, doc, getDoc } from 'firebase/firestore'
import { db } from '../backend/firebase';
import { getDocs, query } from 'firebase/firestore';
export default function Test() {
    const { currentUser } = useContext(AuthContext);
    const [questiondoc, setQuestiondoc] = useState([]);
    const [timer, setTimer] = useState(false)
    const [resume, setresume] = useState(null);
    useEffect(() => {
        async function fetchdata() {
            const ref = doc(db, "Company", "Test Company");
            const docSnap = await getDoc(ref);
            if (docSnap.exists()) {
                // Convert to question object
                const questions = docSnap.data();
                // Use a question instance method
                const questionsArray = Object.keys(questions).map((key) => {
                    return questions[key];
                    // console.log(question[key]);
                });
                // console.log(questionsArray)
                // console.log(questionsArray[0])
                setQuestiondoc(oldarray => [questionsArray]);
                // console.log(questiondoc);
            } else {
                console.log("No such document!");
            }
            // console.log(questiondoc);

        }
        fetchdata();
    }, [])
    // console.log(questiondoc[0])
    // console.log(questiondoc[0])
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
        let email = e.target[1].value;
        if (email === currentUser.email  && resume != null) {
            console.log(currentUser.uid)
            try {
                const docref = await addDoc(collection(db, "users", `${currentUser.uid}`, "testsTaken"), {
                    companyName: 'presentconpany',
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
        window.scrollTo({
            top: document.getElementById("question-list").offsetTop - 2,
            left: 0,
            behavior: 'smooth'
        });
    }
    function navigateToTest2() {
        console.log('nexttest')
        navigate('/internship/companyname/test2')
    }
    function handelChange(e){
        console.log(e.target.value)
        setresume(e.target.value);
    }
    return (
        <div className='testPage'>
            {/* <form onSubmit={navigateToTest2} className="">
                <button type='submit' className=' next-button absolute right-0 mr-3 top-2 mt-0' disabled>next test</button>
            </form> */}
            <div className=' h-fit flex flex-col justify-start '>
                <div className='flex justify-between'>
                    <p className='inline-block text-7xl font-bold text-start ml-8 mt-8 items-center PointsBeforeYouBegin'>Points before you <br></br> begin</p>
                    <img className='test-img' src={img} alt="" />
                </div>
                <form id='testDetails' onSubmit={onSubmit} className="m-auto  p-3 w-1/2">
                    <div className=' p-2  flex '>
                        <label htmlFor="exampleInputEmail1" className="form-label" >Name :</label>
                        <input type="text" className="resinput form-control w-1/2 border-none outline-none  " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Vedant Sign' />
                    </div>
                    <div className="p-2 resinputdiv flex">
                        <label htmlFor="exampleInputPassword1" className="form-label" >Email :</label>
                        <input type="email" className="resinput form-control  w-1/2 border-none outline-none " id="exampleInputPassword1" placeholder='vedant@example.com' />
                    </div>
                    <div className="p-2 resinputdiv flex">
                        <label htmlFor="exampleInputPassword1" className="form-label" >Phone Number :</label>
                        <input type="text" className="resinput form-control  w-1/2 border-none outline-none " id="examp" placeholder='for ex: 3948392584' />
                    </div>
                    <div className="p-2 resinputdiv flex">
                        <label htmlFor="exampleInputPassword1" className="form-label" >Upload Resume:</label>
                        <input type="file" accept='.pdf' className="resinput form-control  w-1/2 border-none outline-none " id="examp" placeholder='for ex: 3948392584' onChange={handelChange} />
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
                {

                    questiondoc.map((item, index) => (
                        <div key={0}>
                            <Question key={1} handleSubmit={handleSubmit} data={item[0]} num={0}></Question>
                            <Question key={2} handleSubmit={handleSubmit} data={item[1]} num={1}></Question>
                            <Question key={3} handleSubmit={handleSubmit} data={item[2]} num={2}></Question>
                            <Question key={4} handleSubmit={handleSubmit} data={item[3]} num={3}></Question>
                            <Question key={5} handleSubmit={handleSubmit} data={item[4]} num={4}></Question>
                            <Question key={6} handleSubmit={handleSubmit} data={item[5]} num={5}></Question>
                            <Question key={7} handleSubmit={handleSubmit} data={item[6]} num={6}></Question>
                            <Question key={8} handleSubmit={handleSubmit} data={item[7]} num={7}></Question>
                            <Question key={9} handleSubmit={handleSubmit} data={item[8]} num={8}></Question>
                            <Question key={10} handleSubmit={handleSubmit} data={item[9]} num={9}></Question>
                        </div>
                    ))

                }
                <div>
                    <button type='submit' className=' test-button border border-black ml-8' onClick={() => {
                        document.getElementById('timercomponent').classList.add('hidden');
                        document.getElementById('question-list').classList.add('hidden');
                    }}>submit test</button>
                </div>
                <div>{score}</div>
            </div>
        </div>
    )
}
