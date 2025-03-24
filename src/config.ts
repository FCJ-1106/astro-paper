export const SITE = {
  // 网站主要配置
  website: "https://astro-paper.pages.dev/", // 开发模式下不填，生产模式下替换真实网址 https://nhchealthscience.com/
  author: "Roger",
  profile: "", // 个人作品集或网站，没有就不填
  desc: "Explore NHC Health Science for fun, popular science articles on health. Enjoy humorous tips that make learning about health easy for everyone!", // 网站描述
  title: "NHC Health Science | Humorous Popular Science on Health",
  ogImage: "default-image-1.png", // 网站的默认 OG 图像。适用于社交媒体共享。图像可以是外部图像URL，也可以放在/public目录下。
  lightAndDarkMode: true, // 是否启用明暗模式切换
  postPerIndex: 4,  // 首页recent下显示的文章数量
  postPerPage: 4, // 文章页每页显示的文章数量
  scheduledPostMargin: 15 * 60 * 1000, // md文章的pubDatetime发布时间在当前系统时间未来15分钟内，则可见
  showArchives: true, // 是否显示Archive归档菜单
  showSearch: false, // 是否展示搜索框
  showBackButton: true, // 是否在每个博客文章中显示Go back按钮
  editPost: {
    url: "https://github.com/satnaing/astro-paper/edit/main/src/content/blog",  // 编辑文章的链接，当前不可用
    text: "Suggest Changes",  // 编辑文章的链接文本
    appendFilePath: true, // 是否在编辑链接中附加文件路径
  },
  dynamicOgImage: true, // 是否启用动态OG图像，文章多了会变得很慢一张图片大概1秒，慎用！
} as const;
