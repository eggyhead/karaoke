import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {clearNumSingers, clearSongType, clearSongGenre} from '../store'

/**
 * COMPONENT
 */
class SongChoices extends Component {
  constructor(props) {
    super(props)
  }

  componentWillUnmount(props) {
    this.props.clearData()
  }
  render(props) {
    let {songs, numSingers, songGenre, songType, voiceType} = this.props
      console.log('songs pre-filter', songs)
      songs = songs.filter(song => { 
          // console.log('song in filter', song)
          // console.log('song genre', songGenre)
          // console.log('song tags at 2', song.tags[2])
    
        return (
            song.tags[0].toLowerCase() === numSingers.toLowerCase() &&
            song.tags[1].toLowerCase() === voiceType.toLowerCase() &&
            song.tags[2].toLowerCase() === songGenre.toLowerCase() &&
            song.tags[3].toLowerCase() === songType.toLowerCase() 
        ) 
      })
    
        console.log(songs, 'filteredSongs')
        return (
          <div>
          
          {(!songs.length) ? <span>There are no songs that match your criteria</span> :
              <div>
                  <video width="320" height="240" controls>
                    <source src={songs && songs[0].mp4} type="video/mp4"/>
                          Your song
                  </video>
              </div>
            }
            <Link to="/"><button>Try again</button></Link>
          </div>
        ) 

  }
} 



/**
 * CONTAINER
 */
const mapState = ({songs, numSingers, songGenre, songType, voiceType}) => {
  return {
    songs: songs,
    numSingers: numSingers,
    songGenre: songGenre,
    songType: songType,
    voiceType: voiceType 
  }
}
const mapDispatch = (dispatch) => {
  return {
    clearData() {
      dispatch(clearNumSingers())
      dispatch(clearSongGenre())
      dispatch(clearSongType())
    }
  }
}


export default connect(mapState, mapDispatch)(SongChoices)
