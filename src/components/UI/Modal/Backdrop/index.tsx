import classes from './Backdrop.module.css';

type BackdropProps = {
  onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ children, onClose }) => (
  <div
    className={classes.backdrop}
    onClick={onClose}
    role="none"
  >
    {children}
  </div>
);

export default Backdrop;