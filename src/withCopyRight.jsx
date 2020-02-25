import React from 'react';

const withCopyRight = (WarrppedComponent) => {

    class HOC extends React.Component {
        render() {
            return (<WarrppedComponent
                {...this.props}
                copyRight="All Content Copyright 2019 Embed" >
            </WarrppedComponent>)
        }
    }
    return HOC;
};

export default withCopyRight;