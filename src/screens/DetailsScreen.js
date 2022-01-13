import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DetailsScreen = props => {
  const {navigation} = props;

  return (
    <View>
      <Text style={styles.typography}>MacTodos | Version 1.0.0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  typography: {
    color: '#000',
  },
});

export default DetailsScreen;
