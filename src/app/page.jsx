import Banner from './components/banner' 
import Form from './components/form';
import Precios from './components/precios';
import Servicios from './components/servicios';

export const page = () => {
  return (
    <>
      <Banner />
      <Servicios/>
      <Precios />
      <Form />
    </>
  );
};

export default page;
