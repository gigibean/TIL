import urllib.parse
import urllib.request
import urllib.error
url="http://www.naver.com"
user_agent = 'Mozilla/5.0 (Windows NT 6.1; Win64; x64)'
values = {'name': 'Someone',
          'location': 'Seoul',
          'language': 'Python' }
headers = {'User-Agent': user_agent}

data = urllib.parse.urlencode(values)
data = bytes(data, encoding='utf-8')
req = urllib.request.Request(url, data, headers)

with urllib.request.urlopen(req) as response:
    the_page = response.read(500).decode('utf-8')
    print(the_page)

'''
result ->
<!doctype html>                <html lang="ko" data-dark="false"> <head> <meta charset="utf-8"> <title>NAVER</title> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=1190"> <meta name="apple-mobile-web-app-title" content="NAVER"/> <meta name="robots" content="index,nofollow"/> <meta name="description" content="네이버 메인에서 다양한 정보와 유용한 컨텐츠를 만나 보세요"/> <meta property="og:title" content="네이
버"> <meta proper
'''