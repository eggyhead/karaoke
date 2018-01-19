import {expect} from 'chai'
import React from 'react'
import enzyme, {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import {PlaySong} from './play-song'

const adapter = new Adapter()
enzyme.configure({adapter})

describe('PlaySong', () => {
    let playSong

    beforeEach(() => {
        playSong = shallow(<PlaySong song={'Shake it off'}/>)
    })

    it ('plays the song ')
})