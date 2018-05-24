import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setNumSingers, setSongGenre, setSongType, setSongs} from '../store'
import {Link} from 'react-router-dom'
import history from '../history'
/**
 * COMPONENT
 */
class CategoryForm extends Component {
    constructor(props) {
        super(props)
    }
    handleClick(e) {
        history.push('/songs')
    }
    render(props) {
        const {handleChange, handleRandom, setSongs, songs} = this.props
        return (
            <div>
            <div className="options-form">
            <img id="landing-page-img" src="../../Karaoke.gif"></img>
            <h2>Let's get started!</h2>
            <div className="row" >
                <div className="col" id="random-song">
                    <Link to="/randomSong"><button id="random-song-button">Give me a Random Song</button></Link>
                </div>
            </div>
                <form id="select-form">
                    <div className="row" id="options-select">
                        <div className="col">
                            <label htmlFor="numSingers">Number of Singers</label>
                            <select onChange={handleChange} className='category-select' name='numSingers'>
                                {categories.numSingers && categories.numSingers.map(numOption => <option key={numOption} value={numOption}>{numOption}</option>)}  
                            </select>
                        </div>
                    
                        <div className="col">
                            <label htmlFor="songGenre">Song Genre</label>
                            <select onChange={handleChange} className='category-select' name='songGenre'>
                                {categories.songGenre && categories.songGenre.map(songGenre => <option key={songGenre} name='songGenre' value={songGenre}>{songGenre}</option>)}
                            </select>
                        </div>
                        <div className="col">
                            <label htmlFor="songType">Song Type</label>
                            <select onChange={handleChange} className='category-select' name='songType'>
                                {categories.songType && categories.songType.map(songType => <option key={songType} name='songType' value={songType}>{songType}</option>)}
                            </select>
                        </div>
                        <button id="song-button" onClick={this.handleClick}>Time to sing</button>
                    </div>     
                </form>
            </div>    
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



/* */