import React,{useState} from 'react'
import complete from '../../assets/complete.svg'

const ModalProd = (props) => {
    const {vision,setVision} = props
    return(
        <div
        style={{
            display: vision ? "block" : "none"
        }}
        className="modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <a onClick={() => setVision(false)} title="Close" className="close">×</a>
            </div>
            <div className="modalProd-body">
                <div>
                    <h2>Фьючерсна угода.</h2>
                    <p>Цей товар \ послуга, які можно придбати (забронювати), але надані вони будуть у майбутньому в оговоренні строки. При замовлені буде депонована частина суми, а продавець візьме на себе обов'язок виконати частину угоди у майбутньому</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ModalProd;