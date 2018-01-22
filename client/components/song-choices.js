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

  render(props) {
    let {songs, numSingers, songGenre, songType} = this.props
      console.log('songs pre-filter', songs)
     
      songs = songs.filter(song => { 
        console.log('song tags', song.tags)
        console.log('numSingers', numSingers)
        console.log('matches genre', song.tags.includes(songGenre))
        console.log('matches type', song.tags.includes(songType))
        return (
            song.tags.includes(numSingers)  &&
            song.tags.includes(songGenre) &&
            song.tags.includes(songType)
        ) 
      })
    
        console.log(songs, 'filteredSongs')
        return (
          <div>
          
          {(!songs.length) ? <span>More songs to come soon!</span> :
              songs && songs.map(song => {
                return (
                  <div key={song}>
                    <label id="song-title">{song.title} by {song.artist}</label>
                    <video width="320" height="240" controls>
                      <source src={song.mp4} type="video/mp4"/>
                            Your song
                    </video>
                 </div>
                )
                
              })
              
            }
            <Link to="/"><button>Try again</button></Link>
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



export default connect(mapState)(SongChoices)
