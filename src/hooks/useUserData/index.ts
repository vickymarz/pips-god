import {useQuery} from 'react-query'
import userServices from 'services/userServices'

export const useTransactions = (id: string | undefined, onSuccess: (data:any) => void) => {
 return useQuery(['verify-transaction', id], () => userServices.verifyTransaction(id), {
   onSuccess
 })
}
export const useAnalyticsData = () => {
 return useQuery('users-data', userServices.getAnalyticsData, {
    staleTime: 60000
 })
}

export const useMentorshipData = () => {
 return useQuery('mentorship-data', userServices.getMentorshipData,
 {
    staleTime: 60000
 })
}

export const useVideosData = () => {
 return useQuery('mentorship-data', userServices.getVideos)
}

export const useDocumentData = () => {
 return useQuery('documents-data', userServices.getDocuments)
}

export const useDocument = (id:number) => {
 return useQuery(['document-data', id], () => userServices.getDocument(id))
}

export const useGetCourses = () => {
 return useQuery('get-all-courses', userServices.getAllCourses,
 {
   staleTime: 60000
 })
}

export const useGetCourse = (id:number) => {
   return useQuery(['course', id], () => userServices.getCourse(id), {
      enabled: false,
   })
}


