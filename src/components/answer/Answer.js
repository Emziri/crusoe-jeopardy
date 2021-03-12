import {useState} from 'react';
import './Answer.scss';

const Answer = (props) => {

	const [answer, setAnswer] = useState('');
	const [correct, setCorrect] = useState();


	const handleClick = () => {
		if(prepCompare(props.answer).includes(prepCompare(answer))){
			setCorrect(true);
			setAnswer('');
			setTimeout(()=> props.ansHandler(true), 1500);
		} else {
			setCorrect(false);
			setTimeout(()=> props.ansHandler(false), 1500);
		}
	}

	const prepCompare = (value) => {
		return value.replace(/\W/g, '').toLowerCase();
	}

	const handleChange = (e) => {
		setAnswer(e.target.value);
	}



	return (
		<div className="answer">
			<div className="entry-container">
				<input type="text" name="answer" value={answer} onChange={handleChange}></input>
				<button name="submit" onClick={handleClick}>Answer</button>
			</div>
			{correct === undefined ? null :
				correct === true ? <p>Correct!</p> :
				<p>Sorry, that was wrong</p>
			}
		</div>
	);
}


export default Answer;