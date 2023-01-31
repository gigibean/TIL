function solution(operations) {
  const ans = [];
  // I insert, D - delete min, D delete max
  operations = operations.map((operation) => operation.split(" "));
  operations.forEach(([operation, number]) => {
    if (operation === "I") {
      ans.push(+number);
    } else {
      if (ans.length) {
        // find value
        const val = number === "1" ? Math.max(...ans) : Math.min(...ans);
        const index = ans.indexOf(val);
        ans.splice(index, 1);
      }
    }
  });
  return ans.length ? [Math.max(...ans), Math.min(...ans)] : [0, 0];
}

```
// heap 으로 풀기
class MaxHeap {
  constructor() {
      this.heap = []
  }
  swap(arr, a, b) {
      const tmp = arr[a]
      arr[a] = arr[b]
      arr[b] = tmp
  }
  insert (val) {
      this.heap.push(val)
      const func = (pointIndex) => {
          // 자신과 부모
          if (pointIndex <= 0) return
          const n = pointIndex
          const pn = Math.ceil(n / 2) - 1
          // 자식원소가 더 크면 swap
          if (this.heap[n] > this.heap[pn]) {
              this.swap(this.heap, n, pn)
              func(pn)
          }
      }
      func(this.heap.length-1)
  }
  delete () {
      if (this.heap.length <= 1) {
          this.heap = []
          return
      }
      // 가장 큰 수와 마지막 수를 바꾸기
      this.swap(this.heap, 0, this.heap.length - 1)
      // 마지막수가 가장 큰 수이므로 팝
      this.heap.pop()
      const func = (i) => {
          const n = this.heap.length
          let p = i
          const l = 2* i + 1
          const r = 2 * i + 2
          // 최종적으로 3중 가장 큰 인덱스 찾기
          if (l < n && this.heap[p] < this.heap[l]) p = l
          if (r < n && this.heap[p] < this.heap[r]) p = r
          // 위 과정으로 p 값이 변하였다면 더 큰 인덱스가 있다는 것이므로
          if (i !== p) {
              this.swap(this.heap, i, p)
              func(p)
          }
      }
      func(0)
  }
}
class MinHeap {
  constructor() {
      this.heap = []
  }
  swap(arr, a, b) {
      const tmp = arr[a]
      arr[a] = arr[b]
      arr[b] = tmp
  }
  insert (val) {
      this.heap.push(val)
      const func = (point) => {
          if (point <= 0) return
          const n = point
          const pn = Math.ceil(n / 2) - 1 // Parent
          // 부모값 자신 비교 -> 부모가 더 크면 교환
          if (this.heap[n] < this.heap[pn]) {
              this.swap(this.heap, n, pn)
              // 교환 시점으로 다시 함수호출
              func(pn)
          }
      }
      func(this.heap.length-1)
  }
  delete() {
      if (this.heap.length <= 1) {
          this.heap = []
          return
      }
      // 마지막 수와 교환
      this.swap(this.heap, 0, this.heap.length - 1)
      // 마지막 수를 빼기
      this.heap.pop()
      const func = (i) => {
          // cur index
          let p = i
          const l = 2 * i + 1
          const r = 2 * i + 2
          const n = this.heap.length
          // 현재값과 두 자식 값을 비교하여 3 중 가장 작은 값 찾기
          if (l < n && this.heap[p] > this.heap[l]) p = l
          if (r < n && this.heap[p] > this.heap[r]) p = r
          // 값이 달라졌으면 바꿔주기
          if (i !== p) {
              this.swap(this.heap, i, p)
              // 다시 바뀐부분부터 호출
              func(p)
          }
      }
      func(0)
  }
  
}
function solution(operations) {
  const maxheap = new MaxHeap()
  const minheap = new MinHeap()
  
  // operations를 띄어쓰기로 분리
  operations = operations.map(operation => operation.split(" "))
  operations.forEach(([operation, sn]) => {
      if (operation === "I") { // 삽입 연산이면
          // 최대힙 최소힙 모두 해당 숫자 삽입 문자열을 숫자로 바꿔주기
          const num = +sn
          maxheap.insert(num)
          minheap.insert(num)
      } else {
         if (maxheap.heap.length <= 1 || minheap.heap.length <= 1) {
             maxheap.delete()
             minheap.delete()
         } else {
              // 최대힙에서 delete 연산 수행
              if (sn === "1") maxheap.delete()
              // 최소힙에서 delete 연산수행
              if (sn === "-1") minheap.delete()
         }
      }
  })
  const common = maxheap.heap.filter((item) => minheap.heap.includes(item))
  return common.length ? [Math.max(...common), Math.min(...common)] : [0, 0]
}
```;
