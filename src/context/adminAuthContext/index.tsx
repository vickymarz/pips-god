import { createContext, useContext, useState } from 'react'
import { UserType, AdminAuthContextType } from 'context/contextDataTypes'


const AdminAuthContext = createContext<AdminAuthContextType>({
    user: null,
    setUser: () => {}
})

export const AdminAuthContextProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<UserType | null>(null)

    const values = {
        user,
        setUser
    }

    return (
        <AdminAuthContext.Provider value={values}>
             { children }
        </AdminAuthContext.Provider>
    )
}

export const AdminAuthContextUse = () => {
    return useContext(AdminAuthContext);
};
