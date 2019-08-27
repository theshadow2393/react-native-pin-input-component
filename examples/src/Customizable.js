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

class Customizable extends React.Component {
  constructor() {
    super();
    this.state = {value: ''};
  }

  renderStyle = style => {
    return Object.entries(style).map(item => {
      return (
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'rgb(143,187,140)'}}>{item[0]}</Text>
          <Text style={{color: 'rgb(93,175,175)'}}>: </Text>
          <Text style={{color: 'rgb(248, 145, 87)'}}>{JSON.stringify(item[1])}</Text>
        </View>
      );
    });
  };

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
            cellNormalStyle={styles.normal}
            cellFocusStyle={styles.focus}
            cellBlurStyle={styles.blur}
          />
        </View>
        <View style={{backgroundColor: 'rgb(27,43,52)', padding: 10, marginTop: 20}}>
          <Text style={{color: 'white'}}>cellNormalStyle: </Text>
          {this.renderStyle(styles.normal)}
        </View>
        <View style={{backgroundColor: 'rgb(27,43,52)', padding: 10}}>
          <Text style={{color: 'white'}}>cellFocusStyle: </Text>
          {this.renderStyle(styles.focus)}
        </View>
        <View style={{backgroundColor: 'rgb(27,43,52)', padding: 10}}>
          <Text style={{color: 'white'}}>cellBlurStyle: </Text>
          {this.renderStyle(styles.blur)}
        </View>
      </SafeAreaView>
    );
  }
}

export default Customizable;
