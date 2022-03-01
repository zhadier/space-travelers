import { useSelector } from 'react-redux';
import RocketItem from './RocketItem';
import './Rockets.scss';

const Rockets = () => {
  const rocketList = useSelector((state) => state.rocketsReducer);
  return (
    <ul className="rockets-section">
      {rocketList.map((item) => (
        <RocketItem
          desc={item.description}
          key={item.id}
          id={item.id}
          name={item.name}
          image={item.image}
        />
      ))}
    </ul>
  );
};

export default Rockets;
