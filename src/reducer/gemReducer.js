// import {
//   GEOCODING_START,
//   GEOCODING_SUCCESS,
//   GEOCODING_FAILURE,

//   CREATE_GEM_START,
//   CREATE_GEM_SUCCESS,
//   CREATE_GEM_FAIL

// }
// from '../actions/index copy'


// export const initialState = {
  
//   address: '',
//   isfetching: false,
//   error: ''
// }

// export const gemReducer = (state, initialState, action) => { 
//   switch(action.type){
//     case CREATE_GEM_START:
//     return{
//       ...state,
//       isfetching: true,
//     }
//     case CREATE_GEM_SUCCESS:
//     return {
//           ...state, 
//           newGem: action.payload,
//     }
//     case CREATE_GEM_FAIL:
//     return {
//       ...state,
//       error: action.payload
//     }
 
//     case GEOCODING_START:
//       return {
//         ...state,
//         isfetching:true
//       }
//     case GEOCODING_SUCCESS:
//       return {
//         ...state,
//        address: action.payload 
//       }
//     case GEOCODING_FAILURE:
//       return{
//         ...state,
//         error: action.payload
//       }

//     default: return state
//   }
// }