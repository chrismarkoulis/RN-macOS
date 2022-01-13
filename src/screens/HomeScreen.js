import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const HomeScreen = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <View style={styles.header}>
          <Text style={styles.typography}>Create your awesome Todo List!</Text>
        </View>
        <Button
          title="Go to Details"
          color="#000"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={styles.body}>
        <Text style={styles.typography}>Todos</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#d3d3d3',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  headerBox: {
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    flex: 1,
  },
  typography: {
    color: '#000',
  },
});

export default HomeScreen;
