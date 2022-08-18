import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { oblasts, sendAdd } from "../../../API/api";
const AddRight = (props) => {

    const isRegister = JSON.parse(localStorage.getItem("userMove"))
    let history = useNavigate();
    useEffect(() => {
        if(isRegister){}
        else {
            history("/sign-in")
        }
    },[])

    const chooseOption2 = props.chooseOption2

    // дата  
    let date = new Date()
    let output = String(date.getDate()).padStart(2,'0') + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + date.getFullYear();

    const file = props

    // область 
    const [chooseOblast, setChooseOblast] = useState(9)
    const chengeChooseOblast = (event) => {
        setChooseOblast(event.target.value)
    }

    // описание 
    const {revue, setRevue} = props

    // описание 
    const {conditions, setConditions} = props

    const [oblast, setOblast] = useState([])

    const userData = JSON.parse(localStorage.getItem("userMove"))

    useEffect(() => {
        oblasts(setOblast)
    }, [])

    const {template, setTemplate} = props

    const {title, setTitle} = props

    const chooseOption1 = props

    return (
        <div className="right">

            <div className="rightBlock">
                <div>
                    <span>Заголовок</span>
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                </div>
                {template.length === 0 ? '' : template.filter((el) => el.category === chooseOption2)[0].content.map((el, key) =>
                    <div style={el.type === 'date.now' ? {height: '0px'} : {}} key={key}>
                        <span>{el.type === 'date.now' ? null : el.name}</span>
                        {el.type === 'int' ? 
                            <div><input onChange={((event) => el.value = event.target.value)}  type="number" name="" id=""/><span>{el.typeAmount}</span></div>
                        :el.type === 'date.now' ? null
                        :el.type === 'price' ?
                            <div><input onChange={((event) => el.value = event.target.value)}  type="number" name="" id=""/><span>{el.typeAmount}</span></div>
                        :el.type === 'oblast' ? 
                        <select onChange={((event) => el.value = event.target.value)}  name="" id="">
                            <option value=""></option>
                            {oblast.map((el, key) =>  
                                <option key={key} value={el.name}>{el.name}</option>
                            )}
                        </select> 
                        : el.type === 'bool' ? 
                        <input onChange={((event) => el.value = el.value = !el.value)} type="checkbox" name="" id="" />
                        : el.type === 'categoryProduction' ? 
                        <input type="text" value={chooseOption1.chooseOption1} /> 
                        :
                        <input onChange={((event) => el.value = event.target.value)} type="text" name="" id=""/>
                        }
                    </div>
                )}
                
            </div>

            <div>
                <label htmlFor="revue">Опис</label>
                <textarea name="" id="revue" cols="30" rows="10" onChange={event => setRevue(event.target.value)} value={revue}></textarea>
            </div>
            <div>
                <label htmlFor="conditions">Умови</label>
                <textarea name="" id="conditions" cols="30" rows="10" onChange={event => setConditions(event.target.value)} value={conditions}></textarea>
            </div>
        </div>
    )
}

export default AddRight