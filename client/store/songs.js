import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */

const GET_ALL_SONGS = 'GET_ALL_SONGS'
const GET_RANDOM_SONG = 'GET_RANDOM_SONG'
/**
 * INITIAL STATE
 */
const allSongs = [
    {title: 'Shake it off', artist: 'Taylor Swift', tags: ['Solo', 'Female High', 'Pop', '"So Over You!"'], mp4: 'songs/shake-it-off.mp4'},
    {title: 'Pretty Good At Drinkin Beer', tags: ['Solo', 'Male low', 'Country', 'Party Song'], mp4: 'songs/drinkin-beer.mp4'},
    {title: 'Ice ice baby', tags: ['Solo', 'Male', 'Rap', 'Party Song'], mp4: 'songs/ice-ice-baby.mp4'},
    {title: 'Bad Romance', tags: ['Solo', 'Female Low/Belter', 'Pop', 'Party Song'], mp4: 'songs/bad-romance.mp4'},
    {title: 'Tennessee Whiskey', artist: 'Chris Stapleton', tags: ['Solo', 'Male High', 'Country', 'Ballad'], mp4: ''},
    {title: 'Sweet Caroline', artist: 'Neil Diamond', tags: ['Solo', 'Male High', 'Rock', 'Love Song'], mp4: ''},
    {title: 'Perfect', artist: 'Ed Sheeran', tags: ['Solo', 'Male High', 'Pop', ''], mp4: ''},
    {title: 'Don\'t Stop Believing', artist: 'Journey', tags: ['Solo', 'Male High', 'Rock', 'Party Song'], mp4: ''}
]

/**
 * ACTION CREATORS
 */

export const getSongs = songs => ({type: GET_ALL_SONGS, songs})
export const getRandomSong = song => ({type: song})


/**
 * REDUCER
 */

export default function(state = allSongs, action) {
    switch(action.type) {
        case GET_ALL_SONGS:
            return action.songs
        case GET_RANDOM_SONG:
            
        default: 
            return state;
    }
}