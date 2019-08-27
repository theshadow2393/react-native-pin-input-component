import React from 'react';
import { View, Animated, Text } from 'react-native';
import PropTypes from 'prop-types';

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
    const {
      value,
      isFocus,
      entered,
      cellNormalStyle,
      cellFocusStyle,
      cellBlurStyle,
      selectionColor,
      visibleSelection,
    } = this.props;
    const { fade } = this.state;
    if (isFocus) {
      if (visibleSelection) {
        return (
          <View style={cellFocusStyle}>
            <Animated.View style={{ opacity: fade }}>
              <View style={{ width: 2, height: 20, backgroundColor: selectionColor }} />
            </Animated.View>
          </View>
        );
      }
      return <View style={cellFocusStyle} />;
    }
    return (
      <View style={entered ? cellBlurStyle : cellNormalStyle}>
        <Text>{value}</Text>
      </View>
    );
  }
}

Cell.propTypes = {
  value: PropTypes.string.isRequired,
  isFocus: PropTypes.bool,
  entered: PropTypes.bool,
  cellNormalStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  cellFocusStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  cellBlurStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  selectionColor: PropTypes.string,
  visibleSelection: PropTypes.bool,
};

Cell.defaultProps = {
  isFocus: false,
  entered: false,
  selectionColor: 'red',
  visibleSelection: false,
};

export default Cell;
