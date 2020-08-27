# urllib.request
urllib.request를 사용하여 url가져오기
```python
from urllib import request
with request.urlopen('https://www.google.com/') as response:
    html = response.read(500)
```
# urlopen()함수 – POST 방식요청
```python
form urllib.request import urlopen
data = "language-python&framework=django"
f = urlopen("http://127.0.0.1:8000", bytes(data, encoding='utf-8'))
print(f.read(500).decode('utf-8'))
```

# Request()
```python
Request(url, data=None, headers={}, origin_req_host=None, unverifiable=False, method=None)
```
이 클래스는 URL 요청의 추상화이다
url 은 URL 을 포함하는 문자열이어야한다.
data는 서버로 전송할 추가 데이터를 지정하는 객체이거나, 그러한 데이터가 필요하지 않으면 None이어야 한다. 
http post 요청 메서드의 경우, data는 표준 `application/x-www-form-urlencoded` 형식의 버퍼여야 한다. `urllib.parse.urlencode()` 함수는 매핑이나 2-튜플의 시퀀스를 취하고 이 형식의 ASCII 문자열을 반환한다. data 매개변수로 사용되기 전에 바이트 열로 인코딩 되어야 한다.
headers 는 딕셔너리여야 하며, 각 키와 값을 인자로 사용하여 `add_header()`가 호출된 것 처럼 처리된다. 이것은 종종 브라우저가 자신을 식별하는데 사용하는 User-Agent 헤더 값을 '스푸핑'하는 데 사용된다. 일부 http 서버는 스크립트가 아닌 일반 브라우저에서 오는 요청만 허용한다. 예를 들어 firefox는 자신을 "Mozilla/5.0 (X11; U; Linux i686) Gecko/20071127 Firefox/2.0.0.11"로 식별하는 반면, urllib의 기본 사용자 에이전트 문자열은 "Python-urllib/2.6" (파이썬 2.6에서) 이다.
data 인자가 있으면 적절한 Content-Type 헤더가 포함되어야 한다. 이 헤더가 제공되지 않고 data가 None 이 아니면, Content-Type: application/x-www-frim-urlencoded가 기본값으로 추가된다.

# urllib.parse.urlencode(query, daseq=False, safe", encoding=None, errors=Node, qoute_via=qoute_plus)
이 함수는 URL을 이용하여 데이터를 전송하고자 할 대 URL로 인코딩한 문자열을 반환한다.
GET방식을 통해 HTTP 요청을 할 때 쿼리 파라미터가 붙는 경우는 URL에서 ASCII 코드값만 사용한다. 이 쿼리 파라미터에 한글이 포함될 경우, ASCII 코드만으로 표현을 할 수 없어서 인코딩을 진행해야 한다. 
str이나 bytes 객체를 포함할 수 있는 매핑 객체나 두 요소 튜플의 시퀀스를 퍼센트 인코딩된 ASCII 텍스트 문자열로 반환한다. 결과 문자열을 urlopen() 함수를 사용하여 POST 연산을 위한 data로 사용하려면, 바이트열로 인코딩해야한다. 그렇지 않으면 typeerror가 발생한다. 
결과 문자열은 '&'문자로 구분된 일련의 key=value 쌍이고, 여기서 key와 value는 qoute_via 함수를 사용하여 인용된다.
query 인자에 두 요소 튜플의 시퀀스가 사용될 때, 각 튜플의 첫 번째 요소는 key이고 두 번째 요소는 value 이다. value 요소 자체는 시퀀스일 수 있으며, 이 경우 선택전 매개 변수 `doseq` 가 `True`로 평가 되면, '&'로 구분된 개별 key=value쌍이 키에 대한 값 시퀀스의 각 요소에 대해 생성된다.
```python
from urllib import parse
url = parse.urlparse("https://www.naver.com?name=이름&params=123")
query = parse.parse_qs(url.query)
result = parse.urlencode(query, doseq=True)
print(query)
print(result)
# {'name': ['이름'], 'params': ['123']}
# name=%EC%9D%B4%EB%A6%84&params=123
```

