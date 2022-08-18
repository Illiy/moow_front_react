import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom"

import ModalProd from "../../../components/ModalProd/Modal";

import reiting from '../../../assets/profile/reiting.svg';
import { addPost } from "../../../API/api";
import { Data } from "@react-google-maps/api";

const Descript = (props) => {

    const [vision,setVision] = useState('')

    const url = window.location.pathname
    const prodId = url.split('/')[2]
    const [addPostInformation, setAddPostInformation] = useState([])

    useEffect(() => {
        addPost(prodId, setAddPostInformation)
    }, [])

    const timestamp = Date.now(addPostInformation.length === 0 ? '' : addPostInformation.data.content[0].value)
    const trueData = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(timestamp)

    const creatortimestamp = Date.now(addPostInformation.length === 0 ? '' : addPostInformation.creator.dateRegiter)
    const creatortrueData = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(creatortimestamp)

    return (
        <div className="descript-block">
            <div className="descript-top">
                <div className="icon">
                    {addPostInformation.length === 0 ? '' : addPostInformation.creator.typeAccount === "entity" ? addPostInformation.creator.nameCompany[0] : addPostInformation.creator.pib[0]}
                </div>
                <div className="name">
                    <h3>{addPostInformation.length === 0 ? '' : addPostInformation.creator.typeAccount === "entity" && addPostInformation.creator.nameCompany.length >= 30 ? addPostInformation.creator.nameCompany.substring(30,0) + '...' : addPostInformation.creator.typeAccount === "entity" && addPostInformation.creator.nameCompany.length <= 13 ? addPostInformation.creator.nameCompany : addPostInformation.creator.typeAccount === "physical" && addPostInformation.creator.pib.length >= 12 ? addPostInformation.creator.pib.substring(12,0) + '...' : addPostInformation.creator.typeAccount === "physical" && addPostInformation.creator.pib.length <= 12 ? addPostInformation.creator.pib : ''}</h3>
                    <span className='all-text-on-dushbord'>{addPostInformation.length === 0 ? '' : addPostInformation.creator.typeAccount === "entity" ?addPostInformation.creator.nameCompany : addPostInformation.creator.pib}</span>
                    <p>Працює з MOOW з {creatortrueData.split(',')[0]}</p>
                </div>
                <div className="reting">
                    <div className="reting-div">
                        <img src={reiting} alt="" />
                        <span>4.8</span>
                    </div>
                    <span className='all-text-on-dushbord'>Середній рейтинг пропозицій: 4.8</span>
                </div>
            </div>
            <table className="descript-center">
                <tbody>
                    <tr>
                        <td className="td-col1 td1">Фьючерс</td>
                        <td className="td-col2 td1"><span onClick={() => setVision(true)} className="qest">?</span></td>
                    </tr>
                    {addPostInformation.length === 0 ? '' : addPostInformation.data.content.map((el, key) => 
                    el.type === "oblast" ? '' : el.type === "date.now" ?
                    <tr key={key}>
                        <td className="td-col1">{el.name}</td>
                        <td className="td-col2"><span>{trueData.split(',')[0]}</span></td>
                    </tr> : el.type === "price" ? 
                    ''
                    : el.type === "int" ? 
                    <tr key={key}>
                        <td className="td-col1">{el.name}</td>
                        <td className="td-col2"><span>{el.value + ' ' + el.typeAmount}</span></td>
                    </tr>
                    :
                    <tr key={key}>
                        <td className="td-col1">{el.name}</td>
                        <td className="td-col2"><span>{el.value}</span></td>
                    </tr>
                    )}
                    <tr>
                        <td className="td-col1 tdLast">{addPostInformation.length === 0 ? '' : addPostInformation.data.content.filter(el => el.type === "price")[0].name}</td>
                        <td className="td-col2 tdLast"><span>{addPostInformation.length === 0 ? '' : addPostInformation.data.content.filter(el => el.type === "price")[0].value + ' ' + addPostInformation.data.content.filter(el => el.type === "price")[0].typeAmount}</span></td>
                    </tr>
                </tbody>
            </table>
            <div className="descript-bottom">
                <p>{addPostInformation.length === 0 ? '' :addPostInformation.data.description} <br /> <br /> {addPostInformation.length === 0 ? '' :addPostInformation.data.umovi}</p>
            </div>
            <ModalProd setVision={setVision} vision={vision}/>
        </div>
    )
}

export default Descript;