import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native'

const Study = (props) => {
  return (
    <View style={styles.title}>
      <Text style={styles.titleTxt}>{props.title}</Text>
      {props.children}
    </View>
  )
}
export default Study

const styles = StyleSheet.create({
  title: {
 
    flex: 1,
    height: SCALE(34),
    paddingTop: SCALE(60),
    paddingBottom: SCALE(40),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleTxt: {
    fontSize: FONT(36),
    fontWeight: "500",
    color: 'rgba(36, 37, 38, 1)'
  }
})