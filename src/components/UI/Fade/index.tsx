import { useEffect, useState } from 'react';
import classes from './Fade.module.css';

type Fade = {
  visible: boolean;
  children: React.ReactNode;
  duration?: number;
}

const VISIBLE = 1;
const HIDDEN = 2;
const ENTERING = 3;
const LEAVING = 4;

const Fade: React.FC<Fade> = ({ visible, children, duration = 300 }) => {
  const [state, setState] = useState(visible ? VISIBLE : HIDDEN);


  useEffect(() => {
    if (!visible) {
      setState(LEAVING);
    } else {
      setState(s => s === HIDDEN ? ENTERING : VISIBLE);
    }
  }, [visible]);

  useEffect(() => {
    if (state === LEAVING) {
      const timer = setTimeout(() => {
        setState(HIDDEN);
      }, duration);

      return () => clearTimeout(timer);
    } else if (state === ENTERING) {
      document.body.offsetHeight;
      setState(VISIBLE);
    }
  }, [state]);


  const className = state === VISIBLE ? classes.fade : `${classes.fade} ${classes.out}`;

  if (state === HIDDEN) return null;

  return (
    <div className={className} >{children}</div>
  );
};

export default Fade;