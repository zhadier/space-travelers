import rocketsReducer from '../redux/rockets/rockets';

describe('Testing for add reservation action in rocketsReducer ', () => {
  test('when the action is add reservation, we have a new state with the action payload provided component id having its reserved set to true', () => {
    // arrange
    const ADD_RESERVATION = 'space-travelers/rockets/ADD_ROCKET_RESERVATION';
    const action = { type: ADD_RESERVATION, id: '2' };
    const state = [
      {
        id: '0',
        name: 'V3',
        reserved: false,
      },
      { id: '1', name: 'Falcon1', reserved: false },
      { id: '2', name: 'Falcon1', reserved: false },
    ];
    // act
    const result = rocketsReducer(state, action);
    // assert
    const newState = [
      {
        id: '0',
        name: 'V3',
        reserved: false,
      },
      { id: '1', name: 'Falcon1', reserved: false },
      { id: '2', name: 'Falcon1', reserved: true },
    ];
    expect(result).toEqual(newState);
  });

  test('when the action is add reservation, and the id provided is wrong, return same state', () => {
    // arrange
    const ADD_RESERVATION = 'space-travelers/rockets/ADD_ROCKET_RESERVATION';
    const action = { type: ADD_RESERVATION, id: '2' };
    const state = [
      {
        id: '0',
        name: 'V3',
        reserved: false,
      },
      { id: '1', name: 'Falcon1', reserved: false },
    ];
    // act
    const result = rocketsReducer(state, action);
    // assert
    expect(result).toEqual(state);
  });
});

describe('Testing for remove reservation action in rocketsReducer ', () => {
  test('when the action is remove reservation, we have a new state with the action payload provided component id having its reserved set to false', () => {
    // arrange
    const REMOVE_RESERVATION = 'space-travelers/rockets/REMOVE__ROCKET_RESERVATION';
    const action = { type: REMOVE_RESERVATION, id: '2' };
    const state = [
      {
        id: '0',
        name: 'V3',
        reserved: false,
      },
      { id: '1', name: 'Falcon1', reserved: false },
      { id: '2', name: 'Falcon1', reserved: true },
    ];
    // act
    const result = rocketsReducer(state, action);
    // assert
    const newState = [
      {
        id: '0',
        name: 'V3',
        reserved: false,
      },
      { id: '1', name: 'Falcon1', reserved: false },
      { id: '2', name: 'Falcon1', reserved: false },
    ];
    expect(result).toEqual(newState);
  });

  test('when the action is remove reservation, and the id provided is wrong, return same state', () => {
    // arrange
    const REMOVE_RESERVATION = 'space-travelers/rockets/REMOVE__ROCKET_RESERVATION';
    const action = { type: REMOVE_RESERVATION, id: '2' };
    const state = [
      {
        id: '0',
        name: 'V3',
        reserved: false,
      },
      { id: '1', name: 'Falcon1', reserved: true },
    ];
    // act
    const result = rocketsReducer(state, action);
    // assert
    expect(result).toEqual(state);
  });
});

describe('Testing for get Rockets action in rocketsReducer ', () => {
  test('when the action is get Rockets, we have a new state with the list of rockets added from the payload', () => {
    // arrange
    const state = [
      {
        id: '0',
        name: 'V3',
        reserved: false,
      },
      { id: '1', name: 'Falcon1', reserved: false },
      { id: '2', name: 'Falcon1', reserved: true },
    ];

    const GET_ROCKETS = 'space-travelers/rockets/GET_ROCKETS';
    const action = { type: GET_ROCKETS, payload: state };

    // act
    const result = rocketsReducer([], action);
    // assert
    expect(result).toEqual(state);
  });
});

describe('Testing for wrong action in rocketsReducer ', () => {
  test('when the action is wrong, we return the same state with no changes', () => {
    // arrange
    const state = [
      {
        id: '0',
        name: 'V3',
        reserved: false,
      },
      { id: '1', name: 'Falcon1', reserved: false },
      { id: '2', name: 'Falcon1', reserved: true },
    ];

    const WRONG_ROCKETS = 'space-travelers/rockets/WRONG_ROCKETS';
    const action = { type: WRONG_ROCKETS, payload: state };

    // act
    const result = rocketsReducer([], action);
    // assert
    expect(result).toEqual([]);
  });
});
