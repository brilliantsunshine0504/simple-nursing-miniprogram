// app.js
App({
  onLaunch() {
    // 检查更新
    this.checkUpdate();
    
    // 检查是否有登录状态
    const token = wx.getStorageSync('token');
    this.globalData.isLoggedIn = !!token;
    
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    this.globalData.statusBarHeight = systemInfo.statusBarHeight;
    
    // 检查暗黑模式
    const isDarkMode = wx.getStorageSync('darkMode') === 'enabled';
    this.globalData.isDarkMode = isDarkMode;
    wx.setStorageSync('darkMode', isDarkMode ? 'enabled' : 'disabled');
  },
  
  // 检查更新
  checkUpdate() {
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager();
      updateManager.onCheckForUpdate(function (res) {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本已经准备好，是否重启应用？',
              success: function (res) {
                if (res.confirm) {
                  updateManager.applyUpdate();
                }
              }
            });
          });

          updateManager.onUpdateFailed(function () {
            wx.showModal({
              title: '更新提示',
              content: '新版本下载失败，请检查网络后重试',
              showCancel: false
            });
          });
        }
      });
    }
  },
  
  // 全局数据
  globalData: {
    userInfo: null,
    isLoggedIn: false,
    statusBarHeight: 0,
    isDarkMode: false,
    // 题库分类
    questionCategories: [
      { id: 1, name: '基础护理', icon: '/images/category_basic.png' },
      { id: 2, name: '内科护理', icon: '/images/category_internal.png' },
      { id: 3, name: '外科护理', icon: '/images/category_surgery.png' },
      { id: 4, name: '儿科护理', icon: '/images/category_pediatric.png' },
      { id: 5, name: '妇产科护理', icon: '/images/category_gynecology.png' },
      { id: 6, name: '急救护理', icon: '/images/category_emergency.png' },
      { id: 7, name: '老年护理', icon: '/images/category_elderly.png' },
      { id: 8, name: '社区护理', icon: '/images/category_community.png' }
    ]
  }
})