from urllib.request import urlopen
from urllib.parse import urlencode

url = 'http://127.0.0.1:8888/cgi-bin/script.py'
data = {
    'title' : "this is title",
    'content' : "this is content"
}

encData = urlencode(data)
postData = encData.encode('ascii')

f= urlopen(url, postData)
print(f.read().decode('cp949'))