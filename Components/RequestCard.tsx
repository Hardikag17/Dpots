import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
function RequestCard({ props }) {
  return (
    <div className='w-full'>
      <div>{props?.name}</div>
      <div>
        <button className=' px-5 text-right'>
          <FontAwesomeIcon icon={faCheck} />
        </button>
        <button className='px-5 text-right'>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </div>
  );
}

export default RequestCard;
