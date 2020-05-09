
import RefreshListView from "../../components/Refresh/RefreshListView";
import RefreshState from "../../components/Refresh/RefreshState";
import React, {Component} from 'react';
import {TouchableHighlight, View, Image, Text, StyleSheet} from 'react-native';

const Color = {
  themeColor: '#268dcd',
  separatorColor: '#e0e0e0',
  backgroundColor: '#f3f3f3'
}
class MovieItemCell extends Component {
  
  render() {
    let {movie} = this.props;
    let hasAverageScore = (movie.rating.average !== 0);
    return (
      <TouchableHighlight onPress={this.props.onPress}>
        <View style={styles.container}>
          <Image
            source={require('../../assets/images/study/bg_xiaoben.png')}
            style={styles.thumbnail}
          />
          <View style={styles.rightContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.year}>{movie.year}</Text>
            {
              hasAverageScore ?
                (<View style={styles.horizontalView}>
                  <Text style={styles.titleTag}>评分：</Text>
                  <Text style={styles.score}>{movie.rating.average}</Text>
                </View>) :
                (<View style={styles.horizontalView}>
                  <Text style={styles.titleTag}>暂无评分</Text>
                </View>)
            }
            <View style={styles.horizontalView}>
              <Text style={styles.titleTag}>导演：</Text>
              <Text style={styles.name}>{movie.directorNames}</Text>
            </View>
            <View style={styles.horizontalView}>
              <Text style={styles.titleTag}>主演：</Text>
              <Text style={styles.name}>{movie.actorNames}</Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: Color.separatorColor
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
export default class Me extends Component {
  
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
  
  render() {
    return (
      <RefreshListView
        ref={(ref) => {this.listView = ref}}
        data={this.state.movieList}
        renderItem={this._renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={this._renderEmptyView}
        onHeaderRefresh={() => { this.loadDisplayingMovies() }}
        onFooterRefresh={() => { this.loadDisplayingMovies() }}
      />
    )
  }
  
  _renderItem = (item) => {
    return (
      <MovieItemCell movie={item.item} onPress={() => {
        console.log('点击了电影----' + item.item.title);
      }}/>
    )
  };
  
  /// 渲染一个空白页，当列表无数据的时候显示。这里简单写成一个View控件
  _renderEmptyView = (item) => {
    return <View/>
  };
  
  /**
   * 加载正在上映的电影列表，此处默认城市为北京，取20条数据显示
   */
  loadDisplayingMovies() {
    let that = this;
    setTimeout(()=>{
      let json = {
        subjects:[
          {id:123,directors:[{name:'大苏打'},{name:'的撒大'},{name:'大苏打'}],casts:[{name:'大苏打的'},{name:'说的'}],images:{large:require('../../assets/images/study/bg_xiaoben.png')},title:'dsaq的撒',year:'2019-02-10',rating:{average:5}},
          {id:123,directors:[{name:'大苏打'},{name:'的撒大'},{name:'大苏打'}],casts:[{name:'大苏打的'},{name:'说的'}],images:{large:require('../../assets/images/study/bg_xiaoben.png')},title:'dsaq的撒',year:'2019-02-10',rating:{average:5}},
          {id:123,directors:[{name:'大苏打'},{name:'的撒大'},{name:'大苏打'}],casts:[{name:'大苏打的'},{name:'说的'}],images:{large:require('../../assets/images/study/bg_xiaoben.png')},title:'dsaq的撒',year:'2019-02-10',rating:{average:5}},
          {id:123,directors:[{name:'大苏打'},{name:'的撒大'},{name:'大苏打'}],casts:[{name:'大苏打的'},{name:'说的'}],images:{large:require('../../assets/images/study/bg_xiaoben.png')},title:'dsaq的撒',year:'2019-02-10',rating:{average:5}},
          {id:123,directors:[{name:'大苏打'},{name:'的撒大'},{name:'大苏打'}],casts:[{name:'大苏打的'},{name:'说的'}],images:{large:require('../../assets/images/study/bg_xiaoben.png')},title:'dsaq的撒',year:'2019-02-10',rating:{average:5}},
          {id:123,directors:[{name:'大苏打'},{name:'的撒大'},{name:'大苏打'}],casts:[{name:'大苏打的'},{name:'说的'}],images:{large:require('../../assets/images/study/bg_xiaoben.png')},title:'dsaq的撒',year:'2019-02-10',rating:{average:5}},
          {id:123,directors:[{name:'大苏打'},{name:'的撒大'},{name:'大苏打'}],casts:[{name:'大苏打的'},{name:'说的'}],images:{large:require('../../assets/images/study/bg_xiaoben.png')},title:'dsaq的撒',year:'2019-02-10',rating:{average:5}},
        ],
        total:10,

      }
      let movies = [];
      for (let idx in json.subjects) {
        let movieItem = json.subjects[idx];
        let directors = ""; // 导演
        for (let index in movieItem.directors) {
          // 得到每一条电影的数据
          let director = movieItem.directors[index];
          // 将多个导演的名字用空格分隔开显示
          if (directors === "") {
            directors = directors + director.name
          } else {
            directors = directors + " " + director.name
          }
        }
        movieItem["directorNames"] = directors;
        
        // 拼装主演的演员名字，多个名字用空格分隔显示
        let actors = "";
        for (let index in movieItem.casts) {
          let actor = movieItem.casts[index];
          if (actors === "") {
            actors = actors + actor.name
          } else {
            actors = actors + " " + actor.name
          }
        }
        movieItem["actorNames"] = actors;
        movies.push(movieItem)
      }
      // 获取总的条数
      let totalCount = json.total;
      
      // 当前已经加载的条数
      let currentCount = this.state.movieList.length;
      
      // 根据已经加载的条数和总条数的比较，判断是否还有下一页
      let footerState = RefreshState.Idle;
      let startPage = this.state.startPage;
      console.log(currentCount + movies.length , totalCount)
      if (currentCount + movies.length < totalCount) {
        // 还有数据可以加载
        footerState = RefreshState.CanLoadMore;
        // 下次加载从第几条数据开始
        startPage = startPage+ movies.length;
      } else {
        footerState = RefreshState.NoMoreData;
      }
      // 更新movieList的值
      let movieList = this.state.movieList.concat(movies);
      that.setState({
        movieList: movieList,
        startPage: startPage
      });
      that.listView.endRefreshing(footerState);
    },3000)

  }
}