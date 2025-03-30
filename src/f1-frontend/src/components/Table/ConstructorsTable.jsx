import { PiMagnifyingGlassPlusBold } from "react-icons/pi";

function ConstructorsTable({ constructors, indexConstructors }) {
  
  return(
  <table className="table table-zebra">
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>nationality</th>
        <th>wikipedia</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {constructors?.data.map((constructor, index) => (
        <tr key={index} className="text-lg">
          <th>{indexConstructors + index + 1}</th>
          <td>{`${constructor.name}`}</td>
          <td>{<span className="badge badge-outline badge-success">{constructor.nationality	}</span>}</td>
          <td>{<span className="badge badge-outline badge-error">{constructor.url}</span>}</td>
          <td><button className="btn btn-soft btn-info btn-circle"><PiMagnifyingGlassPlusBold className="text-xl" /></button></td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default ConstructorsTable;