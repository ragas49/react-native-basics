/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import InputBox from './src/components/InputBox/InputBox';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import everest from './src/assets/everest.jpg';

type Props = {};
export default class App extends Component<Props> {
  state = {
    placeName: '',
    places: [],
    selectedPlace: null
  };

  handelPlaceNameChange = (value) => {
    this.setState({
      placeName: value
    })
  };

  handleSubmitPlace = () => {
    if (this.state.placeName.trim() === '') return;

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: `${Math.random()}`,
          name: prevState.placeName,
          image: everest
        }),
        placeName: ''
      };
    });
  };

  handlePlaceDelete = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter((place) => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    })
  };

  handleModalClose = () => {
    this.setState({
      selectedPlace: null
    })
  };

  handlePlaceSelect = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find((place) => {
          return place.key === key;
        })
      }
    })
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          place={this.state.selectedPlace}
          onDelete={this.handlePlaceDelete}
          onClose={this.handleModalClose}
        />
        <InputBox
          placeName={this.state.placeName}
          onSubmitPlace={this.handleSubmitPlace}
          onPlaceNameChange={this.handelPlaceNameChange}
        />
        <FlatList
          data={this.state.places}
          style={styles.listContainer}
          renderItem={(info) => (
            <ListItem
              placeName={info.item.name}
              placeImage={info.item.image}
              onPlaceSelect={() => this.handlePlaceSelect(info.item.key)}
            />
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10
  },
  listContainer: {
    width: '100%'
  }
});
