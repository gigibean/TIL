function solution(cacheSize, cities) {
  const cache = [];
  let ans = 0;
  function setCache(city) {
    if (cache.length < cacheSize) {
      const cityIndex = cache.indexOf(city);
      if (cityIndex !== -1) {
        cache.splice(cityIndex, 1);
      }
      cache.push(city);
    } else {
      const cityIndex = cache.indexOf(city);
      if (cityIndex !== -1) {
        cache.splice(cityIndex, 1);
      } else {
        cache.shift();
      }
      cache.push(city);
    }
  }

  for (let city of cities) {
    city = city.toUpperCase();
    if (cache.includes(city)) ans += 1;
    else ans += 5;

    if (cacheSize !== 0) setCache(city);
  }
  return ans;
}
