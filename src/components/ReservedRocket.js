import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeRocketReservation } from '../redux/rockets/rockets';

const ReservedRocket = (props) => {
  const dispatch = useDispatch();
  const { id, name, wikipedia } = props;

  const handleCancelReservation = () => {
    dispatch(removeRocketReservation(id));
  };

  return (
    <li className="reserved-rocket__container" id={id}>
      <h3>{name}</h3>
      <div className="reserved-rocket__buttons">
        <a href={wikipedia}>Read more</a>
        <button type="button" className="remove-reservation" onClick={handleCancelReservation}>
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
