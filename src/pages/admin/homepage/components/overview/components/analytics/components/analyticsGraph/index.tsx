import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    days: 1,
    learners: 43,
  },
  {
    days: 2,
    learners: 30,
  },
  {
    days: 3,
    learners: 27,
  },
  {
    days: 4,
    learners: 80,
  },
  {
    days: 5,
    learners: 45,
  },
  {
    days: 6,
    learners: 21,
  },
  {
    days: 7,
    learners: 200,
  }
];

export const AnalyticsGraph = () => {
  return (
    <div className="flex justify-between w-full">
      <div style={{ width: "100%", height: '400px', borderRadius: '10px', boxShadow: '0px 10.7px 16.0499px rgba(220, 224, 249, 0.5)', border: ' 1.07px solid #ECEEF7', background: '#fff' }}>
        <div className='flex justify-between items-center p-[20px]'>
          <div className="font-medium text-[0.73rem] text-[#0D142E] flex flex-col gap-y-[8px] justify-start items-start">
            <p className="tracking-[0.01rem] text-[20px]">Total learners</p>
            <p className="font-semibold">3000</p>
          </div>
          <select name="" id="" className="bg-[#F5F9FA] rounded-[6px] p-[5px]">
            <option value="" key="">This month</option>
        </select>
        </div>
        <div style={{ width: "100%", height: '300px'}}>
        <ResponsiveContainer>
            <AreaChart
            data={data}
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
