import {FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass'

const socialNetworks = [
  {name: 'LinkedIn', url: 'https://www.linkedin.com/in/claudioferreirajr/', icon: FaLinkedin},
  {name: 'GitHub', url: 'https://github.com/ClaudioFerreir', icon: FaGithub},
  {name: 'Email', url: 'claudioferreirajr@aol.com', icon: FaEnvelope}
]

const SocialNetworks = () => {
  return <section id="social-networks">
    {socialNetworks.map((network) => (
      <a href={network.url} className='social-btn' id={network.name} key={network.name}>
        <network.icon />
      </a>
    ))}
  </section>
}

export default SocialNetworks