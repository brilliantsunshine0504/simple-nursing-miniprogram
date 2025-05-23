# 简单护理 - 微信小程序

"简单护理"是一款面向护理专业学生和从业人员的智能学习小程序，采用卡片式刷题+AI智能解析的学习模式，帮助用户高效备考各类护理相关考试。

## 特色功能

1. **卡片式刷题**：左右滑动切换题目，界面简洁直观，提升学习效率
2. **AI智能解析**：结合人工智能技术，针对每道题目提供深度解析
3. **知识地图**：将相关知识点进行关联展示，帮助用户形成知识网络
4. **个性化学习**：根据用户的学习记录和错题情况，智能推荐练习内容
5. **多种题型支持**：单选题、多选题、判断题、问答题等多种题型

## 项目结构

```
├── app.js                 // 应用程序逻辑
├── app.json               // 全局配置
├── app.wxss               // 全局样式
├── pages                  // 页面文件夹
│   ├── welcome            // 欢迎页
│   ├── login              // 登录页
│   ├── home               // 首页/仪表盘
│   ├── flashcard          // 刷题页面
│   ├── explanation        // AI智能解析页面
│   ├── knowledge-map      // 知识地图页面
│   ├── question-bank      // 题库中心页面
│   ├── profile            // 个人中心页面
│   └── settings           // 设置页面
├── images                 // 图片资源文件夹
├── utils                  // 工具函数
└── components             // 自定义组件
```

## 页面说明

1. **欢迎页/引导页**：用户首次打开应用时的引导页面
2. **登录/注册页**：用户登录和注册界面
3. **首页/仪表盘**：显示学习进度、推荐题库和学习统计
4. **刷题界面**：核心功能，卡片式刷题界面
5. **AI智能解析**：错题的AI解析和拓展知识
6. **知识地图**：错题举一反三的环形知识关联图
7. **题库中心**：题库分类和选择界面
8. **个人中心**：用户信息和学习数据
9. **设置页面**：应用设置和个性化配置

## 功能模块

### 1. 卡片式刷题

- 支持左右滑动切换题目
- 支持题目收藏和错题标记
- 支持多种题型（单选、多选、判断、问答）
- 提供即时的答案反馈
- 自动记录学习轨迹

### 2. AI智能解析

- 提供题目的详细解析
- 包含概念讲解、答案分析、相关知识点、临床应用和记忆技巧
- 支持语音朗读功能
- 提供上下题切换功能

### 3. 知识地图

- 可视化展示知识点之间的关联关系
- 帮助用户建立完整的知识体系
- 支持知识点的扩展学习
- 显示重点知识和易错点

### 4. 个性化学习

- 根据用户答题情况生成学习报告
- 智能推荐需要强化的知识点
- 提供个性化的学习计划
- 展示学习进度和成果

## 使用技术

- 微信小程序原生框架
- 云开发后端服务
- 腾讯AI接口
- 小程序云存储

## 安装与运行

1. 克隆本项目到本地
2. 使用微信开发者工具打开项目
3. 在微信开发者工具中点击"编译"运行项目

## 注意事项

- 本项目使用了微信小程序的云开发功能，确保已开通云开发服务
- 首次使用需要导入题库数据
- 使用前请在project.config.json中修改为自己的AppID

## 贡献指南

欢迎提交Issue和Pull Request，一起完善这个项目！

## 版权信息

© 2023 简单护理团队 版权所有