import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { prodCategory } from "../../../API/api";


const Selectors = (props) => {

    const {chooseOption1, setChooseOption1} = props
    const {chooseOption2, setChooseOption2} = props
    const [checked, setChecked] = useState(false)
    const [checked2, setChecked2] = useState(false)
    const {template, setTemplate} = props
    const [production,setProduction] = useState([]) 

    const isRegister = JSON.parse(localStorage.getItem("userMove"))
    let history = useNavigate();
    useEffect(() => {
        if(isRegister){}
        else {
            history("/sign-in")
        }
    },[])
    
    const clickChangeValue = (element) => {
        setChooseOption2(element)
        setChecked2(false)
    }

    const goodTemplate = props

    const clickChangeProduction = (elemeny) => {
        setChooseOption1(elemeny)
        goodTemplate.goodTemplate.filter((res) => res.type === 'categoryProduction')[0].value = elemeny
        setChecked(false)
    }
    const userData = JSON.parse(localStorage.getItem("userMove"))

    useEffect(() => {
        prodCategory(setProduction,userData !== null ? userData.token : '')
    }, [])

    return (
        <div className="selectors">
            <div className="selectorOdin">
                <input type="checkbox" onClick={() => {checked2 === false ? setChecked2(true) : setChecked2(false)}} checked={checked2} name="selectorOdin" id="selector2" />
                <label htmlFor="selector2">{chooseOption2}</label>
                <ul>
                    {template.length === 0 ? '' : template.map((el, key) => 
                        el.category !== chooseOption2 ? <li key={key} onClick={() => clickChangeValue(el.category)}>{el.category}</li> : ''
                    )}
                </ul>
            </div>
            {chooseOption2==='Продукція' ? <div className="selectorOdin">
                <input type="checkbox" onClick={() => {checked === false ? setChecked(true) : setChecked(false)}} checked={checked} name="selectorOdin" id="selector1" />
                <label htmlFor="selector1">{chooseOption1}</label>
                <ul>
                    {production.map((el, key) => 
                        el.name !== chooseOption1 ? 
                        <li key={key} onClick={() => clickChangeProduction(el.name)}>{el.name}</li> : ''
                    )}
                </ul>
            </div> : ''}
        </div>
    )
}

export default Selectors;