# API

<b>Index</b>

- [Post 용 API APP](https://github.com/gigibean/TIL/tree/master/Api/django_api_project)
- [Web Server Library](https://github.com/gigibean/TIL/tree/master/Api/web_server_library)
  - [http server snippet](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/http_server_snippet.py)
  - [cgi server](https://github.com/gigibean/TIL/tree/master/Api/web_server_library/cgi-server)
  - [wsgi server](https://github.com/gigibean/TIL/tree/master/Api/web_server_library/wsgi-server)
  - [Request](https://github.com/gigibean/TIL/tree/master/Api/web_server_library/request)
    - [http.client](https://github.com/gigibean/TIL/tree/master/Api/web_server_library/request/http.client)
      - [html.parser 이용한 이미지 다운로드](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/http.client/html_parser_download_host_imgs.py)
      - [request head](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/http.client/reqeust_head.py)
      - [request get](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/http.client/request_get.py)
      - [request post](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/http.client/request_post.py)
      - [request put](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/http.client/request_put.py)
    - [urllib.request](https://github.com/gigibean/TIL/tree/master/Api/web_server_library/request/urllib.request)
      - [request 모듈](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/urllib.request/request_module.py)
      - [html parser request](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/urllib.request/html_parser.py)
      - [프록시 서버 요청, 인증](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/urllib.request/proxyhandler_and_proxybasicauthhandler.py)
      - [쿠키 오픈, 데이터 저장](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/urllib.request/req_HTTPCookieProcessor.py)
      - [헤더 요청](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/urllib.request/req_add_header_module.py)
      - [request header 추가 후 보내고 받기(http 에러 모듈)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/urllib.request/req_add_header_w_HTTPError_module.py)
      - [reqest header 추가 후 보내고 받기(Url 에러 모듈)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/urllib.request/req_add_header_w_URLError_module.py)
      - [request 헤더 추가 보내고 받기(url, http 에러 모듈)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/request/urllib.request/req_add_header_w_two_error_module.py)
    - [문서](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md)
      - [http.server](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#httpserver)
        - [웹 서버용 파이썬 라이브러리 주요 클래스](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#%EC%9B%B9-%EC%84%9C%EB%B2%84%EC%9A%A9-%ED%8C%8C%EC%9D%B4%EC%8D%AC-%EB%9D%BC%EC%9D%B4%EB%B8%8C%EB%9F%AC%EB%A6%AC-%EC%A3%BC%EC%9A%94-%ED%81%B4%EB%9E%98%EC%8A%A4)
        - [class http.server.HTTPServer(server_address, RequestHandlerClass)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#class-httpserverhttpserverserver_address-requesthandlerclass)
          - [serve_forever(poll_interval=0.5)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#serve_foreverpoll_interval05)
        - [class http.server.BaseHTTPRequestHandler(request, client_address, server)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#class-httpserverbasehttprequesthandlerrequest-client_address-server)
          - [client_address](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#client_address)
          - [server](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#server)
          - [close_connection](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#close_connection)
          - [requestline](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#requestline)
          - [command](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#command)
          - [path](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#path)
          - [request_version](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#request_version)
          - [headers](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#headers)
          - [rfile](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#rfile)
          - [wfile](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#wfile)
        - [server_version](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#server_version)
        - [sys_version](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#sys_version)
          - [error_message_format](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#error_message_format)
          - [error_content_type](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#error_content_type)
          - [protocol_version](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#protocol_version)
          - [MessageClass](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#messageclass)
          - [responses](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#responses)
            - [handle()](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#handle)
          - [handle_one_request()](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#handle_one_request)
          - [handle_expect_100()](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#handle_expect_100)
          - [send_error(code, message=None, explain=None)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#send_errorcode-messagenone-explainnone)
          - [send_response(code, message=None)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#send_responsecode-messagenone)
          - [send_header(keyword, value)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#send_headerkeyword-value)
          - [send_response_only(code, message=None)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#send_response_onlycode-messagenone)
          - [end_headers()](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#end_headers)
          - [flush_headers()](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#flush_headers)
          - [log_request(code='-', size='-')](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#log_requestcode--size-)
          - [log_error(...)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#log_error)
          - [log_message(format, ...)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#log_messageformat-)
          - [version_string()](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#version_string)
          - [date_time_string(timestamp=None)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#date_time_stringtimestampnone)
          - [log_date_time_string()](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#log_date_time_string)
          - [address_string()](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#address_string)
        - [class http.server.SimpleHTTPRequestHandler(request, client_address, server, directory=None)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#class-httpserversimplehttprequesthandlerrequest-client_address-server-directorynone)
          - [server_version](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#server_version-1)
          - [extensions_map](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#extensions_map)
          - [directory](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#directory)
          - [do_HEAD()](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#do_head)
          - [do_GET()](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#do_get)
        - [class http.server.CGIHTTPRequestHandler(request, client_address, server)](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#class-httpservercgihttprequesthandlerrequest-client_address-server)
          - [cgi_directories](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#cgi_directories)
          - [do_POST()](https://github.com/gigibean/TIL/blob/master/Api/web_server_library/docs/doc1.md#do_post)
