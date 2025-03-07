import Image from 'next/image'

export default function Page() {
  return (
    <>
      <h1>Hello Next.js!</h1>
      <Image src="/sự kiện âm nhạc - dat g.jpg" alt="img" width={100} height={100} />

      <Image
        src="https://s3.amazonaws.com/my-bucket/profile.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </>
  )
}