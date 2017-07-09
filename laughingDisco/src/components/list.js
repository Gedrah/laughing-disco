import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import Datas from './datas';


// class base component

class AlbumList extends Component {
    state = { albums: [] };
    
    componentWillMount () {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({albums: response.data}));
    }
    
    renderList () {
        return (this.state.albums.map(
            album => <Datas key={album.title} record={album} />
            )
        );
    }
        
    render () {
        console.log(this.state);
        return (<ScrollView>{this.renderList()}</ScrollView>);
    } 
};

export default AlbumList;