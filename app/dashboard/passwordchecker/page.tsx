import { PasswordChecker } from "@/components/password-checker"
import { PluginDownload } from "@/components/plugin-download"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <main className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-primary">Secure Your Passwords</h2>
            <PasswordChecker />
          </div>
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold text-primary">Enhance Your Experience</h2>
            <PluginDownload />
          </div>
        </div>
      </main>
    </div>
  )
}
