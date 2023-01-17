import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../styles/styles.css';

export const CharactersScreen = () => {
	const { char } = useSelector((state) => state);

	return (
		<div className='container-cards'>
			<h1>HARRY POTTER CHARACTERS</h1>
			<div className='cards'>
				{char.map((character) => (
					<Link
						key={character.id}
						to={`/${character.id}`}
						className={
							character.house !== ''
								? `card ${character.house}`.toLowerCase()
								: 'card staff'
						}>
						<div className='card-character'>
							<img
								className='animate__animated animate__flipInY'
								src={
									character.image !== ''
										? character.image
										: 'https://img0-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/137993/optimized_large_thumb_stage.jpg'
								}
								alt={character.name}
							/>
							<h3 key={character.id}>{character.name}</h3>
						</div>
						<div className='card-house'>
							<p className='animate__animated animate__fadeInRight'>
								{character.house || 'staff'}
							</p>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};
