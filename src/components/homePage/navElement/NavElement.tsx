import { NavElementType } from "@/src/lib/types/homePageTypes";
import Image from "next/image";

type NavElementProps = {
  nav: NavElementType;
};

export default function NavElement({ nav }: NavElementProps) {
  return (
    <div key={nav.id}>
      <Image alt={"icon" + nav.id} src={nav.icon} width={30} height={30} />
      <p>{nav.title}</p>
    </div>
  );
}
