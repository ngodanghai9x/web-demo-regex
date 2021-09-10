export const SQLI_REGEX = /^(.*)\s?(and|or|union)\s(.*)$/i;
export const URL_REGEX = /^((http:|https:|http:|https:)\/\/(www\.)?)?[a-z0-9]+([-.]{1}[a-z0-9]+)+\.[a-z]{2,255}(:[0-9]{1,5})?$/i;

export const TABLE = {
  USER: 'user',
  ACCOUNT: 'account',
}

export const NEED_ESCAPE = false;