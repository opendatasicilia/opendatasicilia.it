import {
    FaFacebook as fbicon, 
    FaTelegram as tgicon, 
    FaRegEnvelope as mailicon,
    FaTwitter as twicon,
    FaGithub as ghicon,
} from 'react-icons/fa'

const socials = [
    {
        name: "Telegram",
        url: "https://t.me/opendatasicilia",
        icon: tgicon
    },
    {
        name: "Mailing list",
        url: "https://groups.google.com/g/opendatasicilia",
        icon: mailicon
    },
    {
        name: "Twitter",
        url: "https://twitter.com/opendatasicilia",
        icon: twicon
    },
    {
        name: "Facebook group",
        url: "https://www.facebook.com/groups/opendatasicilia/",
        icon: fbicon
    },
    {
        name: "GitHub",
        url: "https://github.com/opendatasicilia",
        icon: ghicon
    }
]

export default socials
