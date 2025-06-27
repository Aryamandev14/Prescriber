import { createContext } from "react";

// Create the context with an empty initial value (optional)
export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const calculateAge=(dob)=>{
        const today=new Date()
        const birthDate=new Date(dob)
        let age=today.getFullYear()-birthDate.getFullYear()
        return age;
    }
    const currency='₹'
    const value = {
        // Define shared state or functions here
        calculateAge,currency
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