# parse.urlparse
urlparse는 URL을 6개의 요소로 이루어진 namedtuple로 만들어 반환한다. 정확히는, URL을 다루기 위해 만들어진 namedtuple을 상속받아 정의한 ParseResult의 객체다.
```python
from urllib import parse
urlparse = parse.urlparse("https://www.naver.com/stories;params?name=이름&params=123#no1")
print(urlparse)
#ParseResult(scheme='https', netloc='www.naver.com', path='/stories', params='params', query='name=이름&params=123', fragment='no1')
# +username, password, hostname, port
```
namedtuple 특성 상 프로퍼티들은 기본적으로 immutable이고, 값을 변경하려면 _replace를 사용해서 새로운 프로퍼티가 반영된 새로운 객체를 반환받아야 한다.
## _replace
```python
from urllib import parse
urlparse = parse.urlparse("https://www.naver.com/stories?name=이름&params=123#no1")
print(urlparse.scheme)
urlparse = urlparse._replace(scheme='http')
print(urlparse.scheme)
#https
#http
```
# urlunparse
ParseResult를 다시 URL로 만드려면, geturl 메소드나 urlunparse를 사용하면 된다. `ParseResult.geturl = lambda self: urlunparse(self)`라고 보면 된다.
```python
from urllib.parse import ParseResult, urlunparse
parts = ParseResult(scheme='https', netloc='naver.com', path='/stories', params='', query='name=이름&params=123', fragment='#no1')
print('parts.geturl() = ', parts.geturl())
print('urlunparse(parts) = ',urlunparse(parts))
#parts.geturl() =  https://naver.com/stories?name=이름&params=123##no1
#urlunparse(parts) =  https://naver.com/stories?name=이름&params=123##no1
```
# query string 바꿔치기
_replace 를 쓰면 프로퍼티를 변경할 수 있다. 그러나 query string 은 sort=name&keyword=old와 같이 문자열 형태로 이루어져있기 때문에 query string 중 sort를 like로 변경한다거나 하는 작업이 쉽지 않다. `urllib.parse`에서는 query string을 파싱해서 collection으로 반환해주는 `parse_qs`와 `parse_qsl`함수가 있다.
```python
from urllib.parse import urlparse, parse_qs, parse_qsl
parseurl = urlparse("https://www.naver.com/stories?sort=name&keyword=old")
print(parse_qs(parseurl.query))
print(parse_qsl(parseurl.query))
#{'sort': ['name'], 'keyword': ['old']}
#[('sort', 'name'), ('keyword', 'old')]
```
`parse_qs`는 key에 대해 value들을 list로 묶어서 dictionary로 반환하고, `parse_qsl`은 key-value pair 각각을 tuple로 만들어서 list로 반환한다. 그냥 납작한 딕셔너리로 관리하지 못하는 이유는, query string의 key가 표준에 의해서 중복이 허용되기 때문이다.
urllib.parse를 통해 URL에서 query string의 수정 작업을 진행하려면, 아래와 같이 코드를 작성해야 한다.
```python
from urllib.parse import urlparse, parse_qs, parse_qsl, urlencode, urlunparse
parseurl = urlparse("https://www.naver.com/stories?sort=name&keyword=old")
# 요소 분리
qs = dict(parse_qsl(parseurl.query))
# parse_qsl의 결과를 dictionary로 캐스팅
print(qs)
qs['keyword'] = 'new'
# 수정 작업
parseurl = parseurl._replace(query=urlencode(qs))
# dictionary로 되어 있는 query string을 urlencode에 넘겨 문자열화하고 replace
new_url = urlunparse(parseurl)
# urlunparse해서 새로운 url 얻어내기
print(new_url)
# {'sort': 'name', 'keyword': 'old'}
# https://www.naver.com/stories?sort=name&keyword=new
```

