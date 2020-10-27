# Django Field

## Relationship Fields

### ForeignKey

```
class ForeignKey(to, on_delete, **options)
```

다대일관계.
두개의 인수가 필요하다(to, on_delete)

자신과 다대일 관계를 갖는 객체를 생성하려면

```python
foo = models.ForeignKey(
    'self', on_delete = models.CASCADE
)
```

를 사용하면 된다.

아직 정의되지 않은 모델에 관계를 만들어야하는 경우 모델 개체 자체가 아닌 모델 이름을 사용할 수 있다.

```python
from django.db import models

class Car(models.Model):
    manufacturer = models.ForeignKey(
        'Manufacturer',
        on_delete = models.CASCADE,
    )
    # ..
class Manufacturer(models.Model):
    # ...
    pass
```

추상 모델에서 이러한 방식으로 정의된 관계는 모델이 구체적인 모델로 하위 클래스화되고 추상 모델의 app_label 과 관련이 없을 때 해결된다.

```python
from django.db import models

class AbstractCar(models.Model):
    manufacturer = odels.ForeignKey('Manufacturer', on_delete=models.CASCADE)

    class Meta:
        abstract = True
```

```python
from django.db import models
from products.models import AbstractCar

class Manufacturer(models.Model):
    pass

class Car(AbstractCar):
    pass
```

다른 어플리케이션에 정의된 모델을 참조하기 위해 전체 애플리케이션 레이블이 있는 모델을 명시적으로 지정할 수 있다.
예를들어 위 Manufactorer 모델이 production이라는 다른 애플리케이션에 정의된 경우 아래와 같이 사용할 수 있다.

```python
class Car(models.Model):
    manufacturer = models.FogeignKey(
        'production.Manufacturer',
        on_delete = models.CASCADE,
    )
```

lazy relationship이라고하는 이러한 종류의 참조는 두 응용프로그램 간의 circular import 종속성을 해결할 때 유용할 수 있다.

데이터베이스 인덱스는 ForeignKey에 자동으로 생성된다.  
db_index를 False로 설정하여 이를 비활성화할 수 있다.

join이 아닌 일관성을 위해 외래키를 생성하거나 부분 또는 다중 열 인덱스와 같은 대체 인덱스를 생성하는 경우 인덱스의 오버헤드를 피할 수 있다.

FK로 객체를 연결하면 django는 필드이름에 '\_id'를 추가하여 데이터베이스 열 이름을 만든다. 위의 예에서 Car 모델의 데이터베이스테이블에는 manufacturer_id 열이 있다.  
db_column을 지정하여 명시적으로 변경할 수 있다. 그러나 사용자 지정 sql을 작성하지 않는한 코드에서 데이터베이스 열 이름을 치리할 필요가 없다. 항상 모델 캐체의 필드 이름을 다루기 때문이다.

#### ForeignKey Arguments

##### ForeignKey.on_delete

- SET_NULL
  참조된 개체가 삭제될때 NULL로 설정되기를 원하는 경우

```python
user =models.ForeignKey(
    User,
    models.SET_NULL,
    blank = True,
    null = True,
)
```

- CASCADE
  Cascade 삭제, FK를 포함하는 개체도 삭제한다.  
  Models.delete() 는 관련 모델에서 호출되지 않지만 삭제된 모든 객체에 대해 pre_delete 및 post_delete신호가 전송된다.

- PROTECT
  django.db.IntegrityError의 하위 클래스인 ProtectedError를 발생시켜 참조된 객체의 삭제를 방지한다.

- RESTRICT
  RestrictedError(django.db.IntegrityError의 하위 클래스)를 발생시켜 참조된 객체의 삭제를 방지한다.  
  PROTECT와 달리 참조된개체는 동일한 작업에서 삭제되는 다른 개체를 참조하는 경우 CASCADE 관계를 통해 삭제할 수 있다.

```python
class Artist(models.Model):
    name = models.CharField(max_length=10)

class Album(models.Model):
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)

class Song(models.Model):
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE)
    album = models.ForeignKey(Album, on_delete=models.RESTRICT)
```

Song이 CASCADE를 통해 Artist 를 참조하기 때문에, Song에서 참조하는 Album 삭제를 의미하는 경우에도 Artist 를 삭제할 수 있다.

###### SET_NULL
FK를 null로 설정한다. 

###### SET_DEFAULT
FK의 기본 값을 설정한다. FK의 기본 값은 설정되어 있어야 한다.

###### SET
FK를 SET()에 전달된 값으로 설정하거나 callable이 전달 된 경우 이를 호출 한 결과로 설정한다.     
대부분의 경우 models.py를 가져올 때 퀴리를 실행하지 않으려면 callable를 전달해야 한다.

