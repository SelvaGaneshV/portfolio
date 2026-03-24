import jetbrainsMonoUrl from "@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2?url";
import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { Analytics } from "@vercel/analytics/react";
import type { ReactNode } from "react";
import { skills } from "~/components/About";
import { ThemeProvider } from "~/components/ThemeProvider";
import appCss from "../styles.css?url";
export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Selva Ganesh V - Full Stack Developer",
      },
      {
        name: "description",
        content:
          "Full Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies. View my projects, experience, and skills.",
      },
      {
        name: "author",
        content: "Selva Ganesh V",
      },
      {
        name: "keywords",
        content:
          "full stack developer, React developer, TypeScript, Node.js, web development, frontend developer, backend developer, portfolio",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "theme-color",
        media: "(prefers-color-scheme: light)",
        content: "#ffffff",
      },
      {
        name: "theme-color",
        media: "(prefers-color-scheme: dark)",
        content: "#000000",
      },
      {
        property: "og:title",
        content: "Selva Ganesh V - Full Stack Developer",
      },
      {
        property: "og:description",
        content:
          "Full Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://selvaganeshv.vercel.app",
      },
      {
        property: "og:locale",
        content: "en_US",
      },
      {
        property: "og:site_name",
        content: "Selva Ganesh V Portfolio",
      },
      {
        property: "og:image",
        content: "https://selvaganeshv.vercel.app/og-image.png",
      },
      {
        property: "og:image:alt",
        content: "Selva Ganesh V - Software Engineer Portfolio",
      },
      {
        property: "og:image:type",
        content: "image/png",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@selvaganeshv",
      },
      {
        name: "twitter:title",
        content: "Selva Ganesh - Full Stack Developer",
      },
      {
        name: "twitter:description",
        content:
          "Full Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies.",
      },
      {
        name: "twitter:creator",
        content: "@selvaganeshv",
      },
      {
        name: "twitter:image",
        content: "https://selvaganeshv.vercel.app/og-image.png",
      },
      {
        name: "twitter:image:alt",
        content: "Selva Ganesh V - Software Engineer Portfolio",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preload",
        href: jetbrainsMonoUrl,
        as: "font",
        type: "font/woff2",
        crossOrigin: "anonymous",
      },
      {
        rel: "icon",
        href: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        rel: "icon",
        href: "/favicon.ico",
        sizes: "48x48",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
        sizes: "180x180",
      },
      {
        rel: "canonical",
        href: "https://selvaganeshv.vercel.app",
      },
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Selva Ganesh V",
            url: "https://selvaganeshv.vercel.app",
            image: "https://selvaganeshv.vercel.app/og-image.png",
            jobTitle: "Software Engineer",
            description:
              "Software Engineer building a low-code platform at Torus Innovations. Specializing in React, TypeScript, and modern web technologies.",
            worksFor: {
              "@type": "Organization",
              name: "Torus Innovations",
            },
            address: {
              "@type": "PostalAddress",
              addressLocality: "Tirunelveli",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
            sameAs: [
              import.meta.env.VITE_GITHUB_URL,
              import.meta.env.VITE_LINKEDIN_URL,
            ].filter(Boolean),
            knowsAbout: [
              ...skills,
              "Frontend Development",
              "Backend Development",
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Selva Ganesh V Portfolio",
            url: "https://selvaganeshv.vercel.app",
            description:
              "Portfolio of Selva Ganesh V, Software Engineer specializing in React, TypeScript, and modern web technologies.",
            author: {
              "@type": "Person",
              name: "Selva Ganesh V",
            },
          },
        ]),
      },
      {
        children: `(function(){try{var t=localStorage.getItem('theme')||'auto';var v=['light','dark','auto'].includes(t)?t:'auto';if(v==='auto'){var a=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(a,'auto')}else{document.documentElement.classList.add(v)}}catch(e){var a=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';document.documentElement.classList.add(a,'auto')}})()`,
      },
    ],
  }),
  shellComponent: ({ children }) => (
    <ThemeProvider>
      <RootDocument>{children} </RootDocument>
    </ThemeProvider>
  ),
});

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Analytics />
        <TanStackDevtools
          config={{
            position: "bottom-left",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
