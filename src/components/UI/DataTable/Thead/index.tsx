import ThCol, { SortedCol } from './ThCol';

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
      <tr className="border-b border-slate-300" >
        {columns.map((col) => {
          return <ThCol key={col.data} title={col.title} sortedCol={sortedCol} onSort={onSort} data={col.data} />;
        })}
      </tr>
    </thead>
  );
};

export default Thead;