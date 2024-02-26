"use client";

import { Button } from "@/components/ui/button";
import useClientCheck from "@/hooks/use-client-check";
import { Moon, Sun, SunMoon } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useEffect } from "react";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const { mounted, setMounted } = useClientCheck();

  useEffect(() => {
    const forced: string | null = localStorage.getItem("forced-theme-previous");
    if (forced) {
      setTheme(forced);
      localStorage.removeItem("forced-theme-previous");
    }
  }, []);

  if (mounted == false) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          {theme === "dark" ? (
            <Moon className="w-4 h-4" />
          ) : theme === "system" ? (
            <SunMoon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4" />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggler;
