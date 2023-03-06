const urls: string[] = [
  'kenlo.com.br',
  'www.kenlo.com.br',
  'www.kenlo.com.br/',
  'http://www.kenlo.com.br',
];

const res: string[] = urls.map((url: string) => {
  const formattedURL: string = url.replace(/(https?:\/\/)?(www\.)?|\/$/g, '');
  return `https://www.${formattedURL}`;
});

console.log(res);
