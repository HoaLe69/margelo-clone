import Image from 'next/image'
const Contactus = () => {
  return (
    <div className="min-h-screen  bg-black text-white flex flex-col justify-center items-center pt-10">
      <div className="pb-10">
        <Image
          src={'/assets/logo.svg'}
          alt="logo"
          width={128 / 4}
          height={114 / 4}
        />
      </div>
      <div className="text-4xl font-bold">Contact us</div>
      <form className="flex flex-col justify-center gap-4 px-10 mt-16 lg:mt-20 min-w-full lg:min-w-[500px]">
        <input
          name="company"
          placeholder="Company name"
          className="py-2 px-8 bg-black rounded-3xl border-white border-2"
        />
        <input
          name="your_email"
          placeholder="Your E-mail"
          className="py-2 px-8 bg-black rounded-3xl border-white border-2"
        />
        <textarea
          placeholder="Additional information"
          id="message"
          className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-6 min-h-[16em]"
        ></textarea>
        <div className="text-center mt-10">
          <button className="text-black bg-white px-8 py-2 rounded-3xl">
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contactus
