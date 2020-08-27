from urllib.request import Request, HTTPCookieProcessor, build_opener

url = 'http://127.0.0.1:8000/cookie/'
# first request (GET) with cookie handler, 쿠키 데이터 저장은 디폴트로 CookieJar 객체를 사용
cookie_handler = HTTPCookieProcessor()
opener = build_opener(cookie_handler)
req = Request(url)
res = opener.open(req)
print(res.info())
print(res.read().decode('utf-8'))
# second request (POST)
data = "language=python&framework&frameworkd=django"
encData = bytes(data, encoding='utf-8')
req = Request(url, encData)
res = opener.open(req)
print(res.info())
print(res.read().decode('utf-8'))
