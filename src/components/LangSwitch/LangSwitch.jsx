import React,{useState} from 'react'
import langswitch from '../../assets/langswitch.svg'

const LangSwitch = () => {
    const [active,setActive] = useState(false)
    return(
        <div className='panel_choose_lang'>
            <p className='choose_lang_hover'>Обрати мову сервісу</p>
                <div className='select_lang_choose'>
                    <div onClick={() => setActive(!active)} className='select_lang_choose_head'>
                        <p>Українська</p>
                        <img src={langswitch} alt="lang-switch"/>
                    </div>
                <div style={{
                    display: active ? 'block' : 'none'
                }} className='select_lang_choose_body'>
                    <p>English</p>
                    <p>Poland</p>
                </div>
            </div>
        </div>
    )
}

export default LangSwitch