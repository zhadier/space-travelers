import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../redux/missions/missions';
import './Mission.scss';

const MissionItem = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, description, reserved,
  } = props;

  const handleJoinMission = () => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr id={id}>
      <td className="td-name">{name}</td>
      <td className="td-description">{description}</td>
      <td className="td-badge">
        {reserved ? (
          <span className="active-member">Active Member</span>
        ) : (
          <span>NOT A MEMBER</span>
        )}
      </td>
      <td className="td-button">
        {reserved ? (
          <button
            type="button"
            className="remove-reservation red"
            onClick={handleLeaveMission}
          >
            Leave Mission
          </button>
        ) : (
          <button
            type="button"
            className="add-reservation"
            onClick={handleJoinMission}
          >
            Join Mission
          </button>
        )}
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionItem;
