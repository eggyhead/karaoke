// import axios from 'axios'
// import history from '../history'

/**
 * ACTION TYPES
 */

const SET_VOICE_TYPE = 'SET_VOICE_TYPE'

/**
 * INITIAL STATE
 */
const defaultVoiceType = 'Male low'

/**
 * ACTION CREATORS
 */

export const setVoiceType = voiceType => ({type: SET_VOICE_TYPE, voiceType })

/**
 * REDUCER
 */

export default function(state = defaultVoiceType, action) {
    switch(action.type) {
        case SET_VOICE_TYPE:
            return action.voiceType
        default: 
            return state;
    }
}