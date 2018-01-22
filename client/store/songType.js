// import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */
const SET_SONG_TYPE = 'SET_SONG_TYPE'
const CLEAR_SONG_TYPE = 'CLEAR_SONG_TYPE'
/**
 * INITIAL STATE
 */
const defaultSongType = 'Uptempo'

/**
 * ACTION CREATORS
 */

export const setSongType = songType => ({type: SET_SONG_TYPE, songType })
export const clearSongType = () => ({type: CLEAR_SONG_TYPE})
/**
 * REDUCER
 */

export default function(state = defaultSongType, action) {
    switch(action.type) {
        case SET_SONG_TYPE:
            return action.songType
        case CLEAR_SONG_TYPE:
            return defaultSongType
        default: 
            return state;
    }
}