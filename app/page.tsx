import { Components } from "@/lib/exports/components";

export default function rootPage() {
  return (
    <div className="relative min-h-screen bg-primCol-100 overflow-hidden">
      <Components.Navigation.Header />
      <div className="px-12 py-4">
        <Components.Navigation.Sidenav />
      </div>
    </div>
  )
}