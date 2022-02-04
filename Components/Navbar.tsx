import { useMoralis } from 'react-moralis';
function Navbar() {
  const { logout } = useMoralis();
  return (
    <div>
      <h1>This is a authenticated Navbar in dashboard</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
