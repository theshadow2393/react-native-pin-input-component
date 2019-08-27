import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Platform} from 'react-native';

import PinInput from 'react-native-pin-input-component';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  normal: {
    width: 40,
    height: 40,
    borderWidth: 0.5,
    borderColor: '#D5D5D5',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 20,
  },
  focus: {
    width: 40,
    height: 40,
    borderWidth: 0.5,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowOffset: {width: 0, height: 1},
        shadowRadius: 2,
        shadowOpacity: 0.5,
        shadowColor: 'red',
      },
      android: {
        elevation: 4,
      },
    }),
  },
  blur: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
});

class CustomView extends React.Component {
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
            <Text>Customizable Style: </Text>
          </View>
          <PinInput
            value={value}
            onPress={() => {}}
            onChangeText={text => {
              this.setState({value: text});
            }}
            CellView={
              <View style={{width: 12, height: 12, backgroundColor: 'gray', borderRadius: 6}} />
            }
            FocusView={
              <View style={{width: 12, height: 12, backgroundColor: 'blue', borderRadius: 6}} />
            }
            BlurView={
              <View style={{width: 12, height: 12, backgroundColor: 'green', borderRadius: 6}} />
            }
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default CustomView;
