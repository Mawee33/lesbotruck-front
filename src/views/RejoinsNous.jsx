import React from 'react';
import "./../styles/rejoinsNous.css";

export default function APropos() {
    return (
        <div className="rejoins-all">
            <h1 className="rejoins-title">Rejoins-nous</h1>

            <div className="rejoins-sub">
            <p className="rejoins-par">Si tu souhaites nous rejoindre et participer à l’activité de notre association, n’hésites pas à remplir le petit formulaire ci-dessous afin que nous puissions te convier aux prochaines rencontres.</p>
           
           
           <div className="rejoins-par" >
            <form action="POST" className="rejoins-cases">
                <div className="formular-case">
                    <label htmlFor="name">Nom</label>
                    <br/>
                    <input type="text" name="name" id="name"/>
                    </div>

                <div className="formular-case">
                    <label htmlFor="email">Email</label>
                    <br/>
                    <input type="text" name="email" id="email"/>
                    </div>

                <div className="formular-case">
                    <label htmlFor="info">Quelques informations sur toi (ton parcours, ce que tu souhaiterais réaliser dans l'association…)</label>
                    <br/>
                    <textarea name="info" id="info" cols="30" rows="10"></textarea>
                    </div>

                    <div className="formular-case">
                    <button className="rejoins-button">Envoyer</button>
                    </div>

            </form>
            </div>
            </div>
        </div>
    )
}


