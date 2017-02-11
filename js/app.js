import React, { Component } from 'react'
import Gallery from './components/gallery'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: [
        {
          url: 'https://thechive.files.wordpress.com/2017/02/serving-of-side-boob-29.jpg?quality=85&strip=info&w=600',
          description: 'airplane'
        },
        {
          url: 'https://thechive.files.wordpress.com/2017/02/screen-shot-2017-01-23-at-11-33-00-am.png?w=297&h=600',
          description: 'blue'
        },
        {
          url: 'https://thechive.files.wordpress.com/2017/02/screen_shot_2017-01-18_at_11-56-46_am.png?w=342&h=600',
          description: 'baywatch'
        },
        {
          url: 'https://thechive.files.wordpress.com/2017/02/f8e728b1b6bc3c0c8e522c2320754720.jpeg?quality=85&strip=info&w=600',
          description: 'asiansensation'
        },
        {
          url: 'https://thechive.files.wordpress.com/2017/02/7d1896093cb60ef03a91b6018ec29d03-copy-2.jpeg?quality=85&strip=info&w=600',
          description: 'A1'
        },
        {
          url: 'https://thechive.files.wordpress.com/2016/11/asian_girls_that_are_real_stunners_640_03.jpg?quality=85&strip=info&w=600',
          description: 'expression'
        },
        {
          url: 'https://thechive.files.wordpress.com/2016/11/im-thankful-for-beautiful-asian-women-everywhere-44-photos-28.jpg?quality=85&strip=info&w=600',
          description: 'pizza'
        },
        {
          url: 'https://thechive.files.wordpress.com/2016/11/im-thankful-for-beautiful-asian-women-everywhere-44-photos-210.jpg?quality=85&strip=info&w=600',
          description: 'chailee'
        }
      ]
    }
  }
  render() {
    return (
      <Gallery images={this.state.images}/>
    )
  }
}
