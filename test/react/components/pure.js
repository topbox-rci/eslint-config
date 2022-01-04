import React, { PureComponent } from 'react';

export default class Pure extends PureComponent {
    static defaultProps = {
        boop: 'hi'
    };

    static propTypes = {
        thing: 'x'
    };

    helloText = 'hello world';
    somethignElse = {};

    componentDidMount() {
        this.sayHello();
    }

    sayHello() {
        return this.helloText;
    }

    render() {
        const { thing } = this.props;
        return (
          <div yes>{thing}</div>
        );
    }
}
