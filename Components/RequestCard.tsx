import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
function RequestCard({ props }: any) {
  return (
    <div className='w-full mx-auto text-center border-0 rounded-full bg-black'>
      <div className='inline-block'>
        <div className='text-mobile_large '>
          {props?.groupName}
          <div className=' inline-block h-full m-auto'>
            <button className=' px-5 text-right'>
              <FontAwesomeIcon className=' text-green' icon={faCheck} />
            </button>
            <button className='px-5 text-right'>
              <FontAwesomeIcon className='text-red' icon={faTimes} />
            </button>
          </div>
        </div>
        <div className='text-left w-1/2'> by {props?.name}</div>
      </div>
    </div>
  );
}

export default RequestCard;
