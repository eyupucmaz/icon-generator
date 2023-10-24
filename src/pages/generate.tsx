import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import FormGroup from "~/components/FormGroup";
import BaseInput from "~/components/BaseInput";
import { api, cn, updateForm } from "~/utils";
import { signIn, signOut, useSession } from "next-auth/react";
import BaseButton from "~/components/BaseButton";

type FormState = {
  [key: string]: string;
};

const Generate: NextPage = () => {
  const [form, setForm] = useState<FormState>({
    prompt: "",
  });

  const session = useSession();

  const isLoggedIn = !!session.data;

  const generateIcon = api.generate.generateIcon.useMutation({
    onSuccess(data) {
      console.log("🚀 ~ file: generate.tsx:19 ~ generateIcon.useMutation ~ onSuccess", data);
    },
  });

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    generateIcon.mutate({
      prompt: form.prompt as string,
    });
  }

  return (
    <>
      <Head>
        <title>Generate Icon with AI</title>
        <meta name="description" content="Generate icons with chatGPT AI" />
      </Head>

      <main className={cn("flex min-h-screen flex-col items-center justify-center")}>
        {!isLoggedIn && (
          <BaseButton
            onClick={(): void => {
              signIn().catch(console.error);
            }}
          >
            Login
          </BaseButton>
        )}
        {isLoggedIn && (
          <BaseButton
            onClick={(): void => {
              signOut().catch(console.error);
            }}
          >
            Logout
          </BaseButton>
        )}
        <form
          className={cn("flex flex-col items-start justify-start gap-y-3")}
          onSubmit={handleFormSubmit}
        >
          <FormGroup>
            <label htmlFor="prompt">Prompt</label>
            <BaseInput
              type="text"
              name="prompt"
              id="prompt"
              value={form.prompt}
              onChange={updateForm("prompt", setForm)}
            />
          </FormGroup>

          <BaseButton type="submit">Generate</BaseButton>
        </form>
      </main>
    </>
  );
};

export default Generate;
