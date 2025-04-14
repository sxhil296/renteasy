"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Container from "./container";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-200",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <Container>
        {" "}
        <div className=" h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="font-bold text-xl">RentEasy</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Browse Products
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Add Product
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="#"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sign In
            </Link>
            <Button>Start Renting</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className=" px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
            >
              Browse Products
            </Link>
            <Link
              href="#"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
            >
              Add Prodcut
            </Link>

            <div className="pt-2 flex flex-col space-y-3">
              <Link
                href="#"
                className="text-sm font-medium py-2 hover:text-primary transition-colors"
              >
                Sign In
              </Link>
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
