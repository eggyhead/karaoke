import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getRandomSong} from '../store'
import {SoundWave} from '../components'

/**
 * COMPONENT
 */
class RandomSong extends Component {
  constructor(props) {
    super(props)
  }

  componentWillUnmount(props) {
    this.props.getNewRandomSong()
  }

  render(props) {
    const {singleSong} = this.props
    console.log('randomSong ', singleSong)
  
    return (
        <div className="song-container"> 
          <div className="disco-ball"><img src="animated-purple-disco-ball3.gif"></img></div>
            <label>{singleSong && singleSong.title} by {singleSong && singleSong.artist}</label>
                <video width="320" height="240" controls>
                  <source src={singleSong && singleSong.mp4} type="video/mp4"/>
                        Your song
                </video>
          <SoundWave />
        <Link to="/"><button>Try again</button></Link>
      </div>
    ) 
  }
}



/**
 * CONTAINER
 */
const mapState = ({singleSong}) => {
  return {
    singleSong: singleSong
  }
}

const mapDispatch = (dispatch) => {
  return {
    getNewRandomSong() {
      dispatch(getRandomSong())
    }
  }
}


export default connect(mapState, mapDispatch)(RandomSong)