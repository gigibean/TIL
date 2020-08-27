# http.server
## 웹 서버용 파이썬 라이브러리 주요 클래스
파이썬 2.x 에서 BaseHTTPServer, SimpleHTTPServer, CGIHTTPServer 3개의 모듈로 나눠져 있던 것을 파이썬 3.x에서 하나로 합쳤음. 

|클래스|주요기능|
|--|--|
|HTTPServer|웹서버를 만들기 위한 클래스로, 서버 IP와 PORT를 바인딩함, HTTPServer 객체 생성시 핸들러 클래스가 반드시 필요|
|BaseHTTPRequestHandler|핸들러를 만들기 위한 기반 클래스로, HTTP 프로토콜 처리 로직이 있음, 이 클래스를 상속받아 자신의 로직 처리를 담당하는 핸들러 클래스 만듬|
|SimpleHTTPRequestHandler|BaseHTTPRequestHandler 클래스를 상속 받아 만들 클래스, GET과 HEAD 메소드 처리가 가능한 핸들러 클래스|
|CGIHTTPRequestHandler|SimpleHTTPRequestHandler 클래스를 상속받아 만들 클래스, 추가적으로 POST 메소드와 CGI 처리가 가능한 핸들러 클래스|

## class http.server.HTTPServer(server_address, RequestHandlerClass)
이 클래스는 TCPServer 클래스를 기반으로 하고, 서버 주소를 server_name과 server_port라는 인스턴스 변수로 저장합니다. 처리기는 일반적으로 처리기의 server 인스턴스 변수를 통해 서버에 액세스 할 수 있습니다.

### serve_forever(poll_interval=0.5)
명시적인 shutdown() 요청이 있을 때까지 요청을 처리합니다. poll_interval 초마다 shutdown을 확인합니다. timeout 어트리뷰트를 무시합니다. 또한 service_actions()를 호출하는데, 서브 클래스나 믹스인이 주어진 서비스에 특정한 동작을 제공하기 위해 사용할 수 있습니다. 예를 들어, ForkingMixIn 클래스는 service_actions()를 사용하여 좀비 자식 프로세스를 정리합니다.

## class http.server.BaseHTTPRequestHandler(request, client_address, server)
이 클래스는 서버에 도착하는 HTTP 요청을 처리하는 데 사용됩니다. 그 자체로는, 실제 HTTP 요청에 응답할 수 없습니다; 각 요청 메서드(예를 들어 GET이나 POST)를 처리하려면 서브 클래스를 만들어야 합니다. BaseHTTPRequestHandler는 많은 클래스 및 인스턴스 변수와 서브 클래스가 사용할 메서드를 제공합니다.

처리기는 요청과 헤더를 구문 분석한 다음, 요청 유형에 특정한 메서드를 호출합니다. 메서드 이름은 요청으로부터 구성됩니다. 예를 들어, 요청 메서드 SPAM의 경우, do_SPAM() 메서드가 인자 없이 호출됩니다. 모든 관련 정보는 처리기의 인스턴스 변수에 저장됩니다. 서브 클래스는 __init__() 메서드를 대체하거나 확장할 필요가 없습니다.

BaseHTTPRequestHandler에는 다음과 같은 인스턴스 변수가 있습니다:

### client_address
클라이언트 주소를 나타내는 (host, port) 형식의 튜플을 포함합니다.

### server
서버 인스턴스를 포함합니다.

### close_connection
handle_one_request()가 반환되기 전에 설정해야 하는 불리언으로, 다른 요청이 기대되는지, 또는 연결을 종료해야 하는지를 나타냅니다.

### requestline
HTTP 요청 줄의 문자열 표현을 포함합니다. 종료 CRLF가 제거됩니다. 이 어트리뷰트는 handle_one_request()에서 설정해야 합니다. 유효한 요청 줄이 처리되지 않았으면, 빈 문자열로 설정해야 합니다.

### command
명령(요청 유형)을 포함합니다. 예를 들어, 'GET'.

### path
요청 경로를 포함합니다.

### request_version
요청의 버전 문자열을 포함합니다. 예를 들어, 'HTTP/1.0'.

### headers
MessageClass 클래스 변수로 지정된 클래스의 인스턴스를 보유합니다. 이 인스턴스는 HTTP 요청의 헤더를 구문 분석하고 관리합니다. http.client의 parse_headers() 함수가 헤더를 구문 분석하는 데 사용되며 HTTP 요청이 유효한 RFC 2822 스타일 헤더를 제공할 것을 요구합니다.

