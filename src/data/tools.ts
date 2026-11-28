// 工具资料：文章速览卡、文末推广卡共用，以文章 frontmatter 的 tool 字段为键。
// 数据来源：AI 武器库表格 + 各篇正文。avoid（什么情况别买）只写原文有依据的，没有就留空不显示。
// subParam：联盟平台的追踪参数键名（见 进度.md 第三节）；没有约定的平台不加参数。
export type Tool = {
  name: string;
  fitFor: string;
  free: string;
  price: string;
  avoid?: string;
  url: string;
  subParam?: string;
  ctaLabel: string;
};

export const TOOLS: Record<string, Tool> = {
  "Snov.io": {
    name: "Snov.io",
    fitFor: "外贸 SOHO、B2B 业务员，要按客户官网批量找采购负责人邮箱",
    free: "注册送免费积分，不用绑卡",
    price: "$39/月起",
    url: "https://snov.io?fp_ref=ai_bomb",
    subParam: "sub_id",
    ctaLabel: "去官网免费试用",
  },
  Alsona: {
    name: "Alsona",
    fitFor: "主动开发型 B2B 团队、工厂外贸部，按海外企业招聘信号找买家",
    free: "7 天免费试用，可随时取消",
    price: "$99/月起",
    avoid: "只想低成本按域名抓邮箱的，先用入门级工具（如 Snov.io）",
    url: "https://www.alsona.com/?via=ai-bomb",
    subParam: "via_subid",
    ctaLabel: "去官网免费试用 7 天",
  },
  GenPage: {
    name: "GenPage",
    fitFor: "出口工厂、外贸业务员，给不同买家做英文询盘页",
    free: "免费创建首个页面",
    price: "",
    url: "https://tolt.link/ai-bomb",
    ctaLabel: "去官网免费建页",
  },
  Trendtrack: {
    name: "Trendtrack",
    fitFor: "Shopify 独立站卖家、投手，要看同行流量、热销款和在投广告",
    free: "免费 Chrome 插件，基础功能不用绑卡",
    price: "Pro $49/月起",
    avoid: "个人卖家日常看竞品，免费插件就够，不必升级",
    url: "https://trendtrack.io?fpr=samuel-106640",
    subParam: "sub_id",
    ctaLabel: "免费安装插件",
  },
  "Howseen AI": {
    name: "Howseen AI",
    fitFor: "品牌独立站、DTC 团队、高客单外贸 B2B 官网",
    free: "三个诊断工具免费；付费版 3 天免费试用",
    price: "€39/月起",
    avoid: "只想做一次摸底的，用免费检测工具就够，不必订阅",
    url: "https://howseen.ai/?ref=bluetti-259c",
    ctaLabel: "免费测 AI 可见度",
  },
  OpusClip: {
    name: "OpusClip",
    fitFor: "手里有英文长视频的出海品牌、社媒代运营与 MCN",
    free: "每月 60 积分，导出带水印",
    price: "Starter $15/月起（去水印）",
    avoid: "没有人声解说的纯产品展示片（B-Roll）切不好",
    url: "https://tolt.link/ai_bomb",
    ctaLabel: "去官网免费切片",
  },
  ElevenLabs: {
    name: "ElevenLabs",
    fitFor: "TikTok 投手、短剧团队、要做英文和多语言配音的跨境卖家",
    free: "免费版可试听，但禁止商用",
    price: "Starter $5/月起（含商用授权）；Creator $22/月",
    avoid: "要做商业带货视频的，别用免费版生成，事后补买会员不补授权",
    url: "https://try.elevenlabs.io/ai_bomb",
    subParam: "sid",
    ctaLabel: "去官网免费试听",
  },
  "Pollo AI": {
    name: "Pollo AI",
    fitFor: "短视频创作者、电商视觉团队，要在多个视频大模型之间切换",
    free: "注册送体验积分",
    price: "Lite 档年付折合每月十余美元",
    avoid: "别在手机 App 里内购订阅，在电脑网页端订",
    url: "https://pollo.ai?ref=njvjmdg",
    subParam: "tm_subid",
    ctaLabel: "网页端免费体验",
  },
  ScreenWeaver: {
    name: "ScreenWeaver",
    fitFor: "AI 短剧编剧、内容工作室，要先锁角色再出连续分镜",
    free: "永久免费版，可跑完整剧本拆解",
    price: "Auteur $39.99/月",
    avoid: "只测剧本拆解和前期分镜的，免费版就够",
    url: "https://screenweaver.ai?fpr=ai_bomb",
    subParam: "sub_id",
    ctaLabel: "去官网免费体验",
  },
  "UGCfy AI": {
    name: "UGCfy AI",
    fitFor: "跨境独立站、TikTok 卖家，要批量出欧美口播带货视频",
    free: "官网脚本与钩子生成器免费",
    price: "$59/月起（含商用授权）",
    avoid: "要展示拆装、穿搭版型的产品，纯 AI 口播不够，需混剪实拍",
    url: "https://ugcfy.ai/?ref=cxRJhe",
    ctaLabel: "去官网体验",
  },
  "Claid.ai": {
    name: "Claid.ai",
    fitFor: "独立站、亚马逊卖家，要把白底图做成场景图、放大模糊原图",
    free: "免费试用积分",
    price: "几十美元/月起（含商用授权）",
    avoid: "要真人手部握持、穿戴版型或透明材质的商品，仍需实拍",
    url: "https://claid.ai?via=ai_bomb",
    subParam: "via_subid",
    ctaLabel: "去官网免费试用",
  },
  "Let's Enhance": {
    name: "Let's Enhance",
    fitFor: "跨境 POD 卖家、设计师，要把图放大到 300 DPI 印刷级",
    free: "免费试用额度",
    price: "十几美元/月起（未用完积分可结转）",
    avoid: "已经糊成色块的废片救不回来；要做场景图选 Claid.ai",
    url: "https://letsenhance.io?via=ai_bomb",
    subParam: "via_subid",
    ctaLabel: "去官网免费试用",
  },
  Anara: {
    name: "Anara",
    fitFor: "招投标团队、科研硕博，要读百页英文文档并逐句溯源",
    free: "免费版可用，有文件大小和每日提问限制",
    price: "Pro $20/月",
    avoid: "偶尔读一两篇十几页的文章，免费版就够，不必升级",
    url: "https://anara.com?via=ai_bomb",
    subParam: "utm_source",
    ctaLabel: "去官网免费使用",
  },
  "Glitter AI": {
    name: "Glitter AI",
    fitFor: "跨境运营主管、客服培训、外贸技术支持，要快速出图文 SOP",
    free: "免费版可录制并自动生成图文步骤",
    price: "",
    url: "https://www.glitter.io/?via=ai-bomb",
    subParam: "via_subid",
    ctaLabel: "去官网免费录屏",
  },
  "Decktopus AI": {
    name: "Decktopus AI",
    fitFor: "要做商业提案、英文路演、季度汇报的职场人和跨境团队",
    free: "免费生成大纲，预览前 3 页",
    price: "Pro $24.99/月（年付更低）",
    avoid: "含复杂财务模型、多维数据透视表的汇报，导出后仍要在 PowerPoint 里补数据",
    url: "https://www.decktopus.com?via=ai-bomb",
    subParam: "via_subid",
    ctaLabel: "去官网免费体验",
  },
};

/** 拼接追踪参数：渠道_版位，如 blog_body、blog_cta */
export const trackedUrl = (tool: Tool, placement: string) => {
  if (!tool.subParam) return tool.url;
  const sep = tool.url.includes("?") ? "&" : "?";
  return `${tool.url}${sep}${tool.subParam}=blog_${placement}`;
};
