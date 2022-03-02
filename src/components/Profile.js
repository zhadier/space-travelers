import { useSelector } from 'react-redux';
import ReservedRocket from './ReservedRocket';
import ReservedMission from './ReservedMissions';
import './Profile.scss';

const Profile = () => {
  const rocketList = useSelector((state) => state.rocketsReducer);
  const reservedRockets = rocketList.filter((rocket) => rocket.reserved === true);
  const missionList = useSelector((state) => state.missionsReducer);
  const reservedMissions = missionList.filter((mission) => mission.reserved === true);
  return (
    <div className="profile-container">
      {reservedMissions.length ? (
        <div className="reserved__section">
          <h2>My Missions</h2>
          <ul>
            {reservedMissions.map((item) => (
              <ReservedMission
                key={item.id}
                id={item.id}
                name={item.name}
                wikipedia={item.wikipedia}
              />
            ))}
          </ul>
        </div>
      ) : (
        <h2 className="empty empty-missions">No missions have been joined yet</h2>
      )}
      {reservedRockets.length ? (
        <div className="reserved__section left">
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
    </div>
  );
};

export default Profile;
