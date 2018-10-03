import {withStyles} from '@material-ui/core'

const style = theme => ({
    someStyle: {
        background: theme.palette.primary,
        height: 250
    }
})
//PURECOMPONENT WAY
@withStyles(style)
class Welcome extends PureComponent {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
export default Welcome

//FUNCTIONAL COMPONENT WAY
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
export default withStyles(style)(Welcome)