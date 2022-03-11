import { useCallback, useEffect, useState } from 'react';
import { MdFirstPage, MdLastPage, MdChevronRight, MdChevronLeft } from 'react-icons/md';
import Thead from './Thead';
import { Sorted, SortedCol } from './Thead/ThCol';

type DataTable = {
  data: any[];
  columns: {
    title: string;
    data: string;
  }[]
}

export type SortedState = {data: string; sort: Sorted }

const DataTable: React.FC<DataTable> = ({ data, columns }) => {
  const [entries, setEntries] = useState(10);
  const [cursor, setCursor] = useState(0);
  const [sortedCol, setSortedCol] = useState<SortedCol | undefined>();
  const [search, setSearch] = useState('');

  console.log(sortedCol);
  
  let filteredData = data.filter((e) => {
    return columns.some((c) => {
      return e[c.data].includes(search);
    });
  });

  if (sortedCol?.type === Sorted.asc) {
    filteredData = filteredData.sort((e1, e2) => (e1[sortedCol.col] > e2[sortedCol.col]) ? 1 : -1);
  }

  if (sortedCol?.type === Sorted.desc) {
    filteredData = filteredData.sort((e1, e2) => (e1[sortedCol.col] > e2[sortedCol.col]) ? -1 : 1);
  }

  const pageData = filteredData.slice(cursor, cursor + entries);

  const first = cursor + 1;
  const last = filteredData.length < (cursor + entries) ? filteredData.length : cursor + entries;

  const goToFirst = useCallback(() => setCursor(0), []);
  const goToLast = useCallback(() => {
    setCursor(Math.floor(filteredData.length / entries) * entries);
  }, [entries, filteredData]);

  const goToPreviousPage = useCallback(() => {
    setCursor((oldCursor) => {
      const newCursor = oldCursor - entries;
      if (newCursor < 0) {
        return oldCursor;
      }
      return newCursor;
    });
  }, [entries]);

  const goToNextPage = useCallback(() => {
    setCursor((oldCursor) => {
      const newCursor = oldCursor + entries;
      if (newCursor > filteredData.length) {
        return oldCursor;
      }
      return newCursor;
    });
  }, [entries, filteredData]);

  useEffect(() => {
    setCursor(0);
  }, [entries, search]);

  return (
    <div className="w-full border rounded-md bg-white border-slate-300 text-zinc-700 mb-28" >
      <div className="p-2" >
        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} className="border rounded-md py-1 px-2" placeholder="Search..." />
      </div>
      <div className="overflow-x-auto w-full" >
        <table className="w-full min-w-max">
          <Thead columns={columns} sortedCol={sortedCol} onSort={(e) => setSortedCol(e)} />
          <tbody>
            {pageData.map((row, i) => {
              return (
                <tr key={i} className="border-b border-slate-300 hover:bg-gray-100" >
                  {columns.map(col => {
                    return <td className="text-left h-12 px-8 text-sm" key={col.data} >{row[col.data]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto" >
        <div className="flex justify-end items-center p-2 min-w-max">
          <h5 className="mr-4" >Rows per pages</h5>
          <select 
            name="entries" 
            id="entries" 
            value={entries}
            onChange={(e) => setEntries(+e.target.value)}
            className="border-gray-500 border rounded-md px-2 py-1 focus:border-green-500 outline-none box-border mr-8" 
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <p className="mr-8" > {first} - {last} of {filteredData.length}</p>
          <MdFirstPage onClick={goToFirst} className="mr-8 cursor-pointer" size={30}  />
          <MdChevronLeft onClick={goToPreviousPage} className="mr-8 cursor-pointer" size={30} />
          <MdChevronRight onClick={goToNextPage} className="mr-8 cursor-pointer" size={30} />
          <MdLastPage onClick={goToLast} className="cursor-pointer" size={30} />
        </div>
      </div>
    </div>
  );
};

export default DataTable;