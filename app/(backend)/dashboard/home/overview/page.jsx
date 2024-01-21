import DashboardBanner from '@/components/dashboard/DashboardBanner'
import InventoryOverview from '@/components/dashboard/InventoryOverview'


export default function Dashboard() {
  return (
    <div>
        <DashboardBanner />
        <InventoryOverview />
    </div>
  )
}