### rfile
선택적 입력 데이터의 시작부터 읽을 준비가 된 io.BufferedIOBase 입력 스트림.

### wfile
클라이언트로 돌려줄 응답을 쓰기 위한 출력 스트림을 포함합니다. HTTP 클라이언트와의 성공적인 상호 운용을 위해서 이 스트림에 쓸 때 HTTP 프로토콜을 올바르게 준수해야 합니다.


BaseHTTPRequestHandler에는 다음과 같은 어트리뷰트가 있습니다:

### server_version
서버 소프트웨어 버전을 지정합니다. 이것을 재정의하고 싶을 수 있습니다. 형식은 여러 공백으로 구분된 문자열이며, 각 문자열은 name[/version] 형식입니다. 예를 들어, 'BaseHTTP/0.2'.

### sys_version
version_string 메서드와 server_version 클래스 변수에서 사용할 수 있는 형식으로 파이썬 시스템 버전을 포함합니다. 예를 들어, 'Python/1.4'.

### error_message_format
클라이언트에 대한 에러 응답을 빌드하기 위해 send_error() 메서드에서 사용해야 하는 포맷 문자열을 지정합니다. 문자열은 기본적으로 send_error()에 전달된 상태 코드에 따라 responses의 변수로 채워집니다.

### error_content_type
클라이언트로 전송되는 에러 응답의 Content-Type HTTP 헤더를 지정합니다. 기본값은 'text/html'입니다.

### protocol_version
응답에 사용되는 HTTP 프로토콜 버전을 지정합니다. 'HTTP/1.1'로 설정되면, 서버는 HTTP 지속적 연결(persistent connections)을 허용합니다; 그러나, 이때 서버는 반드시 클라이언트에 대한 모든 응답에 (send_header()를 사용해서) 정확한 Content-Length 헤더를 포함해야 합니다. 이전 버전과의 호환성을 위해, 기본 설정은 'HTTP/1.0'입니다.

### MessageClass
HTTP 헤더를 구문 분석할 email.message.Message와 유사한 클래스를 지정합니다. 일반적으로, 이는 재정의되지 않으며, 기본값은 http.client.HTTPMessage입니다.

### responses
이 어트리뷰트에는 에러 코드 정수에서 짧고 긴 메시지를 포함하는 두 요소 튜플로의 매핑이 포함됩니다. 예를 들어, {code: (shortmessage, longmessage)}. shortmessage는 일반적으로 에러 응답에서 message 키로 사용되고, longmessage는 explain 키로 사용됩니다. send_response_only()와 send_error() 메서드에서 사용됩니다.

BaseHTTPRequestHandler 인스턴스에는 다음과 같은 메서드가 있습니다:

#### handle()
들어오는 HTTP 요청을 처리하기 위해 handle_one_request()를 한 번 (또는, 지속적 연결이 활성화되었으면, 여러 번) 호출합니다. 재정의할 필요는 없습니다; 대신 적절한 do_*() 메서드를 구현하십시오.

### handle_one_request()
이 메서드는 요청을 구문 분석하여 적절한 do_*() 메서드로 디스패치 합니다. 재정의할 필요는 없습니다.

### handle_expect_100()
HTTP/1.1 호환 서버가 Expect: 100-continue 요청 헤더를 수신하면 100 Continue로 응답한 후 200 OK 헤더가 뒤따릅니다. 클라이언트가 계속하는 것을 서버가 원하지 않으면 에러를 발생시키기 위해 이 메서드를 재정의할 수 있습니다. 예를 들어 서버는 417 Expectation Failed를 응답 헤더로 보내고 return False 할 수 있습니다.


### send_error(code, message=None, explain=None)
클라이언트에게 완전한 에러 응답을 보내고 로깅 합니다. 숫자 code는 HTTP 에러 코드를 지정하며, message는 선택적인 사람이 읽을 수 있는 에러에 대한 간단한 설명입니다. explain 인자는 에러에 대한 자세한 정보를 제공하는 데 사용될 수 있습니다; error_message_format 어트리뷰트를 사용하여 포맷되고 전체 헤더 집합 뒤에 응답 바디로 보냅니다. responses 어트리뷰트는 값이 제공되지 않을 때 사용될 message와 explain의 기본값을 담고 있습니다; 알 수 없는 코드의 경우 둘 다 기본값은 문자열 ???입니다. 메서드가 HEAD이거나 응답 코드가 1xx, 204 No Content, 205 Reset Content, 304 Not Modified 중 하나면 바디는 비어 있게 됩니다.


