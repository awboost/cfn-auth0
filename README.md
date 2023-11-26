# @awboost/cfn-auth0

Custom resources for managing auth0 via CloudFormation.

## Documentation

This package contains the following resources:

- `makeAuth0ApiFactory`: Manage [Resource Servers](https://auth0.com/docs/api/management/v2/resource-servers/post-resource-servers)
- `makeAuth0BrandingFactory`: Configure [Branding Settings](https://auth0.com/docs/api/management/v2/branding/patch-branding)
- `makeAuth0ClientFactory`: Manage [Clients](https://auth0.com/docs/api/management/v2/clients/post-clients)
- `makeAuth0ClientGrantFactory`: Manage [Client Grants](https://auth0.com/docs/api/management/v2/client-grants/post-client-grants)
- `makeAuth0EmailProviderFactory`: Configure the [Email Provider](https://auth0.com/docs/api/management/v2/emails/post-provider)
- `makeAuth0PromptsFactory`: Configure [Text Prompts](https://auth0.com/docs/api/management/v2/prompts/patch-prompts)
- `makeAuth0RoleFactory`: Manage [Roles](https://auth0.com/docs/api/management/v2/roles/post-roles)
- `makeAuth0RolePermissionFactory`: Manage [Role Permissions](https://auth0.com/docs/api/management/v2/roles/post-role-permission-assignment)
- `makeAuth0TenantSettingsFactory`: Configure [Tenant Settings](https://auth0.com/docs/api/management/v2/tenants/patch-settings)
