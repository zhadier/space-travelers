import { PropTypes } from 'prop-types';

const RocketItem = (props) => {
  const {
    id,
    name,
    image,
    desc,
  } = props;

  return (
    <li className="rocket-container" id={id}>
      <img src={image} alt="" />
      <div className="rocket-description">
        <h2>{name}</h2>
        <p>{desc}</p>
        <button type="button">Reserve Rocket</button>
      </div>
    </li>
  );
};

RocketItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default RocketItem;
