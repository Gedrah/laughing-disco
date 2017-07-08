import React from 'react';
import {View, Text} from 'react-native';

const Datas = (props) => {
    return (
        <View>
            <Text>{props.record.title}</Text>
        </View>
    );
};

export default Datas;