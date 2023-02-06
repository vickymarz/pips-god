import {useQuery} from 'react-query'

export const useFiles = ({queryKey, queryFn}) => {
  useQuery(queryKey, queryFn)
  return (
    <div>index</div>
  )
}

