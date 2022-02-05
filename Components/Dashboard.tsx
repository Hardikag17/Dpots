import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useMoralis, useMoralisQuery } from 'react-moralis';
import Image from 'next/image';
import Modal from 'react-modal';
import { useState } from 'react';

import Navbar from './Navbar';
import Link from 'next/link';

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
library.add(fab);

function Dashboard() {
  const { user } = useMoralis();
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const ModalComponent = (
    <div>
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
            <label className='px-2 py-1'>Enter name</label>
            <input />
            <br />
            <label>Add friends</label>
            <center>
              <button className='border  hover:scale-110 hover:bg-shade hover:brightness-125 border-lightblue rounded-lg p-3 text-blue font-bold text-2xl text-center'>
                Create
              </button>
            </center>
          </div>
        </div>
      </Modal>
    </div>
  );

  return (
    <div className='font-primary h-screen'>
      <Navbar />
      <div className=' flex flex-row h-full w-full p-5'>
        <div className='w-1/5  bg-purple bg-opacity-30 m-3 border-0 rounded-xl p-2 shadow-purple shadow-lg filter'>
          <h1 className=' text-web_large font-semibold text-center'>
            Requests
          </h1>
          <div>Friends</div>
          <div>Pots</div>
        </div>
        <div className='w-3/5 h-full'>
          <div className=' h-4/5 text-center mx-5 p-5'>
            <h1 className=' text-web_large font-semibold px-5'>
              Welcome {user.attributes.username}!!
            </h1>
            <div>
              <h1>This address contains these crypto projects: </h1>
            </div>
          </div>
          <div className='h-1/5 rounded-lg border-2 mx-5 p-5 m-auto text-center'>
            <div>Total asset : x MATIC</div>
            <div>
              <button className='border mx-5 hover:scale-110 hover:bg-shade hover:brightness-125 border-lightblue rounded-lg p-3 text-blue font-bold text-2xl text-center'>
                Pool
              </button>
              <button className='border inline-block  hover:scale-110 hover:bg-shade hover:brightness-125 border-lightblue rounded-lg p-3 text-blue font-bold text-2xl text-center'>
                Take
              </button>
            </div>
          </div>
        </div>
        <div className='w-1/5  bg-purple bg-opacity-30 m-3 border-0 rounded-xl p-2 shadow-purple shadow-lg'>
          <div className='text-center my-2'>
            <input
              placeholder='Search'
              className=' w-11/12 mx-auto p-1'></input>
          </div>
          <div>
            <div className=' flex flex-row justify-between px-2'>
              <div>Friends</div>
            </div>
            <div>Friends list</div>
          </div>
          <div>
            <div className=' flex flex-row justify-between px-2'>
              <div>Pots</div>
              <div>
                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}>
                  <FontAwesomeIcon icon={faPlus} />
                </button>
                {ModalComponent}
              </div>
            </div>
            <div>Pots list</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
