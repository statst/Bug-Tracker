
let lastId = 0;

export default function reducer(state = [], action){
  if(action.type ==='bugDiscovered'){
    return [
      ...state, 
      {
        id: lastId++,
        description: action.payload.description,
        resolved: false
      }
  ];
  }
  else if(action.type === 'bugRemoved'){
    return state.filter( bug => bug.id !== action.payload.id)
  }
  return state;
}