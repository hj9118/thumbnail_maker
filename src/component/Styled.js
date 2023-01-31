import styled from 'styled-components';

export const OutBox = styled.div`
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
border-radius: 2em;
background-color: white;
padding: 3em;
`;

export const InBox = styled.div`
margin: 0 auto;
width: 800px;
aspect-ratio: 1/1;

background-color: ${(props) => props.bgColor};
border: 1px solid black;
`;

export const Text = styled.p`
text-align: center;
font-family: 'Black Han Sans', sans-serif ;
font-size: ${(props) => props.size}
`;

export const TipBox = styled(Text)`
font-size: 1.5em;
font-family: 'Noto Sans KR', sans-serif;
`

export const Wrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
border: 1px solid skyblue;
margin-top: 2.5em;
padding: 8px;
`;

export const Input = styled.input`
text-align: center;
background-color: white;
color: skyblue;
font-size: 1em;
margin: 1em;
padding: 1.25em 1.5em;
border: 2px solid skyblue;
border-radius: 16px;

&:: placeholder {
  color: skyblue;
}
`;
export const Button = styled.button`
display: inline-block;
background-color: white;
color: skyblue;
font-size: 1em;
margin: 1em;
padding: 0.25em 1.5em;
border: 2px solid skyblue;
border-radius: 16px;
`;
