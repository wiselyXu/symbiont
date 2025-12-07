import { Button } from '@/app/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs'
import { Badge } from '@/app/components/ui/badge'
import {
  Activity,
  BarChart3,
  Globe,
  Wallet,
  Zap,
  Shield,
  Users,
  Cpu
} from 'lucide-react'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <Badge className="mb-4" variant="outline">
          <Zap className="mr-2 h-4 w-4" />
          Next 15 + React 19 + TypeScript
        </Badge>
        <h1 className="mb-4 text-4xl font-bold tracking-tight lg:text-5xl">
          Welcome to <span className="text-primary">Symbiont</span>
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
          A modern web application template with App Router, RSC, mock APIs, i18n, and web3 wallet integration.
        </p>
        <div className="flex justify-center gap-4">
          <Button size="lg">
            <Wallet className="mr-2 h-5 w-5" />
            Connect Wallet
          </Button>
          <Button size="lg" variant="outline">
            <Globe className="mr-2 h-5 w-5" />
            Explore Features
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-12">
        <h2 className="mb-8 text-3xl font-bold text-center">Core Features</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <Cpu className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>App Router & RSC</CardTitle>
              <CardDescription>Next.js 15 with React Server Components</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Leverage the latest Next.js features for optimal performance and SEO.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Globe className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Internationalization</CardTitle>
              <CardDescription>Multi-language support with next-intl</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Built-in i18n support for global applications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Wallet className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Web3 Wallet</CardTitle>
              <CardDescription>Blockchain wallet integration</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ready for decentralized applications and crypto integration.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Activity className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Mock APIs</CardTitle>
              <CardDescription>Development API endpoints</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Pre-configured mock APIs for rapid development.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Shield className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Type Safety</CardTitle>
              <CardDescription>Full TypeScript coverage</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                End-to-end type safety with TypeScript and Zod validation.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Users className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Modern Stack</CardTitle>
              <CardDescription>Latest libraries and tools</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Tailwind CSS, Zustand, React Hook Form, and more.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="mb-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard Overview</CardTitle>
                <CardDescription>
                  Interactive dashboard with mock data visualization
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                      <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1,234</div>
                      <p className="text-xs text-muted-foreground">+12% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Transactions</CardTitle>
                      <Activity className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45,231</div>
                      <p className="text-xs text-muted-foreground">+8% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">573</div>
                      <p className="text-xs text-muted-foreground">+23% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                      <Zap className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3.2%</div>
                      <p className="text-xs text-muted-foreground">+0.5% from last month</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle>Analytics</CardTitle>
                <CardDescription>Advanced analytics coming soon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  This section will include detailed charts and data visualizations using Recharts.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Settings</CardTitle>
                <CardDescription>Configure your application preferences</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Application settings and configuration panel will be implemented here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>

      {/* Call to Action */}
      <section className="rounded-lg border bg-card p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Ready to Build?</h2>
        <p className="mb-6 text-muted-foreground">
          Start developing your application with this modern template.
        </p>
        <div className="flex justify-center gap-4">
          <Button>Get Started</Button>
          <Button variant="outline">View Documentation</Button>
        </div>
      </section>
    </div>
  )
}