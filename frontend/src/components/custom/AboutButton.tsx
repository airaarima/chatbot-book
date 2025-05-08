import Link from "next/link";
import { Button } from "../ui/button";
import { BookOpen } from "lucide-react";
import { HOME_PAGE } from "@/shared/constants/routes";

export const AboutButton = () => {
  return (
    <Link href={HOME_PAGE} className="fixed top-4 right-4">
      <Button
        variant="outline"
        size="sm"
        className="bg-white border border-gray-200 shadow-sm text-gray-500 hover:bg-purple-50 hover:text-purple-600 transition-all cursor-pointer"
      >
        <BookOpen />
        Sobre
      </Button>
    </Link>
  );
};
