import { FaCalendarDays } from "react-icons/fa6";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";

import { seasonsService } from "../../services";
import { Table } from "../../components";
import { TablesTypes } from "../../components/Table";

function Seasons() {
	const [page, setPage] = useState(1);

	const queryClient = useQueryClient();
	const { data: seasonsData } = useQuery({
		queryKey: ["seasons"],
		queryFn: () => seasonsService.getSeasons(page),
	});

	useEffect(() => {
		queryClient.refetchQueries({ queryKey: ["seasons"], type: "active" });
	}, [page]);

	useEffect(()=>{
    if(seasonsData?.data.data.length === 0){
      setPage(page - 1);
    }
  },[seasonsData])

	return (
	<div className="p-6">
		<span className="flex items-center text-3xl gap-2">
		<FaCalendarDays/>
		<h1 className="font-bold">Seasons</h1>
		</span>
			<Table data={seasonsData?.data} page={page} setPage={setPage} type={TablesTypes.SEASONS} />
	</div>
	);
}

export default Seasons;