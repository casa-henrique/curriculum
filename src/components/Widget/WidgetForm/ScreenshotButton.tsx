import { useState } from "react";
import { Camera, Trash } from "phosphor-react";

import { isMobile } from "react-device-detect";

import html2canvas from "html2canvas";
import { Loading } from "./Loading";

interface ScreenshotButtonProps {
  onScreenshotTook: (screenshot: string | null) => void;
  screenshot: string | null;
}

export function ScreenshotButton({
  onScreenshotTook,
  screenshot,
}: ScreenshotButtonProps) {
  const [isTakingScreenshot, setIsTakingScreenshot] = useState(false);

  async function handleTakenScreenshot() {
    setIsTakingScreenshot(true);

    if (isMobile) {
      const canvas = await html2canvas(document.querySelector("html")!, {
        height: 250,
      });
      const base64image = canvas.toDataURL("image/jpeg", 0.6);

      onScreenshotTook(base64image);
      setIsTakingScreenshot(false);
    }

    const canvas = await html2canvas(document.querySelector("html")!, {
      height: 750,
    }); //Tirando o print
    const base64image = canvas.toDataURL("image/jpeg", 0.6); //Convertendo para png

    onScreenshotTook(base64image);
    setIsTakingScreenshot(false);
  }

  if (screenshot) {
    return (
      <button
        type="button"
        className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
        onClick={() => onScreenshotTook(null)}
        style={{ backgroundImage: `url(${screenshot})` }}
      >
        <Trash weight="fill" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleTakenScreenshot}
      className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
    >
      {isTakingScreenshot ? <Loading /> : <Camera className="w-6 h-6" />}
    </button>
  );
}
