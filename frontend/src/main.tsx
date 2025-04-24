import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import store from "./redux/store.ts"
import { Provider } from "react-redux"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Project from './pages/Project.tsx';
import Login from './pages/Login.tsx'
import ProtectedRoute from './components/ProtectedRoute.tsx'
import Home from './pages/Home.tsx'
import GuestRoute from './GuestRoute.tsx'
import Page404 from './pages/Page404.tsx'

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute><Home /></ProtectedRoute>,
    errorElement: <Page404 />
  },
  {
    path: "/project/:projectId",
    element: <ProtectedRoute><Project /></ProtectedRoute>
  },
  {
    path: "/login",
    element: <GuestRoute><Login /></GuestRoute>
  },
]);

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  // </StrictMode>,
)
