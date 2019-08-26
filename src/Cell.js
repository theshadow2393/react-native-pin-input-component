import React from 'react';
import { View, Animated, Text, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderWidth: 0.5,
    borderColor: '#D5D5D5',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  enteredContainer: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
});

class Cell extends React.Component {
  constructor() {
    super();
    this.state = { fade: new Animated.Value(0) };
  }

  componentDidUpdate() {
    const { fade } = this.state;
    Animated.loop(Animated.timing(fade, { toValue: 1, duration: 1000 })).start();
  }

  render() {
    const { value, isFocus, entered } = this.props;
    const { fade } = this.state;
    console.log('fade: ', fade);
    if (isFocus) {
      return (
        <View
          style={{
            width: 30,
            height: 30,
            borderWidth: 0.5,
            borderColor: COLOR_BORDER_TEXT_INPUT,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 2,
            ...Platform.select({
              ios: {
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 2,
                shadowOpacity: 0.5,
                // shadowColor: 'gray',
              },
              android: {},
            }),
          }}
        >
          <Animated.View style={{ opacity: fade }}>
            <View style={{ width: 2, height: 20, backgroundColor: 'red' }} />
          </Animated.View>
        </View>
      );
    }
    return (
      <View style={entered ? styles.enteredContainer : styles.container}>
        <Text>{value}</Text>
      </View>
    );
  }
}

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  isFocus: PropTypes.bool,
  entered: PropTypes.bool,
};

Cell.defaultProps = {
  isFocus: false,
  entered: false,
};

export default Cell;
