// import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */

const SET_NUM_SINGERS = 'SET_NUM_SINGERS'
const CLEAR_NUM_SINGERS = 'CLEAR_NUM_SINGERS'
/**
 * INITIAL STATE
 */
const defaultNumSingers = 'Solo'

/**
 * ACTION CREATORS
 */

export const setNumSingers = numSingers => ({type: SET_NUM_SINGERS, numSingers })
export const clearNumSingers = () => ({type: CLEAR_NUM_SINGERS})
/**
 * THUNK CREATORS
 */


/**
 * REDUCER
 */

export default function(state = defaultNumSingers, action) {
    switch(action.type) {
        case SET_NUM_SINGERS:
            return action.numSingers
        case CLEAR_NUM_SINGERS:
            return defaultNumSingers
        default: 
            return state;
    }
}