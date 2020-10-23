# Django Field

## Field Types

### AutoField

```
class AutoField(**options)
```

사용가능한 ID에 따라 자동증가(AUTO_INCREMENT)하는 IntegerField 이다.  
하지만 그냥 IntegerField에서도 옵션으로 PK를 설정하면 같은 역할을 할 수 있다.

### BigAutoField

```
class BigAutoField(**options)
```

64비트 정수의 AutoField이다.

### BigIntegerField

```
class BigIntegerField(**options)
```

64비트 IntegerField이다.

### BinaryField

```
class BinaryField(max_length=None, **options)
```

원시 이진 데이터를 저장하는 필드이다.  
bytes, bytearray 또는 memoryview를 할당할 수 있다.  
기본적으로 BinaryField는 editalbe을 False로 설정한다. 이 경우 ModelForm에 포함될 수 없다.  
BinaryField에는 하나의 추가적인 인수가 있다.  
BinaryField.max_length필드의 최대 길이 이다. 최대 길이는 MaxlengthValidator를 사용하는 django의 유효성 검사에서 적용된다.

### BooleanField

```
class BooleanField(**options)
```

True, False 필드
이 필드의 기본 form 위젯은 CheckboxInput이거나 null=True 인 경우 NullBolleanSelect이다.
default가 지정되지 않은 경우 이 필드의 기본 값은 None이다.

### CharField

```
class CharField(max_length=None, **options)
```

문자열 필드, 많은 양의 text를 사용한다면 TextField를 사용해야한다.  
이 필드의 기본 form은 TextInput이다.  
이 필드의 추가적인 옵션은 max_length이가 있다.

### DateField

```
class DateField(auto_now=False, auto_now_add=False, **options)
```

python에서 datetime.date 인스턴스로 표시되는 날짜이다. 2가지 추가 선택적 인수가 있다.

#### DateField.auto_now

개체를 저장할때 마다 자동으로 필드를 지금 시간으로 설정한다. 마지막 수정 파임 스탬프에 유용하다. 현재 날짜가 항상 사용된다.

이 필드는 Model.save()를 호출 할때만 자동으로 업데이트된다. 이필드는 QuerySet.update()와 같은 다른 방법으로 다른 필드를 업데이트할 때는 업데이트 되지 않지만, 이와 같은 업데이트에서 필드에 대한 사용자 정의 값을 지정할 수 있다.

#### DateField.auto_now_add

개체를 처음 만들 때 자동을 필드를 현재로 설정한다.

- Default
  - DateField 인 경우: `default = date.today` - `from datetime.date.today()`
  - DateTimeField 인 경우: ` default=timezone.now` - `from django.utils.timezone.now()`

기본 form은 DateInput이다.  
admin은 JS 달력과 `today`에 대한 바로 가기를 추가했다. 추가 invaild_date 오류 메시지 키를 포함한다.

auto_now_add와 auto_now 및 default 옵션은 상호 배타적이다. 이러한 옵션을 조합하면 오류가 발생한다.

### DateTimeField

```
class DateTimeField(auto_now=False, auto_now_add=False, **options)
```

파이썬의 datetime.datetime 인스턴스로 표시되는 날짜이다.
기본 form은 하나의 DateTimeInput 이다.  
admin에서는 두개의 분리된 TextInput을 JS와 함께 사용했다.

### DurationField

```
class DurationField(**options)
```

기간을 저장하는 필드 timedelta에 의해 Python으로 모델링되었다.

- DurationField를 사용한 산술은 대부분의 경우에 작동한다. 그러나 PostgreSQL을 제외한 모든 데이터베이스에서 DurationField의 값을 DateTimeField 인스턴스의 산술과 ​​비교하면 예상대로 작동하지 않는다.

### EmailField

```
class EmailField(max_length=254, **options)
```

### FileField

```
class FileField(upload_to=None, Max_length=100, **options)
```

- PK 는 지원되지 않고 에러를 일으킨다.

#### FileField.upload_to

이 속성은 업로드 디렉토리 및 파일이름을 설정하는 방법을 제공하며 두 가지 방법으로 설정할 수있다. 두 경우 모두 값이 Storage.save() 메서드로 전달된다.  
문자열 값이나 경로를 지정하면 strftime() 형식이 포함될 수 있으며, 파일업로드 날짜/시간으로 대체된다.

