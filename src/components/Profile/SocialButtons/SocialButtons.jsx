import s from './SocialButtons.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';


library.add(fab, far, fas);

const SocialButtons = ({contacts}) => {

    const getIcon = (contactName) => {
        const icons = {
            facebook: ['fab', 'facebook'],
            website: ['fas', 'fa-globe'],
            vk: ['fab', 'vk'],
            twitter: ['fab', 'twitter'],
            instagram: ['fab', 'instagram'],
            youtube: ['fab', 'youtube'],
            github: ['fab', 'github'],
            mainLink: ['far', 'fa-hand-pointer'],
        }
        return icons[contactName];
    }

    const getLink = (userLink) => {
        if(userLink.toLowerCase().search("^https?://") === 0){
            return userLink;
        }
        return `https://${userLink}`;
    }

    return (
        <>
            <ul className={s.social_icons}>
                {Object.keys(contacts).map((messanger) => {
                    return contacts[messanger]
                    ? <li key={messanger}><a
                        href={getLink(contacts[messanger])}
                        title={messanger}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FontAwesomeIcon
                        icon={getIcon(messanger)}
                        className={s.icon}/>
                    </a></li>
                    : null
                })}
            </ul>
            
            {/* <FontAwesomeIcon icon={['fab', 'apple']} />
            <FontAwesomeIcon icon={['fab', 'microsoft']} />
            <FontAwesomeIcon icon={['fab', 'google']} /> 
            <FontAwesomeIcon icon={['far','fa-hand-pointer']} />
            <FontAwesomeIcon icon={['fas','fa-globe']} />*/}
      </>
    );
}

export default SocialButtons;