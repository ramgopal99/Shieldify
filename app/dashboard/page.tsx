import { Metadata } from 'next'
import BlogGrid from '@/components/blog-grid'

export const metadata: Metadata = {
  title: 'Cybersecurity Insights',
  description: 'Stay informed about the latest cybersecurity threats and how to protect yourself.',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
        <BlogGrid />
    </div>
  )
}

