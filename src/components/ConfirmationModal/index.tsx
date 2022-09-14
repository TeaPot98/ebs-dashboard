import { Modal, Button } from "components";

interface ConfirmationModalProps {
  onClose: () => void;
  onAccept: () => void;
  open: boolean;
  title: string;
}

const ConfirmationModal = ({
  onClose,
  onAccept,
  open,
  children,
  title,
}: React.PropsWithChildren<ConfirmationModalProps>) => {
  return (
    <Modal
      onClose={onClose}
      title={title}
      open={open}
      actions={
        <Button type="danger" onClick={onAccept}>
          Accept
        </Button>
      }
    >
      {children}
    </Modal>
  );
};

export { ConfirmationModal };
