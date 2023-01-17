import Swal from 'sweetalert2';
import { types } from './../types/types';

export const startAllCharacters = (init, finish) => {
	return (dispatch) => {
		Swal.fire({
			title: 'Uploading...',
			text: 'Please Wait...',
			allowOutsideClick: false,
			showConfirmButton: false,
			willOpen: () => {
				Swal.showLoading();
			},
		});
		fetch('https://hp-api.onrender.com/api/characters')
			.then((res) => res.json())
			.then((data) => data.slice(init, finish).map((char) => char))
			.then((characters) => {
				dispatch(allCharacters(characters));
				Swal.close();
			});
	};
};

export const allCharacters = (characters) => ({
	type: types.allCharacters,
	payload: characters,
});
