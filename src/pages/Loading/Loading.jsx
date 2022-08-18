import React from 'react'
import loader from '../../assets/load.svg'
import logo from '../../assets/logo.svg'

const Loading = () => {
    return(
        <div className='load-page'>
            <div className='container-fluid'>
                <div className='col-md-12'>
                    <img src={logo} alt="Logo Moow"/>
                </div>
                <div className='load-body'>
                    <img src={loader} alt="loader Moow"/>
                </div>
            </div>
        </div>
    )
}

export default Loading