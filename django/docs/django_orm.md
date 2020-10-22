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
    grades = models.ForeignKey('grades', on_delete = models.CASCASE)

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
    grades = models.ForeignKey('grades', on_delete = models.CASCASE, related_name='user_idfk_summber_g')

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
    summer_grades = models.ForeignKey('grades', on_delete = models.CASCASE, related_name='user_idfk_summber_g')
    winter_grades = models.ForeignKey('grades', on_delete = models.CASCASE, related_name='user_idfk_winter_g')


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
