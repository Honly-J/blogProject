export class CreateAdminDto {
  readonly userName: string;
  readonly password: string;
  readonly role?: string;
}