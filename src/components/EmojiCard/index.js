import './index.css'

const EmojiCard = props => {
  const {emojisItem, shuffledEmojisList} = props
  const {emojiUrl, emojiName, id} = emojisItem

  const changePlaces = () => {
    shuffledEmojisList(id)
  }

  return (
    <li className="emoji" onClick={changePlaces}>
      <img src={emojiUrl} alt={emojiName} className="emoji-img" />
    </li>
  )
}

export default EmojiCard
