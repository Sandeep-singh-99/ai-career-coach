import React from "react";
import CoverLetterGenerates from "../_components/cover-letter-generates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NewCoverLetter() {
  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col space-y-2">
        <Link href={"/cover-letter"}>
          <Button variant={"link"} className={"gap-2 pl-0"}>
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>

        <div className="pb-6">
          <h1 className="text-6xl font-bold gradient-title">
            Create a New Cover Letter
          </h1>
          <p className="text-muted-foreground">
            Use our AI-powered tool to generate a personalized cover letter
            tailored to your job application. Fill in the details below and let
            the AI do the rest!
          </p>
        </div>
      </div>
      <CoverLetterGenerates />
    </div>
  );
}
