import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SearchBar from "./features/Job/SearchJob";
import Header from "./ui/Header";
import CartsComponent from "./ui/CartsComponent";
import { ThemeContexts } from "./contexts/ThemeContexts";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContexts defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          <Header />
          <SearchBar />
          <div className="container mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-2">Available jobs</h2>
            <CartsComponent />
          </div>
        </div>
      </ThemeContexts>
    </QueryClientProvider>
  );
}

export default App;
