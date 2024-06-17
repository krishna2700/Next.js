import { db } from "@/db";
import { redirect } from "next/navigation";

export default function Create() {
  async function createSnippet(formData: FormData) {
    // This needs to be a server action
    "use server";
    // Check the user's input and make sure they are valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    // Create a new record in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);
    // Redirect the user to the root route
    return redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            id="title"
            className="border rounded p-2 w-full"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            id="code"
            className="border rounded p-2 w-full"
          />
        </div>
        <button className="rounded p-2 bg-blue-200" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
