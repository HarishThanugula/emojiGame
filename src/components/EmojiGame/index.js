import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  state = {
    emojisList: this.props.emojisList,
    score: 0,
  }

  shuffledEmojisList = id => {
    this.setState(prevState => ({
      emojisList: prevState.emojisList.sort(() => Math.random() - 0.5),
    }))

    this.setState(prevState => ({
      emojisList: prevState.emojisList.map(eachItem => {
        if (eachItem.id !== id) {
          return this.setState(preState => ({score: preState.score + 1}))
        }
        return eachItem
      }),
    }))
  }

  render() {
    const {emojisList, score} = this.state

    return (
      <div className="bg-container">
        <div className="container">
          <NavBar score={score} />
          <div className="emoji-card-container">
            <ul className="list-items-container">
              {emojisList.map(eachEmoji => (
                <EmojiCard
                  emojisItem={eachEmoji}
                  key={eachEmoji.id}
                  shuffledEmojisList={this.shuffledEmojisList}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default EmojiGame
