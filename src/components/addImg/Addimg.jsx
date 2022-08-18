import React,{useRef, useState} from 'react'

const AddImg = (props) => {
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
              <input onDrop={onDropFunction} onDragEnter={handlerDragEmpty} type="file" id="file-input-id" ref={fileComponent} onChange={handlerSubmit} className="file-input" />
              <label onDrop={onDropFunction} onDragOver={handlerDragEmpty} htmlFor="file-input-id">Перетягніть зображення до зони <br /> або натисніть щоб додати фото</label>
            </div>
            <button>Опублікувати</button>
        </div>
    )
}

export default AddImg