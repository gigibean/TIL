from rest_framework import viewsets
from .serializers import PostSerializer
from .models import Post
from rest_framework import permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model


# Create your views here.
class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

# class LikeToggleAPIView(APIView):
#     permission_classes = [permissions.IsAuthenticated]
#     def get(self, request, pk, format=None):
#         post_qs=Post.objects.filter(pk=pk)
#         message = "Not Allowed"
#         if request.user.is_authenticated():
#             is_liked = Post.objects.like_toggle(request.user, post_qs.first())
#             return Response({'liked': is_liked})
#         return Response({'message':message}, status=400)