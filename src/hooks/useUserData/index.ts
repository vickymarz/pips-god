import {useQuery} from 'react-query'
import userServices from 'services/userServices'

export const useAnalyticsData = () => {
 return useQuery('users-data', userServices.getAnalyticsData)
}

export const useMentorshipData = () => {
 return useQuery('mentorship-data', userServices.getMentorshipData)
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

