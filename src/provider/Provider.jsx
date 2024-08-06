import { createContext } from 'react';

export const bbdd = {};
export const GlobalContext = createContext();

export const Provider = ({ children }) => {
	return (
		<GlobalContext.Provider value={bbdd}>{children}</GlobalContext.Provider>
	);
};
