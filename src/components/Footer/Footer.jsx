import React from 'react'
import logo from "../../assets/logo.svg"
import apple from "../../assets/appstore.svg"
import play from "../../assets/googleplay.svg"

const Footer = () => {
    return(
        <footer>
            <div className='container' style={{minHeight: '0px'}}>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='col-md-12'>
                            <img src={logo} alt="Logo-Moow-footer"/>
                        </div>
                        <div className='col-md-12'>
                            <ul className='footer-menu'>
                                <li>Склади</li>
                                <li>Транспорт</li>
                                <li>Техніка</li>
                                <li>Продукція</li>
                                <li>Послуги</li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <p className='text-footer'>Отримувати оновлення</p>
                                <input/>
                            </div>
                            <div className='col-md-6'>
                                <p className='text-footer'>Безкоштовний додаток на твій телефон</p>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <img style={{width: '100%'}} src={play}/>
                                    </div>
                                    <div className='col-md-6'>
                                        <img style={{width: '100%'}} src={apple}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer