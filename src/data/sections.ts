// 五个业务环节：首页入口、文章卡片徽标、llms.txt 分组共用。
// name 必须与文章 frontmatter 里的 tags 写法一致。
export type Section = { name: string; blurb: string };

export const SECTIONS: Section[] = [
  { name: "外贸获客", blurb: "找买家、抓邮箱、发开发信、做报价页" },
  { name: "独立站与GEO", blurb: "看同行流量，让 AI 搜索推荐你" },
  { name: "短视频与配音", blurb: "切片、AI 短剧、带货口播、多语言配音" },
  { name: "电商视觉", blurb: "商品场景图、图片放大到印刷级" },
  { name: "文档与SOP", blurb: "长文研读、培训手册、演示文稿" },
];

export const WORKFLOW_TAG = "工作流串联";

export const sectionOf = (tags: string[]) =>
  SECTIONS.find(s => tags.includes(s.name))?.name;
