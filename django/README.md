# django

<b>Index</b>

- [Django Field](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md)

  - [Field Options options](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#field-options)
  - [null](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#null)
  - [blank](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#blank)
  - [choices](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#choices)
  - [db_column](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#db_column)
  - [db_index](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#db_index)
  - [db_tablespace](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#db_tablespace)
    - [Table Space](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#table-space)
  - [default](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#default)
  - [editable](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#editable)
  - [error_messages](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#error_messages)
  - [help_text](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#help_text)
  - [primary_key](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#primary_key)
  - [unique](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#unique)
  - [unique_for_date](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#unique_for_date)
  - [unique_for_month](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#unique_for_month)
  - [unique_for_year](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#unique_for_year)
  - [verbose_name](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#verbose_name)
  - [validators](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_options.md#validators)

- [Django Field relations](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md)

  - [Relationship Fields](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#relationship-fields)
    - [ForeignKey](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#foreignkey)
      - [ForeignKey Arguments](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#foreignkey-arguments)
        - [ForeignKey.on_delete](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#foreignkeyon_delete)
          - [SET_NULL](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#set_null)
          - [SET_DEFAULT](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#set_default)
          - [SET](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#set)
          - [DO_NOTHING](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#do_nothing)
        - [ForeignKey.limit_choices_to](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#foreignkeylimit_choices_to)
        - [ForeignKey.related_name](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#foreignkeyrelated_name)
        - [ForeignKey.related_query_name](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#foreignkeyrelated_query_name)
        - [ForeignKey.to_field](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#foreignkeyto_field)
        - [ForeignKey.db_constraint](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#foreignkeydb_constraint)
        - [ForeignKye.swappable](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#foreignkyeswappable)
  - [ManyToManyField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#foreignkyeswappable)
    - [Arguments](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#arguments)
      - [ManyToManyField.related_name](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#manytomanyfieldrelated_name)
      - [ManyToManyField.related_query_name](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#manytomanyfieldrelated_query_name)
      - [ManyToManyField.limit_choices_to](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#manytomanyfieldlimit_choices_to)
      - [ManyToManyField.symmetrical](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#manytomanyfieldsymmetrical)
      - [ManyToManyField.through](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#manytomanyfieldthrough)
      - [ManyToManyField.through_field](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#manytomanyfieldthrough_field)
      - [ManyToManyField.db_table](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#manytomanyfielddb_table)
      - [ManyToManyField.db_constraint](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#manytomanyfielddb_constraint)
  - [OneToOneField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#onetoonefield)
    - [OneToOneField.parent_link](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#onetoonefieldparent_link)
  - [Field API Reference](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_relationship.md#field-api-reference)

- [Django Field types](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md)

  - [Field Types](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#field-types)
    - [AutoField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#autofield)
    - [BigAutoField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#bigautofield)
    - [BigIntegerField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#bigintegerfield)
    - [BinaryField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#binaryfield)
    - [BooleanField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#booleanfield)
    - [CharField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#charfield)
    - [DateField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#datefield)
      - [DateField.auto_now](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#datefieldauto_now)
      - [DateField.auto_now_add](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#datefieldauto_now_add)
    - [DateTimeField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#datetimefield)
    - [DurationField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#durationfield)
    - [EmailField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#emailfield)
    - [FileField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#filefield)
      - [FileField.upload_to](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#filefieldupload_to)
      - [FileField.storage](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#filefieldstorage)
    - [FieldFile](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#fieldfile)
    - [FilePathField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#filepathfield)
      - [FilePathField.path](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#filepathfieldpath)
      - [FilePathField.match](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#filepathfieldmatch)
      - [FilePathField.recursive](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#filepathfieldrecursive)
      - [FilePathField.allow_files and allow_folders](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#filepathfieldallow_files-and-allow_folders)
    - [FloatField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#floatfield)
    - [ImageField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#imagefield)
      - [ImageField.height_field and width_field](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#imagefieldheight_field-and-width_field)
    - [IntegerField]()
    - [GenericIPAddressField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#genericipaddressfield)
      - [GenericIPAddressField.protocol](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#genericipaddressfieldprotocol)
      - [GenericIPAddressField.unpack_ipv4](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#genericipaddressfieldunpack_ipv4)
    - [NullBooleanField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#nullbooleanfield)
    - [PositiveIntegerField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#positiveintegerfield)
    - [PositiveSmallIntegerField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#positivesmallintegerfield)
    - [SmallIntegerField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#smallintegerfield)
    - [SlugField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#slugfield)
      - [SlugField.allow_unicode](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#slugfieldallow_unicode)
    - [TextField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#textfield)
    - [TimeField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#timefield)
    - [URLField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#urlfield)
    - [JSONField](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#jsonfield)
      - [JSONField.encoder](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#jsonfieldencoder)
      - [JSONField.decoder](https://github.com/gigibean/TIL/blob/master/django/docs/django_field_types.md#jsonfielddecoder)

- [Django ORM](https://github.com/gigibean/TIL/blob/master/django/docs/django_orm.md)

  - [Foreign Key](https://github.com/gigibean/TIL/blob/master/django/docs/django_orm.md#foreign-key)
    - [Related Name](https://github.com/gigibean/TIL/blob/master/django/docs/django_orm.md#related-name)
  - [migrate: doesn't create tables](https://github.com/gigibean/TIL/blob/master/django/docs/django_orm.md#migrate-doesnt-create-tables)
    - [ORM -> Mysql](https://github.com/gigibean/TIL/blob/master/django/docs/django_orm.md#orm---mysql)

- [Use Sqlite3](https://github.com/gigibean/TIL/blob/master/django/docs/use_sqlite3.md)
