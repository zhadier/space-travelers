import missionsReducer from '../redux/missions/missions';

describe('Testing for join mission action in missionsReducer ', () => {
  test('when the action is join mission, we have a new state with the action payload provided component id having its reserved set to true', () => {
    // arrange
    const JOIN_MISSION = 'space-travelers/rockets/JOIN_MISSION';
    const action = { type: JOIN_MISSION, id: '2' };
    const state = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
      { id: '2', name: 'Iridium NEXT', reserved: false },
    ];
    // act
    const result = missionsReducer(state, action);
    // assert
    const newState = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
      { id: '2', name: 'Iridium NEXT', reserved: true },
    ];
    expect(result).toEqual(newState);
  });

  test('when the action is join mission, and the id provided is wrong, return same state', () => {
    // arrange
    const JOIN_MISSION = 'space-travelers/rockets/JOIN_MISSION';
    const action = { type: JOIN_MISSION, id: '2' };
    const state = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
    ];
    // act
    const result = missionsReducer(state, action);
    // assert
    expect(result).toEqual(state);
  });
});

describe('Testing for leave mission action in missionsReducer ', () => {
  test('when the action is leave mission, we have a new state with the action payload provided component id having its reserved set to false', () => {
    // arrange
    const LEAVE_MISSION = 'space-travelers/rockets/LEAVE_MISSION';
    const action = { type: LEAVE_MISSION, id: '2' };
    const state = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
      { id: '2', name: 'Iridium NEXT', reserved: true },
    ];
    // act
    const result = missionsReducer(state, action);
    // assert
    const newState = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
      { id: '2', name: 'Iridium NEXT', reserved: false },
    ];
    expect(result).toEqual(newState);
  });

  test('when the action is leave mission, and the id provided is wrong, return same state', () => {
    // arrange
    const LEAVE_MISSION = 'space-travelers/rockets/LEAVE_MISSION';
    const action = { type: LEAVE_MISSION, id: '2' };
    const state = [
      { id: '0', name: 'Thaicom', reserved: true },
      { id: '1', name: 'Telstar1', reserved: true },
    ];
    // act
    const result = missionsReducer(state, action);
    // assert
    expect(result).toEqual(state);
  });
});

describe('Testing for fetch mission action in missionsReducer ', () => {
  test('when the action is fetch mission, we have a new state with the list of missions added from the payload', () => {
    // arrange
    const state = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
      { id: '2', name: 'Iridium NEXT', reserved: false },
    ];

    const FETCH_MISSIONS = 'space-travelers/rockets/FETCH_MISSIONS';
    const action = { type: FETCH_MISSIONS, payload: state };

    // act
    const result = missionsReducer([], action);
    // assert
    expect(result).toEqual(state);
  });
});

describe('Testing for wrong action in missionsReducer ', () => {
  test('when the action is wrong, we return the same state with no changes', () => {
    // arrange
    const state = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
      { id: '2', name: 'Iridium NEXT', reserved: false },
    ];

    const WRONG_ACTION = 'space-travelers/rockets/WRONG_ROCKETS';
    const action = { type: WRONG_ACTION, payload: state };

    // act
    const result = missionsReducer([], action);
    // assert
    expect(result).toEqual([]);
  });
});
