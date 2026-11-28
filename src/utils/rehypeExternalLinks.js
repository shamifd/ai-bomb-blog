/**
 * 站外链接新窗口打开；联盟推广链接加 rel="sponsored nofollow"（Google 对付费/联盟链接的要求）。
 * 识别规则：带常见联盟参数（via、fpr、fp_ref、ref、aff、atp），或属于联盟短链域名。
 */
const SITE_HOST = "aibomblab.com";
const AFFILIATE_PARAMS = ["via", "fpr", "fp_ref", "ref", "aff", "atp"];
const AFFILIATE_HOSTS = ["tolt.link", "try.elevenlabs.io"];

const isAffiliate = url =>
  AFFILIATE_HOSTS.includes(url.hostname) ||
  AFFILIATE_PARAMS.some(p => url.searchParams.has(p));

export const rehypeExternalLinks = () => tree => {
  const visit = node => {
    if (node.type === "element" && node.tagName === "a") {
      const href = node.properties?.href;
      if (typeof href === "string" && /^https?:\/\//.test(href)) {
        let url;
        try {
          url = new URL(href);
        } catch {
          url = null;
        }
        if (url && !url.hostname.endsWith(SITE_HOST)) {
          const rel = ["noopener"];
          if (isAffiliate(url)) rel.unshift("sponsored", "nofollow");
          node.properties.rel = rel;
          node.properties.target = "_blank";
        }
      }
    }
    node.children?.forEach(visit);
  };
  visit(tree);
};
