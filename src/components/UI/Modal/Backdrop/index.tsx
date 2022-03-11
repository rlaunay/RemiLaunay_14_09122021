import { motion } from 'framer-motion';

type BackdropProps = {
  onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ children, onClose }) => (
  <motion.div
    className="fixed inset-0 bg-black/30 flex justify-center items-center z-40"
    onClick={onClose}
    role="none"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.3 }}
    exit={{ opacity: 0 }}
  >
    {children}
  </motion.div>
);

export default Backdrop;