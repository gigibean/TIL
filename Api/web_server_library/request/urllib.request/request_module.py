from urllib.request import Request, urlopen
from urllib.parse import urlencode

url = "http://127.0.0.1:8000/api/posts/"
data = {
        "title": "title in here",
        "content": "hello world !!!",
    }

encData = urlencode(data)
postData = bytes(encData, encoding='utf-8')
req = Request(url, data=postData)
with urlopen(req) as response:
    print(response.info())