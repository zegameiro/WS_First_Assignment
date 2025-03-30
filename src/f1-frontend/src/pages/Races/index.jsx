import { GiF1Car } from "react-icons/gi";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useState, useEffect } from "react";

import { racesService } from "../../services";
import { Table } from "../../components";

function Races(){
    const [page, setPage] = useState(1);

    const queryClient = useQueryClient();
    const { data: driversData } = useQuery({
        queryKey: ["races"],
        queryFn: () => racesService.getRaces(page),
    });

    useEffect(() => {
        queryClient.refetchQueries({ queryKey: ["races"], type: "active" });
    }, [page]);

    return (
    <div className="p-6">
        <span className="flex items-center text-3xl gap-2">
        <GiF1Car/>
        <h1 className="font-bold">Races</h1>
        </span>
            <Table drivers={driversData?.data} page={page} setPage={setPage} />
    </div>
    );
}

export default Races;