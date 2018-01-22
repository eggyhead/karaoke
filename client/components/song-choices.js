import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {clearNumSingers, clearSongType, clearSongGenre, setSingleSong} from '../store'
import {SoundWave} from '../components'

/**
 * COMPONENT
 */
class SongChoices extends Component {
  constructor(props) {
    super(props)
  }

  render(props) {
    let {songs, numSingers, songGenre, songType} = this.props
      console.log('songs pre-filter', songs)
     
      songs = songs.filter(song => { 
        return (
            song.tags.includes(numSingers)  &&
            song.tags.includes(songGenre) &&
            song.tags.includes(songType)
        ) 
      })
      const song = songs[Math.floor(Math.random() * songs.length)]
        console.log(songs, 'filteredSongs')
        return (
          <div className="song-container">
          <div className="disco-ball"><img src="animated-purple-disco-ball3.gif"></img></div>
          {(!songs.length) ? <span>More songs to come soon!</span> :
            <div className="single-song">
                  <div key={song.id}>
                    <div>
                      <label id="song-title">{song.title} by {song.artist}</label>
                      <video width="320" height="240" controls>
                        <source src={song.mp4} type="video/mp4"/>
                              Your song
                      </video>
                  </div>
                 </div>
              </div>
              
            }
            <div>
            <SoundWave />
            </div>
            <Link to="/"><button>Try again</button></Link>
            <div id="dance-floor"><img src="disco-dance-floor-lights-animation.gif"></img></div>
          </div>
        ) 

  }
} 



/**
 * CONTAINER
 */
const mapState = ({songs, numSingers, songGenre, songType}) => {
  return {
    songs: songs,
    numSingers: numSingers,
    songGenre: songGenre, 
    songType: songType
  }
}

// const mapDispatch = (dispatch) => {
//   return {
//     onItemClick (evt) {
//       evt.preventDefault();
//       console.log(song, 'song')
//     }
//   }
// }



export default connect(mapState)(SongChoices)
