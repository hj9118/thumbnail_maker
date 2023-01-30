import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Result = () => {
  const [text, setText] = useState({
    title: 't',
    content: 'c',
    author: 'a',
  });
  const { title, content, author } = text;
  const [color, setColor] = useState('#ffffff');

  useEffect(() => {});

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
    setColor('#ffffff')
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
    <OutBox
      style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        padding: '3em',
      }}
    >
      <Text
        style={{
          fontSize: '4.5em',
        }}
      >
        정방형 썸네일 만들기
      </Text>
      <InBox className='box' bgColor={color}>
        <Text
          style={{
            fontSize: '4.5em',
            margin: '4em 0em 0em 0em',
          }}
        >
          {title}
        </Text>
        <Text
          style={{
            fontSize: '2.5em',
            margin: '0.5em',
          }}
        >
          {content}
        </Text>
        <Text
          style={{
            fontSize: '1.5em',
            marginTop: '10em',
          }}
        >
          {author}
        </Text>
      </InBox>
      <Wrapper>
        <Input
          name='title'
          value={title}
          onChange={onChangeText}
          placeholder='TitleHere'
          onDoubleClick={clear}
        />
        <Input
          name='content'
          value={content}
          onChange={onChangeText}
          onClick={clear}
          placeholder='ContentHere'
          onDoubleClick={clear}
        />
        <Input
          name='author'
          value={author}
          onChange={onChangeText}
          placeholder='Author Here'
          onDoubleClick={clear}
        />
        <Button onClick={ChangeColor}>랜덤 색상</Button>
        <Button onClick={clickSave}>저장</Button>
        <Button type='reset' onClick={resetText}>
          다시 시작
        </Button>
      </Wrapper>
    </OutBox>
  );
};

const OutBox = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 2em;
`;

const InBox = styled.div`
  margin: 0 auto;
  width: 800px;
  aspect-ratio: 1/1;

  background-color: ${(props) => props.bgColor};
  border: 1px solid black;
`;

const Text = styled.p`
  text-align: center;
  font-family: 'Black Han Sans', sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid skyblue;
  margin-top: 10px;
  padding: 10px;
`;

const Input = styled.input`
  text-align: center;
  background-color: white;
  color: skyblue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1.5em;
  border: 2px solid skyblue;
  border-radius: 16px;

  &:: placeholder {
    color: skyblue;
  }
`;
const Button = styled.button`
  display: inline-block;
  background-color: white;
  color: skyblue;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1.5em;
  border: 2px solid skyblue;
  border-radius: 16px;
`;

export default Result;
