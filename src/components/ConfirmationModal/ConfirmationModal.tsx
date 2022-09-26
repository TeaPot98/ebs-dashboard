import { Modal, Button } from "components";

interface ConfirmationModalProps {
  onClose: () => void;
  onAccept: () => void;
  open: boolean;
  title: string;
}

export const ConfirmationModal = ({
  onClose,
  onAccept,
  open,
  children,
  title,
}: React.PropsWithChildren<ConfirmationModalProps>) => {
  return (
    <Modal onClose={onClose} open={open}>
      <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Content>{children}</Modal.Content>
      <Modal.Footer>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="danger" onClick={onAccept}>
          Accept
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
