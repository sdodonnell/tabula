import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled from 'styled-components';
import MenuBar from '../components/MenuBar';

const ComponentWindow = styled.div`
  width: 80%;
  height: 80vh;
  overflow: scroll;
  margin: 0 auto;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <MenuBar />
      <ComponentWindow>
        <Component {...pageProps} />
      </ComponentWindow>
    </>
  );
}

export default MyApp;
