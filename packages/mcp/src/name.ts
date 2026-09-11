/**
 * Re-export of the shared name helpers so server code has a stable local
 * import and the build script and the server never diverge on normalization.
 */
export {
  normalizeName,
  resolveName,
  nearestNames,
  slugify,
  rewriteHelperImport,
  DEFAULT_HELPER_IMPORT,
} from "../../moticon/scripts/lib/icon-source.mjs";
