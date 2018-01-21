// import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */

const SET_SONG_GENRE = 'SET_SONG_GENRE'
const CLEAR_SONG_GENRE = 'CLEAR_SONG_GENRE'
/**
 * INITIAL STATE
 */
const defaultSongGenre = 'Pop'

/**
 * ACTION CREATORS
 */

export const setSongGenre = songGenre => ({type: SET_SONG_GENRE, songGenre })
export const clearSongGenre = () => ({type: CLEAR_SONG_GENRE})
/**
 * REDUCER
 */

export default function(state = defaultSongGenre, action) {
    switch(action.type) {
        case SET_SONG_GENRE:
            return action.songGenre
        case CLEAR_SONG_GENRE:
            return defaultSongGenre
        default: 
            return state;
    }
}