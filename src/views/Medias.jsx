import React from 'react';
import "./../styles/medias.css";


export default function Medias() {
    return (
        <div>
             <h1 className="medias-title">Médias</h1>

             <div className="medias-all">
            <div className="medias-first">
               <h2>Retrouvez toutes nos vidéos et autres supports d’information sur le sujet!</h2>
            </div>
            </div>

            <div className="videos"><video className="video1" controls src="https://res.cloudinary.com/djoha9r5n/video/upload/v1586443845/lesbotruck/video-1_a9zupt.mp4">Ici la description alternative</video></div>

                
        </div>
    )
}
