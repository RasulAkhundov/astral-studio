import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./button.scss";

export default function Button({
   children,
   onClick,
   className = "",
   type = "button",
   href = null,
   target = "_self",
   disabled = false,
}) {
   const buttonRef = useRef(null);
   const textLayerRef = useRef(null);

   // Helper function to split the text into span elements
   const splitText = (text) => {
      return text.split('').map((char, index) => {
         // Boşluk karakterlerini kontrol et
         if (char === ' ') {
            return <span key={index}>&#160;</span>;
         }
         return <span key={index}>{char}</span>;
      });
   };

   useEffect(() => {
      const button = buttonRef.current;
      const textLayer = textLayerRef.current;
      const spans = gsap.utils.toArray(textLayer.querySelectorAll(".default__text span")); // Her harf için ayrı span elemanı alıyoruz
      const hoveredText = gsap.utils.toArray(textLayer.querySelectorAll(".hovered__text span")); // Hovered text için span'ı alıyoruz

      if (window.innerWidth >= 1023) {
         button.addEventListener("mouseenter", () => {
            // Her harfi sırasıyla yukarıya hareket ettiriyoruz
            gsap.to(spans, {
               y: "-100%",
               duration: 0.25,
               ease: "ease",
               stagger: 0.05, // 0.1 saniye aralıkla her harf yukarı hareket edecek
            });

            // Hovered text'i yukarıya getiriyoruz
            gsap.to(hoveredText, {
               y: "0%",
               duration: 0.25,
               ease: "ease",
               stagger: 0.05,
            });
         });

         button.addEventListener("mouseleave", () => {
            // Her harfi sırasıyla yerine geri getiriyoruz
            gsap.to(spans, {
               y: "0%",
               duration: 0.25,
               ease: "ease",
               stagger: 0.05, // 0.1 saniye aralıkla her harf yerine geri gelecek
            });

            // Hovered text'i tekrar altta yapıyoruz
            gsap.to(hoveredText, {
               y: "100%",
               duration: 0.25,
               ease: "ease",
               stagger: 0.05,
            });
         });

         return () => {
            button.removeEventListener("mouseenter", () => { });
            button.removeEventListener("mouseleave", () => { });
         };
      }
   }, []);

   return (
      <div
         ref={buttonRef}
         type={type}
         className={`button__wrapper ${className}`}
         onClick={onClick}
         disabled={disabled}
      >
         {href && <a href={href} target={target}></a>}
         <div className="text__layer" ref={textLayerRef}>
            <span className="default__text">{splitText(children)}</span> {/* Metni harflere ayır */}
            <span className="hovered__text">{splitText(children)}</span>
         </div>
      </div>
   );
}
