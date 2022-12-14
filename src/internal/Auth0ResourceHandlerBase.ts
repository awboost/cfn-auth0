import { CustomResourceHandlerBase } from '@awboost/cfn-custom-resource';
import { ManagementClient } from 'auth0';
import { CloudFormationCustomResourceEvent, Context } from 'aws-lambda';
import { Auth0ManagementClientProps } from '../common/Auth0ManagementClientProps.js';

export abstract class Auth0ResourceHandlerBase<
  Props extends Auth0ManagementClientProps,
  Attribs = void,
> extends CustomResourceHandlerBase<Props, Attribs> {
  private _client: ManagementClient | undefined;
  protected get client(): ManagementClient {
    if (!this._client) {
      throw new Error(`the client instance is not set`);
    }
    return this._client;
  }

  protected override async executeOverride(
    event: CloudFormationCustomResourceEvent,
    context: Context,
  ): Promise<void> {
    this._client = new ManagementClient({
      clientId: this.properties.ManagementClientId,
      clientSecret: this.properties.ManagementClientSecret,
      domain: this.properties.Domain,
    });
    await super.executeOverride(event, context);
  }
}
