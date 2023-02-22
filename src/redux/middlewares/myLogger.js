import rootReducer from "../rootReducer";

const myLogger=(store)=>(next)=>(action)=>{
 console.log(`current state is ${action}`);
 console.log(`Before state is ${store.getState()}`);
 const upcomingState=[action].reduce(rootReducer,store.getState())
 console.log(upcomingState);
 return next(action)
 }
export default myLogger