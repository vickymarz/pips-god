import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import {useAnalyticsData} from 'hooks'

const dummy = [
  {
    days: 1,
    learners: 0,
  },
  {
    days: 2,
    learners: 3,
  },
  {
    days: 3,
    learners: 4,
  },
  {
    days: 4,
    learners: 2,
  },
  {
    days: 4,
    learners: 0,
  },
  {
    days: 5,
    learners: 8,
  },
];

export const AnalyticsGraph = () => {
  const { data } = useAnalyticsData()
  const serverData = data?.mentorshipData?.map((days:number, learners:string) => (
    {
      days,
      learners
    }
  ))

  return (
    <div className="flex justify-between w-full">
      <div style={{ width: "100%", height: '400px', borderRadius: '10px', boxShadow: '0px 10.7px 16.0499px rgba(220, 224, 249, 0.5)', border: ' 1.07px solid #ECEEF7', background: '#fff' }}>
        <div className='flex justify-between items-center p-[20px]'>
          <div className="font-medium text-[0.73rem] text-[#0D142E] flex flex-col gap-y-[8px] justify-start items-start">
            <p className="tracking-[0.01rem] text-[20px]">Total learners</p>
            <p className="font-semibold">{`${'0' || data?.mentorship_members}`}</p>
          </div>
        </div>
        <div style={{ width: "100%", height: '300px'}}>
        <ResponsiveContainer>
            <AreaChart
            data={serverData === undefined ? dummy : serverData}
            margin={{
                top: 0,
                right: 30,
                left: 0,
                bottom: 0
            }}
            >
            <CartesianGrid strokeDasharray="1 2" stroke="#E0E0E0" />
            <XAxis dataKey="days" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="learners" stroke="#1A2B88" fill="#3d37f133" />
            </AreaChart>
        </ResponsiveContainer>
        </div>
        </div>
    </div>
  );
}
