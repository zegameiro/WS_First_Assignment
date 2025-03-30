import { useState } from "react";

import { FaRegQuestionCircle } from "react-icons/fa";
import { PiMagnifyingGlassPlusBold } from "react-icons/pi";

const Table = ({ drivers, page, setPage }) => {

	const [indexDriver, setIndexDriver] = useState(0);

	const handlePageChange = (back) => {
		if (page > 0) {	
			setPage((prev) => (back ? prev - 1 : prev + 1));
			if (back) {
				setIndexDriver((prev) => (prev - 20));
			} else {
				setIndexDriver((prev) => (prev + 20));
			}
		}
	}

  return (
    <div className="flex flex-col items-center w-full">
      <div className="pt-4 overflow-x-auto w-full">
        
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
