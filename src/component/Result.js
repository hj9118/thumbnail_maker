import React, { useState } from 'react';
import * as style from './Styled';

const Result = () => {
  const [text, setText] = useState({
    title: '제목을 입력하세요',
    content: '부제목을 입력하세요',
    author: '글쓴이를 입력하세요',
  });
  const { title, content, author } = text;
  const [color, setColor] = useState('#ffffff');

  const clear = (e) => {
    const { name } = e.target;
    setText({ ...text, [name]: ' ' });
  };

  const onChangeText = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const resetText = () => {
    setText({
      title: '제목을 입력하세요',
      content: '부제목을 입력하세요',
      author: '글쓴이를 입력하세요',
    });
    setColor('#ffffff');
  };

  const randomArr = [
    'FAD836',
    'F58553',
    'F27998',
    'E57C86',
    '6991C7',
    '57CAF4',
    '64C3A8',
    'D3DF3E',
    'D2DDCF',
    'FFFFFF',
  ];
  const ChangeColor = () => {
    const randomColor = `#${
      randomArr[Math.floor(Math.random() * randomArr.length)]
    }`;
    setColor(randomColor);
  };
  const clickSave = () => {};

  return (
    <style.OutBox style={{}}>
      <style.Text
        style={{
          fontSize: '4.5em',
        }}
      >
        정방형 썸네일 만들기
      </style.Text>
      <style.InBox className='box' bgColor={color}>
        <style.Text
          size='4.5em'
          style={{
            margin: '4em 0em 0em 0em',
          }}
        >
          {title}
        </style.Text>
        <style.Text
          size='2.5em'
          style={{
            margin: '0.5em',
          }}
        >
          {content}
        </style.Text>
        <style.Text
          size='1.5em'
          style={{
            marginTop: '10em',
          }}
        >
          {author}
        </style.Text>
      </style.InBox>
      <style.Wrapper>
        <style.Input
          name='title'
          value={title}
          onChange={onChangeText}
          onDoubleClick={clear}
        />
        <style.Input
          name='content'
          value={content}
          onChange={onChangeText}
          onDoubleClick={clear}
        />
        <style.Input
          name='author'
          value={author}
          onChange={onChangeText}
          onDoubleClick={clear}
        />
        <style.Button onClick={ChangeColor}>랜덤 색상</style.Button>
        <style.Button onClick={clickSave}>저장</style.Button>
        <style.Button onClick={resetText}>다시 시작</style.Button>
      </style.Wrapper>
      <style.TipBox>
        일부 수정을 원할 경우 <b>클릭</b>, 전체 수정을 원한다면 <b>더블클릭</b>
        으로 값을 지우고 시작하세요.
      </style.TipBox>
    </style.OutBox>
  );
};

export default Result;
