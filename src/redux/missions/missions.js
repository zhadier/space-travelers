import { loadState } from '../../logic/localStorage';
// constants
const JOIN_MISSION = 'space-travelers/rockets/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers/rockets/LEAVE_MISSION';
const FETCH_MISSIONS = 'space-travelers/rockets/FETCH_MISSIONS';
const baseURL = 'https://api.spacexdata.com/v3/missions';

// initial state
const initialState = [];

// action creators
export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

export const fetchMissions = (payload) => ({
  type: FETCH_MISSIONS,
  payload,
});

// thunk action functions
export const fetchMissionsFromAPI = () => async (dispatch) => {
  await fetch(`${baseURL}`)
    .then((response) => response.json())
    .then((MissionsList) => {
      const reservedList = loadState();
      const arrangedList = MissionsList.map((mission) => {
        const reserved = reservedList.includes(mission.mission_id);
        return {
          id: mission.mission_id,
          name: mission.mission_name,
          description: mission.description,
          wikipedia: mission.wikipedia,
          reserved,
        };
      });
      if (arrangedList) {
        dispatch(fetchMissions(arrangedList));
      }
    });
};

// reducer
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: true };
      });
      return [...newState];
    }
    case LEAVE_MISSION: {
      const newState = state.map((mission) => {
        if (mission.id !== action.id) return mission;
        return { ...mission, reserved: false };
      });
      return [...newState];
    }
    case FETCH_MISSIONS:
      return [...action.payload];
    default:
      return state;
  }
};

export default missionsReducer;
