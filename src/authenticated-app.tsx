import React from "react";
import { ProjectListScreen } from "./screens/project-list";
import { useAuth } from "./context/auth-context";
import { Button, Dropdown, Menu } from "antd";
import styled from "@emotion/styled";
import { Row } from "./components/lib";
import { ReactComponent as SoftwareLogo } from "assets/logo.svg";

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
  const { logout, user } = useAuth();

  return (
    <Container>
      <Header>
        <HeaderLeft gap={true}>
          <SoftwareLogo width={"8rem"} color={"rgb(38, 132, 255)"} />
          <h2>Logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key={"logout"}>
                  <a onClick={logout}>登出</a>
                </Menu.Item>
              </Menu>
            }
          >
            <a onClick={(e) => e.preventDefault()}>Hi, {user?.name}</a>
          </Dropdown>
        </HeaderRight>
      </Header>
      <Main>
        <ProjectListScreen />
      </Main>
    </Container>
  );
}

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const HeaderItem = styled.h3`
  margin-right: 3rem;
`;

const HeaderLeft = styled(Row)`
  padding: 3.2rem;
`;

const HeaderRight = styled.div``;

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Main = styled.main``;