## parse_qs, parse_qsl, dict(parse_qsl)
```python
from urllib import parse
parseurl = parse.urlparse("https://www.naver.com/stories?sort=name&keyword=old")
qs = parse.parse_qs(parseurl.query)
print(qs)
result = parse.urlencode(qs, doseq=True)
print(result)
#{'sort': ['name'], 'keyword': ['old']}
#sort=name&keyword=old

qsl = parse.parse_qsl(parseurl.query)
print(qsl)
result2 = parse.urlencode(qsl)
print(result2)
#[('sort', 'name'), ('keyword', 'old')]
#sort=name&keyword=old
# tuples are unchangeable, or immutable. But you can convert the tuple into a list, change the list, and convert the list back into a tuple. 

dqs = dict(parse.parse_qsl(parseurl.query))
print(dqs)
result3 = parse.urlencode(dqs)
print(result3)
#{'sort': 'name', 'keyword': 'old'}
#sort=name&keyword=old
```
# proxy
urllib는 파락시 설정을 자동 감지하여 사용합니다. 이는 프락시 설정이 감지될 때 일반 처리기 체인의 일부가 도는 ProxyHandler 를 통해 이루어진다. 일반적으로 좋은 일이지만 도움이 되지 않는 경우가 있다. 이를 위한 한가지 방법은 프락시가 정의되지 않은 자체 ProxyHandler를 설정하는 것이다.
```python
proxy_support = urllib.request.ProxyHandler({})
opener = rullib.request.build_opener(proxy_support)
urllib.request.install_opener(opener)
```
현재 urllib.request는 프락시를 통하 https위치를 가져오는 것을 지원하지 않느낟. 그러나 urllib.request를 확장하여 활성화 할 수 있다.  

# 소켓과 계층
urllib 은 http.client 라이브러리를 사용하고, 이것은 다시 socket 라이브러리를 사용한다.
시간제한으로 중단되기 전에 소켓에 응답을 기다리는 시간을 지정할 수 있다. 웹페이지를 가져와야 하는 응용 프로그램에서 유용할 수 있다. 기본적으로 소켓 모듈에는 시간제한이 없고 멈출 수 있다. 현재, 소켓 시간제한은 http.client나 urllib.request 수준에서 노출되지 않는다. 그러나 다음과 같이 모든 소켓에 대해 기본 제한 시간을 전역적으로 설정할 수 있다.
```python
import socket
import urllib.request

# 초단위 시간제한
timeout = 10
socket.setdefaulttimeout(timeout)

# 이 urllib.request.urlopen 호출은이제 우리가 socket 모듈에 설정한 기본 시간제한을 사용한다.
req = urllib.reqeust.Request('http://www.example.com')
response = urllib.request.urlopen(req)
```

# html.parser
## HTMLParser
잘못된 마크 업을 구문 분석 할 수있는 구문 분석기 인스턴스를 만든다.

convert_charrefs가 True (기본값)이면 모든 문자 참조 (스크립트 / 스타일 요소의 참조 제외)가 해당 유니 코드 문자로 자동 변환된다.

HTMLParser 인스턴스에는 HTML 데이터가 공급되고 시작 태그, 종료 태그, 텍스트, 주석 및 기타 마크 업 요소가 발견되면 핸들러 메서드를 호출한다. 사용자는 HTMLParser를 하위 클래스로 만들고 원하는 동작을 구현하기 위해 메서드를 재정의해야한다.

Example HTML Parser Application
As a basic example, below is a simple HTML parser that uses the HTMLParser class to print out start tags, end tags, and data as they are encountered:
```python
from html.parser import HTMLParser

class MyHTMLParser(HTMLParser):
    def handle_starttag(self, tag, attrs):
        print("Encountered a start tag:", tag)

    def handle_endtag(self, tag):
        print("Encountered an end tag :", tag)

    def handle_data(self, data):
        print("Encountered some data  :", data)

parser = MyHTMLParser()
parser.feed('<html><head><title>Test</title></head>'
            '<body><h1>Parse me!</h1></body></html>')
```
The attrs argument is a list of (name, value) pairs containing the attributes found inside the tag’s <> brackets. The name will be translated to lower case, and quotes in the value have been removed, and character and entity references have been replaced.

For instance, for the tag `<A HREF="https://www.cwi.nl/">`, this method would be called as handle_starttag('a', [('href', 'https://www.cwi.nl/')]).

[참고]:https://docs.python.org/3/library/html.parser.html#html.parser.HTMLParser

