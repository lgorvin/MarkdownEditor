import Editor from "../components/Editor";
import React, { useState } from "react";
import { FormOutlined } from "@ant-design/icons";
import { Layout, Menu, theme, Typography } from "antd";
import { Input } from "antd";
import { Dispatch, SetStateAction } from "react";

const { TextArea } = Input;
const { Header, Content, Footer, Sider } = Layout;
const { Title } = Typography;

type Props = {
  arr: any[];
  setArr: Dispatch<SetStateAction<any[]>>;
};

const NavBar: React.FC<Props> = (props) => {
  const [count, setCount] = useState(0);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [text, setText] = useState(
    "## **Welcome to Realtime Markdown** \n Start typing above and see your markdown converted in real time" as string
  );

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("Change:", e.target.value);
    setText(e.target.value);
    console.log(text);
  };

  const handeClick = () => {
    props.setArr([...props.arr, FormOutlined]);
    console.log(props.arr);
  };

  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={props.arr.map((icon, index) => ({
              key: String(index + 1),
              icon: React.createElement(icon),
              label: `Markdown ${index + 1}`,
            }))}
          />
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <Title
              style={{
                textAlign: "center",
                marginTop: "8px",
                fontFamily: "Montserrat",
                fontWeight: "bold",
              }}
            >
              RealTime MarkDown
            </Title>
          </Header>
          <Editor />
          <Footer style={{ textAlign: "center" }}>
            Realtime Markdown ©2023 Created by lgorvin
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default NavBar;
