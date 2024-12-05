import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./assets/components/Home";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inner from "./assets/components/Inner";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";
import Navbar from "./assets/components/Navbar";
import "./App.css";
import Instragram from "./assets/components/Instragram";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/instragram",
    element: <Instragram />,
  },
  {
    path: "/inpage/:id",
    element: <Inner />,
  },
]);

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <div>REACT QUERY OR TAN STACK QUERY</div>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
export default App;
