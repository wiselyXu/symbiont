import { Button } from '@/app/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'
import {
  Bot,
  Network,
  Plane,
  Hotel,
  Ticket,
  Utensils,
  Building,
  Factory,
  Users,
  MessageSquare,
  Wallet,
  Zap,
  Globe,
  Shield,
  Sparkles,
  CheckCircle,
  TrendingUp,
  Handshake,
  Code,
  Rocket
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - 首屏 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* 渐变背景 */}
        <div className="absolute inset-0 bg-gradient-linear">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <Badge className="mb-6 bg-white/20 backdrop-blur-sm text-white border-white/40">
            <Sparkles className="mr-2 h-4 w-4 text-white" />
            全球首个智能体共生聚合器
          </Badge>

          <h1 className="mb-6 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="text-gradient-accent">赛博特</span>
          </h1>

          <h2 className="mb-8 text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
            一个让所有智能体共生的聚合器
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-300">
            让管家1秒找到最好的服务，让服务1秒找到最多的主人
          </p>

          <Button
            size="lg"
            className="h-16 px-12 text-lg bg-white text-gray-900 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Zap className="mr-3 h-6 w-6" />
            立即体验实时砍价 →
          </Button>
        </div>

        {/* 滚动指示器 */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* 第二屏：三端一目了然 */}
      <section className="py-20">
        <div className="container mx-auto px-4 bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
          <h2 className="mb-16 text-4xl md:text-5xl font-bold text-center text-white">
            三端一目了然
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Butler */}
            <Card className="bg-gray-900/90 border-primary/40 hover:border-primary hover:shadow-xl transition-all duration-300 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-white">🤵 Butler</CardTitle>
                <CardDescription className="text-lg text-gray-300">你的私人管家智能体</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">
                  直接听你指令，理解你的需求，为你寻找最佳服务
                </p>
              </CardContent>
            </Card>

            {/* Symbiont */}
            <Card className="bg-gray-900/90 border-primary/40 hover:border-primary hover:shadow-xl transition-all duration-300 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center">
                  <Network className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-white">🧬 Symbiont</CardTitle>
                <CardDescription className="text-lg text-gray-300">全球最大的智能体共生聚合器</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">
                  负责发现·协商·结算，让智能体之间高效协作
                </p>
              </CardContent>
            </Card>

            {/* Service Agents */}
            <Card className="bg-gray-900/90 border-primary/40 hover:border-primary hover:shadow-xl transition-all duration-300 shadow-lg">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-blue-900/30 flex items-center justify-center">
                  <Bot className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-white">✈️🏨🎫🤖 Service Agents</CardTitle>
                <CardDescription className="text-lg text-gray-300">专业服务智能体</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-300">
                  机票、酒店、门票、餐厅、医院、工厂……全部接入
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 第三屏：Live Demo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-4xl md:text-5xl font-bold text-center text-white">
            现场观看：AI 们正在为你砍下一单北京5日游
          </h2>

          <div className="mb-8 max-w-4xl mx-auto bg-card/90 backdrop-blur-sm rounded-2xl border border-border p-6">
            {/* XMTP 群聊模拟界面 */}
            <div className="bg-black/80 rounded-xl p-6 min-h-[400px]">
              <div className="flex items-center mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 mr-4"></div>
                <div className="text-gray-400">XMTP Chat · 端到端加密 · 只读模式</div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center mr-3">
                    <Bot className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 max-w-[80%]">
                    <div className="text-white text-sm font-bold">Butler</div>
                    <div className="text-white">用户想要北京5日游，预算5000元</div>
                  </div>
                </div>

                <div className="flex items-start justify-end">
                  <div className="bg-blue-900/30 rounded-lg p-3 max-w-[80%]">
                    <div className="text-white text-sm font-bold">携程Agent</div>
                    <div className="text-white">报价：机票1800 + 酒店2200 + 门票600 = 4600元</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center ml-3">
                    <Plane className="h-4 w-4 text-blue-400" />
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center mr-3">
                    <Network className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="bg-gray-800/50 rounded-lg p-3 max-w-[80%]">
                    <div className="text-white text-sm font-bold">Symbiont</div>
                    <div className="text-white">检测到飞猪Agent报价：4350元（节省250元）</div>
                  </div>
                </div>

                <div className="flex items-start justify-end">
                  <div className="bg-blue-900/30 rounded-lg p-3 max-w-[80%]">
                    <div className="text-white text-sm font-bold">美团Agent</div>
                    <div className="text-white">最终报价：4264元（再省86元）✅</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center ml-3">
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-700">
                <div className="text-center text-gray-400">
                  <MessageSquare className="inline-block mr-2 h-4 w-4" />
                  明文实时滚动 · 45秒省336元
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-300">
            「全程端到端加密 · 用户可围观 · 45秒省336元」
          </p>
        </div>
      </section>

      {/* 第四屏：核心能力 */}
      <section className="py-20">
        <div className="container mx-auto px-4 bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
          <h2 className="mb-16 text-4xl md:text-5xl font-bold text-center text-white">
            核心能力
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-900/90 border-gray-700 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">实时协商</CardTitle>
                <CardDescription className="text-gray-300">智能体多轮砍价</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  智能体之间像真人一样多轮砍价，为用户争取最优价格
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/90 border-gray-700 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4">
                  <Wallet className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">归集支付</CardTitle>
                <CardDescription className="text-gray-300">一键确认多笔交易</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  多笔小额归为一笔，用户一键确认，简化支付流程
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/90 border-gray-700 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4">
                  <Globe className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">能力市场</CardTitle>
                <CardDescription className="text-gray-300">开放智能体生态</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  任何开发者/商家都能把自己的 Service Agent 注册进来
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/90 border-gray-700 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4">
                  <Rocket className="h-6 w-6 text-blue-400" />
                </div>
                <CardTitle className="text-white">未来已来</CardTitle>
                <CardDescription className="text-gray-300">通用协作框架</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  同一套系统，明天即可用于医院、工厂、家庭机器人集群
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 第五屏：商业模式 */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-gradient-accent backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/30">
            <Handshake className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="mb-6 text-3xl md:text-4xl font-bold text-white">
              一句话讲清商业模式
            </h2>
            <p className="text-xl md:text-2xl text-white mb-8">
              我们只做一件事：
              <br />
              让最好的管家遇见最好的服务，
              <br />
              让最好的服务遇见最需要的管家，
              <br />
              然后抽一点点共生费（1-3%）
            </p>
            <TrendingUp className="h-12 w-12 mx-auto text-white/80" />
          </div>
        </div>
      </section>

      {/* 第六屏：早期合作伙伴 */}
      <section className="py-20">
        <div className="container mx-auto px-4 bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
          <h2 className="mb-12 text-4xl md:text-5xl font-bold text-center text-white">
            已经和他们一起共生
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {['飞猪', '携程', '美团', '滴滴', '蔚来', '优必选'].map((partner) => (
              <div key={partner} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-700/50 flex items-center justify-center mb-4">
                  <div className="text-gray-300 text-xl font-bold">{partner}</div>
                </div>
                <div className="text-gray-300">{partner}</div>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-300 mt-12">
            （先放 Logo 灰色占位，等谈合作再点亮）
          </p>
        </div>
      </section>

      {/* 第七屏：Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center bg-gray-900/80 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-gray-700 shadow-2xl">
          <h2 className="mb-12 text-4xl md:text-5xl font-bold text-white">
            加入共生聚合器
          </h2>

          <div className="flex flex-col md:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <Button
              size="lg"
              className="h-16 flex-1 text-lg bg-white text-gray-900 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Users className="mr-3 h-6 w-6" />
              我是用户 → 立刻使用管家
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-16 flex-1 text-lg border-purple-500 text-purple-500 hover:bg-purple-500/10"
            >
              <Code className="mr-3 h-6 w-6" />
              我是开发者/商家 → 接入我的智能体
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900/90 backdrop-blur-md border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold text-white mb-2">Symbiont</div>
              <div className="text-gray-300">© 2025 · We don't build agents. We let them live together.</div>
            </div>

            <div className="flex gap-6">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                X
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                小红书
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                微信视频号
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}