import {
  faLinkedin,
  faTwitterSquare,
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons';

import IconLink from './IconLink/';

import './style.scss'

const Contact = () => {
  return <div className='contact-container'>
    <IconLink icon={faLinkedin} url='https://linkedin.com/in/jonesj8'/>
    <IconLink icon={faTwitterSquare} url='https://twitter.com/jojon3s' />
    <IconLink icon={faGithubSquare} url='https://github.com/jjones09' />
  </div>
};

export default Contact;
