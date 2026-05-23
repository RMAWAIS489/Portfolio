"use client";

import { useEffect } from "react";

function setFavicon(href: string) {
  const existingIcons = Array.from(document.querySelectorAll<HTMLLinkElement>("link[rel~='icon']"));

  if (existingIcons.length > 0) {
    existingIcons.forEach((icon) => {
      icon.href = href;
      icon.type = "image/png";
    });
    return;
  }

  const newIcon = document.createElement("link");
  newIcon.rel = "icon";
  newIcon.type = "image/png";
  newIcon.href = href;
  newIcon.sizes = "64x64";
  document.head.appendChild(newIcon);
}

function drawHeartbeatFrame(frame: number) {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return "";

  ctx.clearRect(0, 0, size, size);

  const line = [
    { x: 8, y: 40 },
    { x: 24, y: 40 },
    { x: 30, y: 28 },
    { x: 36, y: 48 },
    { x: 42, y: 20 },
    { x: 48, y: 40 },
    { x: 56, y: 40 },
  ];

  const phase = (frame % 12) / 12;
  const pulseX = 16 + phase * 32;
  const pulseY = 18 + Math.sin(phase * Math.PI * 2) * 6;

  ctx.strokeStyle = "#51d7ff";
  ctx.lineWidth = 4;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.beginPath();
  ctx.moveTo(line[0].x, line[0].y);
  for (let i = 1; i < line.length; i++) {
    ctx.lineTo(line[i].x, line[i].y);
  }
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2);
  ctx.fillStyle = "#51d7ff";
  ctx.fill();

  return canvas.toDataURL("image/png");
}

export default function FaviconAnimator() {
  useEffect(() => {
    let frame = 0;
    let active = true;

    const update = () => {
      if (!active) return;
      const href = drawHeartbeatFrame(frame);
      if (href) setFavicon(href);
      frame += 1;
      window.setTimeout(update, 120);
    };

    update();

    return () => {
      active = false;
    };
  }, []);

  return null;
}
