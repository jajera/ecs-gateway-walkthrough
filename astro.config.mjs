import { defineConfig } from "astro/config";
import { unified } from "@astrojs/markdown-remark";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";
import { starlightBasePath } from "starlight-base-path";

export default defineConfig({
  site: "https://ecs-gateway-walkthrough.johna.kiwi",
  base: "/",
  markdown: {
    processor: unified(),
  },
  integrations: [
    starlight({
      title: "ECS Gateway",
      favicon: "/favicon.svg",
      description:
        "Hands on walkthrough for Amazon ECS Gateway self serve ingress — platform owned gateway, app team connectors, shared ALB hostnames.",
      plugins: [starlightBasePath(), starlightImageZoom()],
      routeMiddleware: "./src/routeData.ts",
      customCss: ["./src/styles/patina-tokens.css", "./src/styles/splash-overrides.css"],
      components: {
        ThemeSelect: "./src/components/ThemeSelect.astro",
        Head: "./src/components/Head.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/jajera/ecs-gateway-walkthrough",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/jajera/ecs-gateway-walkthrough/edit/main/",
      },
      lastUpdated: true,
      pagination: true,
      sidebar: [
        { label: "Home", link: "/" },
        {
          label: "Concepts",
          items: [{ slug: "concepts/what-is-ecs-gateway" }],
        },
        {
          label: "Architecture",
          items: [{ slug: "architecture/platform-vs-app" }],
        },
        {
          label: "Setup",
          items: [
            { slug: "setup/prerequisites" },
            { slug: "setup/vpc" },
            { slug: "setup/infra-roles" },
            { slug: "setup/choose-path" },
          ],
        },
        {
          label: "EC2",
          items: [
            { slug: "ec2/overview" },
            { slug: "ec2/capacity" },
            { slug: "ec2/gateway" },
            { slug: "ec2/services" },
            { slug: "ec2/verify" },
            { slug: "ec2/teardown" },
          ],
        },
        {
          label: "Fargate",
          items: [
            { slug: "fargate/overview" },
            { slug: "fargate/gateway" },
            { slug: "fargate/services" },
            { slug: "fargate/verify" },
            { slug: "fargate/teardown" },
          ],
        },
        {
          label: "Reference",
          items: [
            { slug: "reference/pricing" },
            { slug: "reference/quotas" },
            { slug: "reference/troubleshooting" },
            { slug: "reference/external-links" },
          ],
        },
      ],
    }),
  ],
});
