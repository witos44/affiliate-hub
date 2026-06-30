// components/admin/landing/LandingActions.tsx

"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Edit, Eye, Copy, Trash2 } from "lucide-react";

interface LandingActionsProps {
  id: number;
  status: "draft" | "published";
}

export function LandingActions({ id, status }: LandingActionsProps) {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/admin/landing-pages/edit/${id}`);
  };

  const handlePreview = () => {
    // Buka preview di tab baru (nanti diintegrasikan)
    window.open(`/preview/${id}`, "_blank");
  };

  const handleDuplicate = () => {
    // TODO: duplicate landing (Batch 7)
    console.log("Duplicate", id);
  };

  const handleDelete = () => {
    if (confirm("Are you sure you want to delete this landing page?")) {
      // TODO: delete landing (Batch 7)
      console.log("Delete", id);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
          <MoreVertical className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={handleEdit}>
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handlePreview}>
          <Eye className="mr-2 h-4 w-4" />
          Preview
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDuplicate}>
          <Copy className="mr-2 h-4 w-4" />
          Duplicate
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDelete} className="text-red-600">
          <Trash2 className="mr-2 h-4 w-4" />
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}