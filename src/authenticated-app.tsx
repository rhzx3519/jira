import React from "react";
import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import { Button } from "antd";
import styled from "@emotion/styled";
import { Row } from "./components/lib";

/**
 * grid 和 flex 各自的应用场景
 * 1. 考虑 一维还是二维布局
 * 一般来说一维布局用flex, 二维布局用grid
 * 2. 是从内容出发还是从布局出发
 * 从内容出发：先有一组内容（数量一般不固定），希望它们均匀地的分布在容器中，由内容自己的大小决定占据的空间
 * 从布局出发：先规划网格（数量一般固定），然后再把元素往里填充
 * 从内容出发，用flex
 * 从布局出发，用grid
 * @constructor
 */
export function AuthenticatedApp() {
  const { logout } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderLeft gap={true}>
          <h2>Logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Button onClick={() => logout()}>登出</Button>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
}

const HeaderItem = styled.h3`
  margin-right: 3rem;
`;

const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  grid-template-columns: 20rem 1fr 20rem;
  grid-template-areas:
    "header header header"
    "nav main aside"
    "footer footer footer";
  height: 100vh;
`;

const Header = styled.header`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const Main = styled.header`
  grid-area: main;
`;
const Nav = styled.header`
  grid-area: nav;
`;
const Aside = styled.header`
  grid-area: aside;
`;
const Footer = styled.header`
  grid-area: footer;
`;
