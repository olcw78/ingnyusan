import { FC } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownRendererProps {
  markdown: Readonly<string>;
}

const MarkdownRenderer: FC<MarkdownRendererProps> = ({ markdown }) => (
  <div className="text-xl leading-10">
    <ReactMarkdown>{markdown}</ReactMarkdown>
  </div>
);
export default MarkdownRenderer;
