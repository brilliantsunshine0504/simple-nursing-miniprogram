/**
 * 常用工具函数
 */

/**
 * 格式化时间
 * @param {Date} date 日期对象
 * @param {String} format 格式字符串，如 'YYYY-MM-DD HH:mm:ss'
 * @return {String} 格式化后的时间字符串
 */
const formatTime = (date, format = 'YYYY-MM-DD HH:mm:ss') => {
  if (!date) return '';
  if (typeof date === 'string') {
    date = new Date(date.replace(/-/g, '/'));
  }
  if (typeof date === 'number') {
    date = new Date(date);
  }
  
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return format
    .replace('YYYY', year)
    .replace('MM', padZero(month))
    .replace('DD', padZero(day))
    .replace('HH', padZero(hour))
    .replace('mm', padZero(minute))
    .replace('ss', padZero(second));
};

/**
 * 补零函数
 * @param {Number} n 数字
 * @return {String} 补零后的字符串
 */
const padZero = n => {
  return n < 10 ? '0' + n : '' + n;
};

/**
 * 节流函数
 * @param {Function} fn 需要节流的函数
 * @param {Number} wait 等待时间
 * @return {Function} 节流后的函数
 */
const throttle = (fn, wait = 500) => {
  let timer = null;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null;
    }, wait);
  };
};

/**
 * 防抖函数
 * @param {Function} fn 需要防抖的函数
 * @param {Number} wait 等待时间
 * @return {Function} 防抖后的函数
 */
const debounce = (fn, wait = 500) => {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
};

/**
 * 检查手机号格式
 * @param {String} phoneNumber 手机号
 * @return {Boolean} 是否符合格式
 */
const isValidPhoneNumber = phoneNumber => {
  return /^1\d{10}$/.test(phoneNumber);
};

/**
 * 检查邮箱格式
 * @param {String} email 邮箱
 * @return {Boolean} 是否符合格式
 */
const isValidEmail = email => {
  return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
};

/**
 * 随机生成字符串
 * @param {Number} length 长度
 * @return {String} 随机字符串
 */
const randomString = (length = 16) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

/**
 * 获取当前页面路径
 * @return {String} 当前页面路径
 */
const getCurrentPageUrl = () => {
  const pages = getCurrentPages();
  const currentPage = pages[pages.length - 1];
  return currentPage.route;
};

/**
 * 显示加载提示
 * @param {String} title 提示文本
 */
const showLoading = (title = '加载中...') => {
  wx.showLoading({
    title: title,
    mask: true
  });
};

/**
 * 隐藏加载提示
 */
const hideLoading = () => {
  wx.hideLoading();
};

/**
 * 显示提示信息
 * @param {String} title 提示文本
 * @param {String} icon 图标类型
 * @param {Number} duration 显示时长
 */
const showToast = (title, icon = 'none', duration = 2000) => {
  wx.showToast({
    title: title,
    icon: icon,
    duration: duration
  });
};

/**
 * 显示确认对话框
 * @param {String} title 标题
 * @param {String} content 内容
 * @param {Boolean} showCancel 是否显示取消按钮
 * @return {Promise} Promise对象
 */
const showModal = (title, content, showCancel = true) => {
  return new Promise((resolve, reject) => {
    wx.showModal({
      title: title,
      content: content,
      showCancel: showCancel,
      success: (res) => {
        if (res.confirm) {
          resolve(true);
        } else {
          resolve(false);
        }
      },
      fail: reject
    });
  });
};

/**
 * 设置导航栏标题
 * @param {String} title 标题
 */
const setNavigationBarTitle = (title) => {
  wx.setNavigationBarTitle({
    title: title
  });
};

/**
 * 设置TabBar徽标
 * @param {Number} index tabBar索引
 * @param {String|Number} text 徽标文本
 */
const setTabBarBadge = (index, text) => {
  if (!text) {
    wx.removeTabBarBadge({
      index: index
    });
    return;
  }
  
  wx.setTabBarBadge({
    index: index,
    text: text.toString()
  });
};

/**
 * 深拷贝对象
 * @param {Object} obj 需要拷贝的对象
 * @return {Object} 拷贝后的对象
 */
const deepClone = (obj) => {
  if (obj === null || typeof obj !== 'object') return obj;
  
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item));
  }
  
  if (obj instanceof Object) {
    const copy = {};
    Object.keys(obj).forEach(key => {
      copy[key] = deepClone(obj[key]);
    });
    return copy;
  }
  
  return obj;
};

/**
 * 判断对象是否为空
 * @param {Object} obj 对象
 * @return {Boolean} 是否为空
 */
const isEmpty = (obj) => {
  if (obj === null || obj === undefined) return true;
  if (typeof obj === 'string') return obj.trim() === '';
  if (Array.isArray(obj)) return obj.length === 0;
  if (typeof obj === 'object') return Object.keys(obj).length === 0;
  return false;
};

module.exports = {
  formatTime,
  throttle,
  debounce,
  isValidPhoneNumber,
  isValidEmail,
  randomString,
  getCurrentPageUrl,
  showLoading,
  hideLoading,
  showToast,
  showModal,
  setNavigationBarTitle,
  setTabBarBadge,
  deepClone,
  isEmpty
};