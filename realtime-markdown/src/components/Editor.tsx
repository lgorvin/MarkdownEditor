import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
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
    "## **Welcome to Realtime Markdown** \n Start typing above and see your markdown converted in real time \n # Things to come \n - ~~Save to PDF~~" as string
  );

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log("Change:", e.target.value);
    setText(e.target.value);
    console.log(text);
  };

  const componentRef = useRef(null);
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <>
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
      <Content ref={componentRef} style={{ margin: "24px 16px 0" }}>
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
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        <button style={{ width: "400px" }} onClick={handlePrint}>
          Print MarkDown to PDF!
        </button>
      </div>
    </>
  );
};

export default Editor;
