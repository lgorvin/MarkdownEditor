import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Layout, Menu, theme, Typography } from "antd";
import { Input } from "antd";
import { Dispatch, SetStateAction } from "react";
import { PoweroffOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";

const { TextArea } = Input;

const { Header, Content, Footer, Sider } = Layout;

const { Title } = Typography;

type Props = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
};

const Editor: React.FC<Props> = (props) => {
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

  const [loadings, setLoadings] = useState<boolean[]>([]);

  const enterLoading = (index: number) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  return (
    <>
      <Content style={{ margin: "24px 16px 0" }}>
        <div
          style={
            props.darkMode
              ? {
                  padding: 24,
                  minHeight: 335,
                  background: "gray",
                }
              : { padding: 24, minHeight: 335, background: colorBgContainer }
          }
        >
          <TextArea
            showCount
            maxLength={500}
            bordered={false}
            style={
              props.darkMode
                ? {
                    height: 335,
                    resize: "none",
                    backgroundColor: "gray",
                    color: "#fff",
                  }
                : { height: 335, resize: "none" }
            }
            onChange={onChange}
            placeholder="Enter your markdown"
          />
        </div>
      </Content>
      <Content ref={componentRef} style={{ margin: "24px 16px 0" }}>
        <div
          style={
            props.darkMode
              ? {
                  padding: 24,
                  minHeight: 335,
                  background: "gray",
                }
              : { padding: 24, minHeight: 335, background: colorBgContainer }
          }
        >
          {text.split("\n").map((e) => (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{e}</ReactMarkdown>
          ))}
        </div>
      </Content>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
      >
        {/* <button
          style={{ width: "400px", marginBottom: "9px" }}
          onClick={() => {
            handlePrint();
          }}
        >
          Print MarkDown to PDF!
        </button> */}
        <Button
          style={{
            width: "150px",
            marginTop: "-4px",
            fontWeight: "bold",
          }}
          type="primary"
          loading={loadings[0]}
          onClick={() => {
            enterLoading(0);
            handlePrint();
          }}
        >
          Print to PDF
        </Button>
      </div>
    </>
  );
};

export default Editor;
