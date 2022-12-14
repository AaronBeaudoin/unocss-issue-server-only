import { renderToString } from "@vue/server-renderer";
import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr";
import { createSSRApp, h } from "vue";
import "uno.css";


export async function render(pageContext) {
  const page = createSSRApp({ render: _ => h(pageContext.Page, {}) });
  const pageHtml = dangerouslySkipEscape(await renderToString(page));
  return escapeInject`<html><body><div id="page">${pageHtml}</div></body></html>`;
}
