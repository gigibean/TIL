import cgi
form = cgi.FieldStorage()
title = form.getvalue('title')
content = form.getvalue('content')

print("Cotent-Type: text/plain")
print()

print("CGI Scripts")
print("title is ", title)
print("content is ", content)