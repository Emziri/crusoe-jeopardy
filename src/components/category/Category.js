import './Category.scss';

import ClueTile from '../cluetile/ClueTile';

const Category = (props) => {

	const catName = props.clues[0].category.title;

	const clues = props.clues.map((clue) => {
		return <ClueTile key={clue.id} clue={clue} scoreHandler={props.scoreHandler}/>
	});

	return (
		<div className="Category">
			<div className="cat-title">
				<h2>{catName}</h2>
			</div>
			<div className="cat-col">
		      	{clues}
	      	</div>
      	</div>
	);

}

export default Category;