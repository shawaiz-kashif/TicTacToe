import Friends from '../../assets/images/guys.jpg'

const GameInfo = ({ status, winner, xIsNext }) => {
  return (
    <section className="game-information">
      {xIsNext && !winner ? (
        <h3 className="player-x">Your Turn First</h3>
      ) : !xIsNext && !winner ? (
        <h3 className="player-o">My Turn Now! </h3>
      ) : winner && status === 'Winner: X' ? (
        <h3 className="player-x">Haha May Jeet gya! </h3>
      ) : (
        <h3 className="player-o">Bachay Hu beta aap abhi!</h3>
      )}
      <img src={Friends} alt="Player X and Player O" />
    </section>
  )
}

export default GameInfo
