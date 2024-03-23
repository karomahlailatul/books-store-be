
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model sellers
 * 
 */
export type sellers = $Result.DefaultSelection<Prisma.$sellersPayload>
/**
 * Model books
 * 
 */
export type books = $Result.DefaultSelection<Prisma.$booksPayload>
/**
 * Model bookCategories
 * 
 */
export type bookCategories = $Result.DefaultSelection<Prisma.$bookCategoriesPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type role = (typeof role)[keyof typeof role]


export const statusOrder: {
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  CANCEL: 'CANCEL'
};

export type statusOrder = (typeof statusOrder)[keyof typeof statusOrder]

}

export type role = $Enums.role

export const role: typeof $Enums.role

export type statusOrder = $Enums.statusOrder

export const statusOrder: typeof $Enums.statusOrder

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs>;

  /**
   * `prisma.sellers`: Exposes CRUD operations for the **sellers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sellers
    * const sellers = await prisma.sellers.findMany()
    * ```
    */
  get sellers(): Prisma.sellersDelegate<ExtArgs>;

  /**
   * `prisma.books`: Exposes CRUD operations for the **books** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.books.findMany()
    * ```
    */
  get books(): Prisma.booksDelegate<ExtArgs>;

  /**
   * `prisma.bookCategories`: Exposes CRUD operations for the **bookCategories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookCategories
    * const bookCategories = await prisma.bookCategories.findMany()
    * ```
    */
  get bookCategories(): Prisma.bookCategoriesDelegate<ExtArgs>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    sellers: 'sellers',
    books: 'books',
    bookCategories: 'bookCategories',
    orders: 'orders'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'users' | 'sellers' | 'books' | 'bookCategories' | 'orders'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>,
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      sellers: {
        payload: Prisma.$sellersPayload<ExtArgs>
        fields: Prisma.sellersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sellersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sellersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          findFirst: {
            args: Prisma.sellersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sellersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          findMany: {
            args: Prisma.sellersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>[]
          }
          create: {
            args: Prisma.sellersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          createMany: {
            args: Prisma.sellersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.sellersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          update: {
            args: Prisma.sellersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          deleteMany: {
            args: Prisma.sellersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.sellersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.sellersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$sellersPayload>
          }
          aggregate: {
            args: Prisma.SellersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSellers>
          }
          groupBy: {
            args: Prisma.sellersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SellersGroupByOutputType>[]
          }
          count: {
            args: Prisma.sellersCountArgs<ExtArgs>,
            result: $Utils.Optional<SellersCountAggregateOutputType> | number
          }
        }
      }
      books: {
        payload: Prisma.$booksPayload<ExtArgs>
        fields: Prisma.booksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.booksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.booksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          findFirst: {
            args: Prisma.booksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.booksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          findMany: {
            args: Prisma.booksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>[]
          }
          create: {
            args: Prisma.booksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          createMany: {
            args: Prisma.booksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.booksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          update: {
            args: Prisma.booksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          deleteMany: {
            args: Prisma.booksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.booksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.booksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$booksPayload>
          }
          aggregate: {
            args: Prisma.BooksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBooks>
          }
          groupBy: {
            args: Prisma.booksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BooksGroupByOutputType>[]
          }
          count: {
            args: Prisma.booksCountArgs<ExtArgs>,
            result: $Utils.Optional<BooksCountAggregateOutputType> | number
          }
        }
      }
      bookCategories: {
        payload: Prisma.$bookCategoriesPayload<ExtArgs>
        fields: Prisma.bookCategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bookCategoriesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookCategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bookCategoriesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookCategoriesPayload>
          }
          findFirst: {
            args: Prisma.bookCategoriesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookCategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bookCategoriesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookCategoriesPayload>
          }
          findMany: {
            args: Prisma.bookCategoriesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookCategoriesPayload>[]
          }
          create: {
            args: Prisma.bookCategoriesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookCategoriesPayload>
          }
          createMany: {
            args: Prisma.bookCategoriesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.bookCategoriesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookCategoriesPayload>
          }
          update: {
            args: Prisma.bookCategoriesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookCategoriesPayload>
          }
          deleteMany: {
            args: Prisma.bookCategoriesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.bookCategoriesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.bookCategoriesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$bookCategoriesPayload>
          }
          aggregate: {
            args: Prisma.BookCategoriesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBookCategories>
          }
          groupBy: {
            args: Prisma.bookCategoriesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BookCategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.bookCategoriesCountArgs<ExtArgs>,
            result: $Utils.Optional<BookCategoriesCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>,
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    sellers: number
    orders: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellers?: boolean | UsersCountOutputTypeCountSellersArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountSellersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sellersWhereInput
  }


  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }



  /**
   * Count Type SellersCountOutputType
   */

  export type SellersCountOutputType = {
    books: number
  }

  export type SellersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | SellersCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes

  /**
   * SellersCountOutputType without action
   */
  export type SellersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellersCountOutputType
     */
    select?: SellersCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SellersCountOutputType without action
   */
  export type SellersCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booksWhereInput
  }



  /**
   * Count Type BooksCountOutputType
   */

  export type BooksCountOutputType = {
    orders: number
    categories: number
  }

  export type BooksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | BooksCountOutputTypeCountOrdersArgs
    categories?: boolean | BooksCountOutputTypeCountCategoriesArgs
  }

  // Custom InputTypes

  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BooksCountOutputType
     */
    select?: BooksCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * BooksCountOutputType without action
   */
  export type BooksCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookCategoriesWhereInput
  }



  /**
   * Count Type BookCategoriesCountOutputType
   */

  export type BookCategoriesCountOutputType = {
    books: number
  }

  export type BookCategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | BookCategoriesCountOutputTypeCountBooksArgs
  }

  // Custom InputTypes

  /**
   * BookCategoriesCountOutputType without action
   */
  export type BookCategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCategoriesCountOutputType
     */
    select?: BookCategoriesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BookCategoriesCountOutputType without action
   */
  export type BookCategoriesCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booksWhereInput
  }



  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.role | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    role: $Enums.role | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    role: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    role?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string | null
    role: $Enums.role
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    sellers?: boolean | users$sellersArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sellers?: boolean | users$sellersArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      sellers: Prisma.$sellersPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string | null
      role: $Enums.role
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }


  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends usersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Users that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends usersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends usersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends usersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, usersCreateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {usersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends usersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends usersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, usersDeleteArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends usersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends usersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends usersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends usersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, usersUpsertArgs<ExtArgs>>
    ): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    sellers<T extends users$sellersArgs<ExtArgs> = {}>(args?: Subset<T, users$sellersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'findMany'> | Null>;

    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the users model
   */ 
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'role'>
    readonly status: FieldRef<"users", 'Boolean'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }


  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }


  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
  }


  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }


  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }


  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
  }


  /**
   * users.sellers
   */
  export type users$sellersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sellersInclude<ExtArgs> | null
    where?: sellersWhereInput
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    cursor?: sellersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }


  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: usersInclude<ExtArgs> | null
  }



  /**
   * Model sellers
   */

  export type AggregateSellers = {
    _count: SellersCountAggregateOutputType | null
    _avg: SellersAvgAggregateOutputType | null
    _sum: SellersSumAggregateOutputType | null
    _min: SellersMinAggregateOutputType | null
    _max: SellersMaxAggregateOutputType | null
  }

  export type SellersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SellersSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SellersMinAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SellersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    userId: number | null
    status: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SellersCountAggregateOutputType = {
    id: number
    name: number
    userId: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SellersAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SellersSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SellersMinAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SellersMaxAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SellersCountAggregateInputType = {
    id?: true
    name?: true
    userId?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SellersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sellers to aggregate.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sellers
    **/
    _count?: true | SellersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SellersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SellersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellersMaxAggregateInputType
  }

  export type GetSellersAggregateType<T extends SellersAggregateArgs> = {
        [P in keyof T & keyof AggregateSellers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellers[P]>
      : GetScalarType<T[P], AggregateSellers[P]>
  }




  export type sellersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sellersWhereInput
    orderBy?: sellersOrderByWithAggregationInput | sellersOrderByWithAggregationInput[]
    by: SellersScalarFieldEnum[] | SellersScalarFieldEnum
    having?: sellersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellersCountAggregateInputType | true
    _avg?: SellersAvgAggregateInputType
    _sum?: SellersSumAggregateInputType
    _min?: SellersMinAggregateInputType
    _max?: SellersMaxAggregateInputType
  }

  export type SellersGroupByOutputType = {
    id: number
    name: string
    userId: number
    status: boolean
    createdAt: Date
    updatedAt: Date
    _count: SellersCountAggregateOutputType | null
    _avg: SellersAvgAggregateOutputType | null
    _sum: SellersSumAggregateOutputType | null
    _min: SellersMinAggregateOutputType | null
    _max: SellersMaxAggregateOutputType | null
  }

  type GetSellersGroupByPayload<T extends sellersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellersGroupByOutputType[P]>
            : GetScalarType<T[P], SellersGroupByOutputType[P]>
        }
      >
    >


  export type sellersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    books?: boolean | sellers$booksArgs<ExtArgs>
    _count?: boolean | SellersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellers"]>

  export type sellersSelectScalar = {
    id?: boolean
    name?: boolean
    userId?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sellersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    books?: boolean | sellers$booksArgs<ExtArgs>
    _count?: boolean | SellersCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $sellersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sellers"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      books: Prisma.$booksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      userId: number
      status: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sellers"]>
    composites: {}
  }


  type sellersGetPayload<S extends boolean | null | undefined | sellersDefaultArgs> = $Result.GetResult<Prisma.$sellersPayload, S>

  type sellersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<sellersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SellersCountAggregateInputType | true
    }

  export interface sellersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sellers'], meta: { name: 'sellers' } }
    /**
     * Find zero or one Sellers that matches the filter.
     * @param {sellersFindUniqueArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends sellersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, sellersFindUniqueArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Sellers that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {sellersFindUniqueOrThrowArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends sellersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sellersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersFindFirstArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends sellersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, sellersFindFirstArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Sellers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersFindFirstOrThrowArgs} args - Arguments to find a Sellers
     * @example
     * // Get one Sellers
     * const sellers = await prisma.sellers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends sellersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, sellersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sellers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sellers
     * const sellers = await prisma.sellers.findMany()
     * 
     * // Get first 10 Sellers
     * const sellers = await prisma.sellers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellersWithIdOnly = await prisma.sellers.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends sellersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sellersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Sellers.
     * @param {sellersCreateArgs} args - Arguments to create a Sellers.
     * @example
     * // Create one Sellers
     * const Sellers = await prisma.sellers.create({
     *   data: {
     *     // ... data to create a Sellers
     *   }
     * })
     * 
    **/
    create<T extends sellersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, sellersCreateArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sellers.
     *     @param {sellersCreateManyArgs} args - Arguments to create many Sellers.
     *     @example
     *     // Create many Sellers
     *     const sellers = await prisma.sellers.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends sellersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sellersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Sellers.
     * @param {sellersDeleteArgs} args - Arguments to delete one Sellers.
     * @example
     * // Delete one Sellers
     * const Sellers = await prisma.sellers.delete({
     *   where: {
     *     // ... filter to delete one Sellers
     *   }
     * })
     * 
    **/
    delete<T extends sellersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, sellersDeleteArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Sellers.
     * @param {sellersUpdateArgs} args - Arguments to update one Sellers.
     * @example
     * // Update one Sellers
     * const sellers = await prisma.sellers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends sellersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, sellersUpdateArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Sellers.
     * @param {sellersDeleteManyArgs} args - Arguments to filter Sellers to delete.
     * @example
     * // Delete a few Sellers
     * const { count } = await prisma.sellers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends sellersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, sellersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sellers
     * const sellers = await prisma.sellers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends sellersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, sellersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Sellers.
     * @param {sellersUpsertArgs} args - Arguments to update or create a Sellers.
     * @example
     * // Update or create a Sellers
     * const sellers = await prisma.sellers.upsert({
     *   create: {
     *     // ... data to create a Sellers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sellers we want to update
     *   }
     * })
    **/
    upsert<T extends sellersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, sellersUpsertArgs<ExtArgs>>
    ): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersCountArgs} args - Arguments to filter Sellers to count.
     * @example
     * // Count the number of Sellers
     * const count = await prisma.sellers.count({
     *   where: {
     *     // ... the filter for the Sellers we want to count
     *   }
     * })
    **/
    count<T extends sellersCountArgs>(
      args?: Subset<T, sellersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SellersAggregateArgs>(args: Subset<T, SellersAggregateArgs>): Prisma.PrismaPromise<GetSellersAggregateType<T>>

    /**
     * Group by Sellers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sellersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sellersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sellersGroupByArgs['orderBy'] }
        : { orderBy?: sellersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sellersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sellers model
   */
  readonly fields: sellersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sellers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sellersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    books<T extends sellers$booksArgs<ExtArgs> = {}>(args?: Subset<T, sellers$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the sellers model
   */ 
  interface sellersFieldRefs {
    readonly id: FieldRef<"sellers", 'Int'>
    readonly name: FieldRef<"sellers", 'String'>
    readonly userId: FieldRef<"sellers", 'Int'>
    readonly status: FieldRef<"sellers", 'Boolean'>
    readonly createdAt: FieldRef<"sellers", 'DateTime'>
    readonly updatedAt: FieldRef<"sellers", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * sellers findUnique
   */
  export type sellersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where: sellersWhereUniqueInput
  }


  /**
   * sellers findUniqueOrThrow
   */
  export type sellersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where: sellersWhereUniqueInput
  }


  /**
   * sellers findFirst
   */
  export type sellersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sellers.
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellers.
     */
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }


  /**
   * sellers findFirstOrThrow
   */
  export type sellersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sellers.
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sellers.
     */
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }


  /**
   * sellers findMany
   */
  export type sellersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter, which sellers to fetch.
     */
    where?: sellersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sellers to fetch.
     */
    orderBy?: sellersOrderByWithRelationInput | sellersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sellers.
     */
    cursor?: sellersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sellers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sellers.
     */
    skip?: number
    distinct?: SellersScalarFieldEnum | SellersScalarFieldEnum[]
  }


  /**
   * sellers create
   */
  export type sellersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * The data needed to create a sellers.
     */
    data: XOR<sellersCreateInput, sellersUncheckedCreateInput>
  }


  /**
   * sellers createMany
   */
  export type sellersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sellers.
     */
    data: sellersCreateManyInput | sellersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * sellers update
   */
  export type sellersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * The data needed to update a sellers.
     */
    data: XOR<sellersUpdateInput, sellersUncheckedUpdateInput>
    /**
     * Choose, which sellers to update.
     */
    where: sellersWhereUniqueInput
  }


  /**
   * sellers updateMany
   */
  export type sellersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sellers.
     */
    data: XOR<sellersUpdateManyMutationInput, sellersUncheckedUpdateManyInput>
    /**
     * Filter which sellers to update
     */
    where?: sellersWhereInput
  }


  /**
   * sellers upsert
   */
  export type sellersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * The filter to search for the sellers to update in case it exists.
     */
    where: sellersWhereUniqueInput
    /**
     * In case the sellers found by the `where` argument doesn't exist, create a new sellers with this data.
     */
    create: XOR<sellersCreateInput, sellersUncheckedCreateInput>
    /**
     * In case the sellers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sellersUpdateInput, sellersUncheckedUpdateInput>
  }


  /**
   * sellers delete
   */
  export type sellersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sellersInclude<ExtArgs> | null
    /**
     * Filter which sellers to delete.
     */
    where: sellersWhereUniqueInput
  }


  /**
   * sellers deleteMany
   */
  export type sellersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sellers to delete
     */
    where?: sellersWhereInput
  }


  /**
   * sellers.books
   */
  export type sellers$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: booksInclude<ExtArgs> | null
    where?: booksWhereInput
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    cursor?: booksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }


  /**
   * sellers without action
   */
  export type sellersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sellers
     */
    select?: sellersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: sellersInclude<ExtArgs> | null
  }



  /**
   * Model books
   */

  export type AggregateBooks = {
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  export type BooksAvgAggregateOutputType = {
    id: number | null
    price: number | null
    sellerId: number | null
  }

  export type BooksSumAggregateOutputType = {
    id: number | null
    price: number | null
    sellerId: number | null
  }

  export type BooksMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    author: string | null
    image: string | null
    price: number | null
    status: boolean | null
    sellerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BooksMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    author: string | null
    image: string | null
    price: number | null
    status: boolean | null
    sellerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BooksCountAggregateOutputType = {
    id: number
    title: number
    description: number
    author: number
    image: number
    price: number
    status: number
    sellerId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BooksAvgAggregateInputType = {
    id?: true
    price?: true
    sellerId?: true
  }

  export type BooksSumAggregateInputType = {
    id?: true
    price?: true
    sellerId?: true
  }

  export type BooksMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    author?: true
    image?: true
    price?: true
    status?: true
    sellerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BooksMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    author?: true
    image?: true
    price?: true
    status?: true
    sellerId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BooksCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    author?: true
    image?: true
    price?: true
    status?: true
    sellerId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BooksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to aggregate.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned books
    **/
    _count?: true | BooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BooksMaxAggregateInputType
  }

  export type GetBooksAggregateType<T extends BooksAggregateArgs> = {
        [P in keyof T & keyof AggregateBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooks[P]>
      : GetScalarType<T[P], AggregateBooks[P]>
  }




  export type booksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: booksWhereInput
    orderBy?: booksOrderByWithAggregationInput | booksOrderByWithAggregationInput[]
    by: BooksScalarFieldEnum[] | BooksScalarFieldEnum
    having?: booksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BooksCountAggregateInputType | true
    _avg?: BooksAvgAggregateInputType
    _sum?: BooksSumAggregateInputType
    _min?: BooksMinAggregateInputType
    _max?: BooksMaxAggregateInputType
  }

  export type BooksGroupByOutputType = {
    id: number
    title: string
    description: string
    author: string
    image: string
    price: number
    status: boolean
    sellerId: number
    createdAt: Date
    updatedAt: Date
    _count: BooksCountAggregateOutputType | null
    _avg: BooksAvgAggregateOutputType | null
    _sum: BooksSumAggregateOutputType | null
    _min: BooksMinAggregateOutputType | null
    _max: BooksMaxAggregateOutputType | null
  }

  type GetBooksGroupByPayload<T extends booksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BooksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BooksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BooksGroupByOutputType[P]>
            : GetScalarType<T[P], BooksGroupByOutputType[P]>
        }
      >
    >


  export type booksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    image?: boolean
    price?: boolean
    status?: boolean
    sellerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    seller?: boolean | sellersDefaultArgs<ExtArgs>
    orders?: boolean | books$ordersArgs<ExtArgs>
    categories?: boolean | books$categoriesArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["books"]>

  export type booksSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    author?: boolean
    image?: boolean
    price?: boolean
    status?: boolean
    sellerId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type booksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | sellersDefaultArgs<ExtArgs>
    orders?: boolean | books$ordersArgs<ExtArgs>
    categories?: boolean | books$categoriesArgs<ExtArgs>
    _count?: boolean | BooksCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $booksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "books"
    objects: {
      seller: Prisma.$sellersPayload<ExtArgs>
      orders: Prisma.$ordersPayload<ExtArgs>[]
      categories: Prisma.$bookCategoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      author: string
      image: string
      price: number
      status: boolean
      sellerId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["books"]>
    composites: {}
  }


  type booksGetPayload<S extends boolean | null | undefined | booksDefaultArgs> = $Result.GetResult<Prisma.$booksPayload, S>

  type booksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<booksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BooksCountAggregateInputType | true
    }

  export interface booksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['books'], meta: { name: 'books' } }
    /**
     * Find zero or one Books that matches the filter.
     * @param {booksFindUniqueArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends booksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, booksFindUniqueArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Books that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {booksFindUniqueOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends booksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, booksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindFirstArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends booksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, booksFindFirstArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Books that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindFirstOrThrowArgs} args - Arguments to find a Books
     * @example
     * // Get one Books
     * const books = await prisma.books.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends booksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, booksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.books.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.books.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const booksWithIdOnly = await prisma.books.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends booksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, booksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Books.
     * @param {booksCreateArgs} args - Arguments to create a Books.
     * @example
     * // Create one Books
     * const Books = await prisma.books.create({
     *   data: {
     *     // ... data to create a Books
     *   }
     * })
     * 
    **/
    create<T extends booksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, booksCreateArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Books.
     *     @param {booksCreateManyArgs} args - Arguments to create many Books.
     *     @example
     *     // Create many Books
     *     const books = await prisma.books.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends booksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, booksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Books.
     * @param {booksDeleteArgs} args - Arguments to delete one Books.
     * @example
     * // Delete one Books
     * const Books = await prisma.books.delete({
     *   where: {
     *     // ... filter to delete one Books
     *   }
     * })
     * 
    **/
    delete<T extends booksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, booksDeleteArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Books.
     * @param {booksUpdateArgs} args - Arguments to update one Books.
     * @example
     * // Update one Books
     * const books = await prisma.books.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends booksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, booksUpdateArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Books.
     * @param {booksDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.books.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends booksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, booksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const books = await prisma.books.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends booksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, booksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Books.
     * @param {booksUpsertArgs} args - Arguments to update or create a Books.
     * @example
     * // Update or create a Books
     * const books = await prisma.books.upsert({
     *   create: {
     *     // ... data to create a Books
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Books we want to update
     *   }
     * })
    **/
    upsert<T extends booksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, booksUpsertArgs<ExtArgs>>
    ): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.books.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends booksCountArgs>(
      args?: Subset<T, booksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BooksAggregateArgs>(args: Subset<T, BooksAggregateArgs>): Prisma.PrismaPromise<GetBooksAggregateType<T>>

    /**
     * Group by Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {booksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends booksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: booksGroupByArgs['orderBy'] }
        : { orderBy?: booksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, booksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the books model
   */
  readonly fields: booksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for books.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__booksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    seller<T extends sellersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, sellersDefaultArgs<ExtArgs>>): Prisma__sellersClient<$Result.GetResult<Prisma.$sellersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    orders<T extends books$ordersArgs<ExtArgs> = {}>(args?: Subset<T, books$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findMany'> | Null>;

    categories<T extends books$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, books$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookCategoriesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the books model
   */ 
  interface booksFieldRefs {
    readonly id: FieldRef<"books", 'Int'>
    readonly title: FieldRef<"books", 'String'>
    readonly description: FieldRef<"books", 'String'>
    readonly author: FieldRef<"books", 'String'>
    readonly image: FieldRef<"books", 'String'>
    readonly price: FieldRef<"books", 'Float'>
    readonly status: FieldRef<"books", 'Boolean'>
    readonly sellerId: FieldRef<"books", 'Int'>
    readonly createdAt: FieldRef<"books", 'DateTime'>
    readonly updatedAt: FieldRef<"books", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * books findUnique
   */
  export type booksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where: booksWhereUniqueInput
  }


  /**
   * books findUniqueOrThrow
   */
  export type booksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where: booksWhereUniqueInput
  }


  /**
   * books findFirst
   */
  export type booksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }


  /**
   * books findFirstOrThrow
   */
  export type booksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of books.
     */
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }


  /**
   * books findMany
   */
  export type booksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter, which books to fetch.
     */
    where?: booksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of books to fetch.
     */
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing books.
     */
    cursor?: booksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` books.
     */
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }


  /**
   * books create
   */
  export type booksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * The data needed to create a books.
     */
    data: XOR<booksCreateInput, booksUncheckedCreateInput>
  }


  /**
   * books createMany
   */
  export type booksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many books.
     */
    data: booksCreateManyInput | booksCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * books update
   */
  export type booksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * The data needed to update a books.
     */
    data: XOR<booksUpdateInput, booksUncheckedUpdateInput>
    /**
     * Choose, which books to update.
     */
    where: booksWhereUniqueInput
  }


  /**
   * books updateMany
   */
  export type booksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update books.
     */
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyInput>
    /**
     * Filter which books to update
     */
    where?: booksWhereInput
  }


  /**
   * books upsert
   */
  export type booksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * The filter to search for the books to update in case it exists.
     */
    where: booksWhereUniqueInput
    /**
     * In case the books found by the `where` argument doesn't exist, create a new books with this data.
     */
    create: XOR<booksCreateInput, booksUncheckedCreateInput>
    /**
     * In case the books was found with the provided `where` argument, update it with this data.
     */
    update: XOR<booksUpdateInput, booksUncheckedUpdateInput>
  }


  /**
   * books delete
   */
  export type booksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: booksInclude<ExtArgs> | null
    /**
     * Filter which books to delete.
     */
    where: booksWhereUniqueInput
  }


  /**
   * books deleteMany
   */
  export type booksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which books to delete
     */
    where?: booksWhereInput
  }


  /**
   * books.orders
   */
  export type books$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * books.categories
   */
  export type books$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookCategories
     */
    select?: bookCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookCategoriesInclude<ExtArgs> | null
    where?: bookCategoriesWhereInput
    orderBy?: bookCategoriesOrderByWithRelationInput | bookCategoriesOrderByWithRelationInput[]
    cursor?: bookCategoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookCategoriesScalarFieldEnum | BookCategoriesScalarFieldEnum[]
  }


  /**
   * books without action
   */
  export type booksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: booksInclude<ExtArgs> | null
  }



  /**
   * Model bookCategories
   */

  export type AggregateBookCategories = {
    _count: BookCategoriesCountAggregateOutputType | null
    _avg: BookCategoriesAvgAggregateOutputType | null
    _sum: BookCategoriesSumAggregateOutputType | null
    _min: BookCategoriesMinAggregateOutputType | null
    _max: BookCategoriesMaxAggregateOutputType | null
  }

  export type BookCategoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type BookCategoriesSumAggregateOutputType = {
    id: number | null
  }

  export type BookCategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BookCategoriesCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BookCategoriesAvgAggregateInputType = {
    id?: true
  }

  export type BookCategoriesSumAggregateInputType = {
    id?: true
  }

  export type BookCategoriesMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BookCategoriesCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BookCategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookCategories to aggregate.
     */
    where?: bookCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookCategories to fetch.
     */
    orderBy?: bookCategoriesOrderByWithRelationInput | bookCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bookCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned bookCategories
    **/
    _count?: true | BookCategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookCategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookCategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookCategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookCategoriesMaxAggregateInputType
  }

  export type GetBookCategoriesAggregateType<T extends BookCategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateBookCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookCategories[P]>
      : GetScalarType<T[P], AggregateBookCategories[P]>
  }




  export type bookCategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bookCategoriesWhereInput
    orderBy?: bookCategoriesOrderByWithAggregationInput | bookCategoriesOrderByWithAggregationInput[]
    by: BookCategoriesScalarFieldEnum[] | BookCategoriesScalarFieldEnum
    having?: bookCategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCategoriesCountAggregateInputType | true
    _avg?: BookCategoriesAvgAggregateInputType
    _sum?: BookCategoriesSumAggregateInputType
    _min?: BookCategoriesMinAggregateInputType
    _max?: BookCategoriesMaxAggregateInputType
  }

  export type BookCategoriesGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    updatedAt: Date
    _count: BookCategoriesCountAggregateOutputType | null
    _avg: BookCategoriesAvgAggregateOutputType | null
    _sum: BookCategoriesSumAggregateOutputType | null
    _min: BookCategoriesMinAggregateOutputType | null
    _max: BookCategoriesMaxAggregateOutputType | null
  }

  type GetBookCategoriesGroupByPayload<T extends bookCategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookCategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookCategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookCategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], BookCategoriesGroupByOutputType[P]>
        }
      >
    >


  export type bookCategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    books?: boolean | bookCategories$booksArgs<ExtArgs>
    _count?: boolean | BookCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookCategories"]>

  export type bookCategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type bookCategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | bookCategories$booksArgs<ExtArgs>
    _count?: boolean | BookCategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $bookCategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "bookCategories"
    objects: {
      books: Prisma.$booksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bookCategories"]>
    composites: {}
  }


  type bookCategoriesGetPayload<S extends boolean | null | undefined | bookCategoriesDefaultArgs> = $Result.GetResult<Prisma.$bookCategoriesPayload, S>

  type bookCategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<bookCategoriesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookCategoriesCountAggregateInputType | true
    }

  export interface bookCategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['bookCategories'], meta: { name: 'bookCategories' } }
    /**
     * Find zero or one BookCategories that matches the filter.
     * @param {bookCategoriesFindUniqueArgs} args - Arguments to find a BookCategories
     * @example
     * // Get one BookCategories
     * const bookCategories = await prisma.bookCategories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends bookCategoriesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, bookCategoriesFindUniqueArgs<ExtArgs>>
    ): Prisma__bookCategoriesClient<$Result.GetResult<Prisma.$bookCategoriesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BookCategories that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {bookCategoriesFindUniqueOrThrowArgs} args - Arguments to find a BookCategories
     * @example
     * // Get one BookCategories
     * const bookCategories = await prisma.bookCategories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends bookCategoriesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookCategoriesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__bookCategoriesClient<$Result.GetResult<Prisma.$bookCategoriesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BookCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCategoriesFindFirstArgs} args - Arguments to find a BookCategories
     * @example
     * // Get one BookCategories
     * const bookCategories = await prisma.bookCategories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends bookCategoriesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, bookCategoriesFindFirstArgs<ExtArgs>>
    ): Prisma__bookCategoriesClient<$Result.GetResult<Prisma.$bookCategoriesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BookCategories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCategoriesFindFirstOrThrowArgs} args - Arguments to find a BookCategories
     * @example
     * // Get one BookCategories
     * const bookCategories = await prisma.bookCategories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends bookCategoriesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, bookCategoriesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__bookCategoriesClient<$Result.GetResult<Prisma.$bookCategoriesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BookCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCategoriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookCategories
     * const bookCategories = await prisma.bookCategories.findMany()
     * 
     * // Get first 10 BookCategories
     * const bookCategories = await prisma.bookCategories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookCategoriesWithIdOnly = await prisma.bookCategories.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends bookCategoriesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookCategoriesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bookCategoriesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BookCategories.
     * @param {bookCategoriesCreateArgs} args - Arguments to create a BookCategories.
     * @example
     * // Create one BookCategories
     * const BookCategories = await prisma.bookCategories.create({
     *   data: {
     *     // ... data to create a BookCategories
     *   }
     * })
     * 
    **/
    create<T extends bookCategoriesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, bookCategoriesCreateArgs<ExtArgs>>
    ): Prisma__bookCategoriesClient<$Result.GetResult<Prisma.$bookCategoriesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BookCategories.
     *     @param {bookCategoriesCreateManyArgs} args - Arguments to create many BookCategories.
     *     @example
     *     // Create many BookCategories
     *     const bookCategories = await prisma.bookCategories.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends bookCategoriesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookCategoriesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookCategories.
     * @param {bookCategoriesDeleteArgs} args - Arguments to delete one BookCategories.
     * @example
     * // Delete one BookCategories
     * const BookCategories = await prisma.bookCategories.delete({
     *   where: {
     *     // ... filter to delete one BookCategories
     *   }
     * })
     * 
    **/
    delete<T extends bookCategoriesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, bookCategoriesDeleteArgs<ExtArgs>>
    ): Prisma__bookCategoriesClient<$Result.GetResult<Prisma.$bookCategoriesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BookCategories.
     * @param {bookCategoriesUpdateArgs} args - Arguments to update one BookCategories.
     * @example
     * // Update one BookCategories
     * const bookCategories = await prisma.bookCategories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends bookCategoriesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, bookCategoriesUpdateArgs<ExtArgs>>
    ): Prisma__bookCategoriesClient<$Result.GetResult<Prisma.$bookCategoriesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BookCategories.
     * @param {bookCategoriesDeleteManyArgs} args - Arguments to filter BookCategories to delete.
     * @example
     * // Delete a few BookCategories
     * const { count } = await prisma.bookCategories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends bookCategoriesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, bookCategoriesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookCategories
     * const bookCategories = await prisma.bookCategories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends bookCategoriesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, bookCategoriesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookCategories.
     * @param {bookCategoriesUpsertArgs} args - Arguments to update or create a BookCategories.
     * @example
     * // Update or create a BookCategories
     * const bookCategories = await prisma.bookCategories.upsert({
     *   create: {
     *     // ... data to create a BookCategories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookCategories we want to update
     *   }
     * })
    **/
    upsert<T extends bookCategoriesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, bookCategoriesUpsertArgs<ExtArgs>>
    ): Prisma__bookCategoriesClient<$Result.GetResult<Prisma.$bookCategoriesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCategoriesCountArgs} args - Arguments to filter BookCategories to count.
     * @example
     * // Count the number of BookCategories
     * const count = await prisma.bookCategories.count({
     *   where: {
     *     // ... the filter for the BookCategories we want to count
     *   }
     * })
    **/
    count<T extends bookCategoriesCountArgs>(
      args?: Subset<T, bookCategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookCategoriesAggregateArgs>(args: Subset<T, BookCategoriesAggregateArgs>): Prisma.PrismaPromise<GetBookCategoriesAggregateType<T>>

    /**
     * Group by BookCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bookCategoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bookCategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bookCategoriesGroupByArgs['orderBy'] }
        : { orderBy?: bookCategoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bookCategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the bookCategories model
   */
  readonly fields: bookCategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for bookCategories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bookCategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    books<T extends bookCategories$booksArgs<ExtArgs> = {}>(args?: Subset<T, bookCategories$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the bookCategories model
   */ 
  interface bookCategoriesFieldRefs {
    readonly id: FieldRef<"bookCategories", 'Int'>
    readonly name: FieldRef<"bookCategories", 'String'>
    readonly createdAt: FieldRef<"bookCategories", 'DateTime'>
    readonly updatedAt: FieldRef<"bookCategories", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * bookCategories findUnique
   */
  export type bookCategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookCategories
     */
    select?: bookCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which bookCategories to fetch.
     */
    where: bookCategoriesWhereUniqueInput
  }


  /**
   * bookCategories findUniqueOrThrow
   */
  export type bookCategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookCategories
     */
    select?: bookCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which bookCategories to fetch.
     */
    where: bookCategoriesWhereUniqueInput
  }


  /**
   * bookCategories findFirst
   */
  export type bookCategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookCategories
     */
    select?: bookCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which bookCategories to fetch.
     */
    where?: bookCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookCategories to fetch.
     */
    orderBy?: bookCategoriesOrderByWithRelationInput | bookCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookCategories.
     */
    cursor?: bookCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookCategories.
     */
    distinct?: BookCategoriesScalarFieldEnum | BookCategoriesScalarFieldEnum[]
  }


  /**
   * bookCategories findFirstOrThrow
   */
  export type bookCategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookCategories
     */
    select?: bookCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which bookCategories to fetch.
     */
    where?: bookCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookCategories to fetch.
     */
    orderBy?: bookCategoriesOrderByWithRelationInput | bookCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for bookCategories.
     */
    cursor?: bookCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of bookCategories.
     */
    distinct?: BookCategoriesScalarFieldEnum | BookCategoriesScalarFieldEnum[]
  }


  /**
   * bookCategories findMany
   */
  export type bookCategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookCategories
     */
    select?: bookCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookCategoriesInclude<ExtArgs> | null
    /**
     * Filter, which bookCategories to fetch.
     */
    where?: bookCategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of bookCategories to fetch.
     */
    orderBy?: bookCategoriesOrderByWithRelationInput | bookCategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing bookCategories.
     */
    cursor?: bookCategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` bookCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` bookCategories.
     */
    skip?: number
    distinct?: BookCategoriesScalarFieldEnum | BookCategoriesScalarFieldEnum[]
  }


  /**
   * bookCategories create
   */
  export type bookCategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookCategories
     */
    select?: bookCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a bookCategories.
     */
    data: XOR<bookCategoriesCreateInput, bookCategoriesUncheckedCreateInput>
  }


  /**
   * bookCategories createMany
   */
  export type bookCategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many bookCategories.
     */
    data: bookCategoriesCreateManyInput | bookCategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * bookCategories update
   */
  export type bookCategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookCategories
     */
    select?: bookCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookCategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a bookCategories.
     */
    data: XOR<bookCategoriesUpdateInput, bookCategoriesUncheckedUpdateInput>
    /**
     * Choose, which bookCategories to update.
     */
    where: bookCategoriesWhereUniqueInput
  }


  /**
   * bookCategories updateMany
   */
  export type bookCategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update bookCategories.
     */
    data: XOR<bookCategoriesUpdateManyMutationInput, bookCategoriesUncheckedUpdateManyInput>
    /**
     * Filter which bookCategories to update
     */
    where?: bookCategoriesWhereInput
  }


  /**
   * bookCategories upsert
   */
  export type bookCategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookCategories
     */
    select?: bookCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookCategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the bookCategories to update in case it exists.
     */
    where: bookCategoriesWhereUniqueInput
    /**
     * In case the bookCategories found by the `where` argument doesn't exist, create a new bookCategories with this data.
     */
    create: XOR<bookCategoriesCreateInput, bookCategoriesUncheckedCreateInput>
    /**
     * In case the bookCategories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bookCategoriesUpdateInput, bookCategoriesUncheckedUpdateInput>
  }


  /**
   * bookCategories delete
   */
  export type bookCategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookCategories
     */
    select?: bookCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookCategoriesInclude<ExtArgs> | null
    /**
     * Filter which bookCategories to delete.
     */
    where: bookCategoriesWhereUniqueInput
  }


  /**
   * bookCategories deleteMany
   */
  export type bookCategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which bookCategories to delete
     */
    where?: bookCategoriesWhereInput
  }


  /**
   * bookCategories.books
   */
  export type bookCategories$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the books
     */
    select?: booksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: booksInclude<ExtArgs> | null
    where?: booksWhereInput
    orderBy?: booksOrderByWithRelationInput | booksOrderByWithRelationInput[]
    cursor?: booksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BooksScalarFieldEnum | BooksScalarFieldEnum[]
  }


  /**
   * bookCategories without action
   */
  export type bookCategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the bookCategories
     */
    select?: bookCategoriesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: bookCategoriesInclude<ExtArgs> | null
  }



  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
    quantity: number | null
    total: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
    quantity: number | null
    total: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
    quantity: number | null
    total: number | null
    statusOrder: $Enums.statusOrder | null
    paymentLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    bookId: number | null
    quantity: number | null
    total: number | null
    statusOrder: $Enums.statusOrder | null
    paymentLink: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    userId: number
    bookId: number
    quantity: number
    total: number
    statusOrder: number
    paymentLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    quantity?: true
    total?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    quantity?: true
    total?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    quantity?: true
    total?: true
    statusOrder?: true
    paymentLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    quantity?: true
    total?: true
    statusOrder?: true
    paymentLink?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    userId?: true
    bookId?: true
    quantity?: true
    total?: true
    statusOrder?: true
    paymentLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    userId: number
    bookId: number
    quantity: number
    total: number
    statusOrder: $Enums.statusOrder
    paymentLink: string
    createdAt: Date
    updatedAt: Date
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bookId?: boolean
    quantity?: boolean
    total?: boolean
    statusOrder?: boolean
    paymentLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
    book?: boolean | booksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    userId?: boolean
    bookId?: boolean
    quantity?: boolean
    total?: boolean
    statusOrder?: boolean
    paymentLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
    book?: boolean | booksDefaultArgs<ExtArgs>
  }


  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
      book: Prisma.$booksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      bookId: number
      quantity: number
      total: number
      statusOrder: $Enums.statusOrder
      paymentLink: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }


  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ordersFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Orders that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ordersFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ordersFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
    **/
    create<T extends ordersCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ordersCreateArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Orders.
     *     @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     *     @example
     *     // Create many Orders
     *     const orders = await prisma.orders.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ordersCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
    **/
    delete<T extends ordersDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ordersUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ordersDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ordersUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
    **/
    upsert<T extends ordersUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>
    ): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    book<T extends booksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, booksDefaultArgs<ExtArgs>>): Prisma__booksClient<$Result.GetResult<Prisma.$booksPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the orders model
   */ 
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly userId: FieldRef<"orders", 'Int'>
    readonly bookId: FieldRef<"orders", 'Int'>
    readonly quantity: FieldRef<"orders", 'Int'>
    readonly total: FieldRef<"orders", 'Float'>
    readonly statusOrder: FieldRef<"orders", 'statusOrder'>
    readonly paymentLink: FieldRef<"orders", 'String'>
    readonly createdAt: FieldRef<"orders", 'DateTime'>
    readonly updatedAt: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }


  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }


  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
  }


  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }


  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }


  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
  }


  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ordersInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    role: 'role',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SellersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    userId: 'userId',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SellersScalarFieldEnum = (typeof SellersScalarFieldEnum)[keyof typeof SellersScalarFieldEnum]


  export const BooksScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    author: 'author',
    image: 'image',
    price: 'price',
    status: 'status',
    sellerId: 'sellerId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BooksScalarFieldEnum = (typeof BooksScalarFieldEnum)[keyof typeof BooksScalarFieldEnum]


  export const BookCategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BookCategoriesScalarFieldEnum = (typeof BookCategoriesScalarFieldEnum)[keyof typeof BookCategoriesScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bookId: 'bookId',
    quantity: 'quantity',
    total: 'total',
    statusOrder: 'statusOrder',
    paymentLink: 'paymentLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'role'
   */
  export type EnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role'>
    


  /**
   * Reference to a field of type 'role[]'
   */
  export type ListEnumroleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'statusOrder'
   */
  export type EnumstatusOrderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusOrder'>
    


  /**
   * Reference to a field of type 'statusOrder[]'
   */
  export type ListEnumstatusOrderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'statusOrder[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    role?: EnumroleFilter<"users"> | $Enums.role
    status?: BoolFilter<"users"> | boolean
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    sellers?: SellersListRelationFilter
    orders?: OrdersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    sellers?: sellersOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    username?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    role?: EnumroleFilter<"users"> | $Enums.role
    status?: BoolFilter<"users"> | boolean
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    sellers?: SellersListRelationFilter
    orders?: OrdersListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    role?: EnumroleWithAggregatesFilter<"users"> | $Enums.role
    status?: BoolWithAggregatesFilter<"users"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type sellersWhereInput = {
    AND?: sellersWhereInput | sellersWhereInput[]
    OR?: sellersWhereInput[]
    NOT?: sellersWhereInput | sellersWhereInput[]
    id?: IntFilter<"sellers"> | number
    name?: StringFilter<"sellers"> | string
    userId?: IntFilter<"sellers"> | number
    status?: BoolFilter<"sellers"> | boolean
    createdAt?: DateTimeFilter<"sellers"> | Date | string
    updatedAt?: DateTimeFilter<"sellers"> | Date | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    books?: BooksListRelationFilter
  }

  export type sellersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: usersOrderByWithRelationInput
    books?: booksOrderByRelationAggregateInput
  }

  export type sellersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sellersWhereInput | sellersWhereInput[]
    OR?: sellersWhereInput[]
    NOT?: sellersWhereInput | sellersWhereInput[]
    name?: StringFilter<"sellers"> | string
    userId?: IntFilter<"sellers"> | number
    status?: BoolFilter<"sellers"> | boolean
    createdAt?: DateTimeFilter<"sellers"> | Date | string
    updatedAt?: DateTimeFilter<"sellers"> | Date | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    books?: BooksListRelationFilter
  }, "id">

  export type sellersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: sellersCountOrderByAggregateInput
    _avg?: sellersAvgOrderByAggregateInput
    _max?: sellersMaxOrderByAggregateInput
    _min?: sellersMinOrderByAggregateInput
    _sum?: sellersSumOrderByAggregateInput
  }

  export type sellersScalarWhereWithAggregatesInput = {
    AND?: sellersScalarWhereWithAggregatesInput | sellersScalarWhereWithAggregatesInput[]
    OR?: sellersScalarWhereWithAggregatesInput[]
    NOT?: sellersScalarWhereWithAggregatesInput | sellersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sellers"> | number
    name?: StringWithAggregatesFilter<"sellers"> | string
    userId?: IntWithAggregatesFilter<"sellers"> | number
    status?: BoolWithAggregatesFilter<"sellers"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"sellers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sellers"> | Date | string
  }

  export type booksWhereInput = {
    AND?: booksWhereInput | booksWhereInput[]
    OR?: booksWhereInput[]
    NOT?: booksWhereInput | booksWhereInput[]
    id?: IntFilter<"books"> | number
    title?: StringFilter<"books"> | string
    description?: StringFilter<"books"> | string
    author?: StringFilter<"books"> | string
    image?: StringFilter<"books"> | string
    price?: FloatFilter<"books"> | number
    status?: BoolFilter<"books"> | boolean
    sellerId?: IntFilter<"books"> | number
    createdAt?: DateTimeFilter<"books"> | Date | string
    updatedAt?: DateTimeFilter<"books"> | Date | string
    seller?: XOR<SellersRelationFilter, sellersWhereInput>
    orders?: OrdersListRelationFilter
    categories?: BookCategoriesListRelationFilter
  }

  export type booksOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    image?: SortOrder
    price?: SortOrder
    status?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    seller?: sellersOrderByWithRelationInput
    orders?: ordersOrderByRelationAggregateInput
    categories?: bookCategoriesOrderByRelationAggregateInput
  }

  export type booksWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: booksWhereInput | booksWhereInput[]
    OR?: booksWhereInput[]
    NOT?: booksWhereInput | booksWhereInput[]
    title?: StringFilter<"books"> | string
    description?: StringFilter<"books"> | string
    author?: StringFilter<"books"> | string
    image?: StringFilter<"books"> | string
    price?: FloatFilter<"books"> | number
    status?: BoolFilter<"books"> | boolean
    sellerId?: IntFilter<"books"> | number
    createdAt?: DateTimeFilter<"books"> | Date | string
    updatedAt?: DateTimeFilter<"books"> | Date | string
    seller?: XOR<SellersRelationFilter, sellersWhereInput>
    orders?: OrdersListRelationFilter
    categories?: BookCategoriesListRelationFilter
  }, "id">

  export type booksOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    image?: SortOrder
    price?: SortOrder
    status?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: booksCountOrderByAggregateInput
    _avg?: booksAvgOrderByAggregateInput
    _max?: booksMaxOrderByAggregateInput
    _min?: booksMinOrderByAggregateInput
    _sum?: booksSumOrderByAggregateInput
  }

  export type booksScalarWhereWithAggregatesInput = {
    AND?: booksScalarWhereWithAggregatesInput | booksScalarWhereWithAggregatesInput[]
    OR?: booksScalarWhereWithAggregatesInput[]
    NOT?: booksScalarWhereWithAggregatesInput | booksScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"books"> | number
    title?: StringWithAggregatesFilter<"books"> | string
    description?: StringWithAggregatesFilter<"books"> | string
    author?: StringWithAggregatesFilter<"books"> | string
    image?: StringWithAggregatesFilter<"books"> | string
    price?: FloatWithAggregatesFilter<"books"> | number
    status?: BoolWithAggregatesFilter<"books"> | boolean
    sellerId?: IntWithAggregatesFilter<"books"> | number
    createdAt?: DateTimeWithAggregatesFilter<"books"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"books"> | Date | string
  }

  export type bookCategoriesWhereInput = {
    AND?: bookCategoriesWhereInput | bookCategoriesWhereInput[]
    OR?: bookCategoriesWhereInput[]
    NOT?: bookCategoriesWhereInput | bookCategoriesWhereInput[]
    id?: IntFilter<"bookCategories"> | number
    name?: StringFilter<"bookCategories"> | string
    createdAt?: DateTimeFilter<"bookCategories"> | Date | string
    updatedAt?: DateTimeFilter<"bookCategories"> | Date | string
    books?: BooksListRelationFilter
  }

  export type bookCategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    books?: booksOrderByRelationAggregateInput
  }

  export type bookCategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bookCategoriesWhereInput | bookCategoriesWhereInput[]
    OR?: bookCategoriesWhereInput[]
    NOT?: bookCategoriesWhereInput | bookCategoriesWhereInput[]
    name?: StringFilter<"bookCategories"> | string
    createdAt?: DateTimeFilter<"bookCategories"> | Date | string
    updatedAt?: DateTimeFilter<"bookCategories"> | Date | string
    books?: BooksListRelationFilter
  }, "id">

  export type bookCategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: bookCategoriesCountOrderByAggregateInput
    _avg?: bookCategoriesAvgOrderByAggregateInput
    _max?: bookCategoriesMaxOrderByAggregateInput
    _min?: bookCategoriesMinOrderByAggregateInput
    _sum?: bookCategoriesSumOrderByAggregateInput
  }

  export type bookCategoriesScalarWhereWithAggregatesInput = {
    AND?: bookCategoriesScalarWhereWithAggregatesInput | bookCategoriesScalarWhereWithAggregatesInput[]
    OR?: bookCategoriesScalarWhereWithAggregatesInput[]
    NOT?: bookCategoriesScalarWhereWithAggregatesInput | bookCategoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"bookCategories"> | number
    name?: StringWithAggregatesFilter<"bookCategories"> | string
    createdAt?: DateTimeWithAggregatesFilter<"bookCategories"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"bookCategories"> | Date | string
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    userId?: IntFilter<"orders"> | number
    bookId?: IntFilter<"orders"> | number
    quantity?: IntFilter<"orders"> | number
    total?: FloatFilter<"orders"> | number
    statusOrder?: EnumstatusOrderFilter<"orders"> | $Enums.statusOrder
    paymentLink?: StringFilter<"orders"> | string
    createdAt?: DateTimeFilter<"orders"> | Date | string
    updatedAt?: DateTimeFilter<"orders"> | Date | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    book?: XOR<BooksRelationFilter, booksWhereInput>
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    statusOrder?: SortOrder
    paymentLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: usersOrderByWithRelationInput
    book?: booksOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    userId?: IntFilter<"orders"> | number
    bookId?: IntFilter<"orders"> | number
    quantity?: IntFilter<"orders"> | number
    total?: FloatFilter<"orders"> | number
    statusOrder?: EnumstatusOrderFilter<"orders"> | $Enums.statusOrder
    paymentLink?: StringFilter<"orders"> | string
    createdAt?: DateTimeFilter<"orders"> | Date | string
    updatedAt?: DateTimeFilter<"orders"> | Date | string
    user?: XOR<UsersRelationFilter, usersWhereInput>
    book?: XOR<BooksRelationFilter, booksWhereInput>
  }, "id">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    statusOrder?: SortOrder
    paymentLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    userId?: IntWithAggregatesFilter<"orders"> | number
    bookId?: IntWithAggregatesFilter<"orders"> | number
    quantity?: IntWithAggregatesFilter<"orders"> | number
    total?: FloatWithAggregatesFilter<"orders"> | number
    statusOrder?: EnumstatusOrderWithAggregatesFilter<"orders"> | $Enums.statusOrder
    paymentLink?: StringWithAggregatesFilter<"orders"> | string
    createdAt?: DateTimeWithAggregatesFilter<"orders"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"orders"> | Date | string
  }

  export type usersCreateInput = {
    username: string
    email: string
    password?: string | null
    role?: $Enums.role
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sellers?: sellersCreateNestedManyWithoutUserInput
    orders?: ordersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password?: string | null
    role?: $Enums.role
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sellers?: sellersUncheckedCreateNestedManyWithoutUserInput
    orders?: ordersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellers?: sellersUpdateManyWithoutUserNestedInput
    orders?: ordersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellers?: sellersUncheckedUpdateManyWithoutUserNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    email: string
    password?: string | null
    role?: $Enums.role
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sellersCreateInput = {
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutSellersInput
    books?: booksCreateNestedManyWithoutSellerInput
  }

  export type sellersUncheckedCreateInput = {
    id?: number
    name: string
    userId: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: booksUncheckedCreateNestedManyWithoutSellerInput
  }

  export type sellersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutSellersNestedInput
    books?: booksUpdateManyWithoutSellerNestedInput
  }

  export type sellersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type sellersCreateManyInput = {
    id?: number
    name: string
    userId: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sellersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sellersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booksCreateInput = {
    title: string
    description: string
    author: string
    image: string
    price: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seller: sellersCreateNestedOneWithoutBooksInput
    orders?: ordersCreateNestedManyWithoutBookInput
    categories?: bookCategoriesCreateNestedManyWithoutBooksInput
  }

  export type booksUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    author: string
    image: string
    price: number
    status?: boolean
    sellerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutBookInput
    categories?: bookCategoriesUncheckedCreateNestedManyWithoutBooksInput
  }

  export type booksUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: sellersUpdateOneRequiredWithoutBooksNestedInput
    orders?: ordersUpdateManyWithoutBookNestedInput
    categories?: bookCategoriesUpdateManyWithoutBooksNestedInput
  }

  export type booksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutBookNestedInput
    categories?: bookCategoriesUncheckedUpdateManyWithoutBooksNestedInput
  }

  export type booksCreateManyInput = {
    id?: number
    title: string
    description: string
    author: string
    image: string
    price: number
    status?: boolean
    sellerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type booksUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookCategoriesCreateInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: booksCreateNestedManyWithoutCategoriesInput
  }

  export type bookCategoriesUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: booksUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type bookCategoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUpdateManyWithoutCategoriesNestedInput
  }

  export type bookCategoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type bookCategoriesCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookCategoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookCategoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateInput = {
    quantity: number
    total: number
    statusOrder?: $Enums.statusOrder
    paymentLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutOrdersInput
    book: booksCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    userId: number
    bookId: number
    quantity: number
    total: number
    statusOrder?: $Enums.statusOrder
    paymentLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    statusOrder?: EnumstatusOrderFieldUpdateOperationsInput | $Enums.statusOrder
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutOrdersNestedInput
    book?: booksUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    statusOrder?: EnumstatusOrderFieldUpdateOperationsInput | $Enums.statusOrder
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyInput = {
    id?: number
    userId: number
    bookId: number
    quantity: number
    total: number
    statusOrder?: $Enums.statusOrder
    paymentLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    statusOrder?: EnumstatusOrderFieldUpdateOperationsInput | $Enums.statusOrder
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    statusOrder?: EnumstatusOrderFieldUpdateOperationsInput | $Enums.statusOrder
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SellersListRelationFilter = {
    every?: sellersWhereInput
    some?: sellersWhereInput
    none?: sellersWhereInput
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type sellersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type BooksListRelationFilter = {
    every?: booksWhereInput
    some?: booksWhereInput
    none?: booksWhereInput
  }

  export type booksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type sellersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sellersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type sellersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sellersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sellersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SellersRelationFilter = {
    is?: sellersWhereInput
    isNot?: sellersWhereInput
  }

  export type BookCategoriesListRelationFilter = {
    every?: bookCategoriesWhereInput
    some?: bookCategoriesWhereInput
    none?: bookCategoriesWhereInput
  }

  export type bookCategoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type booksCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    image?: SortOrder
    price?: SortOrder
    status?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type booksAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    sellerId?: SortOrder
  }

  export type booksMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    image?: SortOrder
    price?: SortOrder
    status?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type booksMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    author?: SortOrder
    image?: SortOrder
    price?: SortOrder
    status?: SortOrder
    sellerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type booksSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    sellerId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type bookCategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookCategoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type bookCategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookCategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type bookCategoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumstatusOrderFilter<$PrismaModel = never> = {
    equals?: $Enums.statusOrder | EnumstatusOrderFieldRefInput<$PrismaModel>
    in?: $Enums.statusOrder[] | ListEnumstatusOrderFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusOrder[] | ListEnumstatusOrderFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusOrderFilter<$PrismaModel> | $Enums.statusOrder
  }

  export type BooksRelationFilter = {
    is?: booksWhereInput
    isNot?: booksWhereInput
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    statusOrder?: SortOrder
    paymentLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    statusOrder?: SortOrder
    paymentLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
    statusOrder?: SortOrder
    paymentLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bookId?: SortOrder
    quantity?: SortOrder
    total?: SortOrder
  }

  export type EnumstatusOrderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusOrder | EnumstatusOrderFieldRefInput<$PrismaModel>
    in?: $Enums.statusOrder[] | ListEnumstatusOrderFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusOrder[] | ListEnumstatusOrderFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusOrderWithAggregatesFilter<$PrismaModel> | $Enums.statusOrder
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusOrderFilter<$PrismaModel>
    _max?: NestedEnumstatusOrderFilter<$PrismaModel>
  }

  export type sellersCreateNestedManyWithoutUserInput = {
    create?: XOR<sellersCreateWithoutUserInput, sellersUncheckedCreateWithoutUserInput> | sellersCreateWithoutUserInput[] | sellersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sellersCreateOrConnectWithoutUserInput | sellersCreateOrConnectWithoutUserInput[]
    createMany?: sellersCreateManyUserInputEnvelope
    connect?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUserInput = {
    create?: XOR<ordersCreateWithoutUserInput, ordersUncheckedCreateWithoutUserInput> | ordersCreateWithoutUserInput[] | ordersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUserInput | ordersCreateOrConnectWithoutUserInput[]
    createMany?: ordersCreateManyUserInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type sellersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<sellersCreateWithoutUserInput, sellersUncheckedCreateWithoutUserInput> | sellersCreateWithoutUserInput[] | sellersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sellersCreateOrConnectWithoutUserInput | sellersCreateOrConnectWithoutUserInput[]
    createMany?: sellersCreateManyUserInputEnvelope
    connect?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ordersCreateWithoutUserInput, ordersUncheckedCreateWithoutUserInput> | ordersCreateWithoutUserInput[] | ordersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUserInput | ordersCreateOrConnectWithoutUserInput[]
    createMany?: ordersCreateManyUserInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumroleFieldUpdateOperationsInput = {
    set?: $Enums.role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type sellersUpdateManyWithoutUserNestedInput = {
    create?: XOR<sellersCreateWithoutUserInput, sellersUncheckedCreateWithoutUserInput> | sellersCreateWithoutUserInput[] | sellersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sellersCreateOrConnectWithoutUserInput | sellersCreateOrConnectWithoutUserInput[]
    upsert?: sellersUpsertWithWhereUniqueWithoutUserInput | sellersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sellersCreateManyUserInputEnvelope
    set?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    disconnect?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    delete?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    connect?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    update?: sellersUpdateWithWhereUniqueWithoutUserInput | sellersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sellersUpdateManyWithWhereWithoutUserInput | sellersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sellersScalarWhereInput | sellersScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUserNestedInput = {
    create?: XOR<ordersCreateWithoutUserInput, ordersUncheckedCreateWithoutUserInput> | ordersCreateWithoutUserInput[] | ordersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUserInput | ordersCreateOrConnectWithoutUserInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUserInput | ordersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ordersCreateManyUserInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUserInput | ordersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUserInput | ordersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sellersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<sellersCreateWithoutUserInput, sellersUncheckedCreateWithoutUserInput> | sellersCreateWithoutUserInput[] | sellersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: sellersCreateOrConnectWithoutUserInput | sellersCreateOrConnectWithoutUserInput[]
    upsert?: sellersUpsertWithWhereUniqueWithoutUserInput | sellersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: sellersCreateManyUserInputEnvelope
    set?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    disconnect?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    delete?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    connect?: sellersWhereUniqueInput | sellersWhereUniqueInput[]
    update?: sellersUpdateWithWhereUniqueWithoutUserInput | sellersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: sellersUpdateManyWithWhereWithoutUserInput | sellersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: sellersScalarWhereInput | sellersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ordersCreateWithoutUserInput, ordersUncheckedCreateWithoutUserInput> | ordersCreateWithoutUserInput[] | ordersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUserInput | ordersCreateOrConnectWithoutUserInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUserInput | ordersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ordersCreateManyUserInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUserInput | ordersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUserInput | ordersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutSellersInput = {
    create?: XOR<usersCreateWithoutSellersInput, usersUncheckedCreateWithoutSellersInput>
    connectOrCreate?: usersCreateOrConnectWithoutSellersInput
    connect?: usersWhereUniqueInput
  }

  export type booksCreateNestedManyWithoutSellerInput = {
    create?: XOR<booksCreateWithoutSellerInput, booksUncheckedCreateWithoutSellerInput> | booksCreateWithoutSellerInput[] | booksUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: booksCreateOrConnectWithoutSellerInput | booksCreateOrConnectWithoutSellerInput[]
    createMany?: booksCreateManySellerInputEnvelope
    connect?: booksWhereUniqueInput | booksWhereUniqueInput[]
  }

  export type booksUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<booksCreateWithoutSellerInput, booksUncheckedCreateWithoutSellerInput> | booksCreateWithoutSellerInput[] | booksUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: booksCreateOrConnectWithoutSellerInput | booksCreateOrConnectWithoutSellerInput[]
    createMany?: booksCreateManySellerInputEnvelope
    connect?: booksWhereUniqueInput | booksWhereUniqueInput[]
  }

  export type usersUpdateOneRequiredWithoutSellersNestedInput = {
    create?: XOR<usersCreateWithoutSellersInput, usersUncheckedCreateWithoutSellersInput>
    connectOrCreate?: usersCreateOrConnectWithoutSellersInput
    upsert?: usersUpsertWithoutSellersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutSellersInput, usersUpdateWithoutSellersInput>, usersUncheckedUpdateWithoutSellersInput>
  }

  export type booksUpdateManyWithoutSellerNestedInput = {
    create?: XOR<booksCreateWithoutSellerInput, booksUncheckedCreateWithoutSellerInput> | booksCreateWithoutSellerInput[] | booksUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: booksCreateOrConnectWithoutSellerInput | booksCreateOrConnectWithoutSellerInput[]
    upsert?: booksUpsertWithWhereUniqueWithoutSellerInput | booksUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: booksCreateManySellerInputEnvelope
    set?: booksWhereUniqueInput | booksWhereUniqueInput[]
    disconnect?: booksWhereUniqueInput | booksWhereUniqueInput[]
    delete?: booksWhereUniqueInput | booksWhereUniqueInput[]
    connect?: booksWhereUniqueInput | booksWhereUniqueInput[]
    update?: booksUpdateWithWhereUniqueWithoutSellerInput | booksUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: booksUpdateManyWithWhereWithoutSellerInput | booksUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: booksScalarWhereInput | booksScalarWhereInput[]
  }

  export type booksUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<booksCreateWithoutSellerInput, booksUncheckedCreateWithoutSellerInput> | booksCreateWithoutSellerInput[] | booksUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: booksCreateOrConnectWithoutSellerInput | booksCreateOrConnectWithoutSellerInput[]
    upsert?: booksUpsertWithWhereUniqueWithoutSellerInput | booksUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: booksCreateManySellerInputEnvelope
    set?: booksWhereUniqueInput | booksWhereUniqueInput[]
    disconnect?: booksWhereUniqueInput | booksWhereUniqueInput[]
    delete?: booksWhereUniqueInput | booksWhereUniqueInput[]
    connect?: booksWhereUniqueInput | booksWhereUniqueInput[]
    update?: booksUpdateWithWhereUniqueWithoutSellerInput | booksUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: booksUpdateManyWithWhereWithoutSellerInput | booksUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: booksScalarWhereInput | booksScalarWhereInput[]
  }

  export type sellersCreateNestedOneWithoutBooksInput = {
    create?: XOR<sellersCreateWithoutBooksInput, sellersUncheckedCreateWithoutBooksInput>
    connectOrCreate?: sellersCreateOrConnectWithoutBooksInput
    connect?: sellersWhereUniqueInput
  }

  export type ordersCreateNestedManyWithoutBookInput = {
    create?: XOR<ordersCreateWithoutBookInput, ordersUncheckedCreateWithoutBookInput> | ordersCreateWithoutBookInput[] | ordersUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutBookInput | ordersCreateOrConnectWithoutBookInput[]
    createMany?: ordersCreateManyBookInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type bookCategoriesCreateNestedManyWithoutBooksInput = {
    create?: XOR<bookCategoriesCreateWithoutBooksInput, bookCategoriesUncheckedCreateWithoutBooksInput> | bookCategoriesCreateWithoutBooksInput[] | bookCategoriesUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: bookCategoriesCreateOrConnectWithoutBooksInput | bookCategoriesCreateOrConnectWithoutBooksInput[]
    connect?: bookCategoriesWhereUniqueInput | bookCategoriesWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<ordersCreateWithoutBookInput, ordersUncheckedCreateWithoutBookInput> | ordersCreateWithoutBookInput[] | ordersUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutBookInput | ordersCreateOrConnectWithoutBookInput[]
    createMany?: ordersCreateManyBookInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type bookCategoriesUncheckedCreateNestedManyWithoutBooksInput = {
    create?: XOR<bookCategoriesCreateWithoutBooksInput, bookCategoriesUncheckedCreateWithoutBooksInput> | bookCategoriesCreateWithoutBooksInput[] | bookCategoriesUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: bookCategoriesCreateOrConnectWithoutBooksInput | bookCategoriesCreateOrConnectWithoutBooksInput[]
    connect?: bookCategoriesWhereUniqueInput | bookCategoriesWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type sellersUpdateOneRequiredWithoutBooksNestedInput = {
    create?: XOR<sellersCreateWithoutBooksInput, sellersUncheckedCreateWithoutBooksInput>
    connectOrCreate?: sellersCreateOrConnectWithoutBooksInput
    upsert?: sellersUpsertWithoutBooksInput
    connect?: sellersWhereUniqueInput
    update?: XOR<XOR<sellersUpdateToOneWithWhereWithoutBooksInput, sellersUpdateWithoutBooksInput>, sellersUncheckedUpdateWithoutBooksInput>
  }

  export type ordersUpdateManyWithoutBookNestedInput = {
    create?: XOR<ordersCreateWithoutBookInput, ordersUncheckedCreateWithoutBookInput> | ordersCreateWithoutBookInput[] | ordersUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutBookInput | ordersCreateOrConnectWithoutBookInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutBookInput | ordersUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ordersCreateManyBookInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutBookInput | ordersUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutBookInput | ordersUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type bookCategoriesUpdateManyWithoutBooksNestedInput = {
    create?: XOR<bookCategoriesCreateWithoutBooksInput, bookCategoriesUncheckedCreateWithoutBooksInput> | bookCategoriesCreateWithoutBooksInput[] | bookCategoriesUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: bookCategoriesCreateOrConnectWithoutBooksInput | bookCategoriesCreateOrConnectWithoutBooksInput[]
    upsert?: bookCategoriesUpsertWithWhereUniqueWithoutBooksInput | bookCategoriesUpsertWithWhereUniqueWithoutBooksInput[]
    set?: bookCategoriesWhereUniqueInput | bookCategoriesWhereUniqueInput[]
    disconnect?: bookCategoriesWhereUniqueInput | bookCategoriesWhereUniqueInput[]
    delete?: bookCategoriesWhereUniqueInput | bookCategoriesWhereUniqueInput[]
    connect?: bookCategoriesWhereUniqueInput | bookCategoriesWhereUniqueInput[]
    update?: bookCategoriesUpdateWithWhereUniqueWithoutBooksInput | bookCategoriesUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: bookCategoriesUpdateManyWithWhereWithoutBooksInput | bookCategoriesUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: bookCategoriesScalarWhereInput | bookCategoriesScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<ordersCreateWithoutBookInput, ordersUncheckedCreateWithoutBookInput> | ordersCreateWithoutBookInput[] | ordersUncheckedCreateWithoutBookInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutBookInput | ordersCreateOrConnectWithoutBookInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutBookInput | ordersUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: ordersCreateManyBookInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutBookInput | ordersUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutBookInput | ordersUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type bookCategoriesUncheckedUpdateManyWithoutBooksNestedInput = {
    create?: XOR<bookCategoriesCreateWithoutBooksInput, bookCategoriesUncheckedCreateWithoutBooksInput> | bookCategoriesCreateWithoutBooksInput[] | bookCategoriesUncheckedCreateWithoutBooksInput[]
    connectOrCreate?: bookCategoriesCreateOrConnectWithoutBooksInput | bookCategoriesCreateOrConnectWithoutBooksInput[]
    upsert?: bookCategoriesUpsertWithWhereUniqueWithoutBooksInput | bookCategoriesUpsertWithWhereUniqueWithoutBooksInput[]
    set?: bookCategoriesWhereUniqueInput | bookCategoriesWhereUniqueInput[]
    disconnect?: bookCategoriesWhereUniqueInput | bookCategoriesWhereUniqueInput[]
    delete?: bookCategoriesWhereUniqueInput | bookCategoriesWhereUniqueInput[]
    connect?: bookCategoriesWhereUniqueInput | bookCategoriesWhereUniqueInput[]
    update?: bookCategoriesUpdateWithWhereUniqueWithoutBooksInput | bookCategoriesUpdateWithWhereUniqueWithoutBooksInput[]
    updateMany?: bookCategoriesUpdateManyWithWhereWithoutBooksInput | bookCategoriesUpdateManyWithWhereWithoutBooksInput[]
    deleteMany?: bookCategoriesScalarWhereInput | bookCategoriesScalarWhereInput[]
  }

  export type booksCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<booksCreateWithoutCategoriesInput, booksUncheckedCreateWithoutCategoriesInput> | booksCreateWithoutCategoriesInput[] | booksUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: booksCreateOrConnectWithoutCategoriesInput | booksCreateOrConnectWithoutCategoriesInput[]
    connect?: booksWhereUniqueInput | booksWhereUniqueInput[]
  }

  export type booksUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<booksCreateWithoutCategoriesInput, booksUncheckedCreateWithoutCategoriesInput> | booksCreateWithoutCategoriesInput[] | booksUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: booksCreateOrConnectWithoutCategoriesInput | booksCreateOrConnectWithoutCategoriesInput[]
    connect?: booksWhereUniqueInput | booksWhereUniqueInput[]
  }

  export type booksUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<booksCreateWithoutCategoriesInput, booksUncheckedCreateWithoutCategoriesInput> | booksCreateWithoutCategoriesInput[] | booksUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: booksCreateOrConnectWithoutCategoriesInput | booksCreateOrConnectWithoutCategoriesInput[]
    upsert?: booksUpsertWithWhereUniqueWithoutCategoriesInput | booksUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: booksWhereUniqueInput | booksWhereUniqueInput[]
    disconnect?: booksWhereUniqueInput | booksWhereUniqueInput[]
    delete?: booksWhereUniqueInput | booksWhereUniqueInput[]
    connect?: booksWhereUniqueInput | booksWhereUniqueInput[]
    update?: booksUpdateWithWhereUniqueWithoutCategoriesInput | booksUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: booksUpdateManyWithWhereWithoutCategoriesInput | booksUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: booksScalarWhereInput | booksScalarWhereInput[]
  }

  export type booksUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<booksCreateWithoutCategoriesInput, booksUncheckedCreateWithoutCategoriesInput> | booksCreateWithoutCategoriesInput[] | booksUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: booksCreateOrConnectWithoutCategoriesInput | booksCreateOrConnectWithoutCategoriesInput[]
    upsert?: booksUpsertWithWhereUniqueWithoutCategoriesInput | booksUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: booksWhereUniqueInput | booksWhereUniqueInput[]
    disconnect?: booksWhereUniqueInput | booksWhereUniqueInput[]
    delete?: booksWhereUniqueInput | booksWhereUniqueInput[]
    connect?: booksWhereUniqueInput | booksWhereUniqueInput[]
    update?: booksUpdateWithWhereUniqueWithoutCategoriesInput | booksUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: booksUpdateManyWithWhereWithoutCategoriesInput | booksUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: booksScalarWhereInput | booksScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type booksCreateNestedOneWithoutOrdersInput = {
    create?: XOR<booksCreateWithoutOrdersInput, booksUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: booksCreateOrConnectWithoutOrdersInput
    connect?: booksWhereUniqueInput
  }

  export type EnumstatusOrderFieldUpdateOperationsInput = {
    set?: $Enums.statusOrder
  }

  export type usersUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type booksUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<booksCreateWithoutOrdersInput, booksUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: booksCreateOrConnectWithoutOrdersInput
    upsert?: booksUpsertWithoutOrdersInput
    connect?: booksWhereUniqueInput
    update?: XOR<XOR<booksUpdateToOneWithWhereWithoutOrdersInput, booksUpdateWithoutOrdersInput>, booksUncheckedUpdateWithoutOrdersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumroleFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleFilter<$PrismaModel> | $Enums.role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumroleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.role | EnumroleFieldRefInput<$PrismaModel>
    in?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    notIn?: $Enums.role[] | ListEnumroleFieldRefInput<$PrismaModel>
    not?: NestedEnumroleWithAggregatesFilter<$PrismaModel> | $Enums.role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumroleFilter<$PrismaModel>
    _max?: NestedEnumroleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumstatusOrderFilter<$PrismaModel = never> = {
    equals?: $Enums.statusOrder | EnumstatusOrderFieldRefInput<$PrismaModel>
    in?: $Enums.statusOrder[] | ListEnumstatusOrderFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusOrder[] | ListEnumstatusOrderFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusOrderFilter<$PrismaModel> | $Enums.statusOrder
  }

  export type NestedEnumstatusOrderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.statusOrder | EnumstatusOrderFieldRefInput<$PrismaModel>
    in?: $Enums.statusOrder[] | ListEnumstatusOrderFieldRefInput<$PrismaModel>
    notIn?: $Enums.statusOrder[] | ListEnumstatusOrderFieldRefInput<$PrismaModel>
    not?: NestedEnumstatusOrderWithAggregatesFilter<$PrismaModel> | $Enums.statusOrder
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumstatusOrderFilter<$PrismaModel>
    _max?: NestedEnumstatusOrderFilter<$PrismaModel>
  }

  export type sellersCreateWithoutUserInput = {
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: booksCreateNestedManyWithoutSellerInput
  }

  export type sellersUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    books?: booksUncheckedCreateNestedManyWithoutSellerInput
  }

  export type sellersCreateOrConnectWithoutUserInput = {
    where: sellersWhereUniqueInput
    create: XOR<sellersCreateWithoutUserInput, sellersUncheckedCreateWithoutUserInput>
  }

  export type sellersCreateManyUserInputEnvelope = {
    data: sellersCreateManyUserInput | sellersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUserInput = {
    quantity: number
    total: number
    statusOrder?: $Enums.statusOrder
    paymentLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    book: booksCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutUserInput = {
    id?: number
    bookId: number
    quantity: number
    total: number
    statusOrder?: $Enums.statusOrder
    paymentLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersCreateOrConnectWithoutUserInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUserInput, ordersUncheckedCreateWithoutUserInput>
  }

  export type ordersCreateManyUserInputEnvelope = {
    data: ordersCreateManyUserInput | ordersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type sellersUpsertWithWhereUniqueWithoutUserInput = {
    where: sellersWhereUniqueInput
    update: XOR<sellersUpdateWithoutUserInput, sellersUncheckedUpdateWithoutUserInput>
    create: XOR<sellersCreateWithoutUserInput, sellersUncheckedCreateWithoutUserInput>
  }

  export type sellersUpdateWithWhereUniqueWithoutUserInput = {
    where: sellersWhereUniqueInput
    data: XOR<sellersUpdateWithoutUserInput, sellersUncheckedUpdateWithoutUserInput>
  }

  export type sellersUpdateManyWithWhereWithoutUserInput = {
    where: sellersScalarWhereInput
    data: XOR<sellersUpdateManyMutationInput, sellersUncheckedUpdateManyWithoutUserInput>
  }

  export type sellersScalarWhereInput = {
    AND?: sellersScalarWhereInput | sellersScalarWhereInput[]
    OR?: sellersScalarWhereInput[]
    NOT?: sellersScalarWhereInput | sellersScalarWhereInput[]
    id?: IntFilter<"sellers"> | number
    name?: StringFilter<"sellers"> | string
    userId?: IntFilter<"sellers"> | number
    status?: BoolFilter<"sellers"> | boolean
    createdAt?: DateTimeFilter<"sellers"> | Date | string
    updatedAt?: DateTimeFilter<"sellers"> | Date | string
  }

  export type ordersUpsertWithWhereUniqueWithoutUserInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUserInput, ordersUncheckedUpdateWithoutUserInput>
    create: XOR<ordersCreateWithoutUserInput, ordersUncheckedCreateWithoutUserInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUserInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUserInput, ordersUncheckedUpdateWithoutUserInput>
  }

  export type ordersUpdateManyWithWhereWithoutUserInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUserInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    userId?: IntFilter<"orders"> | number
    bookId?: IntFilter<"orders"> | number
    quantity?: IntFilter<"orders"> | number
    total?: FloatFilter<"orders"> | number
    statusOrder?: EnumstatusOrderFilter<"orders"> | $Enums.statusOrder
    paymentLink?: StringFilter<"orders"> | string
    createdAt?: DateTimeFilter<"orders"> | Date | string
    updatedAt?: DateTimeFilter<"orders"> | Date | string
  }

  export type usersCreateWithoutSellersInput = {
    username: string
    email: string
    password?: string | null
    role?: $Enums.role
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutSellersInput = {
    id?: number
    username: string
    email: string
    password?: string | null
    role?: $Enums.role
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutSellersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutSellersInput, usersUncheckedCreateWithoutSellersInput>
  }

  export type booksCreateWithoutSellerInput = {
    title: string
    description: string
    author: string
    image: string
    price: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersCreateNestedManyWithoutBookInput
    categories?: bookCategoriesCreateNestedManyWithoutBooksInput
  }

  export type booksUncheckedCreateWithoutSellerInput = {
    id?: number
    title: string
    description: string
    author: string
    image: string
    price: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutBookInput
    categories?: bookCategoriesUncheckedCreateNestedManyWithoutBooksInput
  }

  export type booksCreateOrConnectWithoutSellerInput = {
    where: booksWhereUniqueInput
    create: XOR<booksCreateWithoutSellerInput, booksUncheckedCreateWithoutSellerInput>
  }

  export type booksCreateManySellerInputEnvelope = {
    data: booksCreateManySellerInput | booksCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutSellersInput = {
    update: XOR<usersUpdateWithoutSellersInput, usersUncheckedUpdateWithoutSellersInput>
    create: XOR<usersCreateWithoutSellersInput, usersUncheckedCreateWithoutSellersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutSellersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutSellersInput, usersUncheckedUpdateWithoutSellersInput>
  }

  export type usersUpdateWithoutSellersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutSellersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type booksUpsertWithWhereUniqueWithoutSellerInput = {
    where: booksWhereUniqueInput
    update: XOR<booksUpdateWithoutSellerInput, booksUncheckedUpdateWithoutSellerInput>
    create: XOR<booksCreateWithoutSellerInput, booksUncheckedCreateWithoutSellerInput>
  }

  export type booksUpdateWithWhereUniqueWithoutSellerInput = {
    where: booksWhereUniqueInput
    data: XOR<booksUpdateWithoutSellerInput, booksUncheckedUpdateWithoutSellerInput>
  }

  export type booksUpdateManyWithWhereWithoutSellerInput = {
    where: booksScalarWhereInput
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyWithoutSellerInput>
  }

  export type booksScalarWhereInput = {
    AND?: booksScalarWhereInput | booksScalarWhereInput[]
    OR?: booksScalarWhereInput[]
    NOT?: booksScalarWhereInput | booksScalarWhereInput[]
    id?: IntFilter<"books"> | number
    title?: StringFilter<"books"> | string
    description?: StringFilter<"books"> | string
    author?: StringFilter<"books"> | string
    image?: StringFilter<"books"> | string
    price?: FloatFilter<"books"> | number
    status?: BoolFilter<"books"> | boolean
    sellerId?: IntFilter<"books"> | number
    createdAt?: DateTimeFilter<"books"> | Date | string
    updatedAt?: DateTimeFilter<"books"> | Date | string
  }

  export type sellersCreateWithoutBooksInput = {
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutSellersInput
  }

  export type sellersUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
    userId: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sellersCreateOrConnectWithoutBooksInput = {
    where: sellersWhereUniqueInput
    create: XOR<sellersCreateWithoutBooksInput, sellersUncheckedCreateWithoutBooksInput>
  }

  export type ordersCreateWithoutBookInput = {
    quantity: number
    total: number
    statusOrder?: $Enums.statusOrder
    paymentLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutBookInput = {
    id?: number
    userId: number
    quantity: number
    total: number
    statusOrder?: $Enums.statusOrder
    paymentLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersCreateOrConnectWithoutBookInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutBookInput, ordersUncheckedCreateWithoutBookInput>
  }

  export type ordersCreateManyBookInputEnvelope = {
    data: ordersCreateManyBookInput | ordersCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type bookCategoriesCreateWithoutBooksInput = {
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookCategoriesUncheckedCreateWithoutBooksInput = {
    id?: number
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type bookCategoriesCreateOrConnectWithoutBooksInput = {
    where: bookCategoriesWhereUniqueInput
    create: XOR<bookCategoriesCreateWithoutBooksInput, bookCategoriesUncheckedCreateWithoutBooksInput>
  }

  export type sellersUpsertWithoutBooksInput = {
    update: XOR<sellersUpdateWithoutBooksInput, sellersUncheckedUpdateWithoutBooksInput>
    create: XOR<sellersCreateWithoutBooksInput, sellersUncheckedCreateWithoutBooksInput>
    where?: sellersWhereInput
  }

  export type sellersUpdateToOneWithWhereWithoutBooksInput = {
    where?: sellersWhereInput
    data: XOR<sellersUpdateWithoutBooksInput, sellersUncheckedUpdateWithoutBooksInput>
  }

  export type sellersUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutSellersNestedInput
  }

  export type sellersUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUpsertWithWhereUniqueWithoutBookInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutBookInput, ordersUncheckedUpdateWithoutBookInput>
    create: XOR<ordersCreateWithoutBookInput, ordersUncheckedCreateWithoutBookInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutBookInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutBookInput, ordersUncheckedUpdateWithoutBookInput>
  }

  export type ordersUpdateManyWithWhereWithoutBookInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutBookInput>
  }

  export type bookCategoriesUpsertWithWhereUniqueWithoutBooksInput = {
    where: bookCategoriesWhereUniqueInput
    update: XOR<bookCategoriesUpdateWithoutBooksInput, bookCategoriesUncheckedUpdateWithoutBooksInput>
    create: XOR<bookCategoriesCreateWithoutBooksInput, bookCategoriesUncheckedCreateWithoutBooksInput>
  }

  export type bookCategoriesUpdateWithWhereUniqueWithoutBooksInput = {
    where: bookCategoriesWhereUniqueInput
    data: XOR<bookCategoriesUpdateWithoutBooksInput, bookCategoriesUncheckedUpdateWithoutBooksInput>
  }

  export type bookCategoriesUpdateManyWithWhereWithoutBooksInput = {
    where: bookCategoriesScalarWhereInput
    data: XOR<bookCategoriesUpdateManyMutationInput, bookCategoriesUncheckedUpdateManyWithoutBooksInput>
  }

  export type bookCategoriesScalarWhereInput = {
    AND?: bookCategoriesScalarWhereInput | bookCategoriesScalarWhereInput[]
    OR?: bookCategoriesScalarWhereInput[]
    NOT?: bookCategoriesScalarWhereInput | bookCategoriesScalarWhereInput[]
    id?: IntFilter<"bookCategories"> | number
    name?: StringFilter<"bookCategories"> | string
    createdAt?: DateTimeFilter<"bookCategories"> | Date | string
    updatedAt?: DateTimeFilter<"bookCategories"> | Date | string
  }

  export type booksCreateWithoutCategoriesInput = {
    title: string
    description: string
    author: string
    image: string
    price: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seller: sellersCreateNestedOneWithoutBooksInput
    orders?: ordersCreateNestedManyWithoutBookInput
  }

  export type booksUncheckedCreateWithoutCategoriesInput = {
    id?: number
    title: string
    description: string
    author: string
    image: string
    price: number
    status?: boolean
    sellerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: ordersUncheckedCreateNestedManyWithoutBookInput
  }

  export type booksCreateOrConnectWithoutCategoriesInput = {
    where: booksWhereUniqueInput
    create: XOR<booksCreateWithoutCategoriesInput, booksUncheckedCreateWithoutCategoriesInput>
  }

  export type booksUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: booksWhereUniqueInput
    update: XOR<booksUpdateWithoutCategoriesInput, booksUncheckedUpdateWithoutCategoriesInput>
    create: XOR<booksCreateWithoutCategoriesInput, booksUncheckedCreateWithoutCategoriesInput>
  }

  export type booksUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: booksWhereUniqueInput
    data: XOR<booksUpdateWithoutCategoriesInput, booksUncheckedUpdateWithoutCategoriesInput>
  }

  export type booksUpdateManyWithWhereWithoutCategoriesInput = {
    where: booksScalarWhereInput
    data: XOR<booksUpdateManyMutationInput, booksUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type usersCreateWithoutOrdersInput = {
    username: string
    email: string
    password?: string | null
    role?: $Enums.role
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sellers?: sellersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    username: string
    email: string
    password?: string | null
    role?: $Enums.role
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    sellers?: sellersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type booksCreateWithoutOrdersInput = {
    title: string
    description: string
    author: string
    image: string
    price: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seller: sellersCreateNestedOneWithoutBooksInput
    categories?: bookCategoriesCreateNestedManyWithoutBooksInput
  }

  export type booksUncheckedCreateWithoutOrdersInput = {
    id?: number
    title: string
    description: string
    author: string
    image: string
    price: number
    status?: boolean
    sellerId: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categories?: bookCategoriesUncheckedCreateNestedManyWithoutBooksInput
  }

  export type booksCreateOrConnectWithoutOrdersInput = {
    where: booksWhereUniqueInput
    create: XOR<booksCreateWithoutOrdersInput, booksUncheckedCreateWithoutOrdersInput>
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellers?: sellersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumroleFieldUpdateOperationsInput | $Enums.role
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellers?: sellersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type booksUpsertWithoutOrdersInput = {
    update: XOR<booksUpdateWithoutOrdersInput, booksUncheckedUpdateWithoutOrdersInput>
    create: XOR<booksCreateWithoutOrdersInput, booksUncheckedCreateWithoutOrdersInput>
    where?: booksWhereInput
  }

  export type booksUpdateToOneWithWhereWithoutOrdersInput = {
    where?: booksWhereInput
    data: XOR<booksUpdateWithoutOrdersInput, booksUncheckedUpdateWithoutOrdersInput>
  }

  export type booksUpdateWithoutOrdersInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: sellersUpdateOneRequiredWithoutBooksNestedInput
    categories?: bookCategoriesUpdateManyWithoutBooksNestedInput
  }

  export type booksUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: bookCategoriesUncheckedUpdateManyWithoutBooksNestedInput
  }

  export type sellersCreateManyUserInput = {
    id?: number
    name: string
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersCreateManyUserInput = {
    id?: number
    bookId: number
    quantity: number
    total: number
    statusOrder?: $Enums.statusOrder
    paymentLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sellersUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUpdateManyWithoutSellerNestedInput
  }

  export type sellersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    books?: booksUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type sellersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUpdateWithoutUserInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    statusOrder?: EnumstatusOrderFieldUpdateOperationsInput | $Enums.statusOrder
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    book?: booksUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    statusOrder?: EnumstatusOrderFieldUpdateOperationsInput | $Enums.statusOrder
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    statusOrder?: EnumstatusOrderFieldUpdateOperationsInput | $Enums.statusOrder
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booksCreateManySellerInput = {
    id?: number
    title: string
    description: string
    author: string
    image: string
    price: number
    status?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type booksUpdateWithoutSellerInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUpdateManyWithoutBookNestedInput
    categories?: bookCategoriesUpdateManyWithoutBooksNestedInput
  }

  export type booksUncheckedUpdateWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutBookNestedInput
    categories?: bookCategoriesUncheckedUpdateManyWithoutBooksNestedInput
  }

  export type booksUncheckedUpdateManyWithoutSellerInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersCreateManyBookInput = {
    id?: number
    userId: number
    quantity: number
    total: number
    statusOrder?: $Enums.statusOrder
    paymentLink: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ordersUpdateWithoutBookInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    statusOrder?: EnumstatusOrderFieldUpdateOperationsInput | $Enums.statusOrder
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    statusOrder?: EnumstatusOrderFieldUpdateOperationsInput | $Enums.statusOrder
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ordersUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    statusOrder?: EnumstatusOrderFieldUpdateOperationsInput | $Enums.statusOrder
    paymentLink?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookCategoriesUpdateWithoutBooksInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookCategoriesUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type bookCategoriesUncheckedUpdateManyWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type booksUpdateWithoutCategoriesInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: sellersUpdateOneRequiredWithoutBooksNestedInput
    orders?: ordersUpdateManyWithoutBookNestedInput
  }

  export type booksUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: ordersUncheckedUpdateManyWithoutBookNestedInput
  }

  export type booksUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    sellerId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UsersCountOutputTypeDefaultArgs instead
     */
    export type UsersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UsersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SellersCountOutputTypeDefaultArgs instead
     */
    export type SellersCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SellersCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BooksCountOutputTypeDefaultArgs instead
     */
    export type BooksCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BooksCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookCategoriesCountOutputTypeDefaultArgs instead
     */
    export type BookCategoriesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookCategoriesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use usersDefaultArgs instead
     */
    export type usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = usersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use sellersDefaultArgs instead
     */
    export type sellersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = sellersDefaultArgs<ExtArgs>
    /**
     * @deprecated Use booksDefaultArgs instead
     */
    export type booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = booksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use bookCategoriesDefaultArgs instead
     */
    export type bookCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = bookCategoriesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ordersDefaultArgs instead
     */
    export type ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ordersDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}