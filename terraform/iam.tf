resource "aws_iam_user" "deploy_user" {
  for_each = toset(var.environments)

  name = "${var.project_name}-${each.key}-deployer"
  path = "/${var.project_name}/deployers/"

  tags= {
    Environment = each.key
    Project     = var.project_name
  }
}

resource "aws_iam_user_policy_attachment" "s3_full_access" {
  for_each = aws_iam_user.deploy_user

  user       = each.value.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonS3FullAccess"
}

resource "aws_iam_access_key" "deployer_keys" {
  for_each = aws_iam_user.deploy_user

  user = each.value.name
}
