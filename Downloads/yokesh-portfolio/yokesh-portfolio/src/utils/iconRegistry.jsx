import {
  FaRocket,
  FaServer,
  FaBrain,
  FaHandshake,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaTools,
  FaRobot,
  FaCommentDots,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaArrowUp,
  FaDownload,
  FaGithub,
} from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi2'

/* Maps the string keys used in siteContent.js to real icon components. */
const iconRegistry = {
  rocket: FaRocket,
  server: FaServer,
  brain: FaBrain,
  handshake: FaHandshake,
  frontend: FaReact,
  backend: FaNodeJs,
  database: FaDatabase,
  devops: FaCloud,
  ai: FaRobot,
  tools: FaTools,
  chat: FaCommentDots,
  spark: HiSparkles,
  mail: FaEnvelope,
  phone: FaPhoneAlt,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
  location: FaMapMarkerAlt,
  external: FaExternalLinkAlt,
  arrowUp: FaArrowUp,
  download: FaDownload,
  github: FaGithub,
}

export function getIcon(iconKey) {
  return iconRegistry[iconKey] ?? FaRocket
}

export default iconRegistry
