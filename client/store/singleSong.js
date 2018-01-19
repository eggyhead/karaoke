import axios from 'axios'
import history from '../history'

let config = {
    
}

/**
 * ACTION TYPES
 */

const GET_SONG = 'GET_SONG'
/**
 * INITIAL STATE
 */
const defaultSong = {}

/**
 * ACTION CREATORS
 */

export const getSong = song => ({type: GET_SONG, song })

/**
 * THUNK CREATORS
 */

export const loadSong = () => 
    dispatch =>
        axios.get('https://api.napster.com//v2.2/tracks/tra.5156528', config)
        .then(res => {
            console.log('song data', res.data)
            dispatch(getSong(res.data))
        })
        .catch(err => console.log(err))

/**
 * REDUCER
 */

export default function(state = defaultSong, action) {
    switch(action.type) {
        case GET_SONG:
            return action.song
        default: 
            return state;
    }
}