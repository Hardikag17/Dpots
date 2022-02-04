import { useMoralis } from 'react-moralis';
import metamask from '../public/assets/metamask.svg';
import Image from 'next/image';

function Login() {
  const { authenticate, authError } = useMoralis();

  return (
    <div className=' container w-full bg-black m-0  text-web_normal p-5 font-primary'>
      <div className=' text-purple text-web_large w-full lg:text-right text-center font-extrabold p-5'>
        Dpots
      </div>
      <div className=' flex lg:flex-row flex-col w-full justify-center py-5 '>
        <div className=' lg:w-1/2 w-full flex flex-row'>
          <div className=' h-72 w-2 mx-3 bg-purple invisible lg:visible'></div>
          <div>
            {' '}
            <h1 className=' lg:text-web_title text-mobile_title font-extrabold'>
              Let&apos;s make sharing crypto
              <h1 className='text-purple inline-block'>
                <h1 className=' text-white inline-block'>&quot;</h1>flexible
              </h1>
              &quot;
            </h1>
            <h1 className=' text-web_large font-semibold'>
              Revamping the crypto collections
            </h1>
          </div>
        </div>
        <div className=' lg:w-1/2 w-full flex flex-col lg:pt-52 m-auto justify-center h-full items-center text-center'>
          <div className=' p-5 cursor-pointer'>
            <Image
              src={metamask}
              height={100}
              width={100}
              alt='metamask logo'
            />
          </div>
          <div>
            {authError && (
              <p>
                {authError.name}
                {authError.message}
              </p>
            )}
            <button
              className='border hover:scale-110 hover:bg-shade hover:brightness-125 border-lightblue rounded-lg p-3 text-blue font-bold text-2xl text-center'
              onClick={authenticate}>
              Connect to wallet
            </button>
            <br />
            <br />
            <h1>
              Don't have a accout, Register today!!
              <hr className='w-full h-1 bg-purple text-purple ' />
            </h1>
          </div>
        </div>
      </div>
      <div className='footer w-full lg:pt-6 text-center left-0 bottom-0 flex justify-end'>
        Currently, it’s really a tedious task to send cryptocurrency to your
        friends and family. You will need their big wallet address. Also, let's
        say you want your family's total crypto assets or your total business
        funds, your friends birthday fund in one place, So, that it can be used
        by anyone among the authorized personnel whenever required, Doing this
        is not possible. Let’s make it flexible to share and manage all family,
        friends, businesses funds in one place.
      </div>
    </div>
  );
}

export default Login;
