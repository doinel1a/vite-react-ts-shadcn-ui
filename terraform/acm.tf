resource "aws_acm_certificate" "certs" {
  for_each = var.domain_names
    
  domain_name       = each.value
  validation_method = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}
