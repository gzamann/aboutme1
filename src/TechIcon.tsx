import {ReactComponent as ReactIcon} from './assets/react.svg'
import {ReactComponent as TSIcon} from './assets/typescript.svg'
import {ReactComponent as CSSIcon} from './assets/css.svg'
import {ReactComponent as HTMLIcon} from './assets/html5.svg'
import {ReactComponent as EchartsIcon} from './assets/apacheecharts.svg'
import {ReactComponent as CharJSIcon} from './assets/chartdotjs.svg'
import {ReactComponent as GithubIcon} from './assets/github.svg'
import {ReactComponent as ViteIcon} from './assets/vite.svg'
import {ReactComponent as FigmaIcon} from './assets/figma.svg'

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