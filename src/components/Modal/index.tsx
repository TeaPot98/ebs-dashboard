import Button from '../Button'
import './Modal.scss'

const Modal = ({ title, children, open, onClose }: ModalProps) => {
  return (
    <div className={`modal ${!open && 'modal--closed'}`}>
      <div className="modal__window">
        <div className="modal__header">
          <h5 className="modal__title">
            {title}
          </h5>
        </div>
        <div className="modal__content">
          {children}
        </div>
        <div className="modal__footer">
          <Button onClick={onClose}>Close Modal</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal

interface ModalProps {
  title: string;
  children: React.ReactNode;
  open: boolean;
  setOpen?: string;
  onClose: () => void
}