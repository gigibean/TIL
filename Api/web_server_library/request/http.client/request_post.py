from http.client import HTTPConnection
from urllib.parse import urlencode

host = '127.0.0.1:8001'
params = urlencode({
    'title': "request http.client POST",
    'content': "content",
})

headers = {
    'Content-Type' : 'application/x-www-form-urlencoded',
}

conn = HTTPConnection(host)
conn.request('POST', '/api/posts/', params, headers)
res = conn.getresponse()
print(res.status, res.reason)

data = res.read()
print(data.decode('utf-8'))

'''
res =>
201 Created
{"id":9,"title":"request http.client POST","content":...생략
'''