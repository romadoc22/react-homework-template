import { Suspense } from 'react';
import { useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const DogDetails = () => {
  const location = useLocation();
  const { dogId } = useParams();
  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');

  // console.log(params);
  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <Link to={backLinkLocationRef.current}>Назад до</Link>
      <ul>
        <li>
          <Link to="subbreeds">Підпороди</Link>
        </li>
        <li>
          <Link to="gallery">Галерея</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpages...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default DogDetails;
