import { LinkSide } from "./LinkSide";

export function Sidebar() {
  return (
    <div className="fixed flex w-full max-w-[200px] flex-col gap-6">
      <li className="w-full flex flex-col items-start justify-start gap-2">
        <LinkSide href="#about">About me</LinkSide>
        <LinkSide href="#journey">Journey</LinkSide>
        <LinkSide href="#experience">Experience</LinkSide>
        <LinkSide href="#education">Education</LinkSide>
      </li>
    </div>
  );
}
