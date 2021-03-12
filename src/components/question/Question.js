import './Question.scss';
import Answer from '../answer/Answer';

const Question = (props) => {

	const handleAnswer = (correct) => {

		if(correct){
			props.scoreHandler(props.clue.value);
			props.close();
		} else {
			props.scoreHandler(0);
			props.close();
		}
	}

	return (
		<div className="question-splash">
			<button className="close-btn" onClick={props.close}>&times;</button>
			<div className="question-content">
				<div className="question-cat">{props.clue.category.title}</div>
				<p>{props.clue.question}</p>
				<Answer answer={props.clue.answer} val={props.clue.value} ansHandler={handleAnswer}/>
			</div>
		</div>
	);
}

export default Question;