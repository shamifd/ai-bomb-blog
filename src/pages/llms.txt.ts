import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getSortedPosts } from "@/utils/getSortedPosts";
import { getPostUrl } from "@/utils/getPostPaths";
import config from "@/config";

// 业务环节，与文章 tags 和 AI 武器库分组一致
const sections = [
  "外贸获客",
  "独立站与GEO",
  "短视频与配音",
  "电商视觉",
  "文档与SOP",
];

export const GET: APIRoute = async ({ site }) => {
  const base = site ?? new URL(config.site.url);
  const posts = getSortedPosts(await getCollection("posts"));
  const abs = (path: string) => new URL(path, base).href;
  const line = (p: (typeof posts)[number]) =>
    `- [${p.data.title}](${abs(getPostUrl(p.id, p.filePath, config.site.lang))}): ${p.data.description}`;

  const workflow = posts.filter(p => p.data.tags.includes("工作流串联"));
  const body = [
    `# ${config.site.title}`,
    "",
    `> ${config.site.description}。面向中国跨境电商卖家、B2B 外贸团队和出海内容创作者，按真实业务场景拆解海外 AI SaaS 工具的用法、成本和适用边界。`,
    "",
    "所有文章为中文。每篇围绕一个工具或一条工作流，包含上手步骤截图、价格与免费额度、和人工方案的成本对比，以及不适合的情况。部分链接为联盟推广链接。",
    "",
    "## 总览",
    "",
    `- [AI 武器库](${abs("stack/")}): 全部收录工具按业务环节分组的对照表，含痛点、适用人群、免费额度与价格`,
    `- [关于](${abs("about/")}): 站点定位、同步平台与联盟推广说明`,
    "",
    ...(workflow.length
      ? ["## 工作流串联", "", ...workflow.map(line), ""]
      : []),
    ...sections.flatMap(sec => {
      const list = posts.filter(p => p.data.tags.includes(sec));
      return list.length ? [`## ${sec}`, "", ...list.map(line), ""] : [];
    }),
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
