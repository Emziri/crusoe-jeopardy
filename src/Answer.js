import {useState, useEffect} from 'react';
import './Answer.css';

const Answer = (props) => {

	const [answer, setAnswer] = useState('');
	const [correct, setCorrect] = useState();


	const handleClick = (e) => {
		if(sanitize(answer) === sanitize(props.answer)){
			setCorrect(true);
			setAnswer('');

			setTimeout(props.newQuestion, 3000);
		} else {
			setCorrect(false);
		}
	}

	const sanitize = (value) => {
		return value.replace(/\W/g, '').toLowerCase();
	}

	const handleChange = (e) => {
		setAnswer(e.target.value);
	}



	return (
		<div className="answer">
			<input type="text" name="answer" value={answer} onChange={handleChange}></input>
			<button name="submit" onClick={handleClick}>Answer</button>
			{correct === undefined ? null :
				correct === true ? <p>You got it!</p> :
				<p>Sorry, that was wrong</p>
			}
		</div>
	);
}


export default Answer;