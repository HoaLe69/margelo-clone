import Review from './review'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from '../styles/testimonial.module.css'
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'
import React, { useCallback, useEffect, useContext, useState } from 'react'
import { ReviewContext } from './testimonial-wrap'

const Testimonials = () => {
  const { indexActive, setIndexActive } = useContext(ReviewContext)
  const [isGrabbing, setIsGrabbing] = useState<boolean>(false)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const handleEmblaEvent = useCallback((emblaApi: EmblaCarouselType) => {
    setIndexActive(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('pointerUp', handleEmblaEvent)
      emblaApi.on('scroll', handleEmblaEvent)
      emblaApi.scrollTo(indexActive)
    }
    return () => {
      if (emblaApi) {
        emblaApi.off('pointerUp', handleEmblaEvent)
        emblaApi.off('scroll', handleEmblaEvent)
      }
    }
  }, [emblaApi, handleEmblaEvent, indexActive])
  const handleMouseDown = useCallback(() => {
    setIsGrabbing(true)
  }, [])
  const handleMouseUp = useCallback(() => {
    setIsGrabbing(false)
  }, [])
  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className="bg-black py-10 lg:py-20 text-white overflow-hidden select-none"
      ref={emblaRef}
      style={{ cursor: isGrabbing ? 'grabbing' : 'grab' }}
    >
      <div className="embla__container flex">
        <div className={styles.embla__slide}>
          <Review by="Clinton (CEO of Slingshot)" page={0}>
            &ldquo; Working with the Margelo team feels like a cheat code, When
            it comes to building performant and scalable React Native mobile
            apps, they&apos;re the best hands down &rdquo;
          </Review>
        </div>
        <div className={styles.embla__slide}>
          <Review by="Alex (Showtime)" page={1}>
            &ldquo; Margelo and Showtime both share the love for high-quanlity
            software, the passion for building something people want and the
            ambition of always doing our best. 10/10 would recomend working with
            Marc and his team &rdquo;
          </Review>
        </div>
        <div className={styles.embla__slide}>
          <Review by="Inanc (CTO of MYGroove)" page={2}>
            &ldquo; Margelo&apos;s incredible experience is react-native is
            absolutely invaluable for us. From native platform features,
            interacting with device hardware, up to maximizing performance in
            our UI, we haven&apos;t had a task the Margelo team was unable to
            solve &rdquo;
          </Review>
        </div>
        <div className={styles.embla__slide}>
          <Review by="Alex (CTO of Steakwallet)" page={3}>
            &ldquo; The output of Margelo is unlike any other team we&apos;ve
            worked with. Their speed, professionalism and familiarity with all
            things mobile helped turn Steakwallet into the slick application it
            is known as today &rdquo;
          </Review>
        </div>
        <div className={styles.embla__slide}>
          <Review by="Louise (CEO of Stori)" page={4}>
            &ldquo;When we first found Margelo the seemed too good to be true.
            Professional,fast and ridiculously talented;the 3D AR filter
            component the have developed for our React Native app is supper
            smooth and responsive.&rdquo;
          </Review>
        </div>
        <div className={styles.embla__slide}>
          <Review by="Adam Carlton (CEO of Pink Panda)" page={5}>
            &ldquo; Margelo is a collection of world class talent , from React
            Native to Website , full stack to design - I&apos;ve been nothing
            but pleased with their communication , imagination , insight and
            delivery &rdquo;
          </Review>
        </div>
        <div className={styles.embla__slide}>
          <Review by="Roland (ExtraCard)" page={6}>
            &ldquo; We were hitting the inevitable pains of rapid growth and
            needed to level up out app quickly.What would have taken us months
            took the Margelo team mere days. There is nothing they can&apos;
            figure out or make happen. Simply the best&rdquo;
          </Review>
        </div>
        <div className={styles.embla__slide}>
          <Review by="Raffi (CEO of Steddy)" page={7}>
            &ldquo; The talent, communication , and speed from Margelo is unlike
            any group of engineers I have worked with. Steddy&apos;s MVP lauched
            with a level of performance and responsiveness that even I
            couldn&apos;t imagine before connecting with Marc&apos; team &rdquo;
          </Review>
        </div>
      </div>
    </div>
  )
}
export default Testimonials
