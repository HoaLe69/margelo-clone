import Masthead from '@/components/masthead'
import Aboutus from '@/components/aboutus'
import ScrollObserver from '@/components/scroll-observer'
import Achievements from '@/components/achievements'
import Works from '@/components/works'
import TrustBy from '@/components/trustby'
import ObserveViewportSize from '@/lib/observe-view-size'
import Contactus from '@/components/contactus'

export default function Home() {
  return (
    <ObserveViewportSize>
      <ScrollObserver>
        <Masthead />
        <Aboutus />
        <Achievements />
        <Works />
        <TrustBy />
        <Contactus />
      </ScrollObserver>
    </ObserveViewportSize>
  )
}
