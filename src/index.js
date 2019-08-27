import React from 'react';
import { View, TextInput, TouchableHighlight, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import Cell from './Cell';

const defaultStypes = StyleSheet.create({
  normal: {
    width: 30,
    height: 30,
    borderWidth: 0.5,
    borderColor: '#D5D5D5',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
  focus: {
    width: 30,
    height: 30,
    borderWidth: 0.5,
    borderColor: '#D5D5D5',
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
      android: {
        elevation: 4,
      },
    }),
  },
  blur: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
  },
});

class PinInput extends React.Component {
  constructor() {
    super();
    this.state = {
      onFocus: false,
    };
  }

  renderChars() {
    const { onFocus } = this.state;
    const {
      value,
      visibleSelection,
      selectionColor,
      length,
      cellNormalStyle,
      cellFocusStyle,
      cellBlurStyle,
      CellView,
      FocusView,
      BlurView,
    } = this.props;
    const cells = [];
    const values = value.split('');
    const l = values.length;
    if (CellView === undefined) {
      for (let i = 0; i < length; i += 1) {
        if (i < l)
          cells.push(
            <Cell
              value={values[i]}
              entered
              cellNormalStyle={cellNormalStyle}
              cellFocusStyle={cellFocusStyle}
              cellBlurStyle={cellBlurStyle}
              visibleSelection={visibleSelection}
              selectionColor={selectionColor}
            />
          );
        else if (i === l) {
          if (onFocus) {
            cells.push(
              <Cell
                cellNormalStyle={cellNormalStyle}
                cellFocusStyle={cellFocusStyle}
                cellBlurStyle={cellBlurStyle}
                value=""
                isFocus
                visibleSelection={visibleSelection}
                selectionColor={selectionColor}
              />
            );
          } else {
            cells.push(
              <Cell
                cellNormalStyle={cellNormalStyle}
                cellFocusStyle={cellFocusStyle}
                cellBlurStyle={cellBlurStyle}
                value=""
                visibleSelection={visibleSelection}
                selectionColor={selectionColor}
              />
            );
          }
        } else
          cells.push(
            <Cell
              cellNormalStyle={cellNormalStyle}
              cellFocusStyle={cellFocusStyle}
              cellBlurStyle={cellBlurStyle}
              value=""
              visibleSelection={visibleSelection}
              selectionColor={selectionColor}
            />
          );
      }
    } else {
      for (let i = 0; i < length; i += 1) {
        if (i < l) cells.push(BlurView);
        else if (i === l) {
          if (onFocus) {
            cells.push(FocusView);
          } else {
            cells.push(CellView);
          }
        } else cells.push(CellView);
      }
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
  length: PropTypes.number,
  selectionColor: PropTypes.string,
  visibleSelection: PropTypes.bool,
  cellNormalStyle: PropTypes.objectOf(PropTypes.any),
  cellFocusStyle: PropTypes.objectOf(PropTypes.any),
  cellBlurStyle: PropTypes.objectOf(PropTypes.any),
  CellView: PropTypes.objectOf(PropTypes.any),
  FocusView: PropTypes.objectOf(PropTypes.any),
  BlurView: PropTypes.objectOf(PropTypes.any),
};

PinInput.defaultProps = {
  autoFocus: false,
  length: 6,
  selectionColor: 'red',
  visibleSelection: false,
  cellNormalStyle: defaultStypes.normal,
  cellFocusStyle: defaultStypes.focus,
  cellBlurStyle: defaultStypes.blur,
  CellView: undefined,
  FocusView: undefined,
  BlurView: undefined,
};
export default PinInput;
