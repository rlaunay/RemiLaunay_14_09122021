import { useCallback, useEffect, useState } from 'react';
import { MdFirstPage, MdLastPage, MdChevronRight, MdChevronLeft } from 'react-icons/md';
import Thead from './Thead';
import { Sorted, SortedCol } from './Thead/ThCol';

import classes from './DataTable.module.css';

export type DataTableProps = {
  data: any[];
  columns: {
    title: string;
    data: string;
  }[]
}

export type SortedState = {data: string; sort: Sorted }

const DataTable: React.FC<DataTableProps> = ({ data, columns }) => {
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
    <div className={classes.container} >
      <div className={classes['search-container']} >
        <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} placeholder="Search..." />
      </div>
      <div className={classes['table-container']}>
        <table>
          <Thead columns={columns} sortedCol={sortedCol} onSort={(e) => setSortedCol(e)} />
          <tbody>
            {pageData.map((row, i) => {
              return (
                <tr key={i} >
                  {columns.map(col => {
                    return <td key={col.data} >{row[col.data]}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={classes['navigation-container']} >
        <div className={classes.navigation}>
          <h5>Rows per pages</h5>
          <select 
            name="entries" 
            id="entries" 
            value={entries}
            onChange={(e) => setEntries(+e.target.value)}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <p> {first} - {last} of {filteredData.length}</p>
          <MdFirstPage onClick={goToFirst} className={classes['nav-btn']} size={30}  />
          <MdChevronLeft onClick={goToPreviousPage} className={classes['nav-btn']} size={30} />
          <MdChevronRight onClick={goToNextPage} className={classes['nav-btn']} size={30} />
          <MdLastPage onClick={goToLast} className={classes['nav-btn']} size={30} />
        </div>
      </div>
    </div>
  );
};

export default DataTable;