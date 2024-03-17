import Masthead from '@/components/masthead'
import Aboutus from '@/components/aboutus'
import ScrollObserver from '@/components/scroll-observer'
import Achievements from '@/components/achievements'
import Works from '@/components/works'

export default function Home() {
  return (
    <ScrollObserver>
      <Masthead />
      <Aboutus />
      <Achievements />
      <Works />
      <Aboutus />
    </ScrollObserver>
  )
}
