import React, {useEffect, useRef, useState} from "react";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img from '../../../assets/angar3.png';
import AddImg from "../../../components/addImg/Addimg";
import { useNavigate } from "react-router-dom";

const SwiperSec = (props) => {

    const isRegister = JSON.parse(localStorage.getItem("userMove"))
    let history = useNavigate();
    useEffect(() => {
        if(isRegister){}
        else {
            history("/sign-in")
        }
    },[])

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

    const {file, setFile} = props
    const [modal, setModal] = useState(false)
    const handlerPablic = () => {
        setFile(images)
        setModal(false)
    }
    const close = () => {
        setModal(false)
    }


    return(
        <div className="swiperBlock">
            {file.length === 0 ? 
            <div onClick={()=>setModal(true)} className="preveImg"></div> : 
            <Swiper 
                modules={[Navigation, Pagination, Pagination]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{type: 'bullets', clickable: true, dynamicBullets: true }}
            >
                {file.map((el, key) =>
                    <SwiperSlide key={key}>
                        {/* <img src={} alt="" /> */}
                        <div className="img" style={{backgroundImage: `url(${URL.createObjectURL(el)})`}}></div>
                        <div className="back"></div>
                    </SwiperSlide>
                )}
            </Swiper>
            }
            <div onClick={()=>setModal(true)} className="add-img"></div>

            <div style={modal === false ? {display: 'none'} : {display: 'block'}} className='addImg'>
                <button onClick={() => close()} className="close">X</button>
                <h3>Вибрані файли</h3>
                <ul>
                    { images === 0 ? '' :
                    images.map((el, key) =>
                        <li onClick={() => deliteImage(el.name)} key={key} style={{backgroundImage: `url(${URL.createObjectURL(el)})`}} alt="" />
                    )
                    }
                </ul>
                <div>
                    <input onDrop={onDropFunction} onDragEnter={handlerDragEmpty} type="file" id="file-input-id" ref={fileComponent} onChange={handlerSubmit} className="file-input" />
                    <label onDrop={onDropFunction} onDragOver={handlerDragEmpty} htmlFor="file-input-id">Перетягніть зображення до зони <br /> або натисніть щоб додати фото</label>
                </div>
                <button onClick={() => handlerPablic()}>Опублікувати</button>
            </div>
            
        </div>
    )
}

export default SwiperSec;