import { PiMagnifyingGlassPlusBold } from "react-icons/pi";
import { Link } from "react-router";

function SeasonsTable({ seasons, indexSeason }) {
  
  return(
  <table className="table table-zebra">
    <thead>
      <tr>
        <th></th>
        <th>year</th>
        <th>url</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {seasons?.data.map((season, index) => (
        <tr key={index} className="text-lg">
          <th>{indexSeason + index + 1}</th>
          <td>{`${season.year}`}</td>
          <td>{<a className="badge badge-soft badge-primary" href={season.url}>{season.url}</a>}</td>
          <td><Link to={`/seasons/${season.year}`}><button className="btn btn-soft btn-info btn-circle"><PiMagnifyingGlassPlusBold className="text-xl" /></button></Link></td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default SeasonsTable;