import { HttpException, HttpStatus } from '@nestjs/common';

export class User {
  constructor(
    private _name: string,
    private _email: string,
    private _password: string,
    private _avatar: string,
  ) {}

  set name(name: string) {
    if (name.length < 3)
      throw new HttpException('Invalid Name', HttpStatus.UNPROCESSABLE_ENTITY);
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set email(email: string) {
    if (email.length < 3)
      throw new HttpException('Invalid email', HttpStatus.CONFLICT);
    this._email = email;
  }

  get email() {
    return this._email;
  }

  set password(password: string) {
    if (password.length < 3)
      throw new HttpException('Invalid password', HttpStatus.UNPROCESSABLE_ENTITY);
    this._password = password;
  }

  get password() {
    return this._password;
  }
  set avatar(avatar: string) {
    if (avatar.length < 3)
      throw new HttpException('Invalid avatar', HttpStatus.UNPROCESSABLE_ENTITY);
    this._avatar = avatar;
  }

  get avatar() {
    return this._avatar;
  }

}