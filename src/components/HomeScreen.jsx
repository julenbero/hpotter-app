import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { startAllCharacters } from './../actions/characters';
import { CharactersScreen } from './characters/CharactersScreen';

export const HomeScreen = () => {
	const number = 10;
	const dispatch = useDispatch();
	const [pagination, setPagination] = useState({
		init: 0,
		finish: number,
	});

	const handlePagination = (e) => {
		const { init, finish } = pagination;
		if (e.target.name === 'prev') {
			setPagination({
				init: init - number,
				finish: finish - number,
			});
		} else {
			setPagination({
				init: init + number,
				finish: finish + number,
			});
		}
	};

	useEffect(() => {
		dispatch(startAllCharacters(pagination.init, pagination.finish));
	}, [dispatch, pagination.init, pagination.finish]);

	return (
		<div>
			<CharactersScreen />
			<button
				name='prev'
				onClick={handlePagination}
				disabled={pagination.init === 0}>
				Prev
			</button>
			<button
				name='next'
				disabled={pagination.finish > 401}
				onClick={handlePagination}>
				Next
			</button>
		</div>
	);
};
