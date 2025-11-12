"use client";
import Typewriter from "typewriter-effect";
const data = [
  "Hello world!",
  "It's me Zul...",
  "I'm free!",
  "To be whatever I...",
  "Whatever I choose...",
  "And I'll sing...",
  "the blues if I want...",
];

export default function Logo() {
  return (
    <h3 className="text-2xl font-mono font-semibold text-accent">
      <Typewriter
        options={{
          strings: [
            "Hello world!",
            "It's me Zul...",
            "I'm free!",
            "To be whatever I...",
            "Whatever I choose...",
            "And I'll sing...",
            "the blues if I want...",
          ],
          autoStart: true,
          loop: true,
          delay: 30,
          deleteSpeed: 5,
        }}
      />
    </h3>
  );
}
