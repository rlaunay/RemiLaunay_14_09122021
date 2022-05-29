import { useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';

import classes from './Thead.module.css';

type ThColProps = {
  title: string;
  data: string;
  onSort: (e: SortedCol) => void;
  sortedCol: SortedCol | undefined;
}

export enum Sorted {
  asc = 'ASC',
  desc = 'DESC',
  none = 'NONE'
}

export type SortedCol = {
  col: string,
  type: Sorted
}

const ThCol: React.FC<ThColProps> = ({ title, data, onSort, sortedCol }) => {
  const [hovered, setHovered] = useState(false);
  const [sorted, setSorted] = useState<Sorted>(Sorted.none);

  const clickHandler = () => {
    setSorted((old) => {
      if (old === Sorted.none) return Sorted.asc;
      if (old === Sorted.asc) return Sorted.desc;
      return Sorted.none;
    });
  };

  useEffect(() => {
    onSort({ col: data, type: sorted });
  }, [sorted]);


  const opacity = sorted === Sorted.none ? classes['opacity-50'] : classes['opacity-100'];
  const rotate = sorted === Sorted.desc && classes.rotate;

  return (
    <th className={classes.th} >
      <div 
        className={classes['title-container']}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={clickHandler}
      >
        {title}
        <div
          className={`${classes.arrow} ${hovered || ((sortedCol?.type !== Sorted.none) &&  sortedCol?.col === data) ? classes['opacity-100'] : classes['opacity-0']}`}
        >
          <MdArrowUpward className={`${opacity} ${rotate}`} />
        </div>
      </div>
    </th>
  );
};

export default ThCol;