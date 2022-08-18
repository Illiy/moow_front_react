import React, {useState,useEffect} from "react";

import FirstSlide from "./module/firstSlide";
import SecSlide from "./module/secondSlide";
import Adverismant from "./module/Adverismant";
import { useNavigate } from "react-router-dom";

const Add = () => {
    const [count, setCount] = useState(0)
    const [file, setFile] = useState([])

    const isRegister = JSON.parse(localStorage.getItem("userMove"))
    let history = useNavigate();
    useEffect(() => {
        if(isRegister){}
        else {
            history("/sign-in")
        }
    },[])

    return (
        <div className="container addContainer">
            <SecSlide file={file} setFile={setFile} count={count} setCount={setCount} />
        </div>
    )
}

export default Add;