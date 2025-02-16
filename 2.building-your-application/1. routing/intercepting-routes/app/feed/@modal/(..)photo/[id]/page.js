'use client'
import { Modal } from "antd";
import { useRouter } from 'next/navigation'
import Link from 'next/link';

export default function PhotoModal({params}){
    const router = useRouter()
    const photo = 'photo: ' + params.id;
    const cancel = () => {
        console.log('call cancel');
        router.back();
    }
    return(
            <>
                <Modal open={true} onCancel={cancel} 
                     footer={[
                        <Link key="close" href="/">Close modal</Link>
                    ]}                    
                >
                    <h1>{photo}</h1>
                </Modal>
            </>
    )
}