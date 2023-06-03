import './App.css';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Root from './routes/root';
import Post from './routes/post';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Suspense } from 'react';

const HeaderLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <Root/>
      },
      {
        path: '/post',
        element: <Post/>
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
