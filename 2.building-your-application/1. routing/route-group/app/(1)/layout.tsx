export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
          <section>
            <h1>layout 1</h1>
            {children}
          </section>
    )
  }