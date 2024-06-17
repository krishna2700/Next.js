import { db } from "@/db";
import { notFound } from "next/navigation";

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
  return <div>{snippet.title}</div>;
}
