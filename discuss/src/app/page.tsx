import * as actions from "@/actions/index";
import { auth } from "@/auth";
import { Button } from "@nextui-org/react";
import Profile from "@/components/profile";
export default async function Home() {
  const session = await auth();
  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">Sign in</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign out</Button>
      </form>

      {session?.user ? (
        <div>{JSON.stringify(session.user)}</div>
      ) : (
        <div>sign out</div>
      )}

      <Profile />
    </div>
  );
}
