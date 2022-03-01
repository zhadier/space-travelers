// import { useSelector, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import MissionItem from './MissionItem';
// import { fetchMissionsFromAPI } from '../redux/missions/missions';
import './MissionItem.scss';

const Missions = () => {
  // const dispatch = useDispatch();
  const missionList = useSelector((state) => state.missionsReducer);

  // dispatch(fetchMissionsFromAPI());

  return (
    <section className="missions-container">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {
            missionList.map((mission) => (
              <MissionItem
                key={mission.id}
                id={mission.id}
                name={mission.name}
                description={mission.description}
              />
            ))
          }
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
