# Screenshots

Console screenshots referenced from the walkthrough. Keep these cropped and redacted
(no account IDs, ARNs, VPC/subnet IDs, security-group IDs, target IPs, or full managed
hostnames) per `AGENTS.md`.

Expected files:

- `fargate-gateway-routes.png` — ECS → Gateways → gateway → **Gateway routes** tab (two Active routes)
- `fargate-alb-resource-map.png` — EC2 → Load balancers → gateway ALB → **Resource map** (1 ALB, HTTPS 443, two host rules → two target groups)

## EC2 path

App screenshots are captured from the live services. Console screenshots still needed (cropped + redacted):

- `ec2-gateway-routes.png` — ECS → Gateways → `ecs-gw-lab-ec2` → **Gateway routes** (two Active routes)
- `ec2-alb-resource-map.png` — EC2 → Load balancers → the EC2 gateway ALB → **Resource map**
- `ec2-acm-certs.png` — ACM → Certificates (two Issued certs for the EC2-path hostnames) — optional
