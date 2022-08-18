import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import chat from '../../assets/header/chat.svg'
import like from '../../assets/header/like.svg'
import search from "../../assets/header/search.svg"
import user from "../../assets/header/user.svg"
import { Link } from "react-router-dom";
import searchImg from '../../assets/search_input.svg'
import clear from '../../assets/input-search-clear.svg'
import closeImg from '../../assets/close_search_input.svg'
import navbar from '../../storage/navbar.js'


const Header = () => {
    const [searchActive, setSearchActive] = useState(false)
    const [textSearch, setTextSearch] = useState("")
    function checked() {
        document.getElementById('menu__toggle').checked = false;
    }
    return (
        <header>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-2'>
                        <Link to="/" onClick={checked} ><img className="logo" src={logo} alt="Logo Moow" /></Link>
                    </div>
                    <div className='col-md-7'>
                        <ul className='menu-desktop'>
                            <li><a href="/unit-list/warhouseList" >Склади</a></li>
                            <li><a href="/unit-list/transportList" >Транспорт</a></li>
                            <li><a href="/unit-list/tehnikaList" >Техніка</a></li>
                            <li><Link to="/produkcia" onClick={checked} >Продукція</Link></li>
                            <li><Link to="/poslugi" onClick={checked} >Послуги</Link></li>
                        </ul>
                    </div>
                    <div className='col-md-3'>
                        <div className='row'>
                            <ul className='additional-menu'>
                                <li className='li'><Link className='a' onClick={checked} to="/chat">
                                    <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M1.0001 15.7509H11.1524L18.1061 21.0001V21L11.1524 15.7508H1.00012V1.0001H1.0001V15.7509ZM18.1061 15.7509H22.0001V15.7508H18.1061V15.7509ZM22.4001 16.1509H18.5061V21.8032L11.0184 16.1509H0.600098V0.600098H22.4001V16.1509ZM16.9935 14.6878H16.9935V18.8053L16.9935 18.8053V14.6878ZM20.8875 14.6877V2.06322H2.1127V2.06312H20.8875V14.6877H20.8875ZM16.5935 14.2878V18.0023L11.6729 14.2878H2.51268V2.46322H20.4875V14.2878H16.5935Z" fill="#171717" />
                                    </svg>
                                </Link></li>
                                <li className='li' onClick={() => setSearchActive(!searchActive)}>
                                    <span className="a">
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M19.886 11.0922C19.886 15.8504 16.0287 19.7078 11.2704 19.7078C6.51214 19.7078 2.65481 15.8504 2.65481 11.0922C2.65481 6.33392 6.51214 2.47659 11.2704 2.47659C16.0287 2.47659 19.886 6.33392 19.886 11.0922ZM18.6112 18.5887C18.6112 18.5886 18.6112 18.5886 18.6112 18.5886L23.3368 23.3142L24.0979 22.5531L24.098 22.5531L23.3368 23.3143L18.6112 18.5887ZM18.32 18.8632C16.4573 20.554 13.9842 21.5843 11.2704 21.5843C5.47579 21.5843 0.77832 16.8868 0.77832 11.0922C0.77832 5.29756 5.47579 0.600098 11.2704 0.600098C17.065 0.600098 21.7625 5.29756 21.7625 11.0922C21.7625 13.4969 20.9535 15.7127 19.5928 17.4822L24.3808 22.2703C24.537 22.4265 24.537 22.6797 24.3808 22.8359L23.6196 23.5971C23.4634 23.7533 23.2102 23.7533 23.0539 23.5971L18.32 18.8632ZM18.3283 18.3058C18.3283 18.3058 18.3283 18.3058 18.3284 18.3057L18.3283 18.3057C18.3283 18.3057 18.3283 18.3058 18.3283 18.3058L18.3283 18.3058ZM19.3074 17.1969L19.3074 17.1969C19.5376 16.8943 19.751 16.5784 19.9464 16.2505C19.751 16.5784 19.5376 16.8944 19.3074 17.1969ZM18.0368 18.58L18.0368 18.58C16.2468 20.1986 13.8737 21.1843 11.2704 21.1843C5.6967 21.1843 1.17832 16.6659 1.17832 11.0922C1.17832 10.6745 1.20369 10.2628 1.25298 9.85848C1.2037 10.2628 1.17834 10.6745 1.17834 11.0921C1.17834 16.6658 5.69673 21.1842 11.2704 21.1842C13.8737 21.1842 16.2468 20.1985 18.0368 18.58ZM20.2763 11.5139C20.2828 11.3741 20.286 11.2335 20.286 11.0922C20.286 6.11301 16.2496 2.07659 11.2704 2.07659C7.1611 2.07659 3.69391 4.82587 2.60789 8.5854C3.69388 4.82582 7.16109 2.07649 11.2704 2.07649C16.2496 2.07649 20.286 6.11291 20.286 11.0921C20.286 11.2335 20.2828 11.3741 20.2763 11.5139Z" fill="#171717" />
                                        </svg>
                                    </span>
                                </li>
                                <li className='li'><Link className='a' onClick={checked} to="/profile">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6346 6.24798C15.6346 8.33087 13.9461 10.0194 11.8632 10.0194C9.78033 10.0194 8.09182 8.33087 8.09182 6.24798C8.09182 4.1651 9.78033 2.47659 11.8632 2.47659C13.9461 2.47659 15.6346 4.1651 15.6346 6.24798ZM11.8632 11.8959C14.9825 11.8959 17.5111 9.36722 17.5111 6.24798C17.5111 3.12874 14.9825 0.600098 11.8632 0.600098C8.74398 0.600098 6.21533 3.12874 6.21533 6.24798C6.21533 9.36722 8.74398 11.8959 11.8632 11.8959ZM15.9081 7.27167C15.9907 6.94413 16.0346 6.60118 16.0346 6.24798C16.0346 3.94418 14.167 2.07659 11.8632 2.07659C9.90816 2.07659 8.26723 3.42157 7.81524 5.23672C8.2672 3.42152 9.90814 2.07649 11.8632 2.07649C14.167 2.07649 16.0346 3.94409 16.0346 6.24788C16.0346 6.60112 15.9907 6.9441 15.9081 7.27167ZM16.9459 7.55951C16.3634 9.82313 14.3087 11.4958 11.8632 11.4958C8.96491 11.4958 6.61536 9.14621 6.61536 6.24788C6.61536 5.80778 6.66953 5.38032 6.77158 4.97182C6.66952 5.38035 6.61533 5.80784 6.61533 6.24798C6.61533 9.14631 8.96489 11.4959 11.8632 11.4959C14.3087 11.4959 16.3635 9.82318 16.9459 7.55951Z" fill="#171717" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.698242 23.2027V23.6027L23.028 23.6027V23.2027C23.028 22.8292 23.0093 22.4566 22.9721 22.0862C22.8632 21.0031 22.5963 19.9396 22.1782 18.9301C21.6171 17.5755 20.7947 16.3447 19.7579 15.308C18.7211 14.2712 17.4903 13.4488 16.1358 12.8877C14.7812 12.3266 13.3293 12.0378 11.8631 12.0378C10.3969 12.0378 8.9451 12.3266 7.59051 12.8877C6.23593 13.4488 5.00512 14.2712 3.96836 15.308C2.93161 16.3447 2.10921 17.5755 1.54812 18.9301C1.12998 19.9396 0.86307 21.0031 0.754206 22.0862C0.716988 22.4566 0.698242 22.8292 0.698242 23.2027ZM20.4445 19.6482C20.7216 20.3172 20.9189 21.0147 21.0334 21.7262L2.69283 21.7262C2.8074 21.0147 3.00467 20.3172 3.28177 19.6482C3.74855 18.5213 4.43273 17.4974 5.29524 16.6348C6.15775 15.7723 7.18169 15.0882 8.30862 14.6214C9.43554 14.1546 10.6434 13.9143 11.8631 13.9143C13.0829 13.9143 14.2907 14.1546 15.4177 14.6214C16.5446 15.0882 17.5685 15.7723 18.431 16.6348C19.2935 17.4973 19.9777 18.5213 20.4445 19.6482ZM20.8141 19.4951C21.1113 20.2128 21.3205 20.962 21.4384 21.7262C21.4589 21.8591 21.4766 21.9924 21.4915 22.1261H21.4916C21.3906 21.2234 21.1631 20.3376 20.8141 19.495C20.3272 18.3196 19.6135 17.2516 18.7139 16.3519C17.8142 15.4522 16.7462 14.7386 15.5708 14.2517C14.3953 13.7648 13.1355 13.5142 11.8632 13.5142C10.5909 13.5142 9.33102 13.7648 8.15557 14.2517C6.98012 14.7386 5.91207 15.4523 5.01242 16.3519C4.11277 17.2516 3.39913 18.3196 2.91224 19.495C2.82196 19.713 2.73981 19.9339 2.66587 20.1572C2.7398 19.9339 2.82195 19.7131 2.91222 19.4951C3.3991 18.3197 4.11275 17.2517 5.0124 16.352C5.91205 15.4523 6.98009 14.7387 8.15554 14.2518C9.33099 13.7649 10.5908 13.5143 11.8631 13.5143C13.1354 13.5143 14.3953 13.7649 15.5707 14.2518C16.7462 14.7387 17.8142 15.4523 18.7139 16.352C19.6135 17.2516 20.3272 18.3197 20.8141 19.4951ZM1.1522 22.1262C1.12962 22.351 1.11408 22.5766 1.10568 22.8027C1.10072 22.9359 1.09824 23.0693 1.09824 23.2027L22.628 23.2027V23.2026L1.09827 23.2026C1.09827 22.8425 1.11634 22.4832 1.15223 22.1261C1.17844 21.8654 1.21414 21.6057 1.25926 21.3478C1.21414 21.6058 1.17842 21.8654 1.1522 22.1262Z" fill="#171717" />
                                        </g>
                                    </svg>
                                </Link></li>
                                <li className='li'><Link className='a' onClick={checked} to="/rating">
                                    <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.5" fill-rule="evenodd" clip-rule="evenodd" d="M2.22006 12.3583L11.6275 21.7658L21.0304 12.363L21.035 12.3583C22.3034 11.0476 23.0275 9.34924 23.0275 7.5201C23.0275 3.69918 19.9285 0.600098 16.1075 0.600098C14.5104 0.600098 12.9286 1.23195 11.6311 2.37257C10.3575 1.22865 8.73994 0.600098 7.14754 0.600098C3.32662 0.600098 0.227539 3.69918 0.227539 7.5201C0.227539 9.34924 0.951654 11.0476 2.22006 12.3583ZM20.7475 12.0801L11.6275 21.2001L2.50754 12.0801C1.30754 10.8401 0.627539 9.2401 0.627539 7.5201C0.627539 6.9734 0.694879 6.44239 0.821714 5.9349C0.694895 6.44236 0.627563 6.97334 0.627563 7.52C0.627563 9.24 1.30756 10.84 2.50756 12.08L11.6276 21.2L20.7476 12.08C21.346 11.4616 21.8151 10.7538 22.135 9.98614C21.8151 10.7538 21.346 11.4617 20.7475 12.0801ZM11.9875 4.0001L11.6275 4.4001L11.2675 4.0001C10.1475 2.7201 8.62754 2.0001 7.14754 2.0001C4.5692 2.0001 2.39369 3.78406 1.79239 6.18059C2.39365 3.78401 4.56919 2 7.14756 2C8.62756 2 10.1476 2.72 11.2676 4L11.6276 4.4L11.9876 4C13.1076 2.72 14.6276 2 16.1076 2C19.1476 2 21.6276 4.48 21.6276 7.52C21.6276 7.71973 21.6168 7.91792 21.5955 8.11394C21.6168 7.91796 21.6275 7.7198 21.6275 7.5201C21.6275 4.4801 19.1475 2.0001 16.1075 2.0001C14.6275 2.0001 13.1075 2.7201 11.9875 4.0001ZM2.02754 7.5201C2.02754 8.85304 2.54484 10.1132 3.47321 11.0801L11.6275 19.2344L19.7819 11.0801C20.7102 10.1132 21.2275 8.85302 21.2275 7.5201C21.2275 4.70101 18.9266 2.4001 16.1075 2.4001C14.7562 2.4001 13.3419 3.05974 12.2886 4.2635L12.2849 4.26768L11.6275 4.99804L10.9665 4.2635C9.91322 3.05974 8.49886 2.4001 7.14754 2.4001C4.32845 2.4001 2.02754 4.70101 2.02754 7.5201Z" fill="#171717" />
                                    </svg>
                                </Link></li>
                            </ul>
                            <div className="hamburger-menu">
                                <input id="menu__toggle" type="checkbox" />
                                <label className="menu__btn" for="menu__toggle">
                                    <span></span>
                                </label>
                                <ul className="menu__box">
                                    {navbar.map((el, key) =>
                                        <li key={key}>
                                            <Link className="menu__item" to={el.link} onClick={checked} >{el.name}</Link>
                                            <img src={el.images} />
                                        </li>)}
                                    <ul className='additional-menu additional-menu-320'>
                                        <li><Link onClick={checked} to="/chat"><img src={chat} alt="chat" /></Link></li>
                                        <li><img onClick={() => setSearchActive(!searchActive)} src={search} alt="search" /></li>
                                        <li><Link onClick={checked} to="/profile"><img src={user} alt="user" /></Link></li>
                                        <li><Link onClick={checked} to="/rating"><img src={like} alt="like" /></Link></li>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {searchActive ?
                        <div className='col-md-12'>
                            <div className='container search-container-mainer'>

                                <div className='search-main-container'>
                                    <div className='search-container'>
                                        <img src={searchImg} alt="search" />
                                        <input value={textSearch} onChange={(event) => setTextSearch(event.target.value)} placeholder="Шукати" />
                                        <img
                                            style={{
                                                display: textSearch.length !== 0 ? "block" : "none"
                                            }}
                                            onClick={() => setTextSearch("")}
                                            src={clear} alt="clear" />
                                    </div>

                                    <img src={closeImg} onClick={() => setSearchActive(false)} className="close_input_search_img" />
                                </div>



                                <p className='search-hover-tags'>Теги</p>
                                <div className='history-search'>
                                    <div className='search_text_item_tag'>#Склад</div>
                                    <div className='search_text_item_tag'>#Склад</div>
                                    <div className='search_text_item_tag'>#Склад</div>
                                    <div className='search_text_item_tag'>#Склад</div>
                                </div>

                                <p className='search-hover-history'>Історія пошуку</p>
                                <div className='history-search'>
                                    <div className='search_text_item_history'>Склад</div>
                                    <div className='search_text_item_history'>Склад</div>
                                    <div className='search_text_item_history'>Склад</div>
                                    <div className='search_text_item_history'>Склад</div>
                                </div>
                            </div>
                        </div> : null}

                </div>
            </div>
        </header>
    )
}

export default Header