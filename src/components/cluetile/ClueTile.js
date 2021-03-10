import './ClueTile.scss';
import {useState} from 'react';
import Question from '../question/Question';

const ClueTile = (props) => {
	const [asked, setAsked] = useState(false);
	const [showQuestion, setShowQuestion] = useState(false);

	const handleClick = () => {
		if(!asked){
			setShowQuestion(true);
		}
		setAsked(true);
	}

	const handleClose = () => {
		setShowQuestion(false);
	}

	//data isn't perfect, if no value listed, giving 500 points as default
	return(
		<div>
			<div className='tile-container'>
				{!asked && 
					<button className='clue-tile unanswered' onClick={handleClick}>
					{props.clue.value !== null ? props.clue.value : "500"}
					</button>
				}
				{asked && 
					<button className='clue-tile' onClick={handleClick}>
					</button>
				}
				
			</div>
			{showQuestion && <Question clue={props.clue} close={handleClose} scoreHandler={props.scoreHandler}/>}
		</div>
	);

}

export default ClueTile;