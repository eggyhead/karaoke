import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {clearNumSingers, clearSongType, clearSongGenre} from '../store'
import {SoundWave} from '../components'

const PlaySong = (props) => {
    return (
        <div className="song-container">
            <div className="disco-ball"><img src="animated-purple-disco-ball3.gif"></img></div>
            {(!songs.length) ? <span>More songs to come soon!</span> :
              <div className="multiple-songs">
                {songs && songs.map(song => {
                  return (
                    <div key={song.id}>
                      <label id="song-title">{song.title} by {song.artist}</label>
                      <video width="320" height="240" controls>
                        <source src={song.mp4} type="video/mp4"/>
                              Your song
                      </video>
                   </div>
                  )
                  
                })}
                </div>
                
              }
              <SoundWave />
              <Link to="/"><button>Try again</button></Link>
              <div><img src="disco-dance-floor-lights-animation.gif"></img></div>
            </div>
          ) 
  
    }
  } 
  
  
  
  /**
   * CONTAINER
   */
  const mapState = ({}) => {
    return {
      songs: songs,
      numSingers: numSingers,
      songGenre: songGenre, 
      songType: songType
    }
  }
  
  
  
  export default connect(mapState)(SongChoices)