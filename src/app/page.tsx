import HomeSections from '@/components/Home'
import UsApps from '@/components/UsApps'
import Works from '@/components/Works'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HomeSections />
      <Works />
      <UsApps />
    </main>
  )
}
