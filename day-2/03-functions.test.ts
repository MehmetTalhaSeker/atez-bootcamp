import { describe, expect, it } from "vitest";

//optional parameter
const buildFullName = (firstName: string, lastName?: string) => {
  if (!firstName) throw new Error("Firstname required!");
  else if (lastName) return `${firstName} ${lastName}`;
  return firstName;
};

describe("buildFullName tests", function () {
  it("should succeed", function () {
    expect(buildFullName("lebron")).toEqual("lebron");
  });
  it("should succeed", function () {
    expect(buildFullName("lebron", "james")).toEqual("lebron james");
  });

  it("should fail", function () {
    // @ts-expect-error
    expect(() => buildFullName()).toThrowError("Firstname required!");
  });
});

// ------------------------------------------------------------------------------------------------

type FN = (a: string) => void;

function greeter(fn: FN) {
  fn("HELLO THERE");
}

const logger = (b: string) => {
  console.log(b);
};

const wrongTypedLogger = (b: number) => {
  console.log(b);
};

describe("logger tests", function () {
  it("should succeed", function () {
    greeter(logger);
    // greeter(wrongTypedLogger) ts izin vermiyor. çünkü string bekliyor
  });
});

// ------------------------------------------------------------------------------------------------

type DescribableFunction = {
  // fonksiyona property bu sayede mümkün.
  description: string;
  (someArg: number): boolean;
};

function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

const foo: DescribableFunction = (a) => a > 0;
foo.description = "fooDesc";

it("s", function () {
  doSomething(foo);
});

// ------------------------------------------------------------------------------------------------

class SomeClass {
  message: string;
  length: number;

  constructor(s: string) {
    this.message = s;
    this.length = s.length;
  }
}

type SomeConstructor = {
  new (s: string): SomeClass;
};

function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}

const obj = fn(SomeClass);
it("should aa", function () {
  console.log(obj.length);
});

// ------------------------------------------------------------------------------------------------

function genericFunc<T>(arg: T[], index: number = 0): T | undefined {
  return arg[index];
}
genericFunc(["a", "b", 1]);
it("should abaa", function () {
  console.log(genericFunc(["kobe", "lebron", 3]));
});

// ------------------------------------------------------------------------------------------------

function map<Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output
): Output[] {
  return arr.map(func);
}

const parsed = map(["1", "2", "3", "lebron"], (n) => parseInt(n));

it("should asfasf", function () {
  console.log(parsed);
});

// ------------------------------------------------------------------------------------------------

// length'e sahip her eleman parametre olarak verilebilir.
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a;
  } else {
    return b;
  }
}

it("should asdasfas", function () {
  console.log(longest({ length: 1 }, { length: 3 }));
  console.log(longest([1, 2], [13, 232, 32, 23]));
  console.log(longest("kısa", "daha uzun"));
});
