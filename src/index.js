import React from 'react';
import { View, TextInput, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Cell from './Cell';

class PinInput extends React.Component {
  constructor() {
    super();
    this.state = {
      onFocus: false,
    };
  }

  renderChars() {
    const { onFocus } = this.state;
    const { value } = this.props;
    const cells = [];
    const values = value.split('');
    const l = values.length;
    for (let i = 0; i < 6; i += 1) {
      if (i < l) cells.push(<Cell value={values[i]} entered />);
      else if (i === l) {
        if (onFocus) {
          cells.push(<Cell value="" isFocus />);
        } else {
          cells.push(<Cell value="" isFocus={false} />);
        }
      } else cells.push(<Cell value="" />);
      // }
    }

    return cells;
  }

  render() {
    const { value, onChangeText, autoFocus, onPress } = this.props;
    let otp;
    return (
      <TouchableHighlight
        underlayColor="transparent"
        onPress={() => {
          otp.focus();
          onPress();
        }}
      >
        <View>
          <TextInput
            display="none"
            ref={component => {
              otp = component;
            }}
            autoFocus={autoFocus}
            value={value}
            onChangeText={onChangeText}
            maxLength={6}
            keyboardType="numeric"
            onBlur={() => {
              this.setState({ onFocus: false });
            }}
            onFocus={() => {
              this.setState({ onFocus: true });
            }}
          />
          <View style={{ flexDirection: 'row' }}>{this.renderChars()}</View>
        </View>
      </TouchableHighlight>
    );
  }
}

PinInput.propTypes = {
  value: PropTypes.string.isRequired,
  autoFocus: PropTypes.bool,
  onChangeText: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

PinInput.defaultProps = {
  autoFocus: false,
};
export default PinInput;
