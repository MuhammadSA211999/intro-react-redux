import { createStore } from 'react-redux'
import counterReducer from './counter/counterReducer'
const store = createStore(counterReducer)
export default store