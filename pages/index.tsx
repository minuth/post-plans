import { NavigateToResource } from "@refinedev/nextjs-router";

export default function Home() {
  return <NavigateToResource resource="social_platforms" />;
}

Home.noLayout = true;
