export default function Layout(prop : {
    children: React.ReactNode
    modal: React.ReactNode
  }) {
    return (
      <>
        {prop.children}
        {prop.modal}
      </>
    )
  }