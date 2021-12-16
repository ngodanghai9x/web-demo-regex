export const SQLI_REGEX = /\b(ALTER|CREATE|DELETE|DROP|INSERT(\s+INTO)?|MERGE|SELECT|UPDATE|UNION(\s+ALL)?|OR)\b/i;

export const TABLE = {
  USER: 'user',
  ACCOUNT: 'account',
}

export const NEED_ESCAPE = true;