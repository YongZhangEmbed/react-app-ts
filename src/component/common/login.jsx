import React from 'react';
import { ForwardRefButton } from '../controls';

class Login extends React.Component {

    constructor(props) {
        super(props)

        this.refButton = React.createRef();
    }

    componentDidMount() {
        this.refButton.current.click()
        console.log(`Forward Ref Button was clicked on componentDidMount`)
    }

    render() {
        console.log(`Forward Ref Button was rendered!`)
        return (
            <div>
                <ForwardRefButton ref={this.refButton}>Forward Ref Button</ForwardRefButton>
            </div>
        )
    }
}

export { Login }