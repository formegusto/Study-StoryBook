import React from 'react';

type Props = {
    /** 보여주고 싶은 이름 */
    name: string,
    /** 값을 `true`로 설정하면 h1 태그로 렌더링 됩니다. */
    big?: boolean,
    /** Hello 버튼 누를 때 호출할 함수 */
    onHello?: () => void,
    /** Bye 버튼 누를 때 호출할 함수 */
    onBye: () => void, 
}

/**
 * 안녕하세요 라고 보여주고 싶을 땐 `Hello` 컴포넌트를 사용하세요.
 * 
 * - `big` 값을 `true`로 설정하면 **크게** 나타납니다.
 * - `onHello`와 `onBye` props로 설정하여 버튼이 클릭했을 때 호출 할 함수를 지정할 수 있습니다.
 */
const Hello = ({ name, big, onHello, onBye }:Props) => {
    return (
        <div>
            {big ? <h1>안녕하세요, {name}!</h1> : <p>안녕하세요, {name}!</p>}
            <div>
                <button onClick={onHello}>Hello</button>
                <button onClick={onBye}>Bye</button>
            </div>
        </div>
    )
};

Hello.defaultProps = {
  big: false
};


export default Hello;