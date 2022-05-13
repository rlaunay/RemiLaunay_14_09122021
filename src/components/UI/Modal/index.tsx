import {AnimatePresence, motion} from 'framer-motion';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';

const dropIn = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.1,
      type: 'spring',
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
};


export type ModalProps = {
  onClose: () => void;
  isOpen: boolean;
}

export const ModalLayout: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      {isOpen && <Backdrop onClose={onClose}>
        <motion.div
          className="bg-white p-3 rounded-lg"
          onClick={(e: any) => e.stopPropagation()}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </motion.div>
      </Backdrop>}
    </AnimatePresence>
  );
};

const Modal: React.FC<ModalProps> = (props) => ReactDOM.createPortal(
  <ModalLayout {...props} />, 
  document.getElementById('overlays') as HTMLDivElement
);

export default Modal;