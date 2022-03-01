// constants
const ADD_RESERVATION = 'space-travelers/rockets/ADD_ROCKET_RESERVATION';
const REMOVE_RESERVATION = 'space-travelers/rockets/REMOVE__ROCKET_RESERVATION';
const GET_ROCKETS = 'space-travelers/rockets/GET_ROCKETS';
const baseURL = 'https://api.spacexdata.com/v3/rockets';

// initial state
const initialState = [];

// action creators
export const addRocketReservation = (id) => ({
  type: ADD_RESERVATION,
  id,
});

export const removeRocketReservation = (id) => ({
  type: REMOVE_RESERVATION,
  id,
});

export const getRockets = (payload) => ({
  type: GET_ROCKETS,
  payload,
});

// thunk action functions

export const getRocketsFromAPI = () => async (dispatch) => {
  await fetch(`${baseURL}`)
    .then((response) => response.json())
    .then((rocketsList) => {
      const arrangedList = rocketsList.map((rocket) => ({
        id: rocket.rocket_id,
        name: rocket.rocket_name,
        image: rocket.flickr_images[0],
        description: rocket.description,
        wikipedia: rocket.wikipedia,
        reserved: false,
      }));
      if (arrangedList) {
        dispatch(getRockets(arrangedList));
      }
    });
};

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
      return [...newState];
    }
    case REMOVE_RESERVATION: {
      const newState = state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
      return [...newState];
    }
    case GET_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
