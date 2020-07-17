from django.db import models
from django.conf import settings 

# class PostManager(models.Manager):
#     def like_toggle(self, user, post_obj):
#         if user in post_obj.liked.all():
#             is_liked = False
#             post_obj.liked.remove(user)
#         else:
#             is_liked = True
#             post_obj.liked.add(user)
#         return is_liked


class Post(models.Model):
    # user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    title = models.CharField(max_length=30)
    content = models.TextField()
    # liked = models.ManyToManyField(settings.AUTH_USER_MODEL, blank=True, related_name='liked')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    # objects = PostManager()

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['-created_at']

