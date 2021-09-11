export const SQLI_REGEX = /\b(ALTER|CREATE|DELETE|DROP|INSERT(\s+INTO)?|MERGE|SELECT|UPDATE|UNION(\s+ALL)?|OR)\b/i;
export const URL_REGEX = /^((http:|https:|http:|https:)\/\/(www\.)?)?[a-z0-9]+([-.]{1}[a-z0-9]+)+\.[a-z]{2,255}(:[0-9]{1,5})?$/i;

export const TABLE = {
  USER: 'user',
  ACCOUNT: 'account',
}

export const NEED_ESCAPE = false;