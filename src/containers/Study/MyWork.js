import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import TitleView from '../../components/Common/Title'
import EmptyView from '../../components/Study/EmptyView'
import EZSwiper from '../../components/EasySwiper/index'
import { width } from '../../utils/Device';

export default class MyWork extends Component {
  renderWorkItem = (item, index) => {
    let imgSource = require('../../assets/images/study/bg_xiaofu.png');
    let stateTxt = '校辅'
    switch (item.type) {
      case 1:
        imgSource = require('../../assets/images/study/bg_xiaofu.png');
        stateTxt = '校辅'
        break;
      case 2:
        imgSource = require('../../assets/images/study/bg_xiaoben.png');
        stateTxt = '校本'
        break;
      case 3:
        imgSource = require('../../assets/images/study/bg_yuedu.png');
        stateTxt = '阅读'
        break;
    }
    return (
      <TouchableOpacity style={[styles.workItem, index == 0 ? { marginLeft: 0 } : {}]} activeOpacity={0.7}>

        <Text style={styles.stateTxt}>{stateTxt}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>{item.time}</Text>
        <Text style={styles.showDetail}>查看详情 ></Text>
        <Image source={imgSource} style={styles.itemImg} />
      </TouchableOpacity>
    )
  }
  onPressRow = () => {

  }
  render() {
    const workData = [
      { type: 1, title: '数学作业', time: '提交截止：明天07:00', id: '123' },
      { type: 2, title: '语文作业', time: '提交截止：后天09:00', id: '123' },
      { type: 3, title: '阅读作业', time: '提交截止：后天09:00', id: '123' },
    ]
    // const workData = []

    return (
      <View style={styles.container}>
        <TitleView title="我的作业">
          <TouchableOpacity style={{ width: 60 }}>
            <Text style={styles.record}>记录 ></Text>
          </TouchableOpacity>
        </TitleView>
        {
          (!workData || workData.length <= 0) ?
            (
              <EmptyView name="myWork" />
            ) : (
              <EZSwiper style={[styles.swiper, { width: width, height: SCALE(600) }]}
                dataSource={workData}
                width={width}
                height={SCALE(600)}
                renderRow={this.renderWorkItem}
                onPress={this.onPressRow}
                index={0}
                horizontal={true}
                loop={true}
                autoplayTimeout={0}
                offset={-(width - SCALE(450) - ((width - SCALE(450)) / 2))}
                cardParams={{ cardSide: SCALE(450), cardSmallSide: SCALE(550), cardSpace: -((width - SCALE(450)) / 2) + 20 }}
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
  record: {
    color: '#A3A6A9',
    fontSize: FONT(28)
  },
  workItem: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    borderRadius: SCALE(20),
    // marginLeft: SCALE(40)
  },
  itemImg: {
    position: 'absolute', 
    top: 0, 
    right: 0, 
    bottom: 0, 
    left: -SCALE(19), 
    width: undefined, 
    height: undefined,
    zIndex: -1
  },
  stateTxt: {
    width: SCALE(100),
    height: SCALE(50),
    // marginLeft: SCALE(20),
    marginTop: SCALE(7),
    backgroundColor: 'rgba(255, 255, 255, .4)',
    borderTopLeftRadius: SCALE(20),
    borderBottomRightRadius: SCALE(20),
    textAlign: 'center',
    lineHeight: SCALE(50),
    fontSize: SCALE(28),
    fontWeight: "400",
    color: 'rgba(255,255,255,1)'
  },
  title: {
    marginTop: SCALE(20),
    marginLeft: SCALE(60),
    fontSize: SCALE(60),

    fontWeight: '400',
    color: 'rgba(255,255,255,1)'
  },
  time: {
    marginTop: SCALE(10),
    marginLeft: SCALE(60),
    fontSize: SCALE(24),
    opacity: .8,
    fontWeight: '400',
    color: '#FEFEFE'
  },
  showDetail: {
    marginTop: SCALE(45),
    marginLeft: SCALE(60),
    fontSize: SCALE(28),
    fontWeight: '400',
    color: '#FFFFFF'
  }
})
