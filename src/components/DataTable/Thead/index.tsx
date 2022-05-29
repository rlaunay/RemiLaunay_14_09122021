import ThCol, { SortedCol } from './ThCol';

import classes from './Thead.module.css';

type TheadProps = {
  columns: {
    title: string;
    data: string;
  }[];
  onSort: (e: SortedCol) => void;
  sortedCol: SortedCol | undefined;
}

const Thead: React.FC<TheadProps> = ({ columns, onSort, sortedCol }) => {
  return (
    <thead> 
      <tr className={classes.tr} >
        {columns.map((col) => {
          return <ThCol key={col.data} title={col.title} sortedCol={sortedCol} onSort={onSort} data={col.data} />;
        })}
      </tr>
    </thead>
  );
};

export default Thead;