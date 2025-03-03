import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import store from "./redux/store.ts"
import { Provider } from "react-redux"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar/Navbar.tsx';
import Project from './pages/Project.tsx';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <div>404 NOT FOUND</div> },
  { path: "/project", element: <Project /> },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
)
