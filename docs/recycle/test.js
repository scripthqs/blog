// 解析url路径中的query参数
// parseQuery('https://example.com/page?a=1&b=2') // { a: '1', b: '2' }
function parseQuery(url) {
  const queryString = url.split('?')[1];
  if (!queryString) {
    return {};
  }
  const params = new URLSearchParams(queryString);
  const result = {};

  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  return result;

}

console.log(parseQuery('https://example.com/page?a=1&b=2')); // { a: '1', b: '2' }