### send_response(code, message=None)
헤더 버퍼에 응답 헤더를 추가하고 받아들인 요청을 로깅 합니다. HTTP 응답 줄이 내부 버퍼에 기록되고, Server와 Date 헤더가 뒤따릅니다. 이 두 헤더의 값은 각각 version_string()과 date_time_string() 메서드에서 취합니다. 서버가 send_header() 메서드를 사용하여 다른 헤더를 보내려고 하지 않는다면, send_response() 다음에 end_headers() 호출이 있어야 합니다.


### send_header(keyword, value)
end_headers()나 flush_headers()가 호출될 때 출력 스트림에 기록될 내부 버퍼에 HTTP 헤더를 추가합니다. keyword는 헤더 키워드를 지정하고, value는 값을 지정해야 합니다. send_header 호출이 완료된 후, 작업을 완료하려면 반드시 end_headers()를 호출해야 함에 유의하십시오.


### send_response_only(code, message=None)
응답 헤더만 보내는데, 서버가 100 Continue 응답을 클라이언트로 전송할 목적으로 사용됩니다. 헤더는 버퍼링 되지 않고 출력 스트림으로 직접 전송합니다. message를 지정하지 않으면, 응답 code에 해당하는 HTTP 메시지가 전송됩니다.


### end_headers()
(응답에서 HTTP 헤더의 끝을 나타내는) 빈 줄을 헤더 버퍼에 추가하고 flush_headers()를 호출합니다.


### flush_headers()
마지막으로 헤더를 출력 스트림으로 보내고 내부 헤더 버퍼를 플러시 합니다.


### log_request(code='-', size='-')
받아들인 (성공적인) 요청을 로깅 합니다. code는 응답과 관련된 숫자 HTTP 코드를 지정해야 합니다. 응답의 크기가 있으면, size 매개 변수로 전달되어야 합니다.

### log_error(...)
요청을 이행할 수 없을 때 에러를 로깅 합니다. 기본적으로, 메시지를 log_message()에 전달하므로, 같은 인자(format과 추가 값)를 취합니다.

### log_message(format, ...)
sys.stderr에 임의의 메시지를 로깅 합니다. 이것은 일반적으로 사용자 지정 에러 로깅 메커니즘을 만들기 위해 재정의됩니다. format 인자는 표준 printf 스타일 포맷 문자열이며, log_message()에 대한 추가 인자는 포매팅의 입력으로 적용됩니다. 클라이언트 ip 주소와 현재 날짜 및 시간은 로깅 되는 모든 메시지 앞에 붙습니다.

### version_string()
서버 소프트웨어의 버전 문자열을 반환합니다. 이것은 server_version과 sys_version 어트리뷰트의 조합입니다.

### date_time_string(timestamp=None)
timestamp(None이거나 time.time()이 반환한 형식이어야 합니다)로 지정된 날짜와 시간을 메시지 헤더용으로 포맷하여 반환합니다. timestamp를 생략하면, 현재 날짜와 시간이 사용됩니다.

결과는 'Sun, 06 Nov 1994 08:49:37 GMT'와 같은 모습입니다.

### log_date_time_string()
로깅용으로 포맷한 현재 날짜와 시간을 반환합니다.

### address_string()
클라이언트 주소를 반환합니다.

버전 3.3에서 변경: 이전에는, 이름 조회가 수행되었습니다. 이름 결정(name resolution) 지연을 피하고자, 이제 항상 IP 주소를 반환합니다.

## class http.server.SimpleHTTPRequestHandler(request, client_address, server, directory=None)
이 클래스는 디렉터리 구조를 HTTP 요청에 직접 매핑하여 현재 디렉터리와 그 이하의 파일을 제공합니다.

요청 구문 분석과 같은 많은 작업이 베이스 클래스 BaseHTTPRequestHandler 에 의해 수행됩니다. 이 클래스는 do_GET()과 do_HEAD() 함수를 구현합니다.

다음은 SimpleHTTPRequestHandler 의 클래스 수준 어트리뷰트로 정의됩니다:

### server_version
이것은 "SimpleHTTP/" + __version__이며, 여기서 __version__은 모듈 수준에서 정의됩니다.

### extensions_map
접미사를 MIME 형식으로 매핑하는 딕셔너리. 기본 시스템 매핑에 대한 사용자 정의 재정의를 포함합니다. 매핑은 대소 문자를 구분 없이 사용되므로, 소문자 키만 포함해야 합니다.

버전 3.9에서 변경: 이 딕셔너리는 더는 기본 시스템 매핑으로 채워지지 않고, 재정의 만 포함합니다.

