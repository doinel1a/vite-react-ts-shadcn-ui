## How to deploy the Terraform remote state access role

This guide will help you deploy a Terraform remote state access role in AWS. This role is designed to allow Terraform to manage resources while ensuring that only resources tagged with `project = launchplate-react` can be modified or created.

When deploying states to a client's AWS account, we need access to the remote state. This is done by creating a role in the client's AWS account that allows us to manage resources with specific tags.

To avoid oiver-permissioning, we will use a policy that restricts actions to resources tagged with `project = launchplate-react`. This ensures that we can only manage resources related to our project and prevents accidental modifications to other resources in the client's account.

### Client AWS Account Setup

To give access to the Terraform remote state, you need to set up a role in the client's AWS account. This role will allow us to only manage resources that are specific to our project, ensuring that we do not interfere with other resources in the client's account. This is done by tagging resources with `project = launchplate-react` and using a policy that restricts actions to those resources.

1. Login to your aws console

2. Create a role with appropriate policies

- In AWS Console → IAM → Roles → Create role
- Choose AWS Account > Another AWS account
- Enter the AWS Account ID `609063391233`
- Skip permissions for now
- Set role name to `terraform-remote-state-access`
- Click Create role
- Click on the newly created role. On the right side, the Role ARN will be displayed. Copy this value, which will be used for deployment.

3. Create and attach a managed policy

- Go to IAM → Policies → Create policy
- Paste the modified JSON policy below.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    // Allow tagging resources with project = launchplate-reac
    {
      "Effect": "Allow",
      "Action": "tag:TagResources",
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "aws:RequestTag/project": "launchplate-react"
        },
        "ForAllValues:StringEquals": {
          "aws:TagKeys": ["project"]
        }
      }
    },

    // General permissions limited by tag on resource creation or modification
    {
      "Effect": "Allow",
      "Action": ["route53:*", "acm:*", "cloudfront:*"],
      "Resource": "*",
      "Condition": {
        "StringEquals": {
          "aws:RequestTag/project": "launchplate-react"
        }
      }
    },

    // 🔹 IAM — Scoped by user path only
    {
      "Effect": "Allow",
      "Action": [
        "iam:CreateUser",
        "iam:DeleteUser",
        "iam:AttachUserPolicy",
        "iam:PutUserPolicy",
        "iam:CreateAccessKey",
        "iam:DeleteAccessKey",
        "iam:ListUsers",
        "iam:GetUser",
        "iam:TagUser"
      ],
      "Resource": "arn:aws:iam::*:user/launchplate-react/deployers/*"
    },

    {
      "Effect": "Allow",
      "Action": [
        "s3:CreateBucket",
        "s3:DeleteBucket",
        "s3:ListBucket",
        "s3:GetBucketLocation",
        "s3:PutBucketPolicy",
        "s3:PutBucketCors",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject"
      ],
      "Resource": ["arn:aws:s3:::launchplate-react-*"]
    },

    // Required to read the tag on existing resources (especially for IAM/S3)
    {
      "Effect": "Allow",
      "Action": ["tag:GetResources", "iam:ListUserTags", "s3:GetBucketTagging"],
      "Resource": "*"
    }
  ]
}
```

4. Attach the policy to the role

- Go to IAM → Roles → Select the `terraform-remote-state-access` role
- Click on the **Permissions** tab
- Click on **Attach policies**
- Search for the policy you just created, select it, and click **Attach policy**

### DevOps Guide

To deploy the Terraform remote state access role, follow these steps:

1. Assume the role by using the ARN provided by the client.

```sh
aws sts assume-role \
  --role-arn arn:aws:iam::CLIENT_ACCOUNT_ID:role/TheirRoleName \
  --role-session-name dev-session
```

And then use it like:

```sh
aws s3 ls --profile client-dev
```

2. Clone the repository and navigate to the Terraform directory.
3. Enter Devbox shell, initialize Terraform, and run the plan and apply commands.

```sh
cd terraform
devbox shell
terraform init
source .env && terraform plan
source .env && terraform apply
```
