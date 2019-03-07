/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_FAILURE
} from '../actions';

const initalState = {
  smurfs: [],
  error: null
}
/*
 Your initial/default state for this project could *Although does not have to* look a lot like this
 {
   smurfs: [],
   fetchingSmurfs: false
   addingSmurf: false
   updatingSmurf: false
   deletingSmurf: false
   error: null
 }
*/
const smurfReducer = (state=initalState, {type, payload}) => {
  switch(type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        error: null
      };
    case FETCH_SMURF_SUCCESS:
    return {
      ...state,
      error: null,
      smurfs: payload
    };
    case FETCH_SMURF_FAILURE:
      return {
        ...state,
        error: payload
      }
    case  ADD_SMURF_START:
      return {
        ...state,
        error: null
      };
    case  ADD_SMURF_SUCCESS:
      return {
        ...state,
        error: null,
        smurfs: payload
      };
    case  ADD_SMURF_FAILURE:
      return {
        ...state,
        error: payload
      }
    default: 
      return state
  }
}

export default smurfReducer;
/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
