import { createContext, useContext, useState } from 'react'
import { AnalyticsContextType } from 'context/contextDataTypes'

const AnalyticsContext = createContext<AnalyticsContextType>({
    data: null,
    setData: () => {},
    startDate: null,
    setStartDate: () => {},
    endDate: null,
    setEndDate: () => {},
})

export const AnalyticsContextProvider = ({children}: {children: React.ReactNode}) => {
    const [data, setData] = useState(null)
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    const values = {
        data,
        setData,
        startDate,
        setStartDate,
        endDate,
        setEndDate
    }

    return (
        <AnalyticsContext.Provider value={values}>
             { children }
        </AnalyticsContext.Provider>
    )
}

export const AnalyticsContextUse = () => {
    return useContext(AnalyticsContext);
};
