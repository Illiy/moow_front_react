import React, { useState } from "react";
import { usePaymentInputs } from "react-payment-inputs";

import strahovka from '../../assets/strahovka.svg';

const Strahovka = () => {

    // страница 
    const [page, setPage] = useState(1)
    const changePage = () => {
        page === 1 ? setPage(2) : setPage(3)
    }
    const prevChangePage = () => {
        page === 3 ? setPage(2) : setPage(1)
    }

    // Інформація про оплату
    const [radio, setRadio] = useState('cardexist')


    // Поля для карт
    const [cardName, setCardName] = useState()
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


    // ПІБ
    const [pib, setPib] = useState()

    // Адреса
    const [adres, setAdres] = useState()

    // Страхова компанія
    const company = [{ name: 'Компанія', value: 'company' }, { name: 'Компанія 1', value: 'company1' }, { name: 'Компанія 2', value: 'company2' }]
    const [companyValue, setCompanyValue] = useState('company')
    const chengeSelectCompany = (event) => {
        setCompanyValue(event.target.value)
    }
    // Страхова компанія
    const tarif = [{ name: 'Тариф', value: 'tarif' }, { name: 'Тариф 1', value: 'tarif1' }, { name: 'Тариф 2', value: 'tarif2' }]
    const [tarifValue, setTarifValue] = useState('tarif')
    const chengeSelectTarif = (event) => {
        setTarifValue(event.target.value)
    }
    // Тип страхування
    const tip = [{ name: 'Транспорт', value: 'transport' }, { name: 'Склад', value: 'angar' }, { name: 'Техніка', value: 'tehnika' }, { name: 'Продукція', value: 'produktion' }]
    const [tipValue, setTipValue] = useState('transport')
    const chengeSelectTip = (event) => {
        setTipValue(event.target.value)
    }

    return (
        <div className="strahovka">
            <div className="container">
                <div className="strahovkaBlock">
                    <div className="strahovkaHead">
                        <img src={strahovka} alt="" />
                        <h2>Страхування</h2>
                        <p>Страхування - відносини між страхувальником і страховиком, щодо захисту майнових інтересів фізичних та юридичних осіб (страхувальників) при настанні певних подій (страхових випадків) за рахунок грошових фондів (страхових фондів), що формуються із страхових внесків, що сплачуються ними (страхової премії).</p>
                    </div>
                    <div className="strahovkaNav">
                        <span className="elipse elipseActive"></span>
                        <span className={'line' + (page >= 2 ? ' lineActive' : '')}></span>
                        <span className={'elipse' + (page >= 2 ? ' elipseActive' : '')}></span>
                        <span className={'line' + (page >= 3 ? ' lineActive' : '')}></span>
                        <span className={'elipse' + (page >= 3 ? ' elipseActive' : '')}></span>
                    </div>
                    {page === 1 ?
                        <div className="strahovkaFooter">
                            <h3>Дані</h3>
                            <div className="strahovkaFooterBlock">
                                <div>
                                    <label htmlFor="">ПІБ</label>
                                    <input value={pib} onChange={event => setPib(event.target.value)} type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Адреса</label>
                                    <input value={adres} onChange={event => setAdres(event.target.value)} type="text" />
                                </div>
                                <div>
                                    <label htmlFor="">Тип страхування</label>
                                    <select value={tipValue} onChange={chengeSelectTip} name="" id="">
                                        {tip.map((tip, key) =>
                                            <option key={key} value={tip.value}>{tip.name}</option>
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Страхова компанія</label>
                                    <select value={companyValue} onChange={chengeSelectCompany} name="" id="">
                                        {company.map((company, key) =>
                                            <option key={key} value={company.value}>{company.name}</option>
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="">Тариф</label>
                                    <select value={tarifValue} onChange={chengeSelectTarif} name="" id="">
                                        {tarif.map((tarif, key) =>
                                            <option key={key} value={tarif.value}>{tarif.name}</option>
                                        )}
                                    </select>
                                </div>
                            </div>
                        </div> : page === 2 ?
                            <div>
                                <div className="cardRadio">
                                    <input type="radio"
                                        value="cardexist"
                                        onChange={(event) => setRadio(event.target.value)}
                                        checked={radio === 'cardexist'}
                                        name="card"
                                        id="card1" />
                                    <label htmlFor="card1">
                                        <span></span>
                                        Card Ending in 1234 (Exp. 04/24)</label>
                                </div>
                                <div className="cardRadio">
                                    <input
                                        value="carddiff"
                                        onChange={(event) => setRadio(event.target.value)}
                                        checked={radio === 'carddiff'}
                                        type="radio"
                                        name="card"
                                        id="newCard" />
                                    <label htmlFor="newCard">
                                        <span></span>
                                        Pay with a different card</label>
                                </div>
                                {radio === 'carddiff' ?
                                    <div className="strahovkaFooter-page2">
                                        <h3><span></span>Карта</h3>
                                        <div className="strahovkaFooterBlock">
                                            {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
                                            <div>
                                                <label htmlFor="">Name on Card</label>
                                                <input type="text" onChange={event => setCardName(event.target.value)} value={cardName} />
                                            </div>
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
                                        </div>
                                    </div>
                                    : ''}
                            </div>
                            :
                            <div className="strahovkaFooter-page3">
                                <h3>Замовлення</h3>
                                <div>
                                    <h4>Ваш кошик:</h4>
                                    <span>1 послуга</span>
                                    <span>Итого : 376 грн</span>
                                    <span>Arrives by</span>
                                    <h4>Доставка:</h4>
                                    <span>Full Name</span>
                                    <span>Address</span>
                                    <span>City, State, Zip</span>
                                    <h4>Оплата:</h4>
                                    <span>Card Ending In: 1234</span>
                                    <span>Expires: 04/24</span>
                                </div>
                            </div>
                    }
                    <div className="blockButton">
                        {page === 1 ? '' :
                            <button onClick={prevChangePage} className="prev">
                                Назад
                            </button>
                        }
                        {page === 3 ?
                            <button onClick={changePage} className="next">
                                Придбати
                            </button> :
                            <button onClick={changePage} className="next">
                                Далі
                                <span></span>
                            </button>
                        }
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Strahovka