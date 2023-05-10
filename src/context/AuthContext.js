import { onAuthStateChanged } from "firebase/auth";
import { createContext,  useEffect,  useState } from "react";
import { auth } from '../backend/firebase';

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            // console.log(user);
        });
        return () => {
            unsub();
        }
    }, []);
    function setUser(user){
        setCurrentUser(user);
    }

    return (
        <AuthContext.Provider value={{ currentUser , setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

