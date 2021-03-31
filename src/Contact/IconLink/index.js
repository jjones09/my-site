import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.scss'

const IconLink = ({ icon, url }) => <a className='icon-link' href={url} target='_blank' rel='noreferrer'>
  <FontAwesomeIcon icon={icon} />
</a>;

export default IconLink;
