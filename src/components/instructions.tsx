import {
  Info,
  RotateCw,
  Headphones,
  Sun,
  Coffee,
  Twitter,
  Link2,
  Github,
  XCircle,
  Camera,
} from "lucide-react";
import { Card, CardTitle, CardDescription, CardContent } from "./ui/card";
import { Button } from "./ui/button";

export default function Help({ onClick }: { onClick: () => void }) {
  const handleClick = () => {
    onClick();
  };

  return (
    <div>
      <p
        style={{ textDecoration: "underline", cursor: "pointer" }}
        className="flex items-center"
        onClick={handleClick}
      >
        <Info size="14px" className="mr-1" />
        info
      </p>
    </div>
  );
}

export function InstructionsCard({ onClose }: { onClose: () => void }) {
  return (
    <Card className="infocard absolute p-8 shadow-xl mx-3">
      <CardTitle className="">
        <p className="flex items-center">
          <Info size="16px" className="mr-1" />
          info
        </p>
      </CardTitle>
      <div className="infohori">
        <div className="info2 mt-6">
          <CardDescription>bottom-left buttons</CardDescription>
          <CardContent className="pt-2 sm:text-xs md:text-sm lg:text-base xl:text-md">
            <p className="flex items-center">
              <Sun size="14px" className="mr-1" />
              <span className="ml-2">change the quote card&apos;s theme</span>
            </p>
            <p className="flex items-center">
              <Camera size="14px" className="mr-1" />
              <span className="ml-2">switch to screenshot mode</span>
            </p>
            <p className="flex items-center">
              <Twitter size="14px" className="mr-1" />
              <span className="ml-2">Tweet your favorite quote</span>
            </p>
            <p className="flex items-center">
              <Link2 size="14px" className="mr-1" />
              <span className="ml-2">
                copy this website&apos;s URL to share
              </span>
            </p>
          </CardContent>
        </div>
        <div className="info1">
          <div>
            <CardDescription className="">top-right buttons</CardDescription>
            <CardContent className="pt-2 sm:text-xs md:text-sm lg:text-base xl:text-md">
              <p className="flex items-center">
                <RotateCw size="14px" className="mr-1" />
                <span className="ml-2">refresh the quote and mood</span>
              </p>
              <p className="flex items-center">
                <Headphones size="14px" className="mr-1" />
                <span className="ml-2">
                  listen to Iroh&apos;s words of wisdom
                </span>
              </p>
            </CardContent>
            <div>
              <CardDescription>clicking Iroh will</CardDescription>
              <CardContent className="pt-2 sm:text-xs md:text-sm lg:text-base xl:text-md">
                <p className="flex items-center">
                  <Coffee size="14px" className="mr-1" />
                  <span className="ml-2">
                    open a random wiki page about a tea leaf
                  </span>
                </p>
              </CardContent>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center -mt-1">
        <CardContent>
          <p className="github flex items-center mt-4">
            <Github className="mr-1 sm:text-xs md:text-sm lg:text-base xl:text-md" />
            <span className="ml-2 underline">
              <a href="https://github.com/loganvrankovic">
                https://github.com/loganvrankovic
              </a>
            </span>
          </p>
        </CardContent>
        <CardContent className="text-center pt-2 mb-[-20px]">
          <Button onClick={onClose} variant="ghost">
            <XCircle />
          </Button>
        </CardContent>
      </div>
    </Card>
  );
}
