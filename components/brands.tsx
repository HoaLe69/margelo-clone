import SliderContainer, { SliderItem } from './slider'

const Brands = () => {
  return (
    <div>
      <SliderContainer>
        <SliderItem name="audubon" width={150} />
        <SliderItem name="candid" width={180} />
        <SliderItem name="coinbase" width={170} />
        <SliderItem name="exodus" width={150} />
        <SliderItem name="expensify" width={130} />
        <SliderItem name="extra" width={120} />
        <SliderItem name="litentry" width={130} />
        <SliderItem name="nativescript" width={150} />
        <SliderItem name="picnic" width={80} />
        <SliderItem name="pinkpanda" width={200} />
        <SliderItem name="push" width={80} />
        <SliderItem name="rainbow" width={170} />
        <SliderItem name="raive" width={110} />
      </SliderContainer>

      <SliderContainer className="mt-6">
        <SliderItem name="redbull" width={90} />
        <SliderItem name="scribeware" width={150} />
        <SliderItem name="shopify" width={150} />
        <SliderItem name="showtime" width={150} />
        <SliderItem name="slingshot" width={150} />
        <SliderItem name="snapcalorie" width={120} />
        <SliderItem name="status" width={140} />
        <SliderItem name="steakwallet" width={150} />
        <SliderItem name="steddy" width={135} />
        <SliderItem name="stori" width={110} />
        <SliderItem name="thisapp" width={100} />
        <SliderItem name="tocsen" width={110} />
        <SliderItem name="walletconnect" width={200} />
      </SliderContainer>
    </div>
  )
}

export default Brands
