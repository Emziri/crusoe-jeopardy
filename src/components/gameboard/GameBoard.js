import './GameBoard.scss';
import {useState, useEffect} from 'react';
import Category from '../category/Category';
import Score from '../score/Score';
import Endgame from '../endgame/Endgame';

function GameBoard() {

	const [clues, setClues] = useState();
	const [loading, setLoading] = useState(true);
	const [score, setScore] = useState(0);
	const [winCon, setWinCon] = useState(false);

	useEffect(() =>{
		const getClues = async () => {
			const catResp = await fetch(getCatURL());
			const categories = await catResp.json();

			const clueCollection = [];

			for(let i = 0; i < 6; i++){
				let catID = categories[i]["id"];
				const clueURL = "http://jservice.io/api/clues?category=" + catID;

				const cluesResp = await fetch(clueURL);
				const cluesRaw = await cluesResp.json();

				let catClueList = [];
				for(let j = 0; j < 5; j++){
					catClueList.push(cluesRaw[j]);
				}
				clueCollection.push(catClueList);
			}


			console.log(clueCollection);
			setClues(clueCollection);
			setLoading(false);
		};


		getClues();
	}, []);

	//func to get full url for categories request with a randomized offset. No overlap between sets of 6.
	const getCatURL = () => {
		let max = 180;
		max = (max/6) + 1;
		const rand = Math.random() * max;
		const randOffset = 6 * (Math.floor(rand));

		const catsURL = "http://jservice.io/api/categories?count=6&offset=" + randOffset;

		return catsURL	;
	}

	const handleScore = (questVal) => {
		console.log("handling score");
		console.log(questVal);
		let nextScore = questVal;
		if(typeof nextScore !== "number"){
			nextScore = 500;
		}

		setScore(score + nextScore);
		if(document.getElementsByClassName('unanswered').length === 0){
			setWinCon(true);
		}
	}


  return (
    <div className="game">

    	{winCon &&
			<div className="game-end">
				<Endgame finalScore={score}/>
			</div>
	  	}


	  	{!winCon &&
			<div className="game-play">
				<h1>Jeopardy!</h1>
				<Score score={score} />

				{loading &&
					<div className="spinner-container">
						<div className="spinner"></div>
					</div>
				}

				{!loading &&
					<div className="screens-holder">
						<Category clues={clues[0]} scoreHandler={handleScore} />
						<Category clues={clues[1]} scoreHandler={handleScore} />
						<Category clues={clues[2]} scoreHandler={handleScore} />
						<Category clues={clues[3]} scoreHandler={handleScore} />
						<Category clues={clues[4]} scoreHandler={handleScore} />
						<Category clues={clues[5]} scoreHandler={handleScore} />
					</div>
				}
			</div>
		}
	</div>
	);
}

export default GameBoard;