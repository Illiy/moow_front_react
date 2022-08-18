import React, {useRef, useState} from "react";

import filter from '../../assets/filter1.png'
import upDown from '../../assets/top-bottom.svg'
import star from '../../assets/star.png'
import angar from '../../assets/angar2.png'

const MyTransport = () => {

    const item = ['','','','','','','','','']

    const [selectChecked1, setSelectChecked1] = useState(false)
    const [filterChecked, setFilterChecked] = useState(false)

    const filterActive = () => {
        setFilterChecked(filterChecked === false ? true : false)
    }

    const selectOne = () => {
        selectChecked1 === false ? setSelectChecked1(true): setSelectChecked1(false)
    }
    const [count, setCount] = useState(0)

    const [images, setImages] = useState([])
    const fileComponent = useRef()
    const handlerSubmit = () => {
      if (fileComponent.current.files.length === 1) {setImages(file => [...file, fileComponent.current.files[0]]);}
    }

    const onDropFunction = (event) => {
      event.preventDefault()
      event.stopPropagation()
      if (event.dataTransfer.files && event.dataTransfer.files.length) {
        setImages(file => [...file, event.dataTransfer.files[0]])
      }
    }

    const handlerDragEmpty = (event) => {
      event.preventDefault()
      event.stopPropagation()
    }

    const deliteImage = (id) => {
      setImages((prevState) => prevState.filter((image) => image.name !== id))
    }

    return (
        <div className="container myTransport">
            {count === 2 ? 
            <div className='addImg'>
                <h3>Вибрані файли</h3>
                <ul>
                    { images === 0 ? '' :
                    images.map((el, key) =>
                        <li onClick={() => deliteImage(el.name)} key={key} style={{backgroundImage: `url(${URL.createObjectURL(el)})`}} alt="" />
                    )
                    }
                </ul>
                <div>
                    <input onDrop={onDropFunction} onDragEnter={handlerDragEmpty} type="file" id="file-input-id" ref={fileComponent} onChange={handlerSubmit} className="file-input" accept="image/*" />
                    <label onDrop={onDropFunction} onDragOver={handlerDragEmpty} htmlFor="file-input-id">Перетягніть зображення до зони <br /> або натисніть щоб додати фото</label>
                </div>
                <button>Опублікувати</button>
            </div>
            :
            ''
            }
            <h1>Транспортні засоби користувача</h1>
            <div className="block">
                <div className="left">
                    <div className="category_middle">
                        <div className="right">
                            <div className="sort">
                                <span>Сортувати</span>
                                <img src={upDown} alt="" />
                            </div>
                            <div className="filter">
                                <span onClick={() => filterActive()}>Фільтр</span>
                                <img src={filter} alt="" onClick={() => filterActive()} />
                                <div style={filterChecked === false ? { height: '0px', width: '0px', padding: '0px' } : { height: '540px', width: '320px', padding: '20px 20px 35px 20px' }} className="filter-block">
                                    <div className="head">
                                        <div>
                                            <img src={filter} alt="" />
                                            <span>Фільтр</span>
                                        </div>
                                        <span className="close" onClick={() => filterActive()}>x</span>
                                    </div>
                                    <div className="main">
                                        <div className="main-block-1">
                                            <span>Область знаходження</span>
                                            <div className="select">
                                                <h3 onClick={() => selectOne()}>Київська область</h3>
                                                <ul style={selectChecked1 === false ? { height: '0px' } : { height: '100%' }}>
                                                    <li onClick={() => selectOne()}>Київська область</li>
                                                    <li onClick={() => selectOne()}>Винницкая область</li>
                                                    <li onClick={() => selectOne()}>Одеская область</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="main-block-2">
                                            <input type="checkbox" name="" id="camera" />
                                            <label htmlFor="camera">Камера</label>
                                        </div>
                                        <div className="main-block-3">
                                            <span>Площа</span>
                                            <div>
                                                <input type="number" name="" id="" />
                                                <span> - </span>
                                                <input type="number" name="" id="" />
                                                <span className="kmm">кв.м.</span>
                                            </div>
                                        </div>
                                        <div className="main-block-4">
                                            <span>Вартість оренди</span>
                                            <div>
                                                <input type="number" name="" id="" />
                                                <span> - </span>
                                                <input type="number" name="" id="" />
                                                <span>грн</span>
                                            </div>
                                        </div>
                                        <div className="main-block-5">
                                            <input type="checkbox" name="" id="chlahi" />
                                            <label htmlFor="chlahi">Під'їзні шляхи</label>
                                        </div>
                                        <div className="main-block-6">
                                            <input type="checkbox" name="" id="rampi" />
                                            <label htmlFor="rampi">Рампи</label>
                                        </div>
                                        <div className="main-block-7">
                                            <span>Дата поновлення оголошення:</span>
                                            <input type="date" name="" id="" />
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <button className="button1">Фільтрувати</button>
                                        <button className="button2">Скинути</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list">
                        {item.map((el, key) => 
                        <div className="list-item">
                            <div className="image" style={{backgroundImage: `url(${angar})`}}></div>
                            <div className="right">
                                <h2>Транспорт 1</h2>
                                <span className="harakteristika">Характеристика</span>
                                <div className="bottom">
                                    <img src={star} alt="" />
                                    <span className="rating">4.8</span>
                                    <span className="value">300 грн/год</span>
                                </div>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                {count === 0 ? 
                <div className="right-b">
                    <div className="tr-block">
                        <div className="image"></div>
                        <div className="input-block">
                            <label htmlFor="">Марка</label>
                            <input type="text" />
                        </div>
                        <div className="input-block">
                            <label htmlFor="">Держномер</label>
                            <input type="text" />
                        </div>
                        <div className="input-block-last">
                            <p htmlFor="">Дата поновлення оголошення:</p>
                            <span>27-04-2022</span>
                        </div>
                    </div>
                    <button onClick={() => setCount(1)}>Верифікувати</button>
                </div>
                : 
                <div className="right-b">
                    <p1 className="p1">Щоб надавати транспортні послуги ви маете підтвердити вашу експертність.</p1>
                    <h3 className="h3">Далі завантажте такі документи:</h3>
                    <ul className="ul">
                        <li className="li">Фото водійскьких прав де видно категорію</li>
                        <li className="li">Техпаспорт з обох боків,</li>
                        <li className="li">Фото номера кузова авто, яке ви додаете</li>
                        <li className="li">Фото номерів причепу (якщо є)</li>
                    </ul>
                    <button onClick={() => setCount(2)}>Верифікувати</button>
                </div>
                }
                
            </div>
        </div>
    )
}

export default MyTransport