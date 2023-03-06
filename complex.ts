import { URL } from 'url';

function normalizeUrl(url: string): string {
  if (!url.startsWith('http://') && !url.startsWith('https://')) {
    url = `https://${url}`;
  }

  const urlComponents: URL = new URL(url);
  let scheme: string = 'https:';
  let host: string = '';

  if (urlComponents.protocol && urlComponents.hostname) {
    host = urlComponents.hostname.startsWith('www.')
      ? urlComponents.hostname
      : `www.${urlComponents.hostname}`;
  }

  const finalUrlComponents = {
    protocol: scheme,
    hostname: host,
    pathname: urlComponents.pathname,
    search: urlComponents.search,
    hash: urlComponents.hash,
  };
  const finalUrl = new URL('', 'https://www.kenlo.com.br');
  Object.assign(finalUrl, finalUrlComponents);

  return finalUrl.toString();
}

const urls: string[] = [
  'kenlo.com.br',
  'www.kenlo.com.br',
  'www.kenlo.com.br/',
  'http://www.kenlo.com.br',
];

const res: string[] = urls.map((url: string) => {
  return normalizeUrl(url);
});

console.log(res);
