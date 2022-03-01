import { useSelector } from 'react-redux';
import ReservedRocket from './ReservedRocket';
import './Profile.scss';

const Profile = () => {
  const rocketList = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rocketList.filter((rocket) => rocket.reserved === true);
  console.log(reservedRockets);
  return (
    <>
      {reservedRockets.length ? (
        <div className="reserved-rockets__section">
          <h2>My Rockets</h2>
          <ul>
            {reservedRockets.map((item) => (
              <ReservedRocket
                key={item.id}
                id={item.id}
                name={item.name}
                wikipedia={item.wikipedia}
              />
            ))}
          </ul>
        </div>
      ) : (
        <h2 className="empty">No Rockets have been reserved yet</h2>
      )}
    </>
  );
};

export default Profile;
