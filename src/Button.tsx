import * as React from 'react'
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
  Image
} from 'react-native'

export interface ButtonProps {
  actionButton?: boolean
  style?: StyleProp<ViewStyle>
  textStyle?: StyleProp<TextStyle>
  text?: string
  onPress?: (event: GestureResponderEvent) => void
}

export class Button extends React.Component<ButtonProps> {
  renderButton(text: any) {
    let icon = null
    switch (text) {
      case 'C':
        icon = require('../src/assets/icons/clear.png')
        break;
      case '❮':
        icon = require('../src/assets/icons/deletion.png')
        break;
      case '%':
        icon = require('../src/assets/icons/percentage.png')
        break;
      case '/':
        icon = require('../src/assets/icons/division.png')
        break;
      case '*':
        icon = require('../src/assets/icons/multiplication.png')
        break;
      case '-':
        icon = require('../src/assets/icons/substraction.png')
        break;
      case '+':
        icon = require('../src/assets/icons/addition.png')
        break;
      case '↲':
        icon = require('../src/assets/icons/submit.png')
        break;
      case '↲':
        icon = require('../src/assets/icons/submit.png')
        break;
    }

    return (
      <Image source={icon} style={{ width: 20, height: 20 }} />
    )

  }

  render() {
    const { actionButton, style, text, textStyle, onPress } = this.props

    return (
      <TouchableOpacity style={[style]} onPressIn={onPress}>
        <View style={styles.container}>
          {actionButton
            ? this.renderButton(text)
            : <Text style={textStyle}>{text}</Text>
          }
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
