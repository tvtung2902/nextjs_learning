import { Modal } from "antd";

export default function PhotoModal({params}){
    const photo = 'photo: ' + params.id;
    return(
            <>
                <h1>{photo}</h1>
            </>
    )
}