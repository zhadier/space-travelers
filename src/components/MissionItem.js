import { PropTypes } from 'prop-types';

const MissionItem = (props) => {
  const {
    id, name, description,
  } = props;
  return (
    <tr id={id}>
      <td>{name}</td>
      <td>{description}</td>
      <td>NOT A MEMBER</td>
      <td>
        <button type="button">
          Join Mission
        </button>
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
