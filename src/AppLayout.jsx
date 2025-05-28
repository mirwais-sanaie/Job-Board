/* eslint-disable no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import Header from "./ui/Header";
import SearchBar from "./ui/SearchBar";

function AppLayout() {
  // const { data, isPending, isError } = useQuery({
  //   queryKey: ["posts"],
  //   queryFn: async () => {
  //     const response = await fetch("http://localhost:8000/posts");
  //     const data = await response.json();
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     return data;
  //   },
  // });

  // if (isPending) {
  //   return <div>Loading...</div>;
  // }
  // if (isError) {
  //   return <div>Error while featching data</div>;
  // }

  return (
    <div>
      <Header />
      <SearchBar />
    </div>
  );
}

export default AppLayout;
