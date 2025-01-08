import { createContext, useContext, useState } from 'react';

interface AuthProps {
	isAuth?: boolean | null | undefined;
	setIsAuth?: (isAuth: boolean) => void;
}
export const AuthContext: any = createContext<AuthProps>({ isAuth: false });

const AuthContextProvider = ({ isAuthProp = false, children }: any) => {
	const [isAuth, setIsAuth] = useState(isAuthProp);

	return <AuthContext.Provider value={{ isAuth, setIsAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuth = () => {
	const { isAuth, setIsAuth }: any = useContext(AuthContext);
	return { isAuth, setIsAuth };
};
