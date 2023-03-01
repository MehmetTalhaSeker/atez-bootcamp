import { describe, expect, it } from "vitest";

interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}

const identity = <T>(genericParam: T): T => {
  switch (typeof genericParam) {
    case "undefined":
      throw new Error("Please provide a value!");
    case "string":
      return genericParam.split("").reverse().join("") as T;
    case "number":
      return (genericParam * 2) as T;
    case "object":
      if (Array.isArray(genericParam)) {
        return genericParam.reverse() as T;
      }
      return { ...genericParam };
    default:
      return genericParam;
  }
};

const numIdentity: GenericIdentityFn<number> = identity;
const objectIdentity: GenericIdentityFn<object> = identity;
const stringIdentity: GenericIdentityFn<string> = identity;

describe("generics tests", () => {
  it("should success", function () {
    expect(identity("lebron")).toEqual("norbel");
    expect(identity(0)).toEqual(0);
    expect(identity(1)).toEqual(2);
    expect(identity([3])).toEqual([3]);
    expect(identity([3, 4])).toEqual([4, 3]);
    expect(identity({ a: "a", b: "b" })).toEqual({ a: "a", b: "b" });
    expect(numIdentity(1)).toEqual(2);
    expect(stringIdentity("1234")).toEqual("4321");
    expect(objectIdentity([1, 2, 3])).toEqual([3, 2, 1]);
    expect(objectIdentity({ a: "a", b: "b" })).toEqual({ a: "a", b: "b" });
  });

  it("should fail", () => {
    // @ts-expect-error
    expect(() => identity()).toThrowError("Please provide a value!");
  });
});

// ---------------------------------------------------------------------------------------------------------------------
interface Lengthwise {
  length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): number {
  return arg.length;
}

describe("generics tests 2", () => {
  it("should successfully calculate", function () {
    expect(loggingIdentity("lebron")).toEqual(6);
    expect(loggingIdentity("lebron")).toEqual(6);
  });

  it("should fail", () => {});
});

// ---------------------------------------------------------------------------------------------------------------------
const expectedError: Error = new Error("Provided key does not exists!");
function getProperty<Type extends Object, Key extends keyof Type>(
  obj: Type,
  key: Key
) {
  if (obj.hasOwnProperty(key)) {
    return obj[key];
  }
  throw expectedError;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

describe("generics tests 3", () => {
  it("should successfully calculate", function () {
    expect(getProperty(x, "a")).toEqual(1);
    expect(getProperty(x, "b")).toEqual(2);
  });

  it("should fail", () => {
    // @ts-expect-error
    expect(() => getProperty(x, "m")).toThrowError(expectedError);
  });
});
