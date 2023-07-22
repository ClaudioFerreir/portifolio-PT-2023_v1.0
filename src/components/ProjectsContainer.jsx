import '../styles/components/projectscontainer.sass'

import FrontWineShop from '../img/frontWineshop.png'
import FrontSweetShop from '../img/frontSweetShop2.png'
import FrontCloneDecathlon from '../img/frontCloneDecathlonPT.png'
import FrontDoceria from '../img/frontDoceria.png'

const ProjectsContainer = () => {
  return (
    <section id="projects-container">
      <h2>Projetos Front-End</h2>
      <div className='project-card'>
        <div className="card-image">
          <img src={FrontWineShop} alt="" />
        </div>
        <div className="card-info">
          <p>
          Este projeto consiste em um site e-commerce de vinhos e foi projetado para oferecer uma experiência de compra intuitiva e agradável aos usuários. Ele possui uma navegação facilitada, com categorias bem definidas, que permitem aos usuários explorar diferentes tipos de vinhos, como tintos, brancos e espumantes.
          O layout do site é atraente e convidativo, com imagens e videos dispostos para criar uma experiência envolvente. Além disso, o site é responsivo, adaptando-se a diferentes tamanhos de tela. 
          </p>
          <a href="https://project-wine-shop.vercel.app/?vercelToolbarCode=TjWlYHCPS2Z7vH-" target="_blank" className="btn">
          Ver Projeto
          </a>
        </div>
      </div>
      <div className='project-card'>
        <div className="card-info">
          <p>
          O objetivo final deste projeto foi fornecer uma experiência de usuário agradável, com uma página responsiva que se adapta a diferentes dispositivos, combinando recursos do Bootstrap (carousel,cards, modal, toast, alert, collapse e layout grid) e JavaScript. Além disso, há ligação com uma API externa (IBGE) para exibir e acessar as cidades do Brasil de forma intuitiva, funcional e dinâmica.
          </p>
          <a href="https://project-advanced-bootstrap.vercel.app/?vercelToolbarCode=PKILJ5MASC99Oof" target="_blank" className="btn">
          Ver Projeto
          </a>
        </div>
        <div className="card-image">
          <img src={FrontSweetShop} alt="" />
        </div>
      </div>
      <div className='project-card'>
        <div className="card-image">
          <img src={FrontCloneDecathlon} alt="" />
        </div>
        <div className="card-info">
          <p>
          O projeto consistiu na criação de um site responsivo, simulando um e-commerce de artigos esportivos. Foi utilizado o CSS Grid para criar um layout flexível que se adapta a diferentes tamanhos de tela, permitindo uma exibição harmoniosa dos produtos em grade. O menu lateral estático do Bootstrap foi implementado para facilitar a navegação do usuário, fornecendo categorias e filtros para refinar a busca de produtos. 
          </p>
          <a href="https://project-decathlon-pt-layout.vercel.app/?vercelToolbarCode=0lCfj-7tPcxryri#" target="_blank" className="btn">
          Ver Projeto
          </a>
        </div>
      </div>
      <div className='project-card'>
        <div className="card-info">
          <p>
          A página foi baseada em HTML e CSS, e apresenta uma estrutura comumente encontrada em muitos sites. Há imagens e vídeos, além de um formulário de contato. O objetivo foi criar uma página com design atraente, e elementos bem estruturados e estilizados, usando HTML e CSS.
          </p>
          <a href="https://projeto-doceria-two.vercel.app/?vercelToolbarCode=V_GaZ_g8wfQ7-dl" target="_blank" className="btn">
          Ver Projeto
          </a>
        </div>
        <div className="card-image">
          <img src={FrontDoceria} alt="" />
        </div>
      </div>
    </section>
  )
}

export default ProjectsContainer;