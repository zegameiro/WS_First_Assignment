export const TablesTypes = Object.freeze({
  DRIVERS: Symbol("drivers"),
  RACES: Symbol("races"),
});

import { useState } from "react";

import DriversTable from "./DriversTable";
import RacesTable from "./RacesTable";

const Table = ({ data, page, setPage, type }) => {

	const [index, setIndex] = useState(0);

  let table;
  if (type === TablesTypes.DRIVERS){
    table = <DriversTable drivers={data} indexDriver={index}/>
  } else if (type === TablesTypes.RACES) {
    table = <RacesTable races={data} indexRaces={index}/>
  };

	const handlePageChange = (back) => {
		if (page > 0) {	
			setPage((prev) => (back ? prev - 1 : prev + 1));
			if (back) {
				setIndex((prev) => (prev - 20));
			} else {
				setIndex((prev) => (prev + 20));
			}
		}
	}

  return (
    <div className="flex flex-col items-center w-full">
      <div className="pt-4 overflow-x-auto w-full">
        {table}
      </div>
      <div className="join justify-center w-full pt-4">
        <button className={`join-item btn btn-soft ${page == 1 ? "btn-disabled" : "btn-error"}`} onClick={() => handlePageChange(true)}>«</button>
        <button className="join-item btn btn-error">Page {page}</button>
        <button className="join-item btn btn-soft btn-error" onClick={() => handlePageChange()}>»</button>
      </div>
    </div>
  );
};

export default Table;
