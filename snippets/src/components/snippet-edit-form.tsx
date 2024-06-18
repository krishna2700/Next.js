"use client";

import type { Snippet } from "@prisma/client";
import { Editor } from "@monaco-editor/react";
import { db } from "@/db";
import { log } from "console";
import { useState } from "react";

interface snippetEditFormProps {
  snippet: Snippet;
}

export default function SnippetEditForm({ snippet }: snippetEditFormProps) {
  const [code, setCode] = useState(snippet.code);
  const handleEditorChange = (value: string = " ") => {
    setCode(value);
  };

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
    </div>
  );
}