```python
class MyModel(models.Model):
        # file will be uploaded to MEDIA_ROOT/uploads
        upload = models.FileField(upload_to='uploads/')
        # or
        # file will be saved to MEDIA_ROOT/uploads/20xx/xx/xx
        upload=models.FileField(upload_to='uploads/%Y/%m/%d/')
```

기본 FileSystemStorage를 사용하는 경우 문자열 값이 MEDIA_ROOT 경로에 추가되어 업로드된 파일이 저장될 로컬 파일 시스템의 위치를 형성한다.  
다른 저장소를 사용하는 경우 해당 저장소에서 upload_to를 처리하는 방법을 확인해야 한다.

<!-- TO DO : 다른 저장소에 upload_to 처리하는 방법 알기 -->

upload_to 는 함수와 같은 callable 이 될 수 있다. 파일 이름을 포함한 업로드 경로를 얻기 위해 호출된다. 이 callable 은 두개의 인수를 받고 스토리지 시스템에 전달될 Unix 스타일경로(슬래시 포함)를 반환해야 한다. 두 가지인 수는 다음과 같다.

| Agument  | Description                                                                     |
| -------- | ------------------------------------------------------------------------------- |
| instance | FileField가 정의된 모델의 인스턴스이다. 현재 파일이 첨부되는 특정 인스턴스이다. |
| filename | 원래 파일에 제공된 파일 이름이다. 최종 목적지 경로를 결정할 때 고려될 수 있다.  |

```python
def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.id, filename)

class MyModel(models.Model):
    upload = models.FiledField(upload_to=user_directory_path)
```

#### FileField.storage

스토리지 객체 또는 스토리지 객체를 반환하는 callable이다. 파일의 저장 및 검색을 처리한다.

이 필드의 기본 form은 ClearableFileInput이다.  
모델에서 FileField 또는 ImageField를 사용하기 위해서는 아래 단계를 거쳐야 한다.

1. settings 파일에서 django가 업로드 된 파일을 저장할 디렉토리의 전체 경로로 MEDIA_ROOT 를 정의해야 한다. (성능을 위해 이러한 파일은 DB에 저장되지 않는다.) MEDIA_URL을 해당 디렉토리의 기본 공용 URL로 정의하자. 웹 서버의 사용자 계정이 이 디렉토리를 쓸 수 있는지도 확인해야 한다.

<details>
<summary>STATIC(MEDIA) ROOT vs. STATIC(MEDIA) URL</summary>

- STATIC_ROOT = 파일을 수집(가져오거나)해야하는 디렉토리의 절대경로

```python
// IN LOCAL
STATIC_ROOT = os.path.join(PROJECT_DIR, 'static_media/')
// OR
STATIC_ROOT = '/var/www/example.com/static/'
```

- STATIC_URL = 파일을 수집하는 URL 접두사

```python
// IN LOCAL
STATIC_URL = '/static/'
// OR
STATIC_URL = 'http://example.com'
```

정리하자면, 로컬이든 다른 서버이든 그 경로를 적어주는 것이 url 이고,  
그 url 내에서 디렉토리를 사용하여 정리해주는 것이 root이다.

</details>

2. 모델에 FileField 또는 ImageField를 추가하고 upload_to 옵션을 정의하여 업로드 된 파일에 사용할 MEDIA_ROOT의 하위 디렉터리를 지정한다.

3. DB에 저자되는 것은 파일 경로다. 그리고 이는 MEDIAL_ROOT에 상대적이다. DJANGO에서 제공하는 템플릿 태그를 사용하여 걸대경로를 가져올 수 있다. `{{object.something.url}}`

