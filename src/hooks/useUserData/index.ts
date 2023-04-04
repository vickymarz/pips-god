import { useQuery } from 'react-query'
import userServices from 'services/userServices'

export const useTransactions = (id: string | undefined, onSuccess: (data:any) => void) => {
 return useQuery(['verify-transaction', id], () => userServices.verifyTransaction(id), {
   onSuccess,
   refetchOnWindowFocus: false,
 })
}

export const useAnalyticsData = () => {
 return useQuery('users-data', userServices.getAnalyticsData, {
    staleTime: 60000
 })
}

export const useUpdateAnalyticsData = (params: object) => {
   return useQuery(['update-user-data', params], () => userServices.updateAnalyticsData(params))
}

// export const useDocument = (id:number) => {
//  return useQuery(['document-data', id], () => userServices.getDocument(id))
// }

export const useGetModules = () => {
 return useQuery('get-all-modules', userServices.getAllModules,
 {
   staleTime: 60000
 })
}

export const useGetModule = (id:number | null) => {
   return useQuery(['course', id], () => userServices.getModule(id), {
      enabled: false,
   })
}


