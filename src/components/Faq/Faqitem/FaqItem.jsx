import React,{useState} from 'react'
import plus from '../../../assets/plus.svg'
import close from '../../../assets/close.svg'

const FaqItem = (props) => {
    const {answer,quess} = props
    const [active,setActive] = useState(false)
    return(
        <div className='col-md-12 p-0'>
            <div className='faq-item'>
                <div className='faq-header'>
                    <div><p style={{
                        opacity: active ? "0.5": "1"
                    }} className='quess-text'>{quess}</p></div>
                    <div><img onClick={() => setActive(!active)} src={active ? close : plus} alt="plus"/></div>
                </div>
                <div style={{
                    display: active ? "block": "none"
                }}>
                    <p className='answer-text'>{answer}</p>    
                </div>
            </div>
        </div>
    )
}

export default FaqItem