import { useQuery } from "@tanstack/react-query";
import { getDataId } from "../../API/api";
import { useParams } from "react-router-dom";

function Inner() {
  const { id } = useParams(); 
  
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["post", id], 
    queryFn: () => getDataId(id),
  });

  if (isLoading) return <h4>Loading....</h4>;
  if (isError) return <h4>Error: {error.message}</h4>;

  return (
    <>
      <div>Inner {id}</div>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </>
  );
}

export default Inner;
