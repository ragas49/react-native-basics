/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {FlatList, StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'

import ListItem from './src/components/ListItem/ListItem'
import InputBox from './src/components/InputBox/InputBox'
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'
import {addPlace, deletePlace, deselectPlace, selectPlace} from './src/store/actions'

type Props = {};
class App extends Component<Props> {
  state = {
    placeName: ''
  }

  handelPlaceNameChange = (value) => {
    this.setState({
      placeName: value
    })
  }

  handleSubmitPlace = () => {
    if (this.state.placeName.trim() === '') return;

    this.props.onAddPlace(this.state.placeName)
    this.setState({
      placeName: ''
    })
  }

  render() {
    const { selectedPlace, places, onDeletePlace, onDeselectPlace, onSelectPlace } = this.props
    return (
      <View style={styles.container}>
        <PlaceDetail
          place={selectedPlace}
          onDelete={onDeletePlace}
          onClose={onDeselectPlace}
        />
        <InputBox
          placeName={this.state.placeName}
          onSubmitPlace={this.handleSubmitPlace}
          onPlaceNameChange={this.handelPlaceNameChange}
        />
        <FlatList
          data={places}
          style={styles.listContainer}
          renderItem={(info) => (
            <ListItem
              placeName={info.item.name}
              placeImage={info.item.image}
              onPlaceSelect={() => onSelectPlace(info.item.key)}
            />
          )}
        />
      </View>
    )
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
})

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
