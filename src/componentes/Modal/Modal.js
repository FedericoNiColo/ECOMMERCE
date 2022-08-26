import './Modal.css'

const Modal = ({setShowModal, children, title}) => {
    return(
        <div className="modal-custom">
            <h2>{title}</h2>
            {/* <CloseIcon onClick={() => close(false)}/> */}
            {children}
            <button onClick={()=> setShowModal(false)}>X</button>
        </div>
    )
}

export default Modal
