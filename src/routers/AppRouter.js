import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DetailScreen } from '../components/characters/DetailScreen';
import { HomeScreen } from './../components/HomeScreen';

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<div>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/:characterId' element={<DetailScreen />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
