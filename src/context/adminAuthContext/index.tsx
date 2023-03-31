import { createContext, useContext, useState } from 'react'

type userType = {
    firstName: string
}

type AdminAuthContextType = {
    user: userType | null
    setUser: React.Dispatch<React.SetStateAction<userType | null>>
}

const AdminAuthContext = createContext<AdminAuthContextType>({
    user: null,
    setUser: () => {}
})

export const AdminAuthContextProvider = ({children}: {children: React.ReactNode}) => {
    const [user, setUser] = useState<userType | null>(null)

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