### hasattr(object, name)
hasattr(object, name)
인자는 객체와 문자열입니다. 문자열이 객체의 속성 중 하나의 이름이면 결과는 True 이고, 그렇지 않으면 False 가 됩니다. (이것은 getattr(object, name) 을 호출하고 AttributeError 를 발생시키는지를 보는 식으로 구현됩니다.

[참고]:https://docs.python.org/ko/3/library/functions.html?highlight=hasattr#hasattr

# http.client
GET, POST 외의 방식으로 요청을 보내거나 요청 헤더와 바디 사이에 타이머를 두어 시간을 지연시키는 등 urllib.request 모듈로 쉽게 처리할 수 없는 경우 혹은 HTTP 프로토콜 요청에 대한 저수준의 더 세밀한 기능이 필요한 경우 http.client 모듈 사용함
urllib.request 모듈도 http.client 모듈에서 제공하는 http.client 모듈에서 제공하는 API 를 사용해서 만들 모듈이다. 
## http.client 모듈 사용시 코딩 순서
|순서|예시|
|--|--|
|연결 객체 생성|conn=http.client.HTTPConnection("www.pyton.org")
|요청을 보냄|conn.request("GET","/.index.html")|
|응답 객체 생성|response=conn.getresponse()|
|응답 객체를 읽음|data=response.read()|
|연결을 닫음|conn.close()|

# os.path
## os.path.abspath(path)

 
현재 경로를 Prefix로 하여 입력받은 경로를 절대경로로 바꿔서 반환합니다

## os.path.basename(path)

 
입력받은 경로의 기본 이름(base name)을 반환합니다.

abspath() 함수와 반대되는 기능을 수행한다고 볼 수 있습니다.
```shell
>>> basename('C:\\Python30\\tmp')

'tmp'

>>> basename('C:\\Python30\\tmp\\test.txt')

'test.txt'
```

## os.path.commonprefix(path_list)

 
입력받은 path_list로부터 공통적인 Prefix를 추출해서 반환합니다. 그러나 이 결과는 문자열 연산에

의한 것이기 때문에 다음의 두 번째 예제와 같이 잘못된 경로가 나올 수도 있습니다.
```shell
>>> commonprefix(['C:\\Python30\\Lib', 'C:\\Python30', 'C:\\Python30\\Tools'])

'C:\\Python30'

>>> commonprefix(['C:\\Python26\\Lib', 'C:\\Python25\\Tools'])

'C:\\Python2'
```

## os.path.dirname(path)

 
입력받은 파일/디렉터리의 경로를 반환합니다.
```shell
>>> dirname('C:\\Python30\\tmp\\test.txt')

'C:\\Python30\\tmp'

>>> dirname('C:\\Python30\\tmp')

'C:\\Python30'
```

## os.path.exists(path)

 
입력받은 경로가 존재하면 True를 반환하고, 존재하지 않는 경우는 False를 반환합니다.

리눅스와 같은 OS에서는 파일이나 디렉터리가 존재하지만 읽기 권한이 없는 경우에도,

False를 반환할 수 있습니다.

## os.path.expanduser(path)

 
입력받은 경로안의 "~"를 현재 사용자 디렉터리의 절대경로로 대체합니다.

"~"에 붙여서 <사용자명>을 붙이면 원하는 사용자 경로로 대체됩니다.

(유닉스/리눅스의 홈디렉터리를 나타내는 '~'과 동일합니다)
```shell
>>> expanduser('~\\devanix')

'C:\\Documents and Settings\\Administrator\\devanix'
```

## os.path.expandvars(path)

 
path안에 환경변수가 있따면 확장합니다. (환경변수는 os.environ에 정의된 것을 참조)
```shell
>>> expandvars('$HOME\\temp')

'C:\\Documents and Settings\\Administrator\\temp'

>>> expandvars('$SYSTEMROOT\\var')

'C:\\WINDOWS\\var'
```

## os.path.getatime(path)

 
입력받은 경로에 대한 최근 접근 시간을 반환 (반환되는 값은 epoch(1970년 1월 1일) 이후

초단위로 반환됩니다. 파일이 없거나 권한이 없는 경우 os.error 예외 발생)
```shell
>>> getatime('C:\\Python30\\python.exe')

1320966393.375

# 읽을 수 있는 형식으로 보려면 다음과 같이 하면 됩니다.

>>> import time

>>> time.gmtime(getatime('C:\\Python30\\python.exe'))

time.struct_time(tm_year=2011, tm_mon=11, tm_mday=10, tm_hour=23, tm_min=6, tm_sec=33, tm_wday=3, tm_yday=314, tm_isdst=0)
```
## os.path.getmtime(path)

 
입력받은 경로에 대한 최근 변경 시간을 반환 (파일이 없거나 권한이 없는 경우 os.error 예외 발생)
```shell
>>> getmtime('C:\\Python30\\python.exe')

1320966397.453125
```

## os.path.getctime(path)

 
입력받은 경로에 대한 생성시간을 반환 (유닉스와 같은 운영체제에서는 생성시간이 아닌

최근 변경 시간을 반환할 수도 있습니다. 파일이 없거나 권한이 없는 경우 os.error 예외 발생)
```shell
>>> getctime('C:\\Python30\\python.exe')

1320966393.0625    
```

## os.path.getsize(path)

 
입력받은 경로에 대한 바이트 단위의 파일크기를 반환.

(파일이 없거나 권한이 없는 경우 os.error 예외 발생)
```shell
>>> getsize('C:\\Python30\\python.exe')

26624L
```

## os.path.isabs(path)

 
경로가 절대경로이면 True를 반환하고, 그 외의 경우에는 False를 반환.

(실제 해당 경로를 검사하지는 않으며 입력받은 문자열을 가지고 판단합니다.)
```shell
>>> isabs('C:\\Python30\\python.exe')

True
```
## os.path.isfile(path)

 
경로가 파일인지 아닌지 검사합니다. 파일인 경우에는 True를 반환하고, 그 외의 경우 False를 반환.

(혹은 해당 경로가 존재하지 않은 경우에는 False를 반환합니다)
```shell
>>> isfile('C:\\Python30\\python.exe')

True

>>> isfile('C:\\Python26\\python.exe')

False
```

## os.path.isdir(path)

 
경로가 디렉터리인지 아닌지 검사합니다. 디렉터리인 경우에는 True를 반환하고, 그 외의 경우에는

False를 반환합니다. 혹은 경로가 존재하지 않은 경우에는 False 반환합니다.

## os.path.join(path1[,path2[,...]])

 
해당 OS 형식에 맞도록 입력 받은 경로를 연결합니다. (입력 중간에 절대경로가 나오면 이전에

취합된 경로는 제거하고 다시 연결합니다)
```shell
>>> join('C:\\Python30', 'Script', 'test.py')

'C:\\Python30\\Script\\test.py'

>>> join('C:\\Python30', 'D:\\Test', 'test.py')

'D:\\Test\\test.py'
```

## os.path.normcase(path)

 
해당 OS에 맞도록 입력 받은 경로의 문자열을 정규화 합니다. (윈도우와 같은 경우,

아래 예제와 같이 소문자로 바꾸고 '/'를 '\\'로 변경합니다)
```shell
>>> normcase('C:\\Python30\\python.exe')

'c:\\python30\\python.exe'

>>> normcase('C:/Python30/python.exe')

'c:\\python30\\python.exe'
```

## os.path.normpath(path)

 
입력 받은 경로를 정규화합니다. (현재 디렉터리(".")나 상위 디렉터리("..")와 같은 구분자를 최대한 삭제)
```shell
>>> normpath('C:\\Python30/./python.exe')

'C:\\Python30\\python.exe'

>>> normpath('C:\\Python30/./../python.exe')

'C:\\python.exe'
```

## os.path.split(path)

 
입력 받은 경로를 디렉터리 부분과 파일 부분으로 나눕니다.

단순한 문자열 연산이므로 실제 파일의 존재 여부는 확인하지 않습니다.
```shell
>>> split('C:\\Python30\\python.exe')

('C:\\Python30', 'python.exe')
```

## os.path.splitdrive(path)

 
입력 받은 경로를 드라이브 부분과 나머지 부분으로 나눕니다.

단순한 문자열 연산이므로 실제 파일의 존재 여부는 확인하지 않습니다.
```shell
>>> splitdrive('C:\\Python30\\python.exe')

('C:', '\\Python30\\python.exe')
```
## os.path.splitext(path)

 
입력 받은 경로를 확장자 부분과 그 외의 부분으로 나눕니다.

단순한 문자열 연산이므로 실제 파일의 존재 여부는 확인하지 않습니다.
```shell
>>> splitext('C:\\Python30\\python.exe')

('C:\\Python30\\python', '.exe')
```


출처: https://devanix.tistory.com/298 [┗System∑Sec†ion┛]

# http.client
## class http.client.HTTPConnection(host, port=None, [timeout, ]source_address=None, blocksize=8192)
HTTPConnection 인스턴스는 HTTP 서버와의 하나의 트랜잭션을 나타냅니다. 호스트와 선택적 포트 번호를 전달하여 인스턴스화해야 합니다. 포트 번호가 전달되지 않으면, host 문자열이 host:port 형식이면 여기에서 포트가 추출됩니다, 그렇지 않으면 기본 HTTP 포트(80)가 사용됩니다. 선택적 timeout 매개 변수가 제공되면, 블로킹 연산(연결 시도와 같은)이 지정된 초 후에 시간제한으로 종료됩니다 (제공되지 않으면, 전역 기본 시간제한 설정이 사용됩니다). 선택적 source_address 매개 변수는 HTTP 연결의 소스 주소로 사용할 (호스트, 포트)의 튜플일 수 있습니다. 선택적 blocksize 매개 변수는 파일류 메시지 바디를 보내는 데 필요한 버퍼 크기를 바이트 단위로 설정합니다.

예를 들어, 다음 호출은 모두 같은 호스트와 포트에 있는 서버에 연결하는 인스턴스를 만듭니다:

```shell
>>> h1 = http.client.HTTPConnection('www.python.org')
>>> h2 = http.client.HTTPConnection('www.python.org:80')
>>> h3 = http.client.HTTPConnection('www.python.org', 80)
>>> h4 = http.client.HTTPConnection('www.python.org', 80, timeout=10)
```

### HTTPConnection 객체
#### HTTPConnection.request(method, url, body=None, headers={}, *, encode_chunked=False)
HTTP 요청 메서드 method와 선택기(selector) url을 사용하여 서버로 요청을 보냅니다.

#### HTTPConnection.getresponse()
요청을 보낸 후에 서버에서 응답을 받기 위해 호출해야 합니다. HTTPResponse 인스턴스를 반환합니다.

#### HTTPConnection.set_debuglevel(level)
디버깅 수준을 설정합니다. 기본 디버그 수준은 0이며, 디버깅 출력이 인쇄되지 않음을 의미합니다. 0보다 큰 값을 지정하면 현재 정의된 모든 디버그 출력이 표준 출력으로 인쇄됩니다. debuglevel은 만들어지는 모든 새로운 HTTPResponse 객체로 전달됩니다.

#### HTTPConnection.set_tunnel(host, port=None, headers=None)
HTTP Connect 터널링(tunnelling)을 위한 host와 및 port를 설정합니다. 프락시 서버를 통해 연결을 실행할 수 있도록 합니다.

host와 port 인자는 터널링 된 연결의 말단(즉 CONNECT 요청에 포함되는 주소, 프락시 서버의 주소가 아닙니다)을 지정합니다.

headers 인자는 CONNECT 요청과 함께 보낼 추가 HTTP 헤더의 매핑이어야 합니다.

예를 들어, 포트 8080에서 로컬로 실행되는 HTTPS 프락시 서버를 통해 터널링 하려면, 프락시 주소를 HTTPSConnection 생성자에 전달하고, 최종적으로 set_tunnel() 메서드에 도달하려는 호스트 주소를 전달합니다:

```shell
>>> import http.client
>>> conn = http.client.HTTPSConnection("localhost", 8080)
>>> conn.set_tunnel("www.python.org")
>>> conn.request("HEAD","/index.html")
```
#### HTTPConnection.connect()
객체가 만들어질 때 지정된 서버에 연결합니다. 기본적으로, 클라이언트가 이미 연결되지 않았다면 요청 시 자동으로 호출됩니다.

#### HTTPConnection.close()
서버로의 연결을 닫습니다.

#### HTTPConnection.blocksize
파일류 메시지 바디를 보내기 위한 바이트 단위의 버퍼 크기.

위에서 설명한 request() 메서드를 사용하는 대신, 아래 네 가지 함수를 사용하여 단계별로 요청을 보낼 수도 있습니다.

#### HTTPConnection.putrequest(method, url, skip_host=False, skip_accept_encoding=False)
서버에 연결한 후 첫 번째 호출이어야 합니다. method 문자열, url 문자열 및 HTTP 버전(HTTP/1.1)으로 구성된 줄을 서버로 보냅니다. Host:나 Accept-Encoding: 헤더의 자동 전송을 비활성화하려면 (예를 들어 추가 콘텐츠 인코딩을 허용하려면), False가 아닌 값으로 skip_host나 skip_accept_encoding을 지정하십시오.

#### HTTPConnection.putheader(header, argument[, ...])
RFC 822 스타일 헤더를 서버에 보냅니다. header, 콜론과 공백 및 첫 번째 인자로 구성된 줄을 서버로 보냅니다. 더 많은 인자가 제공되면, 탭과 인자로 구성된 연속 줄(continuation lines)이 전송됩니다.

#### HTTPConnection.endheaders(message_body=None, *, encode_chunked=False)
헤더의 끝을 알리는 빈 줄을 서버에 보냅니다. 선택적 message_body 인자를 사용하여 요청과 연관된 메시지 바디를 전달할 수 있습니다.

encode_chunked가 True이면, message_body의 각 이터레이션 결과는 RFC 7230, 섹션 3.3.1에 지정된 대로 청크 인코딩됩니다. 데이터의 인코딩 방식은 message_body의 형에 따라 다릅니다. message_body가 버퍼 인터페이스를 구현하면, 인코딩은 단일 청크를 만듭니다. message_body가 collections.abc.Iterable이면, message_body의 각 이터레이션이 청크가 됩니다. message_body가 파일 객체이면, 각 .read() 호출마다 청크가 됩니다. 이 메서드는 message_body 직후에 청크 인코딩된 데이터의 끝을 자동으로 알립니다.

참고 청크 인코딩 명세로 인해, 이터레이터 바디에서 산출된 빈 청크는 청크 인코더에서 무시됩니다. 이는 형식이 잘못된 인코딩으로 인해 대상 서버의 요청 읽기가 조기에 종료되지 않도록 하려는 것입니다.
버전 3.6에 추가: 청크 인코딩 지원. encode_chunked 매개 변수가 추가되었습니다.

### HTTPConnection.send(data)
서버로 data를 보냅니다. 이것은 endheaders() 메서드가 호출된 후, 그리고 getresponse()가 호출되기 전에만 직접 사용해야 합니다.

## class http.client.HTTPSConnection(host, port=None, key_file=None, cert_file=None, [timeout, ]source_address=None, *, context=None, check_hostname=None, blocksize=8192)
보안 서버와의 통신에 SSL을 사용하는 HTTPConnection의 서브 클래스. 기본 포트는 443입니다. context가 지정되면, 다양한 SSL 옵션을 기술하는 ssl.SSLContext 인스턴스여야 합니다.

http.client 설명: https://docs.python.org/ko/3/library/http.client.html

## class http.client.HTTPResponse(sock, debuglevel=0, method=None, url=None)
성공적으로 연결되면 반환되는 인스턴스의 클래스. 사용자가 직접 인스턴스화 하지 않습니다.

### HTTPResponse 객체
#### HTTPResponse.read([amt])
응답 바디나 다음 최대 amt 바이트를 읽고 반환합니다.

#### HTTPResponse.readinto(b)
응답 바디의 다음 최대 len(b) 바이트를 버퍼 b로 읽습니다. 읽은 바이트 수를 반환합니다.

#### HTTPResponse.getheader(name, default=None)
헤더 name의 값을 반환하거나, name과 일치하는 헤더가 없으면 default를 반환합니다. 이름이 name인 헤더가 둘 이상 있으면, 〈,〉로 연결한 모든 값을 반환합니다. 〈default’가 단일 문자열 이외의 이터러블이면, 해당 요소들도 마찬가지로 쉼표로 연결되어 반환됩니다.

#### HTTPResponse.getheaders()
(헤더, 값) 튜플의 리스트를 반환합니다.

#### HTTPResponse.fileno()
하부 소켓의 fileno를 반환합니다.

#### HTTPResponse.msg
응답 헤더를 포함하는 http.client.HTTPMessage 인스턴스. http.client.HTTPMessage는 email.message.Message의 서브 클래스입니다.

#### HTTPResponse.version
서버가 사용하는 HTTP 프로토콜 버전. HTTP/1.0의 경우 10, HTTP/1.1의 경우 11.

#### HTTPResponse.status
서버가 반환한 상태 코드.

#### HTTPResponse.reason
서버가 반환한 이유 문구.

#### HTTPResponse.debuglevel
디버깅 훅. debuglevel이 0보다 크면, 응답을 읽고 구문 분석할 때 메시지가 표준 출력으로 인쇄됩니다.

#### HTTPResponse.closed
스트림이 닫혔으면 True입니다.