# Basic Query

## Sql Data Type

<img src="https://cdn.journaldev.com/wp-content/uploads/2017/11/sql-data-types.png">

[출처]

## Create Table

```
CREATE TABLE TABLE_NAME(
    COLUMN_NAME DATATYPE
    [NOT NULL | NULL] [DEFAULT default_value | (expression)]
    [AUTO_INCREMENT] [ZEROFILL] [UNIQUE [KEY] | [PRIMARY] KEY]
    [INVISIBLE] [{WITH|WITHOUT} SYSTEM VERSIONING]
    [COMMENT 'string'] [REF_SYSTEM_ID = value]
    [COLUMN_FORMAT {FIXED|DYNAMIC|DEFAULT}]
    [reference_definition],
    ...
);
```

### Foreign Key

```
CREATE TABLE TABLE_NAME(
    COLUMN_NAME INT(11) NOT NULL DEFAULT 0,
    FOREIGN KEY (COLUMN_NAME) REFERENCES FK_TABLE(FK_COLUMN)
);
```

[설명]

## Alter Table

### Add Column 컬럼 추가

```
ALTER TABLE TABLE_NAME ADD COLUMN COLUMN_NAME DATATYPE [OPTIONS];
```

### Modify Column 컬럼 변경

```
ALTER TABLE TABLE_NAME MODIFY COLUMN COLUMN_NAME DATATYPE [OPTIONS];
```

### Change Column 컬럼 이름까지 변경

```
ALTER TABLE TABLE_NAME CHAGE COLUMN COLUMN_NAME CHANGE_COLUMN_NAME DATATYPE [OPTIONS];
```

### Drop Column 컬럼 삭제

```
ALTER TABLE TABLE_NAME DROP COLUMN COLUMN_NAME;
```

### Add Foreign Key 외래키 추가

```
ALTER TABLE TABLE_NAME ADD FOREIGN KEY (COLUMN_NAME) REFERENCES FK_TABLE(FK_COLUMN);
```

### Drop Foreign key 외래키 삭제

```
ALTER TABLE TABLE_NAME DROP FOREIGN KEY 'foreign_key_name';
```

#### Foreign_key_name 조회

```
SHOW CREATE TABLE TABLE_NAME;
```

```
| table_name  | CREATE TABLE `table_name` (
  ...,
  KEY `id` (`id`),
  CONSTRAINT `[name]_ibfk_1` FOREIGN KEY (`id`) REFERENCES `fk_table` (`fk_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 |
```

여기서
<b style="color:red">[name]\_ibfk_1</b>가 foreign_key_name 이다.

### Rename Table 테이블 이름 변경

```
ALTER TABLE TABLE_NAME RENAME CHANGE_TABLE_NAME;
```

## Django 연동

### orm 자동 생성

```
python manage.py inspectdb > '저장 위치'/models.py
```

[설명]: https://mariadb.com/kb/en/create-table/
[출처]: https://www.journaldev.com/16774/sql-data-types
