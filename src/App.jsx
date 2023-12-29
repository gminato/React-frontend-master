import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Details from "./Details";
import { Link } from "react-router-dom";
import SearchParams from "./SearchParams";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <div>
      <header>
        <Link to={"/"}>Adopt Me!</Link>
      </header>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path={"/"} element={<SearchParams />} />
          <Route path={"/details/:id"} element={<Details />} />
        </Routes>
      </QueryClientProvider>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
