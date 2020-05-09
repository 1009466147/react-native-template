import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

import { useState, useEffect } from 'react';
import { Animated, Easing } from 'react-native';

class SpringView extends Component {
  state = {
    springValue: new Animated.Value(1)
  }

  startAnimated = () => {
    this.state.springValue.setValue(0.3)
    Animated.spring(
      this.state.springValue,
      {
        toValue: 1,
        friction: 2.5,
        duration: 250,
        useNativeDriver: true,
        easing: Easing.linear
      }
    ).start()
  }
  render() {
    return (
      <Animated.View                 // 使用专门的可动画化的View组件
        style={[...this.props.style, {
          transform: [{ scale: this.state.springValue }]
        }]}
      >
        {this.props.children}
      </Animated.View>
    )
  }
}


export default class TabBar extends Component {

  springRefs = {}
  tabPressHandle = (route) => {
    this.springRefs[route.name].current.startAnimated()
    this.props.navigation.jumpTo(route.name)
  }
  buildRefs = () => {
    const { state: { routes } } = this.props;
    let SpringRefs = {}
    routes.map((item) => {
      SpringRefs[item]
    })
  }
  renderItem(route, index, apply) {
    const { navigation, activeTintColor, inactiveTintColor, state, descriptors } = this.props;
    const focused = (index === state.index);
    const color = focused ? activeTintColor : inactiveTintColor;
    const TabScene = {
      focused,
      route,
      color,
    };
    const isStudy = route.name == 'study' && apply;
    let springRef = React.createRef();

    this.springRefs = { ...this.springRefs, [route.name]: springRef }

    if (route.name == 'study' && !apply) {
      return (
        <View
          key={route.key}
          style={styles.tabItem}
        >
        </View>
      );
    } else {
      return (
        <TouchableOpacity
          key={route.key}
          style={[styles.tabItem, isStudy ? styles.studyTabItem : '']}
          onPress={this.tabPressHandle.bind(this, route)}
          activeOpacity={0.7}
        >
          <SpringView                 // 使用专门的可动画化的View组件
            style={[styles.iconItem, isStudy ? styles.study : '']}
            ref={springRef}
          >

            {descriptors[route.key].options.tabBarIcon(TabScene)}
          </SpringView>

          <Text style={{ color, fontSize: 12 }}>
            {descriptors[route.key].options.tabBarLabel}
          </Text>
        </TouchableOpacity>
      );
    }
  };
  render() {
    const { state: { routes } } = this.props;
    return (
      <View style={{ position: 'relative' }}>
        <View style={styles.tab} accessible={true} onStartShouldSetResponderCapture={() => false}>
          {routes && routes.map((route, index) => this.renderItem(route, index))}
        </View>
        {this.renderItem(routes[2], 2, true)}
      </View>
    );
  }
}

const styles = {
  tab: {
    elevation: 10,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black',  //  阴影颜色
    shadowOffset: { width: 0, height: 0 },  // 阴影偏移
    shadowOpacity: 1,  // 阴影不透明度
    shadowRadius: 10,  //  圆角
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-around',
    // borderTopColor: 'rgba(0, 0, 0, 0.3)',
    // borderTopWidth: 0.5,
    paddingBottom: ISIPX ? 34 : 0,
    // boxShadow: '0px 0px 20px 0px rgba(227,230,233,1)'
  },
  iconItem: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center'
  },
  study: {
    width: 42,
    height: 42,
    position: 'relative',
    backgroundColor: '#fff',
    borderRadius: 21,
  },
  studyTabItem: {
    position: 'absolute',
    bottom: 0,
    left: (WIDTH - SCALE(100)) / 2,
    right: WIDTH - SCALE(100),
    height: 63,
    elevation: 20,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
    shadowColor: 'black',  //  阴影颜色
    shadowOffset: { width: 10, height: 10 },  // 阴影偏移
    shadowOpacity: 1,  // 阴影不透明度
    shadowRadius: 10,  //  圆角
  },
  tabLine: {
    height: 0.5,
    backgroundColor: 'rgba(100, 100, 100, 0.3)',
  },
  tabItem: {
    height: 49,
    width: 49,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',

  },
};
