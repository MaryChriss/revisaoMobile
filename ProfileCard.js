import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ImageComponent from './ImageComponent';

const ProfileCard = ({ nome, idade, job, imageUrl }) => {
  return (
    <View style={styles.card}>
      <ImageComponent imageUrl={imageUrl} />
      <Text style={styles.name}>{nome}</Text>
      <Text>{idade} anos</Text>
      <Text>{job}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: 200,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default ProfileCard;
