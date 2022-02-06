import { useMoralis, useMoralisQuery } from 'react-moralis';

const ERC20Balances = () => {
  const { data, error, isLoading } = useMoralisQuery('EthTransactions');
  const { user } = useMoralis();
  user?.attributes.walletAddress == user.get('ethAddress');

  return (
    <div className=' inline-block text-web_normal text-white'>
      {error && <>{error}</>}
      <div className=' flex flex-row inline-block'>
        <pre>{JSON.stringify(data, null, 2)}</pre>;
      </div>
    </div>
  );
};

export default ERC20Balances;
