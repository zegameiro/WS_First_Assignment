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
      {races?.data.map((race, index) => (
        <tr key={index} className="text-lg">
          <th>{indexRaces + index + 1}</th>
          <td>{`${race.raceName}`}</td>
          <td>{<span className="badge badge-outline badge-success">{race.raceDetails[0].year}</span>}</td>
          <td>{<span className="badge badge-outline badge-error">{race.raceDetails[race.raceDetails.length-1].year}</span>}</td>
          <td><button className="btn btn-soft btn-info btn-circle"><PiMagnifyingGlassPlusBold className="text-xl" /></button></td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default RacesTable;