import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles/main.scss?url";
import "./__root.scss";

function NotFoundComponent() {
  return (
    <div className="state-page">
      <div className="state-page__inner">
        <h1 className="state-page__code">404</h1>
        <h2 className="state-page__title">Page not found</h2>
        <p className="state-page__text">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="state-page__actions">
          <Link to="/" className="state-page-button state-page-button--primary">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="state-page">
      <div className="state-page__inner">
        <h1 className="state-page__title">This page didn't load</h1>
        <p className="state-page__text">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="state-page__actions">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="state-page-button state-page-button--primary"
          >
            Try again
          </button>
          <a href="/" className="state-page-button state-page-button--secondary">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "PLADUR BABO — Pladur e Gesso Cartonado em Penafiel" },
      {
        name: "description",
        content:
          "Empresa familiar de pladur em Penafiel. Tectos falsos, divisórias, isolamento e reabilitação. Orçamento gratuito.",
      },
      { name: "author", content: "PLADUR BABO" },
      { property: "og:title", content: "PLADUR BABO — Pladur e Gesso Cartonado em Penafiel" },
      {
        property: "og:description",
        content:
          "Empresa familiar de pladur em Penafiel. Tectos falsos, divisórias, isolamento e reabilitação. Orçamento gratuito.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Archivo:wght@500;600;700;800&family=Inter:wght@400;500;600&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
