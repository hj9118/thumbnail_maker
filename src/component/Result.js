import React, { useState } from 'react';
import styled from 'styled-components';

const Result = () => {
  const [text, setText] = useState({
    title: 't',
    content: 'c',
    author: 'a',
  });
  const { title, content, author } = text;

  const clear = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: 'value' });
  };

  const resetText2 = (e) => {
    const { name } = e.target;
    setText({ ...text, [name]: '' });
  };

  const onChangeText = (e) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value });
  };

  const resetText = () => {
    setText({
      title: 'Title here',
      content: 'Content here',
      author: 'Author here',
    });
  };

  return (
    <>
      <Box className='box'>
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
            //value={title}
            onChange={onChangeText}
            placeholder='TitleHere'
            onClick={clear}
          />
          <Input
            name='content'
            //value={content}
            onChange={onChangeText}
            placeholder='ContentHere'
          />
          <Input
            name='author'
            //value={author}
            onChange={onChangeText}
            placeholder='Author Here'
          />
          {/* <Button onClick={resetText}>Reset</Button> */}
          <Button type='reset' onClick={resetText}>Reset</Button>
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
  border: 1px solid skyblue;
  margin-top: 10px;
  padding: 10px;
`;

const Input = styled.input`
  display: inline-block;
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
