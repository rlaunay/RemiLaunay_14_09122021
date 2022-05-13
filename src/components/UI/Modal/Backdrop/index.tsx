type BackdropProps = {
  onClose: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ children, onClose }) => (
  <div
    className="fixed inset-0 bg-black/30 flex justify-center items-center z-40"
    onClick={onClose}
    role="none"
  >
    {children}
  </div>
);

export default Backdrop;