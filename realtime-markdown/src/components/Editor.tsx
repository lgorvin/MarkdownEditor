import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme, Typography } from "antd";
import { Input } from "antd";

const { TextArea } = Input;

const { Header, Content, Footer, Sider } = Layout;

const { Title } = Typography;

const Editor: React.FC = () => {
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

  const handleKeyPress = () => {};

  return (
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
          items={[
            UserOutlined,
            VideoCameraOutlined,
            UploadOutlined,
            UserOutlined,
          ].map((icon, index) => ({
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

        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 335,
              background: colorBgContainer,
            }}
          >
            <TextArea
              showCount
              maxLength={500}
              style={{ height: 335, resize: "none" }}
              onChange={onChange}
              placeholder="Enter your markdown"
            />
          </div>
        </Content>
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 335,
              background: colorBgContainer,
            }}
          >
            {text.split("\n").map((e) => (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{e}</ReactMarkdown>
            ))}
          </div>
        </Content>

        <Footer style={{ textAlign: "center" }}>
          Realtime Markdown ©2023 Created by lgorvin
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Editor;
