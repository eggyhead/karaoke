/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Main} from './main'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as ChooseSong} from './song-choices'
export {default as CategoryForm} from './options'
export {default as RandomSong} from './random-song'
export {default as SoundWave} from './sound-wave'
// export {default as SingleSong} from './play-song'


