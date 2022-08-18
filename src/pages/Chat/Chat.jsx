import React, { useState, useEffect } from 'react'
import share from '../../assets/chat/share.svg'
import send from '../../assets/chat/send.svg'
import { useNavigate } from 'react-router-dom'
import ScrollIntoView from 'react-scroll-into-view'
import CommQest from '../../components/CommQest/comm'
import { chatList, sendMess } from '../../API/api'

const Chat = () => {
    const isRegister = JSON.parse(localStorage.getItem("userMove"))
    let history = useNavigate();
    useEffect(() => {
        if (isRegister) { }
        else {
            history("/sign-in")
        }
    }, [])

    const panelMenu = ["Купую", "Продаю", "Обрані", "Архів"]
    const [currentType, setCurrentType] = useState('Купую')
    const [listFriend, setListFriend] = useState([])
    const [rerender, setRerender] = useState(true)
    const [message, setMessage] = useState()
    const userData = JSON.parse(localStorage.getItem("userMove"))
    useEffect(() => {
        chatList(userData !== null ? userData.token : '', setListFriend)
    }, [rerender])
    const sendCurentMessege = (id) => {
        if (message !== '') sendMess(userData.token, id, message, setRerender, rerender)
        setMessage('')
        delay(1000).then(() => ppp())
    }
    const [noChoosen, setNoChoosen] = useState('')
    const [activeMes, setActiveMes] = useState(false)

    const delay = async (ms) => await new Promise(resolve => setTimeout(resolve, ms));

    function ppp() {
        var block = document.getElementById("box"); 
        // block.scrollTop = 9999999999999999999999999999999;
        block.scrollIntoView({behavior: 'smooth'})
    }

    function scroll(id) {
        setNoChoosen(id)
        delay(1).then(() => ppp())
    }

    return (
        <main style={{display: 'flex', minHeight: '73vh', height: '73vh'}}>
            {listFriend.length === 0 ?
                <span className='zaglushka'>У вас нет начатых диалогов</span>
                :
                <div className='container chat-container' style={{ paddingTop: 125, position: 'relative', minHeight: '73vh', height: '73vh'}}>
                    <div className='row'>
                        <div className='col-md-4 p-0'>
                            <div className='chat_panel_choose'>
                                {panelMenu.map((el, key) =>
                                    <div key={key}>
                                        <p onClick={() => setCurrentType(el)}
                                            className={`panel_chat_choose_item ${el === currentType ? 'active_chat_panel' : ''}`}>{el}</p>
                                    </div>)}
                            </div>
                            <div className='list_friends_chat_container'>
                                {listFriend.map((el, key) =>
                                    <div key={key} onClick={() => scroll(el.id)} className='friend-container-item'>
                                        <div>
                                            <label className='img-container-no-photo'>{el.listUserGroup.filter(el => el.phone !== userData.phone)[0].name[0]}</label>
                                        </div>
                                        <div className='friend-item-body'>
                                            <p className='friend-item-name'>{el.listUserGroup.filter(el => el.phone !== userData.phone)[0].name.length >= 22 ? el.listUserGroup.filter(el => el.phone !== userData.phone)[0].name.substring(22, 0) + '...' : el.listUserGroup.filter(el => el.phone !== userData.phone)[0].name}</p>
                                            <p className='friend-item-description'>
                                                {el.content.length === 0 ? '' : el.content[el.content.length - 1].message.length <= 70 ? el.content[el.content.length - 1].message : el.content[el.content.length - 1].message.substring(70, 0) + '...'}
                                            </p>
                                            <label className='lost-mess-container'>4</label>
                                            <label className='date-last-mess'>{el.content.length === 0 ? '' : new Date(el.content[el.content.length - 1].dateSend).getHours() + ':' + new Date(el.content[el.content.length - 1].dateSend).getMinutes()}</label>
                                        </div>
                                    </div>)}
                            </div>
                        </div>
                        {noChoosen === ''? <span className='zaglushka'>Виберіть кому бажаєте написати</span> : listFriend.filter(el => el.id === noChoosen).map((el, key) =>
                            <div className={activeMes === true ? 'col-md-8 chat-messege p-0 activeMessedge' : 'col-md-8 chat-messege p-0'}>
                                <div className='main-panel-window'>
                                    {/* <CommQest /> */}
                                    {el.content.map((elle, key) =>
                                        <div id={el.id} className='item_message'>
                                            <div className='item_message_avatar_container'>
                                                <label className='img-container-no-photo_message'>{elle.name[0]}</label>
                                            </div>
                                            <div className='item_message_container' style={elle.phone === userData.phone ? { backgroundColor: '#F5F5F5' } : {}}>
                                                <p>{elle.message}</p>
                                                <label className='date-current-message'>{new Date(elle.dateSend).getHours() + ':' + new Date(elle.dateSend).getMinutes()}</label>
                                            </div>
                                        </div>
                                    )}

                                    <div id='box'></div>
                                </div>
                                <div className='send_mess_panel_container'>
                                    <input type="text" onChange={(event) => setMessage(event.target.value)} value={message} />
                                    <div className='send-mess_share_container'>
                                        <img src={share} alt="share button" onClick={() => scroll()} />
                                    </div>
                                    <div onClick={() => sendCurentMessege(noChoosen)} className='send-mess_send_butt_container'>
                                        <img src={send} alt="send message button" />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>}
        </main>
    )
}

export default Chat