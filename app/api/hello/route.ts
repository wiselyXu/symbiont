import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    message: 'Hello from Symbiont API!',
    timestamp: new Date().toISOString(),
    version: '0.1.0',
    features: ['Next.js 15', 'React 19', 'TypeScript', 'App Router', 'RSC']
  })
}