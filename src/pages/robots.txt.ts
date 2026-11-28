import type { APIRoute } from "astro";

// 搜索引擎和 AI 爬虫全部放行。显式列出主要 AI 爬虫，表明本站欢迎被 AI 搜索引用。
const aiCrawlers = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "Baiduspider",
  "CCBot",
];

const getRobotsTxt = (sitemapURL: URL, llmsURL: URL) => `User-agent: *
Allow: /

${aiCrawlers.map(ua => `User-agent: ${ua}`).join("\n")}
Allow: /

# 站点内容索引（供大模型读取）：${llmsURL.href}
Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  const llmsURL = new URL("llms.txt", site);
  return new Response(getRobotsTxt(sitemapURL, llmsURL));
};
