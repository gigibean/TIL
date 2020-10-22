# Django ORM

## Foreign Key

### Related Name

`related_name` 속성은 하나의 모델에서 모델로서의 역관계 이름을 지정한다.  
`related_name` 을 직접 지정하지 않으면 장고는 자동으로 접미사 모델의 이름을 사용하여 하나의 `related_name`을 만든다.

그리고 이 `related_name`을 사용하지 않고도 해당 모델 클래스를 `_set`을 통해서 부를 수 있다.
예를 들어 User라는 클래스와 Grades 라는 클래스가 있다고 할 때, 이 두 테이블은 N:1 관게에 있으며 User 객체가 Grades 객체를 참조한다.

```
class User(models.Model):
    name = models.CharField()
    ...
    grades = models.ForeignKey('Grades', on_delete = models.CASCASE)

class Grades(models.Model):
    name = models.CharField()
```

User 객체는 Grades 객체를 정참조하고 있고, 속성 이름으로 바로 접근할 수 있다.

```
user1 = User.obejects.get(id=1)
user1.grades.name
>>> 'A'
```

그러나 Grades 객체는 User를 역참조 하고 있으므로 바로 접근이 불가능하다.  
(Grades 객체에서 User 의 name 같은 것에 접근 할 수 없다. 반대는 가능 (역참조, 정참조))

이러한 역참조 관계에 있을 때는 `[class_name]_set` 를 사용하여 역참조하고 있는 객체에 접근할 수 있다.

```
grades1 = Grades.objects.get(id=1)
students = grades1.user_set.all()
>> <QuerySet[<Object User Object(1)>, <Object User Object(2)>]>
```

여기서 `user_set` 대신 사용할 수 있는 것이 `related_name` 이다.
역참조 대상인 객체를 부를 때 사용할 수 있다.

```
class User(models.Model):
    name = models.CharField()
    ...
    grades = models.ForeignKey('Grades', on_delete = models.CASCASE, related_name='user_idfk_summber_g')

class Grades(models.Model):
    name = models.CharField()
```

이라고 `related_name`을 지정하면,

```
grades = Grades.Objects.get(id=1)
students = grades1.user_idfk_summber_g.all()
>> <QuerySet[<Object User Object(1)>, <Object User Object(2)>]>
```

이렇게 사용할 수 있다. 위는 편의상 사용할 수 있는 방법이라면  
꼭 `related_name`을 사용해야 할 때도 있다.

동일한 테이블을 가리키는 2개의 FK 가 있는 경우 반드시 `related_name`을 지정해주어야 한다.

예를 들어 학생의 성적이 여름과 겨울로 나뉘어 있다고 생각해보자.

```
class User(models.Model):
    name = models.CharField()
    ...
    summer_grades = models.ForeignKey('Grades', on_delete = models.CASCASE, related_name='user_idfk_summber_g')
    winter_grades = models.ForeignKey('Grades', on_delete = models.CASCASE, related_name='user_idfk_winter_g')


class Grades(models.Model):
    name = models.CharField()
```

애초에 `related_name` 을 정의하지 않았다면 마이그레이션이 되지 않는다.  
User 객체에서 Grades 객체를 정참조하는 속성이 두 개가 있다.

이러한 같은 객체 2개를 참조하는 인스턴스가 2개가 있다고 하면,

```
user1 = User.objects.create(name = 'Kim', summer_grades_id=1, winter_grades_id=2)
user2 = User.objects.create(name = 'Ko', summer_grades_id=3, winter_grades_id=1)
```

- django 에서는 모델의 필드를 외래키로 설정하면 해당 필드의 이름에 '\_id'가 추가 된다.
- 그렇기 때문에 외래키를 추가할 때 something_id 라는 이름을 지으면 컬럼이름이 something으로 남게된다. (id 역할을 하는 컬럼)

이렇게 Grades를 참조하여 2개의 외래 키를 가진 인스턴스를 생성한 후 이 인스턴스들의 쿼리문에서  
Grades의 id 가 1인 인스턴스를 추출하여 그에 맞는 User 인스턴스들를 가져오고자 한다.

```
grades1 = Grades.objects.get(id=1)
grades1.user_set.all()
```

하지만, 이 때 `related_name` 이 없다면, django는 이 둘(summer_grades_id, winter_grades_id)을 구분할 수 없게 되고,
그렇기 때문에 `related_name`이 필수가 된다.

