import { createContext, useContext, useMemo, useState } from 'react';

const LoginContext = createContext();



function LoginProvider({ children }) {
    const [open, setOpen] = useState(true)

    const openingTheModel = () => {
        let value = open ? false : true;
        setOpen(value)
    }

    const value = useMemo(() => ({ openingTheModel, open }), [open]);


    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    );
}



const useLoginContext = () => useContext(LoginContext)

export { LoginProvider, useLoginContext };