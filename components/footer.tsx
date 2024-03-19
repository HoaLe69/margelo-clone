import Image from 'next/image'

const Footer = () => {
  return (
    <div className="text-white bg-black sticky top-0">
      <footer className="flex items-center py-20 px-4 min-h-full justify-center gap-10 flex-wrap">
        <Image
          src="/assets/logo.svg"
          alt="logo"
          width={128 / 5}
          height={114 / 5}
        />
        <div>Imprint</div>
        <div>Privacy Policy</div>
        <div>Github</div>
        <div>Twitter</div>
        <div>LinkedIn</div>
        <div>Clutch</div>
      </footer>
    </div>
  )
}

export default Footer
