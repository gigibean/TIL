from wsgiref.simple_server import make_server

def my_app(environ, start_response):
    status = '200 OK'
    headers = [('Content-Type', 'text/plan')]
    start_response(status, headers)

    response = [b'this is a sample WSGI application']

    return response

if __name__ == '__main__':
    print("Started WSGI Server on port 8888...")
    server = make_server('', 8888, my_app)
    server.serve_forever()
