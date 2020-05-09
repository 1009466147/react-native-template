import RefreshSectionView from "../../components/Refresh/RefreshSectionView";
import RefreshState from "../../components/Refresh/RefreshState";
import React, { Component } from 'react';
import { TouchableHighlight, View, Image, Text, StyleSheet } from 'react-native';

export default class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],  // 电影列表的数据源
      startPage: 0,   // 从第几页开始加载
      pageSize: 10,   // 每页加载多少条数据
    };
  }

  componentDidMount() {
    this.listView.beginHeaderRefresh();
  }
  renderItem = (info) => {
    let item = info.item.name;
    return (
      <Text style={styles.itemStyle}>{item}</Text>
    )
  };

  render() {
    return (
      <RefreshSectionView
        ref={(ref) => { this.listView = ref }}
        data={this.state.movieList}
        renderItem={this.renderItem}
        keyExtractor={(item) => item.name}
        ListEmptyComponent={this._renderEmptyView}
        onHeaderRefresh={() => { this.loadDisplayingMovies() }}
        disabFooter={true}
        // onFooterRefresh={() => { this.loadDisplayingMovies() }}
        ItemSeparatorComponent={() => <View><Text>1321</Text></View>}
        ListHeaderComponent={() => <View style={{ backgroundColor: '#25B960', alignItems: 'center', height: 30 }}><Text style={{ fontSize: 18, color: '#ffffff' }}>通讯录</Text></View>}
      />
    )
  }

  /// 渲染一个空白页，当列表无数据的时候显示。这里简单写成一个View控件
  _renderEmptyView = (item) => {
    return <View />
  };

  /**
   * 加载正在上映的电影列表，此处默认城市为北京，取20条数据显示
   */
  loadDisplayingMovies() {
    let that = this;
    setTimeout(() => {
      let sections = [
        { typeName: "导演", persons: [{ name: "唐季礼" }, { name: "唐季礼" }, { name: "唐季礼" }, { name: "唐季礼" }, { name: "唐季礼" }, { name: "唐季礼" }, { name: "唐季礼" }, { name: "唐季礼" }, { name: "唐季礼" }, { name: "唐季礼" }, { name: "唐季礼" }, { name: "唐季礼" }] },
        { typeName: "演员", persons: [{ name: "成龙" }, { name: "李治廷" }] }];

      //这里要对数组转换一下，
      // 因为SectionList要求item必须是data的数组，
      // 如果把data写成其他单词则会报错
      //不管你是否使用一个或多个不同的section，都要重新定义以下section如：
      // tempData.key = item.typeName;    
      // temData.key =`${item.typeName} ${item.typeNameEn}`
      //   tempData.typeName = item.typeName; tempData.key = item.typeNameEn
      let tempArr = sections.map((item, index) => {
        let tempData = {};
        tempData.key = item.typeName;
        tempData.data = item.persons;
        return tempData
      });


      that.setState({
        movieList: tempArr,
        startPage: 1
      });
      that.listView.endRefreshing(RefreshState.Idle);
    }, 3000)
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    borderBottomWidth: 1,
  },
  thumbnail: {
    width: 110,
    height: 150,
    backgroundColor: '#f0f0f0',
  },
  rightContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'left',
  },
  year: {
    textAlign: 'left',
    color: '#777777',
    marginTop: 10,
  },
  horizontalView: {
    flexDirection: 'row',
    marginTop: 10
  },
  titleTag: {
    color: '#666666',
  },
  score: {
    color: '#ff8800',
    fontWeight: 'bold',
  },
  name: {
    color: '#333333',
    flex: 1
  },
});