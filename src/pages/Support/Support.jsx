import React from 'react'
import moow from '../../assets/support/moow.svg'
import viber from '../../assets/support/viber.svg'
import telega from '../../assets/support/telegram.svg'
import LangSwitch from '../../components/LangSwitch/LangSwitch'

const Support = () => {
    return(
        <main>
            <div className='container' style={{paddingTop:125}}>
                <div className='support_container'>
                    <div className='col-md-12 p-0'>
                        <h2>Мова та зворотній зв'язок</h2>
                    </div>
                    <LangSwitch/>
                    <p className='supp_hover'>Наші контакти та підтримка</p>
                    <div className='support_item'>
                        <div>
                            <p>Підтримка у чаті Moow</p>
                        </div>
                        <div>
                            <img src={moow}/>
                        </div>
                    </div>
                    <div className='support_item'>
                        <div>
                            <p>Пітримка у Viber</p>
                        </div>
                        <div>
                            <img src={viber}/>
                        </div>
                    </div>
                    <a href='https://t.me/MoowSupBot' target='_blank' className='support_item'>
                        <div>
                            <p>Підтримка у Telegram</p>     
                        </div>
                        <div>
                            <img src={telega} />
                        </div>
                    </a>
                </div>
            </div>
        </main>
    )
}

export default Support