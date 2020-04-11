import React from 'react'
import "./../styles/evenementsMobilisations.css";

export default function EvenementsMobilisations() {
    return (
        <div className="mobilisation-all">
            <div className="mobilisation-image"></div>

            <h1>Evénements et Mobilisations</h1>

            <div className="mobilisation-posts">
            <div className="mobilisation-post">
                <h2 className="post-title">[COMMUNIQUÉ] [DROITS DES FEMMES] [MOBILISATION]</h2>
                <p>La marche féministe nocturne a dégénérée hier soir place de la République.</p>
                <p>Des manifestant.e.s pacifistes ont été mollesté.e.s puis poussé.e.s dans le métro par les forces de l’ordre.</p>
                <p>La veille du 8 mars, alors que le gouvernement présente la lutte contre les violences faites aux femmes comme grande cause du quinquennat, ces débordements sont inacceptables !</p>
            </div>

            <div className="mobilisation-post">
                <h2 className="post-title">[ÉVÉNEMENT ANNULÉ]</h2>
                <img src="https://res.cloudinary.com/djoha9r5n/image/upload/v1586439584/lesbotruck/post_e%CC%81ve%CC%81nement_annule%CC%81_petit_sxjqjd.jpg" alt="evt-annulé"/>
                <p>On va tout de même essayer de faire quelque chose via les réseaux sociaux (on vous tient rapidement au courant)</p>
                <p>Le Lesbotruck+ a besoin de vous pour faire rouler le seul char lesbien de la Marche des Fiertés de Paris ! 🏳️‍🌈</p>
                <p>Nous vous attendons nombreux.ses le samedi 28 mars prochain, à @lamutinerie pour une soirée enragée !</p>
                <p>Au programme :</p>
                <ul className="post-list">
                    <li>▪️Notre stand associatif pour vous présenter nos projets et répondre à toutes vos questions</li>
                    <li>▪️Des shows pour démarrer la soirée sur un bon mouv’</li>
                    <li>▪️Une tombola avec de beaux lots à gagner grâce aux soutiens Jeanne MagazineLibrairie Violette and CoSapphosutraPhèros…</li>
                    <li>▪️Des DJ set qui vont vous enflammer sur la piste pour terminer la soirée plus soudé.e.s (ou collé.e.s) que jamais 😏</li>
                </ul>
                <p>Une boîte à dons ouverte pour vous permettre de nous soutenir jusqu’au bout dans la concrétisation de nos projets 💪</p>
                <p>Nous avons besoin d’un char lesbien à la Marche des Fiertes pour :</p>
                <ul className="post-list">
                    <li>➕ D’espace</li>
                    <li>➕ De liberté</li>
                    <li>➕ De visibilité</li>
                    <li>➕ De droits</li>
                </ul>
            </div>

            <div className="mobilisation-post">
                <h2 className="post-title">[RASSEMBLEMENT] [MOBILISATION] [LESBOPHOBIE]</h2>
                <img src="https://res.cloudinary.com/djoha9r5n/image/upload/v1586440608/lesbotruck/post_0403_petit_h4juwz.jpg" alt="rassemblement"/>
                <p>Le Lesbotruck+ se mobilise dimanche à l’occasion de la Journée Internationale des droits des femmes pour rendre visible la lesbophobie.</p>
                <p>Marre des préjugés, marre des agressions verbales et physiques, marre des violences psychologiques et des comportements sexistes !</p>
                <p>Nous vous invitons à vous mobiliser nombreux.ses pour dire STOP aux violences lesbophobes.</p>
                <p>VENEZ AVEC VOS PANCARTES !</p>
                <p>Rendez-vous 14h Place d’Italie.</p>
            </div>
            
           

            <div className="mobilisation-post">
            <hr/>
                <h2 className="post-title">Abonnez-vous à nos actualités</h2>
                <p>Recevez directement le nouveau contenu dans votre boîte de réception.</p>
                <button className="mobilisation-button">Abonnez-vous</button>
            </div>

            </div>
        </div>
    )
}
