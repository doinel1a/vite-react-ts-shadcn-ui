resource "aws_cloudfront_distribution" "distros" {
  for_each = aws_s3_bucket.static_sites

  enabled             = true
  is_ipv6_enabled     = true
  comment             = "CDN for ${each.key} environment"
  default_root_object = "index.html"

  aliases = [var.domain_names[each.key]]

  origin {
    domain_name = "${each.value.bucket_regional_domain_name}"
    origin_id   = "s3-${each.key}"

    s3_origin_config {
      origin_access_identity = "" # If you want to restrict direct S3 access
    }
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "s3-${each.key}"

    forwarded_values {
      query_string = false
      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
  }

  price_class = "PriceClass_100"

  viewer_certificate {
    acm_certificate_arn = aws_acm_certificate.certs[each.key].arn
    ssl_support_method  = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  tags = {
    Environment = each.key
    Project     = var.project_name
  }
}
