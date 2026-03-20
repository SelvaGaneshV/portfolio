import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import type { ReactNode } from "react";
import { ThemeProvider, useHtmlClass } from "~/components/ThemeProvider";
import appCss from "../styles.css?url";
import { Analytics } from "@vercel/analytics/react";
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
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:site",
        content: "@selvaganeshv",
      },
      {
        name: "twitter:title",
        content: "Selva Ganesh V - Full Stack Developer",
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
        name: "linkedin:profile",
        content: "selvaganeshv",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      { rel: "stylesheet", href: appCss },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap",
      },
      {
        rel: "icon",
        href: "/favicon.ico",
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
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Selva Ganesh V",
          url: "https://selvaganeshv.vercel.app",
          jobTitle: "Full Stack Developer",
          description:
            "Full Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies",
          sameAs: [
            import.meta.env.VITE_GITHUB_URL,
            import.meta.env.VITE_LINKEDIN_URL,
          ],
          knowsAbout: [
            "React",
            "TypeScript",
            "Node.js",
            "JavaScript",
            "Web Development",
            "Frontend Development",
            "Backend Development",
          ],
        }),
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
  const htmlClass = useHtmlClass();
  return (
    <html lang="en" className={htmlClass} suppressHydrationWarning>
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
