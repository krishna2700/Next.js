import { db } from "@/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import * as actions from "@/actions/index";

interface showSnippetProps {
  params: {
    id: string;
  };
}
export default async function snippetShowPage(props: showSnippetProps) {
  await new Promise((k) => {
    setTimeout(k, 2000);
  });
  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(props.params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }
  return (
    <div>
      <div className="flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/Snippets/${snippet.id}/edit`}
            className="p-2 border-rounded"
          >
            Edit
          </Link>
          <form action={actions.deleteSnippet.bind(null, snippet.id)}>
            <button className="p-2 border-rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-200">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
}

export async function generateStaticParams() {
  const snippets = await db.snippet.findMany();

  return snippets.map((snippet) => {
    return {
      id: snippet.id.toString(),
    };
  });
}
