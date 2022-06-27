function Navbar() {
  return (
    <div className='w-full bg-shade p-2 flex justify-between'>
      <button className='border hover:scale-110 hover:bg-shade hover:brightness-125 border-lightblue rounded-lg p-3 text-blue font-bold text-2xl text-center'>
        Logout
      </button>
      <h1 className=' text-web_large'>Dpots</h1>
    </div>
  );
}

export default Navbar;
