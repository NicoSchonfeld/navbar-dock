"use client";

import { useRef } from "react";
import {
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

import {
  HomeIcon,
  ArchiveBoxIcon,
  ChatIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
  SettingsIcon,
  TwitterIcon,
} from "drump-icon";

type IconType = { id: number; icon: object; variant: object | any };

const Icons: Array<IconType> = [
  { id: 3, icon: <HomeIcon solid={false} w={20} h={20} />, variant: null },
  {
    id: 4,
    icon: <ArchiveBoxIcon solid={false} w={20} h={20} />,
    variant: null,
  },
  { id: 5, icon: <ChatIcon solid={false} w={20} h={20} />, variant: null },
  { id: 6, icon: <TwitterIcon solid={false} w={17} h={17} />, variant: null },
  {
    id: 7,
    icon: <UserIcon solid={false} w={20} h={20} />,
    variant: null,
  },
  {
    id: 8,
    icon: <SunIcon solid={false} w={20} h={20} />,
    variant: <MoonIcon solid={false} w={20} h={20} />,
  },
  {
    id: 9,
    icon: <SettingsIcon solid={false} w={20} h={20} />,
    variant: null,
  },
];

const AppIcon = ({ mouseX, icon }: { mouseX: MotionValue; icon: object }) => {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bonus = ref?.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bonus.x - bonus.width / 2;
  });

  let widthSync = useTransform(distance, [-150, 0, 150], [40, 100, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 21 });

  return (
    <motion.div
      whileTap={{ y: -20 }}
      ref={ref}
      style={{ width }}
      className="relative text-gray-500 hover:text-gray-300 cursor-pointer aspect-square w-10 rounded-full border-t border-white/40 hover:border-white/50 hover:shadow-md hover:shadow-black bg-black flex items-center justify-center"
    >
      <motion.div className="absolute top-0 left-0 w-full h-full rounded-full bg-gradient-to-tr from-white/5 to-white/20"></motion.div>
      <>{icon}</>
    </motion.div>
  );
};

const NavbarComponent = () => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={(e) => mouseX.set(Infinity)}
      className="mx-auto shadow-md flex h-16 items-end gap-4 rounded-full bg-gradient-to-b from-white/5 to-white/5 border-t border-white/20 px-4 pb-3"
    >
      {Icons.map((data, index) => (
        <AppIcon mouseX={mouseX} key={data?.id} icon={data?.icon} />
      ))}
    </motion.div>
  );
};

export default NavbarComponent;
