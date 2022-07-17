import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: #282828db;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto 40px;
  max-width: 600px;
  width: calc(100vw - 40px);
  min-width: 320px;
  border: 1px solid #c3c0c0;
  border-radius: 10px;
  background: #c3c0c090;
`;

export const PrimaryTitle = styled.h1`
  text-align: center;
`;

export const SecondaryTitle = styled.h2`
  text-align: center;
  font-size: 1.7em;
`;
