import {describe, expect, it} from "vitest";

enum RoleEnum {
  ADMIN = "admin",
  USER = "user",
  SUPER_ADMIN = "super-admin",
}

type AdminsRoleUnion = "admin" | "super-admin";

type SUPERMAN = "superman";

interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  roleEnum: RoleEnum;
  roleUnion: //istenilen her tipte atama yapılabilir.
    | AdminsRoleUnion
    | "user"
    | SUPERMAN
    | {
        wow: boolean;
      };
}

export const defaultUser: IUser = {
  id: 1,
  firstName: "lebron",
  lastName: "james",
  roleEnum: RoleEnum.ADMIN,
  roleUnion: { wow: true },
};

it("should be an admin user", function () {
    expect(defaultUser).toEqual({
        id: 1,
        firstName: "lebron",
        lastName: "james",
        roleEnum: RoleEnum.ADMIN,
        roleUnion: { wow: true },
    });
});

export const defaultUser2: IUser = {
  id: 2,
  firstName: "kobe",
  lastName: "bryant",
  roleEnum: RoleEnum.USER,
  roleUnion: "superman",
};

describe('kobe', function () {
    it("should success", function () {
        expect(defaultUser2).toEqual({
            id: 2,
            firstName: "kobe",
            lastName: "bryant",
            roleEnum: RoleEnum.USER,
            roleUnion: "superman",
        });
    });

    it("should success", function () {
        expect(defaultUser2).not.toEqual({
            id: 2,
            firstName: "kobe",
            lastName: "bryant",
            roleEnum: RoleEnum.USER,
            roleUnion: "SUPERMAN",
        });
    });
});
