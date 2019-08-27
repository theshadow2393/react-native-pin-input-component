import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import PinInput from 'react-native-pin-input-component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lighter,
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
          <Text>Default Style: </Text>
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