예를 들어 MEDIA_ROOT가 '/media/`로 설정되어있고 upload_to가 'photos/%Y/%m/%d`로 설정되어있다고 하면,  
upload_to의 `%Y/%m/%d` 부분은 strftime() 형식이다.  
이렇게 해서 업로드하면 '/media/photes/2000/01/01' 디렉토리에 저장된다.

만약 업로드한 파일의 사이즈나 이름을 알고자 한다면 name과 size의 속성을 사용할 수 있다.
[파일관리참고]

### FieldFile

```
class FieldFile
```

model의 FilFeild에 액세스하면 기본 파일에 액세스 하기 위한 프록시로 FieldFile의 인스터스가 제공된다.

이 클래스의 save() delete() 메서드는 데이터베이스에 연결된 FieldFile의 모델 개체를 기본적으로 저장하는 것이다.  
[FieldFile참고]

### FilePathField

```
class FilePathField(path='',match=None, recursive=False, allow_files=True, allow_folders=False, max_length=100, **options)
```

선택 항목이 파일 시스템의 특정 디렉토리에있는 파일 이름으로 제한된느 CharField이다.

#### FilePathField.path

필수 인수, 선택해야하는 디렉터리를 위한 절대 파일 시스템 경로.

```
sth = models.FilePathField(path="/media/imgs")
```

#### FilePathField.match

선택적 인수. 파일이름 필터링할때 사용할 문자열
경로가 아닌 파일이름만 적용된다.

### FilePathField.recursive

선택적 인수, boolean값. 기본 값 False
path의 모든 서브 디렉터리가 포하되어야 하는지 여부

#### FilePathField.allow_files and allow_folders

선택적 인수, True False, 기본값 True  
지정된 위치에 폴더를 포함할지 여부지정  
allow_files 나 allow_folders 는 둘 중 하나는 True여야 한다.

### FloatField

### ImageField

```
class ImageField(upload_to=None, height_field=None, width_field=None, max_length=100, **options)
```

FileField로 부터 모든 속서과 메서드를 상속받지만, 업로드된 객체가 유효한 이미지 인지 검증한다.

#### ImageField.height_field and width_field

모델 인스턴스가 저장될 때 이미지의 너비(높이)가 자동으로 채워지는 모델 필드이름이다.

### IntegerField

### GenericIPAddressField

```
class GenericIPAddressField(protocol='both', unpack_ipv4=False, **options)
```

문자열 형식의 IPv4나 IPv6 주소이다. 이 필드의 기본 폼 위젯은 TextInput이다.

#### GenericIPAddressField.protocol

지정된 프로토콜을 위해 입력을 거정하여 제한한다. 허용 값은 'both'(기본값), 'IPv4', 'IPv6'이다. 대소문자 구별하지 않는다.

#### GenericIPAddressField.unpack_ipv4

IPv4 매핑된 주소의 압축을 푼다. True면 앞주소가 압축 해제되어 반환된다. 또한 protocol이 'both' 일때만 사용가능하다.

### NullBooleanField

```
class NullBooleanField(**options)
```

BooleanField 와 비슷하지만 옵션 중 하나로 NULL을 허용한다. BooelanField에 null=True 대신에 사용한다. 이 필드의 기본 form은 NullBooleanSelect이다.

### PositiveIntegerField

```
class PositiveIntegerField(**options)
```

IntegerField와 비슷하지만, 0또는 양수여야한다.

### PositiveSmallIntegerField

```
class PositiveSmallIntegerField(**options)
```

### SmallIntegerField

```
class SmallIntegerField(**options)
```

### SlugField

```
class SlugField(max_length=50, **options)
```

Slug는 문자, 숫자, 밑줄, 하이픈만 포함하는 짧은 레이블이다.
일반적으로 URL에 사용된다.

max_length가 지정되지 않으면, django는 기본값으로 50자를 사용한다.

묵시적으로 Field.db_index를 True로 설정한다.
prepopulated_field를 사용하여 admin에서 자동으로 이작업을 할 수 있다.

#### SlugField.allow_unicode

True이면 ASCII 문자 외에 Unicode 문자를 허용한다. 기본 값은 False이다.

### TextField

```
class TextField(**options)
```

기본 form은 Textarea이다.

### TimeField

```
class TimeField(auto_now=False, auto_now_add=False, **options)
```

python에서 datetime.time인스턴스로 나타내는 시간이다. DateField와 동일한 자동 채우기 옵션을 허용한다.

이 필드의 기본 form은 TextInput이다. admin에서 JS로 바로가기를 추가한다.

### URLField

```
class URLField(max_length=200, **options)
```

URL을 위한 CharField이다.  
이 필드의 기본 폼 위젯은 TextInput이다.  
max_length의 기본값은 200이다.

[fieldfile참고]: https://docs.djangoproject.com/ko/3.1/ref/models/fields/#filefield-and-fieldfile
[파일관리참고]: https://docs.djangoproject.com/ko/3.1/topics/files/
