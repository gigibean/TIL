import urllib.parse, urllib.request, urllib.error

url = "https://www.noneexists.com"
user_agent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64)'
headers = {'User-Agent':user_agent}
data = {
    'name' : 'someone',
    'location' : 'sonewhere'
}
data = urllib.parse.urlencode(data)
data = bytes(data, encoding='utf-8')
req = urllib.request.Request(url, data, headers)
try:
    with urllib.request.urlopen(req) as response:
        this_page = response.read(500).decode('utf-8')
        print(this_page)
except urllib.error.URLError as e:
    print(e.reason)

'''
res =>
[Running] python -u "d:\frontend organization\TIL\Api\request\res_add_header_w_URLError_module.py"
[Errno 11001] getaddrinfo failed

[Done] exited with code=0 in 0.247 seconds
'''