```python
from django.conf import settings
from djang.contrib.auth import get_user_model
from django.db import models

def get_sentinel_user():
    return get_user_model().objects.get_or_create(username='deleted')[0]

class MyModel(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.SET(get_sentinel_user),
    )
```

###### DO_NOTHING
아무 액션을 취하지 않는다. 데이터베이스 백엔드가 참조 무결성을 적용하는 경우 데이터베이스 필드에 SQL `ON DELETE` 제약 조건을 수동으로 추가하지 않는 한 IntergrityError가 발생한다.

##### ForeignKey.limit_choices_to
이 필드가 ModelForm 또는 admin을 사용하여 렌더링 될 때 이 필드에 대해 사용 가능한 선택 사항에 대한 제한을 설정한다. 
기본적으로 쿼리 세트의 모든 개체를 선택할 수 있음.  
딕셔너리, Q객체 또는 딕셔너리 또는 Q 객체를 반환하는 callable을 사용할 수 있다.

```python
staff_member = models.ForeignKey(
    User,
    on_delete = models.CASCADE,
    limit_choices_to = {'is_staff' : True},
)
```

ModelForm의 해당 필드에 is_staff=True인 사용자만 나열하게 된다.

예를 들어 호출 가능한양식은 python datetime 모듈과 함께 사용하여 날짜 범위별로 선택을 제한할 때 유용할 수 있다.

```python
def limit_pub_date_choices():
    return {'pub_date__lte': datetime.date.utcnow()}

limit_choices_to = limit_pub_date_choices
```

##### ForeignKey.related_name

관련 개체에서 이 개체까지의 관계에 사용할 이름이다. 또한 related_query_name(대상 모델의 역방향 필터 이름에 사용할 이름)의 기본 값이다. 추상모델에서 관계를 정의 할 때 이값을 설정해야 한다. 그렇게 할 때 몇 가지 특수 구문을 사용할 수 있다.

django 가 역방향 관계를 생성하지 않도록 하려면, related_name을 '+'로 설정하거나, '+'로 끝낸다. 예를들어 User 모델의 역방향 관계를 갖지 않도록 해보자.

```python
user = model.ForeignKey(
    User,
    on_delete=models.CASCADE,
    related_name="+",
)
```

##### ForeignKey.related_query_name
대상 모델의 역방향 필더 이름에 사용할 이름이다. 
기본 값은 related_name 또는 default_related_name (설정된 경우) 값이고, 그렇지 않은 경우 기본값은 모델이름이다.

```python
class Tag(models.Model):
    article = models.ForeignKey(
        Article,
        on_delete=models.CASCADE,
        related_name="tags",
        related_query_name="tag",
    )
    name = models.CharField(max_length=255)

Article.objects.filter(tag__name='important')
```

역방향 필터 이름을 `tag__name`을 보면, relate_query_name을 사용했음을 알 수 있다.

related_name과 마찬가지로 related_query_name은 일부 특수 구문을 통해앱레이블 및클래스 보간을 지원한다.

##### ForeignKey.to_field
관계가 있는 관련 개체의 필드이다. 기본적으로 관련 개체의 기본 키를 상용한다. 다른 필드를참조하는 경우 해당 필드를 unique=True라고 해야 한다.    

##### ForeignKey.db_constraint
이 외래 키에 대해 데이터베이스 제약 조건을 만들어야하는지 여부를 제어한다. 기본값은 True이다.
이값을 False로 설정하면데이터 무결성에 나쁜 영향을 줄 수 있다.
False로 설정하면 존재하지 않는 관련 객체에 액세스하면 DoesNotExist 예외가 발생한다. 

##### ForeignKye.swappable
이 ForeignKey 가 스왑 가능한 모델을 가리키는 경우 마이그레이션 프레임워크의 반응을 제어한다.    
True인 경우(기본값) ForeignKey 가 현재 셜정값과 일치하는 모델을 가리키는 경우 AUTH_USER_MODEL (또는 다른 스왑 가능한 모델 설정)은 관계가 아닌 설정에 대한 참조를 사용하여 마이그레이션에 저장된다.

모델이 항상 교체된 모델을 가리켜야한다고 확신하는 경우(예: 사용자 지정 사용자 모델을 위해 특별히 설계된 프로필 모델인 경우)에만 이를 False로 재정의 할 수 있다.

