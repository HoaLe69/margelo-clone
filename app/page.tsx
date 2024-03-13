import Masthead from '@/components/masthead'
import Aboutus from '@/components/aboutus'
import ScrollObserverr from '@/components/scroll-observer'

export default function Home() {
  return (
    <ScrollObserverr>
      <Masthead />
      <Aboutus />
    </ScrollObserverr>
  )
}
