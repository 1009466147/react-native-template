import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import EmptyData from './EmptyData'

export default class Study extends Component {

  render() {
    const { name } = this.props;
    const { source, texts, buttons } = EmptyData[name];

    return (
      <View style={styles.container} >
        <Image source={source} style={styles.img} />
        {
          texts.map((item, index) => <Text key={index} style={styles.txt}>{item}</Text>)
        }
        <View style={styles.btnContent}>
          {
            buttons.map((item, index) => {
              return (
                <TouchableOpacity onPress={item.handle} style={styles.btnItem} key={index}>
                  <Text style={styles.btnTxt}>{item.text}</Text>
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(248,248,248,1)',
    borderRadius: SCALE(20),
    position: 'relative',
    height: SCALE(470),
    // justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: SCALE(240),
    height: SCALE(240),
    marginTop: SCALE(20)
  },
  txt: {
    fontSize: SCALE(28),
    alignItems: 'center',
    color: 'rgba(51,51,51,1)',
    margin: 'auto'
  },
  btnContent: {
    position: 'absolute',
    bottom: SCALE(40),
    flexDirection: 'row',
    left: 0,
    right: 0,
    justifyContent: 'space-evenly'
  },
  btnItem: {
    width: SCALE(240),
    height: SCALE(60),
    borderColor: 'rgba(47,183,104,1)',
    borderWidth: 1,
    borderRadius: SCALE(30),
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTxt: {
    fontSize: SCALE(24),
    color: 'rgba(47,183,104,1)'
  }
})
