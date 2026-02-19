'use client'
import Grid from '@mui/material/Grid';
import { StatCard, } from '@/components/ui';

export default function DashboardStats() {
  // USING STATIC VALUE FOR UI
  const stats = [
    { label: 'Total Users', value: '12,430', change: '+12%' },
    { label: 'Revenue', value: '$84,201', change: '+8.2%' },
    { label: 'Active Projects', value: '34', change: '+3' },
    { label: 'Completion Rate', value: '91%', change: '+4%' },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat) => (
        <Grid item xs={12} sm={6} md={3} key={stat.label}>
          {/* StatCard is a reusable component — passes label/value/change as props */}
          <StatCard label={stat.label} value={stat.value} change={stat.change} />
        </Grid>
      ))}
    </Grid>
  );
}

