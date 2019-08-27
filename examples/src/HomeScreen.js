/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';
import PropTypes from 'prop-types';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lighter,
    justifyContent: 'center',
  },
});
class HomeScreen extends React.Component {
  render() {
    const {navigation} = this.props;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Button
            title="Default PinInput"
            onPress={() => {
              navigation.navigate('default');
            }}
          />
          <Button
            title="Visible selection PinInput"
            onPress={() => {
              navigation.navigate('visibleSelection');
            }}
          />
          <Button
            title="Customizable PinInput"
            onPress={() => {
              navigation.navigate('customizable');
            }}
          />
          <Button
            title="Custom view PinInput"
            onPress={() => {
              navigation.navigate('customizable2');
            }}
          />
          <Button
            title="Customizable PinInput #2"
            onPress={() => {
              navigation.navigate('customView');
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default HomeScreen;
