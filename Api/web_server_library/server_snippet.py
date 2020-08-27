from http.server import HTTPServer, BaseHTTPRequestHandler

class MyHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response_only(200, 'OK')
        self.send_header('Content-Type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'hello world')

if __name__ == '__main__':
    server = HTTPServer(('', 8800), MyHandler)
    # 서버의 IO, PORT 및 핸들러 클래스를 인자로 하여 HTTPServer 객체를 생성함
    # class http.server.HTTPServer(server_address, RequestHandlerClass)
    print('started webserver on port 8800....')
    print('press Ctrl+Alt+M to quit webserver')
    server.serve_forever()
    # HTTPServer 객체의 serve_forever() 메소드를 호출
    