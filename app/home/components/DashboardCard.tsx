
export default function DashboardCard ({ title, subtitle, icon }: { title: string; subtitle: string; icon: React.ReactNode }) {
    return (
      <div className="bg-gray-100 p-4 rounded-lg flex flex-col items-start">
        <div className="mb-2">{icon}</div>
        <h2 className="text-sm font-medium text-gray-800">{title}</h2>
        <p className="text-xs text-gray-600">{subtitle}</p>
      </div>
    )
  }
  