import React from 'react';
import "./../styles/home.css";

export default function Home() {
    return (
        <div className="home-all"> 
      <div className="truck-image"></div>


        <div className="home-first-all"> 
        <div className="home-first">
            <h1 className="home-title">Le Lesbotruck +, quesaquo?</h1>
            <p>Le Lesbotruck+ est une association de visibilité lesbienne qui s’attache à promouvoir la diversité de nos identités avec une approche féministe.</p>
           
            <p>Parce que nous ne présumons pas des identités de chacun.e.s, le Lesbotruck+ est ouvert à tout.e.s sans distinction de parcours, d’origines sociales, ethniques, de choix cultuels…</p>

            <p>Association inclusive et œuvrant pour la convergence des luttes, le Lesbotruck+ est en mixité choisie et toutes les femmes trans, cis, les hommes trans ainsi que les minorités de genres y ont leurs places.</p>

            <p>Parce que les lesbiennes peuvent cumuler un éventail de discriminations, c’est en ces termes que nous pensons nos actions. Puisque nos parcours sont multiples, nos discriminations le sont tout autant.</p>

            <p>Le collectif Lesbotruck, organisateur du seul char lesbien de la Marche des Fiertés LGBTQI+ de Paris depuis 2015, devient en 2017 l’association Lesbotruck+.</p>

            <p> L’association entend continuer l’organisation du grand char lesbien de la Marche tout en développant plus d’actions et de projets tout au long de l’année pour plus de visibilité, plus d’espace, plus de droit et plus de liberté pour les lesbiennes.</p>

            <p> Cette année encore, pour que ce projet se réalise, nous avons besoin de ton aide ! Soutiens le seul char lesbien de la Marche des Fiertés LGBT+ de Paris rejoins nous et devient bénévole!</p>

            <div className="bb">
            <button className="home-button">Nous rejoindre</button>
            </div>

            <p>On a toujours besoin de bénévoles et d’énergie et ce même si vous n’êtes pas sur Paris, donc n’hésitez pas!</p>
        </div>
        </div>

        <div className="home-second-all">
        <div className="home-second">
            <h1 className="home-second-title">La team</h1>
            <p>Présentation des membres de notre association.</p>
            <img className="team-picture" src="https://res.cloudinary.com/djoha9r5n/image/upload/v1586378371/lesbotruck/f86d4d452953e51a7188ac18db3132cc_wzcyqy.jpg" alt="team"/>
        </div>
        </div>


        </div>
    )
}
