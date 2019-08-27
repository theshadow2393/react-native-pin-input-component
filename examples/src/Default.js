import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import PinInput from 'react-native-pin-input-component';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class Default extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
  }

  render() {
    const {value} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>Default Style: </Text>
          <PinInput
            autoFocus
            value={value}
            onPress={() => {}}
            onChangeText={text => {
              this.setState({value: text});
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Default;
