import Link from 'next/link'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
    <div>{children}</div>
      <nav>
        <Link href="/tab1">tab1</Link>
        <Link href="/tab2">tab2</Link>
      </nav>
    </>
  )
}
