data "aws_route53_zone" "primary" {
  
  name = "${var.domain}." # not used, but required if you were using Route53
}

data "cloudflare_zone" "zone" {
  filter = {
    name = var.domain
  }
}

resource "cloudflare_dns_record" "acm_validation" {
  for_each = {
    for cert in aws_acm_certificate.certs :
    cert.value.domain_validation_options[0].domain_name => {
      name  = cert.value.domain_validation_options[0].resource_record_name
      type  = cert.value.domain_validation_options[0].resource_record_type
      value = cert.value.domain_validation_options[0].resource_record_value
    }
  }

  zone_id = data.cloudflare_zone.zone.id
  name    = each.value.name
  type    = each.value.type
  content = each.value.value
  ttl     = 300
}

output "cloudflare_zone_id" {
  value = data.cloudflare_zone.zone.id
}

output "cloudflare_account_id" {
  value = data.cloudflare_zone.zone.account.id
}
