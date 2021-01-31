# 함수 포인터

1. C언어에서는 함수의 이름을 이용해 특정한 함수를 호출한다.
2. 함수 이름은 메모리 주소를 반환한다.

```c
#include <stdio.h>

void function() {
    printf("STH");
}

int main(void) {
    printf("%d\n", function);
    // 함수이름
    // 출력시 메모리 주소 반환
    system("pause");
    return 0;
}
```

## 함수 포인터

1. 함수 포인터는 특정한 함수의 반환 자료형을 지정하는 방식으로 선언할 수 있다.

2. 함수 포인터를 이용하면 형태가 같은 서로 다른 기능의 함수를 (하나의 함수명으로) 선택적으로 사용할 수 있다.

```
[반환자료형] (*[함수이름])([매개변수]) = [함수명];
int (*func)(int) = myFunc;
```

### 매개 변수 및 반환 자료형이 없는 함수 포인터

```c
#include <stdio.h>

void myFunc() {
    printf("my func \n");
}

void yourFunc() {
    printf("your func \n");
}

int main(void) {
    void(*fp)() = myFunc;
    fp();
    // my func
    fp = youFunc;
    fp();
    // your func
    system("pause");
    return 0;
}
```

### 반환 자료형이 있는 함수 포인터

```c
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int sub(int a, int b) {
    return a - b;
}

int main(void) {
    int (*fp)(int, int) = add;
    printf("%d\n", fp(3,4));
    // 7
    fp = sub;
    printf("%d\n", fp(4,2));
    system("pause");
    // 2
    return 0;
}
```

### 함수 포인터를 반환해서 사용하기

```c
#include <stdio.h>

int add(int a, int b) {
    return a + b;
}

int (*process(char* a))(int, int) {
    printf("%s\n", a);
    return add;
}

int main(void) {
    printf("%d\n", process("10 + 20 = ")(10, 20));
    // 10 + 20 = 30
    system("pause");
    return 0;
}
```
