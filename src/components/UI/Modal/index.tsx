import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';

export type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
}

export const ModalLayout: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    isOpen ? <Backdrop onClose={onClose}>
      <div
        className="bg-white p-3 rounded-lg"
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