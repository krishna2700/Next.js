import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => (
    <Link
      href={`/Snippets/${snippet.id}`}
      className="flex justify-between items-center p-2 border rounded"
      key={snippet.id}
    >
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  ));

  return (
    <div>
      <div className="flex justify-between m-2 items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href={"/Snippets/New"} className="border p-2 rounded">
          Create New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
}
