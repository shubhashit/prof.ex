import { Timestamp, doc, setDoc, collection, query, where } from "firebase/firestore";
import React, { useContext, useEffect } from 'react'
import front from '../assets/pictures/front.png'
import waveres from '../assets/pictures/wave-res.png'
import { useRef } from 'react'
import './Landingpage.css'
import Internship from './Internship'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { app, db } from '../backend/firebase'
import { AuthContext } from '../context/AuthContext'

//animation for main image and heading
setTimeout(() => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
            else {
                entry.target.classList.remove('show')
            }
        })
    })
    let t = document.getElementsByClassName('hide');
    t = Array.from(t);
    // console.log(t[0])
    t.forEach(element => {
        observer.observe(element);
    });
}, 100);
export default function LandingPage() {
    const { currentUser } = useContext(AuthContext);
    // one time animation for the heading text and image on landing page for redirection of page
    useEffect(() => {
        // setUser(localStorage.getItem("user"))
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                // console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
                else {
                    entry.target.classList.remove('show')
                }
            })
        })
        let t = document.getElementsByClassName('hide');
        t = Array.from(t);
        // console.log(t[0])
        t.forEach(element => {
            observer.observe(element);
        });
    }, [currentUser])
    // constant and variable
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    const r = useRef(null)
    const centerContent = useRef(null);
    let signuppage = false

    // normal sign out fuction
    function signout(e) {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
    // sign up with google fuctionnality
    function signupwithgoogle(e) {
        e.preventDefault()

        provider.setCustomParameters({
            prompt: "select_account"
        });
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // setUser(user)
                localStorage.setItem("user", user);
                console.log(user);
                console.log(token);
                // Create a reference to the cities collection
                const citiesRef = collection(db, "users");

                // Create a query against the collection.
                const q = query(citiesRef, where("email", "==", `${user.email}`));
                if (!q) {
                    try {

                        await setDoc(doc(db, "users", `${user.uid}`), {
                            displayName: user.displayName,
                            email: user.email,
                            timeForUserCreation: Timestamp.now(),
                            uid: user.uid,
                        });
                    } catch (e) {
                        console.error("Error adding document: ", e);
                    }
                }

                r.current.classList.add('hidden');
                centerContent.current.classList.remove('opacity-50')
                signuppage = false;

                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorCode, errorMessage, email, credential)
                // ...
            });
    }
    // sign up box animation and fading of background and scrool effect when user is logged in 
    function signupBox() {
        if (currentUser) {
            console.log('object')
            window.scrollTo({
                top: document.getElementById('internship').offsetTop - 10,
                left: 0,
                behavior: 'smooth'
            });
        }
        else {

            if (!signuppage) {
                r.current.classList.remove('hidden');
                centerContent.current.classList.add('opacity-50')
                signuppage = true;
            }
            else {
                r.current.classList.add('hidden');
                centerContent.current.classList.remove('opacity-50')
                signuppage = false;
            }
        }
    }
    // removing of sign up form
    function removeSignUpForm() {
        centerContent.current.addEventListener("click", () => {
            if (signuppage) {
                r.current.classList.add('hidden');
                centerContent.current.classList.remove('opacity-50')
                signuppage = false;
            }
        });
    }

    return (
        <div onClick={removeSignUpForm}>

            <div className='w-screen h-screen main ' onClick={removeSignUpForm}>
                <div className='navbar border border-black  h-16 opacity-50 flex justify-between  sticky top-0 items-center z-20'>
                    <div className='ml-4 navbarOptions'>
                        <span className=' text-4xl mr-3 cursor-pointer font-bold'>Prof.ex</span>
                        {/* <span className=' opacity-100 text-2xl ml-4 mr-3 cursor-pointer' onClick={navigateToHome}>Home</span> */}
                    </div>
                    {/* <input type="text" name="text" className="input" placeholder="Type something here...."></input> */}
                    <div>
                        <span>
                            {currentUser && `${currentUser.displayName}`}
                        </span>
                        <button onClick={signout}>
                            {currentUser && 'sign out'}
                        </button>
                    </div>
                </div>
                <div id="LandingPageContent" className='flex  justify-evenly m-10 ' ref={centerContent}>
                    <div className='m-10 text-white p-2 flex flex-col justify-center items-center hide'>
                        <p className='text-4xl font-bold mb-3'>HEADING</p>
                        <p className='text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim maiores sint quam qui numquam suscipit inventore asperiores dignissimos laboriosam explicabo.</p>
                        <button className='m-4 p-1 get-started-btn z-10' onClick={signupBox} >GET STARTED</button>
                    </div>
                    <img className='front-img inline-block hide' src={front} alt=" " />

                </div>
                <div className="form-box signUpForm hidden" ref={r}>
                    <form className="form">
                        <span className="title">Sign up</span>
                        <span className="subtitle">Create a free account with your email.</span>
                        <div className="form-container">
                            <input type="text" className="input" placeholder="Full Name" />
                            <input type="email" className="input" placeholder="Email" />
                            <input type="password" className="input" placeholder="Password" />
                        </div>
                        <button>Sign up</button>
                        <button onClick={signupwithgoogle}>Sign up with google</button>
                    </form>
                    <div className="form-section">
                        <p>Have an account?
                            {/* <a >Log in</a>  */}
                        </p>
                    </div>
                </div>
                <div className="custom-shape-divider-bottom-1677075985">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
                    </svg>
                </div>
            </div>
            {currentUser && <Internship></Internship>}
            {/* <div className='h-screen'></div> */}
        </div>
    )
}
