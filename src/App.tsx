import JobCart from "./features/Job/JobCart";
import SearchBar from "./features/Job/SearchJob";
import Header from "./ui/Header";

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <div className="container mx-auto mt-8">
        <h2 className="text-2xl font-bold mb-2">Available jobs</h2>
        <JobCart />
      </div>
    </div>
  );
}

export default App;
