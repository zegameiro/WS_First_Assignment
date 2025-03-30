import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { GiFullMotorcycleHelmet } from "react-icons/gi";

import { driversService } from "../../services";
import { flagCountries } from "./utils";

const DriverProfile = () => {
  const { id } = useParams();
  console.log(id);
  const { data: driverData } = useQuery({
    queryKey: ["driver-", id],
    queryFn: () => driversService.getDriverById(id),
  });

  console.log(driverData?.data);

  return (
    <div className="p-6">
      {driverData?.data ? (
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="flex gap-2 items-center text-2xl font-semibold">
            {" "}
            <GiFullMotorcycleHelmet className="text-4xl" />{" "}
            Driver Details
          </h1>
					<div className="flex gap-10 items-center border-2 border-white shadow-xl p-6 rounded-2xl">
						<div className="flex flex-col text-xl space-y-3">
							<p className="flex gap-4"><span className="font-semibold">First Name</span> {driverData.data.data?.forename}</p>
							<p className="flex gap-4"><span className="font-semibold">Last Name</span> {driverData.data.data?.surname}</p>
							<p className="flex gap-4"><span className="font-semibold">Date of Birth</span> {driverData.data.data?.dob}</p>
							{driverData.data.data?.code && (
								<p className="flex gap-4"><h1 className="font-semibold">Code</h1> {driverData.data.data?.code}</p>
							)}
							{driverData.data.data?.number && (
								<p className="flex gap-4"><h1 className="font-semibold">Number</h1> {driverData.data.data?.number}</p>
							)}
							<a className="badge badge-soft badge-primary text-lg" target="_blank" href={driverData.data.data?.url}>{driverData.data.data?.url}</a>
						</div>
						<div className="divider divider-horizontal"></div>
						<div className="card bg-base-100 border-2 border-error shadow-sm w-max p-1">
							<figure>
								<img
									src={`${flagCountries[driverData.data.data?.nationality]}`}
									alt="Country Flag"
									className="h-20 w-20"
								/>
							</figure>
							<div className="card-body">
								<h2 className="card-title text-center justify-center">{driverData.data.data?.nationality}</h2>
							</div>
						</div>
					</div>
        </div>
      ) : (
        <h1 className="text-4xl">No data found</h1>
      )}
    </div>
  );
};

export default DriverProfile;
