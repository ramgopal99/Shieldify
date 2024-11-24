import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Download, Play } from 'lucide-react'

export function PluginDownload() {
  return (
    <Card className="shadow-lg">
      <CardHeader className="bg-primary text-primary-foreground">
        <CardTitle className="flex items-center space-x-2">
          <Download className="h-6 w-6" />
          <span>Download Our Plugin</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
          <video className="absolute inset-0 w-full h-full object-cover" poster="/placeholder.svg?height=400&width=600">
            <source src="/placeholder.svg?height=400&width=600" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <Button variant="secondary" size="icon" className="rounded-full">
              <Play className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <p className="text-muted-foreground">
          Watch the video above to learn more about our amazing plugin and how it can enhance your productivity!
        </p>
        <Button className="w-full">
          <Download className="mr-2 h-4 w-4" /> Download Plugin
        </Button>
      </CardContent>
    </Card>
  )
}
