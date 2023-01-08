import { QueryClientProvider, QueryClient } from "react-query";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./Components/React-Query/Pages/HomePage";
import Nav from "./Components/React-Query/Pages/Nav";
import RQData from "./Components/React-Query/Pages/RQData";
import FamousCity from "./Components/React-Query/Pages/FamousCity";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 2 * 60 * 1000, // 2 minutes
    },
  },
});

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rqdata" element={<RQData />} />
            <Route path="/famous-city" element={<FamousCity />} />
          </Routes>
        </Router>
        <ReactQueryDevtools initialIsOpen={false} position="top-right" />
      </QueryClientProvider>

    </>
  );
}

export default App;
