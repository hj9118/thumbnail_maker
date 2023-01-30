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

  useEffect(() => {
    
  })

  const clear = (e) => {
    const { name } = e.target;
    setText({ ...text, [name]: '' });
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
  };

  const randomArr = [
    'FAD836',
    'F58553',
    'F27998',
    'ES7C86',
    '6991C7',
    '57CAF4',
    '64C3A8',
    'D3DF3E',
    'D2DDCF',
  ];
  const ChangeColor = () => {
    const randomColor = `#${randomArr[Math.floor(Math.random() * randomArr.length)]}`;
    setColor(randomColor);
  };

  return (
    <>
      <Box className='box' bgColor={color}>
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
      </Box>
      <Wrapper>
        <form>
          <Input
            name='title'
            value={title}
            onChange={onChangeText}
            placeholder='TitleHere'
          />
          <Input
            name='content'
            value={content}
            onChange={onChangeText}
            placeholder='ContentHere'
          />
          <Input
            name='author'
            value={author}
            onChange={onChangeText}
            placeholder='Author Here'
          />
          <Button onClick={ChangeColor}>랜덤 색상</Button>
          <Button type='reset' onClick={resetText}>
            다시 시작
          </Button>
        </form>
      </Wrapper>
    </>
  );
};

const Box = styled.div`
  margin: 0 auto;
  width: 800px;
  aspect-ratio: 1/1;

  text-align: center;
  font-family: 'Black Han Sans', sans-serif;

  background-color: ${(props) => props.bgColor || 'skyblue'};
  border: 1px solid black;
`;

const Text = styled.p``;

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
