"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Assets } from "@/utils/assets";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";

import { Avatar } from "@nextui-org/avatar";
import NextLink from "next/link";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  return (
    <NextUINavbar className="container mx-auto max-w-5xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <p className="font-bold text-inherit">davidkorn</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex">
          <Button
            color="default"
            variant="bordered"
            onClick={() =>
              window.open(
                "https://calendly.com/korn-david/introductory-call",
                "_blank"
              )
            }
          >
            <Avatar
              src={Assets.profileImage}
              className="w-6 h-6 text-tiny"
            ></Avatar>
            Contact me
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>
    </NextUINavbar>
  );
};
