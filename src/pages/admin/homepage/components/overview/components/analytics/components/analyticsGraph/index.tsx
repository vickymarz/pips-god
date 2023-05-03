import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export const AnalyticsGraph = ({data}: {data: any}) => {
  const mentorship = data?.activeUsersAndPlans?.map((plans: any )=> {
    return plans.subscription_plans.filter(({name}: {name: string}) => name === "training_and_mentoring")
  })

  const userCountByDate:any = {};
  const plansArray = mentorship?.reduce((accumulator: any, currentValue: any) => accumulator.concat(currentValue), [])
  plansArray?.forEach((user: {subscription: {createdAt: string}}) => {
    const createdDate = user.subscription.createdAt.split("T")[0]
    if(createdDate in userCountByDate) {
      userCountByDate[createdDate]++
    } else {
      userCountByDate[createdDate] = 1
    }});

    const joinDatesArray = Object.entries(userCountByDate).map(([date, count]) => {
      return {date, count}
    })

  return (
    <div className="flex justify-between w-full">
      <div style={{ width: "100%", height: '400px', borderRadius: '10px', boxShadow: '0px 10.7px 16.0499px rgba(220, 224, 249, 0.5)', border: ' 1.07px solid #ECEEF7', background: '#fff' }}>
        <div className='flex justify-between items-center p-[20px]'>
          <div className="font-medium text-[0.73rem] text-[#0D142E] flex flex-col gap-y-[8px] justify-start items-start">
            <p className="tracking-[0.01rem] text-[20px]">Total learners</p>
            <p className="font-semibold">{`${data?.activeUsers?.training_and_mentoring || '0'}`}</p>
          </div>
        </div>
        <div style={{ width: "100%", height: '300px'}}>
        <ResponsiveContainer>
            <AreaChart
            data={joinDatesArray}
            margin={{
                top: 0,
                right: 30,
                left: 0,
                bottom: 0
            }}
            >
            <CartesianGrid strokeDasharray="1 2" stroke="#E0E0E0" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey="count" stroke="#1A2B88" fill="#3d37f133" />
            </AreaChart>
        </ResponsiveContainer>
        </div>
        </div>
    </div>
  );
}
