import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Error from './components/Error';
import Help from './components/Help';
import RestrauntCard from './components/RestrauntCard';
import RestrauntMenu from './components/RestrauntMenu';
// import Instamart from './components/Instamart';

const Instamart = lazy(()=> import('./components/Instamart'));

function App() {


  return (
    <div className="App">
      <Header />
     <Outlet />
      <Footer />
    </div>
  );
}
export const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children : [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/restrauntMenu/:resId',
        element: <RestrauntMenu />
      },
      {
        path:'/help',
        element: <Help />
      },
      {
        path: '/instamart',
        element: <Suspense fallback={<h1>Instamart app loading</h1>}><Instamart /></Suspense>
      }
    ],
    errorElement: <Error />
  },
]);

export default App;