```
grades1 = Grades.objects.get(id=1)
grades1.user_idfk_summber_g.all()
>> <QuerySet[<Object User Object(1)>]> // Kim
grades1.user_idkf_winter_g.all()
>> <QuerySet[<Object User Object(2)>]> // Ko
```

이런식으로 구분할 수 있게 된다.
이와 같은 원리와 마찬가지로 ManyToMany 관계일 때도 `related_name`은 필수가 된다.

## migrate: doesn't create tables

migrate를 했는데 db에 반영이 안될 때가 있다.  
그럴 땐, 우선

```
class Meta:
    managed = True
    db_table = 'post'
```

이 메타 클래스에서 `managed`가 `False`인지 확인해야한다.
Django docs에 따르면, options.managed 는 만약 False라면 db table이 생성되거나 operations 를 지우는 것들이 이 모델에서 작동하지 않는 다는 것을 의미한다.
그렇기 때문에 `managed`를 `False`에서 `True`로 바꿔준다.

이렇게 하고 migrate를 했지만, 그대로 db에 반영되지 않을 때가 있다. 이럴땐,

```
python manage.py migrate --fake APPNAME zero
```

를 먼저 한다음에

```
python manage.py migrate APPNAME
```

을 하면 된다.

migrate를 할 떄, db에 반영되지 않는다면,

```
>> No migrations to apply
```

라고 나온다.  
그렇기 때문에 가짜로 우선 migrate를 해주는 명령어를 실행하고 migrate를 다시 해주는 것이다.  
이렇게 되면

```
>> Running migrations
```

라고 나오며 migrate를 하게 된다.  
[출처]

### ORM -> Mysql

```
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
    member = models.ForeignKey('AuthUser', on_delete=models.CASCADE, related_name='member_username')
    po_option = models.CharField(max_length=13)
    mb_email = models.CharField(max_length=254)
    po_uploadtime = models.DateTimeField()
    po_file_cnt = models.IntegerField()

    def __str__(self):
        return self.po_title

    class Meta:
        managed = False
        db_table = 'post'
```

```
| post  | CREATE TABLE `post` (
  `po_id` int(11) NOT NULL AUTO_INCREMENT,
  `po_num` int(11) NOT NULL,
  `po_parent` int(11) NOT NULL,
  `po_is_comment` int(11) NOT NULL,
  `po_comment` int(11) NOT NULL,
  `po_comment_reply` varchar(5) DEFAULT NULL,
  `po_title` varchar(255) NOT NULL,
  `po_content` longtext NOT NULL,
  `po_link1` longtext DEFAULT NULL,
  `po_link2` longtext DEFAULT NULL,
  `po_hit` int(11) NOT NULL,
  `po_good_cnt` int(11) NOT NULL,
  `po_option` varchar(13) NOT NULL,
  `mb_email` varchar(254) NOT NULL,
  `po_uploadtime` datetime(6) NOT NULL,
  `po_file_cnt` int(11) NOT NULL,
  `member_id` int(11) NOT NULL,
  PRIMARY KEY (`po_id`),
  KEY `post_member_id_6f6b6d4a_fk_auth_user_id` (`member_id`),
  CONSTRAINT `post_member_id_6f6b6d4a_fk_auth_user_id` FOREIGN KEY (`member_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |
```

여기서 봐야할 부분은 FOREIGN KEY 이다.

```
member = models.ForeignKey('AuthUser', on_delete=models.CASCADE, related_name='member_username')
```

위에서 아래로 변환된다.

```
KEY `post_member_id_6f6b6d4a_fk_auth_user_id` (`member_id`), CONSTRAINT `post_member_id_6f6b6d4a_fk_auth_user_id` FOREIGN KEY (`member_id`) REFERENCES `auth_user` (`id`)
```

정리하자면,

- 키 이름을 자동 생성하고,
- 연결된 객체의 이름을 member(객체가져오는) 라고 지정했다면
- django에서 알아서 `member_id`라는 지정한 이름에 `_id`가 붙은 외래키 이름을 생성한다.
- 이는 참조하는 객체의 id와 연결된다.

[출처]: https://stackoverflow.com/questions/35494035/django-migrate-doesnt-create-tables/43677713#43677713
