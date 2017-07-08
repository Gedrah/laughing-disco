// import library
import React from 'react';
import { Text, View } from 'react-native';

// create component
const Header = (props) => {
    const { textStyles, viewStyles } = styles;
    return (
        <View style={viewStyles}>
            <Text style={textStyles}>{props.headerText}</Text>
            
        </View>         
    );
};

// edit component

const styles = {
    viewStyles: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.9,
        elevation: 2,
        position: 'relative'        
    },
    textStyles: {
        fontSize: 25
    }
}


// Make the component available

export default Header;