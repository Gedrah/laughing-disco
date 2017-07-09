import React from 'react';
import {Text, Image, View, Linking} from 'react-native';
import Card from './cards';
import CardItem from './carditems';
import Button from './button';

const Datas = (props) => {
    return (
        <Card>
            <CardItem>
                <View style={styles.AlbumStyle}>
                    <Image style={styles.ImageStyle} source={{uri: props.record.thumbnail_image}}/>
                </View>
                <View style={styles.HeaderContentStyles}>
                    <Text>{props.record.title}</Text>
                    <Text>{props.record.artist}</Text>
                </View>
            </CardItem>

            <CardItem>
                <Image style={styles.BigPicture} source={{uri: props.record.image}}/>                    
            </CardItem>
            
            <CardItem>
                <Button Pressed={ () => Linking.openURL(props.record.url)}>
                    Buy Now !
                </Button>
            </CardItem>
        </Card>
    );
};

const styles = {
    HeaderContentStyles: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    ImageStyle: {
        height: 50,
        width: 50
    },
    AlbumStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    BigPicture: {
        height: 300,
        width: null,
        flex: 1,
    }
};

export default Datas;