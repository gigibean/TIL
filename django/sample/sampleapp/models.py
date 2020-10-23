# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models


class AuthGroup(models.Model):
    name = models.CharField(unique=True, max_length=150)

    class Meta:
        managed = False
        db_table = 'auth_group'


class AuthGroupPermissions(models.Model):
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)
    permission = models.ForeignKey('AuthPermission', models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_group_permissions'
        unique_together = (('group', 'permission'),)


class AuthPermission(models.Model):
    name = models.CharField(max_length=255)
    content_type = models.ForeignKey('DjangoContentType', models.DO_NOTHING)
    codename = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'auth_permission'
        unique_together = (('content_type', 'codename'),)


class AuthUser(models.Model):
    password = models.CharField(max_length=128)
    last_login = models.DateTimeField(blank=True, null=True)
    is_superuser = models.IntegerField()
    username = models.CharField(unique=True, max_length=150)
    first_name = models.CharField(max_length=150)
    last_name = models.CharField(max_length=150)
    email = models.CharField(max_length=254)
    is_staff = models.IntegerField()
    is_active = models.IntegerField()
    date_joined = models.DateTimeField()

    def __str__(self):
        return self.username

    class Meta:
        managed = False
        db_table = 'auth_user'


class AuthUserGroups(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    group = models.ForeignKey(AuthGroup, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_groups'
        unique_together = (('user', 'group'),)


class AuthUserUserPermissions(models.Model):
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)
    permission = models.ForeignKey(AuthPermission, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'auth_user_user_permissions'
        unique_together = (('user', 'permission'),)


class DjangoAdminLog(models.Model):
    action_time = models.DateTimeField()
    object_id = models.TextField(blank=True, null=True)
    object_repr = models.CharField(max_length=200)
    action_flag = models.PositiveSmallIntegerField()
    change_message = models.TextField()
    content_type = models.ForeignKey(
        'DjangoContentType', models.DO_NOTHING, blank=True, null=True)
    user = models.ForeignKey(AuthUser, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'django_admin_log'


class DjangoContentType(models.Model):
    app_label = models.CharField(max_length=100)
    model = models.CharField(max_length=100)

    class Meta:
        managed = False
        db_table = 'django_content_type'
        unique_together = (('app_label', 'model'),)


class DjangoMigrations(models.Model):
    app = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    applied = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_migrations'


class DjangoSession(models.Model):
    session_key = models.CharField(primary_key=True, max_length=40)
    session_data = models.TextField()
    expire_date = models.DateTimeField()

    class Meta:
        managed = False
        db_table = 'django_session'


class File(models.Model):
    post = models.ForeignKey(
        'Post', on_delete=models.CASCADE)
    bf_no = models.IntegerField()
    bf_source = models.CharField(max_length=255)
    bf_filesize = models.IntegerField()
    bf_storage = models.CharField(max_length=50)
    bf_width = models.IntegerField()
    bf_height = models.IntegerField()
    bf_datetime = models.DateTimeField()
    bf_id = models.AutoField(primary_key=True)

    class Meta:
        managed = True
        db_table = 'file'


class Good(models.Model):
    bg_id = models.AutoField(primary_key=True)
    post = models.ForeignKey(
        'Post', on_delete=models.CASCADE)
    member = models.ForeignKey(
        'AuthUser', on_delete=models.CASCADE, related_name='good_user')
    bg_flag = models.CharField(max_length=255)
    bg_datetime = models.DateTimeField()

    class Meta:
        managed = True
        db_table = 'good'


class Message(models.Model):
    me_id = models.AutoField(primary_key=True)
    me_send_mb_name = models.ForeignKey(
        'AuthUser', on_delete=models.CASCADE, related_name='send_username')
    me_send_datetime = models.DateTimeField()
    me_read_datetime = models.DateTimeField()
    me_message = models.TextField()
    me_send_id = models.IntegerField()
    me_type = models.CharField(max_length=4)
    me_recv_mb_name = models.ForeignKey(
        'AuthUser', on_delete=models.CASCADE, related_name='recv_username')

    class Meta:
        managed = True
        db_table = 'message'


class New(models.Model):
    bn_id = models.AutoField(primary_key=True)
    post = models.ForeignKey(
        'Post', on_delete=models.CASCADE)
    po_parent = models.IntegerField()
    bn_datetime = models.DateTimeField()
    # member = models.ForeignKey(
    #     'AuthUser', on_delete=models.CASCADE, related_name='member_username')

    class Meta:
        managed = True
        db_table = 'new'


class Post(models.Model):
    po_id = models.AutoField(primary_key=True)
    po_num = models.IntegerField()
    po_parent = models.IntegerField()
    po_is_comment = models.IntegerField()
    po_comment = models.IntegerField()
    po_comment_reply = models.CharField(max_length=5, blank=True, null=True)
    po_title = models.CharField(max_length=255)
    po_content = models.TextField()
    po_link1 = models.TextField(blank=True, null=True)
    po_link2 = models.TextField(blank=True, null=True)
    po_hit = models.IntegerField()
    po_good_cnt = models.IntegerField()
    member = models.ForeignKey(
        'AuthUser', on_delete=models.CASCADE, related_name='posting_user')
    po_option = models.CharField(max_length=13)
    po_uploadtime = models.DateTimeField()
    po_file_cnt = models.IntegerField()

    def __str__(self):
        return self.po_title

    class Meta:
        managed = True
        db_table = 'post'
