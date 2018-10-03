import withWidth, {isWidthDown} from '@material-ui/core/withWidth'

@withWidth
class Welcome extends PureComponent {
    render() {
        return <React.Fragment>
            {isWidthDown('xs', props.width) ? <MobileImage /> : <DesktopImage />}
        </React.Fragment>
    }
}
export default Welcome

//FUNCTIONAL COMPONENT WAY
function Welcome(props) {
    return {isWidthDown('xs', props.width) ? <MobileImage /> : <DesktopImage />}
}
export default withWidth(Welcome)