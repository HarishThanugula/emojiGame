import './index.css'

const NavBar = props => {
  const {score} = props

  return (
    <nav className="navbar">
      <div className="image-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          className="navbar-image"
          alt="emoji logo"
        />
        <p className="emoji-name">Emoji Game</p>
      </div>
      <div className="score-card">
        <p className="score">Score: {score}</p>
        <p className="top-score">Top Score: 0</p>
      </div>
    </nav>
  )
}

export default NavBar
