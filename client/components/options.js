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
            <div className="options-form">
            <img id="landing-page-img" src="../../Karaoke.gif"></img>
            <div className="row">
                <div className="col">
                    <Link to="/randomSong"><button id="random-song-button">Random Song</button></Link>
                </div>
            </div>
                <form id="select-form">
                    <div className="row">
                        <div className="col">
                            <select onChange={handleChange} className='category-select' name='numSingers'>
                                {categories.numSingers && categories.numSingers.map(numOption => <option key={numOption} value={numOption}>{numOption}</option>)}  
                            </select>
                        </div>
                    
                        <div className="col">
                            <select onChange={handleChange} className='category-select' name='songGenre'>
                                {categories.songGenre && categories.songGenre.map(songGenre => <option key={songGenre} name='songGenre' value={songGenre}>{songGenre}</option>)}
                            </select>
                        </div>
                        <div className="col">
                            <select onChange={handleChange} className='category-select' name='songType'>
                                {categories.songType && categories.songType.map(songType => <option key={songType} name='songType' value={songType}>{songType}</option>)}
                            </select>
                        </div>
                    </div>
                </form>
                 <Link to="/songs"><button id="song-button"><img src="../../microphone.png" id="button-image"></img></button></Link>
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



