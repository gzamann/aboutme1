import {ReactComponent as ReactIcon} from './assets/icons/react.svg'
import {ReactComponent as TSIcon} from './assets/icons/typescript.svg'
import {ReactComponent as CSSIcon} from './assets/icons/css.svg'
import {ReactComponent as HTMLIcon} from './assets/icons/html5.svg'
import {ReactComponent as EchartsIcon} from './assets/icons/apacheecharts.svg'
import {ReactComponent as CharJSIcon} from './assets/icons/chartdotjs.svg'
import {ReactComponent as GithubIcon} from './assets/icons/github.svg'
import {ReactComponent as ViteIcon} from './assets/icons/vite.svg'
import {ReactComponent as FigmaIcon} from './assets/icons/figma.svg'

const TechIcons = {
    React: ReactIcon,
    Typescript: TSIcon,
    CSS: CSSIcon,
    HTML: HTMLIcon,
    Echarts: EchartsIcon,
    ChartJS: CharJSIcon,
    Github: GithubIcon,
    Vite: ViteIcon,
    Figma: FigmaIcon
}

const TechIcon = ({iconName, color}) => {
    const IconComponent = TechIcons[iconName]
    return <IconComponent style={{stroke: color || 'white', fill: color}} />
}

export default TechIcon;