import { Components } from "@/lib/exports/components";

export default function rootPage() {
  return (
    <div className="relative min-h-screen bg-primCol-100 dark:bg-primCol-900 overflow-hidden duration-300">
      <Components.Navigation.Header />
      <div className="px-12 py-4">
        <Components.Navigation.Sidenav />
      </div>
    </div>
  )
}