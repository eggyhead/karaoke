import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {withRouter, Link, Router, Route, Switch} from 'react-router-dom'
import {logout, getAllSongs, clearSongType, clearSongGenre, clearNumSingers, getRandomSong} from '../store'
import {ChooseSong, CategoryForm, RandomSong} from './index'

/**
 * COMPONENT
 *  The Main component is our 'picture frame' - it displays the navbar and anything
 *  else common to our entire app. The 'picture' inside the frame is the space
 *  rendered out by the component's `children`.
 */
class Main extends Component  {
  constructor(props) {
    super(props)
  }
  componentDidMount(props) {
    this.props.setInitialState()
  }

  render(props) {
    return (
      <div className="container">
        <img src="../../Karaoke.gif"></img>
        <Switch>
          <div className="sub-content-wrapper">
            <Route exact path="/" component= {CategoryForm} />
            <Route path="/songs" component={ChooseSong} />
            <Route path="/randomSong" component={RandomSong} />
          </div>
        </Switch>
      </div>
    )
  }
  
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,

  }
}

const mapDispatch = (dispatch) => {
  return {
    handleClick () {
      dispatch(logout())
    },
    setInitialState() {
      dispatch(getAllSongs())
      dispatch(clearNumSingers())
      dispatch(clearSongGenre())
      dispatch(clearSongType())
      dispatch(getRandomSong())
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Main))


/**
 * PROP TYPES
 */
Main.propTypes = {
  children: PropTypes.object,
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}


