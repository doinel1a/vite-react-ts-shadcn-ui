resource "aws_s3_bucket" "static_sites" {
  for_each = toset(var.environments)

  bucket        = "${var.project_name}-${each.key}-static-site"
  force_destroy = true

  tags = {
    Environment = each.key
    Project     = var.project_name
  }
}

resource "aws_s3_bucket_website_configuration" "static_site_web" {
  for_each = aws_s3_bucket.static_sites

  bucket = each.value.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

resource "aws_s3_bucket_policy" "static_site_policy" {
  for_each = aws_s3_bucket.static_sites

  bucket = each.value.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = ["s3:GetObject"]
        Resource  = "${each.value.arn}/*"
      }
    ]
  })
}
