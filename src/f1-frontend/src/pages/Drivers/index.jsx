import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";

import driversService from "../../services/driversService";
import { Table } from "../../components";

const Drivers = () => {

	const [page, setPage] = useState(1);

  const queryClient = useQueryClient();
	const { data: driversData } = useQuery({
		queryKey: ["drivers"],
		queryFn: () => driversService.getDrivers(page),
	});

  useEffect(() => {
    queryClient.refetchQueries({ queryKey: ["drivers"], type: "active" });
  }, [page]);

  return (
    <div className="p-6">
      <span className="flex items-center text-3xl gap-2">
        <GiFullMotorcycleHelmet />
        <h1 className="font-bold">Drivers</h1>
      </span>
			<Table drivers={driversData?.data} page={page} setPage={setPage} />
    </div>
  );
};

export default Drivers;
