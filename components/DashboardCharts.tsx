"use client";

import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

// Terima props data dari luar
export function ActivityChart({ data }: { data: any[] }) {
  
  // Custom Tooltip biar rapi dan gak melenceng
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white p-4 rounded-xl shadow-xl border border-slate-700/50 backdrop-blur-md min-w-[180px]">
          <p className="text-sm font-bold mb-2 text-slate-300 border-b border-slate-700 pb-2">{label}</p>
          <div className="space-y-1">
            <p className="text-xs font-medium flex justify-between items-center">
              <span className="text-blue-400">Aspirasi Masuk:</span>
              <span className="font-bold text-white">{payload[0].value}</span>
            </p>
            <p className="text-xs font-medium flex justify-between items-center">
              <span className="text-purple-400">Proker Baru:</span>
              <span className="font-bold text-white">{payload[1].value}</span>
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorAspirasi" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorKegiatan" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
          </linearGradient>
        </defs>
        
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" opacity={0.5} />
        
        <XAxis 
          dataKey="name" 
          axisLine={false} 
          tickLine={false} 
          tick={{fontSize: 10, fill: '#64748B'}} 
          dy={10}
        />
        <YAxis 
          axisLine={false} 
          tickLine={false} 
          tick={{fontSize: 10, fill: '#64748B'}} 
        />
        
        <Tooltip content={<CustomTooltip />} />
        
        <Area 
          type="monotone" 
          dataKey="aspirasi" 
          stroke="#3b82f6" 
          strokeWidth={3}
          fillOpacity={1} 
          fill="url(#colorAspirasi)" 
        />
        <Area 
          type="monotone" 
          dataKey="kegiatan" 
          stroke="#a855f7" 
          strokeWidth={3}
          fillOpacity={1} 
          fill="url(#colorKegiatan)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}