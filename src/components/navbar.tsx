import React, { useEffect, useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "../components/MaterialTailwind";
import {
  StarIcon,
  LanguageIcon,
  UserCircleIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Traductor",
    icon: LanguageIcon,
    href: "/translatePage",
  },
  {
    name: "Listas",
    icon: StarIcon,
    href: "/Lists"
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href = "#" }: NavItemProps) {
  return (
    <li>
      <Link href={href} passHref>
        <Typography
          variant="paragraph"
          color="white"
          className="flex items-center gap-2 font-medium text-white"
        >
          {children}
        </Typography>
      </Link>
    </li>
  );
}

export function Navbar() {
  const { data: session } = useSession();
  const [openMenu, setOpenMenu] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleOpenMenu = () => setOpenMenu((cur) => !cur);
  const handleOpenUser = () => setOpenUser((cur) => !cur);

  useEffect(() => {
    setMounted(true);
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) {
        setOpenMenu(false);
        setOpenUser(false);
      }
    });
  }, []);

  if (!mounted) return null; // Evitar el renderizado en el servidor

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      className="border-0 bg-blue-900 sticky top-0 z-50"
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <Typography as="a" color="white" className="text-lg font-bold">
            DiccionarioWEB
          </Typography>
        </Link>
        <ul className="ml-10 hidden items-center gap-8 lg:flex">
          {NAV_MENU.map(({ name, icon: Icon, href }) => (
            <NavItem key={name} href={href}>
              <Icon className="h-5 w-5" />
              {name}
            </NavItem>
          ))}
        </ul>
        {session ? (
          <div className="hidden items-center gap-2 lg:flex">
            <Typography
              as="button"
              onClick={handleOpenUser}
              variant="paragraph"
              color="white"
              className="flex items-center gap-2 font-medium text-white"
            >
              {session.user.name}
              <UserCircleIcon className="h-5 w-5" />
            </Typography>
          </div>
        ) : (
          <div className="hidden items-center gap-2 lg:flex">
            <Link href="/signin">
              <Button variant="text" color="white">
                Iniciar Sesión
              </Button>
            </Link>
            <Link href="/signup">
              <Button color="gray">Registrarse</Button>
            </Link>
          </div>
        )}
        <div className="flex lg:hidden">
          {session && (
            <IconButton
              variant="text"
              color="white"
              onClick={handleOpenUser}
            >
              <UserCircleIcon className="h-6 w-6" />
            </IconButton>
          )}
          <IconButton
            variant="text"
            color="white"
            onClick={handleOpenMenu}
          >
            {openMenu ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openMenu}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon, href }) => (
              <NavItem key={name} href={href}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
      <Collapse open={openUser}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          {session ? (
            <ul className="flex flex-col gap-4">
              <NavItem href="/profile">Perfil</NavItem>
              <li>
                <Button onClick={() => signOut()} variant="filled" color="red">
                  Cerrar Sesión
                </Button>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col gap-4">
              <NavItem href="/signin">Iniciar Sesión</NavItem>
              <NavItem href="/signup">Registrarse</NavItem>
            </ul>
          )}
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
