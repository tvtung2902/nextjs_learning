export default function BlogLayout({children} : {children: React.ReactNode}){
    return <section>
            <h1>this is blog page</h1>
            {children}
        </section>
}