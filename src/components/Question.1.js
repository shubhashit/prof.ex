import React, { useState } from 'react';
import './Test.css'
import Qimg from '../assets/pictures/question.png'


export default function Question(props) {
    // const correctOpction  = '1';
    
    const [selectedOption, setSelectedOption] = useState(null);
    const [clicked,setclicked] = useState(false);
    const correctOpction = `option${props.data[5]}`
    const Submit = (e)=>{
        console.log('handle')
        if(correctOpction === selectedOption){
            props.handleSubmit();
        }
        e.target.disabled = true;
        setclicked(true);

    }
    const handleOptionChange=(event) => {
        console.log(props.data[0])
        console.log(event.target.value)
        setSelectedOption(event.target.value);
    };
    return (
        <div className='flex justify-center mt-6'>
            <div className='border border-black question-box p-4 m-2'>
                <div className='flex  items-center'>
                    <img className='w-20' src={Qimg} alt="" />
                    <p className='text-start text-xl'>{`Question ${props.num + 1} of 10`}</p>
                </div>
                <div className='mt-2'>
                    {`Q${props.num + 1}. ${props.data[0]}`}
                </div>
                <div className='mt-4'>
                    <div className='m-2 border flex items-center justify-center ' key="option1">
                        <label className='mr-2'>{`${props.data[1]}`}</label>
                        <input
                            className='mr-2'
                            type="radio"
                            value="option1"
                            checked={selectedOption === "option1"}
                            onChange={handleOptionChange} 
                            disabled = {clicked}/>

                    </div>
                    <div className='m-2 border flex items-center justify-center ' key="option2">
                        <label className='mr-2'>{`${props.data[2]}`}</label>
                        <input
                            className='mr-2'
                            type="radio"
                            value="option2"
                            checked={selectedOption === "option2"}
                            onChange={handleOptionChange}
                            disabled={clicked} />

                    </div>
                    <div className='m-2 border flex items-center justify-center ' key="option3">
                        <label className='mr-2'>{`${props.data[3]}`}</label>
                        <input
                            className='mr-2'
                            type="radio"
                            value="option3"
                            checked={selectedOption === "option3"}
                            onChange={handleOptionChange}
                            disabled={clicked} />

                    </div>
                    <div className='m-2 border flex items-center justify-center ' key="option4">
                        <label className='mr-2'>{`${props.data[4]}`}</label>
                        <input
                            className='mr-2'
                            type="radio"
                            value="option4"
                            checked={selectedOption === "option4"}
                            onChange={handleOptionChange}
                            disabled={clicked} />

                    </div>
                </div>
                {/* <button disabled={!selectedOption} type='submit' className=' test-button border border-black ml-8'>submit</button>
                <button disabled={!selectedOption} type='submit' className=' test-button border border-black ml-8'>next</button> */}
                <button disabled={!selectedOption} type='submit' className=' test-button border border-black ml-8' onClick={Submit}>submit</button>

            </div>
        </div>
    );
}
