import {useMutation} from 'react-query'

export const useFiles = ( queryFn: (params?: any) => Promise<any>, onSuccess:(data:string) => void ) => {
 return useMutation(queryFn, {
   onSuccess: onSuccess
 })
}
