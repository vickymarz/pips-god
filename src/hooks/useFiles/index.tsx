import {useMutation} from 'react-query'

export const useFiles = (
  queryFn: (params?: any) => Promise<any>,
  onSuccess:(data:string) => void
  ) => {
 const mutation =  useMutation(queryFn, {
   onSuccess: onSuccess
 })

 return mutation
}

