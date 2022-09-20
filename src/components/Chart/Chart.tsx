import {
  ResponsiveContainer,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
  LabelList,
} from "recharts";

export const Chart = ({ data }: { data: any[] | undefined }) => {
  return (
    <ResponsiveContainer width="90%" height="90%">
      <BarChart width={400} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis label={{ value: "Posts", angle: -90, position: "insideLeft" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="posts" stackId="a" fill="#5570f1">
          <LabelList dataKey="posts" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
};
