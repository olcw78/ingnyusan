import ReactMarkdown from "react-markdown";
import tw from "tailwind-styled-components";

interface MarkdownRendererProps {
  markdown: Readonly<string>;
}

const MarkdownRenderer = ({ markdown }: MarkdownRendererProps) => (
  <Root>
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </Root>
);
export default MarkdownRenderer;

const Root = tw.div`
  leading-10
  text-xl
`;
