import Link from "next/link";
import styled from "styled-components";

const Container = styled.header`
  background: #fff;
  width: 100%;
  padding: 0 16px;

  .inner {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 8px 0;
    margin: 0 auto;
  }

  .homeLink {
    display: block;
    width: auto;
    height: 24px;

    img {
      height: 100%;
      width: auto;
    }
  }
`;

export const Header = () => {
  return (
    <Container>
      <div className="inner">
        <div>
          <Link href="/">
            <a className="homeLink">
              <img src="/images/TraDB.png" alt="logo" />
            </a>
          </Link>
        </div>
      </div>
    </Container>
  );
};
