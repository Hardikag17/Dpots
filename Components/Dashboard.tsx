import Navbar from './Navbar';

function Dashboard() {
  return (
    <div className='font-primary'>
      <Navbar />
      <div className=' flex flex-row h-full w-full p-5'>
        <div className='w-1/5  bg-purple bg-opacity-30 m-3 border-0 rounded-xl p-2 shadow-purple shadow-lg'>
          <h1 className=' text-web_large font-semibold text-center'>
            Requests
          </h1>
          <div>Friends</div>
          <div>Pots</div>
        </div>
        <div className='w-3/5'>
          <h1 className=' text-web_large font-semibold px-5'>Protfolio</h1>
        </div>
        <div className='w-1/5  bg-purple bg-opacity-30 m-3 border-0 rounded-xl p-2 shadow-purple shadow-lg'>
          <div className='text-center my-2'>
            <input
              placeholder='Search'
              className=' w-11/12 mx-auto p-1'></input>
          </div>
          <div>Friends</div>
          <div>Pots</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
