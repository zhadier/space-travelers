import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeRocketReservation } from '../redux/rockets/rockets';
import { loadState, saveState } from '../logic/localStorage';

const ReservedRocket = (props) => {
  const dispatch = useDispatch();
  const { id, name, wikipedia } = props;
  let reservedList = loadState();

  const handleCancelReservation = () => {
    dispatch(removeRocketReservation(id));
    reservedList = reservedList.filter((item) => item !== id);
    saveState(reservedList);
  };

  return (
    <li className="reserved__container" id={id}>
      <h3>{name}</h3>
      <div className="reserved__buttons">
        <a href={wikipedia} target="_blank" rel="noreferrer">
          Read more
        </a>
        <button type="button" className="remove-reservation long" onClick={handleCancelReservation}>
          Cancel Reservation
        </button>
      </div>
    </li>
  );
};

ReservedRocket.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  wikipedia: PropTypes.string.isRequired,
};

export default ReservedRocket;
