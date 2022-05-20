import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';

import classes from './Modal.module.css';

export type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
}

export const ModalLayout: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    isOpen ? <Backdrop onClose={onClose}>
      <div
        className={classes.container}
        onClick={(e: any) => e.stopPropagation()}
      >
        {children}
      </div>
    </Backdrop> : null
  );
};

const Modal: React.FC<ModalProps> = (props) => ReactDOM.createPortal(
  <ModalLayout {...props} />, 
  document.getElementById('overlays') as HTMLDivElement
);

export default Modal;