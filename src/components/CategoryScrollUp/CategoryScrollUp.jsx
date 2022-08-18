import React,{useState} from "react";
import scrollup from '../../assets/scrollup.svg'

const CategoryScrollUp = (props) => {
    const {header,bodyContent} = props
    const [vision, setVision] = useState(false)
    return(
        <div className='category_oblast_container'>
        <div onClick={() => setVision(!vision)} className='category_oblast_header'>
            <img style={{
                transform: vision? "rotate(180deg)" : "rotate(0deg)",
                transition: "0.5s"
            }} src={scrollup}/>
            <p>{header}</p>
        </div>
        <div style={{
            display: vision ? "block": "none"
        }} className='category_oblast_body'>
            {bodyContent.map((el,key) => 
               <p key={key}>{el}</p>
            )}
        </div>
    </div>
    )
}

export default CategoryScrollUp