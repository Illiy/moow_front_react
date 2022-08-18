import React, {useState} from "react";
import { usePaymentInputs } from "react-payment-inputs";

import Privat from '../../assets/privatPay.svg'
import CN from '../../assets/cardNumber.svg'

const Buy = () => {

    const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs();
    const [cardNumber, setCardNumber] = useState()
    const [expiryDate, setExpiryDate] = useState()
    const [cvc, setCvc] = useState()
    const handleChangeCardNumber = (event) => {
        setCardNumber(event.target.value)
    }
    const handleChangeExpiryDate = (event) => {
        setExpiryDate(event.target.value)
    }
    const handleChangeCVC = (event) => {
        setCvc(event.target.value)
    }

    return (
        <div className="container buy">
            <div className="top">
                <h2>До оплати:</h2>
                <span>315.00 UAH</span>
                <p>Замовлення №314576</p>
            </div>
            <div className="middle">
                <span>Оплатити через Приват24</span>
                <button>
                    <img src={Privat} alt="" />
                </button>
                <button>
                    <img src={CN} alt="" />
                </button>
                <div className="middle-ps">
                    <h3><span></span>Карта</h3>
                    <span>Інший спосіб</span>
                </div>
            </div>
            <div className="bottom">
                <div>
                    <label htmlFor="">Card Number</label>
                    <input {...getCardNumberProps({ onChange: handleChangeCardNumber })} placeholder="_ _ _ _  _ _ _ _  _ _ _ _  _ _ _ _" value={cardNumber} />
                </div>
                <div className="smale">
                    <label htmlFor="">Строк дії</label>
                    <input {...getExpiryDateProps({ onChange: handleChangeExpiryDate })} value={expiryDate} />
                </div>
                <div className="smale">
                    <label htmlFor="">CVV2</label>
                    <input {...getCVCProps({ onChange: handleChangeCVC })} value={cvc} />
                </div>
                <div className="bottom-ps">
                    <p>Натискаючи на кнопку “Оплатити” ви приймаєте<span> Угоду користувача</span></p>
                    <button>Оплатити</button>
                </div>
            </div>
            <button className="button">Відмінити оплату</button>
        </div>
    )
}

export default Buy