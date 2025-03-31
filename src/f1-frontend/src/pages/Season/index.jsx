import { useParams } from "react-router"; 
import { FaCheckCircle } from "react-icons/fa";
import { useQueryClient,useQuery } from "@tanstack/react-query";
import { racesService, seasonsService } from "../../services";
import TimelineInfoCard from "./card";

function Season(){
	const { year } = useParams();

	const { data: races,isSuccess } = useQuery({
		queryKey: ["races"],
		queryFn: () => racesService.getRacesYear(year),
	});
	const {data: drivers,isSuccess:isSuccess2 } = useQuery({
		queryKey: ["driversPodium"],
		queryFn: () => seasonsService.getPodiumDrivers(year),
	})

	if(isSuccess && isSuccess2){
		return(
			<div className="p-6">
				<h1 className="text-6xl">Season of {year}</h1>
				<div className="divider divider-error"></div>
				<div className="flex w-full">
					<div className="w-1/2 flex flex-col items-center">
						<div className="text-4xl font-bold">Races Timeline</div>
						<div>
							<ul className="timeline timeline-vertical timeline-start">
								{races?.data.data.map((race,index) =>
									<li key={index} className="place-items-start">
										{index !== 0 && <hr/>}
										<div className="timeline-start">{race.date !== undefined && race.date}</div>
										<div className="timeline-middle">
											<FaCheckCircle/>
										</div>
										<div className="timeline-end timeline-box w-full">
											{race.winner !== undefined &&
											 race.raceName !== undefined &&
											 race.fastestLap !== undefined &&
											<TimelineInfoCard winner={race.winner} racename={race.raceName} fastLap={race.fastestLap}/>}
										</div>
										{index !== races?.data.data.length - 1 && <hr/>}
									</li>
								)}
							</ul>
						</div>
					</div>
					<div className="w-1/2 pt-20">
						<div className="flex justify-around">
							<div className="bg-amber-700 w-1/5 text-black font-bold text-center h-30 mt-auto rounded-t-xl p-2 pt-5">
								<div>{drivers.data.data[2].driverName}</div>
								<div>{drivers.data.data[2].totalPoints}</div>
							</div>
							<div className="bg-amber-400 w-1/5 text-black font-bold text-center h-50 mt-auto rounded-t-xl p-2 pt-5">
								<div>{drivers.data.data[0].driverName}</div>
								<div>{drivers.data.data[0].totalPoints}</div>
							</div>
							<div className="bg-gray-400 w-1/5 text-black font-bold text-center h-40 mt-auto rounded-t-xl p-2 pt-5">
								<div>{drivers.data.data[1].driverName}</div>
								<div>{drivers.data.data[1].totalPoints}</div>
							</div>
						</div>
						<div className="divider text-xl divider-accent">Drivers Podium</div>
					</div>
				</div>
			</div>
		);
	} else {
		return (<div>Loading</div>)
	}
};

export default Season;