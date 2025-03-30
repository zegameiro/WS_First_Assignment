export const TablesTypes = Object.freeze({
  DRIVERS: Symbol("drivers"),
  RACES: Symbol("races"),
  SEASONS: Symbol("seasons")
});

import { useEffect, useState } from "react";

import DriversTable from "./DriversTable";
import RacesTable from "./RacesTable";
import SeasonsTable from "./SeasonsTable";

const Table = ({ data, page, setPage, type }) => {

	const [index, setIndex] = useState(0);

  let table;
  if        (type === TablesTypes.DRIVERS){
    table = <DriversTable drivers={data} indexDriver={index}/>
  } else if (type === TablesTypes.RACES) {
    table = <RacesTable races={data} indexRaces={index}/>
  } else if (type === TablesTypes.SEASONS) {
    table = <SeasonsTable seasons={data} indexSeason={index}/>
  }

	const handlePageChange = (back) => {
		if (page > 0) {	
      let newPage = (back ? page - 1 : page + 1)
			setPage(newPage);
		}
	}

  useEffect(()=>{
    setIndex(page * 20 - 20);
  },[page]);

  console.log("page",page)
  console.log("index",index)

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
