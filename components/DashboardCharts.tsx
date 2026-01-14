"use client";

import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';

// Data Dummy Grafik Aktivitas
const dataActivity = [
  { name: 'Sen', aspirasi: 2, berita: 1 },
  { name: 'Sel', aspirasi: 5, berita: 2 },
  { name: 'Rab', aspirasi: 3, berita: 1 },
  { name: 'Kam', aspirasi: 8, berita: 3 },
  { name: 'Jum', aspirasi: 12, berita: 4 }, // Puncak aktivitas
  { name: 'Sab', aspirasi: 4, berita: 2 },
  { name: 'Min', aspirasi: 1, berita: 0 },
];

// Data Dummy Grafik Proker
const dataProker = [
  { name: 'Sekbid 1', selesai: 4, belum: 1 },
  { name: 'Sekbid 2', selesai: 3, belum: 2 },
  { name: 'Sekbid 3', selesai: 5, belum: 0 },
  { name: 'Sekbid 4', selesai: 2, belum: 3 },
  { name: 'Inti', selesai: 6, belum: 1 },
];

// === 1. GRAFIK GELOMBANG (Activity) ===
export function ActivityChart() {
  return (
    <div className="w-full h-[300px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={dataActivity}>
          <defs>
            <linearGradient id="colorAspirasi" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorBerita" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#a855f7" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#a855f7" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
          <XAxis dataKey="name" tick={{fill: '#94a3b8', fontSize: 12}} axisLine={false} tickLine={false} />
          <YAxis tick={{fill: '#94a3b8', fontSize: 12}} axisLine={false} tickLine={false} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff' }} 
            itemStyle={{ color: '#fff' }}
          />
          <Area type="monotone" dataKey="aspirasi" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorAspirasi)" name="Aspirasi Masuk" />
          <Area type="monotone" dataKey="berita" stroke="#a855f7" strokeWidth={3} fillOpacity={1} fill="url(#colorBerita)" name="Berita Upload" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

// === 2. GRAFIK BATANG (Proker) ===
export function ProkerChart() {
  return (
    <div className="w-full h-[300px] mt-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={dataProker}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.1} vertical={false} />
          <XAxis dataKey="name" tick={{fill: '#94a3b8', fontSize: 10}} axisLine={false} tickLine={false} />
          <Tooltip 
            cursor={{fill: 'rgba(255,255,255,0.05)'}}
            contentStyle={{ backgroundColor: '#0f172a', borderColor: '#1e293b', borderRadius: '12px', color: '#fff' }}
          />
          <Legend />
          <Bar dataKey="selesai" fill="#22c55e" radius={[4, 4, 0, 0]} name="Selesai" />
          <Bar dataKey="belum" fill="#ef4444" radius={[4, 4, 0, 0]} name="Pending" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}