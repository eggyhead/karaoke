const allSongs = [
    {title: 'Baby One More Time', artist: 'Britney Spears', tags: ['Solo', 'Pop', 'Uptempo','Party Song'], mp4: 'songs/baby-one-more-time.mp4'},
    {title: 'Bad Romance', tags: ['Solo', 'Pop', 'Party Song'], mp4: 'songs/bad-romance.mp4'},
    {title: 'Barbie Girl', tags: ['Group', 'Solo', 'Pop', 'Party Song'], mp4: 'songs/barbie-girl.mp4'},
    {title: 'Bohemian Rhapsody', tags: ['Group', 'Solo', 'Pop', 'Rock', 'Party Song'], mp4: 'songs/bohemian-rhapsody.mp4'},
    {title: 'Pretty Good At Drinkin Beer', tags: ['Solo', 'Country', 'Party Song'], mp4: 'songs/drinkin-beer.mp4'},
    {title: 'Ice ice baby', tags: ['Solo', 'Rap', 'Party Song'], mp4: 'songs/ice-ice-baby.mp4'},
    {title: 'Let It Go', tags: ['Solo', 'Pop', 'Broadway', 'Kids', 'Party Song'], mp4: 'songs/let-it-go.mp4'},
    {title: 'Proud Mary', tags: ['Solo', 'Pop', 'R&B/Soul', 'Party Song'], mp4: 'songs/proud-mary.mp4'},
    {title: 'Shake it off', artist: 'Taylor Swift', tags: ['Solo', 'Pop', 'Uptempo','"So Over You!"'], mp4: 'songs/shake-it-off.mp4'},
    {title: 'Shape Of You', artist: 'Ed Sheeran', tags: ['Solo', 'Pop', 'Uptempo','Love Song'], mp4: 'songs/shape-of-you.mp4'},
    {title: "Summer Lovin\'", artist: 'Grease', tags: ['Duet', 'Group', 'Broadway', 'Uptempo','Party Song'], mp4: 'songs/summer-lovin.mp4'},
    {title: 'Sweet Caroline', artist: 'Neil Diamond', tags: ['Solo', 'Group','Rock', 'Pop', 'Love Song', 'Party Song'], mp4: 'songs/sweet-caroline.mp4'},
    {title: 'Take On Me', artist: 'A-Ha', tags: ['Solo', 'Pop', 'Uptempo'], mp4: 'songs/take-on-me.mp4'},
    {title: 'Valerie', artist: 'Amy Winehouse', tags: ['Solo', 'Rock', 'R&B/Soul', 'Love Song', 'Uptempo', 'Party Song'], mp4: 'songs/valerie.mp4'},
    {title: 'Wannabe', artist: 'Spice Girls', tags: ['Group', 'Pop', 'Party Song', 'Uptempo'], mp4: 'songs/wannabe.mp4'},
]
/**
 * ACTION TYPES
 */

const GET_RANDOM_SONG = 'GET_RANDOM_SONG'
const SET_SINGLE_SONG = 'SET_SINGLE_SONG'
/**
 * INITIAL STATE
 */
const defaultRandomSong = allSongs[Math.floor(Math.random() * allSongs.length)]

/**
 * ACTION CREATORS
 */

export const getRandomSong = song => ({type: GET_RANDOM_SONG, song})
export const setSingleSong = song => ({type: SET_SINGLE_SONG, song})
/**
 * THUNK CREATORS
 */


/**
 * REDUCER
 */

export default function(state = defaultRandomSong, action) {
    switch(action.type) {
        case GET_RANDOM_SONG:
            return allSongs[Math.floor(Math.random() * allSongs.length)]
        case SET_SINGLE_SONG:
            return action.song
        default: 
            return state;
    }
}