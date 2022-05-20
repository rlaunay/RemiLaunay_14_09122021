import { useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';

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

  // useEffect(() => {
  //   console.log(sortedCol);
  //   if (sortedCol?.col === data) return;
  //   setSorted(Sorted.none);
  // }, [sortedCol?.col]);

  useEffect(() => {
    onSort({ col: data, type: sorted });
  }, [sorted]);


  const opacity = sorted === Sorted.none ? 'opacity-50' : 'opacity-100';
  const rotate = sorted === Sorted.desc && 'rotate-180';

  return (
    <th className="text-left h-14 px-8 text-sm" >
      <div 
        className="flex justify-center items-center cursor-pointer"
        // onHoverStart={() => setHovered(true)}
        // onHoverEnd={() => setHovered(false)}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={clickHandler}
      >
        {title}
        <div
          className={`ml-1 ${hovered || ((sortedCol?.type !== Sorted.none) &&  sortedCol?.col === data) ? 'opacity-100' : 'opacity-0'}`}
        >
          <MdArrowUpward className={`${opacity} ${rotate}`} />
        </div>
      </div>
    </th>
  );
};

export default ThCol;