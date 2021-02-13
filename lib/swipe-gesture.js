import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder
} from 'react-native';

export default class SwipeGesture extends Component {
    PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderRelease: (evt, gestureState) => {
        let x = gestureState.dx;
        let y = gestureState.dy;
		console.log(x,y);
        if ( x!==0 && y !==0 && Math.abs(x) > Math.abs(y)) {
          if (x > 0) {
            this.props.onSwipePerformed('right')
          }
          else {
            this.props.onSwipePerformed('left')
          }
        }
        else if(x!==0 && y !==0) {
          if (y > 0) {
            this.props.onSwipePerformed('down')
          }
          else {
            this.props.onSwipePerformed('up')
          }
        }
		else
		{
		this.props.onSwipePerformed('clicked')
		}
      }
    })

  render() {
    return (
      <Animated.View {...this.PanResponder.panHandlers} style={this.props.gestureStyle}>
        <View>{this.props.children}</View>
      </Animated.View>
    )
  }
}

