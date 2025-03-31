import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { racesService } from "../../services";
import { GiF1Car } from "react-icons/gi";

const RaceProfile = () => {
  let { name, id } = useParams();

  const { data } = useQuery({
    queryKey: ["racesById-", id],
    queryFn: () => racesService.getRaceId(id),
  });

  console.log(data);

  return (
    <div className="p-6">
      <h1 className="flex items-center gap-2 text-2xl font-semibold">
        {" "}
        <GiF1Car className="text-5xl" /> Race Details
      </h1>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-10 border-2 border-error shadow-xl p-6 rounded-2xl w-full">
          <div className="flex flex-col gap-7 w-full">
            <h1 className="text-2xl font-bold">Race Information</h1>
            <div className="divider divider-error my-[-20px]"></div>
            <div className="flex items-center w-full">
              <div className="flex flex-col text-xl space-y-3">
                {data?.data?.race?.name && (
                  <p className="flex gap-4">
                    <span className="font-semibold">Name</span>{" "}
                    {data?.data?.race?.name}
                  </p>
                )}
                {data?.data?.race?.date && (
                  <p className="flex gap-4">
                    <span className="font-semibold">Date</span>{" "}
                    {data?.data?.race?.date}
                  </p>
                )}
                {data?.data?.race?.round && (
                  <p className="flex gap-4">
                    <span className="font-semibold">Round</span>{" "}
                    {data?.data?.race?.round}
                  </p>
                )}
                {data?.data?.race?.url && (
                  <a
                    className="badge badge-soft badge-primary text-lg"
                    target="_blank"
                    href={data?.data?.race?.url}
                  >
                    {data?.data?.race?.url}
                  </a>
                )}
              </div>
            </div>
          </div>
					<div className="divider divider-horizontal divider-error"></div>
					<div className="flex flex-col gap-7 w-full">
            <h1 className="text-2xl font-bold">Circuit Information</h1>
            <div className="divider divider-error my-[-20px]"></div>
            <div className="flex items-center w-full">
              <div className="flex flex-col text-xl space-y-3">
                {data?.data?.circuit?.name && (
                  <p className="flex gap-4">
                    <span className="font-semibold">Name</span>{" "}
                    {data?.data?.circuit?.name}
                  </p>
                )}
                {data?.data?.circuit?.location && (
                  <p className="flex gap-4">
                    <span className="font-semibold">Location</span>{" "}
                    {data?.data?.circuit?.location}
                  </p>
                )}
								{data?.data?.circuit?.lat && data?.data?.circuit?.lng && (
                  <p className="flex gap-4">
                    <span className="font-semibold">Coordinates</span>{" "}
                    ({data?.data?.circuit?.lat}, {data?.data?.circuit?.lng})
                  </p>
                )}
                {data?.data?.circuit?.country && (
                  <p className="flex gap-4">
                    <span className="font-semibold">Country</span>{" "}
                    {data?.data?.circuit?.country}
                  </p>
                )}
                {data?.data?.circuit?.url && (
                  <a
                    className="badge badge-soft badge-primary text-lg"
                    target="_blank"
                    href={data?.data?.circuit?.url}
                  >
                    {data?.data?.circuit?.url}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RaceProfile;
