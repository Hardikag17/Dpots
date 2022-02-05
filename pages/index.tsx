import type { NextPage } from 'next';
import { useMoralis } from 'react-moralis';

import Login from '../Components/Login';
import Dashboard from '../Components/Dashboard';

const Home: NextPage = () => {
  const { isAuthenticated } = useMoralis();
  return (
    <div>
      <Login />
    </div>
  );
};

export default Home;
