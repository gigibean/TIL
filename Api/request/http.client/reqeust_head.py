from http.client import HTTPConnection

host = '127.0.0.1:8001'
conn = HTTPConnection(host)
conn.request('HEAD', '/api/posts/')
res = conn.getresponse()
print(res.status, res.reason)
data = res.read()
headers = res.info()
print(headers)
print(len(data))
# HEAD 요청에 대한 응답에, 헤더는 있지만 바디가 없으므로 data 길이는 0이 된다.
print(data == b'')
