import React, { memo, useState } from 'react';

const Try = memo(({ tryInfo }) => {
  // tryInfo.result = 'hello' // 자식컴포넌트에서 props 수정 ❌
  // 자식이 props를 바꿔버리면 부모가 뜻하지 않게 바껴버림..
  // 진짜 바꿔야하면 props를 state로 만든다음에 state를 바꾼다.
  const [result, setResult] = useState(tryInfo.result);

  const onClick = () => {
    setResult('1');
  };
  return (
    <li>
      <div>{tryInfo.try}</div>
      <div onClick={onClick}>{result}</div>
    </li>
  );
});
Try.displayName = 'Try';

export default Try;
