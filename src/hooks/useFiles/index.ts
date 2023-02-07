import {useMutation} from 'react-query'

const useFiles = ( queryFn: (params?: any) => Promise<any>, onSuccess:(data:string) => void ) => {
 return useMutation(queryFn, {
   onSuccess: onSuccess
 })
}
export default useFiles
