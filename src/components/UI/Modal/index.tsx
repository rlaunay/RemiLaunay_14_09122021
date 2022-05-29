import ReactDOM from 'react-dom';
import Fade from '../Fade';
import Backdrop from './Backdrop';

import classes from './Modal.module.css';

export type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
}

export const ModalLayout: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    <Fade visible={isOpen} >
      <Backdrop onClose={onClose}>
        <div
          className={classes.container}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation()}
        >
          <span className={classes.close} onClick={onClose} >
            &times;
          </span>
          {children}
        </div>
      </Backdrop>
    </Fade>
  );
};

const Modal: React.FC<ModalProps> = (props) => ReactDOM.createPortal(
  <ModalLayout {...props} />, 
  document.getElementById('overlays') as HTMLDivElement
);

export default Modal;