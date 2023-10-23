import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import FormGroup from "~/components/FormGroup";
import Input from "~/components/Input";
import { cn } from "~/utils/cn";
import updateForm from "~/utils/updateForm";

type FormState = {
  [key: string]: string;
};

const GeneratePage: NextPage = () => {
  const [form, setForm] = useState<FormState>({
    prompt: "",
  });

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log("🚀 ~ file: generate.tsx:22 ~ handleFormSubmit ~ form:", form);
  }

  return (
    <>
      <Head>
        <title>Generate Icon with AI</title>
        <meta name="description" content="Generate icons with chatGPT AI" />
      </Head>

      <main className={cn("flex min-h-screen items-center justify-center")}>
        <form
          className={cn("flex flex-col items-start justify-start gap-y-3")}
          onSubmit={handleFormSubmit}
        >
          <FormGroup>
            <label htmlFor="prompt">Prompt</label>
            <Input
              type="text"
              name="prompt"
              id="prompt"
              value={form.prompt}
              onChange={updateForm("prompt", setForm)}
            />
          </FormGroup>

          <button
            type="submit"
            className={cn(
              "rounded-md bg-blue-500 px-3 py-1 font-medium text-white hover:bg-blue-600 active:bg-blue-800"
            )}
          >
            Generate
          </button>
        </form>
      </main>
    </>
  );
};

export default GeneratePage;