False로 설정한다고 해서 교체 가능한 모델이르 참조할 수 있ㄷ는 의미가 아니다. False는 이 FK 키로 만든 마이그레이션이 항상지정한 정확한 모델을 참조한다는 것을 의미한다. 따라서 사용자가 지원하지 않는 사용자 모델을 실행하려고 한다면 실패하게 된다.

확실하지 않은 경우 기본 값인 True로 해놓는다.

### ManyToManyField

```
class ManyToManyField(to, **options)
```

다대다 관께 재귀 및 지연 관계를 포함하여 FK와 똑같이 작동하는 모델이 관련된 클래스인 positional 인수가 필요하다.

필드의 RelatedManager 를 사용하여 관련 개체를 추가, 제거 또는 만들 수 있다.

django는 다대다 관계를 나타내는 중간 조인 테이블을 만든다. 기본적으로 이 테이블 이름은 다대다 필드의 이름과 이를 포함하는 모델의 테이블 이름을 사용하여 생성되낟. 일부 데이터베이스는특정 길이 이싱의 테이블 이름을 지원하지 않으므로 이러한 테이블 이름은 자동으로 잘리고 author_books_9cdf와 같은 유니크한 해시가 사용된다. db_table옵션을 사용하여 조인 테이블의 이름을 수동으로 제공할 수 있다.

#### Arguments
##### ManyToManyField.related_name
ForeignKey.related_name 과 똑같다.

##### ManyToManyField.related_query_name
ForeignKey.related_query_name과 똑같다.

##### ManyToManyField.limit_choices_to
ForeignKey.limit_choices_to와 똑같다.
limit_choices_to는 through 매개 변수를 사용하여 지정된 사용자 정의 중간 테이블이 있는 ManyToManyField에서 사용될 때 효과가 없다.

##### ManyToManyField.symmetrical
self.ManyToManyFields의 정의에대해서만 사용된다. 

```python
from django.db import models

class Person(models.Model):
    friends = models.ManyToManyField('self')
```
django는 이 모델을 처리할 때 자체에 ManyToManyField가 있음을 식별하므로 Person 클래스에 person_set 속성을 추가하지 않는다. 대신 ManyToManyField 는 대칭적인 것으로 간주된다. 즉, 내가 당신의 친구라면 당신은 나의 친구이다.

자기 자신과 다대다 관계에서 대칭을 원하지 않는 경우 대칭을 False로 설정하면된다. 이렇게 하면 django가 역관계에 대한 설명자를 추가하여 ManyToManyField 관계가 비대칭이 될 수 있다.

중개 모델을 사용하는 재귀 다대다 관계에 대해 symmetrical=True 지정이 django 3.0부터 허용된다.

##### ManyToManyField.through
django는 다대다 관계를 관리하는 테이블을 자동으로 생성한다. 그러나 중간 테이블을 수동으로 지정하는 경우 through옵션을 사용하여 사용하려는 중간 테이블을 나타내는 django 모델을 지정할 수 있다.

이 옵션의 가장 일반적인 용도는 추가 데이터를 다대다 관계와 연결하는 경우이다.

동일한 인스턴스 간에 여러 연결을 원하지 않는 경우 from 및 to 필드를 포함하는 UniqueConstraint 를 추가한다. django의 자동 생성된 다대다 테이블에는 이러한 제약이 포함된다.

중간 모델을 사용하고 대칭 즉, 기본값인 symmetrical=True 사용으로 정의된 재귀 관계는 동일하므로 역방향 접근자의 이름을 결정할 수 없다. 그들 중 하나 이상에 related_name 을 설정해야한다. django가 역방향 관계를  생성하지 않도록 하려면 related_name을 '+'로 설정하면된다.

명시적 through 모델을 지정하지 않아도 연결을 유지하기 위해 생성된 테이블에 직접 액세스하는데 사용할 수 있는 임시적 through 모델 클래스가 있다. 모델을연결하는 세개의 필드가 있다. 소스 및 대상 모델이 다른  경우 다음 필드가 생성된다.

* id: 해당 릴레이션의 PK이다.
* <contraining_model>_id: ManyToManyField를 선언하는 모델의 ID이다.
* <other_model>_id: ManyToManyField가 가리키는 모델의 ID이다.
만약 ManyToManyField가 동일한 모델을 가리키는 경우 다음 필드가 생성된다.
* id: 해당 릴레이션의 PK이다.
* from_<model>_id: 모델을 가리키는 인스턴스의 ID
* to_<model>_id: 관계가 가리키는 인스턴스의 ID (즉, 대상 모델 인스턴스)
이 클래스는 일반 모델과 같이 지정된 모델 인스턴스에 대한 관련 레코드를 쿼리하는데 사용할 수 있다.   

