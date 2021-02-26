import {useState, useEffect} from 'react';
import './Question.css';
import Answer from './Answer';


//get random question, store relevant in state, have an answer component

const Question = () => {

	const [question, setQuestion] = useState();

	useEffect(() =>{
		getQuestion();
	}, []);


	const getQuestion = async () => {
		const url = 'http://jservice.io/api/random';

		const response = await fetch(url);
		const respBody = await response.json();

		console.log(respBody[0]);
		setQuestion(respBody[0]);
	}



	return (
		<div className="main">
			<h1>Jeopardy!</h1>
			{question &&
			<div>
				<div className="category">{question.category.title}</div>
				<h3>${question.value}</h3>
				<p>{question.question}</p>
				<Answer  answer={question.answer} newQuestion={getQuestion}/>
			</div> 
			}
		</div>
	);
}


export default Question;