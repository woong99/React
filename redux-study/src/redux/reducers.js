import { ADD_TODO } from './actions';

// state
// ['코딩', '점심 먹기'];
const initialState = [];

function todoApp(previousState = initialState, action) {
  // 초기값을 설정해주는 부분
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }
  return previousState;
}
