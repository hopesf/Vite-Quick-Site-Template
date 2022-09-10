import Leftbar from '../components/Leftbar/Leftbar';
import { useAuth } from '../context/AuthContext';

const Layout = (props) => {
  const { navbarOpen } = useAuth();
  return (
    <div className="flex">
      <Leftbar />
      <div className={` w-full ${navbarOpen ? 'ml-72' : 'ml-20'}`}>{props.children}</div>
    </div>
  );
};
export default Layout;
