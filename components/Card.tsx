import styled from 'styled-components';

export const Card = styled.a<{ decoratorStyle?: 'add' | 'chevron' }>`
  display: block;
  width: 100%;
  padding: 1.5rem;
  position: relative;

  border: 1px solid #eaeaea;
  border-radius: 10px;

  text-align: left;
  text-decoration: none;

  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    border-color: #8c8c8c;
  }

  &:after {
    content: '${(props) =>
      props.decoratorStyle === 'add' ? '\\002B' : '\\203A'}';
    font-size: 2rem;

    position: absolute;
    display: block;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
`;
