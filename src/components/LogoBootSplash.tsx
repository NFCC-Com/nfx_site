import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";

const bootText = "INITIALIZING NFX CTF 2026 // NFCTF × NXCTF";

export default function LogoBootSplash() {
  const [visible, setVisible] = React.useState(true);
  const [typedText, setTypedText] = React.useState("");

  React.useEffect(() => {
    // Only lock on first mount
    document.documentElement.classList.add("boot-lock");
    window.scrollTo(0, 0);

    const hideTimeout = window.setTimeout(() => {
      setVisible(false);
    }, 1800);

    const completeTimeout = window.setTimeout(() => {
      document.documentElement.classList.remove("boot-lock");
      window.dispatchEvent(new Event("nfx:boot-complete"));
    }, 2200);

    return () => {
      window.clearTimeout(hideTimeout);
      window.clearTimeout(completeTimeout);
      document.documentElement.classList.remove("boot-lock");
    };
  }, []);

  React.useEffect(() => {
    let interval: number | undefined;
    const startTimeout = window.setTimeout(() => {
      let index = 0;
      interval = window.setInterval(() => {
        index += 1;
        setTypedText(bootText.slice(0, index));
        if (index >= bootText.length) {
          window.clearInterval(interval);
        }
      }, 35);
    }, 300);

    return () => {
      window.clearTimeout(startTimeout);
      if (interval) window.clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-[#020617]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          {/* Ambient Cyber Grid Background */}
          <motion.div
            className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(34,211,238,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,122,0,0.3)_1px,transparent_1px)] [background-size:48px_48px]"
            animate={{ opacity: [0.04, 0.08, 0.04] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* Central HUD Box */}
          <motion.div
            className="relative grid h-[20rem] w-[20rem] sm:h-[26rem] sm:w-[26rem] place-items-center"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Scanning Laser Beam */}
            <div className="absolute inset-2 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.8)]"
                initial={{ top: "-5%", opacity: 0 }}
                animate={{ top: ["-5%", "105%"], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 1.2, delay: 0.2, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>

            {/* Corner HUD Brackets */}
            <div className="absolute left-0 top-0 size-10 border-l-2 border-t-2 border-nx-cyan shadow-[0_0_10px_rgba(34,211,238,0.4)]" />
            <div className="absolute right-0 top-0 size-10 border-r-2 border-t-2 border-nf-orange shadow-[0_0_10px_rgba(255,122,0,0.4)]" />
            <div className="absolute bottom-0 left-0 size-10 border-b-2 border-l-2 border-nf-orange shadow-[0_0_10px_rgba(255,122,0,0.4)]" />
            <div className="absolute bottom-0 right-0 size-10 border-b-2 border-r-2 border-nx-cyan shadow-[0_0_10px_rgba(34,211,238,0.4)]" />

            {/* Center Logo Glow */}
            <motion.div
              className="relative z-10 flex flex-col items-center gap-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="size-24 sm:size-28 rounded-3xl bg-surface-elevated/90 border border-white/15 p-4 shadow-[0_0_50px_rgba(255,122,0,0.3)] flex items-center justify-center">
                <img
                  src="/logo2.png"
                  alt="NFX CTF 2026"
                  className="size-full object-contain"
                />
              </div>
            </motion.div>

            {/* Terminal Typing Line */}
            <div className="absolute bottom-6 font-mono text-[0.68rem] sm:text-xs font-semibold uppercase tracking-[0.25em] text-nx-cyan drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              <span>{typedText}</span>
              <motion.span
                className="ml-1 inline-block h-[1em] w-[0.5em] translate-y-[0.12em] bg-nx-cyan"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
