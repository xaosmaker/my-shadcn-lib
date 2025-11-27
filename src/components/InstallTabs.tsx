"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { downloadComponent } from "@/features/generateDownloadUrl";
import { Button } from "./ui/button";
import { Copy } from "lucide-react";
export default function InstallTabs({ name }: { name: string }) {
  function copyText(text: string) {
    navigator.clipboard.writeText(text);
  }
  const downUrl = downloadComponent(name);
  return (
    <Tabs
      defaultValue="pnpm"
      className="relative mt-10 rounded-2xl border-2 bg-current/10"
    >
      <TabsList className="w-1/2">
        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
        <TabsTrigger value="npm">npm</TabsTrigger>
      </TabsList>
      <div className="flex h-12 items-center px-4 text-sm">
        <TabsContent className="flex items-center gap-4" value="pnpm">
          <Button
            variant="ghost"
            onClick={() => copyText(downUrl.pnpm)}
            className=""
          >
            <Copy />
          </Button>
          <p>{downUrl.pnpm}</p>
        </TabsContent>
        <TabsContent className="flex items-center gap-4" value="npm">
          <Button
            variant="ghost"
            onClick={() => copyText(downUrl.npm)}
            className=""
          >
            <Copy />
          </Button>
          <p>{downUrl.npm}</p>
        </TabsContent>
      </div>
    </Tabs>
  );
}