```python
Model.m2mfield.through.objects.all()
```

##### ManyToManyField.through_field
사용자 지정 중개 모델이 지정된 경우에만 사용된다. django는 일반적으로 다대다 관계를 자동으로 설정하기 위해사용할 중개 모델의 필드를 결정한다. 

```python
from django.db import models

class Person(models.Model):
    name = models.CharField(max_length=50)

class Group(mdoels.Model):
    name = models.CharFeild(max_length=128)
    members = models.ManyToManyField(
        Person,
        through='Membership',
        through_field=('group', 'person'),
    )

class Membership(models.Model):
    group = models.ForeignKey(Group, on_delete=models.CASCADE)
    person = models.ForeignKey(Person, on_delete=models.CASCADE)
    inviter = models.ForeignKey(
        Person,
        on_delete=models.CASCADE,
        related_name='membership_invites',
    )
    invite_reason = models.CharField(max_length=64)
```
Membership에는 Person(person과 inviter)에 대한 두개의 외래키가 있어 관계를 모호하게 만들고 django는 어떤키를 사용해야할지 알 수 없게된다. 이 경우 위의 예에서와 같이 django 가 through_fields 를 사용하여 사용해야하는 외래키를 명시적으로 지정해야한다.

through_fields는 2-튜플('field1','field2')을 허용한다. 여기서 field1은 ManyToManyField가 정의된모델에대한 외래키의 이름이고(Group의 경우), field2는 대상 모델에 대한 외래키의 이름이다(이경우는 Person)

다대다 관계에 참여하는 모델 중 하나 (또는 둘 다)에 대한 중개 모델에 둘 이상의 외래키가 있는 경우 through_fields를 지정해야 한다. 
이는 재귀적 관계에도 적용되는데, 중개 모델이 사용되고 거기에 2개 이상의 외래키가 사용될 때이다.

##### ManyToManyField.db_table
대다대 데이터를 저장하기 위해 작성할 테이블의 이름이다. 이것이 제공되지 않으면 django는 관계를 정의하는 모델의 테이블과 필드 자체의 이름을 따라 기본이름을 가정한다.

##### ManyToManyField.db_constraint
중간 테이블의 외래키에 대한 제약 조건을 데이터베이스에 만들지 여불르 제어한다. 기본값은 True이며, False로 지정하면 데이터무결성에 나쁜 영향을 주 수 있다. 

'db_constraint'와 'through'를 모두 전달하는 것은 오류이다.

#### OneToOneField

```
class OneToOneField(to, on_delete, parent_link=False, **options)
```
일대일 관계 개념적으로 이것은 unique=True인 FK와 유사하지만 관계의 역쪽은 단일 개체를 직접 반환한다.

이것은 어떤 방식으로든 다른 모델을 확장하는 모델의 기본키로 가장 유용하다. 다중 테이블 상속은 예를 들어 하위 모델에서 상위 모델로의 암시적 일대일 관계를 추가하여 구현된다.

하나의 위치인수가 필요하다. 모델이 관련될 클래스이다. 이것은 재귀 및 지연 관계에 관한 모든 옵션을 포함하며 FK와 똑같이 작동한다.

OneToOneField에 related_name 인수를 지정하지 않으면 django는 현재 모델의 소문자 이름을 기본값으로 사용한다.

```python
from django.conf import settings
from django.db import models

class MySpecialUser(models.Model):
    user = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    supervisor = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name='supervissor_of',
    )
```
이 User 모델은 다음과 같은 결과가 나온다.

```
>>> user = User.objects.get(pk=1)
>>> hasattr(user, 'myspecialuser')
True
>>> hasattr(user, 'supervisor_of')
True
```

관련 테이블에 항목이 없는 경우 역관계에 액세스할 때 RelatedObjectDoesNotExist 예외가 발생한다. 이것은 대상 모델의 Model.DoesNotExist 예외의 하위 클래스이다. 예를 들어 사용자에게 MySpecialUser가 지정한 supervisor가 없는 경우

```
>>> user.supervisor_of
RelatedObjectDoesNotExist: User has no supervisor_of
```
또한 OneToOneField는 FK에서 허용하는 하나의 추가 인수를 허용한다.

##### OneToOneField.parent_link
True이고 다른 구체적인 모델에서 상속된 모델에서 사용이 되면 이 필드는 일반적으로 서브 클래스에 의해 암시적으로 생성되는 추가 OneToToneField가 아닌 상위 클래스에 대한 링크로 다시 사용되어야 함을 나타낸다.

## Field API Reference
Field는 데이터베이스의 컬럼을 표현하는 추상적인 클래스이다.