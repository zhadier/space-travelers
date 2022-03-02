import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import MissionItem from './MissionItem';
import { fetchMissionsFromAPI } from '../redux/missions/missions';
import './MissionItem.scss';

const Missions = () => {
  const missionList = useSelector((state) => state.missionsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (missionList.length === 0) dispatch(fetchMissionsFromAPI());
  });

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
                reserved={mission.reserved}
              />
            ))
          }
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
