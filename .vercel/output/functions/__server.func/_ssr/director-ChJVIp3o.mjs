import { N as personSchema, c as JsonLd } from "./router-BsC5ZfFx.mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as getLeaderBySlug } from "./leadership-BZ3zHOD8.mjs";
import { t as LeaderProfilePage } from "./LeaderProfilePage-BsjA-cHL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/director-ChJVIp3o.js
var import_jsx_runtime = require_jsx_runtime();
function DirectorPage() {
	const leader = getLeaderBySlug("director");
	if (!leader) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: personSchema(leader) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderProfilePage, { leader })] });
}
//#endregion
export { DirectorPage as component };
