import { useDispatch } from 'react-redux';
import { PropTypes } from 'prop-types';
import { leaveMission } from '../redux/missions/missions';

const ReservedMission = (props) => {
  const dispatch = useDispatch();
  const { id, name, wikipedia } = props;

  const handleLeaveMission = () => {
    dispatch(leaveMission(id));
  };

  return (
    <li className="reserved__container" id={id}>
      <h3>{name}</h3>
      <div className="reserved__buttons">
        <a href={wikipedia} target="_blank" rel="noreferrer">Read more</a>
        <button type="button" className="remove-reservation" onClick={handleLeaveMission}>
          Leave Mission
        </button>
      </div>
    </li>
  );
};

ReservedMission.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  wikipedia: PropTypes.string.isRequired,
};

export default ReservedMission;
