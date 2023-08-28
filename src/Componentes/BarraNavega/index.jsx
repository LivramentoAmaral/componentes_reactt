import React from "react";
import './style.css'

const items = [
    { text: 'Página Inicial', link: '/' },
    { text: 'Sobre Nós', link: '/sobre' },
    { text: 'Produtos', link: '/produtos' },
    { text: 'Contato', link: '/contato' },
  ];

function BarraNavega(intems){
    return(
        <nav>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    )
}

export default BarraNavega;