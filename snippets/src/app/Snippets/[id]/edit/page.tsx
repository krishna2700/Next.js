import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface snippetEditPagerops {
  params: {
    id: string;
  };
}

export default async function snippeEditPage(props: snippetEditPagerops) {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: {
      id,
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
