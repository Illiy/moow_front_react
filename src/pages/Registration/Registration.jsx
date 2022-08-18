import React, { useState, useEffect } from 'react'
import choosereg from '../../assets/choosereg.svg'
import phone from '../../assets/phone.svg'
import complete from '../../assets/complete.svg'
import { useNavigate } from "react-router-dom";
import { sendCod, sendProv, createRegister, createBusinesRegister } from "../../API/api";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";


const Registration = () => {
    const [chooseType, setChooseType] = useState('')
    const [step, setStep] = useState(0)
    const [phoneVal, setPhone] = useState("")
    const [code, setCode] = useState("")
    const [pib, setPib] = useState("")
    const [email, setEmail] = useState("")
    const [nameCompany, setNameCompany] = useState("")
    const [erdpo, setErdpo] = useState("")
    const isRegister = JSON.parse(localStorage.getItem("userMove"))

    let history = useNavigate();
    const sendPhoneNumber = () => {
        sendCod(phoneVal, setStep)
    }

    useEffect(() => {
        if (isRegister) {
            history("/")
        }
    }, [])

    const createSendCode = () => {
        sendProv(phoneVal, code, setStep)
    }

    const createReg = () => {
        if (pib !== '' && email !== '') {
            createRegister(phoneVal, email, chooseType, pib, setStep)
            if (pib.split(' ').length < 3) {
                toast.error("Будь ласка введіть ваше повне ім'я", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            }
        } else {
            toast.error('Деякі поля не заповнені', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    const createBusinesReg = () => {
        if (erdpo !== '' && email !== '' && nameCompany !== '') {
            createBusinesRegister(phoneVal, email, chooseType, nameCompany, setStep, erdpo)
        } else {
            toast.error('Деякі поля не заповнені', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        }
    }

    const validateCode = (event) => {
        if (event.target.value.length !== 5) {
            setCode(event.target.value)
        }
    }

    const RedirectToPage = () => {

        window.location.pathname = "/"
    }



    return (
        <main>
            <div className='container'>

                <div className='sign-in-form-container'>
                    {!chooseType ?
                        <div className='form_sign_choose'>
                            <div>
                                <img src={choosereg} />
                                <p>Виберіть тип підприємницької діяльності</p>
                                <button onClick={() => setChooseType('physical')}>Фізична особа</button>
                                <br />
                                <button onClick={() => setChooseType('entity')}>Юридична особа</button>
                            </div>
                        </div>
                        : step === 0 ?
                            <div className='form_sign_num'>
                                <div>
                                    <p className='sign_title'>Авторизація</p>
                                    <p className='sign_description'>Виберіть спосіб авторізації</p>
                                    <p className='hover_input'>Телефон</p>
                                    <div className='input_register'>
                                        <img src={phone} alt="phone" />
                                        <input
                                            type="number"
                                            value={phoneVal}
                                            onChange={(event) => setPhone(event.target.value)}
                                            placeholder="Введіть ваш номер" />
                                    </div>
                                    {phoneVal.length === 10 ?
                                        <button className='continue_sign' onClick={() => sendPhoneNumber()}>Продовжити</button>
                                        : null}
                                </div>
                            </div>
                            :
                            step === 1 ?
                                <div className='form_sign_num'>
                                    <div>
                                        <p className='sign_title'>Авторизація</p>
                                        <p className='sign_description'>Введіть отриманий код</p>
                                        <p className='hover_input'>Введіть код із смс</p>
                                        <input
                                            value={code}
                                            onChange={(event) => validateCode(event)}
                                            placeholder="_ _ _ _"
                                            className='code_register_inpur' />
                                        <br />
                                        {code.length === 4 ?
                                            <button className='continue_sign' onClick={() => createSendCode()}>Увійти</button>
                                            : null}
                                    </div>
                                </div>
                                :
                                step === 2 ?
                                    <div className='form_sign_num'>
                                        <div>
                                            <p className='sign_title'>Реєстрація</p>
                                            <p className='sign_description'>Введіть свої дані</p>
                                            {chooseType === 'physical' ?
                                                <div>
                                                    <p style={{ textAlign: 'left' }} className='hover_input'>ПІБ</p>
                                                    <input
                                                        value={pib}
                                                        onChange={(event) => setPib(event.target.value)}
                                                        placeholder="Введіть ваші ПІБ"
                                                        className='input-info' />
                                                    <br />
                                                    <p style={{ textAlign: 'left' }} className='hover_input'>Email</p>
                                                    <input
                                                        value={email}
                                                        onChange={(event) => setEmail(event.target.value)}
                                                        placeholder="Введіть ваш email"
                                                        className='input-info' />
                                                    <br />
                                                    <button className='continue_sign' onClick={() => createReg()}>Увійти</button>
                                                </div>
                                                :
                                                <div>
                                                    <p style={{ textAlign: 'left' }} className='hover_input'>Назва</p>
                                                    <input
                                                        value={nameCompany}
                                                        onChange={(event) => setNameCompany(event.target.value)}
                                                        placeholder="Введіть назву підприємства"
                                                        className='input-info' />
                                                    <br />
                                                    <p style={{ textAlign: 'left' }} className='hover_input'>Email</p>
                                                    <input
                                                        value={email}
                                                        onChange={(event) => setEmail(event.target.value)}
                                                        placeholder="Введіть ваш email"
                                                        className='input-info' />
                                                    <br />
                                                    <p style={{ textAlign: 'left' }} className='hover_input'>ЄДРПУО</p>
                                                    <input
                                                        value={erdpo}
                                                        onChange={(event) => setErdpo(event.target.value)}
                                                        placeholder="Введіть ваш номер ЄДРПУО"
                                                        className='input-info' />
                                                    <br />
                                                    <button className='continue_sign' onClick={() => createBusinesReg()}>Зберегти</button>
                                                </div>}
                                        </div>
                                    </div>
                                    :
                                    <div className='form_sign_choose'>
                                        <div>
                                            <img src={complete} />
                                            <p className='text-register-complete'>Реєстрація успішно завершена</p>
                                            <button className='button-register-complete' onClick={() => RedirectToPage()}>Перейти на головну</button>
                                        </div>
                                    </div>}
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {/* Same as */}
            <ToastContainer />
        </main>
    )
}

export default Registration