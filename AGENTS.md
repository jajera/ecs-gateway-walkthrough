# Agent notes

## Repos

| Repo                             | Role                          |
| -------------------------------- | ----------------------------- |
| `jajera/ecs-gateway-walkthrough` | This docs site (GitHub Pages) |

Never put real AWS account IDs, SSO usernames, role session names, VPC/subnet/instance IDs, gateway ARNs, or lab screenshots of `sts get-caller-identity` into docs or commits. Commands may _query_ those values at runtime via the CLI; the markdown must stay account-agnostic (shell variables only). Use the managed `*.ecs.<region>.on.aws` hostname pattern, not captured URLs from a live lab.

## Docs source of truth

Walkthrough steps live in `src/content/docs/**/*.mdx`. Keep sidebar slugs in `astro.config.mjs` aligned with those files.

## Site URL

Production docs: `https://ecs-gateway-walkthrough.johna.kiwi` (Pages + Route 53 CNAME via johna-kiwi-infra `sites.yaml`).

## Lab shape

- **Shared (Setup):** prerequisites, custom two-AZ VPC (public ALB/NAT + private services, one NAT), gateway infra + task execution roles, choose path
- **EC2 path:** own cluster + gateway (`${NAME}-ec2`), private-subnet capacity, two private-subnet services, verify, teardown
- **Fargate path:** own cluster + gateway (`${NAME}-fargate`), two private-subnet services, verify, teardown

Gateway ALB subnets = `PUBLIC_SUBNET_*`. Service / instance subnets = `PRIVATE_SUBNET_*` with `assignPublicIp=DISABLED`. Paths do not share a gateway. Shared VPC/IAM teardown runs only when both paths are finished.
