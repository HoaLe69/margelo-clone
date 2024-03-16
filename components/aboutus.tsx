import Member from './member'
const Aboutus = () => {
  // using process.cwd() to get current path
  // fs.readdir to get all file in directory
  // const imageDir = path.join(process.cwd(), 'public/assets/team')
  // const imageFileName = await fs.readdir(imageDir)
  return (
    <section className="py-20 bg-white text-3xl md:text-4xl">
      <div className="container mx-auto px-11">
        <p
          style={{ lineHeight: '2.5rem' }}
          className="mx-auto text-4xl lg:text-4xl max-w-5xl"
        >
          <strong>We will help you ship better apps, faster</strong>
          .Our team of export engineers has created the best user experiences in
          some of the most popular apps worldwide
          <br />
          <br />
          Our services:
          <br />
          <strong>- From Idea to AppStore: </strong>
          Full App Design and Development
          <br />
          <strong>- Performance Optimization: </strong>
          Startup-time, Animation and overall smoothness optimization for
          existing apps
          <br />
          <strong>- Customm Module Development: </strong>
          Development of specific UIs, animations, gestures or native modules
          for existing apps
          <br />
          <strong>- Consulting: </strong>
          One-on-one consulting with React Native, iOS or Android expert and bug
          fixing
        </p>
      </div>
      <div className="container mx-auto px-11 mt-28 text-center">
        <h2 className="font-bold">Our Team</h2>
        <span className="mt-2 inline-block">the &ldquo;Spec-ops&rdquo;</span>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20">
          <Member id="marc" socialId="@mrousavy" name="Marc" />
          <Member id="christian" socialId="@chrfalch" name="Christian" />
          <Member id="christoph" socialId="@chrispader" name="Christoph" />
          <Member id="hanno" socialId="@hannojg" name="Hanno" />
          <Member id="janic" socialId="@janicduplessis" name="Janic" />
          <Member id="joana" socialId="@elotrance9" name="Joana" />
          <Member id="stas" socialId="@stas-kravchuk" name="Stas" />
          <Member id="marc" socialId="@szymon20000" name="Szymon" />
          <Member id="taras" socialId="@perunt" name="Taras" />
          <Member id="terry" socialId="@terrysahaidak" name="Terry" />
          <Member id="thomas_m" socialId="from zero60" name="Thomas" />
          <Member id="viktoria" socialId="@viktoria.psd" name="Viktoria" />
        </div>
      </div>
    </section>
  )
}

export default Aboutus
