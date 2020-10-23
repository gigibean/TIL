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

#### ForeignKey.on_delete

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
