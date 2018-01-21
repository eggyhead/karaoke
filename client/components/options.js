import React from 'react'
import {connect} from 'react-redux'
import {setNumSingers, setVoiceType, setSongGenre, setSongType} from '../store'
import {Link} from 'react-router-dom'
/**
 * COMPONENT
 */
const CategoryForm = (props) => {
    const {handleChange} = props
  return (
    <div>
    <button>Random Song</button>
        <form>
            <select onChange={handleChange} name='numSingers'>
                {categories.numSingers && categories.numSingers.map(numOption => <option key={numOption} value={numOption}>{numOption}</option>)}  
            </select>

            <select onChange={handleChange} name='voiceType'>
                {categories.voiceType && categories.voiceType.map(voxOption => <option key={voxOption} name='voiceType' value={voxOption}>{voxOption}</option>)}
            </select>

            <select onChange={handleChange} name='songGenre'>
                {categories.songGenre && categories.songGenre.map(songGenre => <option key={songGenre} name='songGenre' value={songGenre}>{songGenre}</option>)}
            </select>

            <select onChange={handleChange} name='songType'>
                {categories.songType && categories.songType.map(songType => <option key={songType} name='songType' value={songType}>{songType}</option>)}
            </select>
        </form>
         <Link to="/songs"><button>Find me a song!</button></Link>
    </div>
  )
}

const categories = {
    'numSingers': ['Solo', 'Duet', 'Group'], 
    'voiceType': ['Male Low', 'Female Low/Belter', 'Male High', 'Female High', 'Male SUPER BASS'],
    'songGenre': ['Pop', 'Broadway', 'Rock', 'Country','Rap,','R&B', 'Latin', 'Jazz', 'Kids'], 
    'songType': ['Uptempo', 'Ballad', 'Love Song', 'Party Song', '"So Over You!"'] 
}

/**
 * CONTAINER
 */
const mapState = ({numSingers, voiceType, songGenre, songType}) => {
  return {
      numSingers: numSingers,
      voiceType: voiceType, 
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
                case 'voiceType':
                    return dispatch(setVoiceType(evt.target.value));
                case 'songGenre':
                    return dispatch(setSongGenre(evt.target.value));
                case 'songType':
                    return dispatch(setSongType(evt.target.value));
                default: 
                    null
            }
        }
        // handleRandom(evt) {
        //     let numSingers = 
        // }
    }
}

export default connect(mapState, mapDispatch)(CategoryForm)


/**
 *      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <span>option one</span>
                </div>
                <div className="carousel-item">
                    <span>option two</span>
                 </div>
                 <div className="carousel-item">
                    <span>option three</span>
                 </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
             </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
             </a>
        </div>
 */
