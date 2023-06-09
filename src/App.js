import './App.css';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Root from './routes/root';
import Posts from './routes/posts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from "./components/ScrollToTop";
import { Suspense } from 'react';



function NestedLayout() {
  return (
  <ScrollToTop>
    <Navbar />
    <Outlet />
    <Footer />
  </ScrollToTop>
  );
};

const router = createBrowserRouter([
  {
    element: <NestedLayout />,
    children: [
      {
        path: '/',
        element: <Root/>
      },
      {
        path: '/posts',
        element: <Posts/>
      }
    ]
  }
])


function App() {
  return (
    <div className="App">
      <RouterProvider  router={router} />
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Suspense fallback="... is loading">
      <App />
    </Suspense>
  );
}
