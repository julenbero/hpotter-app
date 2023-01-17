import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCharacterById } from '../../helpers/getCharacterById';

export const DetailScreen = () => {
	const { characterId } = useParams();
	const navigate = useNavigate();

	const state = useSelector((state) => state.char);

	const character = getCharacterById(characterId, state);

	const handleBack = () => {
		const length = window.history.length;
		if (length <= 2) {
			navigate('/');
		} else {
			navigate(-1);
		}
	};

	const {
		name,
		species,
		gender,
		house,
		dateofBiirth,
		wizard,
		ancestry,
		hogwartsStudent,
		hogwartsStaff,
		actor,
		image,
	} = character;

	return (
		<div>
			<h1>{name}</h1>
			<img src={image} alt={name} />
			<button onClick={handleBack}>Return</button>
		</div>
	);
};
