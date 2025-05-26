import { notFound } from "next/navigation";

export default function ProjectPlaceholder() {
  // Always show 404 for now, or you can return a skeleton card
  notFound();
  // Or, for a placeholder:
  // return <div className="min-h-screen flex items-center justify-center text-zinc-400">Project details coming soon!</div>;
}
