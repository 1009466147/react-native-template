// import moment from 'moment';

/**
 * 通用工具类
 */
export default class Func {
  /**
   * 不为空
   * @param val
   * @returns {boolean}
   */
  static notEmpty(val) {
    return !this.isEmpty(val);
  }

  static filterFunc(prefix, value) {
    if (value === '') {
      return undefined;
    }
    return value;
  }

  /**
   * 为空
   * @param val
   * @returns {boolean}
   */
  static isEmpty(val) {
    if (
      val === null ||
      typeof val === 'undefined' ||
      (typeof val === 'string' && val === '' && val !== 'undefined')
    ) {
      return true;
    }
    return false;
  }

  /**
   * 强转int型
   * @param val
   * @param defaultValue
   * @returns {number}
   */
  static toInt(val, defaultValue) {
    if (this.isEmpty(val)) {
      return defaultValue === undefined ? -1 : defaultValue;
    }
    const num = parseInt(val, 0);
    return Number.isNaN(num) ? (defaultValue === undefined ? -1 : defaultValue) : num;
  }

  /**
   * Json强转为Form类型
   * @param obj
   * @returns {FormData}
   */
  static toFormData(obj) {
    const data = new FormData();
    Object.keys(obj).forEach(key => {
      data.append(key, Array.isArray(obj[key]) ? obj[key].join(',') : obj[key]);
    });
    return data;
  }

  /**
   * 字符串转为date类
   * @param date
   * @param format
   * @returns {any}
   */
  // static moment(date, format = 'YYYY-MM-DD HH:mm:ss') {
  //   return date ? moment(date, format) : null;
  // }

  /**
   * date类转为字符串格式
   * @param date
   * @param format
   * @returns {null}
   */
  static format(date, format = 'YYYY-MM-DD HH:mm:ss') {
    return date ? date.format(format) : null;
  }

  /**
   * 根据逗号联合
   * @param arr
   * @returns {string}
   */
  static join(arr) {
    return arr ? arr.join(',') : '';
  }

  /**
   * 根据逗号分隔
   * @param str
   * @returns {string}
   */
  static split(str) {
    return str ? String(str).split(',') : '';
  }

  /**
   * 文件大小函数
   * @param bytes
   * @returns {string}
   */
  static formatBytes(bytes) {
    if(!bytes){
      return '';
    }
    if (bytes < 1024) return `${bytes} Bytes`;
    if (bytes < 1048576) return `${(bytes / 1024).toFixed(3)} KB`;
    if (bytes < 1073741824) return `${(bytes / 1048576).toFixed(3)} MB`;
    return `${(bytes / 1073741824).toFixed(3)} GB`;
  }
}
