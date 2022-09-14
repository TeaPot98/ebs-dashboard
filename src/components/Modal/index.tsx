import { Button } from "components";
import "./Modal.scss";

interface ModalProps {
  title?: string;
  open: boolean;
  setOpen?: string;
  actions?: React.ReactNode;
  onClose: () => void;
}

const Modal = ({
  title = "",
  children,
  open,
  actions,
  onClose,
}: React.PropsWithChildren<ModalProps>) => {
  return (
    <div
      className={`modal ${!open && "modal--closed"}`}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        onClose();
      }}
    >
      <div className="modal__window">
        <div className="modal__header">
          <h5 className="modal__title">{title}</h5>
        </div>
        <div className="modal__content">{children}</div>
        <div className="modal__footer">
          {actions}
          <Button onClick={onClose}>Cancel</Button>
        </div>
      </div>
    </div>
  );
};

export { Modal };
