import React from 'react';
import {View, Text} from 'react-native';

const CardItem = (props) => {
    return (
        <View style={styles.containerStyles}>
            {props.children}
        </View>
    );
};


const styles = {
    containerStyles: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};

export default CardItem;