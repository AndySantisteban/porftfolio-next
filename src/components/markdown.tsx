import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/**
 * Server Component: el markdown se convierte a HTML en build time.
 * El browser recibe HTML puro — cero JS de parsing en el cliente.
 */
export function Markdown({ children }: { children: string }) {
  return (
    <div className="prose">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: (props) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
