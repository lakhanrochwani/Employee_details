export default function(state=null,action){
    switch (action.type) {
      case 'Employee_SELECTED':
        return action.payload;
  }
  return state;
}
