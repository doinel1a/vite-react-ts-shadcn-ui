resource "github_actions_secret" "aws_access_key_id" {
  for_each = aws_iam_access_key.deployer_keys

  repository    = var.github_repository
  secret_name   = "AWS_ACCESS_KEY_ID_${upper(each.key)}"
  plaintext_value = each.value.id
}

resource "github_actions_secret" "aws_secret_access_key" {
  for_each = aws_iam_access_key.deployer_keys

  repository    = var.github_repository
  secret_name   = "AWS_SECRET_ACCESS_KEY_${upper(each.key)}"
  plaintext_value = each.value.secret
}