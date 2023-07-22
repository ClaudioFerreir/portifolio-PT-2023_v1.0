import SocialNetwork from './SocialNetworks';
import InformationContainer from './informationContainer';

import '../styles/components/sidebar.sass'
import '../styles/components/socialnetworks.sass'

import Avatar from '../img/FotoCV.jpg'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Claudio Ferreira" />
      <p className="title">Desenvolvedor Full Stack</p>
      <SocialNetwork />
      <InformationContainer />
      <a href="https://flowcv.com/resume/6sa436pw1a" className="btn" target='_blank'>
        Ver currículo
      </a>
    </aside>
  )
}


export default Sidebar