import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Web3 from 'web3';

import Navbar from './Navbar';
import RequestCard from './RequestCard';

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

function Dashboard() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [amount, setAmount] = useState();
  const [newPotPerson, addNewPotPerson] = useState('');
  const [accountBalance, setBalance] = useState(0);
  const [walletAddresses, setWalletAddresses] = useState<any[]>([]);
  const [usernames, setUsernames] = useState<any[]>([]);
  const uniqueID = uniqid();

  async function getBalance() {}

  useEffect(() => {
    getBalance();
  });

  const requests: { groupName: string; name: string }[] = [
    { groupName: 'Charity', name: 'hardik' },
  ];

  useEffect(() => {
    async function load() {}
    load();
  }, []);

  function createPot() {}

  function Pool() {}

  function Take() {}

  function closeModal() {
    setIsOpen(false);
  }

  function AddToGroup() {}

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
            <input
              value={name}
              required
              placeholder='eg: Dave Birthday'
              className=' bg-black border-white border-2 m-1'
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <label className='px-2 py-1'>Add friends</label>
            <input
              className=' bg-black border-white border-2 m-1'
              placeholder='Type username'
              value={newPotPerson}
              onChange={(e) => {
                addNewPotPerson(e.target.value);
              }}
            />
            <button
              onClick={AddToGroup}
              className='border  hover:scale-110 hover:bg-shade hover:brightness-125 border-lightblue rounded-lg p-1  text-blue font-bold text-xl text-center'>
              Add
            </button>
            <div className='py-2 flex flex-row'>
              {usernames.map((data, i) => {
                return (
                  <div className='bg-purple w-fit p-2 rounded-lg m-2' key={i}>
                    {data}
                  </div>
                );
              })}
            </div>
            <center>
              <button
                onClick={createPot}
                className='border  hover:scale-110 hover:bg-shade hover:brightness-125 border-lightblue rounded-lg p-3 text-blue font-bold text-2xl text-center'>
                Create
              </button>
            </center>
          </div>
        </div>
      </Modal>
    </div>
  );

  return (
    <div className='font-primary'>
      <Navbar />
      <div className=' flex lg:flex-row flex-col h-full w-full p-5'>
        <div className='lg:w-1/5 w-full  bg-purple bg-opacity-30 m-3 border-0 rounded-xl p-2 shadow-purple shadow-lg filter'>
          <h1 className=' text-web_large font-semibold text-center'>
            Requests
          </h1>
          <div>
            {requests.map((data, i) => {
              return <RequestCard key={i} props={data} />;
            })}
          </div>
        </div>
        <div className='lg:w-3/5 w-full h-full'>
          <div className='lg:h-full rounded-lg border-2 mx-5 p-5 m-auto text-center'>
            <h1 className=' text-web_large font-semibold px-5'>
              Welcome {user.attributes.username}!!
            </h1>
            <br />
            <br />
            <br />
            <div className=' text-web_large'>
              Your account balance : {accountBalance}
            </div>
            <div className=' text-web_large'>
              Total asset in this pot : x MATIC
            </div>
            <br />
            <div>
              <input
                className=' bg-purple w-3/5 m-2 p-2'
                value={amount}
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
              <br />
              <button
                onClick={Pool}
                className='border mx-5 hover:scale-110 hover:bg-shade hover:brightness-125 border-lightblue rounded-lg p-3 text-blue font-bold text-2xl text-center'>
                Pool
              </button>
              <button
                onClick={Take}
                className='border inline-block  hover:scale-110 hover:bg-shade hover:brightness-125 border-lightblue rounded-lg p-3 text-blue font-bold text-2xl text-center'>
                Take
              </button>
            </div>
          </div>
        </div>
        <div className='lg:w-1/5 w-full  bg-purple bg-opacity-30 m-3 border-0 rounded-xl p-2 shadow-purple shadow-lg'>
          <div>
            <div className=' flex flex-row justify-between px-2'>
              <div className=' text-web_large font-semibold '>Pots</div>
              <div>
                <button
                  className='text-web_large font-semibold '
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
