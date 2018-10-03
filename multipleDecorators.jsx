import withWidth, {isWidthDown} from '@material-ui/core/withWidth'
import {withStyles} from '@material-ui/core'
import {compose} from 'recompose'

const styles = theme => ({
    someStyle: {
        background: theme.palette.primary,
        height: 250
    }
})

@withStyles(styles)
@withWidth
class Welcome extends PureComponent {
    const {classes} = this.props
    render() {
        return <React.Fragment>
            {isWidthDown('xs', props.width) ? <MobileImage className={classes.someStyle}/> : <DesktopImage />}
        </React.Fragment>
    }
}
export default Welcome

//FUNCTIONAL COMPONENT WAY
function Welcome(props) {
    const {classes} = props
    return {isWidthDown('xs', props.width) ? <MobileImage className={classes.someStyle}/> : <DesktopImage />}
}
export default compose(
    withStyles(styles),
    withWidth()
)(Welcome)