import React from 'react'

const Box = (props) => {
    console.log(props)
    var obj = {...props, 'a':30}
    var arr = [1,2,3,4]
    var arr2 = [...arr,100,200] //spread operator
    arr2 = arr.push(100)
    console.log(obj)
    console.log(arr2)
    // 리액트는 함수형 컴포넌트
    // 함수형 언어
    // 순수 함수 (pure function)
    // 입력이 동일한데 출력값이 일정하지 않으면 안됨
    // 원래있던 arr은 내용이 변경되면 안됨
  return (
    <div>상자</div>
  )
}

export default Box