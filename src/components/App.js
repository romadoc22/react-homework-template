import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import Home from './pages/Home';
// import Dogs from './pages/Dogs';
// import DogDetails from './pages/Dogdetails';
// import Layout from './Layout';
// import Gallery from './Gallery';
// import Subbreeds from './Subbreeds';

const Home = lazy(() => import('./pages/Home'));
const Dogs = lazy(() => import('./pages/Dogs'));
const DogDetails = lazy(() => import('./pages/Dogdetails'));
const Layout = lazy(() => import('./Layout'));
const Gallery = lazy(() => import('./Gallery'));
const Subbreeds = lazy(() => import('./Subbreeds'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dogs" element={<Dogs />} />
        <Route path="dogs/:dogId" element={<DogDetails />}>
          <Route path="subbreeds" element={<Subbreeds />} />
          <Route path="gallery" element={<Gallery />} />
        </Route>
      </Route>
    </Routes>
  );
};
