module.exports = {
  myWork: {
    source: require('../../assets/images/study/pic_empty_wdzy.png'),
    texts: ['当前没有收到任何作业','是温习和巩固的好机会哦'],
    buttons:[
      { text:'复习错题', handle: ()=>{} },
      { text:'去阅读', handle: ()=>{} },
    ]
  },
  recentlyRead: {
    source: require('../../assets/images/study/pic_empty_zjyd.png'),
    texts: ['您还没有任何阅读记录噢！'],
    buttons:[
      { text:'打开书架', handle: ()=>{} },
      { text:'去找书', handle: ()=>{} },
    ]
  }
}