import {useQuery} from 'react-query'
import userServices from 'services/userServices'

export const useAnalyticsData = () => {
 return useQuery('users-data', userServices.getAnalyticsData)
}

export const useMentorshipData = () => {
 return useQuery('mentorship-data', userServices.getMentorshipData)
}
