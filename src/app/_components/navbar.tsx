"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Menu, Search, X } from "lucide-react"
import Link from "next/link"
import { ToggleTheme } from "./toggle-theme"
import Image from "next/image"

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "-100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed w-full top-0 z-50 bg-background"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center px-8 py-4">
            <span className="text-2xl font-bold text-primary">Logo</span>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col space-y-4 bg-background py-4 px-8">
            <Link href="/" className="text-lg font-medium" onClick={onClose}>
              Home
            </Link>
            <Link href="/about" className="text-lg font-medium" onClick={onClose}>
              About
            </Link>
            <Link href="/contact" className="text-lg font-medium" onClick={onClose}>
              Contact
            </Link>
             <Link href="/careers" className="text-lg font-medium" onClick={onClose}>
              Careers
            </Link>
          </nav>
          <div className="mt-auto bg-background px-8">
            <Input
              type="search"
              placeholder="Search..."
              className="mb-4"
            />
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b top-0 shadow fixed w-screen z-50 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-x-4" prefetch={false}>
            <Image src={"/logo.webp"} alt="Logo"  width={100} height={10} className="h-12 w-8"/>
              <span className="text-2xl font-bold text-primary">Total Engineering</span>
            </Link>
            <div className="hidden md:block ml-10">
              <NavigationMenu>
                <NavigationMenuList>
                <NavigationMenuItem>
                <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-foreground" href="/">
                      Home
                    </NavigationMenuLink>
                </NavigationMenuItem>

                 {/*<NavigationMenuItem>
                 
                    <NavigationMenuTrigger className="bg-background text-foreground text-lg">Products</NavigationMenuTrigger>
                     <NavigationMenuContent>
                      <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink asChild>
                            <a
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                              href="/"
                            >
                              <div className="mb-2 mt-4 text-lg font-medium">
                                Featured Product
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                Discover our latest and greatest offering.
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href="/products"
                            >
                              <div className="text-sm font-medium leading-none">All Products</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                View all products
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink asChild>
                            <a
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              href="/"
                            >
                              <div className="text-sm font-medium leading-none">Product B</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                Description for Product B
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem> */}
                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-foreground" href="/about">
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-foreground" href="/contact">
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                   <NavigationMenuItem>
                    <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-foreground" href="/careers">
                      Careers
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center">
              <div className="relative mr-4">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-10 w-full md:w-[200px] lg:w-[300px]"
                />
              </div>
              <ToggleTheme />
              {/* <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="ml-4">
                    <User className="h-5 w-5" />
                    <span className="sr-only">User menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu> */}
            </div>
          </div>
          <div className="md:hidden">
            <motion.div
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </nav>
  )
}