import { Fragment, memo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Loading from '~/screens/Loading';
const bodyRoot = document.getElementById('root');
function App() {
  const location = useLocation();
  useEffect(() => {
    bodyRoot.scrollTop = 0;
  }, [location]);
  useEffect(() => {
    console.log('env:', process.env);
  }, []);
  return (
    <>
      <Loading />
    </>
  );
}

export default memo(App);
