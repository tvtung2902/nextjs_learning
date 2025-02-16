import MyButton from "component/MyButton";

export default function RootLayout({
    children,
}: {children: React.ReactNode}){
    return(
        <html lang='en'>
            <body>
                {children}
                <MyButton/>
            </body>
        </html>
    )
}