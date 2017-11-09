import * as React from 'react';
import { Toolbar } from 'react-md';

interface Props { }

interface State {
    isOpen: boolean;
}

export class Header extends React.Component<Props, State> {
    constructor() {
        super();
        this.state = {
            isOpen: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            isOpen: !this.state.isOpen
        }));
    }

    render() {
        return (
            <div className="toolbars">
                <Toolbar title="Transparent"/>
                </div>

        );
    }
}
