import { useQuery } from 'react-query'
import userServices from 'services/userServices'

export type ModulesType = {
   docs: {
     id: number,
     title: string
     tags: string
     course_resources: {
       id?: number
       type: string
       url: string
       thumbnail?: string
     }[]
   }[]
   pages?: number
   total?: number
}

export const useTransactions = (id: string | undefined, onSuccess: (data:any) => void) => {
 return useQuery(['verify-transaction', id], () => userServices.verifyTransaction(id), {
   onSuccess,
   refetchOnWindowFocus: false,
 })
}

export const useAnalyticsData = () => {
 return useQuery('users-data', userServices.getAnalyticsData, {
    staleTime: 50000
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

export const useGetModulesBrief = () => {
 return useQuery('get-all-modules-brief', userServices.getAllModulesBrief,
 {
   staleTime: 60000,
   select: (data) => {
      const modulesBriefResponse = data as ModulesType
      const modulesBrief = modulesBriefResponse?.docs.map(({id, title}: {id: number, title: string}) => (
         {id, title}
      ))
      return modulesBrief
   }
 })
}

export const useGetModule = (id:number | null) => {
   return useQuery(['course', id], () => userServices.getModule(id), {
      enabled: false,
   })
}


