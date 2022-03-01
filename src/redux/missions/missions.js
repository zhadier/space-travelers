// constants
const JOIN_MISSION = 'space-travelers/rockets/JOIN_MISSION';
const LEAVE_MISSION = 'space-travelers/rockets/LEAVE_MISSION';

// initial state
const initialState = [];

// action creators
export const joinMission = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const leaveMission = (payload) => ({
  type: LEAVE_MISSION,
  payload,
});

// thunk action functions

// reducer
const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case JOIN_MISSION:
      return [...state, action.payload];
    case LEAVE_MISSION:
      return state.filter((mission) => mission.item_id !== action.payload);
    default:
      return state;
  }
};

export default missionsReducer;
