import { IconTrendingUp } from "@tabler/icons-react"

import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

function formatNumber(n: number | null | undefined): string {
  if (n == null || n === undefined) return "—"
  return new Intl.NumberFormat("en-US").format(n)
}

export function SectionCards() {
  // Mock data for search widget analytics
  const mockMetrics = {
    totalSearches: 15420,
    clickRate: 67.8,
    activeWidgets: 3,
    pagesIndexed: 847,
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Searches</CardTitle>
          <IconTrendingUp className="h-4 w-4 text-green-600" />
        </CardHeader>
        <div className="px-6 pb-6">
          <div className="text-2xl font-bold">{formatNumber(mockMetrics.totalSearches)}</div>
          <p className="text-xs text-muted-foreground">
            +{mockMetrics.searchesChange}% from last month
          </p>
        </div>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Click Through Rate</CardTitle>
          <IconTrendingUp className="h-4 w-4 text-green-600" />
        </CardHeader>
        <div className="px-6 pb-6">
          <div className="text-2xl font-bold">{mockMetrics.clickRate}%</div>
          <p className="text-xs text-muted-foreground">
            +{mockMetrics.clickRateChange}% from last month
          </p>
        </div>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Widgets</CardTitle>
        </CardHeader>
        <div className="px-6 pb-6">
          <div className="text-2xl font-bold">{mockMetrics.activeWidgets}</div>
          <p className="text-xs text-muted-foreground">
            Across 1 website
          </p>
        </div>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Pages Indexed</CardTitle>
        </CardHeader>
        <div className="px-6 pb-6">
          <div className="text-2xl font-bold">{formatNumber(mockMetrics.pagesIndexed)}</div>
          <p className="text-xs text-muted-foreground">
            Last updated 2h ago
          </p>
        </div>
      </Card>
    </div>
  )
}
  const costDisplay = formatCurrency(cost)

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Documents</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {documentsDisplay}
          </CardTitle>
          <CardAction>
            {/* Live data from Upstash Search */}
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Activity this month <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Visitors for the last 6 months
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Requests</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {requestsDisplay}
          </CardTitle>
          <CardAction>
            {/* Live data from Upstash Search */}
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Request activity this period <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Acquisition needs attention
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Storage</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {storageDisplay}
          </CardTitle>
          <CardAction>
            {/* Live data from Upstash Search */}
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Storage usage trend <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">{storageDisplay}</div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Cost</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {costDisplay}
          </CardTitle>
          <CardAction>
            {/* Live data from Upstash Search */}
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Cost overview <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Meets growth projections</div>
        </CardFooter>
      </Card>
    </div>
  )
}
