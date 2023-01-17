export const getCharacterById = (id, characters) => {
	return characters.find((character) => character.id === id);
};
