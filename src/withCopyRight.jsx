import React from 'react';

const withCopyRight = (WarrppedComponent) => {

    class enhancedComponent extends React.Component {
        render() {
            return (<WarrppedComponent
                {...this.props}
                copyRight="All Content Copyright 2019 Embed" >
            </WarrppedComponent>)
        }
    }
    return enhancedComponent;
};

export default withCopyRight;