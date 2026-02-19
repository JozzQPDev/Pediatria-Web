import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BPnvkv-1.mjs';
import { manifest } from './manifest_DqqY2bmS.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/blog/_slug_.astro.mjs');
const _page2 = () => import('./pages/blogs.astro.mjs');
const _page3 = () => import('./pages/busqueda.astro.mjs');
const _page4 = () => import('./pages/contacto.astro.mjs');
const _page5 = () => import('./pages/equipo.astro.mjs');
const _page6 = () => import('./pages/nosotros.astro.mjs');
const _page7 = () => import('./pages/servicios/_slug_.astro.mjs');
const _page8 = () => import('./pages/servicios.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/[slug].astro", _page1],
    ["src/pages/blogs.astro", _page2],
    ["src/pages/busqueda.astro", _page3],
    ["src/pages/contacto.astro", _page4],
    ["src/pages/equipo.astro", _page5],
    ["src/pages/nosotros.astro", _page6],
    ["src/pages/servicios/[slug].astro", _page7],
    ["src/pages/servicios.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "6904b129-be5d-4640-b371-fb7d8207b7df",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
