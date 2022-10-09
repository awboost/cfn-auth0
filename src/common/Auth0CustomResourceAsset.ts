import { PackageAsset } from '@awboost/cfnassets';
import { PackagePath } from '../internal/PackagePath.cjs';

export class Auth0CustomResourceAsset extends PackageAsset {
  constructor() {
    super('Auth0CustomResourceAsset', PackagePath, 'auth0');
  }
}
