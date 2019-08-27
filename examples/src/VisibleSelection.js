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

class VisibleSelection extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
  }

  render() {
    const {value} = this.state;
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <View style={{margin: 20}}>
            <Text>Default Style: </Text>
          </View>
          <PinInput
            value={value}
            onPress={() => {}}
            onChangeText={text => {
              this.setState({value: text});
            }}
            visibleSelection
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default VisibleSelection;
