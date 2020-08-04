import React from 'react';

import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherItem: React.FC = () => {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/60125300?s=460&u=98eeb4a4d64bc31f638be7acae2f773f152b27f9&v=4" alt="Luan Farias"/>
                <div>
                    <strong>Luan Farias</strong>
                    <span>Química</span>
                </div>
            </header>
            <p>
                Estudante das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas atrávesde experiências. Mais de 200.000 pesoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;
