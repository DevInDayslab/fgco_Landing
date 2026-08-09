import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as getLeaderBySlug } from "./leadership-BZ3zHOD8.mjs";
import { t as LeaderProfilePage } from "./LeaderProfilePage-BsjA-cHL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ceo-BSq_ZOrA.js
var import_jsx_runtime = require_jsx_runtime();
function CeoPage() {
	const leader = getLeaderBySlug("ceo");
	if (!leader) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeaderProfilePage, { leader });
}
//#endregion
export { CeoPage as component };
