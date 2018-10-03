import React, {PureComponent} from 'react'

// First example

class Welcome extends PureComponent {
    render() {
        return <h1>Hello, {this.props.name}</h1>;
    }
}
export default Welcome

//Same thing as above
function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}
export default Welcome

//These are imported the same way.
<Welcome name="Garrett"/>