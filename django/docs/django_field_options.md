# Django Field

## Field Options

### null

field.null

만약 null이 True 라면, db에 NULL로 저장된다. 기본 값은 False이다.

CharField나 TextField같은 string-based 필드 같은 경우에 null을 사용하는 것을 피하는 것이 좋다.  
문자열 기반 필드가 null=True 이면 이에 따른 'no data'는 Null과 빈 문자열(empty string)이 있다.
그리고 이 두개의 값은 중복될 수 있다.

CharField에 unique=True 와 blank=True 를 설정할 경우 공백으로 이 문자열을 저장할대 고유한 제약 조건 위반을 방지하려면, null=True 가 있어야 한다.

- Oracle DB를 사용하는 경우 속성에 관계없이 빈 문자열은 Null 값이 저장된다.

### blank

field.blank

만약 blank가 True이면, 필드는 공백을 허용한다.

기본 값은 false이다.

blank는 null과는 다르다. null은 데이터베이스와 관려있고, blank는 유효설 검사와 관련있다.  
필드에 blank=True라고 하면 폼에서 빈 값을 입력할 수 있다.

### choices

field.choices

이 필드의 선택항목으로 사용할 두 항목의 튜플로 이루어 진다. 기본 위젯은 선택 항목이 있는 선택 상자가 된다.

각 튜플의 첫 번째 요소는 모델이 설정할 실제 값이고 두 번째 요소는 사람이 읽을 수 있는 이름이다.

```
...
SEASON_CHOICES = [
    (WINTER, 'Winter'),
    (SUMMER, 'Summer'),
    (SPRING, 'Spring'),
    (FALL, 'Fall'),
]

season_choices = models.CharField(
    choices = SEASON_CHOICES,
    default = WINTER,
)
```

또한 이 choices를 그룹으로 나눌 수도 있다.

```
MEDIA_CHOICES = [
    ('Audio', (
            ('vinyl', 'Vinyl'),
            ('cd', 'CD'),
        )
    ),
    ('Video', (
            ('vhs', 'VHS Tape'),
            ('dvd', 'DVD'),
        )
    ),
    ('unknown', 'Unknown'),
]
```

각 튜플의 첫번째 요소는 그룹에 적용할 이름이다. 두번째 요소는 옵션에 대한 값과 사람이 읽을 수 있는 이름이 포함된다.

그룹화 된 옵션은 그룹화 되지 않은 옵션과 결합 될 수 있다.  
ex) 'unkown'

선택항목이 설정된 각 모델 필드에 대해 django는 필드의 현재 값에 대해 사람이 읽을 수 있는이름을 검색하는 메서드를 추가한다.

선택항목은 list나 튜플이 아닌 모든 시퀀스 객체가 될 수 있다. 이를 통해 선택 사항을 동적으로 구성할 수 있다.

기본값과 함께 필드에 blank=False 가 설정되어 있지 않으면 '---'를 포함하는 레이블이 선택 박스와 함께 렌더링 된다.

이 동작을 무시하려면 None을 포함하는 선택 항목에 튜플을 추가하면 된다.  
ex) (None, 'something')

또는 CharField와 같이 의미가 있는 경우 None 대신 빈 문자열을 사용하면 된다.

### db_column

Field.db_column

필드에 데이터베이스 컬럼의 이름을 사용하고자 할 때 사용한다.  
만약 데이터베이스 칼럼의 이름이 주어지지 않으면 django는 field의 이름을 사용한다.

데이터베이스 컬럼 이름이 sql 예약어 이거나 python 변수이름(특히 하이픈)에 허용되지않는 문자가 포함디어 있어도 django는 열과 테이블 이름을 인용한다.

### db_index

Field.db_index

db_index가 True이면, 데이터베이스 인덱스가 필드에 생성된다.

### db_tablespace

Field.db_tablespace

해당 필드가 인덱스된 경우 이 필ㄷ의 인덱스에 사용한 데이터베잇 테이블 스페이스의 이름이다.  
기본값은 프로젝트의 DEFAULT_INDEX_TABLESPACE설정 또는 모델의 db_tablespace 이다. 벡엔다가 인덱스에 대한 테이블 스페이스를 지원하지 않는 경우 이 옵션은 무시된다.

#### Table Space

테이블스페이스라고 하는 테이블이 저장될 공간을 먼저 만들고 나서 테이블을 생성하는데, 각각의테이블을 테이블 스페이스별로 나누어서 관리함으로써 성능 향상을 할 수 있다.  
테이블 스페이스를 생성하면 정의된 용량만큼 미리 확보한 테이블 스페이스가 생성되어지고 생성되어진 테이블 스페이스에서 테이블의 데이터가 저장된다.

### default

Field.default

