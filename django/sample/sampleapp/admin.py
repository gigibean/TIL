from django.contrib import admin

from .models import File, Good, New, Post, Message
# Register your models here.


class PostAdmin(admin.ModelAdmin):
    list_display = ('po_title', 'member')


admin.site.register(Post, PostAdmin)
admin.site.register(File)
admin.site.register(Good)
admin.site.register(New)
admin.site.register(Message)
