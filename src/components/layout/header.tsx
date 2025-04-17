"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  cn,
  getUserFromSessionStorage,
  setUserInSessionStorage,
} from "@/lib/utils";
import Container from "./container";
import { useRouter, useSearchParams } from "next/navigation";
import { setUser } from "@/redux/features/users/userSlice";
import { useAppDispatch } from "@/redux/hook";
import Image from "next/image";

export default function Header() {
  const searchParams = useSearchParams();
  const loggedInUser = searchParams.get("user");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const googleLink = `https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_UI}&client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&access_type=offline&response_type=code&prompt=consent&scope=https://www.googleapis.com/auth/userinfo.profile%20https://www.googleapis.com/auth/userinfo.email`;

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

  useEffect(() => {
    if (loggedInUser) {
      dispatch(setUser(JSON.parse(loggedInUser)));
      setUserInSessionStorage(JSON.parse(loggedInUser));
      router.replace("/");
    }
  }, [loggedInUser, dispatch]);

  const user = getUserFromSessionStorage();
  console.log("User from session storage: ", user);

  



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
              href="add-product"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Add Product
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {!user && (
              <Button className="rounded" asChild>
                <Link href={googleLink}>Start Renting</Link>
              </Button>
            )}
            {user && (
              <Link
                href="/dashboard"
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                <Image
                  src={user?.picture}
                  width={30}
                  height={30}
                  alt={`${user?.name} pfp`}
                  className="rounded-full border border-green-500 cursor-pointer"
                />
              </Link>
            )}
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
              href="add-product"
              className="text-sm font-medium py-2 hover:text-primary transition-colors"
            >
              Add Prodcut
            </Link>

            <div className="pt-2 flex flex-col space-y-3">
              {!user && (
                <Button className="rounded" asChild>
                  <Link href={googleLink}>Start Renting</Link>
                </Button>
              )}
              {user && (
                <Link
                  href="/dashboard"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  <Image
                    src={user?.picture}
                    width={30}
                    height={30}
                    alt={`${user?.name} pfp`}
                    className="rounded-full border border-green-500 cursor-pointer"
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
