import './main.scss'
import 'uikit/dist/js/uikit'

// Import Fontawesome svgs
import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons/faTwitterSquare'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons/faGraduationCap'
import { faPlaneDeparture } from '@fortawesome/free-solid-svg-icons/faPlaneDeparture'
import { faMicroscope } from '@fortawesome/free-solid-svg-icons'
library.add(faLinkedin, faTwitterSquare, faGraduationCap, faPlaneDeparture, faMicroscope)
dom.watch()