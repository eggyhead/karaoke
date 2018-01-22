import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setNumSingers, setSongGenre, setSongType, setSongs} from '../store'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
class CategoryForm extends Component {
    constructor(props) {
        super(props)
    }
    render(props) {
        const {handleChange, handleRandom, setSongs, songs} = this.props
        return (
            <div>
            <Link to="/randomSong"><button>Random Song</button></Link>
                <form id="select-form">
                    <select onChange={handleChange} name='numSingers'>
                        {categories.numSingers && categories.numSingers.map(numOption => <option key={numOption} value={numOption}>{numOption}</option>)}  
                    </select>
        
                    <select onChange={handleChange} name='songGenre'>
                        {categories.songGenre && categories.songGenre.map(songGenre => <option key={songGenre} name='songGenre' value={songGenre}>{songGenre}</option>)}
                    </select>
        
                    <select onChange={handleChange} name='songType'>
                        {categories.songType && categories.songType.map(songType => <option key={songType} name='songType' value={songType}>{songType}</option>)}
                    </select>
                </form>
                 <Link to="/songs"><button id="song-button"><img src="../../microphone.png"></img></button></Link>
            </div>
        )
    }
}

const categories = {
    'numSingers': ['Solo', 'Duet', 'Group'], 
    'songGenre': ['Pop', 'Broadway', 'Rock', 'Country','Rap,','R&B/Soul', 'Kids'], 
    'songType': ['Uptempo', 'Ballad', 'Love Song', 'Party Song', '"So Over You!"'] 
}

   

/**
 * CONTAINER
 */
const mapState = ({songs, numSingers, voiceType, songGenre, songType}) => {
  return {
      songs: songs,
      numSingers: numSingers,
      songGenre: songGenre,
      songType: songType
  }
}

const mapDispatch = (dispatch) => {
    return {
        handleChange(evt) {
            let name = evt.target.name
            console.log('name', name, ' & value', evt.target.value )
            switch(name) {
                case 'numSingers':
                    return dispatch(setNumSingers(evt.target.value));
                case 'songGenre':
                    return dispatch(setSongGenre(evt.target.value));
                case 'songType':
                    return dispatch(setSongType(evt.target.value));
                default: 
                    null
            }
        }
    }
}

export default connect(mapState, mapDispatch)(CategoryForm)



