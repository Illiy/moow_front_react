import React,{useState} from 'react'
import complete from '../../assets/complete.svg'

const Modal = (props) => {
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
            <div className="modal-body">
                <div>
                    <img style={{width: 72.62}} src={complete}/>
                    <p className='success-text-profile'>Профіль збережено</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Modal