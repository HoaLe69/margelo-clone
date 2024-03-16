import Masthead from '@/components/masthead'
import Aboutus from '@/components/aboutus'
import ScrollObserver from '@/components/scroll-observer'
import Achievements from '@/components/achievements'

export default function Home() {
  return (
    <ScrollObserver>
      <Masthead />
      <Aboutus />
      <Achievements />

      <Aboutus />
      <Aboutus />
      <Aboutus />
      <Aboutus />
      <Aboutus />
    </ScrollObserver>
  )
}
