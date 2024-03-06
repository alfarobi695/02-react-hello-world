import { sculptureList } from "@/data/article";
import { useState } from 'react';
export default function Gallery() {
    const [index, setIndex] = useState(0);
    function handleClick() {
        setIndex(index + 1);
    }
    let sclupture = sculptureList[index];
    return (
        <>
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 p-2 rounded ">
                Artikel Selanjutnya
            </button>
            <h2><i>{sclupture.name}</i> oleh {sclupture.artist}</h2>
            <h3>({index + 1} dari {sclupture.length})</h3>
            <img src={sclupture.url} alt={sclupture.alt} />
            <p>
                {sclupture.description}
            </p>
        </>
    )
}