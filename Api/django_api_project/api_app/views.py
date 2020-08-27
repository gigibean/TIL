from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Post
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.http.response import HttpResponse

# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

@csrf_exempt
def cookie_view(request):
    print('cookie_view_post()...')
    print('request.COOKIES:', request.COOKIES)

    if request.method == 'POST':
        if request.session.test_cookie_worked():
            print("cookies:", request.session.items())
            request.session.delete_test_cookie()
            return HttpResponse("POST request&response... OK")
        else:
            return HttpResponse("POST request&response... NOK")
    request.session.set_test_cookie()

    return HttpResponse('GET request&response')

'''
Setting test cookies
As a convenience, Django provides a way to test whether the user’s browser accepts cookies. Call the set_test_cookie() method of request.session in a view, and call test_cookie_worked() in a subsequent view – not in the same view call.

This awkward split between set_test_cookie() and test_cookie_worked() is necessary due to the way cookies work. When you set a cookie, you can’t actually tell whether a browser accepted it until the browser’s next request.

It’s good practice to use delete_test_cookie() to clean up after yourself. Do this after you’ve verified that the test cookie worked.

Here’s a typical usage example:

from django.http import HttpResponse
from django.shortcuts import render

def login(request):
    if request.method == 'POST':
        if request.session.test_cookie_worked():
            request.session.delete_test_cookie()
            return HttpResponse("You're logged in.")
        else:
            return HttpResponse("Please enable cookies and try again.")
    request.session.set_test_cookie()
    return render(request, 'foo/login_form.html')
'''

# class LikeToggleAPIView(APIView):
#     permission_classes = [permissions.IsAuthenticated]
#     def get(self, request, pk, format=None):
#         post_qs=Post.objects.filter(pk=pk)
#         message = "Not Allowed"
#         if request.user.is_authenticated():
#             is_liked = Post.objects.like_toggle(request.user, post_qs.first())
#             return Response({'liked': is_liked})
#         return Response({'message':message}, status=400)