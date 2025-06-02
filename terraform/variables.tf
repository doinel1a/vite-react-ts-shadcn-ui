variable "project_name" {
  type        = string
  default     = "launchplate-react"
  description = "Base name for buckets and IAM users"
}

variable "environments" {
  type        = list(string)
  default     = ["qa", "staging", "production"]
  description = "Environments to configure"
}

variable "aws_region" {
  type        = string
  default     = "eu-west-3"
  description = "AWS region"
}

variable "github_token" {
  type        = string
  description = "GitHub personal access token with repo and admin:repo_hook permissions"
  sensitive   = true
}

variable "github_owner" {
  type        = string
  description = "GitHub user or org name"
}

variable "github_repository" {
  type        = string
  description = "vite-react-ts-shadcn-ui-ci-cd-devbox"
}

variable "domain" {
  type        = string
  default     = "example.com"
  description = "Base domain for the project"
}

variable "domain_names" {
  type = map(string)
  default = {
    qa       = "qa.example.com"
    staging  = "staging.example.com"
    production = "example.com"
  }
  description = "Domain names for each environment"
}

variable "cloudflare_email" {
  type        = string
  description = "Cloudflare account email"
}

variable "cloudflare_api_token" {
  type        = string
  description = "Cloudflare API key"
  sensitive   = true
}