import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  top: 60px;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0d0c0cc7;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  margin: 0 auto 40px;
  max-width: 600px;
  width: calc(100vw - 40px);
  min-width: 320px;
  border: 1px solid #fadccd;
  border-radius: 10px;
  background: #78321e;
`;

export const PrimaryTitle = styled.h1`
  text-align: center;
  text-shadow: #0d0c0c 0 0 4px;
`;

export const SecondaryTitle = styled.h2`
  text-align: center;
  text-shadow: #0d0c0c 0 0 4px;
  font-size: 1.7em;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid #964628;
  font-size: 24px;
  font-weight: 700;
  color: #fadccd;
  text-shadow: #964628 0 0 4px;
`;
