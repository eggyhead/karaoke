import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import user from './user'
import singleSong from './singleSong'
import songs from './songs'
import numSingers from './numSingers'
import songGenre from './songGenre'
import voiceType from './voiceType'
import songType from './songType'

const reducer = combineReducers({user, singleSong, songs, numSingers, songGenre, voiceType,  songType})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './singleSong'
export * from './songs'
export * from './numSingers'
export * from './songGenre'
export * from './voiceType'
export * from './songType'