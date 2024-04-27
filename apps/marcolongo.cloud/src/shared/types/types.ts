/**
 * This file contains all the shared types used in the application.
 * The types are exported and can be used in any file in the application.
 * The types are used to define the shape of the data that is passed around in the application.
 *
 * Interfaces vs Types:
 * - Interfaces are used to define the shape of an object.
 * - Types are used to define the shape of an object, union, intersection, tuple, etc.
 * - Interfaces can be extended, while types can be aliased.
 * - Interfaces are open, while types are closed.
 *
 * @example
 * interface IAnimal {
 *   name: string;
 * }
 *
 * interface IDog extends IAnimal {
 *   breed: string;
 * }
 *
 * type Animal = {
 *   name: string;
 * };
 *
 * type Dog = Animal & {
 *   breed: string;
 * };
 */

export type DeepReadOnly<T> = {
  readonly [P in keyof T]: DeepReadOnly<T[P]>;
};
