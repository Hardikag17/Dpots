import { useMoralis } from 'react-moralis';
import metamask from '../public/assets/metamask.svg';
import Image from 'next/image';
import Modal from 'react-modal';
import { useState } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    backgroundColor: '#0d0d0d',
    fontFamily: 'Josefin Sans',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function Login() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [username, setUsername] = useState('');
  const { authenticate, authError } = useMoralis();
  // const User = Moralis.Object.extend('User');

  function login() {
    // const user = new User();
    // user.set("username",username);
    // user.set("walletAddress",)
    authenticate;
  }

  function newAccount() {}

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

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
              onClick={login}>
              Connect to wallet
            </button>
            <br />
            <br />

            <div>
              <button
                onClick={() => {
                  setIsOpen(true);
                }}>
                {' '}
                <h1> Don't have a account, Register today!!</h1>
              </button>
              <hr className='w-full h-1 bg-purple text-purple ' />
              <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                onRequestClose={closeModal}
                contentLabel='Registration Modal'>
                <button className=' w-full text-right' onClick={closeModal}>
                  close
                </button>

                <div className='w-full h-full'>
                  <div>
                    <label className='px-2 py-1'>Enter Username</label>
                    <input
                      value={username}
                      className='text-purple bg-black'
                      onChange={(e) => {
                        setUsername(e.target.value);
                      }}
                      placeholder=' eg: david123'
                      required
                    />
                  </div>
                  <div className=' p-5 cursor-pointer w-full text-center'>
                    <label>Connect to meatmask</label>
                    <br />
                    <Image
                      src={metamask}
                      height={100}
                      width={100}
                      className='text-center w-full'
                      alt='metamask logo'
                    />
                  </div>
                  <br />
                  <center>
                    <button
                      onClick={newAccount}
                      className='border  hover:scale-110 hover:bg-shade hover:brightness-125 border-lightblue rounded-lg p-3 text-blue font-bold text-2xl text-center'>
                      Submit
                    </button>
                  </center>
                </div>
              </Modal>
            </div>
          </div>
        </div>
      </div>
      <div className='footer w-full lg:pt-6 text-center left-0 bottom-0 flex justify-end'>
        Currently, it’s really a tedious task to send cryptocurrency to your
        friends and family. You will need their big wallet address. Also, let's
        say you want your family's total crypto assets or your total business
        funds, your friends birthday funds in one place, So, that it can be used
        by anyone among the authorized personnel whenever required, Doing this
        is not possible. Let’s make it flexible to share and manage all family,
        friends, businesses funds in one place by collecting them in pots.
      </div>
    </div>
  );
}

export default Login;
