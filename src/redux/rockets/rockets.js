// constants
const ADD_RESERVATION = 'space-travelers/rockets/ADD_ROCKET_RESERVATION';
const REMOVE_RESERVATION = 'space-travelers/rockets/REMOVE__ROCKET_RESERVATION';
// const GET_ROCKETS = 'space-travelers/rockets/GET_ROCKETS';
// const baseURL = 'https://api.spacexdata.com/v3/rockets';

// initial state
const initialState = [];

// action creators
export const addRocketReservation = (payload) => ({
  type: ADD_RESERVATION,
  payload,
});

export const removeRocketReservation = (payload) => ({
  type: REMOVE_RESERVATION,
  payload,
});

// thunk action functions

// export const getBooksFromAPI = () => async (dispatch) => {
//   await fetch(`${baseURL}/apps/${appID}/books`)
//     .then((response) => response.json())
//     .then((bookList) => {
//       const arrangedList = Object.entries(bookList).map(([key, value]) => ({
//         item_id: key,
//         title: value[0].title.bookTitle,
//         author: value[0].title.bookAuthor,
//         category: value[0].category,
//       }));
//       if (arrangedList) {
//         dispatch(addBook(arrangedList));
//       }
//     });
// };

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RESERVATION:
      return [...state, action.payload];
    case REMOVE_RESERVATION:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
