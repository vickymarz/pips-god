import { Database, Analytics } from './components'
import { useAnalyticsData} from 'hooks'
import { AnalyticsContextUse } from 'context'

export const Overview = () => {
  const { data:analyticsData } = useAnalyticsData()
  const { data} = AnalyticsContextUse()

  const updatedData = data ? data : analyticsData
  return (
    <div>
        <Analytics data={updatedData} />
        <Database data={updatedData} />
    </div>
  )
}

