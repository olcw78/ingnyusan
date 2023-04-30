import { FC } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
  markdown: Readonly<string>;
}

const MarkdownRenderer: FC<MarkdownRendererProps> = ({ markdown }) => (
  <div className="leading-10 text-xl">
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </div>
);
export default MarkdownRenderer;
