export const addPathToUrl = (customNetworkUrl: string, linkType: string, suffixType?: string,) => {
  const { username, password, protocol, host, pathname, search, hash } = new URL(customNetworkUrl);

  const newPath = pathname.endsWith('/') ? `${pathname}${linkType}/${suffixType}` : `${pathname}/${linkType}/${suffixType}`;

  const auth = username ? `${username}:${password}` : '';

  const parsedUrl = new URL(`${protocol}//${auth}${host}${newPath}${search}${hash}`);

  return parsedUrl.toString();
};
