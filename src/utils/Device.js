import { 
  Dimensions, 
  Platform, 
  StatusBar,
  PixelRatio
} from 'react-native';

export const { width, height } = Dimensions.get('window');

export const OS = Platform.OS;
export const ios = (OS == 'ios');
export const android = (OS == 'android');
export const isIPhoneX = (ios && height == 812 && width == 375)
export const statusBarHeight = (ios ? (isIPhoneX ? 44 : 20) : StatusBar.currentHeight);

let fontScale = PixelRatio.getFontScale();                      //返回字体大小缩放比例
let pixelRatio = PixelRatio.get();      //当前设备的像素密度
const defaultPixel = 2;
//iphone6的像素密度
//px转换成dp
const defaultW = Platform.OS === 'ios' ? 750 : 720;
const defaultH = Platform.OS === 'ios' ? 1334 : 1280;
const w2 = defaultW / defaultPixel;
const h2 = defaultH / defaultPixel;
const scale = Math.min(height / h2, width / w2);   //获取缩放比例

export function setSpText(size) {
  // size = size/pixelRatio;
  // size = Math.round((size * scale + 0.5) * pixelRatio / fontScale);
  size = Math.round((size * scale) / fontScale / defaultPixel);
  // size = Math.round(size * scale / fontScale + 0.5);
  return size;
}
// export function setSpText(size) {

//   var scaleWidth = screenW / designWidth;
//   var scaleHeight = screenH / designHeight;
//   var scale = Math.min(scaleWidth, scaleHeight);
//   size = Math.round(size * scale / fontScale + 0.5);
//   return size;
// }

//noinspection JSAnnotator
export function scaleSize(size) {
  size = Math.round(size * scale + 0.5);
  return size / defaultPixel;
}

global.FONT = setSpText;

global.SCALE = scaleSize;

global.WIDTH = width;

global.HEIGHT = height;

global.ISIPX = isIPhoneX;

global.BARHEIGHT = statusBarHeight;