필드의 기본값이다. 값이 될 수도 있고 호출가능한 객체일 수 있다.
호츨이 가능하다면 새 객체가 생성될 때마다 호출된다.

default는 변경 가능한 (mutable object) 일 수 없다. 예를 들어 모델 인스턴스, list, 집합 등..  
왜냐하면 해당 객체의 동일한 인스턴스에 대한 참조가 모든 새 모델 인스턴스에서 기본값으로 사용되기 때문이다.

대신 원하는 기본값을 callable에 매핑할 수 있다.
예를 들어 JSONField 에 대한 기본 딕셔너리를 지정하려면 함수를 사용하면 된다.

```
def contact_default():
    return {"email": "user1@user.com"}

contact_info -JSONField("ContactInfo", default=contact_default)
```

lambda는 마이그레이션으로 직렬화 할 수 없기 때문에 default와 같은 필드 옵션에 사용할 수 없다.

모델 인스턴스에 매핑되는 FK와 같은 필드의 경우 기본값은 모델 인스턴스 대신 참조하는 필드의 값(to_field가 설정되지 않은 경우 pk)이어야 한다.

기본값은 새 모델 인스턴스가 생성되고 필드에 값이 제공되지 않을 때 사용된다.

필드가 기본 키인 경우 + 필드가 None으로 설정된 경우에도 기본 값이 사용된다.

### editable

Field.editable

False인 경우 필드가 admin 또는 ModelForm에 표시 되지 않는다.  
모델 유효성 검사 중에도 건너 뛴다. 기본 값을 True이다.

### error_messages

Field.error_messages

error_messages 를 사용하면 필드에서 발생하는 기본 메시지를 재정의 할 수 있다.  
재정의 하려는 오류 ㅁ세지나 일치하는 키가 있는 사전을 전달한다.

오류 메시지 키에는 null, blank, invalid, invalid_choice, unique, unique_for_date 가 포함된다.

### help_text

Field.help_text

form 위젯과 함께 표시되는 추가 도움말 텍스트이다.
필드가 양식에 사용되지 않는 경우에도 문서화에 유용한다.

이 값은 자동 생성 form에서 html 이스케이프 처리되지 않는다. 이렇게 하면 원하는 경우 help_text에 html을 포함할 수 있다.

```
help_text = "Use the following format: <em>YYYY-MM-DD</em>."
```

또한 일반 텍스트와 django.utils.html.escape()를 사용하여 HTML 특수문자를 이스케이프 할 수 있다.

### primary_key

Field.primary_key

True이면 필드가 모델의 기본키이다.  
모델의 어떤 필드에도 primary_key=True를 지정하지 않으면, django는 자동으로 AutField를 추가하여 기본 키를 보유하므로 플드를 재정의하지 않는 한 모든 필드에서 primary_key=True를 정의할 필요가 없다.

primary_key=True는 null=False, unique=True를 의미한다.  
개체에는 하나의 기본 키만 허용된다.

primary key 필드는 읽기 전용이다. 기존 객체의 기본 키값을 변경 한 다음 저장하면 이전 객체와 함께 새 객체가 생성된다.

### unique

Field.unique

True인 경우 이 필드는 테이블 전체에서 고유해야한다.

이는 DB 수준 및 모델 유효성 검사에 의해 시행된다. 고유 필드에 중복 값이 있는 모델을 저장하려고 하면 모델의 save() 메서드에 의해 django.db.IntegrityError 가 발생한다.  
이 옵션은 ManyToManyField 및 OneToOneField 를 제외한 모든 필드 유형에서 유효하다.

unique가 True이면 unique는 인덱스 생성을 의미하므로 db_index를 지정할 필요가 없다.

### unique_for_date

Field.unique_for_date

해당 필드가 날짜 필드의 값에 대해 고유하도록 하려면 DateField나 DateTimeField 의 이름으로 설정해야한다.

예를 들어,
unique_for_date='pub_date' 가 포함된 필드 제목이 있는 경우, django는 동일한제목과 pub_date를 가진 두 레코드의 입력을 허용하지 않는다.

USE_TZ 가 True이면 객체가 저장되는 시점의 해당 시간댕서 검사를 수행한다.

### unique_for_month

### unique_for_year

### verbose_name

Field.verbose_name

사람이 읽을 수 있는 필드이름.
자세한 이름이 제공되지 않는다면 django는 필드의 속성 이름을 사용하여 자동으로 생성한다. 밑줄을 공백으로 처리한다.

### validators

Field.validators

해당 필드에 대해 실행할 유효성 검사 목록이다.

조회 등록 및 가져오기
필드는 조회 등록 API를 구현한다. API를 사용하여 필드 클래스에 사용할 수 있는 조회와 필드에서 조회를 가져오는방법을 사용자가 지정할 수 있다.
