from rest_framework import serializers
from .models import Post
from django.contrib.auth import get_user_model

User = get_user_model()

# class UserDisplaySerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = [
#             'username',
#             'first_name',
#             'last_name'
#         ]



class PostSerializer(serializers.ModelSerializer):
    # user=UserDisplaySerializer(read_only=True)
    # created_at = serializers.SerializerMethodField()
    # updated_at= serializers.SerializerMethodField()
    # likes=serializers.SerializerMethodField() 
    # model엔 liked와 is_liked만있고 likes와 did_like는 없어 그래서 시리얼라이저로 만들어 줌
    # did_like=serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = '__all__'
    #     fields = [
    #         'id',
    #         'user',
    #         'title',
    #         'content',
    #         'created_at',
    #         'updated_at',
    #         'likes',
    #         'did_like',
    #     ]
    
    # def get_did_like(self, obj):
    #     request = self.context.get("request")
    #     try:
    #         user = request.user
    #         if user.is_authenticated():
    #             if user in obj.liked.all():
    #                 return True
    #     except:
    #         pass
    #     return False

    # def get_likes(self, obj):
    #     return obj.liked.all().count()