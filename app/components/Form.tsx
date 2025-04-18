"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2 } from "lucide-react";
import React, { useRef } from "react";
import { useFormStatus } from "react-dom";
import { postData } from "../actions";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await postData(formData);
        formRef.current?.reset();
      }}
      className="flex justify-between gap-4 flex-col md:flex-row w-full"
    >
      <Input
        type="text"
        name="message"
        maxLength={80}
        minLength={1}
        placeholder="Your message..."
        required
      />
      <SubmitButton />
    </form>
  );
};

export default Form;

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <>
      {pending ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please Wait
        </Button>
      ) : (
        <Button type="submit">Write your message</Button>
      )}
    </>
  );
};
