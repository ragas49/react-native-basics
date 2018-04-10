import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

const PlaceDetail = ({place, onDelete, onClose}) => {
  let modalContent = null;
  if (place) {
    modalContent = (
      <View>
        <Image source={place.image} style={styles.image} />
        <Text style={styles.placeName}>{place.name}</Text>
      </View>
    );
  }

  return (
    <Modal onRequestClose={onClose} visible={place !== null} animationType="slide">
      <View  style={styles.modalContainer}>
        {modalContent}
        <View>
          <Button title="Delete" color="red" onPress={onDelete}/>
          <Button title="Close" onPress={onClose}/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22
  },
  image: {
    width: '100%',
    height: 200
  },
  placeName: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28
  }
});
export default PlaceDetail;