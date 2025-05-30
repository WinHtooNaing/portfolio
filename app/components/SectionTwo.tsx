import Image from "next/image";
import youme from "../../public/youme.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import sketch from "../../public/tech-icons/sketch.svg";
import canva from "../../public/tech-icons/canva.svg";
import ai from "../../public/tech-icons/ai.svg";
// import figma from "../../public/tech-icons/figma.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import cloud from "../../public/tech-icons/creativecloud.svg";
// import framer from "../../public/tech-icons/framer.svg";
import github from "../../public/tech-icons/github.svg";
import slack from "../../public/tech-icons/slack.svg";
import discord from "../../public/tech-icons/discord.svg";
import youtube from "../../public/tech-icons/youtube.svg";
import chrome from "../../public/tech-icons/chrome.svg";
// import pr from "../../public/tech-icons/pr.svg";
// import ps from "../../public/tech-icons/ps.svg";
import notion from "../../public/tech-icons/notion.svg";
import micro from "../../public/tech-icons/micro.svg";
import telegram from "../../public/telegram.svg";
import facebook from "../../public/facebook.svg";
import linkedin from "../../public/linkedin.svg";
import { Button } from "@/components/ui/button";

const icons = [
  sketch,
  canva,
  ai,
  //   figma,
  chatgpt,
  cloud,
  //   framer,
  github,
  slack,
  discord,
  youtube,
  chrome,
  //   pr,
  //   ps,
  notion,
  micro,
];
const socialMedia = [
  {
    id: 1,
    icon: facebook,
    name: "Facebook",
    username: "@win.h.naing",
    link: "https://www.facebook.com/win.h.naing.77398",
  },
  {
    id: 2,
    icon: telegram,
    name: "Telegram",
    username: "@cpy_pst_ldr",
    link: "https://t.me/cpy_pst_ldr",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    username: "@winhtoonaing",
    link: "https://www.linkedin.com/in/win-htoo-naing-51bb79275/",
  },
];
const SectionTwo = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={youme}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card>
          <CardHeader className="bg-gray-100 border-none">
            <CardTitle>Explore my stack</CardTitle>
            <CardDescription>Check out the tools I use daily</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((item, index) => (
              <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
            ))}
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link}>Follow</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
