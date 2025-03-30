import { useState } from "react";
import { driversService } from "../../services";

function Home() {

  const [data,setData] = useState([]);
  driversService.getDrivers().then((res)=>{
    setData(res.data);``
  })

  console.log(data);

  return (
    <div className='m-3'>
      <button className="btn">Medium</button>
    </div>
  );
}

export default Home;