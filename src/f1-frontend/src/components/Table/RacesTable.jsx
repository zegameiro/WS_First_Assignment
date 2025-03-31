import { PiMagnifyingGlassPlusBold } from "react-icons/pi";

function RacesTable({ races, indexRaces }) {
  return(
  <table className="table table-zebra">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>first Year</th>
        <th>Last Year</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {races?.data.map((raceT, index) => (
        <tr key={index} className="text-lg">
          <th>{indexRaces + index + 1}</th>
          <td>{`${raceT.raceName}`}</td>
          <td>{<span className="badge badge-outline badge-success">{raceT.raceDetails !== undefined && raceT.raceDetails[0].year}</span>}</td>
          <td>{<span className="badge badge-outline badge-error">{raceT.raceDetails !== undefined && raceT.raceDetails[raceT.raceDetails.length-1].year}</span>}</td>
          <td><button className="btn btn-soft btn-info btn-circle"><PiMagnifyingGlassPlusBold className="text-xl" /></button></td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default RacesTable;