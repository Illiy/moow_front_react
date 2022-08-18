import React, {useEffect, useState} from "react";
import { takeReklama } from "../../API/api";
import Buy from "../BuyModul/Buy";

const Reklama = () => {

    const [choosen, setChoosen] = useState('')
    const [page, setPage] = useState(1)

    const userData = JSON.parse(localStorage.getItem("userMove"))
    const [reklamaList,setReklamaList] = useState()

    useEffect(() => {
        takeReklama(userData.token,setReklamaList)
    }, [])

    console.log(reklamaList)

    return (
        <div className="reklama">
            {page === 1 ? 
            <div className="container">
                <h2>Оберіть пакет реклами</h2>
                <ul>
                    {reklamaList === undefined ? '' : reklamaList.map((el,key) => 
                        <li onClick={() => setChoosen(el.id)} key={key} className={choosen === el.id ? 'active-li' : ''}>
                            <h3>{el.name}</h3>
                            <p>{el.description}</p>
                            <span>{el.price} грн</span>
                        </li>
                    )}
                </ul>
                {choosen === 0 ? '' : 
                <button style={choosen === '' ? {display: 'none'} : {}} onClick={() => setPage(2)}>Оплатити {reklamaList === undefined ? '' : choosen === '' ? '' :reklamaList.filter(el => el.id === choosen)[0].price} грн</button>
                }
            </div>
            :<Buy choosen={choosen} />
            }
        </div>
    )
}

export default Reklama