import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deleteData, getData } from "../../API/api";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Home() {
  const [pageNumber, setPageNumber] = useState(0);
  const queryClient = useQueryClient(); 
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => getData(pageNumber),
    placeholderData: keepPreviousData,
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => deleteData(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", pageNumber], (curData) => {
        return curData?.filter((post) => post.id !== id);
      });
    },
  });

  if (isLoading) return <h4>Loading....</h4>;
  if (isError) return <h4>Error: {error.message}</h4>;

  return (
    <>
      <div>Home</div>
      <ul className="main">
        {data?.map((curData) => {
          const { id, title, body } = curData;
          return (
            <li key={id}>
              <NavLink to={`/inpage/${id}`}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{body}</p>
              </NavLink>
              <button onClick={()=>deleteMutation.mutate(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
      <button
        disabled={pageNumber === 0 ? true : false}
        onClick={() => setPageNumber((prev) => prev - 5)}
      >
        PREV
      </button>
      <p>{pageNumber / 5 + 1}</p>
      <button onClick={() => setPageNumber((prev) => prev + 5)}>NEXT</button>
    </>
  );
}

export default Home;
