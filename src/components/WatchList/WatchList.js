import React from 'react';
import PropTypes from 'prop-types';
import WatchItem from '../WatchItem/WatchItem';

function WatchList({ movies, onToggle, onDelete }) {
	return (
		<div>
			{movies.map((movie) => {
				return (
					<WatchItem
						key={movie.id}
						movie={movie}
						onToggle={onToggle}
						onDelete={onDelete}
					/>
				);
			})}
		</div>
	);
}

WatchList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      director: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};


export default WatchList;