'use client'
import { Grid, Skeleton } from "@mui/material";
import { AppCard } from "../ui";

// ─── Skeleton RENDERING ON FALLBACK STATE
export default function StatsSkeleton() {
  return (
    <Grid container spacing={3}>
      {[1, 2, 3, 4].map((i) => (
        <Grid item xs={12} sm={6} md={3} key={i}>
          <AppCard>
            <Skeleton variant="text" width="60%" height={20} />
            <Skeleton variant="text" width="40%" height={40} sx={{ mt: 1 }} />
          </AppCard>
        </Grid>
      ))}
    </Grid>
  );
}