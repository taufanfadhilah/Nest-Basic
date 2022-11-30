import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user';
import { UpdateUserDto } from './dto/update-user';

@Injectable()
export class UserService {
  get() {
    return { name: 'Taufan Fadhilah', email: 'taufan@google.com' };
  }

  create(createUserDto: CreateUserDto) {
    return createUserDto;
  }

  show(id: number) {
    return id;
  }

  update(updateUserDto: UpdateUserDto, id: number) {
    return { body: updateUserDto, id };
  }

  destroy(id: number) {
    return `deleted user with id ${id}`;
  }
}
