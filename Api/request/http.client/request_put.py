from http.client import HTTPConnection
from urllib.parse import urlencode

host = '127.0.0.1:8000'
params = urlencode({
    'title': "request http.client POST",
    'content': "content",
})
headers = {
    'Content-Type' : 'application/x-www-form-urlencoded',
}
conn = HTTPConnection(host)
conn.request("PUT", '/api/posts/', params, headers)
res = conn.getresponse()
print(res.status, res.reason)
data = res.read()
print(data.decode('utf-8'))
conn.close()