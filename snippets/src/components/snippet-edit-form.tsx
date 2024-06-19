"use client";

import { Editor } from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import * as actions from "@/actions/index";

interface snippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: snippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value: string = " ") => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <div>
      <Editor
        height="40vh"
        defaultLanguage="javaScript"
        defaultValue={snippet.code}
        theme="vs-dark"
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 border-rounded">
          Save
        </button>
      </form>
    </div>
  );
}
