// import library
import React from 'react';
import { View, ToolbarAndroid, StatusBar } from 'react-native';

// create component
const Header = (props) => {
    const { textStyles, toolBar } = styles;
    const text = props.headerText;
    return (
        <View>
            <ToolbarAndroid style={toolBar} title="LaughingDisco"/>
        </View>    
    );
};

// edit component

const styles = {
    textStyles: {
        fontSize: 25
    },
    toolBar: {
        backgroundColor: '#9f6fe9', 
        height: 60,
        flexDirection: 'row', 
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        paddingTop: 15,
        shadowColor: '#FFFF',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative',
    }
}


// Make the component available

export default Header;