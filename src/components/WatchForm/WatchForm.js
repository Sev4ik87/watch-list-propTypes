import React, { useState} from 'react';
import PropTypes from 'prop-types';

import './WatchForm.css'
// import GrowingButton from '../GrowingButton/GrowingButton';

function WatchForm({ onSubmit}) {

	const [title, setTitle] = useState('');
	const [director, setDirector] = useState('');

	function onInputChange(e) {
		e.target.name === 'title' && setTitle(e.target.value);
		e.target.name === 'director' && setDirector(e.target.value);
	}

  function onFormSubmit(e){
    e.preventDefault();
    onSubmit({
      title,
      director,
      isDone: false,
    })
  }

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				name='title'
				value={title}
				onChange={onInputChange}
			/>
			<input
				type='text'
				name='director'
				value={director}
				onChange={onInputChange}
			/>
			<button className='add'>Add</button>
			{/* <GrowingButton  /> */}
		</form>
	);
}

WatchForm.propTypes = {
	onSubmit: PropTypes.func.isRequired, 
};

export default WatchForm;

 