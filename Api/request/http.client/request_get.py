from http.client import HTTPConnection

host = '127.0.0.1:8001'
# HTTPConnection() 클래스 생성 시, 첮 인자는 url이 아니라 host 이다.
# 그래서 http://127.0.0....이라고 쓰면 에러 발생
conn = HTTPConnection(host)
conn.request("GET","/api/posts/")
# /api/posts와 /api/posts/ 는 결과 다름에 유의
# GET 방식임을 명시, request(method, url, body, headers) 형식이며, body, headers 인자는 옵션
r1 = conn.getresponse()
print(r1.status, r1.reason)
# 응답 결과 출력. r1.msg 속성은 응답 헤더 정보
data1 = r1.read()
# 일부만 읽는 경우 두 번째 요청시 에러 발생
conn.request("GET", "/api/posts/")
r2 = conn.getresponse()
print(r2.status, r2.reason)
data2 = r2.read()
print(data2.decode())
conn.close()

'''
res =>
200 OK
200 OK
[{"id":8,"title":"title in here","content":..생략
'''