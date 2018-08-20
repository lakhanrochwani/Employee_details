export function selectEmployee(employee){
  return{
    type:'Employee_SELECTED',
    payload:employee
  };
}
