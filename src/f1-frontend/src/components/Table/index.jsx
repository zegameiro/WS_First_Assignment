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
        <table className="table table-zebra">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
							<th>Code</th>
							<th>Number</th>
							<th></th>
            </tr>
          </thead>
          <tbody>
            {drivers?.data.map((driver, index) => (
							<tr key={index} className="text-lg">
								<th>{indexDriver + index + 1}</th>
								<td>{`${driver.forename} ${driver.surname}`}</td>
								<td>{driver.code ? <span className="badge badge-outline badge-error">{driver.code}</span> : <FaRegQuestionCircle className="text-warning text-xl" />}</td>
								<td>{driver.number ? driver.number : <FaRegQuestionCircle className="text-warning text-xl" />}</td>
								<td><button className="btn btn-soft btn-info btn-circle"><PiMagnifyingGlassPlusBold className="text-xl" /></button></td>
							</tr>
						))}
          </tbody>
        </table>
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
