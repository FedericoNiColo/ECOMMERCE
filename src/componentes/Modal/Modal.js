import './Modal.css'

const Modal = ({ setShowModal, children, title }) => {
    return (
        <div className="modal-custom">
            <h2>{title}</h2>
            {/* <CloseIcon onClick={() => close(false)}/> */}
            <div className='container-modal'>
                {children}
            </div>
            <svg onClick={() => setShowModal(false)} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="36" height="36" viewBox="0 0 24 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M10 10l4 4m0 -4l-4 4" />
            </svg>
        </div>
    )
}

export default Modal
