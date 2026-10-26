# ECS Gateway Walkthrough

Hands on walkthrough for Amazon ECS Gateway self serve ingress — platform owned gateway, app team connectors, shared ALB hostnames.

**Site:** https://ecs-gateway-walkthrough.johna.kiwi/

## Quick start

```bash
npm install
npm run dev
```

Open the local preview URL (usually http://localhost:4321/).

## Structure

```text
src/content/docs/setup/      Shared VPC and IAM
src/content/docs/ec2/        EC2 path (own cluster + gateway)
src/content/docs/fargate/    Fargate path (own cluster + gateway)
public/                      Favicon, CNAME, OG image
AGENTS.md                    Notes for coding agents
```

## License

See [LICENSE](LICENSE).
