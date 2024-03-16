import Image from 'next/image'

type Props = {
  id: string
  name: string
  socialId: string
}

const Member = ({ id, name, socialId }: Props) => {
  return (
    <div>
      <Image
        src={`/assets/team/margelo_faces_${id}.svg`}
        alt={name}
        width={1366}
        height={1555}
      />
      <div className="text-2xl md:text-3xl">{name}</div>
      <div className="text-xl">{socialId}</div>
    </div>
  )
}
export default Member
