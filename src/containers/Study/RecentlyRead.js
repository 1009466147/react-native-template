import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList
} from 'react-native';
import TitleView from '../../components/Common/Title'
import EmptyView from '../../components/Study/EmptyView'
export default class RecentlyRead extends Component {
  renderReadItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={[styles.readItem,index==0?{marginLeft:0}:{}]} activeOpacity={0.7}>
        <Image source={item.image} style={styles.itemImg} />
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
  render() {
    const data = [
      { image: require('../../assets/images/study/bg_xiaoben.png'), title:'鸡宝宝' },
      { image: require('../../assets/images/study/bg_xiaoben.png'), title:'鸡宝宝' },
      { image: require('../../assets/images/study/bg_xiaoben.png'), title:'鸡宝宝' },
      { image: require('../../assets/images/study/bg_xiaoben.png'), title:'鸡宝宝' },
      { image: require('../../assets/images/study/bg_xiaoben.png'), title:'鸡宝宝' },
      { image: require('../../assets/images/study/bg_xiaoben.png'), title:'鸡宝宝' },
    ]
    // const data = []
    
    return (
      <View style={styles.container}>
        <TitleView title="最近阅读" />
        {
          ( !data || data.length <= 0 )?
          (
            <EmptyView name="recentlyRead"/>
          ):(
            <FlatList
              data={data}
              keyExtractor={(item, index) => index}
              renderItem={this.renderReadItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          )
        }
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  readItem: {
    width: SCALE(190),
    height: SCALE(310),

    overflow: 'hidden',

    marginLeft: SCALE(40)
  },
  itemImg: {

    borderRadius: SCALE(10),
    width: SCALE(190),
    height: SCALE(270),

  },
  title: {

    marginTop: SCALE(10),
    fontSize: SCALE(24),
    fontWeight: "400",
    color: '#616263'
  }
})
