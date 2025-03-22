import { createContext, useState, ReactNode, useContext, Dispatch, SetStateAction, useEffect } from 'react';

// Define the type for the context state
interface AppContextType {
    darkMode: boolean,
    setDarkMode: Dispatch<SetStateAction<boolean>>
}

// Create the context with an initial value
const AppContext = createContext<AppContextType | undefined>(undefined);

const storageDarkMode = localStorage.getItem('darkMode') || '1'

// Create a provider component
export const AppProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState<boolean>(storageDarkMode === '1' ? true : false)

    useEffect(() => localStorage.setItem('darkMode', (darkMode ? 1 : 0).toString()), [darkMode])

    return (
        <AppContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </AppContext.Provider>
    );
};


export const useApp = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useApp must be used within a AppProvider');
    }
    return context;
};