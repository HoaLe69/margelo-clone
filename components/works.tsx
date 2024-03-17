'use client'
import {
  WorkContainer,
  WorkLeft,
  WorkRight,
  WorkSection
} from './work-sections'

const Works = () => {
  const prePath = '/assets/work'

  return (
    <WorkContainer>
      <WorkSection page={0}>
        <WorkLeft page={0}>
          <div>
            We designed <br className="block md:hidden" /> and developed
          </div>
          <div className="text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="underline underline-offset-8 decoration-white decoration-1">
              Stori&apos;s
            </span>{' '}
            face filters.
          </div>
        </WorkLeft>
        <WorkRight
          page={0}
          srcImg={`${prePath}/iphone-bezels.webp`}
          srcVideo={`${prePath}/stori.mp4`}
        />
      </WorkSection>

      <WorkSection page={1}>
        <WorkLeft page={1}>
          <div>We made</div>
          <div className="text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="underline underline-offset-8 decoration-white decoration-1">
              Coinbase Wallet
            </span>{' '}
            <br className="block md:hidden" />
            faster.
          </div>
        </WorkLeft>
        <WorkRight
          page={1}
          srcImg={`${prePath}/iphone-bezels.webp`}
          srcVideo={`${prePath}/coinbase-wallet.mp4`}
        />
      </WorkSection>

      <WorkSection page={2}>
        <WorkLeft page={2}>
          <div>We built</div>
          <div className="text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="underline underline-offset-8 decoration-white decoration-1">
              Pink Panda &apos;
            </span>{' '}
            app.
          </div>
        </WorkLeft>
        <WorkRight page={2} srcImg={`${prePath}/pinkpanda.webp`} />
      </WorkSection>

      <WorkSection page={3}>
        <WorkLeft page={3}>
          <div>We helped</div>
          <div className="text-4xl md:text-5xl font-semibold tracking-tight">
            <span className="underline underline-offset-8 decoration-white decoration-1">
              Showtime
            </span>{' '}
            ship faster
          </div>
        </WorkLeft>
        <WorkRight page={3} srcImg={`${prePath}/showtime.webp`} />
      </WorkSection>
    </WorkContainer>
  )
}

export default Works
