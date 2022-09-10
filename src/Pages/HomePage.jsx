import Home from '../components/Home/Home';
import Layout from './Layout';

const HomePage = () => {
  return (
    <>
      <Layout>
        <div className="p-8 w-full">
          <Home />
        </div>
      </Layout>
    </>
  );
};
export default HomePage;
