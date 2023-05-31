import './App.css';
import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';
import Root from './routes/root';
import Post from './routes/post';
import Navbar from './components/navbar';
import Footer from './components/footer';

const HeaderLayout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
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

export default App;
