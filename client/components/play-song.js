import React, {Component} from 'react'
import {connect} from 'react-redux'
// import {loadSong} from '../store'
// import {Napster} from '../../../napster.js'

// Napster.init({
//     consumerKey: process.env.NAPSTER_API_KEY
// })

class SongPlayer extends Component {

    // componentDidMount(props) {
    //    this.props.loadSongData();
    // }
    render() {
        
        // let singleSong = this.props.song && this.props.song
        // let trackLink = singleSong.tracks && (JSON.stringify(singleSong.tracks[0].previewURL) + "?apikey=OGJiNjFkYWItNzBjYi00NDg2LTkwYTQtY2NjZGFhOWY2MTMz")
        // console.log('song in component', singleSong)
        return (
            <div>
                <iframe width="355" height="440" src="http://us.napster.com/embedded-player/?g=606552CFA54C77F0E050960A55036D02&ocode=social_user&pcode=social_user&cpath=Embed&rsrc=track#/tracks/tra.246513839"></iframe>
            </div>
        )
    }
    
}

const mapState = ({singleSong}) => {
    return {
        song: singleSong
    }
    
}


// const mapDispatch = (dispatch) => {
//     return {
//         loadSongData() {
//             dispatch(loadSong())
//         } 
            
//     }
// }

export default connect(mapState)(SongPlayer);