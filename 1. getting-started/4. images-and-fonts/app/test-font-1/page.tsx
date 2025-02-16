import { Geist } from 'next/font/google'

const geist = Geist({
    subsets: ['latin']
})

export default function GGFont(){
    return<section className={geist.className}>
        <h1>google font</h1>
    </section>
}