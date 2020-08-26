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


