import classNames from "classnames";

import "./Modal.scss";
import { ModalHeader } from "./ModalHeader";
import { ModalContent } from "./ModalContent";
import { ModalFooter } from "./ModalFooter";
import { ModalTitle } from "./ModalTitle";

interface ModalProps {
  title?: string;
  open: boolean;
  setOpen?: string;
  actions?: React.ReactNode;
  onClose: () => void;
}

export const Modal = ({
  // title = "",
  children,
  open,
  // actions,
  onClose,
}: React.PropsWithChildren<ModalProps>) => {
  return (
    <div
      className={`modal ${classNames({ "modal--closed": !open })}`}
      onClick={(event) => {
        event.stopPropagation();
        if (event.target !== event.currentTarget) return;
        onClose();
      }}
    >
      <div className="modal__container">
        {children}
        {/* <div className="modal__header">
          <h5 className="modal__title">{title}</h5>
        </div> */}
        {/* <div className="modal__content">{children}</div>
        <div className="modal__footer">
          {actions}
          <Button onClick={onClose}>Cancel</Button>
        </div> */}
      </div>
    </div>
  );
};

Modal.Header = ModalHeader;
Modal.Content = ModalContent;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;
