import { PropTypes } from 'prop-types';
import './Mission.scss';

const MissionItem = (props) => {
  const {
    id, name, description,
  } = props;
  return (
    <tr id={id}>
      <td className="td-name">{name}</td>
      <td className="td-description">{description}</td>
      <td className="td-badge"><span>NOT A MEMBER</span></td>
      <td className="td-button">
        <button type="button">Join Mission</button>
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MissionItem;