### directory
지정되지 않으면, 제공할 디렉터리는 현재 작업 디렉터리입니다.

버전 3.9에서 변경: 경로류 객체를 받아들입니다.

SimpleHTTPRequestHandler 클래스는 다음 메서드를 정의합니다:

### do_HEAD()
이 메서드는 'HEAD' 요청 유형을 제공합니다: 동등한 GET 요청에 대해 전송할 헤더를 전송합니다. 가능한 헤더에 대한 더 완전한 설명은 do_GET() 메서드를 참조하십시오.

### do_GET()
요청을 현재 작업 디렉터리에 상대적인 경로로 해석하여 요청은 로컬 파일에 매핑됩니다.

요청이 디렉터리에 매핑되었으면, 디렉터리는 index.html이나 index.htm (이 순서대로) 파일을 검사합니다. 발견되면, 파일 내용이 반환됩니다; 그렇지 않으면 list_directory() 메서드를 호출하여 디렉터리 목록이 생성됩니다. 이 메서드는 os.listdir()을 사용하여 디렉터리를 스캔하고, listdir()이 실패하면 404 에러 응답을 반환합니다.

요청이 파일에 매핑되었으면, 파일을 엽니다. 요청된 파일을 열 때 발생하는 OSError 예외는 404, 'File not found' 에러로 매핑됩니다. 요청에 'If-Modified-Since' 헤더가 있고, 이 시간 이후 파일이 수정되지 않았으면, 304, 'Not Modified' 응답이 전송됩니다. 그렇지 않으면, 콘텐츠 유형은 guess_type() 메서드를 호출하여 추측되며, 이 메서드는 extensions_map 변수를 사용합니다. 그런 다음 파일 내용이 반환됩니다.

추측된 콘텐츠 유형의 'Content-type:' 헤더가 출력되고, 파일 크기가 담긴 'Content-Length:' 헤더와 파일 수정 시간이 담긴 'Last-Modified:' 헤더가 뒤따릅니다.

그런 다음 헤더의 끝을 나타내는 빈 줄이 따라온 후에, 파일의 내용이 출력됩니다. 파일의 MIME 유형이 text/로 시작하면 파일은 텍스트 모드로 열립니다; 그렇지 않으면 바이너리 모드가 사용됩니다.

## class http.server.CGIHTTPRequestHandler(request, client_address, server)
이 클래스는 현재 디렉터리와 그 아래에 있는 파일이나 CGI 스크립트의 출력을 제공하는 데 사용됩니다. HTTP 계층 구조를 로컬 디렉터리 구조에 매핑하는 것은 SimpleHTTPRequestHandler와 정확히 같음에 유의하십시오.

참고 CGIHTTPRequestHandler 클래스가 실행하는 CGI 스크립트는 리디렉션(HTTP 코드 302)을 실행할 수 없습니다, CGI 스크립트를 실행하기 전에 코드 200(스크립트 출력이 이어집니다)이 전송되기 때문입니다. 이것은 상태 코드를 선점합니다.
클래스는 CGI 스크립트라고 생각되면 파일로 제공하는 대신 CGI 스크립트를 실행합니다. 디렉터리 기반 CGI만 사용됩니다 --- 다른 일반적인 서버 구성은 특수한 확장자를 CGI 스크립트를 나타내는 것으로 취급하는 것입니다.

요청이 cgi_directories 경로 아래로 이어지면, 파일을 제공하는 대신 CGI 스크립트를 실행하고 출력을 제공하도록 do_GET()과 do_HEAD() 함수가 수정되었습니다.

CGIHTTPRequestHandler는 다음 데이터 멤버를 정의합니다:

### cgi_directories
기본값은 ['/cgi-bin', '/htbin']이며 CGI 스크립트를 포함하는 것으로 취급할 디렉터리를 기술합니다.

CGIHTTPRequestHandler는 다음 메서드를 정의합니다:

### do_POST()
이 메서드는 'POST' 요청 유형을 제공하며, CGI 스크립트에만 허용됩니다. CGI 이외의 url에 POST를 시도할 때 에러 501, "Can only POST to CGI scripts"가 출력됩니다.

보안상의 이유로, CGI 스크립트는 nobody 사용자의 UID로 실행됨에 유의하십시오. CGI 스크립트 문제는 에러 403으로 변환됩니다.

--cgi 옵션을 전달하여 명령 줄에서 CGIHTTPRequestHandler를 사용할 수 있습니다:

```shell
python -m http.server --cgi 8000
```
[출처]: https://docs.python.org/3/library/http.server.html#http.server.BaseHTTPRequestHandler.send_response_only

