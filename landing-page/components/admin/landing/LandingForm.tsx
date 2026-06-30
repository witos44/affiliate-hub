// components/admin/landing/LandingForm.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import type { LandingPage } from "@/types/landing";
import { LandingGeneral } from "./LandingGeneral";
import { LandingSEO } from "./LandingSEO";
import { LandingPublish } from "./LandingPublish";

interface LandingFormProps {
  initialData?: LandingPage;
}

export function LandingForm({ initialData }: LandingFormProps) {
  const router = useRouter();
  const isEditing = !!initialData;

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [template, setTemplate] = useState(initialData?.template || "default");
  const [status, setStatus] = useState<"draft" | "published">(
    initialData?.status || "draft"
  );
  const [metaTitle, setMetaTitle] = useState(initialData?.metaTitle || "");
  const [metaDescription, setMetaDescription] = useState(initialData?.metaDescription || "");
  const [ogImage, setOgImage] = useState(initialData?.ogImage || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: implement save (Batch 7)
    console.log({
      title,
      slug,
      template,
      status,
      metaTitle,
      metaDescription,
      ogImage,
    });
    router.push("/admin/landing-pages");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="seo">SEO</TabsTrigger>
          <TabsTrigger value="publish">Publish</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6">
          <LandingGeneral
            title={title}
            setTitle={setTitle}
            slug={slug}
            setSlug={setSlug}
            template={template}
            setTemplate={setTemplate}
          />
        </TabsContent>

        <TabsContent value="seo" className="mt-6">
          <LandingSEO
            metaTitle={metaTitle}
            setMetaTitle={setMetaTitle}
            metaDescription={metaDescription}
            setMetaDescription={setMetaDescription}
            ogImage={ogImage}
            setOgImage={setOgImage}
          />
        </TabsContent>

        <TabsContent value="publish" className="mt-6">
          <LandingPublish status={status} setStatus={setStatus} />
        </TabsContent>
      </Tabs>

      <div className="flex gap-4 pt-4 border-t">
        <Button type="submit">
          {isEditing ? "Update" : "Create"} Landing Page
        </Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => router.push("/admin/landing-pages")}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}