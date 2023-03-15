import { Fragment, memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '~/screens/Loading';
import Router from './router';
const bodyRoot = document.getElementById('root');
function App() {
  const location = useLocation();
  useEffect(() => {
    bodyRoot.scrollTop = 0;
  }, [location]);
  useEffect(() => {
    console.log(process.env);
  }, []);
  return (
    <>
      {/* <Loading />
       */}
      <Router />
    </>
  );
}

export default memo(App);
