export type GlossaryEntry =
  | string
  | {
      definition: string;
      url?: string;
      urlLabel?: string;
    };

export const glossary: Record<string, GlossaryEntry> = {
  alb: {
    definition:
      "Application Load Balancer — ECS Gateway shares ALBs across services with host-based routing (up to 25 services per ALB).",
    url: "https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html",
    urlLabel: "ALB docs",
  },
  awsvpc: {
    definition:
      "Task network mode that gives each task its own ENI and private IP. Required for ECS Gateway.",
    url: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-networking.html",
    urlLabel: "Task networking",
  },
  "gateway-connector": {
    definition:
      "Opt-in parameter on an ECS service that names the container port for gateway traffic. Can filter PUBLIC or PRIVATE access types and set health checks.",
    url: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/gateway-connect-service.html",
    urlLabel: "Connect services",
  },
  "gateway-route": {
    definition:
      "One connection between a service and a gateway. Carries status, the HTTPS service URL, and managed resources such as ACM cert, listener rule, and target group.",
    url: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/gateway-overview.html",
    urlLabel: "Gateway overview",
  },
  "host-shared-alb":
    "Gateway configuration mode that shares Application Load Balancers and routes by hostname to each connected service.",
  "infrastructure-role": {
    definition:
      "IAM role ECS assumes to create and manage ALBs, security groups, ACM certificates, and related ingress resources in your account.",
    url: "https://docs.aws.amazon.com/AmazonECS/latest/developerguide/gateway-managing.html",
    urlLabel: "Create a gateway",
  },
};

export function resolveGlossaryEntry(entry: GlossaryEntry | undefined) {
  if (!entry) return { definition: undefined, url: undefined, urlLabel: undefined };
  if (typeof entry === "string") {
    return { definition: entry, url: undefined, urlLabel: undefined };
  }
  return {
    definition: entry.definition,
    url: entry.url,
    urlLabel: entry.urlLabel ?? entry.url,
  };
}
