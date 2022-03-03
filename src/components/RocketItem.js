import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { addRocketReservation, removeRocketReservation } from '../redux/rockets/rockets';
import { loadState, saveState } from '../logic/localStorage';

const RocketItem = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, image, desc, reserved,
  } = props;

  let reservedList = loadState();

  const handleReserveClick = () => {
    dispatch(addRocketReservation(id));
    reservedList = [...reservedList, id];
    saveState(reservedList);
  };

  const handleRemoveReserveClick = () => {
    dispatch(removeRocketReservation(id));
    reservedList = reservedList.filter((item) => item !== id);
    saveState(reservedList);
  };

  return (
    <li className="rocket-container" id={id}>
      <img src={image} alt="rocket" />
      <div className="rocket-description">
        <h2>{name}</h2>
        <p>
          {reserved && <span>Reserved</span>}
          {`${desc}`}
        </p>
        {reserved ? (
          <button type="button" className="remove-reservation" onClick={handleRemoveReserveClick}>
            Cancel Reservation
          </button>
        ) : (
          <button type="button" className="add-reservation" onClick={handleReserveClick}>
            Reserve Rocket
          </button>
        )}
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default RocketItem;
