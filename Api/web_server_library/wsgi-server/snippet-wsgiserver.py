from wsgiref.simple_server import make_server

def my_app(environ, start_response):
    # Build the response body possibly using the supplied environ dic
    # response_body = 'Request method: %s' % environ['REQUEST_METHOD']
    response = [b'this is a sample WSGI application']

    # HTTP response code and message
    status = '200 OK'

    # HTTP headers expected by the client
    # They must be wrapped as a list of tupled pairs
    # [(header name, header value)]
    headers = [
        ('Content-Type', 'text/plain'),
        #('Content-Length', str(len(response_body)))
        ]
    
    # Send them to the server using the supplied function
    start_response(status, headers)

    
    return response
    #return [response_body]

if __name__ == '__main__':
    print("Started WSGI Server on port 8888...")
    server = make_server('', 8888, my_app)
    server.serve_forever()
