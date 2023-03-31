import { Database, Analytics } from './components'
import { useAnalyticsData} from 'hooks'

export const Overview = () => {
  const { data } = useAnalyticsData()

  return (
    <div>
        <Analytics data={data} />
        <Database />
    </div>
  )
}

