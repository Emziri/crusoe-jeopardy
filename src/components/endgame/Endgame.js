import './Endgame.scss';

const Endgame = (props) => {
	return (
		<div className="game-over">
			<div className="final-score">
				Your Score: ${props.finalScore}
			</div>
		</div>
	);
}

export default Endgame;