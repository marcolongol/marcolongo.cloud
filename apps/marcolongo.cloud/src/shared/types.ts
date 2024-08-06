/**
 * This file contains all the shared types used in the application. The types are
 * exported and can be used in any file in the application. The types are used to
 * define the shape of the data that is passed around in the application.
 *
 * Interfaces vs Types:
 *
 * - Interfaces are used to define the shape of an object.
 * - Types are used to define the shape of an object, union, intersection, tuple, etc.
 * - Interfaces can be extended, while types can be aliased.
 * - Interfaces are open, while types are closed.
 *
 * @example
 *   interface IAnimal {
 *     name: string;
 *   }
 *
 *   interface IDog extends IAnimal {
 *     breed: string;
 *   }
 *
 *   type Animal = {
 *     name: string;
 *   };
 *
 *   type Dog = Animal & {
 *     breed: string;
 *   };
 */

/**
 * The `DeepReadOnly` type is used to make all the properties of an object and its
 * nested objects read-only.
 *
 * @example
 *   type Animal = {
 *     name: string;
 *     age: number;
 *     owner: {
 *       name: string;
 *       age: number;
 *     };
 *   };
 *
 *   type ReadOnlyAnimal = DeepReadOnly<Animal>;
 *
 *   const animal: ReadOnlyAnimal = {
 *     name: 'Dog',
 *     age: 5,
 *     owner: {
 *       name: 'John',
 *       age: 30,
 *     },
 *   };
 *
 *   animal.name = 'Cat'; // Error: Cannot assign to 'name' because it is a read-only property.
 *   animal.owner.age = 31; // Error: Cannot assign to 'age' because it is a read-only property.
 *
 * @typeParam T - The type of the object.
 */
export type DeepReadOnly<T> = {
  readonly [P in keyof T]: DeepReadOnly<T[P]>;
};
