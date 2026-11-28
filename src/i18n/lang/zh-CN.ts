import type { UIStrings } from "../types";

export default {
  nav: {
    home: "首页",
    posts: "文章",
    tags: "分类",
    about: "关于",
    archives: "归档",
    search: "搜索",
  },
  post: {
    publishedAt: "发布于",
    updatedAt: "更新于",
    sharePostIntro: "分享：",
    sharePostOn: "分享到 {{platform}}",
    sharePostViaEmail: "通过邮件分享",
    tagLabel: "分类",
    backToTop: "回到顶部",
    tableOfContents: "目录",
    goBack: "返回",
    editPage: "编辑本页",
    previousPost: "上一篇",
    nextPost: "下一篇",
  },
  pagination: {
    prev: "上一页",
    next: "下一页",
    page: "页",
  },
  home: {
    socialLinks: "联系方式",
    featured: "精选",
    recentPosts: "最新文章",
    allPosts: "全部文章",
  },
  footer: {
    copyright: "版权所有",
    allRightsReserved: "保留所有权利。",
  },
  pages: {
    tagTitle: "分类",
    tagDesc: "业务环节：",

    tagsTitle: "分类",
    tagsDesc: "按业务环节查看文章。",

    postsTitle: "全部文章",
    postsDesc: "按发布时间排列的全部文章。",

    archivesTitle: "归档",
    archivesDesc: "按月份归档的全部文章。",

    searchTitle: "搜索",
    searchDesc: "搜索工具名或关键词……",
  },
  a11y: {
    skipToContent: "跳到正文",
    skipTableOfContents: "跳过目录",
    openMenu: "打开菜单",
    closeMenu: "关闭菜单",
    toggleTheme: "切换深浅色",
    searchPlaceholder: "搜索文章……",
    noResults: "没有找到相关文章",
    goToPreviousPage: "上一页",
    goToNextPage: "下一页",
  },
  notFound: {
    title: "404",
    message: "页面不存在",
    goHome: "回到首页",
  },
} satisfies UIStrings;
