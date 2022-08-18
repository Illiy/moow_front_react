import React,{useState, useEffect} from "react"
import { Link } from "react-router-dom"

import Modal from '../../components/Modal/Modal'

import defaultAva from '../../assets/defaultAva.png'
import rating from '../../assets/profile/reiting.svg'
import face from '../../assets/profile/facebook.svg'
import apple from '../../assets/profile/apple.svg'
import google from '../../assets/profile/google.svg'
import file from '../../assets/profile/file.svg'
import dia from '../../assets/profile/dia.svg'
import bankid from '../../assets/profile/bankid.svg'
import war from '../../assets/profile/warrning.svg'
import gromkogovoritel from '../../assets/profile/gromkogovoritel.svg'
import like from '../../assets/profile/like.svg'
import van from '../../assets/profile/van.svg'
import hand from '../../assets/profile/hand.svg'
import { useNavigate } from "react-router-dom";
import { user } from "../../API/api"


const Profile = () => {
    const [pib,setPib] = useState('')
    const [phone,setPhone] = useState('')
    const [email,setEmail] = useState('')
    const [vision,setVision] = useState('')
    const isRegister = JSON.parse(localStorage.getItem("userMove"))
    let history = useNavigate();
    useEffect(() => {
        if(isRegister){}
        else {
            history("/sign-in")
        }
    },[])
    return(
        <main className="profile">

            <div className="container" style={{minHeight: '0px'}}>
                    <div className="profile-left">
                        <img className="logo" src={defaultAva} alt="" />
                        <span className="profile-p">Середній рейтинг пропозицій</span>
                        <div className="rating-block">
                            <img src={rating} alt="" />
                            <div>4.8</div>
                        </div>
                        <div className="scial-block">
                            <div className="social-href">
                                <img src={google} alt="" />
                            </div>
                            <div className="social-href">
                                <img src={face} alt="" />
                            </div>
                            <div className="social-href">
                                <img src={apple} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="profile-center">
                        <div className="profile-center-top">
                            <div>
                                <label htmlFor="">Назва</label>
                                <input type="text" name="" id="" value={pib} onChange={(event) => setPib(event.target.value)} />
                            </div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input type="email" name="" id="" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </div>
                        </div>
                        <div className="profile-center-center">
                            <label htmlFor="">Телефон</label>
                            <input type="tel" name="" id="" value={phone} onChange={(event) => setPhone(event.target.value)} />
                        </div>
                        <div className="profile-center-bottom">
                            <button onClick={() => setVision(true)}>Зберегти</button>
                        </div>
                    </div>
                    <div className="profile-right">
                        <div className="war-menu">
                            <img src={war} alt="" />
                            <p>Ваш акаунт не повністю верифікований. <span>Більше</span></p>
                        </div>
                        <p className="varif">Верифікуватись</p>
                        <div className="icon">
                            <div>
                                <img src={file} alt="" />
                            </div>
                            <div>
                                <img src={dia} alt="" />
                            </div>
                            <div>
                                <img src={bankid} alt="" />
                            </div>
                        </div>
                    </div>
            </div>
            <div style={{minHeight: '0px'}} className="container container-bottom">
                <div>
                    <Link to="/ratingr" className="link">
                        <img src={like} alt="" />
                        <span>Обране</span>
                    </Link>
                    <Link to="/me-deal" className="link">
                        <img src={hand} alt="" />
                        <span>Мої угоди</span>
                    </Link>
                    <Link to="/advertisment" className="link">
                        <img src={gromkogovoritel} alt="" />
                        <span>Мої оголошення</span>
                    </Link>
                    <Link to="/my-transport" className="link">
                        <img src={van} alt="" />
                        <span>Мій транспорт</span>
                    </Link>
                </div>
            </div>
            <Modal setVision={setVision} vision={vision}/>
        </main>
    )
}

export default Profile