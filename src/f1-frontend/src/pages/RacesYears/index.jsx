import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { FaCalendarAlt } from "react-icons/fa";
import { PiMagnifyingGlassPlusBold } from "react-icons/pi";

import { GiF1Car } from "react-icons/gi";

import { racesService } from "../../services";

const RacesYears = () => {
  const [raceName, setRaceName] = useState("");
  let { name } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ["racesByName-", name],
    queryFn: () => racesService.getRacesName(name),
  });

  console.log(data);

  useEffect(() => {
    let n = name.replace(/_/g, " ");
    setRaceName(n);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <GiF1Car className="text-6xl" /> {raceName}
      </h1>
      <div className="flex w-full justify-center">
        {data?.data?.races.length > 0 ? (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 gap-10">
            {data?.data?.races.map((race, index) => (
              <div className="card w-78 bg-black border-1 border-error card-xl shadow-sm" key={index}>
                <div className="card-body">
                  <h2 className="card-title"><FaCalendarAlt /> {race.raceYear}</h2>
                  <div className="justify-end card-actions">
                    <button className="btn btn-error">See More <PiMagnifyingGlassPlusBold /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>No races found</div>
        )}
      </div>
    </div>
  );
};

export default RacesYears;
