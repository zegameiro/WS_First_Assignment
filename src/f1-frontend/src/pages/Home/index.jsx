import { useState } from "react";
import { Button } from "../../components";
import { driversService } from "../../services";

function Home() {

  const [data,setData] = useState([]);
  driversService.getDrivers().then((res)=>{
    setData(res.data);``
  })

  console.log(data);

  return (
    <div className='m-3'>
      dadad
    </div>
  );
}

export default Home;