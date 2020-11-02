# Generated by Django 3.0.8 on 2020-10-23 01:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AuthGroup',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150, unique=True)),
            ],
            options={
                'db_table': 'auth_group',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthGroupPermissions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'auth_group_permissions',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthPermission',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('codename', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'auth_permission',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthUser',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128)),
                ('last_login', models.DateTimeField(blank=True, null=True)),
                ('is_superuser', models.IntegerField()),
                ('username', models.CharField(max_length=150, unique=True)),
                ('first_name', models.CharField(max_length=150)),
                ('last_name', models.CharField(max_length=150)),
                ('email', models.CharField(max_length=254)),
                ('is_staff', models.IntegerField()),
                ('is_active', models.IntegerField()),
                ('date_joined', models.DateTimeField()),
            ],
            options={
                'db_table': 'auth_user',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthUserGroups',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'auth_user_groups',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='AuthUserUserPermissions',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'auth_user_user_permissions',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoAdminLog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('action_time', models.DateTimeField()),
                ('object_id', models.TextField(blank=True, null=True)),
                ('object_repr', models.CharField(max_length=200)),
                ('action_flag', models.PositiveSmallIntegerField()),
                ('change_message', models.TextField()),
            ],
            options={
                'db_table': 'django_admin_log',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoContentType',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('app_label', models.CharField(max_length=100)),
                ('model', models.CharField(max_length=100)),
            ],
            options={
                'db_table': 'django_content_type',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoMigrations',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('app', models.CharField(max_length=255)),
                ('name', models.CharField(max_length=255)),
                ('applied', models.DateTimeField()),
            ],
            options={
                'db_table': 'django_migrations',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='DjangoSession',
            fields=[
                ('session_key', models.CharField(max_length=40, primary_key=True, serialize=False)),
                ('session_data', models.TextField()),
                ('expire_date', models.DateTimeField()),
            ],
            options={
                'db_table': 'django_session',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Post',
            fields=[
                ('po_id', models.AutoField(primary_key=True, serialize=False)),
                ('po_num', models.IntegerField()),
                ('po_parent', models.IntegerField()),
                ('po_is_comment', models.IntegerField()),
                ('po_comment', models.IntegerField()),
                ('po_comment_reply', models.CharField(blank=True, max_length=5, null=True)),
                ('po_title', models.CharField(max_length=255)),
                ('po_content', models.TextField()),
                ('po_link1', models.TextField(blank=True, null=True)),
                ('po_link2', models.TextField(blank=True, null=True)),
                ('po_hit', models.IntegerField()),
                ('po_good_cnt', models.IntegerField()),
                ('po_option', models.CharField(max_length=13)),
                ('po_uploadtime', models.DateTimeField()),
                ('po_file_cnt', models.IntegerField()),
                ('member', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='posting_user', to='sampleapp.AuthUser')),
            ],
            options={
                'db_table': 'post',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='New',
            fields=[
                ('bn_id', models.AutoField(primary_key=True, serialize=False)),
                ('po_parent', models.IntegerField()),
                ('bn_datetime', models.DateTimeField()),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sampleapp.Post')),
            ],
            options={
                'db_table': 'new',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Message',
            fields=[
                ('me_id', models.AutoField(primary_key=True, serialize=False)),
                ('me_send_datetime', models.DateTimeField()),
                ('me_read_datetime', models.DateTimeField()),
                ('me_message', models.TextField()),
                ('me_send_id', models.IntegerField()),
                ('me_type', models.CharField(max_length=4)),
                ('me_recv_mb_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='recv_username', to='sampleapp.AuthUser')),
                ('me_send_mb_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='send_username', to='sampleapp.AuthUser')),
            ],
            options={
                'db_table': 'message',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='Good',
            fields=[
                ('bg_id', models.AutoField(primary_key=True, serialize=False)),
                ('bg_flag', models.CharField(max_length=255)),
                ('bg_datetime', models.DateTimeField()),
                ('member', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='good_user', to='sampleapp.AuthUser')),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sampleapp.Post')),
            ],
            options={
                'db_table': 'good',
                'managed': True,
            },
        ),
        migrations.CreateModel(
            name='File',
            fields=[
                ('bf_no', models.IntegerField()),
                ('bf_source', models.CharField(max_length=255)),
                ('bf_filesize', models.IntegerField()),
                ('bf_storage', models.CharField(max_length=50)),
                ('bf_width', models.IntegerField()),
                ('bf_height', models.IntegerField()),
                ('bf_datetime', models.DateTimeField()),
                ('bf_id', models.AutoField(primary_key=True, serialize=False)),
                ('post', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sampleapp.Post')),
            ],
            options={
                'db_table': 'file',
                'managed': True,
            },
        ),
    ]