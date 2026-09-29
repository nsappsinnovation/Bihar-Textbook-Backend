
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model BookChapter
 * 
 */
export type BookChapter = $Result.DefaultSelection<Prisma.$BookChapterPayload>
/**
 * Model Notice
 * 
 */
export type Notice = $Result.DefaultSelection<Prisma.$NoticePayload>
/**
 * Model ManagingDirector
 * 
 */
export type ManagingDirector = $Result.DefaultSelection<Prisma.$ManagingDirectorPayload>
/**
 * Model BoardDirector
 * 
 */
export type BoardDirector = $Result.DefaultSelection<Prisma.$BoardDirectorPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model ManagingDirectorMessage
 * 
 */
export type ManagingDirectorMessage = $Result.DefaultSelection<Prisma.$ManagingDirectorMessagePayload>
/**
 * Model Section
 * 
 */
export type Section = $Result.DefaultSelection<Prisma.$SectionPayload>
/**
 * Model Setting
 * 
 */
export type Setting = $Result.DefaultSelection<Prisma.$SettingPayload>
/**
 * Model Directory
 * 
 */
export type Directory = $Result.DefaultSelection<Prisma.$DirectoryPayload>
/**
 * Model ActivityLog
 * 
 */
export type ActivityLog = $Result.DefaultSelection<Prisma.$ActivityLogPayload>
/**
 * Model BookDistribution
 * 
 */
export type BookDistribution = $Result.DefaultSelection<Prisma.$BookDistributionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BookStatus: {
  Published: 'Published',
  Draft: 'Draft'
};

export type BookStatus = (typeof BookStatus)[keyof typeof BookStatus]


export const NoticeType: {
  Notice: 'Notice',
  Tender: 'Tender'
};

export type NoticeType = (typeof NoticeType)[keyof typeof NoticeType]


export const EmployeeType: {
  Regular: 'Regular',
  Contract: 'Contract',
  Outsource: 'Outsource'
};

export type EmployeeType = (typeof EmployeeType)[keyof typeof EmployeeType]

}

export type BookStatus = $Enums.BookStatus

export const BookStatus: typeof $Enums.BookStatus

export type NoticeType = $Enums.NoticeType

export const NoticeType: typeof $Enums.NoticeType

export type EmployeeType = $Enums.EmployeeType

export const EmployeeType: typeof $Enums.EmployeeType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookChapter`: Exposes CRUD operations for the **BookChapter** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookChapters
    * const bookChapters = await prisma.bookChapter.findMany()
    * ```
    */
  get bookChapter(): Prisma.BookChapterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notice`: Exposes CRUD operations for the **Notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notice.findMany()
    * ```
    */
  get notice(): Prisma.NoticeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.managingDirector`: Exposes CRUD operations for the **ManagingDirector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManagingDirectors
    * const managingDirectors = await prisma.managingDirector.findMany()
    * ```
    */
  get managingDirector(): Prisma.ManagingDirectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.boardDirector`: Exposes CRUD operations for the **BoardDirector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardDirectors
    * const boardDirectors = await prisma.boardDirector.findMany()
    * ```
    */
  get boardDirector(): Prisma.BoardDirectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.managingDirectorMessage`: Exposes CRUD operations for the **ManagingDirectorMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ManagingDirectorMessages
    * const managingDirectorMessages = await prisma.managingDirectorMessage.findMany()
    * ```
    */
  get managingDirectorMessage(): Prisma.ManagingDirectorMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.section`: Exposes CRUD operations for the **Section** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sections
    * const sections = await prisma.section.findMany()
    * ```
    */
  get section(): Prisma.SectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.setting`: Exposes CRUD operations for the **Setting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.setting.findMany()
    * ```
    */
  get setting(): Prisma.SettingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.directory`: Exposes CRUD operations for the **Directory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Directories
    * const directories = await prisma.directory.findMany()
    * ```
    */
  get directory(): Prisma.DirectoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activityLog`: Exposes CRUD operations for the **ActivityLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivityLogs
    * const activityLogs = await prisma.activityLog.findMany()
    * ```
    */
  get activityLog(): Prisma.ActivityLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bookDistribution`: Exposes CRUD operations for the **BookDistribution** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookDistributions
    * const bookDistributions = await prisma.bookDistribution.findMany()
    * ```
    */
  get bookDistribution(): Prisma.BookDistributionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Admin: 'Admin',
    Book: 'Book',
    BookChapter: 'BookChapter',
    Notice: 'Notice',
    ManagingDirector: 'ManagingDirector',
    BoardDirector: 'BoardDirector',
    Employee: 'Employee',
    ManagingDirectorMessage: 'ManagingDirectorMessage',
    Section: 'Section',
    Setting: 'Setting',
    Directory: 'Directory',
    ActivityLog: 'ActivityLog',
    BookDistribution: 'BookDistribution'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "book" | "bookChapter" | "notice" | "managingDirector" | "boardDirector" | "employee" | "managingDirectorMessage" | "section" | "setting" | "directory" | "activityLog" | "bookDistribution"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      BookChapter: {
        payload: Prisma.$BookChapterPayload<ExtArgs>
        fields: Prisma.BookChapterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookChapterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookChapterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookChapterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookChapterPayload>
          }
          findFirst: {
            args: Prisma.BookChapterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookChapterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookChapterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookChapterPayload>
          }
          findMany: {
            args: Prisma.BookChapterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookChapterPayload>[]
          }
          create: {
            args: Prisma.BookChapterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookChapterPayload>
          }
          createMany: {
            args: Prisma.BookChapterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookChapterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookChapterPayload>
          }
          update: {
            args: Prisma.BookChapterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookChapterPayload>
          }
          deleteMany: {
            args: Prisma.BookChapterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookChapterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookChapterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookChapterPayload>
          }
          aggregate: {
            args: Prisma.BookChapterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookChapter>
          }
          groupBy: {
            args: Prisma.BookChapterGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookChapterGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookChapterCountArgs<ExtArgs>
            result: $Utils.Optional<BookChapterCountAggregateOutputType> | number
          }
        }
      }
      Notice: {
        payload: Prisma.$NoticePayload<ExtArgs>
        fields: Prisma.NoticeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NoticeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NoticeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findFirst: {
            args: Prisma.NoticeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NoticeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          findMany: {
            args: Prisma.NoticeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>[]
          }
          create: {
            args: Prisma.NoticeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          createMany: {
            args: Prisma.NoticeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NoticeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          update: {
            args: Prisma.NoticeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          deleteMany: {
            args: Prisma.NoticeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NoticeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NoticeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NoticePayload>
          }
          aggregate: {
            args: Prisma.NoticeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotice>
          }
          groupBy: {
            args: Prisma.NoticeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NoticeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NoticeCountArgs<ExtArgs>
            result: $Utils.Optional<NoticeCountAggregateOutputType> | number
          }
        }
      }
      ManagingDirector: {
        payload: Prisma.$ManagingDirectorPayload<ExtArgs>
        fields: Prisma.ManagingDirectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagingDirectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagingDirectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorPayload>
          }
          findFirst: {
            args: Prisma.ManagingDirectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagingDirectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorPayload>
          }
          findMany: {
            args: Prisma.ManagingDirectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorPayload>[]
          }
          create: {
            args: Prisma.ManagingDirectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorPayload>
          }
          createMany: {
            args: Prisma.ManagingDirectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ManagingDirectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorPayload>
          }
          update: {
            args: Prisma.ManagingDirectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorPayload>
          }
          deleteMany: {
            args: Prisma.ManagingDirectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagingDirectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ManagingDirectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorPayload>
          }
          aggregate: {
            args: Prisma.ManagingDirectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManagingDirector>
          }
          groupBy: {
            args: Prisma.ManagingDirectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagingDirectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagingDirectorCountArgs<ExtArgs>
            result: $Utils.Optional<ManagingDirectorCountAggregateOutputType> | number
          }
        }
      }
      BoardDirector: {
        payload: Prisma.$BoardDirectorPayload<ExtArgs>
        fields: Prisma.BoardDirectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BoardDirectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardDirectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BoardDirectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardDirectorPayload>
          }
          findFirst: {
            args: Prisma.BoardDirectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardDirectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BoardDirectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardDirectorPayload>
          }
          findMany: {
            args: Prisma.BoardDirectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardDirectorPayload>[]
          }
          create: {
            args: Prisma.BoardDirectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardDirectorPayload>
          }
          createMany: {
            args: Prisma.BoardDirectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BoardDirectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardDirectorPayload>
          }
          update: {
            args: Prisma.BoardDirectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardDirectorPayload>
          }
          deleteMany: {
            args: Prisma.BoardDirectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BoardDirectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BoardDirectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BoardDirectorPayload>
          }
          aggregate: {
            args: Prisma.BoardDirectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBoardDirector>
          }
          groupBy: {
            args: Prisma.BoardDirectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<BoardDirectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.BoardDirectorCountArgs<ExtArgs>
            result: $Utils.Optional<BoardDirectorCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      ManagingDirectorMessage: {
        payload: Prisma.$ManagingDirectorMessagePayload<ExtArgs>
        fields: Prisma.ManagingDirectorMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ManagingDirectorMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ManagingDirectorMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorMessagePayload>
          }
          findFirst: {
            args: Prisma.ManagingDirectorMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ManagingDirectorMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorMessagePayload>
          }
          findMany: {
            args: Prisma.ManagingDirectorMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorMessagePayload>[]
          }
          create: {
            args: Prisma.ManagingDirectorMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorMessagePayload>
          }
          createMany: {
            args: Prisma.ManagingDirectorMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ManagingDirectorMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorMessagePayload>
          }
          update: {
            args: Prisma.ManagingDirectorMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorMessagePayload>
          }
          deleteMany: {
            args: Prisma.ManagingDirectorMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ManagingDirectorMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ManagingDirectorMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ManagingDirectorMessagePayload>
          }
          aggregate: {
            args: Prisma.ManagingDirectorMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateManagingDirectorMessage>
          }
          groupBy: {
            args: Prisma.ManagingDirectorMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ManagingDirectorMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ManagingDirectorMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ManagingDirectorMessageCountAggregateOutputType> | number
          }
        }
      }
      Section: {
        payload: Prisma.$SectionPayload<ExtArgs>
        fields: Prisma.SectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findFirst: {
            args: Prisma.SectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          findMany: {
            args: Prisma.SectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>[]
          }
          create: {
            args: Prisma.SectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          createMany: {
            args: Prisma.SectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          update: {
            args: Prisma.SectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          deleteMany: {
            args: Prisma.SectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectionPayload>
          }
          aggregate: {
            args: Prisma.SectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSection>
          }
          groupBy: {
            args: Prisma.SectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectionCountArgs<ExtArgs>
            result: $Utils.Optional<SectionCountAggregateOutputType> | number
          }
        }
      }
      Setting: {
        payload: Prisma.$SettingPayload<ExtArgs>
        fields: Prisma.SettingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findFirst: {
            args: Prisma.SettingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          findMany: {
            args: Prisma.SettingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>[]
          }
          create: {
            args: Prisma.SettingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          createMany: {
            args: Prisma.SettingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SettingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          update: {
            args: Prisma.SettingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          deleteMany: {
            args: Prisma.SettingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingPayload>
          }
          aggregate: {
            args: Prisma.SettingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSetting>
          }
          groupBy: {
            args: Prisma.SettingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingCountArgs<ExtArgs>
            result: $Utils.Optional<SettingCountAggregateOutputType> | number
          }
        }
      }
      Directory: {
        payload: Prisma.$DirectoryPayload<ExtArgs>
        fields: Prisma.DirectoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DirectoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DirectoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          findFirst: {
            args: Prisma.DirectoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DirectoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          findMany: {
            args: Prisma.DirectoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>[]
          }
          create: {
            args: Prisma.DirectoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          createMany: {
            args: Prisma.DirectoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.DirectoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          update: {
            args: Prisma.DirectoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          deleteMany: {
            args: Prisma.DirectoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DirectoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DirectoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DirectoryPayload>
          }
          aggregate: {
            args: Prisma.DirectoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDirectory>
          }
          groupBy: {
            args: Prisma.DirectoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DirectoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DirectoryCountArgs<ExtArgs>
            result: $Utils.Optional<DirectoryCountAggregateOutputType> | number
          }
        }
      }
      ActivityLog: {
        payload: Prisma.$ActivityLogPayload<ExtArgs>
        fields: Prisma.ActivityLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivityLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivityLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findFirst: {
            args: Prisma.ActivityLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivityLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          findMany: {
            args: Prisma.ActivityLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>[]
          }
          create: {
            args: Prisma.ActivityLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          createMany: {
            args: Prisma.ActivityLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ActivityLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          update: {
            args: Prisma.ActivityLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          deleteMany: {
            args: Prisma.ActivityLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivityLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ActivityLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivityLogPayload>
          }
          aggregate: {
            args: Prisma.ActivityLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivityLog>
          }
          groupBy: {
            args: Prisma.ActivityLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivityLogCountArgs<ExtArgs>
            result: $Utils.Optional<ActivityLogCountAggregateOutputType> | number
          }
        }
      }
      BookDistribution: {
        payload: Prisma.$BookDistributionPayload<ExtArgs>
        fields: Prisma.BookDistributionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookDistributionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookDistributionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookDistributionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookDistributionPayload>
          }
          findFirst: {
            args: Prisma.BookDistributionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookDistributionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookDistributionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookDistributionPayload>
          }
          findMany: {
            args: Prisma.BookDistributionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookDistributionPayload>[]
          }
          create: {
            args: Prisma.BookDistributionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookDistributionPayload>
          }
          createMany: {
            args: Prisma.BookDistributionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BookDistributionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookDistributionPayload>
          }
          update: {
            args: Prisma.BookDistributionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookDistributionPayload>
          }
          deleteMany: {
            args: Prisma.BookDistributionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookDistributionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookDistributionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookDistributionPayload>
          }
          aggregate: {
            args: Prisma.BookDistributionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookDistribution>
          }
          groupBy: {
            args: Prisma.BookDistributionGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookDistributionGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookDistributionCountArgs<ExtArgs>
            result: $Utils.Optional<BookDistributionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    book?: BookOmit
    bookChapter?: BookChapterOmit
    notice?: NoticeOmit
    managingDirector?: ManagingDirectorOmit
    boardDirector?: BoardDirectorOmit
    employee?: EmployeeOmit
    managingDirectorMessage?: ManagingDirectorMessageOmit
    section?: SectionOmit
    setting?: SettingOmit
    directory?: DirectoryOmit
    activityLog?: ActivityLogOmit
    bookDistribution?: BookDistributionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    books: number
    notices: number
    sections: number
    settings: number
    mdMessages: number
    activities: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | AdminCountOutputTypeCountBooksArgs
    notices?: boolean | AdminCountOutputTypeCountNoticesArgs
    sections?: boolean | AdminCountOutputTypeCountSectionsArgs
    settings?: boolean | AdminCountOutputTypeCountSettingsArgs
    mdMessages?: boolean | AdminCountOutputTypeCountMdMessagesArgs
    activities?: boolean | AdminCountOutputTypeCountActivitiesArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountNoticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountSettingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountMdMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagingDirectorMessageWhereInput
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountActivitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    chapters: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chapters?: boolean | BookCountOutputTypeCountChaptersArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountChaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookChapterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
    extraNumber: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
    extraNumber: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    avatarUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    phone: string | null
    passwordHash: string | null
    avatarUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    phone: number
    passwordHash: number
    avatarUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
    extraNumber?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
    extraNumber?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    passwordHash?: true
    avatarUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    passwordHash?: true
    avatarUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    phone?: true
    passwordHash?: true
    avatarUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    fullName: string
    email: string
    phone: string | null
    passwordHash: string
    avatarUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    extraText: string | null
    extraNumber: number | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
    books?: boolean | Admin$booksArgs<ExtArgs>
    notices?: boolean | Admin$noticesArgs<ExtArgs>
    sections?: boolean | Admin$sectionsArgs<ExtArgs>
    settings?: boolean | Admin$settingsArgs<ExtArgs>
    mdMessages?: boolean | Admin$mdMessagesArgs<ExtArgs>
    activities?: boolean | Admin$activitiesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>



  export type AdminSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    phone?: boolean
    passwordHash?: boolean
    avatarUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullName" | "email" | "phone" | "passwordHash" | "avatarUrl" | "isActive" | "createdAt" | "updatedAt" | "extraText" | "extraNumber", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    books?: boolean | Admin$booksArgs<ExtArgs>
    notices?: boolean | Admin$noticesArgs<ExtArgs>
    sections?: boolean | Admin$sectionsArgs<ExtArgs>
    settings?: boolean | Admin$settingsArgs<ExtArgs>
    mdMessages?: boolean | Admin$mdMessagesArgs<ExtArgs>
    activities?: boolean | Admin$activitiesArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      books: Prisma.$BookPayload<ExtArgs>[]
      notices: Prisma.$NoticePayload<ExtArgs>[]
      sections: Prisma.$SectionPayload<ExtArgs>[]
      settings: Prisma.$SettingPayload<ExtArgs>[]
      mdMessages: Prisma.$ManagingDirectorMessagePayload<ExtArgs>[]
      activities: Prisma.$ActivityLogPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      phone: string | null
      passwordHash: string
      avatarUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    books<T extends Admin$booksArgs<ExtArgs> = {}>(args?: Subset<T, Admin$booksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notices<T extends Admin$noticesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$noticesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sections<T extends Admin$sectionsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$sectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    settings<T extends Admin$settingsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$settingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mdMessages<T extends Admin$mdMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$mdMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagingDirectorMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    activities<T extends Admin$activitiesArgs<ExtArgs> = {}>(args?: Subset<T, Admin$activitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly fullName: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly phone: FieldRef<"Admin", 'String'>
    readonly passwordHash: FieldRef<"Admin", 'String'>
    readonly avatarUrl: FieldRef<"Admin", 'String'>
    readonly isActive: FieldRef<"Admin", 'Boolean'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
    readonly extraText: FieldRef<"Admin", 'String'>
    readonly extraNumber: FieldRef<"Admin", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.books
   */
  export type Admin$booksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    cursor?: BookWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Admin.notices
   */
  export type Admin$noticesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    cursor?: NoticeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Admin.sections
   */
  export type Admin$sectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    cursor?: SectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Admin.settings
   */
  export type Admin$settingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    cursor?: SettingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Admin.mdMessages
   */
  export type Admin$mdMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirectorMessage
     */
    select?: ManagingDirectorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirectorMessage
     */
    omit?: ManagingDirectorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagingDirectorMessageInclude<ExtArgs> | null
    where?: ManagingDirectorMessageWhereInput
    orderBy?: ManagingDirectorMessageOrderByWithRelationInput | ManagingDirectorMessageOrderByWithRelationInput[]
    cursor?: ManagingDirectorMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ManagingDirectorMessageScalarFieldEnum | ManagingDirectorMessageScalarFieldEnum[]
  }

  /**
   * Admin.activities
   */
  export type Admin$activitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    cursor?: ActivityLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
    classId: number | null
    sortOrder: number | null
    createdById: number | null
    extraNumber: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
    classId: number | null
    sortOrder: number | null
    createdById: number | null
    extraNumber: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    title: string | null
    classId: number | null
    subject: string | null
    board: string | null
    coverImageUrl: string | null
    description: string | null
    status: $Enums.BookStatus | null
    sortOrder: number | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    title: string | null
    classId: number | null
    subject: string | null
    board: string | null
    coverImageUrl: string | null
    description: string | null
    status: $Enums.BookStatus | null
    sortOrder: number | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    title: number
    classId: number
    subject: number
    board: number
    coverImageUrl: number
    description: number
    status: number
    sortOrder: number
    createdById: number
    createdAt: number
    updatedAt: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
    classId?: true
    sortOrder?: true
    createdById?: true
    extraNumber?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
    classId?: true
    sortOrder?: true
    createdById?: true
    extraNumber?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    title?: true
    classId?: true
    subject?: true
    board?: true
    coverImageUrl?: true
    description?: true
    status?: true
    sortOrder?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    title?: true
    classId?: true
    subject?: true
    board?: true
    coverImageUrl?: true
    description?: true
    status?: true
    sortOrder?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    title?: true
    classId?: true
    subject?: true
    board?: true
    coverImageUrl?: true
    description?: true
    status?: true
    sortOrder?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    title: string
    classId: number
    subject: string | null
    board: string | null
    coverImageUrl: string | null
    description: string | null
    status: $Enums.BookStatus
    sortOrder: number | null
    createdById: number | null
    createdAt: Date
    updatedAt: Date
    extraText: string | null
    extraNumber: number | null
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    classId?: boolean
    subject?: boolean
    board?: boolean
    coverImageUrl?: boolean
    description?: boolean
    status?: boolean
    sortOrder?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
    createdBy?: boolean | Book$createdByArgs<ExtArgs>
    chapters?: boolean | Book$chaptersArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>



  export type BookSelectScalar = {
    id?: boolean
    title?: boolean
    classId?: boolean
    subject?: boolean
    board?: boolean
    coverImageUrl?: boolean
    description?: boolean
    status?: boolean
    sortOrder?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "classId" | "subject" | "board" | "coverImageUrl" | "description" | "status" | "sortOrder" | "createdById" | "createdAt" | "updatedAt" | "extraText" | "extraNumber", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Book$createdByArgs<ExtArgs>
    chapters?: boolean | Book$chaptersArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      createdBy: Prisma.$AdminPayload<ExtArgs> | null
      chapters: Prisma.$BookChapterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      classId: number
      subject: string | null
      board: string | null
      coverImageUrl: string | null
      description: string | null
      status: $Enums.BookStatus
      sortOrder: number | null
      createdById: number | null
      createdAt: Date
      updatedAt: Date
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
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
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Book$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Book$createdByArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chapters<T extends Book$chaptersArgs<ExtArgs> = {}>(args?: Subset<T, Book$chaptersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly title: FieldRef<"Book", 'String'>
    readonly classId: FieldRef<"Book", 'Int'>
    readonly subject: FieldRef<"Book", 'String'>
    readonly board: FieldRef<"Book", 'String'>
    readonly coverImageUrl: FieldRef<"Book", 'String'>
    readonly description: FieldRef<"Book", 'String'>
    readonly status: FieldRef<"Book", 'BookStatus'>
    readonly sortOrder: FieldRef<"Book", 'Int'>
    readonly createdById: FieldRef<"Book", 'Int'>
    readonly createdAt: FieldRef<"Book", 'DateTime'>
    readonly updatedAt: FieldRef<"Book", 'DateTime'>
    readonly extraText: FieldRef<"Book", 'String'>
    readonly extraNumber: FieldRef<"Book", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.createdBy
   */
  export type Book$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Book.chapters
   */
  export type Book$chaptersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookChapter
     */
    select?: BookChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookChapter
     */
    omit?: BookChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookChapterInclude<ExtArgs> | null
    where?: BookChapterWhereInput
    orderBy?: BookChapterOrderByWithRelationInput | BookChapterOrderByWithRelationInput[]
    cursor?: BookChapterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookChapterScalarFieldEnum | BookChapterScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model BookChapter
   */

  export type AggregateBookChapter = {
    _count: BookChapterCountAggregateOutputType | null
    _avg: BookChapterAvgAggregateOutputType | null
    _sum: BookChapterSumAggregateOutputType | null
    _min: BookChapterMinAggregateOutputType | null
    _max: BookChapterMaxAggregateOutputType | null
  }

  export type BookChapterAvgAggregateOutputType = {
    id: number | null
    bookId: number | null
    chapterNumber: number | null
    sortOrder: number | null
    extraNumber: number | null
  }

  export type BookChapterSumAggregateOutputType = {
    id: number | null
    bookId: number | null
    chapterNumber: number | null
    sortOrder: number | null
    extraNumber: number | null
  }

  export type BookChapterMinAggregateOutputType = {
    id: number | null
    bookId: number | null
    chapterNumber: number | null
    title: string | null
    hindiTitle: string | null
    pdfUrl: string | null
    sortOrder: number | null
    createdAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type BookChapterMaxAggregateOutputType = {
    id: number | null
    bookId: number | null
    chapterNumber: number | null
    title: string | null
    hindiTitle: string | null
    pdfUrl: string | null
    sortOrder: number | null
    createdAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type BookChapterCountAggregateOutputType = {
    id: number
    bookId: number
    chapterNumber: number
    title: number
    hindiTitle: number
    pdfUrl: number
    sortOrder: number
    createdAt: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type BookChapterAvgAggregateInputType = {
    id?: true
    bookId?: true
    chapterNumber?: true
    sortOrder?: true
    extraNumber?: true
  }

  export type BookChapterSumAggregateInputType = {
    id?: true
    bookId?: true
    chapterNumber?: true
    sortOrder?: true
    extraNumber?: true
  }

  export type BookChapterMinAggregateInputType = {
    id?: true
    bookId?: true
    chapterNumber?: true
    title?: true
    hindiTitle?: true
    pdfUrl?: true
    sortOrder?: true
    createdAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type BookChapterMaxAggregateInputType = {
    id?: true
    bookId?: true
    chapterNumber?: true
    title?: true
    hindiTitle?: true
    pdfUrl?: true
    sortOrder?: true
    createdAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type BookChapterCountAggregateInputType = {
    id?: true
    bookId?: true
    chapterNumber?: true
    title?: true
    hindiTitle?: true
    pdfUrl?: true
    sortOrder?: true
    createdAt?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type BookChapterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookChapter to aggregate.
     */
    where?: BookChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookChapters to fetch.
     */
    orderBy?: BookChapterOrderByWithRelationInput | BookChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookChapters
    **/
    _count?: true | BookChapterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookChapterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookChapterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookChapterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookChapterMaxAggregateInputType
  }

  export type GetBookChapterAggregateType<T extends BookChapterAggregateArgs> = {
        [P in keyof T & keyof AggregateBookChapter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookChapter[P]>
      : GetScalarType<T[P], AggregateBookChapter[P]>
  }




  export type BookChapterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookChapterWhereInput
    orderBy?: BookChapterOrderByWithAggregationInput | BookChapterOrderByWithAggregationInput[]
    by: BookChapterScalarFieldEnum[] | BookChapterScalarFieldEnum
    having?: BookChapterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookChapterCountAggregateInputType | true
    _avg?: BookChapterAvgAggregateInputType
    _sum?: BookChapterSumAggregateInputType
    _min?: BookChapterMinAggregateInputType
    _max?: BookChapterMaxAggregateInputType
  }

  export type BookChapterGroupByOutputType = {
    id: number
    bookId: number
    chapterNumber: number
    title: string | null
    hindiTitle: string | null
    pdfUrl: string | null
    sortOrder: number | null
    createdAt: Date
    extraText: string | null
    extraNumber: number | null
    _count: BookChapterCountAggregateOutputType | null
    _avg: BookChapterAvgAggregateOutputType | null
    _sum: BookChapterSumAggregateOutputType | null
    _min: BookChapterMinAggregateOutputType | null
    _max: BookChapterMaxAggregateOutputType | null
  }

  type GetBookChapterGroupByPayload<T extends BookChapterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookChapterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookChapterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookChapterGroupByOutputType[P]>
            : GetScalarType<T[P], BookChapterGroupByOutputType[P]>
        }
      >
    >


  export type BookChapterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookId?: boolean
    chapterNumber?: boolean
    title?: boolean
    hindiTitle?: boolean
    pdfUrl?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
    book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookChapter"]>



  export type BookChapterSelectScalar = {
    id?: boolean
    bookId?: boolean
    chapterNumber?: boolean
    title?: boolean
    hindiTitle?: boolean
    pdfUrl?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type BookChapterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "bookId" | "chapterNumber" | "title" | "hindiTitle" | "pdfUrl" | "sortOrder" | "createdAt" | "extraText" | "extraNumber", ExtArgs["result"]["bookChapter"]>
  export type BookChapterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $BookChapterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookChapter"
    objects: {
      book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      bookId: number
      chapterNumber: number
      title: string | null
      hindiTitle: string | null
      pdfUrl: string | null
      sortOrder: number | null
      createdAt: Date
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["bookChapter"]>
    composites: {}
  }

  type BookChapterGetPayload<S extends boolean | null | undefined | BookChapterDefaultArgs> = $Result.GetResult<Prisma.$BookChapterPayload, S>

  type BookChapterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookChapterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookChapterCountAggregateInputType | true
    }

  export interface BookChapterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookChapter'], meta: { name: 'BookChapter' } }
    /**
     * Find zero or one BookChapter that matches the filter.
     * @param {BookChapterFindUniqueArgs} args - Arguments to find a BookChapter
     * @example
     * // Get one BookChapter
     * const bookChapter = await prisma.bookChapter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookChapterFindUniqueArgs>(args: SelectSubset<T, BookChapterFindUniqueArgs<ExtArgs>>): Prisma__BookChapterClient<$Result.GetResult<Prisma.$BookChapterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookChapter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookChapterFindUniqueOrThrowArgs} args - Arguments to find a BookChapter
     * @example
     * // Get one BookChapter
     * const bookChapter = await prisma.bookChapter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookChapterFindUniqueOrThrowArgs>(args: SelectSubset<T, BookChapterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookChapterClient<$Result.GetResult<Prisma.$BookChapterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookChapter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookChapterFindFirstArgs} args - Arguments to find a BookChapter
     * @example
     * // Get one BookChapter
     * const bookChapter = await prisma.bookChapter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookChapterFindFirstArgs>(args?: SelectSubset<T, BookChapterFindFirstArgs<ExtArgs>>): Prisma__BookChapterClient<$Result.GetResult<Prisma.$BookChapterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookChapter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookChapterFindFirstOrThrowArgs} args - Arguments to find a BookChapter
     * @example
     * // Get one BookChapter
     * const bookChapter = await prisma.bookChapter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookChapterFindFirstOrThrowArgs>(args?: SelectSubset<T, BookChapterFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookChapterClient<$Result.GetResult<Prisma.$BookChapterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookChapters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookChapterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookChapters
     * const bookChapters = await prisma.bookChapter.findMany()
     * 
     * // Get first 10 BookChapters
     * const bookChapters = await prisma.bookChapter.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookChapterWithIdOnly = await prisma.bookChapter.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookChapterFindManyArgs>(args?: SelectSubset<T, BookChapterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookChapterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookChapter.
     * @param {BookChapterCreateArgs} args - Arguments to create a BookChapter.
     * @example
     * // Create one BookChapter
     * const BookChapter = await prisma.bookChapter.create({
     *   data: {
     *     // ... data to create a BookChapter
     *   }
     * })
     * 
     */
    create<T extends BookChapterCreateArgs>(args: SelectSubset<T, BookChapterCreateArgs<ExtArgs>>): Prisma__BookChapterClient<$Result.GetResult<Prisma.$BookChapterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookChapters.
     * @param {BookChapterCreateManyArgs} args - Arguments to create many BookChapters.
     * @example
     * // Create many BookChapters
     * const bookChapter = await prisma.bookChapter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookChapterCreateManyArgs>(args?: SelectSubset<T, BookChapterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookChapter.
     * @param {BookChapterDeleteArgs} args - Arguments to delete one BookChapter.
     * @example
     * // Delete one BookChapter
     * const BookChapter = await prisma.bookChapter.delete({
     *   where: {
     *     // ... filter to delete one BookChapter
     *   }
     * })
     * 
     */
    delete<T extends BookChapterDeleteArgs>(args: SelectSubset<T, BookChapterDeleteArgs<ExtArgs>>): Prisma__BookChapterClient<$Result.GetResult<Prisma.$BookChapterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookChapter.
     * @param {BookChapterUpdateArgs} args - Arguments to update one BookChapter.
     * @example
     * // Update one BookChapter
     * const bookChapter = await prisma.bookChapter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookChapterUpdateArgs>(args: SelectSubset<T, BookChapterUpdateArgs<ExtArgs>>): Prisma__BookChapterClient<$Result.GetResult<Prisma.$BookChapterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookChapters.
     * @param {BookChapterDeleteManyArgs} args - Arguments to filter BookChapters to delete.
     * @example
     * // Delete a few BookChapters
     * const { count } = await prisma.bookChapter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookChapterDeleteManyArgs>(args?: SelectSubset<T, BookChapterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookChapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookChapterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookChapters
     * const bookChapter = await prisma.bookChapter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookChapterUpdateManyArgs>(args: SelectSubset<T, BookChapterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookChapter.
     * @param {BookChapterUpsertArgs} args - Arguments to update or create a BookChapter.
     * @example
     * // Update or create a BookChapter
     * const bookChapter = await prisma.bookChapter.upsert({
     *   create: {
     *     // ... data to create a BookChapter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookChapter we want to update
     *   }
     * })
     */
    upsert<T extends BookChapterUpsertArgs>(args: SelectSubset<T, BookChapterUpsertArgs<ExtArgs>>): Prisma__BookChapterClient<$Result.GetResult<Prisma.$BookChapterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookChapters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookChapterCountArgs} args - Arguments to filter BookChapters to count.
     * @example
     * // Count the number of BookChapters
     * const count = await prisma.bookChapter.count({
     *   where: {
     *     // ... the filter for the BookChapters we want to count
     *   }
     * })
    **/
    count<T extends BookChapterCountArgs>(
      args?: Subset<T, BookChapterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookChapterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookChapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookChapterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookChapterAggregateArgs>(args: Subset<T, BookChapterAggregateArgs>): Prisma.PrismaPromise<GetBookChapterAggregateType<T>>

    /**
     * Group by BookChapter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookChapterGroupByArgs} args - Group by arguments.
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
      T extends BookChapterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookChapterGroupByArgs['orderBy'] }
        : { orderBy?: BookChapterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookChapterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookChapterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookChapter model
   */
  readonly fields: BookChapterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookChapter.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookChapterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookChapter model
   */
  interface BookChapterFieldRefs {
    readonly id: FieldRef<"BookChapter", 'Int'>
    readonly bookId: FieldRef<"BookChapter", 'Int'>
    readonly chapterNumber: FieldRef<"BookChapter", 'Int'>
    readonly title: FieldRef<"BookChapter", 'String'>
    readonly hindiTitle: FieldRef<"BookChapter", 'String'>
    readonly pdfUrl: FieldRef<"BookChapter", 'String'>
    readonly sortOrder: FieldRef<"BookChapter", 'Int'>
    readonly createdAt: FieldRef<"BookChapter", 'DateTime'>
    readonly extraText: FieldRef<"BookChapter", 'String'>
    readonly extraNumber: FieldRef<"BookChapter", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * BookChapter findUnique
   */
  export type BookChapterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookChapter
     */
    select?: BookChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookChapter
     */
    omit?: BookChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookChapterInclude<ExtArgs> | null
    /**
     * Filter, which BookChapter to fetch.
     */
    where: BookChapterWhereUniqueInput
  }

  /**
   * BookChapter findUniqueOrThrow
   */
  export type BookChapterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookChapter
     */
    select?: BookChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookChapter
     */
    omit?: BookChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookChapterInclude<ExtArgs> | null
    /**
     * Filter, which BookChapter to fetch.
     */
    where: BookChapterWhereUniqueInput
  }

  /**
   * BookChapter findFirst
   */
  export type BookChapterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookChapter
     */
    select?: BookChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookChapter
     */
    omit?: BookChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookChapterInclude<ExtArgs> | null
    /**
     * Filter, which BookChapter to fetch.
     */
    where?: BookChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookChapters to fetch.
     */
    orderBy?: BookChapterOrderByWithRelationInput | BookChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookChapters.
     */
    cursor?: BookChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookChapters.
     */
    distinct?: BookChapterScalarFieldEnum | BookChapterScalarFieldEnum[]
  }

  /**
   * BookChapter findFirstOrThrow
   */
  export type BookChapterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookChapter
     */
    select?: BookChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookChapter
     */
    omit?: BookChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookChapterInclude<ExtArgs> | null
    /**
     * Filter, which BookChapter to fetch.
     */
    where?: BookChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookChapters to fetch.
     */
    orderBy?: BookChapterOrderByWithRelationInput | BookChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookChapters.
     */
    cursor?: BookChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookChapters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookChapters.
     */
    distinct?: BookChapterScalarFieldEnum | BookChapterScalarFieldEnum[]
  }

  /**
   * BookChapter findMany
   */
  export type BookChapterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookChapter
     */
    select?: BookChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookChapter
     */
    omit?: BookChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookChapterInclude<ExtArgs> | null
    /**
     * Filter, which BookChapters to fetch.
     */
    where?: BookChapterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookChapters to fetch.
     */
    orderBy?: BookChapterOrderByWithRelationInput | BookChapterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookChapters.
     */
    cursor?: BookChapterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookChapters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookChapters.
     */
    skip?: number
    distinct?: BookChapterScalarFieldEnum | BookChapterScalarFieldEnum[]
  }

  /**
   * BookChapter create
   */
  export type BookChapterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookChapter
     */
    select?: BookChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookChapter
     */
    omit?: BookChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookChapterInclude<ExtArgs> | null
    /**
     * The data needed to create a BookChapter.
     */
    data: XOR<BookChapterCreateInput, BookChapterUncheckedCreateInput>
  }

  /**
   * BookChapter createMany
   */
  export type BookChapterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookChapters.
     */
    data: BookChapterCreateManyInput | BookChapterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookChapter update
   */
  export type BookChapterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookChapter
     */
    select?: BookChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookChapter
     */
    omit?: BookChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookChapterInclude<ExtArgs> | null
    /**
     * The data needed to update a BookChapter.
     */
    data: XOR<BookChapterUpdateInput, BookChapterUncheckedUpdateInput>
    /**
     * Choose, which BookChapter to update.
     */
    where: BookChapterWhereUniqueInput
  }

  /**
   * BookChapter updateMany
   */
  export type BookChapterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookChapters.
     */
    data: XOR<BookChapterUpdateManyMutationInput, BookChapterUncheckedUpdateManyInput>
    /**
     * Filter which BookChapters to update
     */
    where?: BookChapterWhereInput
    /**
     * Limit how many BookChapters to update.
     */
    limit?: number
  }

  /**
   * BookChapter upsert
   */
  export type BookChapterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookChapter
     */
    select?: BookChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookChapter
     */
    omit?: BookChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookChapterInclude<ExtArgs> | null
    /**
     * The filter to search for the BookChapter to update in case it exists.
     */
    where: BookChapterWhereUniqueInput
    /**
     * In case the BookChapter found by the `where` argument doesn't exist, create a new BookChapter with this data.
     */
    create: XOR<BookChapterCreateInput, BookChapterUncheckedCreateInput>
    /**
     * In case the BookChapter was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookChapterUpdateInput, BookChapterUncheckedUpdateInput>
  }

  /**
   * BookChapter delete
   */
  export type BookChapterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookChapter
     */
    select?: BookChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookChapter
     */
    omit?: BookChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookChapterInclude<ExtArgs> | null
    /**
     * Filter which BookChapter to delete.
     */
    where: BookChapterWhereUniqueInput
  }

  /**
   * BookChapter deleteMany
   */
  export type BookChapterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookChapters to delete
     */
    where?: BookChapterWhereInput
    /**
     * Limit how many BookChapters to delete.
     */
    limit?: number
  }

  /**
   * BookChapter without action
   */
  export type BookChapterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookChapter
     */
    select?: BookChapterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookChapter
     */
    omit?: BookChapterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookChapterInclude<ExtArgs> | null
  }


  /**
   * Model Notice
   */

  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  export type NoticeAvgAggregateOutputType = {
    id: number | null
    createdById: number | null
    extraNumber: number | null
  }

  export type NoticeSumAggregateOutputType = {
    id: number | null
    createdById: number | null
    extraNumber: number | null
  }

  export type NoticeMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.NoticeType | null
    category: string | null
    isPinned: boolean | null
    documentUrl: string | null
    publishDate: Date | null
    closingDate: Date | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type NoticeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    type: $Enums.NoticeType | null
    category: string | null
    isPinned: boolean | null
    documentUrl: string | null
    publishDate: Date | null
    closingDate: Date | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type NoticeCountAggregateOutputType = {
    id: number
    title: number
    description: number
    type: number
    category: number
    isPinned: number
    documentUrl: number
    publishDate: number
    closingDate: number
    createdById: number
    createdAt: number
    updatedAt: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type NoticeAvgAggregateInputType = {
    id?: true
    createdById?: true
    extraNumber?: true
  }

  export type NoticeSumAggregateInputType = {
    id?: true
    createdById?: true
    extraNumber?: true
  }

  export type NoticeMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    category?: true
    isPinned?: true
    documentUrl?: true
    publishDate?: true
    closingDate?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type NoticeMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    category?: true
    isPinned?: true
    documentUrl?: true
    publishDate?: true
    closingDate?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type NoticeCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    type?: true
    category?: true
    isPinned?: true
    documentUrl?: true
    publishDate?: true
    closingDate?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type NoticeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notice to aggregate.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notices
    **/
    _count?: true | NoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeMaxAggregateInputType
  }

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>
  }




  export type NoticeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NoticeWhereInput
    orderBy?: NoticeOrderByWithAggregationInput | NoticeOrderByWithAggregationInput[]
    by: NoticeScalarFieldEnum[] | NoticeScalarFieldEnum
    having?: NoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeCountAggregateInputType | true
    _avg?: NoticeAvgAggregateInputType
    _sum?: NoticeSumAggregateInputType
    _min?: NoticeMinAggregateInputType
    _max?: NoticeMaxAggregateInputType
  }

  export type NoticeGroupByOutputType = {
    id: number
    title: string
    description: string | null
    type: $Enums.NoticeType
    category: string | null
    isPinned: boolean | null
    documentUrl: string | null
    publishDate: Date | null
    closingDate: Date | null
    createdById: number | null
    createdAt: Date
    updatedAt: Date
    extraText: string | null
    extraNumber: number | null
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  type GetNoticeGroupByPayload<T extends NoticeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>
        }
      >
    >


  export type NoticeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    category?: boolean
    isPinned?: boolean
    documentUrl?: boolean
    publishDate?: boolean
    closingDate?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
    createdBy?: boolean | Notice$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["notice"]>



  export type NoticeSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    type?: boolean
    category?: boolean
    isPinned?: boolean
    documentUrl?: boolean
    publishDate?: boolean
    closingDate?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type NoticeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "type" | "category" | "isPinned" | "documentUrl" | "publishDate" | "closingDate" | "createdById" | "createdAt" | "updatedAt" | "extraText" | "extraNumber", ExtArgs["result"]["notice"]>
  export type NoticeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Notice$createdByArgs<ExtArgs>
  }

  export type $NoticePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notice"
    objects: {
      createdBy: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string | null
      type: $Enums.NoticeType
      category: string | null
      isPinned: boolean | null
      documentUrl: string | null
      publishDate: Date | null
      closingDate: Date | null
      createdById: number | null
      createdAt: Date
      updatedAt: Date
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["notice"]>
    composites: {}
  }

  type NoticeGetPayload<S extends boolean | null | undefined | NoticeDefaultArgs> = $Result.GetResult<Prisma.$NoticePayload, S>

  type NoticeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NoticeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NoticeCountAggregateInputType | true
    }

  export interface NoticeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notice'], meta: { name: 'Notice' } }
    /**
     * Find zero or one Notice that matches the filter.
     * @param {NoticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NoticeFindUniqueArgs>(args: SelectSubset<T, NoticeFindUniqueArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NoticeFindUniqueOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NoticeFindUniqueOrThrowArgs>(args: SelectSubset<T, NoticeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NoticeFindFirstArgs>(args?: SelectSubset<T, NoticeFindFirstArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstOrThrowArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NoticeFindFirstOrThrowArgs>(args?: SelectSubset<T, NoticeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeWithIdOnly = await prisma.notice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NoticeFindManyArgs>(args?: SelectSubset<T, NoticeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notice.
     * @param {NoticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     * 
     */
    create<T extends NoticeCreateArgs>(args: SelectSubset<T, NoticeCreateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notices.
     * @param {NoticeCreateManyArgs} args - Arguments to create many Notices.
     * @example
     * // Create many Notices
     * const notice = await prisma.notice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NoticeCreateManyArgs>(args?: SelectSubset<T, NoticeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Notice.
     * @param {NoticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     * 
     */
    delete<T extends NoticeDeleteArgs>(args: SelectSubset<T, NoticeDeleteArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notice.
     * @param {NoticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NoticeUpdateArgs>(args: SelectSubset<T, NoticeUpdateArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notices.
     * @param {NoticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NoticeDeleteManyArgs>(args?: SelectSubset<T, NoticeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NoticeUpdateManyArgs>(args: SelectSubset<T, NoticeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Notice.
     * @param {NoticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
     */
    upsert<T extends NoticeUpsertArgs>(args: SelectSubset<T, NoticeUpsertArgs<ExtArgs>>): Prisma__NoticeClient<$Result.GetResult<Prisma.$NoticePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends NoticeCountArgs>(
      args?: Subset<T, NoticeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticeAggregateArgs>(args: Subset<T, NoticeAggregateArgs>): Prisma.PrismaPromise<GetNoticeAggregateType<T>>

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeGroupByArgs} args - Group by arguments.
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
      T extends NoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeGroupByArgs['orderBy'] }
        : { orderBy?: NoticeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notice model
   */
  readonly fields: NoticeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NoticeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Notice$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Notice$createdByArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notice model
   */
  interface NoticeFieldRefs {
    readonly id: FieldRef<"Notice", 'Int'>
    readonly title: FieldRef<"Notice", 'String'>
    readonly description: FieldRef<"Notice", 'String'>
    readonly type: FieldRef<"Notice", 'NoticeType'>
    readonly category: FieldRef<"Notice", 'String'>
    readonly isPinned: FieldRef<"Notice", 'Boolean'>
    readonly documentUrl: FieldRef<"Notice", 'String'>
    readonly publishDate: FieldRef<"Notice", 'DateTime'>
    readonly closingDate: FieldRef<"Notice", 'DateTime'>
    readonly createdById: FieldRef<"Notice", 'Int'>
    readonly createdAt: FieldRef<"Notice", 'DateTime'>
    readonly updatedAt: FieldRef<"Notice", 'DateTime'>
    readonly extraText: FieldRef<"Notice", 'String'>
    readonly extraNumber: FieldRef<"Notice", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Notice findUnique
   */
  export type NoticeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findUniqueOrThrow
   */
  export type NoticeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice findFirst
   */
  export type NoticeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findFirstOrThrow
   */
  export type NoticeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notice to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     */
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice findMany
   */
  export type NoticeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter, which Notices to fetch.
     */
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     */
    orderBy?: NoticeOrderByWithRelationInput | NoticeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notices.
     */
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     */
    skip?: number
    distinct?: NoticeScalarFieldEnum | NoticeScalarFieldEnum[]
  }

  /**
   * Notice create
   */
  export type NoticeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The data needed to create a Notice.
     */
    data: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
  }

  /**
   * Notice createMany
   */
  export type NoticeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notices.
     */
    data: NoticeCreateManyInput | NoticeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notice update
   */
  export type NoticeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The data needed to update a Notice.
     */
    data: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
    /**
     * Choose, which Notice to update.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice updateMany
   */
  export type NoticeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notices.
     */
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to update.
     */
    limit?: number
  }

  /**
   * Notice upsert
   */
  export type NoticeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * The filter to search for the Notice to update in case it exists.
     */
    where: NoticeWhereUniqueInput
    /**
     * In case the Notice found by the `where` argument doesn't exist, create a new Notice with this data.
     */
    create: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
    /**
     * In case the Notice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
  }

  /**
   * Notice delete
   */
  export type NoticeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
    /**
     * Filter which Notice to delete.
     */
    where: NoticeWhereUniqueInput
  }

  /**
   * Notice deleteMany
   */
  export type NoticeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notices to delete
     */
    where?: NoticeWhereInput
    /**
     * Limit how many Notices to delete.
     */
    limit?: number
  }

  /**
   * Notice.createdBy
   */
  export type Notice$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Notice without action
   */
  export type NoticeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notice
     */
    select?: NoticeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notice
     */
    omit?: NoticeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NoticeInclude<ExtArgs> | null
  }


  /**
   * Model ManagingDirector
   */

  export type AggregateManagingDirector = {
    _count: ManagingDirectorCountAggregateOutputType | null
    _avg: ManagingDirectorAvgAggregateOutputType | null
    _sum: ManagingDirectorSumAggregateOutputType | null
    _min: ManagingDirectorMinAggregateOutputType | null
    _max: ManagingDirectorMaxAggregateOutputType | null
  }

  export type ManagingDirectorAvgAggregateOutputType = {
    id: number | null
    extraNumber: number | null
  }

  export type ManagingDirectorSumAggregateOutputType = {
    id: number | null
    extraNumber: number | null
  }

  export type ManagingDirectorMinAggregateOutputType = {
    id: number | null
    name: string | null
    from: Date | null
    to: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type ManagingDirectorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    from: Date | null
    to: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type ManagingDirectorCountAggregateOutputType = {
    id: number
    name: number
    from: number
    to: number
    createdAt: number
    updatedAt: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type ManagingDirectorAvgAggregateInputType = {
    id?: true
    extraNumber?: true
  }

  export type ManagingDirectorSumAggregateInputType = {
    id?: true
    extraNumber?: true
  }

  export type ManagingDirectorMinAggregateInputType = {
    id?: true
    name?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type ManagingDirectorMaxAggregateInputType = {
    id?: true
    name?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type ManagingDirectorCountAggregateInputType = {
    id?: true
    name?: true
    from?: true
    to?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type ManagingDirectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagingDirector to aggregate.
     */
    where?: ManagingDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagingDirectors to fetch.
     */
    orderBy?: ManagingDirectorOrderByWithRelationInput | ManagingDirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagingDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagingDirectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagingDirectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManagingDirectors
    **/
    _count?: true | ManagingDirectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManagingDirectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManagingDirectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagingDirectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagingDirectorMaxAggregateInputType
  }

  export type GetManagingDirectorAggregateType<T extends ManagingDirectorAggregateArgs> = {
        [P in keyof T & keyof AggregateManagingDirector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManagingDirector[P]>
      : GetScalarType<T[P], AggregateManagingDirector[P]>
  }




  export type ManagingDirectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagingDirectorWhereInput
    orderBy?: ManagingDirectorOrderByWithAggregationInput | ManagingDirectorOrderByWithAggregationInput[]
    by: ManagingDirectorScalarFieldEnum[] | ManagingDirectorScalarFieldEnum
    having?: ManagingDirectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagingDirectorCountAggregateInputType | true
    _avg?: ManagingDirectorAvgAggregateInputType
    _sum?: ManagingDirectorSumAggregateInputType
    _min?: ManagingDirectorMinAggregateInputType
    _max?: ManagingDirectorMaxAggregateInputType
  }

  export type ManagingDirectorGroupByOutputType = {
    id: number
    name: string
    from: Date
    to: Date
    createdAt: Date
    updatedAt: Date
    extraText: string | null
    extraNumber: number | null
    _count: ManagingDirectorCountAggregateOutputType | null
    _avg: ManagingDirectorAvgAggregateOutputType | null
    _sum: ManagingDirectorSumAggregateOutputType | null
    _min: ManagingDirectorMinAggregateOutputType | null
    _max: ManagingDirectorMaxAggregateOutputType | null
  }

  type GetManagingDirectorGroupByPayload<T extends ManagingDirectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagingDirectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagingDirectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagingDirectorGroupByOutputType[P]>
            : GetScalarType<T[P], ManagingDirectorGroupByOutputType[P]>
        }
      >
    >


  export type ManagingDirectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }, ExtArgs["result"]["managingDirector"]>



  export type ManagingDirectorSelectScalar = {
    id?: boolean
    name?: boolean
    from?: boolean
    to?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type ManagingDirectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "from" | "to" | "createdAt" | "updatedAt" | "extraText" | "extraNumber", ExtArgs["result"]["managingDirector"]>

  export type $ManagingDirectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManagingDirector"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      from: Date
      to: Date
      createdAt: Date
      updatedAt: Date
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["managingDirector"]>
    composites: {}
  }

  type ManagingDirectorGetPayload<S extends boolean | null | undefined | ManagingDirectorDefaultArgs> = $Result.GetResult<Prisma.$ManagingDirectorPayload, S>

  type ManagingDirectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagingDirectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagingDirectorCountAggregateInputType | true
    }

  export interface ManagingDirectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManagingDirector'], meta: { name: 'ManagingDirector' } }
    /**
     * Find zero or one ManagingDirector that matches the filter.
     * @param {ManagingDirectorFindUniqueArgs} args - Arguments to find a ManagingDirector
     * @example
     * // Get one ManagingDirector
     * const managingDirector = await prisma.managingDirector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagingDirectorFindUniqueArgs>(args: SelectSubset<T, ManagingDirectorFindUniqueArgs<ExtArgs>>): Prisma__ManagingDirectorClient<$Result.GetResult<Prisma.$ManagingDirectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ManagingDirector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagingDirectorFindUniqueOrThrowArgs} args - Arguments to find a ManagingDirector
     * @example
     * // Get one ManagingDirector
     * const managingDirector = await prisma.managingDirector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagingDirectorFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagingDirectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagingDirectorClient<$Result.GetResult<Prisma.$ManagingDirectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManagingDirector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorFindFirstArgs} args - Arguments to find a ManagingDirector
     * @example
     * // Get one ManagingDirector
     * const managingDirector = await prisma.managingDirector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagingDirectorFindFirstArgs>(args?: SelectSubset<T, ManagingDirectorFindFirstArgs<ExtArgs>>): Prisma__ManagingDirectorClient<$Result.GetResult<Prisma.$ManagingDirectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManagingDirector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorFindFirstOrThrowArgs} args - Arguments to find a ManagingDirector
     * @example
     * // Get one ManagingDirector
     * const managingDirector = await prisma.managingDirector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagingDirectorFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagingDirectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagingDirectorClient<$Result.GetResult<Prisma.$ManagingDirectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ManagingDirectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManagingDirectors
     * const managingDirectors = await prisma.managingDirector.findMany()
     * 
     * // Get first 10 ManagingDirectors
     * const managingDirectors = await prisma.managingDirector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managingDirectorWithIdOnly = await prisma.managingDirector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManagingDirectorFindManyArgs>(args?: SelectSubset<T, ManagingDirectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagingDirectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ManagingDirector.
     * @param {ManagingDirectorCreateArgs} args - Arguments to create a ManagingDirector.
     * @example
     * // Create one ManagingDirector
     * const ManagingDirector = await prisma.managingDirector.create({
     *   data: {
     *     // ... data to create a ManagingDirector
     *   }
     * })
     * 
     */
    create<T extends ManagingDirectorCreateArgs>(args: SelectSubset<T, ManagingDirectorCreateArgs<ExtArgs>>): Prisma__ManagingDirectorClient<$Result.GetResult<Prisma.$ManagingDirectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ManagingDirectors.
     * @param {ManagingDirectorCreateManyArgs} args - Arguments to create many ManagingDirectors.
     * @example
     * // Create many ManagingDirectors
     * const managingDirector = await prisma.managingDirector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagingDirectorCreateManyArgs>(args?: SelectSubset<T, ManagingDirectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ManagingDirector.
     * @param {ManagingDirectorDeleteArgs} args - Arguments to delete one ManagingDirector.
     * @example
     * // Delete one ManagingDirector
     * const ManagingDirector = await prisma.managingDirector.delete({
     *   where: {
     *     // ... filter to delete one ManagingDirector
     *   }
     * })
     * 
     */
    delete<T extends ManagingDirectorDeleteArgs>(args: SelectSubset<T, ManagingDirectorDeleteArgs<ExtArgs>>): Prisma__ManagingDirectorClient<$Result.GetResult<Prisma.$ManagingDirectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ManagingDirector.
     * @param {ManagingDirectorUpdateArgs} args - Arguments to update one ManagingDirector.
     * @example
     * // Update one ManagingDirector
     * const managingDirector = await prisma.managingDirector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagingDirectorUpdateArgs>(args: SelectSubset<T, ManagingDirectorUpdateArgs<ExtArgs>>): Prisma__ManagingDirectorClient<$Result.GetResult<Prisma.$ManagingDirectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ManagingDirectors.
     * @param {ManagingDirectorDeleteManyArgs} args - Arguments to filter ManagingDirectors to delete.
     * @example
     * // Delete a few ManagingDirectors
     * const { count } = await prisma.managingDirector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagingDirectorDeleteManyArgs>(args?: SelectSubset<T, ManagingDirectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagingDirectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManagingDirectors
     * const managingDirector = await prisma.managingDirector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagingDirectorUpdateManyArgs>(args: SelectSubset<T, ManagingDirectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ManagingDirector.
     * @param {ManagingDirectorUpsertArgs} args - Arguments to update or create a ManagingDirector.
     * @example
     * // Update or create a ManagingDirector
     * const managingDirector = await prisma.managingDirector.upsert({
     *   create: {
     *     // ... data to create a ManagingDirector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManagingDirector we want to update
     *   }
     * })
     */
    upsert<T extends ManagingDirectorUpsertArgs>(args: SelectSubset<T, ManagingDirectorUpsertArgs<ExtArgs>>): Prisma__ManagingDirectorClient<$Result.GetResult<Prisma.$ManagingDirectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ManagingDirectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorCountArgs} args - Arguments to filter ManagingDirectors to count.
     * @example
     * // Count the number of ManagingDirectors
     * const count = await prisma.managingDirector.count({
     *   where: {
     *     // ... the filter for the ManagingDirectors we want to count
     *   }
     * })
    **/
    count<T extends ManagingDirectorCountArgs>(
      args?: Subset<T, ManagingDirectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagingDirectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManagingDirector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManagingDirectorAggregateArgs>(args: Subset<T, ManagingDirectorAggregateArgs>): Prisma.PrismaPromise<GetManagingDirectorAggregateType<T>>

    /**
     * Group by ManagingDirector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorGroupByArgs} args - Group by arguments.
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
      T extends ManagingDirectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagingDirectorGroupByArgs['orderBy'] }
        : { orderBy?: ManagingDirectorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManagingDirectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagingDirectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManagingDirector model
   */
  readonly fields: ManagingDirectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManagingDirector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagingDirectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ManagingDirector model
   */
  interface ManagingDirectorFieldRefs {
    readonly id: FieldRef<"ManagingDirector", 'Int'>
    readonly name: FieldRef<"ManagingDirector", 'String'>
    readonly from: FieldRef<"ManagingDirector", 'DateTime'>
    readonly to: FieldRef<"ManagingDirector", 'DateTime'>
    readonly createdAt: FieldRef<"ManagingDirector", 'DateTime'>
    readonly updatedAt: FieldRef<"ManagingDirector", 'DateTime'>
    readonly extraText: FieldRef<"ManagingDirector", 'String'>
    readonly extraNumber: FieldRef<"ManagingDirector", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ManagingDirector findUnique
   */
  export type ManagingDirectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirector
     */
    select?: ManagingDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirector
     */
    omit?: ManagingDirectorOmit<ExtArgs> | null
    /**
     * Filter, which ManagingDirector to fetch.
     */
    where: ManagingDirectorWhereUniqueInput
  }

  /**
   * ManagingDirector findUniqueOrThrow
   */
  export type ManagingDirectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirector
     */
    select?: ManagingDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirector
     */
    omit?: ManagingDirectorOmit<ExtArgs> | null
    /**
     * Filter, which ManagingDirector to fetch.
     */
    where: ManagingDirectorWhereUniqueInput
  }

  /**
   * ManagingDirector findFirst
   */
  export type ManagingDirectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirector
     */
    select?: ManagingDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirector
     */
    omit?: ManagingDirectorOmit<ExtArgs> | null
    /**
     * Filter, which ManagingDirector to fetch.
     */
    where?: ManagingDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagingDirectors to fetch.
     */
    orderBy?: ManagingDirectorOrderByWithRelationInput | ManagingDirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagingDirectors.
     */
    cursor?: ManagingDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagingDirectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagingDirectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagingDirectors.
     */
    distinct?: ManagingDirectorScalarFieldEnum | ManagingDirectorScalarFieldEnum[]
  }

  /**
   * ManagingDirector findFirstOrThrow
   */
  export type ManagingDirectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirector
     */
    select?: ManagingDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirector
     */
    omit?: ManagingDirectorOmit<ExtArgs> | null
    /**
     * Filter, which ManagingDirector to fetch.
     */
    where?: ManagingDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagingDirectors to fetch.
     */
    orderBy?: ManagingDirectorOrderByWithRelationInput | ManagingDirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagingDirectors.
     */
    cursor?: ManagingDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagingDirectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagingDirectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagingDirectors.
     */
    distinct?: ManagingDirectorScalarFieldEnum | ManagingDirectorScalarFieldEnum[]
  }

  /**
   * ManagingDirector findMany
   */
  export type ManagingDirectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirector
     */
    select?: ManagingDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirector
     */
    omit?: ManagingDirectorOmit<ExtArgs> | null
    /**
     * Filter, which ManagingDirectors to fetch.
     */
    where?: ManagingDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagingDirectors to fetch.
     */
    orderBy?: ManagingDirectorOrderByWithRelationInput | ManagingDirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManagingDirectors.
     */
    cursor?: ManagingDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagingDirectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagingDirectors.
     */
    skip?: number
    distinct?: ManagingDirectorScalarFieldEnum | ManagingDirectorScalarFieldEnum[]
  }

  /**
   * ManagingDirector create
   */
  export type ManagingDirectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirector
     */
    select?: ManagingDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirector
     */
    omit?: ManagingDirectorOmit<ExtArgs> | null
    /**
     * The data needed to create a ManagingDirector.
     */
    data: XOR<ManagingDirectorCreateInput, ManagingDirectorUncheckedCreateInput>
  }

  /**
   * ManagingDirector createMany
   */
  export type ManagingDirectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManagingDirectors.
     */
    data: ManagingDirectorCreateManyInput | ManagingDirectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManagingDirector update
   */
  export type ManagingDirectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirector
     */
    select?: ManagingDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirector
     */
    omit?: ManagingDirectorOmit<ExtArgs> | null
    /**
     * The data needed to update a ManagingDirector.
     */
    data: XOR<ManagingDirectorUpdateInput, ManagingDirectorUncheckedUpdateInput>
    /**
     * Choose, which ManagingDirector to update.
     */
    where: ManagingDirectorWhereUniqueInput
  }

  /**
   * ManagingDirector updateMany
   */
  export type ManagingDirectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManagingDirectors.
     */
    data: XOR<ManagingDirectorUpdateManyMutationInput, ManagingDirectorUncheckedUpdateManyInput>
    /**
     * Filter which ManagingDirectors to update
     */
    where?: ManagingDirectorWhereInput
    /**
     * Limit how many ManagingDirectors to update.
     */
    limit?: number
  }

  /**
   * ManagingDirector upsert
   */
  export type ManagingDirectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirector
     */
    select?: ManagingDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirector
     */
    omit?: ManagingDirectorOmit<ExtArgs> | null
    /**
     * The filter to search for the ManagingDirector to update in case it exists.
     */
    where: ManagingDirectorWhereUniqueInput
    /**
     * In case the ManagingDirector found by the `where` argument doesn't exist, create a new ManagingDirector with this data.
     */
    create: XOR<ManagingDirectorCreateInput, ManagingDirectorUncheckedCreateInput>
    /**
     * In case the ManagingDirector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagingDirectorUpdateInput, ManagingDirectorUncheckedUpdateInput>
  }

  /**
   * ManagingDirector delete
   */
  export type ManagingDirectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirector
     */
    select?: ManagingDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirector
     */
    omit?: ManagingDirectorOmit<ExtArgs> | null
    /**
     * Filter which ManagingDirector to delete.
     */
    where: ManagingDirectorWhereUniqueInput
  }

  /**
   * ManagingDirector deleteMany
   */
  export type ManagingDirectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagingDirectors to delete
     */
    where?: ManagingDirectorWhereInput
    /**
     * Limit how many ManagingDirectors to delete.
     */
    limit?: number
  }

  /**
   * ManagingDirector without action
   */
  export type ManagingDirectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirector
     */
    select?: ManagingDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirector
     */
    omit?: ManagingDirectorOmit<ExtArgs> | null
  }


  /**
   * Model BoardDirector
   */

  export type AggregateBoardDirector = {
    _count: BoardDirectorCountAggregateOutputType | null
    _avg: BoardDirectorAvgAggregateOutputType | null
    _sum: BoardDirectorSumAggregateOutputType | null
    _min: BoardDirectorMinAggregateOutputType | null
    _max: BoardDirectorMaxAggregateOutputType | null
  }

  export type BoardDirectorAvgAggregateOutputType = {
    id: number | null
    extraNumber: number | null
  }

  export type BoardDirectorSumAggregateOutputType = {
    id: number | null
    extraNumber: number | null
  }

  export type BoardDirectorMinAggregateOutputType = {
    id: number | null
    name: string | null
    designation: string | null
    since: string | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type BoardDirectorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    designation: string | null
    since: string | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type BoardDirectorCountAggregateOutputType = {
    id: number
    name: number
    designation: number
    since: number
    createdAt: number
    updatedAt: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type BoardDirectorAvgAggregateInputType = {
    id?: true
    extraNumber?: true
  }

  export type BoardDirectorSumAggregateInputType = {
    id?: true
    extraNumber?: true
  }

  export type BoardDirectorMinAggregateInputType = {
    id?: true
    name?: true
    designation?: true
    since?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type BoardDirectorMaxAggregateInputType = {
    id?: true
    name?: true
    designation?: true
    since?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type BoardDirectorCountAggregateInputType = {
    id?: true
    name?: true
    designation?: true
    since?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type BoardDirectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardDirector to aggregate.
     */
    where?: BoardDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardDirectors to fetch.
     */
    orderBy?: BoardDirectorOrderByWithRelationInput | BoardDirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BoardDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardDirectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardDirectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardDirectors
    **/
    _count?: true | BoardDirectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardDirectorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardDirectorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardDirectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardDirectorMaxAggregateInputType
  }

  export type GetBoardDirectorAggregateType<T extends BoardDirectorAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardDirector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardDirector[P]>
      : GetScalarType<T[P], AggregateBoardDirector[P]>
  }




  export type BoardDirectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BoardDirectorWhereInput
    orderBy?: BoardDirectorOrderByWithAggregationInput | BoardDirectorOrderByWithAggregationInput[]
    by: BoardDirectorScalarFieldEnum[] | BoardDirectorScalarFieldEnum
    having?: BoardDirectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardDirectorCountAggregateInputType | true
    _avg?: BoardDirectorAvgAggregateInputType
    _sum?: BoardDirectorSumAggregateInputType
    _min?: BoardDirectorMinAggregateInputType
    _max?: BoardDirectorMaxAggregateInputType
  }

  export type BoardDirectorGroupByOutputType = {
    id: number
    name: string
    designation: string
    since: string
    createdAt: Date
    updatedAt: Date
    extraText: string | null
    extraNumber: number | null
    _count: BoardDirectorCountAggregateOutputType | null
    _avg: BoardDirectorAvgAggregateOutputType | null
    _sum: BoardDirectorSumAggregateOutputType | null
    _min: BoardDirectorMinAggregateOutputType | null
    _max: BoardDirectorMaxAggregateOutputType | null
  }

  type GetBoardDirectorGroupByPayload<T extends BoardDirectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BoardDirectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardDirectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardDirectorGroupByOutputType[P]>
            : GetScalarType<T[P], BoardDirectorGroupByOutputType[P]>
        }
      >
    >


  export type BoardDirectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    designation?: boolean
    since?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }, ExtArgs["result"]["boardDirector"]>



  export type BoardDirectorSelectScalar = {
    id?: boolean
    name?: boolean
    designation?: boolean
    since?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type BoardDirectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "designation" | "since" | "createdAt" | "updatedAt" | "extraText" | "extraNumber", ExtArgs["result"]["boardDirector"]>

  export type $BoardDirectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BoardDirector"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      designation: string
      since: string
      createdAt: Date
      updatedAt: Date
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["boardDirector"]>
    composites: {}
  }

  type BoardDirectorGetPayload<S extends boolean | null | undefined | BoardDirectorDefaultArgs> = $Result.GetResult<Prisma.$BoardDirectorPayload, S>

  type BoardDirectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BoardDirectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BoardDirectorCountAggregateInputType | true
    }

  export interface BoardDirectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BoardDirector'], meta: { name: 'BoardDirector' } }
    /**
     * Find zero or one BoardDirector that matches the filter.
     * @param {BoardDirectorFindUniqueArgs} args - Arguments to find a BoardDirector
     * @example
     * // Get one BoardDirector
     * const boardDirector = await prisma.boardDirector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BoardDirectorFindUniqueArgs>(args: SelectSubset<T, BoardDirectorFindUniqueArgs<ExtArgs>>): Prisma__BoardDirectorClient<$Result.GetResult<Prisma.$BoardDirectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BoardDirector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BoardDirectorFindUniqueOrThrowArgs} args - Arguments to find a BoardDirector
     * @example
     * // Get one BoardDirector
     * const boardDirector = await prisma.boardDirector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BoardDirectorFindUniqueOrThrowArgs>(args: SelectSubset<T, BoardDirectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BoardDirectorClient<$Result.GetResult<Prisma.$BoardDirectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoardDirector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardDirectorFindFirstArgs} args - Arguments to find a BoardDirector
     * @example
     * // Get one BoardDirector
     * const boardDirector = await prisma.boardDirector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BoardDirectorFindFirstArgs>(args?: SelectSubset<T, BoardDirectorFindFirstArgs<ExtArgs>>): Prisma__BoardDirectorClient<$Result.GetResult<Prisma.$BoardDirectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BoardDirector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardDirectorFindFirstOrThrowArgs} args - Arguments to find a BoardDirector
     * @example
     * // Get one BoardDirector
     * const boardDirector = await prisma.boardDirector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BoardDirectorFindFirstOrThrowArgs>(args?: SelectSubset<T, BoardDirectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__BoardDirectorClient<$Result.GetResult<Prisma.$BoardDirectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BoardDirectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardDirectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardDirectors
     * const boardDirectors = await prisma.boardDirector.findMany()
     * 
     * // Get first 10 BoardDirectors
     * const boardDirectors = await prisma.boardDirector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardDirectorWithIdOnly = await prisma.boardDirector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BoardDirectorFindManyArgs>(args?: SelectSubset<T, BoardDirectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BoardDirectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BoardDirector.
     * @param {BoardDirectorCreateArgs} args - Arguments to create a BoardDirector.
     * @example
     * // Create one BoardDirector
     * const BoardDirector = await prisma.boardDirector.create({
     *   data: {
     *     // ... data to create a BoardDirector
     *   }
     * })
     * 
     */
    create<T extends BoardDirectorCreateArgs>(args: SelectSubset<T, BoardDirectorCreateArgs<ExtArgs>>): Prisma__BoardDirectorClient<$Result.GetResult<Prisma.$BoardDirectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BoardDirectors.
     * @param {BoardDirectorCreateManyArgs} args - Arguments to create many BoardDirectors.
     * @example
     * // Create many BoardDirectors
     * const boardDirector = await prisma.boardDirector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BoardDirectorCreateManyArgs>(args?: SelectSubset<T, BoardDirectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BoardDirector.
     * @param {BoardDirectorDeleteArgs} args - Arguments to delete one BoardDirector.
     * @example
     * // Delete one BoardDirector
     * const BoardDirector = await prisma.boardDirector.delete({
     *   where: {
     *     // ... filter to delete one BoardDirector
     *   }
     * })
     * 
     */
    delete<T extends BoardDirectorDeleteArgs>(args: SelectSubset<T, BoardDirectorDeleteArgs<ExtArgs>>): Prisma__BoardDirectorClient<$Result.GetResult<Prisma.$BoardDirectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BoardDirector.
     * @param {BoardDirectorUpdateArgs} args - Arguments to update one BoardDirector.
     * @example
     * // Update one BoardDirector
     * const boardDirector = await prisma.boardDirector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BoardDirectorUpdateArgs>(args: SelectSubset<T, BoardDirectorUpdateArgs<ExtArgs>>): Prisma__BoardDirectorClient<$Result.GetResult<Prisma.$BoardDirectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BoardDirectors.
     * @param {BoardDirectorDeleteManyArgs} args - Arguments to filter BoardDirectors to delete.
     * @example
     * // Delete a few BoardDirectors
     * const { count } = await prisma.boardDirector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BoardDirectorDeleteManyArgs>(args?: SelectSubset<T, BoardDirectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardDirectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardDirectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardDirectors
     * const boardDirector = await prisma.boardDirector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BoardDirectorUpdateManyArgs>(args: SelectSubset<T, BoardDirectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardDirector.
     * @param {BoardDirectorUpsertArgs} args - Arguments to update or create a BoardDirector.
     * @example
     * // Update or create a BoardDirector
     * const boardDirector = await prisma.boardDirector.upsert({
     *   create: {
     *     // ... data to create a BoardDirector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardDirector we want to update
     *   }
     * })
     */
    upsert<T extends BoardDirectorUpsertArgs>(args: SelectSubset<T, BoardDirectorUpsertArgs<ExtArgs>>): Prisma__BoardDirectorClient<$Result.GetResult<Prisma.$BoardDirectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BoardDirectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardDirectorCountArgs} args - Arguments to filter BoardDirectors to count.
     * @example
     * // Count the number of BoardDirectors
     * const count = await prisma.boardDirector.count({
     *   where: {
     *     // ... the filter for the BoardDirectors we want to count
     *   }
     * })
    **/
    count<T extends BoardDirectorCountArgs>(
      args?: Subset<T, BoardDirectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardDirectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardDirector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardDirectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardDirectorAggregateArgs>(args: Subset<T, BoardDirectorAggregateArgs>): Prisma.PrismaPromise<GetBoardDirectorAggregateType<T>>

    /**
     * Group by BoardDirector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardDirectorGroupByArgs} args - Group by arguments.
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
      T extends BoardDirectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardDirectorGroupByArgs['orderBy'] }
        : { orderBy?: BoardDirectorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BoardDirectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardDirectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BoardDirector model
   */
  readonly fields: BoardDirectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardDirector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BoardDirectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BoardDirector model
   */
  interface BoardDirectorFieldRefs {
    readonly id: FieldRef<"BoardDirector", 'Int'>
    readonly name: FieldRef<"BoardDirector", 'String'>
    readonly designation: FieldRef<"BoardDirector", 'String'>
    readonly since: FieldRef<"BoardDirector", 'String'>
    readonly createdAt: FieldRef<"BoardDirector", 'DateTime'>
    readonly updatedAt: FieldRef<"BoardDirector", 'DateTime'>
    readonly extraText: FieldRef<"BoardDirector", 'String'>
    readonly extraNumber: FieldRef<"BoardDirector", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * BoardDirector findUnique
   */
  export type BoardDirectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardDirector
     */
    select?: BoardDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoardDirector
     */
    omit?: BoardDirectorOmit<ExtArgs> | null
    /**
     * Filter, which BoardDirector to fetch.
     */
    where: BoardDirectorWhereUniqueInput
  }

  /**
   * BoardDirector findUniqueOrThrow
   */
  export type BoardDirectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardDirector
     */
    select?: BoardDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoardDirector
     */
    omit?: BoardDirectorOmit<ExtArgs> | null
    /**
     * Filter, which BoardDirector to fetch.
     */
    where: BoardDirectorWhereUniqueInput
  }

  /**
   * BoardDirector findFirst
   */
  export type BoardDirectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardDirector
     */
    select?: BoardDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoardDirector
     */
    omit?: BoardDirectorOmit<ExtArgs> | null
    /**
     * Filter, which BoardDirector to fetch.
     */
    where?: BoardDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardDirectors to fetch.
     */
    orderBy?: BoardDirectorOrderByWithRelationInput | BoardDirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardDirectors.
     */
    cursor?: BoardDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardDirectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardDirectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardDirectors.
     */
    distinct?: BoardDirectorScalarFieldEnum | BoardDirectorScalarFieldEnum[]
  }

  /**
   * BoardDirector findFirstOrThrow
   */
  export type BoardDirectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardDirector
     */
    select?: BoardDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoardDirector
     */
    omit?: BoardDirectorOmit<ExtArgs> | null
    /**
     * Filter, which BoardDirector to fetch.
     */
    where?: BoardDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardDirectors to fetch.
     */
    orderBy?: BoardDirectorOrderByWithRelationInput | BoardDirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardDirectors.
     */
    cursor?: BoardDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardDirectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardDirectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardDirectors.
     */
    distinct?: BoardDirectorScalarFieldEnum | BoardDirectorScalarFieldEnum[]
  }

  /**
   * BoardDirector findMany
   */
  export type BoardDirectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardDirector
     */
    select?: BoardDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoardDirector
     */
    omit?: BoardDirectorOmit<ExtArgs> | null
    /**
     * Filter, which BoardDirectors to fetch.
     */
    where?: BoardDirectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardDirectors to fetch.
     */
    orderBy?: BoardDirectorOrderByWithRelationInput | BoardDirectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardDirectors.
     */
    cursor?: BoardDirectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardDirectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardDirectors.
     */
    skip?: number
    distinct?: BoardDirectorScalarFieldEnum | BoardDirectorScalarFieldEnum[]
  }

  /**
   * BoardDirector create
   */
  export type BoardDirectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardDirector
     */
    select?: BoardDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoardDirector
     */
    omit?: BoardDirectorOmit<ExtArgs> | null
    /**
     * The data needed to create a BoardDirector.
     */
    data: XOR<BoardDirectorCreateInput, BoardDirectorUncheckedCreateInput>
  }

  /**
   * BoardDirector createMany
   */
  export type BoardDirectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BoardDirectors.
     */
    data: BoardDirectorCreateManyInput | BoardDirectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BoardDirector update
   */
  export type BoardDirectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardDirector
     */
    select?: BoardDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoardDirector
     */
    omit?: BoardDirectorOmit<ExtArgs> | null
    /**
     * The data needed to update a BoardDirector.
     */
    data: XOR<BoardDirectorUpdateInput, BoardDirectorUncheckedUpdateInput>
    /**
     * Choose, which BoardDirector to update.
     */
    where: BoardDirectorWhereUniqueInput
  }

  /**
   * BoardDirector updateMany
   */
  export type BoardDirectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BoardDirectors.
     */
    data: XOR<BoardDirectorUpdateManyMutationInput, BoardDirectorUncheckedUpdateManyInput>
    /**
     * Filter which BoardDirectors to update
     */
    where?: BoardDirectorWhereInput
    /**
     * Limit how many BoardDirectors to update.
     */
    limit?: number
  }

  /**
   * BoardDirector upsert
   */
  export type BoardDirectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardDirector
     */
    select?: BoardDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoardDirector
     */
    omit?: BoardDirectorOmit<ExtArgs> | null
    /**
     * The filter to search for the BoardDirector to update in case it exists.
     */
    where: BoardDirectorWhereUniqueInput
    /**
     * In case the BoardDirector found by the `where` argument doesn't exist, create a new BoardDirector with this data.
     */
    create: XOR<BoardDirectorCreateInput, BoardDirectorUncheckedCreateInput>
    /**
     * In case the BoardDirector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BoardDirectorUpdateInput, BoardDirectorUncheckedUpdateInput>
  }

  /**
   * BoardDirector delete
   */
  export type BoardDirectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardDirector
     */
    select?: BoardDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoardDirector
     */
    omit?: BoardDirectorOmit<ExtArgs> | null
    /**
     * Filter which BoardDirector to delete.
     */
    where: BoardDirectorWhereUniqueInput
  }

  /**
   * BoardDirector deleteMany
   */
  export type BoardDirectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BoardDirectors to delete
     */
    where?: BoardDirectorWhereInput
    /**
     * Limit how many BoardDirectors to delete.
     */
    limit?: number
  }

  /**
   * BoardDirector without action
   */
  export type BoardDirectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BoardDirector
     */
    select?: BoardDirectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BoardDirector
     */
    omit?: BoardDirectorOmit<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    extraNumber: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    extraNumber: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    name: string | null
    designation: string | null
    type: $Enums.EmployeeType | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    designation: string | null
    type: $Enums.EmployeeType | null
    department: string | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    designation: number
    type: number
    department: number
    createdAt: number
    updatedAt: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    extraNumber?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    extraNumber?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    designation?: true
    type?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    designation?: true
    type?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    designation?: true
    type?: true
    department?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    name: string
    designation: string
    type: $Enums.EmployeeType
    department: string
    createdAt: Date
    updatedAt: Date
    extraText: string | null
    extraNumber: number | null
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    designation?: boolean
    type?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    designation?: boolean
    type?: boolean
    department?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "designation" | "type" | "department" | "createdAt" | "updatedAt" | "extraText" | "extraNumber", ExtArgs["result"]["employee"]>

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      designation: string
      type: $Enums.EmployeeType
      department: string
      createdAt: Date
      updatedAt: Date
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly designation: FieldRef<"Employee", 'String'>
    readonly type: FieldRef<"Employee", 'EmployeeType'>
    readonly department: FieldRef<"Employee", 'String'>
    readonly createdAt: FieldRef<"Employee", 'DateTime'>
    readonly updatedAt: FieldRef<"Employee", 'DateTime'>
    readonly extraText: FieldRef<"Employee", 'String'>
    readonly extraNumber: FieldRef<"Employee", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
  }


  /**
   * Model ManagingDirectorMessage
   */

  export type AggregateManagingDirectorMessage = {
    _count: ManagingDirectorMessageCountAggregateOutputType | null
    _avg: ManagingDirectorMessageAvgAggregateOutputType | null
    _sum: ManagingDirectorMessageSumAggregateOutputType | null
    _min: ManagingDirectorMessageMinAggregateOutputType | null
    _max: ManagingDirectorMessageMaxAggregateOutputType | null
  }

  export type ManagingDirectorMessageAvgAggregateOutputType = {
    id: number | null
    updatedById: number | null
    extraNumber: number | null
  }

  export type ManagingDirectorMessageSumAggregateOutputType = {
    id: number | null
    updatedById: number | null
    extraNumber: number | null
  }

  export type ManagingDirectorMessageMinAggregateOutputType = {
    id: number | null
    name: string | null
    designation: string | null
    photoUrl: string | null
    quote: string | null
    welcomeNote: string | null
    qualityNote: string | null
    collaboration: string | null
    movingForward: string | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type ManagingDirectorMessageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    designation: string | null
    photoUrl: string | null
    quote: string | null
    welcomeNote: string | null
    qualityNote: string | null
    collaboration: string | null
    movingForward: string | null
    updatedById: number | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type ManagingDirectorMessageCountAggregateOutputType = {
    id: number
    name: number
    designation: number
    photoUrl: number
    quote: number
    welcomeNote: number
    qualityNote: number
    collaboration: number
    movingForward: number
    updatedById: number
    createdAt: number
    updatedAt: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type ManagingDirectorMessageAvgAggregateInputType = {
    id?: true
    updatedById?: true
    extraNumber?: true
  }

  export type ManagingDirectorMessageSumAggregateInputType = {
    id?: true
    updatedById?: true
    extraNumber?: true
  }

  export type ManagingDirectorMessageMinAggregateInputType = {
    id?: true
    name?: true
    designation?: true
    photoUrl?: true
    quote?: true
    welcomeNote?: true
    qualityNote?: true
    collaboration?: true
    movingForward?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type ManagingDirectorMessageMaxAggregateInputType = {
    id?: true
    name?: true
    designation?: true
    photoUrl?: true
    quote?: true
    welcomeNote?: true
    qualityNote?: true
    collaboration?: true
    movingForward?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type ManagingDirectorMessageCountAggregateInputType = {
    id?: true
    name?: true
    designation?: true
    photoUrl?: true
    quote?: true
    welcomeNote?: true
    qualityNote?: true
    collaboration?: true
    movingForward?: true
    updatedById?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type ManagingDirectorMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagingDirectorMessage to aggregate.
     */
    where?: ManagingDirectorMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagingDirectorMessages to fetch.
     */
    orderBy?: ManagingDirectorMessageOrderByWithRelationInput | ManagingDirectorMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ManagingDirectorMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagingDirectorMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagingDirectorMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ManagingDirectorMessages
    **/
    _count?: true | ManagingDirectorMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ManagingDirectorMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ManagingDirectorMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ManagingDirectorMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ManagingDirectorMessageMaxAggregateInputType
  }

  export type GetManagingDirectorMessageAggregateType<T extends ManagingDirectorMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateManagingDirectorMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateManagingDirectorMessage[P]>
      : GetScalarType<T[P], AggregateManagingDirectorMessage[P]>
  }




  export type ManagingDirectorMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ManagingDirectorMessageWhereInput
    orderBy?: ManagingDirectorMessageOrderByWithAggregationInput | ManagingDirectorMessageOrderByWithAggregationInput[]
    by: ManagingDirectorMessageScalarFieldEnum[] | ManagingDirectorMessageScalarFieldEnum
    having?: ManagingDirectorMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ManagingDirectorMessageCountAggregateInputType | true
    _avg?: ManagingDirectorMessageAvgAggregateInputType
    _sum?: ManagingDirectorMessageSumAggregateInputType
    _min?: ManagingDirectorMessageMinAggregateInputType
    _max?: ManagingDirectorMessageMaxAggregateInputType
  }

  export type ManagingDirectorMessageGroupByOutputType = {
    id: number
    name: string
    designation: string
    photoUrl: string | null
    quote: string | null
    welcomeNote: string
    qualityNote: string | null
    collaboration: string | null
    movingForward: string | null
    updatedById: number | null
    createdAt: Date
    updatedAt: Date
    extraText: string | null
    extraNumber: number | null
    _count: ManagingDirectorMessageCountAggregateOutputType | null
    _avg: ManagingDirectorMessageAvgAggregateOutputType | null
    _sum: ManagingDirectorMessageSumAggregateOutputType | null
    _min: ManagingDirectorMessageMinAggregateOutputType | null
    _max: ManagingDirectorMessageMaxAggregateOutputType | null
  }

  type GetManagingDirectorMessageGroupByPayload<T extends ManagingDirectorMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ManagingDirectorMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ManagingDirectorMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ManagingDirectorMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ManagingDirectorMessageGroupByOutputType[P]>
        }
      >
    >


  export type ManagingDirectorMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    designation?: boolean
    photoUrl?: boolean
    quote?: boolean
    welcomeNote?: boolean
    qualityNote?: boolean
    collaboration?: boolean
    movingForward?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
    updatedBy?: boolean | ManagingDirectorMessage$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["managingDirectorMessage"]>



  export type ManagingDirectorMessageSelectScalar = {
    id?: boolean
    name?: boolean
    designation?: boolean
    photoUrl?: boolean
    quote?: boolean
    welcomeNote?: boolean
    qualityNote?: boolean
    collaboration?: boolean
    movingForward?: boolean
    updatedById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type ManagingDirectorMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "designation" | "photoUrl" | "quote" | "welcomeNote" | "qualityNote" | "collaboration" | "movingForward" | "updatedById" | "createdAt" | "updatedAt" | "extraText" | "extraNumber", ExtArgs["result"]["managingDirectorMessage"]>
  export type ManagingDirectorMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updatedBy?: boolean | ManagingDirectorMessage$updatedByArgs<ExtArgs>
  }

  export type $ManagingDirectorMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ManagingDirectorMessage"
    objects: {
      updatedBy: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      designation: string
      photoUrl: string | null
      quote: string | null
      welcomeNote: string
      qualityNote: string | null
      collaboration: string | null
      movingForward: string | null
      updatedById: number | null
      createdAt: Date
      updatedAt: Date
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["managingDirectorMessage"]>
    composites: {}
  }

  type ManagingDirectorMessageGetPayload<S extends boolean | null | undefined | ManagingDirectorMessageDefaultArgs> = $Result.GetResult<Prisma.$ManagingDirectorMessagePayload, S>

  type ManagingDirectorMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ManagingDirectorMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ManagingDirectorMessageCountAggregateInputType | true
    }

  export interface ManagingDirectorMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ManagingDirectorMessage'], meta: { name: 'ManagingDirectorMessage' } }
    /**
     * Find zero or one ManagingDirectorMessage that matches the filter.
     * @param {ManagingDirectorMessageFindUniqueArgs} args - Arguments to find a ManagingDirectorMessage
     * @example
     * // Get one ManagingDirectorMessage
     * const managingDirectorMessage = await prisma.managingDirectorMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ManagingDirectorMessageFindUniqueArgs>(args: SelectSubset<T, ManagingDirectorMessageFindUniqueArgs<ExtArgs>>): Prisma__ManagingDirectorMessageClient<$Result.GetResult<Prisma.$ManagingDirectorMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ManagingDirectorMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ManagingDirectorMessageFindUniqueOrThrowArgs} args - Arguments to find a ManagingDirectorMessage
     * @example
     * // Get one ManagingDirectorMessage
     * const managingDirectorMessage = await prisma.managingDirectorMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ManagingDirectorMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ManagingDirectorMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ManagingDirectorMessageClient<$Result.GetResult<Prisma.$ManagingDirectorMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManagingDirectorMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorMessageFindFirstArgs} args - Arguments to find a ManagingDirectorMessage
     * @example
     * // Get one ManagingDirectorMessage
     * const managingDirectorMessage = await prisma.managingDirectorMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ManagingDirectorMessageFindFirstArgs>(args?: SelectSubset<T, ManagingDirectorMessageFindFirstArgs<ExtArgs>>): Prisma__ManagingDirectorMessageClient<$Result.GetResult<Prisma.$ManagingDirectorMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ManagingDirectorMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorMessageFindFirstOrThrowArgs} args - Arguments to find a ManagingDirectorMessage
     * @example
     * // Get one ManagingDirectorMessage
     * const managingDirectorMessage = await prisma.managingDirectorMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ManagingDirectorMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ManagingDirectorMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ManagingDirectorMessageClient<$Result.GetResult<Prisma.$ManagingDirectorMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ManagingDirectorMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ManagingDirectorMessages
     * const managingDirectorMessages = await prisma.managingDirectorMessage.findMany()
     * 
     * // Get first 10 ManagingDirectorMessages
     * const managingDirectorMessages = await prisma.managingDirectorMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const managingDirectorMessageWithIdOnly = await prisma.managingDirectorMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ManagingDirectorMessageFindManyArgs>(args?: SelectSubset<T, ManagingDirectorMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ManagingDirectorMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ManagingDirectorMessage.
     * @param {ManagingDirectorMessageCreateArgs} args - Arguments to create a ManagingDirectorMessage.
     * @example
     * // Create one ManagingDirectorMessage
     * const ManagingDirectorMessage = await prisma.managingDirectorMessage.create({
     *   data: {
     *     // ... data to create a ManagingDirectorMessage
     *   }
     * })
     * 
     */
    create<T extends ManagingDirectorMessageCreateArgs>(args: SelectSubset<T, ManagingDirectorMessageCreateArgs<ExtArgs>>): Prisma__ManagingDirectorMessageClient<$Result.GetResult<Prisma.$ManagingDirectorMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ManagingDirectorMessages.
     * @param {ManagingDirectorMessageCreateManyArgs} args - Arguments to create many ManagingDirectorMessages.
     * @example
     * // Create many ManagingDirectorMessages
     * const managingDirectorMessage = await prisma.managingDirectorMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ManagingDirectorMessageCreateManyArgs>(args?: SelectSubset<T, ManagingDirectorMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ManagingDirectorMessage.
     * @param {ManagingDirectorMessageDeleteArgs} args - Arguments to delete one ManagingDirectorMessage.
     * @example
     * // Delete one ManagingDirectorMessage
     * const ManagingDirectorMessage = await prisma.managingDirectorMessage.delete({
     *   where: {
     *     // ... filter to delete one ManagingDirectorMessage
     *   }
     * })
     * 
     */
    delete<T extends ManagingDirectorMessageDeleteArgs>(args: SelectSubset<T, ManagingDirectorMessageDeleteArgs<ExtArgs>>): Prisma__ManagingDirectorMessageClient<$Result.GetResult<Prisma.$ManagingDirectorMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ManagingDirectorMessage.
     * @param {ManagingDirectorMessageUpdateArgs} args - Arguments to update one ManagingDirectorMessage.
     * @example
     * // Update one ManagingDirectorMessage
     * const managingDirectorMessage = await prisma.managingDirectorMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ManagingDirectorMessageUpdateArgs>(args: SelectSubset<T, ManagingDirectorMessageUpdateArgs<ExtArgs>>): Prisma__ManagingDirectorMessageClient<$Result.GetResult<Prisma.$ManagingDirectorMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ManagingDirectorMessages.
     * @param {ManagingDirectorMessageDeleteManyArgs} args - Arguments to filter ManagingDirectorMessages to delete.
     * @example
     * // Delete a few ManagingDirectorMessages
     * const { count } = await prisma.managingDirectorMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ManagingDirectorMessageDeleteManyArgs>(args?: SelectSubset<T, ManagingDirectorMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ManagingDirectorMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ManagingDirectorMessages
     * const managingDirectorMessage = await prisma.managingDirectorMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ManagingDirectorMessageUpdateManyArgs>(args: SelectSubset<T, ManagingDirectorMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ManagingDirectorMessage.
     * @param {ManagingDirectorMessageUpsertArgs} args - Arguments to update or create a ManagingDirectorMessage.
     * @example
     * // Update or create a ManagingDirectorMessage
     * const managingDirectorMessage = await prisma.managingDirectorMessage.upsert({
     *   create: {
     *     // ... data to create a ManagingDirectorMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ManagingDirectorMessage we want to update
     *   }
     * })
     */
    upsert<T extends ManagingDirectorMessageUpsertArgs>(args: SelectSubset<T, ManagingDirectorMessageUpsertArgs<ExtArgs>>): Prisma__ManagingDirectorMessageClient<$Result.GetResult<Prisma.$ManagingDirectorMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ManagingDirectorMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorMessageCountArgs} args - Arguments to filter ManagingDirectorMessages to count.
     * @example
     * // Count the number of ManagingDirectorMessages
     * const count = await prisma.managingDirectorMessage.count({
     *   where: {
     *     // ... the filter for the ManagingDirectorMessages we want to count
     *   }
     * })
    **/
    count<T extends ManagingDirectorMessageCountArgs>(
      args?: Subset<T, ManagingDirectorMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ManagingDirectorMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ManagingDirectorMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ManagingDirectorMessageAggregateArgs>(args: Subset<T, ManagingDirectorMessageAggregateArgs>): Prisma.PrismaPromise<GetManagingDirectorMessageAggregateType<T>>

    /**
     * Group by ManagingDirectorMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ManagingDirectorMessageGroupByArgs} args - Group by arguments.
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
      T extends ManagingDirectorMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ManagingDirectorMessageGroupByArgs['orderBy'] }
        : { orderBy?: ManagingDirectorMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ManagingDirectorMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetManagingDirectorMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ManagingDirectorMessage model
   */
  readonly fields: ManagingDirectorMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ManagingDirectorMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ManagingDirectorMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    updatedBy<T extends ManagingDirectorMessage$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, ManagingDirectorMessage$updatedByArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ManagingDirectorMessage model
   */
  interface ManagingDirectorMessageFieldRefs {
    readonly id: FieldRef<"ManagingDirectorMessage", 'Int'>
    readonly name: FieldRef<"ManagingDirectorMessage", 'String'>
    readonly designation: FieldRef<"ManagingDirectorMessage", 'String'>
    readonly photoUrl: FieldRef<"ManagingDirectorMessage", 'String'>
    readonly quote: FieldRef<"ManagingDirectorMessage", 'String'>
    readonly welcomeNote: FieldRef<"ManagingDirectorMessage", 'String'>
    readonly qualityNote: FieldRef<"ManagingDirectorMessage", 'String'>
    readonly collaboration: FieldRef<"ManagingDirectorMessage", 'String'>
    readonly movingForward: FieldRef<"ManagingDirectorMessage", 'String'>
    readonly updatedById: FieldRef<"ManagingDirectorMessage", 'Int'>
    readonly createdAt: FieldRef<"ManagingDirectorMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"ManagingDirectorMessage", 'DateTime'>
    readonly extraText: FieldRef<"ManagingDirectorMessage", 'String'>
    readonly extraNumber: FieldRef<"ManagingDirectorMessage", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ManagingDirectorMessage findUnique
   */
  export type ManagingDirectorMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirectorMessage
     */
    select?: ManagingDirectorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirectorMessage
     */
    omit?: ManagingDirectorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagingDirectorMessageInclude<ExtArgs> | null
    /**
     * Filter, which ManagingDirectorMessage to fetch.
     */
    where: ManagingDirectorMessageWhereUniqueInput
  }

  /**
   * ManagingDirectorMessage findUniqueOrThrow
   */
  export type ManagingDirectorMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirectorMessage
     */
    select?: ManagingDirectorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirectorMessage
     */
    omit?: ManagingDirectorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagingDirectorMessageInclude<ExtArgs> | null
    /**
     * Filter, which ManagingDirectorMessage to fetch.
     */
    where: ManagingDirectorMessageWhereUniqueInput
  }

  /**
   * ManagingDirectorMessage findFirst
   */
  export type ManagingDirectorMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirectorMessage
     */
    select?: ManagingDirectorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirectorMessage
     */
    omit?: ManagingDirectorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagingDirectorMessageInclude<ExtArgs> | null
    /**
     * Filter, which ManagingDirectorMessage to fetch.
     */
    where?: ManagingDirectorMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagingDirectorMessages to fetch.
     */
    orderBy?: ManagingDirectorMessageOrderByWithRelationInput | ManagingDirectorMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagingDirectorMessages.
     */
    cursor?: ManagingDirectorMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagingDirectorMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagingDirectorMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagingDirectorMessages.
     */
    distinct?: ManagingDirectorMessageScalarFieldEnum | ManagingDirectorMessageScalarFieldEnum[]
  }

  /**
   * ManagingDirectorMessage findFirstOrThrow
   */
  export type ManagingDirectorMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirectorMessage
     */
    select?: ManagingDirectorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirectorMessage
     */
    omit?: ManagingDirectorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagingDirectorMessageInclude<ExtArgs> | null
    /**
     * Filter, which ManagingDirectorMessage to fetch.
     */
    where?: ManagingDirectorMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagingDirectorMessages to fetch.
     */
    orderBy?: ManagingDirectorMessageOrderByWithRelationInput | ManagingDirectorMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ManagingDirectorMessages.
     */
    cursor?: ManagingDirectorMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagingDirectorMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagingDirectorMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ManagingDirectorMessages.
     */
    distinct?: ManagingDirectorMessageScalarFieldEnum | ManagingDirectorMessageScalarFieldEnum[]
  }

  /**
   * ManagingDirectorMessage findMany
   */
  export type ManagingDirectorMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirectorMessage
     */
    select?: ManagingDirectorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirectorMessage
     */
    omit?: ManagingDirectorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagingDirectorMessageInclude<ExtArgs> | null
    /**
     * Filter, which ManagingDirectorMessages to fetch.
     */
    where?: ManagingDirectorMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ManagingDirectorMessages to fetch.
     */
    orderBy?: ManagingDirectorMessageOrderByWithRelationInput | ManagingDirectorMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ManagingDirectorMessages.
     */
    cursor?: ManagingDirectorMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ManagingDirectorMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ManagingDirectorMessages.
     */
    skip?: number
    distinct?: ManagingDirectorMessageScalarFieldEnum | ManagingDirectorMessageScalarFieldEnum[]
  }

  /**
   * ManagingDirectorMessage create
   */
  export type ManagingDirectorMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirectorMessage
     */
    select?: ManagingDirectorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirectorMessage
     */
    omit?: ManagingDirectorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagingDirectorMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a ManagingDirectorMessage.
     */
    data: XOR<ManagingDirectorMessageCreateInput, ManagingDirectorMessageUncheckedCreateInput>
  }

  /**
   * ManagingDirectorMessage createMany
   */
  export type ManagingDirectorMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ManagingDirectorMessages.
     */
    data: ManagingDirectorMessageCreateManyInput | ManagingDirectorMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ManagingDirectorMessage update
   */
  export type ManagingDirectorMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirectorMessage
     */
    select?: ManagingDirectorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirectorMessage
     */
    omit?: ManagingDirectorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagingDirectorMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a ManagingDirectorMessage.
     */
    data: XOR<ManagingDirectorMessageUpdateInput, ManagingDirectorMessageUncheckedUpdateInput>
    /**
     * Choose, which ManagingDirectorMessage to update.
     */
    where: ManagingDirectorMessageWhereUniqueInput
  }

  /**
   * ManagingDirectorMessage updateMany
   */
  export type ManagingDirectorMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ManagingDirectorMessages.
     */
    data: XOR<ManagingDirectorMessageUpdateManyMutationInput, ManagingDirectorMessageUncheckedUpdateManyInput>
    /**
     * Filter which ManagingDirectorMessages to update
     */
    where?: ManagingDirectorMessageWhereInput
    /**
     * Limit how many ManagingDirectorMessages to update.
     */
    limit?: number
  }

  /**
   * ManagingDirectorMessage upsert
   */
  export type ManagingDirectorMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirectorMessage
     */
    select?: ManagingDirectorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirectorMessage
     */
    omit?: ManagingDirectorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagingDirectorMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the ManagingDirectorMessage to update in case it exists.
     */
    where: ManagingDirectorMessageWhereUniqueInput
    /**
     * In case the ManagingDirectorMessage found by the `where` argument doesn't exist, create a new ManagingDirectorMessage with this data.
     */
    create: XOR<ManagingDirectorMessageCreateInput, ManagingDirectorMessageUncheckedCreateInput>
    /**
     * In case the ManagingDirectorMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ManagingDirectorMessageUpdateInput, ManagingDirectorMessageUncheckedUpdateInput>
  }

  /**
   * ManagingDirectorMessage delete
   */
  export type ManagingDirectorMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirectorMessage
     */
    select?: ManagingDirectorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirectorMessage
     */
    omit?: ManagingDirectorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagingDirectorMessageInclude<ExtArgs> | null
    /**
     * Filter which ManagingDirectorMessage to delete.
     */
    where: ManagingDirectorMessageWhereUniqueInput
  }

  /**
   * ManagingDirectorMessage deleteMany
   */
  export type ManagingDirectorMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ManagingDirectorMessages to delete
     */
    where?: ManagingDirectorMessageWhereInput
    /**
     * Limit how many ManagingDirectorMessages to delete.
     */
    limit?: number
  }

  /**
   * ManagingDirectorMessage.updatedBy
   */
  export type ManagingDirectorMessage$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * ManagingDirectorMessage without action
   */
  export type ManagingDirectorMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ManagingDirectorMessage
     */
    select?: ManagingDirectorMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ManagingDirectorMessage
     */
    omit?: ManagingDirectorMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ManagingDirectorMessageInclude<ExtArgs> | null
  }


  /**
   * Model Section
   */

  export type AggregateSection = {
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  export type SectionAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
    createdById: number | null
    extraNumber: number | null
  }

  export type SectionSumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
    createdById: number | null
    extraNumber: number | null
  }

  export type SectionMinAggregateOutputType = {
    id: number | null
    module: string | null
    title: string | null
    description: string | null
    content: string | null
    category: string | null
    imageUrl: string | null
    videoUrl: string | null
    documentUrl: string | null
    fileType: string | null
    link: string | null
    publishDate: Date | null
    sortOrder: number | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type SectionMaxAggregateOutputType = {
    id: number | null
    module: string | null
    title: string | null
    description: string | null
    content: string | null
    category: string | null
    imageUrl: string | null
    videoUrl: string | null
    documentUrl: string | null
    fileType: string | null
    link: string | null
    publishDate: Date | null
    sortOrder: number | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type SectionCountAggregateOutputType = {
    id: number
    module: number
    title: number
    description: number
    content: number
    category: number
    imageUrl: number
    videoUrl: number
    documentUrl: number
    fileType: number
    link: number
    publishDate: number
    sortOrder: number
    createdById: number
    createdAt: number
    updatedAt: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type SectionAvgAggregateInputType = {
    id?: true
    sortOrder?: true
    createdById?: true
    extraNumber?: true
  }

  export type SectionSumAggregateInputType = {
    id?: true
    sortOrder?: true
    createdById?: true
    extraNumber?: true
  }

  export type SectionMinAggregateInputType = {
    id?: true
    module?: true
    title?: true
    description?: true
    content?: true
    category?: true
    imageUrl?: true
    videoUrl?: true
    documentUrl?: true
    fileType?: true
    link?: true
    publishDate?: true
    sortOrder?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type SectionMaxAggregateInputType = {
    id?: true
    module?: true
    title?: true
    description?: true
    content?: true
    category?: true
    imageUrl?: true
    videoUrl?: true
    documentUrl?: true
    fileType?: true
    link?: true
    publishDate?: true
    sortOrder?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type SectionCountAggregateInputType = {
    id?: true
    module?: true
    title?: true
    description?: true
    content?: true
    category?: true
    imageUrl?: true
    videoUrl?: true
    documentUrl?: true
    fileType?: true
    link?: true
    publishDate?: true
    sortOrder?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type SectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Section to aggregate.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sections
    **/
    _count?: true | SectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectionMaxAggregateInputType
  }

  export type GetSectionAggregateType<T extends SectionAggregateArgs> = {
        [P in keyof T & keyof AggregateSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSection[P]>
      : GetScalarType<T[P], AggregateSection[P]>
  }




  export type SectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectionWhereInput
    orderBy?: SectionOrderByWithAggregationInput | SectionOrderByWithAggregationInput[]
    by: SectionScalarFieldEnum[] | SectionScalarFieldEnum
    having?: SectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectionCountAggregateInputType | true
    _avg?: SectionAvgAggregateInputType
    _sum?: SectionSumAggregateInputType
    _min?: SectionMinAggregateInputType
    _max?: SectionMaxAggregateInputType
  }

  export type SectionGroupByOutputType = {
    id: number
    module: string
    title: string
    description: string | null
    content: string | null
    category: string | null
    imageUrl: string | null
    videoUrl: string | null
    documentUrl: string | null
    fileType: string | null
    link: string | null
    publishDate: Date | null
    sortOrder: number | null
    createdById: number | null
    createdAt: Date
    updatedAt: Date
    extraText: string | null
    extraNumber: number | null
    _count: SectionCountAggregateOutputType | null
    _avg: SectionAvgAggregateOutputType | null
    _sum: SectionSumAggregateOutputType | null
    _min: SectionMinAggregateOutputType | null
    _max: SectionMaxAggregateOutputType | null
  }

  type GetSectionGroupByPayload<T extends SectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectionGroupByOutputType[P]>
            : GetScalarType<T[P], SectionGroupByOutputType[P]>
        }
      >
    >


  export type SectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    module?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    category?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    documentUrl?: boolean
    fileType?: boolean
    link?: boolean
    publishDate?: boolean
    sortOrder?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
    createdBy?: boolean | Section$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["section"]>



  export type SectionSelectScalar = {
    id?: boolean
    module?: boolean
    title?: boolean
    description?: boolean
    content?: boolean
    category?: boolean
    imageUrl?: boolean
    videoUrl?: boolean
    documentUrl?: boolean
    fileType?: boolean
    link?: boolean
    publishDate?: boolean
    sortOrder?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type SectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "module" | "title" | "description" | "content" | "category" | "imageUrl" | "videoUrl" | "documentUrl" | "fileType" | "link" | "publishDate" | "sortOrder" | "createdById" | "createdAt" | "updatedAt" | "extraText" | "extraNumber", ExtArgs["result"]["section"]>
  export type SectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Section$createdByArgs<ExtArgs>
  }

  export type $SectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Section"
    objects: {
      createdBy: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      module: string
      title: string
      description: string | null
      content: string | null
      category: string | null
      imageUrl: string | null
      videoUrl: string | null
      documentUrl: string | null
      fileType: string | null
      link: string | null
      publishDate: Date | null
      sortOrder: number | null
      createdById: number | null
      createdAt: Date
      updatedAt: Date
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["section"]>
    composites: {}
  }

  type SectionGetPayload<S extends boolean | null | undefined | SectionDefaultArgs> = $Result.GetResult<Prisma.$SectionPayload, S>

  type SectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectionCountAggregateInputType | true
    }

  export interface SectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Section'], meta: { name: 'Section' } }
    /**
     * Find zero or one Section that matches the filter.
     * @param {SectionFindUniqueArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectionFindUniqueArgs>(args: SelectSubset<T, SectionFindUniqueArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Section that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectionFindUniqueOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectionFindUniqueOrThrowArgs>(args: SelectSubset<T, SectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectionFindFirstArgs>(args?: SelectSubset<T, SectionFindFirstArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Section that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindFirstOrThrowArgs} args - Arguments to find a Section
     * @example
     * // Get one Section
     * const section = await prisma.section.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectionFindFirstOrThrowArgs>(args?: SelectSubset<T, SectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sections
     * const sections = await prisma.section.findMany()
     * 
     * // Get first 10 Sections
     * const sections = await prisma.section.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectionWithIdOnly = await prisma.section.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectionFindManyArgs>(args?: SelectSubset<T, SectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Section.
     * @param {SectionCreateArgs} args - Arguments to create a Section.
     * @example
     * // Create one Section
     * const Section = await prisma.section.create({
     *   data: {
     *     // ... data to create a Section
     *   }
     * })
     * 
     */
    create<T extends SectionCreateArgs>(args: SelectSubset<T, SectionCreateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sections.
     * @param {SectionCreateManyArgs} args - Arguments to create many Sections.
     * @example
     * // Create many Sections
     * const section = await prisma.section.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectionCreateManyArgs>(args?: SelectSubset<T, SectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Section.
     * @param {SectionDeleteArgs} args - Arguments to delete one Section.
     * @example
     * // Delete one Section
     * const Section = await prisma.section.delete({
     *   where: {
     *     // ... filter to delete one Section
     *   }
     * })
     * 
     */
    delete<T extends SectionDeleteArgs>(args: SelectSubset<T, SectionDeleteArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Section.
     * @param {SectionUpdateArgs} args - Arguments to update one Section.
     * @example
     * // Update one Section
     * const section = await prisma.section.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectionUpdateArgs>(args: SelectSubset<T, SectionUpdateArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sections.
     * @param {SectionDeleteManyArgs} args - Arguments to filter Sections to delete.
     * @example
     * // Delete a few Sections
     * const { count } = await prisma.section.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectionDeleteManyArgs>(args?: SelectSubset<T, SectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sections
     * const section = await prisma.section.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectionUpdateManyArgs>(args: SelectSubset<T, SectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Section.
     * @param {SectionUpsertArgs} args - Arguments to update or create a Section.
     * @example
     * // Update or create a Section
     * const section = await prisma.section.upsert({
     *   create: {
     *     // ... data to create a Section
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Section we want to update
     *   }
     * })
     */
    upsert<T extends SectionUpsertArgs>(args: SelectSubset<T, SectionUpsertArgs<ExtArgs>>): Prisma__SectionClient<$Result.GetResult<Prisma.$SectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionCountArgs} args - Arguments to filter Sections to count.
     * @example
     * // Count the number of Sections
     * const count = await prisma.section.count({
     *   where: {
     *     // ... the filter for the Sections we want to count
     *   }
     * })
    **/
    count<T extends SectionCountArgs>(
      args?: Subset<T, SectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectionAggregateArgs>(args: Subset<T, SectionAggregateArgs>): Prisma.PrismaPromise<GetSectionAggregateType<T>>

    /**
     * Group by Section.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectionGroupByArgs} args - Group by arguments.
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
      T extends SectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectionGroupByArgs['orderBy'] }
        : { orderBy?: SectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Section model
   */
  readonly fields: SectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Section.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Section$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Section$createdByArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Section model
   */
  interface SectionFieldRefs {
    readonly id: FieldRef<"Section", 'Int'>
    readonly module: FieldRef<"Section", 'String'>
    readonly title: FieldRef<"Section", 'String'>
    readonly description: FieldRef<"Section", 'String'>
    readonly content: FieldRef<"Section", 'String'>
    readonly category: FieldRef<"Section", 'String'>
    readonly imageUrl: FieldRef<"Section", 'String'>
    readonly videoUrl: FieldRef<"Section", 'String'>
    readonly documentUrl: FieldRef<"Section", 'String'>
    readonly fileType: FieldRef<"Section", 'String'>
    readonly link: FieldRef<"Section", 'String'>
    readonly publishDate: FieldRef<"Section", 'DateTime'>
    readonly sortOrder: FieldRef<"Section", 'Int'>
    readonly createdById: FieldRef<"Section", 'Int'>
    readonly createdAt: FieldRef<"Section", 'DateTime'>
    readonly updatedAt: FieldRef<"Section", 'DateTime'>
    readonly extraText: FieldRef<"Section", 'String'>
    readonly extraNumber: FieldRef<"Section", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Section findUnique
   */
  export type SectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findUniqueOrThrow
   */
  export type SectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section findFirst
   */
  export type SectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findFirstOrThrow
   */
  export type SectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Section to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sections.
     */
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section findMany
   */
  export type SectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter, which Sections to fetch.
     */
    where?: SectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sections to fetch.
     */
    orderBy?: SectionOrderByWithRelationInput | SectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sections.
     */
    cursor?: SectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sections.
     */
    skip?: number
    distinct?: SectionScalarFieldEnum | SectionScalarFieldEnum[]
  }

  /**
   * Section create
   */
  export type SectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to create a Section.
     */
    data: XOR<SectionCreateInput, SectionUncheckedCreateInput>
  }

  /**
   * Section createMany
   */
  export type SectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sections.
     */
    data: SectionCreateManyInput | SectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Section update
   */
  export type SectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The data needed to update a Section.
     */
    data: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
    /**
     * Choose, which Section to update.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section updateMany
   */
  export type SectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sections.
     */
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyInput>
    /**
     * Filter which Sections to update
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to update.
     */
    limit?: number
  }

  /**
   * Section upsert
   */
  export type SectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * The filter to search for the Section to update in case it exists.
     */
    where: SectionWhereUniqueInput
    /**
     * In case the Section found by the `where` argument doesn't exist, create a new Section with this data.
     */
    create: XOR<SectionCreateInput, SectionUncheckedCreateInput>
    /**
     * In case the Section was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectionUpdateInput, SectionUncheckedUpdateInput>
  }

  /**
   * Section delete
   */
  export type SectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
    /**
     * Filter which Section to delete.
     */
    where: SectionWhereUniqueInput
  }

  /**
   * Section deleteMany
   */
  export type SectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sections to delete
     */
    where?: SectionWhereInput
    /**
     * Limit how many Sections to delete.
     */
    limit?: number
  }

  /**
   * Section.createdBy
   */
  export type Section$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Section without action
   */
  export type SectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Section
     */
    select?: SectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Section
     */
    omit?: SectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SectionInclude<ExtArgs> | null
  }


  /**
   * Model Setting
   */

  export type AggregateSetting = {
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  export type SettingAvgAggregateOutputType = {
    id: number | null
    updatedById: number | null
    extraNumber: number | null
  }

  export type SettingSumAggregateOutputType = {
    id: number | null
    updatedById: number | null
    extraNumber: number | null
  }

  export type SettingMinAggregateOutputType = {
    id: number | null
    settingKey: string | null
    settingValue: string | null
    category: string | null
    updatedById: number | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type SettingMaxAggregateOutputType = {
    id: number | null
    settingKey: string | null
    settingValue: string | null
    category: string | null
    updatedById: number | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type SettingCountAggregateOutputType = {
    id: number
    settingKey: number
    settingValue: number
    category: number
    updatedById: number
    updatedAt: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type SettingAvgAggregateInputType = {
    id?: true
    updatedById?: true
    extraNumber?: true
  }

  export type SettingSumAggregateInputType = {
    id?: true
    updatedById?: true
    extraNumber?: true
  }

  export type SettingMinAggregateInputType = {
    id?: true
    settingKey?: true
    settingValue?: true
    category?: true
    updatedById?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type SettingMaxAggregateInputType = {
    id?: true
    settingKey?: true
    settingValue?: true
    category?: true
    updatedById?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type SettingCountAggregateInputType = {
    id?: true
    settingKey?: true
    settingValue?: true
    category?: true
    updatedById?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type SettingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Setting to aggregate.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingMaxAggregateInputType
  }

  export type GetSettingAggregateType<T extends SettingAggregateArgs> = {
        [P in keyof T & keyof AggregateSetting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSetting[P]>
      : GetScalarType<T[P], AggregateSetting[P]>
  }




  export type SettingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingWhereInput
    orderBy?: SettingOrderByWithAggregationInput | SettingOrderByWithAggregationInput[]
    by: SettingScalarFieldEnum[] | SettingScalarFieldEnum
    having?: SettingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingCountAggregateInputType | true
    _avg?: SettingAvgAggregateInputType
    _sum?: SettingSumAggregateInputType
    _min?: SettingMinAggregateInputType
    _max?: SettingMaxAggregateInputType
  }

  export type SettingGroupByOutputType = {
    id: number
    settingKey: string
    settingValue: string | null
    category: string | null
    updatedById: number | null
    updatedAt: Date
    extraText: string | null
    extraNumber: number | null
    _count: SettingCountAggregateOutputType | null
    _avg: SettingAvgAggregateOutputType | null
    _sum: SettingSumAggregateOutputType | null
    _min: SettingMinAggregateOutputType | null
    _max: SettingMaxAggregateOutputType | null
  }

  type GetSettingGroupByPayload<T extends SettingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingGroupByOutputType[P]>
            : GetScalarType<T[P], SettingGroupByOutputType[P]>
        }
      >
    >


  export type SettingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    settingKey?: boolean
    settingValue?: boolean
    category?: boolean
    updatedById?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
    updatedBy?: boolean | Setting$updatedByArgs<ExtArgs>
  }, ExtArgs["result"]["setting"]>



  export type SettingSelectScalar = {
    id?: boolean
    settingKey?: boolean
    settingValue?: boolean
    category?: boolean
    updatedById?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type SettingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "settingKey" | "settingValue" | "category" | "updatedById" | "updatedAt" | "extraText" | "extraNumber", ExtArgs["result"]["setting"]>
  export type SettingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    updatedBy?: boolean | Setting$updatedByArgs<ExtArgs>
  }

  export type $SettingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Setting"
    objects: {
      updatedBy: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      settingKey: string
      settingValue: string | null
      category: string | null
      updatedById: number | null
      updatedAt: Date
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["setting"]>
    composites: {}
  }

  type SettingGetPayload<S extends boolean | null | undefined | SettingDefaultArgs> = $Result.GetResult<Prisma.$SettingPayload, S>

  type SettingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingCountAggregateInputType | true
    }

  export interface SettingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Setting'], meta: { name: 'Setting' } }
    /**
     * Find zero or one Setting that matches the filter.
     * @param {SettingFindUniqueArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingFindUniqueArgs>(args: SelectSubset<T, SettingFindUniqueArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Setting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingFindUniqueOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingFindFirstArgs>(args?: SelectSubset<T, SettingFindFirstArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Setting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindFirstOrThrowArgs} args - Arguments to find a Setting
     * @example
     * // Get one Setting
     * const setting = await prisma.setting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.setting.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.setting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingWithIdOnly = await prisma.setting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingFindManyArgs>(args?: SelectSubset<T, SettingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Setting.
     * @param {SettingCreateArgs} args - Arguments to create a Setting.
     * @example
     * // Create one Setting
     * const Setting = await prisma.setting.create({
     *   data: {
     *     // ... data to create a Setting
     *   }
     * })
     * 
     */
    create<T extends SettingCreateArgs>(args: SelectSubset<T, SettingCreateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const setting = await prisma.setting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingCreateManyArgs>(args?: SelectSubset<T, SettingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Setting.
     * @param {SettingDeleteArgs} args - Arguments to delete one Setting.
     * @example
     * // Delete one Setting
     * const Setting = await prisma.setting.delete({
     *   where: {
     *     // ... filter to delete one Setting
     *   }
     * })
     * 
     */
    delete<T extends SettingDeleteArgs>(args: SelectSubset<T, SettingDeleteArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Setting.
     * @param {SettingUpdateArgs} args - Arguments to update one Setting.
     * @example
     * // Update one Setting
     * const setting = await prisma.setting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingUpdateArgs>(args: SelectSubset<T, SettingUpdateArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.setting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingDeleteManyArgs>(args?: SelectSubset<T, SettingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const setting = await prisma.setting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingUpdateManyArgs>(args: SelectSubset<T, SettingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Setting.
     * @param {SettingUpsertArgs} args - Arguments to update or create a Setting.
     * @example
     * // Update or create a Setting
     * const setting = await prisma.setting.upsert({
     *   create: {
     *     // ... data to create a Setting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Setting we want to update
     *   }
     * })
     */
    upsert<T extends SettingUpsertArgs>(args: SelectSubset<T, SettingUpsertArgs<ExtArgs>>): Prisma__SettingClient<$Result.GetResult<Prisma.$SettingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.setting.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingCountArgs>(
      args?: Subset<T, SettingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingAggregateArgs>(args: Subset<T, SettingAggregateArgs>): Prisma.PrismaPromise<GetSettingAggregateType<T>>

    /**
     * Group by Setting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingGroupByArgs} args - Group by arguments.
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
      T extends SettingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingGroupByArgs['orderBy'] }
        : { orderBy?: SettingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Setting model
   */
  readonly fields: SettingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Setting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    updatedBy<T extends Setting$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, Setting$updatedByArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Setting model
   */
  interface SettingFieldRefs {
    readonly id: FieldRef<"Setting", 'Int'>
    readonly settingKey: FieldRef<"Setting", 'String'>
    readonly settingValue: FieldRef<"Setting", 'String'>
    readonly category: FieldRef<"Setting", 'String'>
    readonly updatedById: FieldRef<"Setting", 'Int'>
    readonly updatedAt: FieldRef<"Setting", 'DateTime'>
    readonly extraText: FieldRef<"Setting", 'String'>
    readonly extraNumber: FieldRef<"Setting", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Setting findUnique
   */
  export type SettingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findUniqueOrThrow
   */
  export type SettingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting findFirst
   */
  export type SettingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findFirstOrThrow
   */
  export type SettingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Setting to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting findMany
   */
  export type SettingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingOrderByWithRelationInput | SettingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    distinct?: SettingScalarFieldEnum | SettingScalarFieldEnum[]
  }

  /**
   * Setting create
   */
  export type SettingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to create a Setting.
     */
    data: XOR<SettingCreateInput, SettingUncheckedCreateInput>
  }

  /**
   * Setting createMany
   */
  export type SettingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingCreateManyInput | SettingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Setting update
   */
  export type SettingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The data needed to update a Setting.
     */
    data: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
    /**
     * Choose, which Setting to update.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting updateMany
   */
  export type SettingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Setting upsert
   */
  export type SettingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * The filter to search for the Setting to update in case it exists.
     */
    where: SettingWhereUniqueInput
    /**
     * In case the Setting found by the `where` argument doesn't exist, create a new Setting with this data.
     */
    create: XOR<SettingCreateInput, SettingUncheckedCreateInput>
    /**
     * In case the Setting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingUpdateInput, SettingUncheckedUpdateInput>
  }

  /**
   * Setting delete
   */
  export type SettingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
    /**
     * Filter which Setting to delete.
     */
    where: SettingWhereUniqueInput
  }

  /**
   * Setting deleteMany
   */
  export type SettingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Setting.updatedBy
   */
  export type Setting$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * Setting without action
   */
  export type SettingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Setting
     */
    select?: SettingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Setting
     */
    omit?: SettingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettingInclude<ExtArgs> | null
  }


  /**
   * Model Directory
   */

  export type AggregateDirectory = {
    _count: DirectoryCountAggregateOutputType | null
    _avg: DirectoryAvgAggregateOutputType | null
    _sum: DirectorySumAggregateOutputType | null
    _min: DirectoryMinAggregateOutputType | null
    _max: DirectoryMaxAggregateOutputType | null
  }

  export type DirectoryAvgAggregateOutputType = {
    id: number | null
    sortOrder: number | null
    extraNumber: number | null
  }

  export type DirectorySumAggregateOutputType = {
    id: number | null
    sortOrder: number | null
    extraNumber: number | null
  }

  export type DirectoryMinAggregateOutputType = {
    id: number | null
    type: string | null
    name: string | null
    designation: string | null
    department: string | null
    tag: string | null
    email: string | null
    phone: string | null
    photoUrl: string | null
    tenureFrom: string | null
    tenureTo: string | null
    status: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
    boardPosition: string | null
    extraText: string | null
    extraNumber: number | null
  }

  export type DirectoryMaxAggregateOutputType = {
    id: number | null
    type: string | null
    name: string | null
    designation: string | null
    department: string | null
    tag: string | null
    email: string | null
    phone: string | null
    photoUrl: string | null
    tenureFrom: string | null
    tenureTo: string | null
    status: string | null
    sortOrder: number | null
    createdAt: Date | null
    updatedAt: Date | null
    boardPosition: string | null
    extraText: string | null
    extraNumber: number | null
  }

  export type DirectoryCountAggregateOutputType = {
    id: number
    type: number
    name: number
    designation: number
    department: number
    tag: number
    email: number
    phone: number
    photoUrl: number
    tenureFrom: number
    tenureTo: number
    status: number
    sortOrder: number
    createdAt: number
    updatedAt: number
    boardPosition: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type DirectoryAvgAggregateInputType = {
    id?: true
    sortOrder?: true
    extraNumber?: true
  }

  export type DirectorySumAggregateInputType = {
    id?: true
    sortOrder?: true
    extraNumber?: true
  }

  export type DirectoryMinAggregateInputType = {
    id?: true
    type?: true
    name?: true
    designation?: true
    department?: true
    tag?: true
    email?: true
    phone?: true
    photoUrl?: true
    tenureFrom?: true
    tenureTo?: true
    status?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    boardPosition?: true
    extraText?: true
    extraNumber?: true
  }

  export type DirectoryMaxAggregateInputType = {
    id?: true
    type?: true
    name?: true
    designation?: true
    department?: true
    tag?: true
    email?: true
    phone?: true
    photoUrl?: true
    tenureFrom?: true
    tenureTo?: true
    status?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    boardPosition?: true
    extraText?: true
    extraNumber?: true
  }

  export type DirectoryCountAggregateInputType = {
    id?: true
    type?: true
    name?: true
    designation?: true
    department?: true
    tag?: true
    email?: true
    phone?: true
    photoUrl?: true
    tenureFrom?: true
    tenureTo?: true
    status?: true
    sortOrder?: true
    createdAt?: true
    updatedAt?: true
    boardPosition?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type DirectoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Directory to aggregate.
     */
    where?: DirectoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directories to fetch.
     */
    orderBy?: DirectoryOrderByWithRelationInput | DirectoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DirectoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Directories
    **/
    _count?: true | DirectoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DirectoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DirectorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DirectoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DirectoryMaxAggregateInputType
  }

  export type GetDirectoryAggregateType<T extends DirectoryAggregateArgs> = {
        [P in keyof T & keyof AggregateDirectory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDirectory[P]>
      : GetScalarType<T[P], AggregateDirectory[P]>
  }




  export type DirectoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DirectoryWhereInput
    orderBy?: DirectoryOrderByWithAggregationInput | DirectoryOrderByWithAggregationInput[]
    by: DirectoryScalarFieldEnum[] | DirectoryScalarFieldEnum
    having?: DirectoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DirectoryCountAggregateInputType | true
    _avg?: DirectoryAvgAggregateInputType
    _sum?: DirectorySumAggregateInputType
    _min?: DirectoryMinAggregateInputType
    _max?: DirectoryMaxAggregateInputType
  }

  export type DirectoryGroupByOutputType = {
    id: number
    type: string
    name: string
    designation: string | null
    department: string | null
    tag: string | null
    email: string | null
    phone: string | null
    photoUrl: string | null
    tenureFrom: string | null
    tenureTo: string | null
    status: string | null
    sortOrder: number | null
    createdAt: Date
    updatedAt: Date
    boardPosition: string | null
    extraText: string | null
    extraNumber: number | null
    _count: DirectoryCountAggregateOutputType | null
    _avg: DirectoryAvgAggregateOutputType | null
    _sum: DirectorySumAggregateOutputType | null
    _min: DirectoryMinAggregateOutputType | null
    _max: DirectoryMaxAggregateOutputType | null
  }

  type GetDirectoryGroupByPayload<T extends DirectoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DirectoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DirectoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DirectoryGroupByOutputType[P]>
            : GetScalarType<T[P], DirectoryGroupByOutputType[P]>
        }
      >
    >


  export type DirectorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    name?: boolean
    designation?: boolean
    department?: boolean
    tag?: boolean
    email?: boolean
    phone?: boolean
    photoUrl?: boolean
    tenureFrom?: boolean
    tenureTo?: boolean
    status?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    boardPosition?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }, ExtArgs["result"]["directory"]>



  export type DirectorySelectScalar = {
    id?: boolean
    type?: boolean
    name?: boolean
    designation?: boolean
    department?: boolean
    tag?: boolean
    email?: boolean
    phone?: boolean
    photoUrl?: boolean
    tenureFrom?: boolean
    tenureTo?: boolean
    status?: boolean
    sortOrder?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    boardPosition?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type DirectoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "name" | "designation" | "department" | "tag" | "email" | "phone" | "photoUrl" | "tenureFrom" | "tenureTo" | "status" | "sortOrder" | "createdAt" | "updatedAt" | "boardPosition" | "extraText" | "extraNumber", ExtArgs["result"]["directory"]>

  export type $DirectoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Directory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      type: string
      name: string
      designation: string | null
      department: string | null
      tag: string | null
      email: string | null
      phone: string | null
      photoUrl: string | null
      tenureFrom: string | null
      tenureTo: string | null
      status: string | null
      sortOrder: number | null
      createdAt: Date
      updatedAt: Date
      boardPosition: string | null
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["directory"]>
    composites: {}
  }

  type DirectoryGetPayload<S extends boolean | null | undefined | DirectoryDefaultArgs> = $Result.GetResult<Prisma.$DirectoryPayload, S>

  type DirectoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DirectoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DirectoryCountAggregateInputType | true
    }

  export interface DirectoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Directory'], meta: { name: 'Directory' } }
    /**
     * Find zero or one Directory that matches the filter.
     * @param {DirectoryFindUniqueArgs} args - Arguments to find a Directory
     * @example
     * // Get one Directory
     * const directory = await prisma.directory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DirectoryFindUniqueArgs>(args: SelectSubset<T, DirectoryFindUniqueArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Directory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DirectoryFindUniqueOrThrowArgs} args - Arguments to find a Directory
     * @example
     * // Get one Directory
     * const directory = await prisma.directory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DirectoryFindUniqueOrThrowArgs>(args: SelectSubset<T, DirectoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Directory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFindFirstArgs} args - Arguments to find a Directory
     * @example
     * // Get one Directory
     * const directory = await prisma.directory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DirectoryFindFirstArgs>(args?: SelectSubset<T, DirectoryFindFirstArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Directory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFindFirstOrThrowArgs} args - Arguments to find a Directory
     * @example
     * // Get one Directory
     * const directory = await prisma.directory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DirectoryFindFirstOrThrowArgs>(args?: SelectSubset<T, DirectoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Directories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Directories
     * const directories = await prisma.directory.findMany()
     * 
     * // Get first 10 Directories
     * const directories = await prisma.directory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const directoryWithIdOnly = await prisma.directory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DirectoryFindManyArgs>(args?: SelectSubset<T, DirectoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Directory.
     * @param {DirectoryCreateArgs} args - Arguments to create a Directory.
     * @example
     * // Create one Directory
     * const Directory = await prisma.directory.create({
     *   data: {
     *     // ... data to create a Directory
     *   }
     * })
     * 
     */
    create<T extends DirectoryCreateArgs>(args: SelectSubset<T, DirectoryCreateArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Directories.
     * @param {DirectoryCreateManyArgs} args - Arguments to create many Directories.
     * @example
     * // Create many Directories
     * const directory = await prisma.directory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DirectoryCreateManyArgs>(args?: SelectSubset<T, DirectoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Directory.
     * @param {DirectoryDeleteArgs} args - Arguments to delete one Directory.
     * @example
     * // Delete one Directory
     * const Directory = await prisma.directory.delete({
     *   where: {
     *     // ... filter to delete one Directory
     *   }
     * })
     * 
     */
    delete<T extends DirectoryDeleteArgs>(args: SelectSubset<T, DirectoryDeleteArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Directory.
     * @param {DirectoryUpdateArgs} args - Arguments to update one Directory.
     * @example
     * // Update one Directory
     * const directory = await prisma.directory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DirectoryUpdateArgs>(args: SelectSubset<T, DirectoryUpdateArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Directories.
     * @param {DirectoryDeleteManyArgs} args - Arguments to filter Directories to delete.
     * @example
     * // Delete a few Directories
     * const { count } = await prisma.directory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DirectoryDeleteManyArgs>(args?: SelectSubset<T, DirectoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Directories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Directories
     * const directory = await prisma.directory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DirectoryUpdateManyArgs>(args: SelectSubset<T, DirectoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Directory.
     * @param {DirectoryUpsertArgs} args - Arguments to update or create a Directory.
     * @example
     * // Update or create a Directory
     * const directory = await prisma.directory.upsert({
     *   create: {
     *     // ... data to create a Directory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Directory we want to update
     *   }
     * })
     */
    upsert<T extends DirectoryUpsertArgs>(args: SelectSubset<T, DirectoryUpsertArgs<ExtArgs>>): Prisma__DirectoryClient<$Result.GetResult<Prisma.$DirectoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Directories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryCountArgs} args - Arguments to filter Directories to count.
     * @example
     * // Count the number of Directories
     * const count = await prisma.directory.count({
     *   where: {
     *     // ... the filter for the Directories we want to count
     *   }
     * })
    **/
    count<T extends DirectoryCountArgs>(
      args?: Subset<T, DirectoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DirectoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Directory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DirectoryAggregateArgs>(args: Subset<T, DirectoryAggregateArgs>): Prisma.PrismaPromise<GetDirectoryAggregateType<T>>

    /**
     * Group by Directory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DirectoryGroupByArgs} args - Group by arguments.
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
      T extends DirectoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DirectoryGroupByArgs['orderBy'] }
        : { orderBy?: DirectoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DirectoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDirectoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Directory model
   */
  readonly fields: DirectoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Directory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DirectoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Directory model
   */
  interface DirectoryFieldRefs {
    readonly id: FieldRef<"Directory", 'Int'>
    readonly type: FieldRef<"Directory", 'String'>
    readonly name: FieldRef<"Directory", 'String'>
    readonly designation: FieldRef<"Directory", 'String'>
    readonly department: FieldRef<"Directory", 'String'>
    readonly tag: FieldRef<"Directory", 'String'>
    readonly email: FieldRef<"Directory", 'String'>
    readonly phone: FieldRef<"Directory", 'String'>
    readonly photoUrl: FieldRef<"Directory", 'String'>
    readonly tenureFrom: FieldRef<"Directory", 'String'>
    readonly tenureTo: FieldRef<"Directory", 'String'>
    readonly status: FieldRef<"Directory", 'String'>
    readonly sortOrder: FieldRef<"Directory", 'Int'>
    readonly createdAt: FieldRef<"Directory", 'DateTime'>
    readonly updatedAt: FieldRef<"Directory", 'DateTime'>
    readonly boardPosition: FieldRef<"Directory", 'String'>
    readonly extraText: FieldRef<"Directory", 'String'>
    readonly extraNumber: FieldRef<"Directory", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Directory findUnique
   */
  export type DirectoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Filter, which Directory to fetch.
     */
    where: DirectoryWhereUniqueInput
  }

  /**
   * Directory findUniqueOrThrow
   */
  export type DirectoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Filter, which Directory to fetch.
     */
    where: DirectoryWhereUniqueInput
  }

  /**
   * Directory findFirst
   */
  export type DirectoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Filter, which Directory to fetch.
     */
    where?: DirectoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directories to fetch.
     */
    orderBy?: DirectoryOrderByWithRelationInput | DirectoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directories.
     */
    cursor?: DirectoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directories.
     */
    distinct?: DirectoryScalarFieldEnum | DirectoryScalarFieldEnum[]
  }

  /**
   * Directory findFirstOrThrow
   */
  export type DirectoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Filter, which Directory to fetch.
     */
    where?: DirectoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directories to fetch.
     */
    orderBy?: DirectoryOrderByWithRelationInput | DirectoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Directories.
     */
    cursor?: DirectoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Directories.
     */
    distinct?: DirectoryScalarFieldEnum | DirectoryScalarFieldEnum[]
  }

  /**
   * Directory findMany
   */
  export type DirectoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Filter, which Directories to fetch.
     */
    where?: DirectoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Directories to fetch.
     */
    orderBy?: DirectoryOrderByWithRelationInput | DirectoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Directories.
     */
    cursor?: DirectoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Directories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Directories.
     */
    skip?: number
    distinct?: DirectoryScalarFieldEnum | DirectoryScalarFieldEnum[]
  }

  /**
   * Directory create
   */
  export type DirectoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * The data needed to create a Directory.
     */
    data: XOR<DirectoryCreateInput, DirectoryUncheckedCreateInput>
  }

  /**
   * Directory createMany
   */
  export type DirectoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Directories.
     */
    data: DirectoryCreateManyInput | DirectoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Directory update
   */
  export type DirectoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * The data needed to update a Directory.
     */
    data: XOR<DirectoryUpdateInput, DirectoryUncheckedUpdateInput>
    /**
     * Choose, which Directory to update.
     */
    where: DirectoryWhereUniqueInput
  }

  /**
   * Directory updateMany
   */
  export type DirectoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Directories.
     */
    data: XOR<DirectoryUpdateManyMutationInput, DirectoryUncheckedUpdateManyInput>
    /**
     * Filter which Directories to update
     */
    where?: DirectoryWhereInput
    /**
     * Limit how many Directories to update.
     */
    limit?: number
  }

  /**
   * Directory upsert
   */
  export type DirectoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * The filter to search for the Directory to update in case it exists.
     */
    where: DirectoryWhereUniqueInput
    /**
     * In case the Directory found by the `where` argument doesn't exist, create a new Directory with this data.
     */
    create: XOR<DirectoryCreateInput, DirectoryUncheckedCreateInput>
    /**
     * In case the Directory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DirectoryUpdateInput, DirectoryUncheckedUpdateInput>
  }

  /**
   * Directory delete
   */
  export type DirectoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
    /**
     * Filter which Directory to delete.
     */
    where: DirectoryWhereUniqueInput
  }

  /**
   * Directory deleteMany
   */
  export type DirectoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Directories to delete
     */
    where?: DirectoryWhereInput
    /**
     * Limit how many Directories to delete.
     */
    limit?: number
  }

  /**
   * Directory without action
   */
  export type DirectoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Directory
     */
    select?: DirectorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Directory
     */
    omit?: DirectoryOmit<ExtArgs> | null
  }


  /**
   * Model ActivityLog
   */

  export type AggregateActivityLog = {
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  export type ActivityLogAvgAggregateOutputType = {
    id: number | null
    adminId: number | null
    extraNumber: number | null
  }

  export type ActivityLogSumAggregateOutputType = {
    id: number | null
    adminId: number | null
    extraNumber: number | null
  }

  export type ActivityLogMinAggregateOutputType = {
    id: number | null
    action: string | null
    type: string | null
    isRead: boolean | null
    adminId: number | null
    createdAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type ActivityLogMaxAggregateOutputType = {
    id: number | null
    action: string | null
    type: string | null
    isRead: boolean | null
    adminId: number | null
    createdAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type ActivityLogCountAggregateOutputType = {
    id: number
    action: number
    type: number
    isRead: number
    adminId: number
    createdAt: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type ActivityLogAvgAggregateInputType = {
    id?: true
    adminId?: true
    extraNumber?: true
  }

  export type ActivityLogSumAggregateInputType = {
    id?: true
    adminId?: true
    extraNumber?: true
  }

  export type ActivityLogMinAggregateInputType = {
    id?: true
    action?: true
    type?: true
    isRead?: true
    adminId?: true
    createdAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type ActivityLogMaxAggregateInputType = {
    id?: true
    action?: true
    type?: true
    isRead?: true
    adminId?: true
    createdAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type ActivityLogCountAggregateInputType = {
    id?: true
    action?: true
    type?: true
    isRead?: true
    adminId?: true
    createdAt?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type ActivityLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLog to aggregate.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivityLogs
    **/
    _count?: true | ActivityLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivityLogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivityLogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivityLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivityLogMaxAggregateInputType
  }

  export type GetActivityLogAggregateType<T extends ActivityLogAggregateArgs> = {
        [P in keyof T & keyof AggregateActivityLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivityLog[P]>
      : GetScalarType<T[P], AggregateActivityLog[P]>
  }




  export type ActivityLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivityLogWhereInput
    orderBy?: ActivityLogOrderByWithAggregationInput | ActivityLogOrderByWithAggregationInput[]
    by: ActivityLogScalarFieldEnum[] | ActivityLogScalarFieldEnum
    having?: ActivityLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivityLogCountAggregateInputType | true
    _avg?: ActivityLogAvgAggregateInputType
    _sum?: ActivityLogSumAggregateInputType
    _min?: ActivityLogMinAggregateInputType
    _max?: ActivityLogMaxAggregateInputType
  }

  export type ActivityLogGroupByOutputType = {
    id: number
    action: string
    type: string
    isRead: boolean
    adminId: number | null
    createdAt: Date
    extraText: string | null
    extraNumber: number | null
    _count: ActivityLogCountAggregateOutputType | null
    _avg: ActivityLogAvgAggregateOutputType | null
    _sum: ActivityLogSumAggregateOutputType | null
    _min: ActivityLogMinAggregateOutputType | null
    _max: ActivityLogMaxAggregateOutputType | null
  }

  type GetActivityLogGroupByPayload<T extends ActivityLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivityLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivityLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
            : GetScalarType<T[P], ActivityLogGroupByOutputType[P]>
        }
      >
    >


  export type ActivityLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    action?: boolean
    type?: boolean
    isRead?: boolean
    adminId?: boolean
    createdAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
    admin?: boolean | ActivityLog$adminArgs<ExtArgs>
  }, ExtArgs["result"]["activityLog"]>



  export type ActivityLogSelectScalar = {
    id?: boolean
    action?: boolean
    type?: boolean
    isRead?: boolean
    adminId?: boolean
    createdAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type ActivityLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "action" | "type" | "isRead" | "adminId" | "createdAt" | "extraText" | "extraNumber", ExtArgs["result"]["activityLog"]>
  export type ActivityLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | ActivityLog$adminArgs<ExtArgs>
  }

  export type $ActivityLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivityLog"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      action: string
      type: string
      isRead: boolean
      adminId: number | null
      createdAt: Date
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["activityLog"]>
    composites: {}
  }

  type ActivityLogGetPayload<S extends boolean | null | undefined | ActivityLogDefaultArgs> = $Result.GetResult<Prisma.$ActivityLogPayload, S>

  type ActivityLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivityLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivityLogCountAggregateInputType | true
    }

  export interface ActivityLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivityLog'], meta: { name: 'ActivityLog' } }
    /**
     * Find zero or one ActivityLog that matches the filter.
     * @param {ActivityLogFindUniqueArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivityLogFindUniqueArgs>(args: SelectSubset<T, ActivityLogFindUniqueArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivityLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivityLogFindUniqueOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivityLogFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivityLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivityLogFindFirstArgs>(args?: SelectSubset<T, ActivityLogFindFirstArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivityLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindFirstOrThrowArgs} args - Arguments to find a ActivityLog
     * @example
     * // Get one ActivityLog
     * const activityLog = await prisma.activityLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivityLogFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivityLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivityLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany()
     * 
     * // Get first 10 ActivityLogs
     * const activityLogs = await prisma.activityLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activityLogWithIdOnly = await prisma.activityLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivityLogFindManyArgs>(args?: SelectSubset<T, ActivityLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivityLog.
     * @param {ActivityLogCreateArgs} args - Arguments to create a ActivityLog.
     * @example
     * // Create one ActivityLog
     * const ActivityLog = await prisma.activityLog.create({
     *   data: {
     *     // ... data to create a ActivityLog
     *   }
     * })
     * 
     */
    create<T extends ActivityLogCreateArgs>(args: SelectSubset<T, ActivityLogCreateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivityLogs.
     * @param {ActivityLogCreateManyArgs} args - Arguments to create many ActivityLogs.
     * @example
     * // Create many ActivityLogs
     * const activityLog = await prisma.activityLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivityLogCreateManyArgs>(args?: SelectSubset<T, ActivityLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ActivityLog.
     * @param {ActivityLogDeleteArgs} args - Arguments to delete one ActivityLog.
     * @example
     * // Delete one ActivityLog
     * const ActivityLog = await prisma.activityLog.delete({
     *   where: {
     *     // ... filter to delete one ActivityLog
     *   }
     * })
     * 
     */
    delete<T extends ActivityLogDeleteArgs>(args: SelectSubset<T, ActivityLogDeleteArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivityLog.
     * @param {ActivityLogUpdateArgs} args - Arguments to update one ActivityLog.
     * @example
     * // Update one ActivityLog
     * const activityLog = await prisma.activityLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivityLogUpdateArgs>(args: SelectSubset<T, ActivityLogUpdateArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivityLogs.
     * @param {ActivityLogDeleteManyArgs} args - Arguments to filter ActivityLogs to delete.
     * @example
     * // Delete a few ActivityLogs
     * const { count } = await prisma.activityLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivityLogDeleteManyArgs>(args?: SelectSubset<T, ActivityLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivityLogs
     * const activityLog = await prisma.activityLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivityLogUpdateManyArgs>(args: SelectSubset<T, ActivityLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ActivityLog.
     * @param {ActivityLogUpsertArgs} args - Arguments to update or create a ActivityLog.
     * @example
     * // Update or create a ActivityLog
     * const activityLog = await prisma.activityLog.upsert({
     *   create: {
     *     // ... data to create a ActivityLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivityLog we want to update
     *   }
     * })
     */
    upsert<T extends ActivityLogUpsertArgs>(args: SelectSubset<T, ActivityLogUpsertArgs<ExtArgs>>): Prisma__ActivityLogClient<$Result.GetResult<Prisma.$ActivityLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivityLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogCountArgs} args - Arguments to filter ActivityLogs to count.
     * @example
     * // Count the number of ActivityLogs
     * const count = await prisma.activityLog.count({
     *   where: {
     *     // ... the filter for the ActivityLogs we want to count
     *   }
     * })
    **/
    count<T extends ActivityLogCountArgs>(
      args?: Subset<T, ActivityLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivityLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivityLogAggregateArgs>(args: Subset<T, ActivityLogAggregateArgs>): Prisma.PrismaPromise<GetActivityLogAggregateType<T>>

    /**
     * Group by ActivityLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivityLogGroupByArgs} args - Group by arguments.
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
      T extends ActivityLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivityLogGroupByArgs['orderBy'] }
        : { orderBy?: ActivityLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivityLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivityLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivityLog model
   */
  readonly fields: ActivityLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivityLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivityLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends ActivityLog$adminArgs<ExtArgs> = {}>(args?: Subset<T, ActivityLog$adminArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivityLog model
   */
  interface ActivityLogFieldRefs {
    readonly id: FieldRef<"ActivityLog", 'Int'>
    readonly action: FieldRef<"ActivityLog", 'String'>
    readonly type: FieldRef<"ActivityLog", 'String'>
    readonly isRead: FieldRef<"ActivityLog", 'Boolean'>
    readonly adminId: FieldRef<"ActivityLog", 'Int'>
    readonly createdAt: FieldRef<"ActivityLog", 'DateTime'>
    readonly extraText: FieldRef<"ActivityLog", 'String'>
    readonly extraNumber: FieldRef<"ActivityLog", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ActivityLog findUnique
   */
  export type ActivityLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findUniqueOrThrow
   */
  export type ActivityLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog findFirst
   */
  export type ActivityLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findFirstOrThrow
   */
  export type ActivityLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLog to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivityLogs.
     */
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog findMany
   */
  export type ActivityLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter, which ActivityLogs to fetch.
     */
    where?: ActivityLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivityLogs to fetch.
     */
    orderBy?: ActivityLogOrderByWithRelationInput | ActivityLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivityLogs.
     */
    cursor?: ActivityLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivityLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivityLogs.
     */
    skip?: number
    distinct?: ActivityLogScalarFieldEnum | ActivityLogScalarFieldEnum[]
  }

  /**
   * ActivityLog create
   */
  export type ActivityLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivityLog.
     */
    data: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
  }

  /**
   * ActivityLog createMany
   */
  export type ActivityLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivityLogs.
     */
    data: ActivityLogCreateManyInput | ActivityLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivityLog update
   */
  export type ActivityLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivityLog.
     */
    data: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
    /**
     * Choose, which ActivityLog to update.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog updateMany
   */
  export type ActivityLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivityLogs.
     */
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyInput>
    /**
     * Filter which ActivityLogs to update
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to update.
     */
    limit?: number
  }

  /**
   * ActivityLog upsert
   */
  export type ActivityLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivityLog to update in case it exists.
     */
    where: ActivityLogWhereUniqueInput
    /**
     * In case the ActivityLog found by the `where` argument doesn't exist, create a new ActivityLog with this data.
     */
    create: XOR<ActivityLogCreateInput, ActivityLogUncheckedCreateInput>
    /**
     * In case the ActivityLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivityLogUpdateInput, ActivityLogUncheckedUpdateInput>
  }

  /**
   * ActivityLog delete
   */
  export type ActivityLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
    /**
     * Filter which ActivityLog to delete.
     */
    where: ActivityLogWhereUniqueInput
  }

  /**
   * ActivityLog deleteMany
   */
  export type ActivityLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivityLogs to delete
     */
    where?: ActivityLogWhereInput
    /**
     * Limit how many ActivityLogs to delete.
     */
    limit?: number
  }

  /**
   * ActivityLog.admin
   */
  export type ActivityLog$adminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    where?: AdminWhereInput
  }

  /**
   * ActivityLog without action
   */
  export type ActivityLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivityLog
     */
    select?: ActivityLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivityLog
     */
    omit?: ActivityLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivityLogInclude<ExtArgs> | null
  }


  /**
   * Model BookDistribution
   */

  export type AggregateBookDistribution = {
    _count: BookDistributionCountAggregateOutputType | null
    _avg: BookDistributionAvgAggregateOutputType | null
    _sum: BookDistributionSumAggregateOutputType | null
    _min: BookDistributionMinAggregateOutputType | null
    _max: BookDistributionMaxAggregateOutputType | null
  }

  export type BookDistributionAvgAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
    distributed: number | null
    target: number | null
    extraNumber: number | null
  }

  export type BookDistributionSumAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
    distributed: number | null
    target: number | null
    extraNumber: number | null
  }

  export type BookDistributionMinAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
    distributed: number | null
    target: number | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type BookDistributionMaxAggregateOutputType = {
    id: number | null
    year: number | null
    month: number | null
    distributed: number | null
    target: number | null
    updatedAt: Date | null
    extraText: string | null
    extraNumber: number | null
  }

  export type BookDistributionCountAggregateOutputType = {
    id: number
    year: number
    month: number
    distributed: number
    target: number
    updatedAt: number
    extraText: number
    extraNumber: number
    _all: number
  }


  export type BookDistributionAvgAggregateInputType = {
    id?: true
    year?: true
    month?: true
    distributed?: true
    target?: true
    extraNumber?: true
  }

  export type BookDistributionSumAggregateInputType = {
    id?: true
    year?: true
    month?: true
    distributed?: true
    target?: true
    extraNumber?: true
  }

  export type BookDistributionMinAggregateInputType = {
    id?: true
    year?: true
    month?: true
    distributed?: true
    target?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type BookDistributionMaxAggregateInputType = {
    id?: true
    year?: true
    month?: true
    distributed?: true
    target?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
  }

  export type BookDistributionCountAggregateInputType = {
    id?: true
    year?: true
    month?: true
    distributed?: true
    target?: true
    updatedAt?: true
    extraText?: true
    extraNumber?: true
    _all?: true
  }

  export type BookDistributionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookDistribution to aggregate.
     */
    where?: BookDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookDistributions to fetch.
     */
    orderBy?: BookDistributionOrderByWithRelationInput | BookDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookDistributions
    **/
    _count?: true | BookDistributionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookDistributionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookDistributionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookDistributionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookDistributionMaxAggregateInputType
  }

  export type GetBookDistributionAggregateType<T extends BookDistributionAggregateArgs> = {
        [P in keyof T & keyof AggregateBookDistribution]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookDistribution[P]>
      : GetScalarType<T[P], AggregateBookDistribution[P]>
  }




  export type BookDistributionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookDistributionWhereInput
    orderBy?: BookDistributionOrderByWithAggregationInput | BookDistributionOrderByWithAggregationInput[]
    by: BookDistributionScalarFieldEnum[] | BookDistributionScalarFieldEnum
    having?: BookDistributionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookDistributionCountAggregateInputType | true
    _avg?: BookDistributionAvgAggregateInputType
    _sum?: BookDistributionSumAggregateInputType
    _min?: BookDistributionMinAggregateInputType
    _max?: BookDistributionMaxAggregateInputType
  }

  export type BookDistributionGroupByOutputType = {
    id: number
    year: number
    month: number
    distributed: number
    target: number
    updatedAt: Date
    extraText: string | null
    extraNumber: number | null
    _count: BookDistributionCountAggregateOutputType | null
    _avg: BookDistributionAvgAggregateOutputType | null
    _sum: BookDistributionSumAggregateOutputType | null
    _min: BookDistributionMinAggregateOutputType | null
    _max: BookDistributionMaxAggregateOutputType | null
  }

  type GetBookDistributionGroupByPayload<T extends BookDistributionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookDistributionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookDistributionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookDistributionGroupByOutputType[P]>
            : GetScalarType<T[P], BookDistributionGroupByOutputType[P]>
        }
      >
    >


  export type BookDistributionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    month?: boolean
    distributed?: boolean
    target?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }, ExtArgs["result"]["bookDistribution"]>



  export type BookDistributionSelectScalar = {
    id?: boolean
    year?: boolean
    month?: boolean
    distributed?: boolean
    target?: boolean
    updatedAt?: boolean
    extraText?: boolean
    extraNumber?: boolean
  }

  export type BookDistributionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "year" | "month" | "distributed" | "target" | "updatedAt" | "extraText" | "extraNumber", ExtArgs["result"]["bookDistribution"]>

  export type $BookDistributionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookDistribution"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      year: number
      month: number
      distributed: number
      target: number
      updatedAt: Date
      extraText: string | null
      extraNumber: number | null
    }, ExtArgs["result"]["bookDistribution"]>
    composites: {}
  }

  type BookDistributionGetPayload<S extends boolean | null | undefined | BookDistributionDefaultArgs> = $Result.GetResult<Prisma.$BookDistributionPayload, S>

  type BookDistributionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookDistributionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookDistributionCountAggregateInputType | true
    }

  export interface BookDistributionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookDistribution'], meta: { name: 'BookDistribution' } }
    /**
     * Find zero or one BookDistribution that matches the filter.
     * @param {BookDistributionFindUniqueArgs} args - Arguments to find a BookDistribution
     * @example
     * // Get one BookDistribution
     * const bookDistribution = await prisma.bookDistribution.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookDistributionFindUniqueArgs>(args: SelectSubset<T, BookDistributionFindUniqueArgs<ExtArgs>>): Prisma__BookDistributionClient<$Result.GetResult<Prisma.$BookDistributionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BookDistribution that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookDistributionFindUniqueOrThrowArgs} args - Arguments to find a BookDistribution
     * @example
     * // Get one BookDistribution
     * const bookDistribution = await prisma.bookDistribution.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookDistributionFindUniqueOrThrowArgs>(args: SelectSubset<T, BookDistributionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookDistributionClient<$Result.GetResult<Prisma.$BookDistributionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookDistribution that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookDistributionFindFirstArgs} args - Arguments to find a BookDistribution
     * @example
     * // Get one BookDistribution
     * const bookDistribution = await prisma.bookDistribution.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookDistributionFindFirstArgs>(args?: SelectSubset<T, BookDistributionFindFirstArgs<ExtArgs>>): Prisma__BookDistributionClient<$Result.GetResult<Prisma.$BookDistributionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BookDistribution that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookDistributionFindFirstOrThrowArgs} args - Arguments to find a BookDistribution
     * @example
     * // Get one BookDistribution
     * const bookDistribution = await prisma.bookDistribution.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookDistributionFindFirstOrThrowArgs>(args?: SelectSubset<T, BookDistributionFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookDistributionClient<$Result.GetResult<Prisma.$BookDistributionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BookDistributions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookDistributionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookDistributions
     * const bookDistributions = await prisma.bookDistribution.findMany()
     * 
     * // Get first 10 BookDistributions
     * const bookDistributions = await prisma.bookDistribution.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookDistributionWithIdOnly = await prisma.bookDistribution.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookDistributionFindManyArgs>(args?: SelectSubset<T, BookDistributionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookDistributionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BookDistribution.
     * @param {BookDistributionCreateArgs} args - Arguments to create a BookDistribution.
     * @example
     * // Create one BookDistribution
     * const BookDistribution = await prisma.bookDistribution.create({
     *   data: {
     *     // ... data to create a BookDistribution
     *   }
     * })
     * 
     */
    create<T extends BookDistributionCreateArgs>(args: SelectSubset<T, BookDistributionCreateArgs<ExtArgs>>): Prisma__BookDistributionClient<$Result.GetResult<Prisma.$BookDistributionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BookDistributions.
     * @param {BookDistributionCreateManyArgs} args - Arguments to create many BookDistributions.
     * @example
     * // Create many BookDistributions
     * const bookDistribution = await prisma.bookDistribution.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookDistributionCreateManyArgs>(args?: SelectSubset<T, BookDistributionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BookDistribution.
     * @param {BookDistributionDeleteArgs} args - Arguments to delete one BookDistribution.
     * @example
     * // Delete one BookDistribution
     * const BookDistribution = await prisma.bookDistribution.delete({
     *   where: {
     *     // ... filter to delete one BookDistribution
     *   }
     * })
     * 
     */
    delete<T extends BookDistributionDeleteArgs>(args: SelectSubset<T, BookDistributionDeleteArgs<ExtArgs>>): Prisma__BookDistributionClient<$Result.GetResult<Prisma.$BookDistributionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BookDistribution.
     * @param {BookDistributionUpdateArgs} args - Arguments to update one BookDistribution.
     * @example
     * // Update one BookDistribution
     * const bookDistribution = await prisma.bookDistribution.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookDistributionUpdateArgs>(args: SelectSubset<T, BookDistributionUpdateArgs<ExtArgs>>): Prisma__BookDistributionClient<$Result.GetResult<Prisma.$BookDistributionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BookDistributions.
     * @param {BookDistributionDeleteManyArgs} args - Arguments to filter BookDistributions to delete.
     * @example
     * // Delete a few BookDistributions
     * const { count } = await prisma.bookDistribution.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDistributionDeleteManyArgs>(args?: SelectSubset<T, BookDistributionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookDistributionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookDistributions
     * const bookDistribution = await prisma.bookDistribution.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookDistributionUpdateManyArgs>(args: SelectSubset<T, BookDistributionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookDistribution.
     * @param {BookDistributionUpsertArgs} args - Arguments to update or create a BookDistribution.
     * @example
     * // Update or create a BookDistribution
     * const bookDistribution = await prisma.bookDistribution.upsert({
     *   create: {
     *     // ... data to create a BookDistribution
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookDistribution we want to update
     *   }
     * })
     */
    upsert<T extends BookDistributionUpsertArgs>(args: SelectSubset<T, BookDistributionUpsertArgs<ExtArgs>>): Prisma__BookDistributionClient<$Result.GetResult<Prisma.$BookDistributionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BookDistributions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookDistributionCountArgs} args - Arguments to filter BookDistributions to count.
     * @example
     * // Count the number of BookDistributions
     * const count = await prisma.bookDistribution.count({
     *   where: {
     *     // ... the filter for the BookDistributions we want to count
     *   }
     * })
    **/
    count<T extends BookDistributionCountArgs>(
      args?: Subset<T, BookDistributionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookDistributionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookDistributionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookDistributionAggregateArgs>(args: Subset<T, BookDistributionAggregateArgs>): Prisma.PrismaPromise<GetBookDistributionAggregateType<T>>

    /**
     * Group by BookDistribution.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookDistributionGroupByArgs} args - Group by arguments.
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
      T extends BookDistributionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookDistributionGroupByArgs['orderBy'] }
        : { orderBy?: BookDistributionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookDistributionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookDistributionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookDistribution model
   */
  readonly fields: BookDistributionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookDistribution.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookDistributionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BookDistribution model
   */
  interface BookDistributionFieldRefs {
    readonly id: FieldRef<"BookDistribution", 'Int'>
    readonly year: FieldRef<"BookDistribution", 'Int'>
    readonly month: FieldRef<"BookDistribution", 'Int'>
    readonly distributed: FieldRef<"BookDistribution", 'Int'>
    readonly target: FieldRef<"BookDistribution", 'Int'>
    readonly updatedAt: FieldRef<"BookDistribution", 'DateTime'>
    readonly extraText: FieldRef<"BookDistribution", 'String'>
    readonly extraNumber: FieldRef<"BookDistribution", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * BookDistribution findUnique
   */
  export type BookDistributionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookDistribution
     */
    select?: BookDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookDistribution
     */
    omit?: BookDistributionOmit<ExtArgs> | null
    /**
     * Filter, which BookDistribution to fetch.
     */
    where: BookDistributionWhereUniqueInput
  }

  /**
   * BookDistribution findUniqueOrThrow
   */
  export type BookDistributionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookDistribution
     */
    select?: BookDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookDistribution
     */
    omit?: BookDistributionOmit<ExtArgs> | null
    /**
     * Filter, which BookDistribution to fetch.
     */
    where: BookDistributionWhereUniqueInput
  }

  /**
   * BookDistribution findFirst
   */
  export type BookDistributionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookDistribution
     */
    select?: BookDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookDistribution
     */
    omit?: BookDistributionOmit<ExtArgs> | null
    /**
     * Filter, which BookDistribution to fetch.
     */
    where?: BookDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookDistributions to fetch.
     */
    orderBy?: BookDistributionOrderByWithRelationInput | BookDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookDistributions.
     */
    cursor?: BookDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookDistributions.
     */
    distinct?: BookDistributionScalarFieldEnum | BookDistributionScalarFieldEnum[]
  }

  /**
   * BookDistribution findFirstOrThrow
   */
  export type BookDistributionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookDistribution
     */
    select?: BookDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookDistribution
     */
    omit?: BookDistributionOmit<ExtArgs> | null
    /**
     * Filter, which BookDistribution to fetch.
     */
    where?: BookDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookDistributions to fetch.
     */
    orderBy?: BookDistributionOrderByWithRelationInput | BookDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookDistributions.
     */
    cursor?: BookDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookDistributions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookDistributions.
     */
    distinct?: BookDistributionScalarFieldEnum | BookDistributionScalarFieldEnum[]
  }

  /**
   * BookDistribution findMany
   */
  export type BookDistributionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookDistribution
     */
    select?: BookDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookDistribution
     */
    omit?: BookDistributionOmit<ExtArgs> | null
    /**
     * Filter, which BookDistributions to fetch.
     */
    where?: BookDistributionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookDistributions to fetch.
     */
    orderBy?: BookDistributionOrderByWithRelationInput | BookDistributionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookDistributions.
     */
    cursor?: BookDistributionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookDistributions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookDistributions.
     */
    skip?: number
    distinct?: BookDistributionScalarFieldEnum | BookDistributionScalarFieldEnum[]
  }

  /**
   * BookDistribution create
   */
  export type BookDistributionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookDistribution
     */
    select?: BookDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookDistribution
     */
    omit?: BookDistributionOmit<ExtArgs> | null
    /**
     * The data needed to create a BookDistribution.
     */
    data: XOR<BookDistributionCreateInput, BookDistributionUncheckedCreateInput>
  }

  /**
   * BookDistribution createMany
   */
  export type BookDistributionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookDistributions.
     */
    data: BookDistributionCreateManyInput | BookDistributionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BookDistribution update
   */
  export type BookDistributionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookDistribution
     */
    select?: BookDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookDistribution
     */
    omit?: BookDistributionOmit<ExtArgs> | null
    /**
     * The data needed to update a BookDistribution.
     */
    data: XOR<BookDistributionUpdateInput, BookDistributionUncheckedUpdateInput>
    /**
     * Choose, which BookDistribution to update.
     */
    where: BookDistributionWhereUniqueInput
  }

  /**
   * BookDistribution updateMany
   */
  export type BookDistributionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookDistributions.
     */
    data: XOR<BookDistributionUpdateManyMutationInput, BookDistributionUncheckedUpdateManyInput>
    /**
     * Filter which BookDistributions to update
     */
    where?: BookDistributionWhereInput
    /**
     * Limit how many BookDistributions to update.
     */
    limit?: number
  }

  /**
   * BookDistribution upsert
   */
  export type BookDistributionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookDistribution
     */
    select?: BookDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookDistribution
     */
    omit?: BookDistributionOmit<ExtArgs> | null
    /**
     * The filter to search for the BookDistribution to update in case it exists.
     */
    where: BookDistributionWhereUniqueInput
    /**
     * In case the BookDistribution found by the `where` argument doesn't exist, create a new BookDistribution with this data.
     */
    create: XOR<BookDistributionCreateInput, BookDistributionUncheckedCreateInput>
    /**
     * In case the BookDistribution was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookDistributionUpdateInput, BookDistributionUncheckedUpdateInput>
  }

  /**
   * BookDistribution delete
   */
  export type BookDistributionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookDistribution
     */
    select?: BookDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookDistribution
     */
    omit?: BookDistributionOmit<ExtArgs> | null
    /**
     * Filter which BookDistribution to delete.
     */
    where: BookDistributionWhereUniqueInput
  }

  /**
   * BookDistribution deleteMany
   */
  export type BookDistributionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookDistributions to delete
     */
    where?: BookDistributionWhereInput
    /**
     * Limit how many BookDistributions to delete.
     */
    limit?: number
  }

  /**
   * BookDistribution without action
   */
  export type BookDistributionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookDistribution
     */
    select?: BookDistributionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BookDistribution
     */
    omit?: BookDistributionOmit<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    avatarUrl: 'avatarUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    title: 'title',
    classId: 'classId',
    subject: 'subject',
    board: 'board',
    coverImageUrl: 'coverImageUrl',
    description: 'description',
    status: 'status',
    sortOrder: 'sortOrder',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const BookChapterScalarFieldEnum: {
    id: 'id',
    bookId: 'bookId',
    chapterNumber: 'chapterNumber',
    title: 'title',
    hindiTitle: 'hindiTitle',
    pdfUrl: 'pdfUrl',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type BookChapterScalarFieldEnum = (typeof BookChapterScalarFieldEnum)[keyof typeof BookChapterScalarFieldEnum]


  export const NoticeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    type: 'type',
    category: 'category',
    isPinned: 'isPinned',
    documentUrl: 'documentUrl',
    publishDate: 'publishDate',
    closingDate: 'closingDate',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type NoticeScalarFieldEnum = (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum]


  export const ManagingDirectorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    from: 'from',
    to: 'to',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type ManagingDirectorScalarFieldEnum = (typeof ManagingDirectorScalarFieldEnum)[keyof typeof ManagingDirectorScalarFieldEnum]


  export const BoardDirectorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    designation: 'designation',
    since: 'since',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type BoardDirectorScalarFieldEnum = (typeof BoardDirectorScalarFieldEnum)[keyof typeof BoardDirectorScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    designation: 'designation',
    type: 'type',
    department: 'department',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ManagingDirectorMessageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    designation: 'designation',
    photoUrl: 'photoUrl',
    quote: 'quote',
    welcomeNote: 'welcomeNote',
    qualityNote: 'qualityNote',
    collaboration: 'collaboration',
    movingForward: 'movingForward',
    updatedById: 'updatedById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type ManagingDirectorMessageScalarFieldEnum = (typeof ManagingDirectorMessageScalarFieldEnum)[keyof typeof ManagingDirectorMessageScalarFieldEnum]


  export const SectionScalarFieldEnum: {
    id: 'id',
    module: 'module',
    title: 'title',
    description: 'description',
    content: 'content',
    category: 'category',
    imageUrl: 'imageUrl',
    videoUrl: 'videoUrl',
    documentUrl: 'documentUrl',
    fileType: 'fileType',
    link: 'link',
    publishDate: 'publishDate',
    sortOrder: 'sortOrder',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type SectionScalarFieldEnum = (typeof SectionScalarFieldEnum)[keyof typeof SectionScalarFieldEnum]


  export const SettingScalarFieldEnum: {
    id: 'id',
    settingKey: 'settingKey',
    settingValue: 'settingValue',
    category: 'category',
    updatedById: 'updatedById',
    updatedAt: 'updatedAt',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type SettingScalarFieldEnum = (typeof SettingScalarFieldEnum)[keyof typeof SettingScalarFieldEnum]


  export const DirectoryScalarFieldEnum: {
    id: 'id',
    type: 'type',
    name: 'name',
    designation: 'designation',
    department: 'department',
    tag: 'tag',
    email: 'email',
    phone: 'phone',
    photoUrl: 'photoUrl',
    tenureFrom: 'tenureFrom',
    tenureTo: 'tenureTo',
    status: 'status',
    sortOrder: 'sortOrder',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    boardPosition: 'boardPosition',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type DirectoryScalarFieldEnum = (typeof DirectoryScalarFieldEnum)[keyof typeof DirectoryScalarFieldEnum]


  export const ActivityLogScalarFieldEnum: {
    id: 'id',
    action: 'action',
    type: 'type',
    isRead: 'isRead',
    adminId: 'adminId',
    createdAt: 'createdAt',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type ActivityLogScalarFieldEnum = (typeof ActivityLogScalarFieldEnum)[keyof typeof ActivityLogScalarFieldEnum]


  export const BookDistributionScalarFieldEnum: {
    id: 'id',
    year: 'year',
    month: 'month',
    distributed: 'distributed',
    target: 'target',
    updatedAt: 'updatedAt',
    extraText: 'extraText',
    extraNumber: 'extraNumber'
  };

  export type BookDistributionScalarFieldEnum = (typeof BookDistributionScalarFieldEnum)[keyof typeof BookDistributionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AdminOrderByRelevanceFieldEnum: {
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    passwordHash: 'passwordHash',
    avatarUrl: 'avatarUrl',
    extraText: 'extraText'
  };

  export type AdminOrderByRelevanceFieldEnum = (typeof AdminOrderByRelevanceFieldEnum)[keyof typeof AdminOrderByRelevanceFieldEnum]


  export const BookOrderByRelevanceFieldEnum: {
    title: 'title',
    subject: 'subject',
    board: 'board',
    coverImageUrl: 'coverImageUrl',
    description: 'description',
    extraText: 'extraText'
  };

  export type BookOrderByRelevanceFieldEnum = (typeof BookOrderByRelevanceFieldEnum)[keyof typeof BookOrderByRelevanceFieldEnum]


  export const BookChapterOrderByRelevanceFieldEnum: {
    title: 'title',
    hindiTitle: 'hindiTitle',
    pdfUrl: 'pdfUrl',
    extraText: 'extraText'
  };

  export type BookChapterOrderByRelevanceFieldEnum = (typeof BookChapterOrderByRelevanceFieldEnum)[keyof typeof BookChapterOrderByRelevanceFieldEnum]


  export const NoticeOrderByRelevanceFieldEnum: {
    title: 'title',
    description: 'description',
    category: 'category',
    documentUrl: 'documentUrl',
    extraText: 'extraText'
  };

  export type NoticeOrderByRelevanceFieldEnum = (typeof NoticeOrderByRelevanceFieldEnum)[keyof typeof NoticeOrderByRelevanceFieldEnum]


  export const ManagingDirectorOrderByRelevanceFieldEnum: {
    name: 'name',
    extraText: 'extraText'
  };

  export type ManagingDirectorOrderByRelevanceFieldEnum = (typeof ManagingDirectorOrderByRelevanceFieldEnum)[keyof typeof ManagingDirectorOrderByRelevanceFieldEnum]


  export const BoardDirectorOrderByRelevanceFieldEnum: {
    name: 'name',
    designation: 'designation',
    since: 'since',
    extraText: 'extraText'
  };

  export type BoardDirectorOrderByRelevanceFieldEnum = (typeof BoardDirectorOrderByRelevanceFieldEnum)[keyof typeof BoardDirectorOrderByRelevanceFieldEnum]


  export const EmployeeOrderByRelevanceFieldEnum: {
    name: 'name',
    designation: 'designation',
    department: 'department',
    extraText: 'extraText'
  };

  export type EmployeeOrderByRelevanceFieldEnum = (typeof EmployeeOrderByRelevanceFieldEnum)[keyof typeof EmployeeOrderByRelevanceFieldEnum]


  export const ManagingDirectorMessageOrderByRelevanceFieldEnum: {
    name: 'name',
    designation: 'designation',
    photoUrl: 'photoUrl',
    quote: 'quote',
    welcomeNote: 'welcomeNote',
    qualityNote: 'qualityNote',
    collaboration: 'collaboration',
    movingForward: 'movingForward',
    extraText: 'extraText'
  };

  export type ManagingDirectorMessageOrderByRelevanceFieldEnum = (typeof ManagingDirectorMessageOrderByRelevanceFieldEnum)[keyof typeof ManagingDirectorMessageOrderByRelevanceFieldEnum]


  export const SectionOrderByRelevanceFieldEnum: {
    module: 'module',
    title: 'title',
    description: 'description',
    content: 'content',
    category: 'category',
    imageUrl: 'imageUrl',
    videoUrl: 'videoUrl',
    documentUrl: 'documentUrl',
    fileType: 'fileType',
    link: 'link',
    extraText: 'extraText'
  };

  export type SectionOrderByRelevanceFieldEnum = (typeof SectionOrderByRelevanceFieldEnum)[keyof typeof SectionOrderByRelevanceFieldEnum]


  export const SettingOrderByRelevanceFieldEnum: {
    settingKey: 'settingKey',
    settingValue: 'settingValue',
    category: 'category',
    extraText: 'extraText'
  };

  export type SettingOrderByRelevanceFieldEnum = (typeof SettingOrderByRelevanceFieldEnum)[keyof typeof SettingOrderByRelevanceFieldEnum]


  export const DirectoryOrderByRelevanceFieldEnum: {
    type: 'type',
    name: 'name',
    designation: 'designation',
    department: 'department',
    tag: 'tag',
    email: 'email',
    phone: 'phone',
    photoUrl: 'photoUrl',
    tenureFrom: 'tenureFrom',
    tenureTo: 'tenureTo',
    status: 'status',
    boardPosition: 'boardPosition',
    extraText: 'extraText'
  };

  export type DirectoryOrderByRelevanceFieldEnum = (typeof DirectoryOrderByRelevanceFieldEnum)[keyof typeof DirectoryOrderByRelevanceFieldEnum]


  export const ActivityLogOrderByRelevanceFieldEnum: {
    action: 'action',
    type: 'type',
    extraText: 'extraText'
  };

  export type ActivityLogOrderByRelevanceFieldEnum = (typeof ActivityLogOrderByRelevanceFieldEnum)[keyof typeof ActivityLogOrderByRelevanceFieldEnum]


  export const BookDistributionOrderByRelevanceFieldEnum: {
    extraText: 'extraText'
  };

  export type BookDistributionOrderByRelevanceFieldEnum = (typeof BookDistributionOrderByRelevanceFieldEnum)[keyof typeof BookDistributionOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'BookStatus'
   */
  export type EnumBookStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookStatus'>
    


  /**
   * Reference to a field of type 'NoticeType'
   */
  export type EnumNoticeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NoticeType'>
    


  /**
   * Reference to a field of type 'EmployeeType'
   */
  export type EnumEmployeeTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EmployeeType'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    fullName?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    phone?: StringNullableFilter<"Admin"> | string | null
    passwordHash?: StringFilter<"Admin"> | string
    avatarUrl?: StringNullableFilter<"Admin"> | string | null
    isActive?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    extraText?: StringNullableFilter<"Admin"> | string | null
    extraNumber?: FloatNullableFilter<"Admin"> | number | null
    books?: BookListRelationFilter
    notices?: NoticeListRelationFilter
    sections?: SectionListRelationFilter
    settings?: SettingListRelationFilter
    mdMessages?: ManagingDirectorMessageListRelationFilter
    activities?: ActivityLogListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    books?: BookOrderByRelationAggregateInput
    notices?: NoticeOrderByRelationAggregateInput
    sections?: SectionOrderByRelationAggregateInput
    settings?: SettingOrderByRelationAggregateInput
    mdMessages?: ManagingDirectorMessageOrderByRelationAggregateInput
    activities?: ActivityLogOrderByRelationAggregateInput
    _relevance?: AdminOrderByRelevanceInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    fullName?: StringFilter<"Admin"> | string
    phone?: StringNullableFilter<"Admin"> | string | null
    passwordHash?: StringFilter<"Admin"> | string
    avatarUrl?: StringNullableFilter<"Admin"> | string | null
    isActive?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
    extraText?: StringNullableFilter<"Admin"> | string | null
    extraNumber?: FloatNullableFilter<"Admin"> | number | null
    books?: BookListRelationFilter
    notices?: NoticeListRelationFilter
    sections?: SectionListRelationFilter
    settings?: SettingListRelationFilter
    mdMessages?: ManagingDirectorMessageListRelationFilter
    activities?: ActivityLogListRelationFilter
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    fullName?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    phone?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    passwordHash?: StringWithAggregatesFilter<"Admin"> | string
    avatarUrl?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    isActive?: BoolWithAggregatesFilter<"Admin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    extraText?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"Admin"> | number | null
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    classId?: IntFilter<"Book"> | number
    subject?: StringNullableFilter<"Book"> | string | null
    board?: StringNullableFilter<"Book"> | string | null
    coverImageUrl?: StringNullableFilter<"Book"> | string | null
    description?: StringNullableFilter<"Book"> | string | null
    status?: EnumBookStatusFilter<"Book"> | $Enums.BookStatus
    sortOrder?: IntNullableFilter<"Book"> | number | null
    createdById?: IntNullableFilter<"Book"> | number | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    extraText?: StringNullableFilter<"Book"> | string | null
    extraNumber?: FloatNullableFilter<"Book"> | number | null
    createdBy?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    chapters?: BookChapterListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    classId?: SortOrder
    subject?: SortOrderInput | SortOrder
    board?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    sortOrder?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    createdBy?: AdminOrderByWithRelationInput
    chapters?: BookChapterOrderByRelationAggregateInput
    _relevance?: BookOrderByRelevanceInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    title?: StringFilter<"Book"> | string
    classId?: IntFilter<"Book"> | number
    subject?: StringNullableFilter<"Book"> | string | null
    board?: StringNullableFilter<"Book"> | string | null
    coverImageUrl?: StringNullableFilter<"Book"> | string | null
    description?: StringNullableFilter<"Book"> | string | null
    status?: EnumBookStatusFilter<"Book"> | $Enums.BookStatus
    sortOrder?: IntNullableFilter<"Book"> | number | null
    createdById?: IntNullableFilter<"Book"> | number | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    extraText?: StringNullableFilter<"Book"> | string | null
    extraNumber?: FloatNullableFilter<"Book"> | number | null
    createdBy?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
    chapters?: BookChapterListRelationFilter
  }, "id">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    classId?: SortOrder
    subject?: SortOrderInput | SortOrder
    board?: SortOrderInput | SortOrder
    coverImageUrl?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    sortOrder?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    title?: StringWithAggregatesFilter<"Book"> | string
    classId?: IntWithAggregatesFilter<"Book"> | number
    subject?: StringNullableWithAggregatesFilter<"Book"> | string | null
    board?: StringNullableWithAggregatesFilter<"Book"> | string | null
    coverImageUrl?: StringNullableWithAggregatesFilter<"Book"> | string | null
    description?: StringNullableWithAggregatesFilter<"Book"> | string | null
    status?: EnumBookStatusWithAggregatesFilter<"Book"> | $Enums.BookStatus
    sortOrder?: IntNullableWithAggregatesFilter<"Book"> | number | null
    createdById?: IntNullableWithAggregatesFilter<"Book"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Book"> | Date | string
    extraText?: StringNullableWithAggregatesFilter<"Book"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"Book"> | number | null
  }

  export type BookChapterWhereInput = {
    AND?: BookChapterWhereInput | BookChapterWhereInput[]
    OR?: BookChapterWhereInput[]
    NOT?: BookChapterWhereInput | BookChapterWhereInput[]
    id?: IntFilter<"BookChapter"> | number
    bookId?: IntFilter<"BookChapter"> | number
    chapterNumber?: IntFilter<"BookChapter"> | number
    title?: StringNullableFilter<"BookChapter"> | string | null
    hindiTitle?: StringNullableFilter<"BookChapter"> | string | null
    pdfUrl?: StringNullableFilter<"BookChapter"> | string | null
    sortOrder?: IntNullableFilter<"BookChapter"> | number | null
    createdAt?: DateTimeFilter<"BookChapter"> | Date | string
    extraText?: StringNullableFilter<"BookChapter"> | string | null
    extraNumber?: FloatNullableFilter<"BookChapter"> | number | null
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type BookChapterOrderByWithRelationInput = {
    id?: SortOrder
    bookId?: SortOrder
    chapterNumber?: SortOrder
    title?: SortOrderInput | SortOrder
    hindiTitle?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    book?: BookOrderByWithRelationInput
    _relevance?: BookChapterOrderByRelevanceInput
  }

  export type BookChapterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BookChapterWhereInput | BookChapterWhereInput[]
    OR?: BookChapterWhereInput[]
    NOT?: BookChapterWhereInput | BookChapterWhereInput[]
    bookId?: IntFilter<"BookChapter"> | number
    chapterNumber?: IntFilter<"BookChapter"> | number
    title?: StringNullableFilter<"BookChapter"> | string | null
    hindiTitle?: StringNullableFilter<"BookChapter"> | string | null
    pdfUrl?: StringNullableFilter<"BookChapter"> | string | null
    sortOrder?: IntNullableFilter<"BookChapter"> | number | null
    createdAt?: DateTimeFilter<"BookChapter"> | Date | string
    extraText?: StringNullableFilter<"BookChapter"> | string | null
    extraNumber?: FloatNullableFilter<"BookChapter"> | number | null
    book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "id">

  export type BookChapterOrderByWithAggregationInput = {
    id?: SortOrder
    bookId?: SortOrder
    chapterNumber?: SortOrder
    title?: SortOrderInput | SortOrder
    hindiTitle?: SortOrderInput | SortOrder
    pdfUrl?: SortOrderInput | SortOrder
    sortOrder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: BookChapterCountOrderByAggregateInput
    _avg?: BookChapterAvgOrderByAggregateInput
    _max?: BookChapterMaxOrderByAggregateInput
    _min?: BookChapterMinOrderByAggregateInput
    _sum?: BookChapterSumOrderByAggregateInput
  }

  export type BookChapterScalarWhereWithAggregatesInput = {
    AND?: BookChapterScalarWhereWithAggregatesInput | BookChapterScalarWhereWithAggregatesInput[]
    OR?: BookChapterScalarWhereWithAggregatesInput[]
    NOT?: BookChapterScalarWhereWithAggregatesInput | BookChapterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookChapter"> | number
    bookId?: IntWithAggregatesFilter<"BookChapter"> | number
    chapterNumber?: IntWithAggregatesFilter<"BookChapter"> | number
    title?: StringNullableWithAggregatesFilter<"BookChapter"> | string | null
    hindiTitle?: StringNullableWithAggregatesFilter<"BookChapter"> | string | null
    pdfUrl?: StringNullableWithAggregatesFilter<"BookChapter"> | string | null
    sortOrder?: IntNullableWithAggregatesFilter<"BookChapter"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"BookChapter"> | Date | string
    extraText?: StringNullableWithAggregatesFilter<"BookChapter"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"BookChapter"> | number | null
  }

  export type NoticeWhereInput = {
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    id?: IntFilter<"Notice"> | number
    title?: StringFilter<"Notice"> | string
    description?: StringNullableFilter<"Notice"> | string | null
    type?: EnumNoticeTypeFilter<"Notice"> | $Enums.NoticeType
    category?: StringNullableFilter<"Notice"> | string | null
    isPinned?: BoolNullableFilter<"Notice"> | boolean | null
    documentUrl?: StringNullableFilter<"Notice"> | string | null
    publishDate?: DateTimeNullableFilter<"Notice"> | Date | string | null
    closingDate?: DateTimeNullableFilter<"Notice"> | Date | string | null
    createdById?: IntNullableFilter<"Notice"> | number | null
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
    extraText?: StringNullableFilter<"Notice"> | string | null
    extraNumber?: FloatNullableFilter<"Notice"> | number | null
    createdBy?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type NoticeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    category?: SortOrderInput | SortOrder
    isPinned?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    publishDate?: SortOrderInput | SortOrder
    closingDate?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    createdBy?: AdminOrderByWithRelationInput
    _relevance?: NoticeOrderByRelevanceInput
  }

  export type NoticeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NoticeWhereInput | NoticeWhereInput[]
    OR?: NoticeWhereInput[]
    NOT?: NoticeWhereInput | NoticeWhereInput[]
    title?: StringFilter<"Notice"> | string
    description?: StringNullableFilter<"Notice"> | string | null
    type?: EnumNoticeTypeFilter<"Notice"> | $Enums.NoticeType
    category?: StringNullableFilter<"Notice"> | string | null
    isPinned?: BoolNullableFilter<"Notice"> | boolean | null
    documentUrl?: StringNullableFilter<"Notice"> | string | null
    publishDate?: DateTimeNullableFilter<"Notice"> | Date | string | null
    closingDate?: DateTimeNullableFilter<"Notice"> | Date | string | null
    createdById?: IntNullableFilter<"Notice"> | number | null
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
    extraText?: StringNullableFilter<"Notice"> | string | null
    extraNumber?: FloatNullableFilter<"Notice"> | number | null
    createdBy?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id">

  export type NoticeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    type?: SortOrder
    category?: SortOrderInput | SortOrder
    isPinned?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    publishDate?: SortOrderInput | SortOrder
    closingDate?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: NoticeCountOrderByAggregateInput
    _avg?: NoticeAvgOrderByAggregateInput
    _max?: NoticeMaxOrderByAggregateInput
    _min?: NoticeMinOrderByAggregateInput
    _sum?: NoticeSumOrderByAggregateInput
  }

  export type NoticeScalarWhereWithAggregatesInput = {
    AND?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    OR?: NoticeScalarWhereWithAggregatesInput[]
    NOT?: NoticeScalarWhereWithAggregatesInput | NoticeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notice"> | number
    title?: StringWithAggregatesFilter<"Notice"> | string
    description?: StringNullableWithAggregatesFilter<"Notice"> | string | null
    type?: EnumNoticeTypeWithAggregatesFilter<"Notice"> | $Enums.NoticeType
    category?: StringNullableWithAggregatesFilter<"Notice"> | string | null
    isPinned?: BoolNullableWithAggregatesFilter<"Notice"> | boolean | null
    documentUrl?: StringNullableWithAggregatesFilter<"Notice"> | string | null
    publishDate?: DateTimeNullableWithAggregatesFilter<"Notice"> | Date | string | null
    closingDate?: DateTimeNullableWithAggregatesFilter<"Notice"> | Date | string | null
    createdById?: IntNullableWithAggregatesFilter<"Notice"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notice"> | Date | string
    extraText?: StringNullableWithAggregatesFilter<"Notice"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"Notice"> | number | null
  }

  export type ManagingDirectorWhereInput = {
    AND?: ManagingDirectorWhereInput | ManagingDirectorWhereInput[]
    OR?: ManagingDirectorWhereInput[]
    NOT?: ManagingDirectorWhereInput | ManagingDirectorWhereInput[]
    id?: IntFilter<"ManagingDirector"> | number
    name?: StringFilter<"ManagingDirector"> | string
    from?: DateTimeFilter<"ManagingDirector"> | Date | string
    to?: DateTimeFilter<"ManagingDirector"> | Date | string
    createdAt?: DateTimeFilter<"ManagingDirector"> | Date | string
    updatedAt?: DateTimeFilter<"ManagingDirector"> | Date | string
    extraText?: StringNullableFilter<"ManagingDirector"> | string | null
    extraNumber?: FloatNullableFilter<"ManagingDirector"> | number | null
  }

  export type ManagingDirectorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _relevance?: ManagingDirectorOrderByRelevanceInput
  }

  export type ManagingDirectorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ManagingDirectorWhereInput | ManagingDirectorWhereInput[]
    OR?: ManagingDirectorWhereInput[]
    NOT?: ManagingDirectorWhereInput | ManagingDirectorWhereInput[]
    name?: StringFilter<"ManagingDirector"> | string
    from?: DateTimeFilter<"ManagingDirector"> | Date | string
    to?: DateTimeFilter<"ManagingDirector"> | Date | string
    createdAt?: DateTimeFilter<"ManagingDirector"> | Date | string
    updatedAt?: DateTimeFilter<"ManagingDirector"> | Date | string
    extraText?: StringNullableFilter<"ManagingDirector"> | string | null
    extraNumber?: FloatNullableFilter<"ManagingDirector"> | number | null
  }, "id">

  export type ManagingDirectorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: ManagingDirectorCountOrderByAggregateInput
    _avg?: ManagingDirectorAvgOrderByAggregateInput
    _max?: ManagingDirectorMaxOrderByAggregateInput
    _min?: ManagingDirectorMinOrderByAggregateInput
    _sum?: ManagingDirectorSumOrderByAggregateInput
  }

  export type ManagingDirectorScalarWhereWithAggregatesInput = {
    AND?: ManagingDirectorScalarWhereWithAggregatesInput | ManagingDirectorScalarWhereWithAggregatesInput[]
    OR?: ManagingDirectorScalarWhereWithAggregatesInput[]
    NOT?: ManagingDirectorScalarWhereWithAggregatesInput | ManagingDirectorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ManagingDirector"> | number
    name?: StringWithAggregatesFilter<"ManagingDirector"> | string
    from?: DateTimeWithAggregatesFilter<"ManagingDirector"> | Date | string
    to?: DateTimeWithAggregatesFilter<"ManagingDirector"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"ManagingDirector"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ManagingDirector"> | Date | string
    extraText?: StringNullableWithAggregatesFilter<"ManagingDirector"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"ManagingDirector"> | number | null
  }

  export type BoardDirectorWhereInput = {
    AND?: BoardDirectorWhereInput | BoardDirectorWhereInput[]
    OR?: BoardDirectorWhereInput[]
    NOT?: BoardDirectorWhereInput | BoardDirectorWhereInput[]
    id?: IntFilter<"BoardDirector"> | number
    name?: StringFilter<"BoardDirector"> | string
    designation?: StringFilter<"BoardDirector"> | string
    since?: StringFilter<"BoardDirector"> | string
    createdAt?: DateTimeFilter<"BoardDirector"> | Date | string
    updatedAt?: DateTimeFilter<"BoardDirector"> | Date | string
    extraText?: StringNullableFilter<"BoardDirector"> | string | null
    extraNumber?: FloatNullableFilter<"BoardDirector"> | number | null
  }

  export type BoardDirectorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    since?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _relevance?: BoardDirectorOrderByRelevanceInput
  }

  export type BoardDirectorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BoardDirectorWhereInput | BoardDirectorWhereInput[]
    OR?: BoardDirectorWhereInput[]
    NOT?: BoardDirectorWhereInput | BoardDirectorWhereInput[]
    name?: StringFilter<"BoardDirector"> | string
    designation?: StringFilter<"BoardDirector"> | string
    since?: StringFilter<"BoardDirector"> | string
    createdAt?: DateTimeFilter<"BoardDirector"> | Date | string
    updatedAt?: DateTimeFilter<"BoardDirector"> | Date | string
    extraText?: StringNullableFilter<"BoardDirector"> | string | null
    extraNumber?: FloatNullableFilter<"BoardDirector"> | number | null
  }, "id">

  export type BoardDirectorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    since?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: BoardDirectorCountOrderByAggregateInput
    _avg?: BoardDirectorAvgOrderByAggregateInput
    _max?: BoardDirectorMaxOrderByAggregateInput
    _min?: BoardDirectorMinOrderByAggregateInput
    _sum?: BoardDirectorSumOrderByAggregateInput
  }

  export type BoardDirectorScalarWhereWithAggregatesInput = {
    AND?: BoardDirectorScalarWhereWithAggregatesInput | BoardDirectorScalarWhereWithAggregatesInput[]
    OR?: BoardDirectorScalarWhereWithAggregatesInput[]
    NOT?: BoardDirectorScalarWhereWithAggregatesInput | BoardDirectorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BoardDirector"> | number
    name?: StringWithAggregatesFilter<"BoardDirector"> | string
    designation?: StringWithAggregatesFilter<"BoardDirector"> | string
    since?: StringWithAggregatesFilter<"BoardDirector"> | string
    createdAt?: DateTimeWithAggregatesFilter<"BoardDirector"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"BoardDirector"> | Date | string
    extraText?: StringNullableWithAggregatesFilter<"BoardDirector"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"BoardDirector"> | number | null
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    name?: StringFilter<"Employee"> | string
    designation?: StringFilter<"Employee"> | string
    type?: EnumEmployeeTypeFilter<"Employee"> | $Enums.EmployeeType
    department?: StringFilter<"Employee"> | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    extraText?: StringNullableFilter<"Employee"> | string | null
    extraNumber?: FloatNullableFilter<"Employee"> | number | null
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    type?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _relevance?: EmployeeOrderByRelevanceInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    designation?: StringFilter<"Employee"> | string
    type?: EnumEmployeeTypeFilter<"Employee"> | $Enums.EmployeeType
    department?: StringFilter<"Employee"> | string
    createdAt?: DateTimeFilter<"Employee"> | Date | string
    updatedAt?: DateTimeFilter<"Employee"> | Date | string
    extraText?: StringNullableFilter<"Employee"> | string | null
    extraNumber?: FloatNullableFilter<"Employee"> | number | null
  }, "id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    type?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    name?: StringWithAggregatesFilter<"Employee"> | string
    designation?: StringWithAggregatesFilter<"Employee"> | string
    type?: EnumEmployeeTypeWithAggregatesFilter<"Employee"> | $Enums.EmployeeType
    department?: StringWithAggregatesFilter<"Employee"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    extraText?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"Employee"> | number | null
  }

  export type ManagingDirectorMessageWhereInput = {
    AND?: ManagingDirectorMessageWhereInput | ManagingDirectorMessageWhereInput[]
    OR?: ManagingDirectorMessageWhereInput[]
    NOT?: ManagingDirectorMessageWhereInput | ManagingDirectorMessageWhereInput[]
    id?: IntFilter<"ManagingDirectorMessage"> | number
    name?: StringFilter<"ManagingDirectorMessage"> | string
    designation?: StringFilter<"ManagingDirectorMessage"> | string
    photoUrl?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    quote?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    welcomeNote?: StringFilter<"ManagingDirectorMessage"> | string
    qualityNote?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    collaboration?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    movingForward?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    updatedById?: IntNullableFilter<"ManagingDirectorMessage"> | number | null
    createdAt?: DateTimeFilter<"ManagingDirectorMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ManagingDirectorMessage"> | Date | string
    extraText?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    extraNumber?: FloatNullableFilter<"ManagingDirectorMessage"> | number | null
    updatedBy?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type ManagingDirectorMessageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    quote?: SortOrderInput | SortOrder
    welcomeNote?: SortOrder
    qualityNote?: SortOrderInput | SortOrder
    collaboration?: SortOrderInput | SortOrder
    movingForward?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    updatedBy?: AdminOrderByWithRelationInput
    _relevance?: ManagingDirectorMessageOrderByRelevanceInput
  }

  export type ManagingDirectorMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ManagingDirectorMessageWhereInput | ManagingDirectorMessageWhereInput[]
    OR?: ManagingDirectorMessageWhereInput[]
    NOT?: ManagingDirectorMessageWhereInput | ManagingDirectorMessageWhereInput[]
    name?: StringFilter<"ManagingDirectorMessage"> | string
    designation?: StringFilter<"ManagingDirectorMessage"> | string
    photoUrl?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    quote?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    welcomeNote?: StringFilter<"ManagingDirectorMessage"> | string
    qualityNote?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    collaboration?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    movingForward?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    updatedById?: IntNullableFilter<"ManagingDirectorMessage"> | number | null
    createdAt?: DateTimeFilter<"ManagingDirectorMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ManagingDirectorMessage"> | Date | string
    extraText?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    extraNumber?: FloatNullableFilter<"ManagingDirectorMessage"> | number | null
    updatedBy?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id">

  export type ManagingDirectorMessageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    quote?: SortOrderInput | SortOrder
    welcomeNote?: SortOrder
    qualityNote?: SortOrderInput | SortOrder
    collaboration?: SortOrderInput | SortOrder
    movingForward?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: ManagingDirectorMessageCountOrderByAggregateInput
    _avg?: ManagingDirectorMessageAvgOrderByAggregateInput
    _max?: ManagingDirectorMessageMaxOrderByAggregateInput
    _min?: ManagingDirectorMessageMinOrderByAggregateInput
    _sum?: ManagingDirectorMessageSumOrderByAggregateInput
  }

  export type ManagingDirectorMessageScalarWhereWithAggregatesInput = {
    AND?: ManagingDirectorMessageScalarWhereWithAggregatesInput | ManagingDirectorMessageScalarWhereWithAggregatesInput[]
    OR?: ManagingDirectorMessageScalarWhereWithAggregatesInput[]
    NOT?: ManagingDirectorMessageScalarWhereWithAggregatesInput | ManagingDirectorMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ManagingDirectorMessage"> | number
    name?: StringWithAggregatesFilter<"ManagingDirectorMessage"> | string
    designation?: StringWithAggregatesFilter<"ManagingDirectorMessage"> | string
    photoUrl?: StringNullableWithAggregatesFilter<"ManagingDirectorMessage"> | string | null
    quote?: StringNullableWithAggregatesFilter<"ManagingDirectorMessage"> | string | null
    welcomeNote?: StringWithAggregatesFilter<"ManagingDirectorMessage"> | string
    qualityNote?: StringNullableWithAggregatesFilter<"ManagingDirectorMessage"> | string | null
    collaboration?: StringNullableWithAggregatesFilter<"ManagingDirectorMessage"> | string | null
    movingForward?: StringNullableWithAggregatesFilter<"ManagingDirectorMessage"> | string | null
    updatedById?: IntNullableWithAggregatesFilter<"ManagingDirectorMessage"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ManagingDirectorMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ManagingDirectorMessage"> | Date | string
    extraText?: StringNullableWithAggregatesFilter<"ManagingDirectorMessage"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"ManagingDirectorMessage"> | number | null
  }

  export type SectionWhereInput = {
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    id?: IntFilter<"Section"> | number
    module?: StringFilter<"Section"> | string
    title?: StringFilter<"Section"> | string
    description?: StringNullableFilter<"Section"> | string | null
    content?: StringNullableFilter<"Section"> | string | null
    category?: StringNullableFilter<"Section"> | string | null
    imageUrl?: StringNullableFilter<"Section"> | string | null
    videoUrl?: StringNullableFilter<"Section"> | string | null
    documentUrl?: StringNullableFilter<"Section"> | string | null
    fileType?: StringNullableFilter<"Section"> | string | null
    link?: StringNullableFilter<"Section"> | string | null
    publishDate?: DateTimeNullableFilter<"Section"> | Date | string | null
    sortOrder?: IntNullableFilter<"Section"> | number | null
    createdById?: IntNullableFilter<"Section"> | number | null
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    extraText?: StringNullableFilter<"Section"> | string | null
    extraNumber?: FloatNullableFilter<"Section"> | number | null
    createdBy?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type SectionOrderByWithRelationInput = {
    id?: SortOrder
    module?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    fileType?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    publishDate?: SortOrderInput | SortOrder
    sortOrder?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    createdBy?: AdminOrderByWithRelationInput
    _relevance?: SectionOrderByRelevanceInput
  }

  export type SectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SectionWhereInput | SectionWhereInput[]
    OR?: SectionWhereInput[]
    NOT?: SectionWhereInput | SectionWhereInput[]
    module?: StringFilter<"Section"> | string
    title?: StringFilter<"Section"> | string
    description?: StringNullableFilter<"Section"> | string | null
    content?: StringNullableFilter<"Section"> | string | null
    category?: StringNullableFilter<"Section"> | string | null
    imageUrl?: StringNullableFilter<"Section"> | string | null
    videoUrl?: StringNullableFilter<"Section"> | string | null
    documentUrl?: StringNullableFilter<"Section"> | string | null
    fileType?: StringNullableFilter<"Section"> | string | null
    link?: StringNullableFilter<"Section"> | string | null
    publishDate?: DateTimeNullableFilter<"Section"> | Date | string | null
    sortOrder?: IntNullableFilter<"Section"> | number | null
    createdById?: IntNullableFilter<"Section"> | number | null
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    extraText?: StringNullableFilter<"Section"> | string | null
    extraNumber?: FloatNullableFilter<"Section"> | number | null
    createdBy?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id">

  export type SectionOrderByWithAggregationInput = {
    id?: SortOrder
    module?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    documentUrl?: SortOrderInput | SortOrder
    fileType?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    publishDate?: SortOrderInput | SortOrder
    sortOrder?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: SectionCountOrderByAggregateInput
    _avg?: SectionAvgOrderByAggregateInput
    _max?: SectionMaxOrderByAggregateInput
    _min?: SectionMinOrderByAggregateInput
    _sum?: SectionSumOrderByAggregateInput
  }

  export type SectionScalarWhereWithAggregatesInput = {
    AND?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    OR?: SectionScalarWhereWithAggregatesInput[]
    NOT?: SectionScalarWhereWithAggregatesInput | SectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Section"> | number
    module?: StringWithAggregatesFilter<"Section"> | string
    title?: StringWithAggregatesFilter<"Section"> | string
    description?: StringNullableWithAggregatesFilter<"Section"> | string | null
    content?: StringNullableWithAggregatesFilter<"Section"> | string | null
    category?: StringNullableWithAggregatesFilter<"Section"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"Section"> | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"Section"> | string | null
    documentUrl?: StringNullableWithAggregatesFilter<"Section"> | string | null
    fileType?: StringNullableWithAggregatesFilter<"Section"> | string | null
    link?: StringNullableWithAggregatesFilter<"Section"> | string | null
    publishDate?: DateTimeNullableWithAggregatesFilter<"Section"> | Date | string | null
    sortOrder?: IntNullableWithAggregatesFilter<"Section"> | number | null
    createdById?: IntNullableWithAggregatesFilter<"Section"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Section"> | Date | string
    extraText?: StringNullableWithAggregatesFilter<"Section"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"Section"> | number | null
  }

  export type SettingWhereInput = {
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    id?: IntFilter<"Setting"> | number
    settingKey?: StringFilter<"Setting"> | string
    settingValue?: StringNullableFilter<"Setting"> | string | null
    category?: StringNullableFilter<"Setting"> | string | null
    updatedById?: IntNullableFilter<"Setting"> | number | null
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
    extraText?: StringNullableFilter<"Setting"> | string | null
    extraNumber?: FloatNullableFilter<"Setting"> | number | null
    updatedBy?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type SettingOrderByWithRelationInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    updatedBy?: AdminOrderByWithRelationInput
    _relevance?: SettingOrderByRelevanceInput
  }

  export type SettingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    settingKey?: string
    AND?: SettingWhereInput | SettingWhereInput[]
    OR?: SettingWhereInput[]
    NOT?: SettingWhereInput | SettingWhereInput[]
    settingValue?: StringNullableFilter<"Setting"> | string | null
    category?: StringNullableFilter<"Setting"> | string | null
    updatedById?: IntNullableFilter<"Setting"> | number | null
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
    extraText?: StringNullableFilter<"Setting"> | string | null
    extraNumber?: FloatNullableFilter<"Setting"> | number | null
    updatedBy?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id" | "settingKey">

  export type SettingOrderByWithAggregationInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: SettingCountOrderByAggregateInput
    _avg?: SettingAvgOrderByAggregateInput
    _max?: SettingMaxOrderByAggregateInput
    _min?: SettingMinOrderByAggregateInput
    _sum?: SettingSumOrderByAggregateInput
  }

  export type SettingScalarWhereWithAggregatesInput = {
    AND?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    OR?: SettingScalarWhereWithAggregatesInput[]
    NOT?: SettingScalarWhereWithAggregatesInput | SettingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Setting"> | number
    settingKey?: StringWithAggregatesFilter<"Setting"> | string
    settingValue?: StringNullableWithAggregatesFilter<"Setting"> | string | null
    category?: StringNullableWithAggregatesFilter<"Setting"> | string | null
    updatedById?: IntNullableWithAggregatesFilter<"Setting"> | number | null
    updatedAt?: DateTimeWithAggregatesFilter<"Setting"> | Date | string
    extraText?: StringNullableWithAggregatesFilter<"Setting"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"Setting"> | number | null
  }

  export type DirectoryWhereInput = {
    AND?: DirectoryWhereInput | DirectoryWhereInput[]
    OR?: DirectoryWhereInput[]
    NOT?: DirectoryWhereInput | DirectoryWhereInput[]
    id?: IntFilter<"Directory"> | number
    type?: StringFilter<"Directory"> | string
    name?: StringFilter<"Directory"> | string
    designation?: StringNullableFilter<"Directory"> | string | null
    department?: StringNullableFilter<"Directory"> | string | null
    tag?: StringNullableFilter<"Directory"> | string | null
    email?: StringNullableFilter<"Directory"> | string | null
    phone?: StringNullableFilter<"Directory"> | string | null
    photoUrl?: StringNullableFilter<"Directory"> | string | null
    tenureFrom?: StringNullableFilter<"Directory"> | string | null
    tenureTo?: StringNullableFilter<"Directory"> | string | null
    status?: StringNullableFilter<"Directory"> | string | null
    sortOrder?: IntNullableFilter<"Directory"> | number | null
    createdAt?: DateTimeFilter<"Directory"> | Date | string
    updatedAt?: DateTimeFilter<"Directory"> | Date | string
    boardPosition?: StringNullableFilter<"Directory"> | string | null
    extraText?: StringNullableFilter<"Directory"> | string | null
    extraNumber?: FloatNullableFilter<"Directory"> | number | null
  }

  export type DirectoryOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    designation?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    tag?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    tenureFrom?: SortOrderInput | SortOrder
    tenureTo?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    sortOrder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boardPosition?: SortOrderInput | SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _relevance?: DirectoryOrderByRelevanceInput
  }

  export type DirectoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DirectoryWhereInput | DirectoryWhereInput[]
    OR?: DirectoryWhereInput[]
    NOT?: DirectoryWhereInput | DirectoryWhereInput[]
    type?: StringFilter<"Directory"> | string
    name?: StringFilter<"Directory"> | string
    designation?: StringNullableFilter<"Directory"> | string | null
    department?: StringNullableFilter<"Directory"> | string | null
    tag?: StringNullableFilter<"Directory"> | string | null
    email?: StringNullableFilter<"Directory"> | string | null
    phone?: StringNullableFilter<"Directory"> | string | null
    photoUrl?: StringNullableFilter<"Directory"> | string | null
    tenureFrom?: StringNullableFilter<"Directory"> | string | null
    tenureTo?: StringNullableFilter<"Directory"> | string | null
    status?: StringNullableFilter<"Directory"> | string | null
    sortOrder?: IntNullableFilter<"Directory"> | number | null
    createdAt?: DateTimeFilter<"Directory"> | Date | string
    updatedAt?: DateTimeFilter<"Directory"> | Date | string
    boardPosition?: StringNullableFilter<"Directory"> | string | null
    extraText?: StringNullableFilter<"Directory"> | string | null
    extraNumber?: FloatNullableFilter<"Directory"> | number | null
  }, "id">

  export type DirectoryOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    designation?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    tag?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    tenureFrom?: SortOrderInput | SortOrder
    tenureTo?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    sortOrder?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boardPosition?: SortOrderInput | SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: DirectoryCountOrderByAggregateInput
    _avg?: DirectoryAvgOrderByAggregateInput
    _max?: DirectoryMaxOrderByAggregateInput
    _min?: DirectoryMinOrderByAggregateInput
    _sum?: DirectorySumOrderByAggregateInput
  }

  export type DirectoryScalarWhereWithAggregatesInput = {
    AND?: DirectoryScalarWhereWithAggregatesInput | DirectoryScalarWhereWithAggregatesInput[]
    OR?: DirectoryScalarWhereWithAggregatesInput[]
    NOT?: DirectoryScalarWhereWithAggregatesInput | DirectoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Directory"> | number
    type?: StringWithAggregatesFilter<"Directory"> | string
    name?: StringWithAggregatesFilter<"Directory"> | string
    designation?: StringNullableWithAggregatesFilter<"Directory"> | string | null
    department?: StringNullableWithAggregatesFilter<"Directory"> | string | null
    tag?: StringNullableWithAggregatesFilter<"Directory"> | string | null
    email?: StringNullableWithAggregatesFilter<"Directory"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Directory"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Directory"> | string | null
    tenureFrom?: StringNullableWithAggregatesFilter<"Directory"> | string | null
    tenureTo?: StringNullableWithAggregatesFilter<"Directory"> | string | null
    status?: StringNullableWithAggregatesFilter<"Directory"> | string | null
    sortOrder?: IntNullableWithAggregatesFilter<"Directory"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Directory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Directory"> | Date | string
    boardPosition?: StringNullableWithAggregatesFilter<"Directory"> | string | null
    extraText?: StringNullableWithAggregatesFilter<"Directory"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"Directory"> | number | null
  }

  export type ActivityLogWhereInput = {
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    action?: StringFilter<"ActivityLog"> | string
    type?: StringFilter<"ActivityLog"> | string
    isRead?: BoolFilter<"ActivityLog"> | boolean
    adminId?: IntNullableFilter<"ActivityLog"> | number | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    extraText?: StringNullableFilter<"ActivityLog"> | string | null
    extraNumber?: FloatNullableFilter<"ActivityLog"> | number | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }

  export type ActivityLogOrderByWithRelationInput = {
    id?: SortOrder
    action?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    adminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    admin?: AdminOrderByWithRelationInput
    _relevance?: ActivityLogOrderByRelevanceInput
  }

  export type ActivityLogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActivityLogWhereInput | ActivityLogWhereInput[]
    OR?: ActivityLogWhereInput[]
    NOT?: ActivityLogWhereInput | ActivityLogWhereInput[]
    action?: StringFilter<"ActivityLog"> | string
    type?: StringFilter<"ActivityLog"> | string
    isRead?: BoolFilter<"ActivityLog"> | boolean
    adminId?: IntNullableFilter<"ActivityLog"> | number | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    extraText?: StringNullableFilter<"ActivityLog"> | string | null
    extraNumber?: FloatNullableFilter<"ActivityLog"> | number | null
    admin?: XOR<AdminNullableScalarRelationFilter, AdminWhereInput> | null
  }, "id">

  export type ActivityLogOrderByWithAggregationInput = {
    id?: SortOrder
    action?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    adminId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: ActivityLogCountOrderByAggregateInput
    _avg?: ActivityLogAvgOrderByAggregateInput
    _max?: ActivityLogMaxOrderByAggregateInput
    _min?: ActivityLogMinOrderByAggregateInput
    _sum?: ActivityLogSumOrderByAggregateInput
  }

  export type ActivityLogScalarWhereWithAggregatesInput = {
    AND?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    OR?: ActivityLogScalarWhereWithAggregatesInput[]
    NOT?: ActivityLogScalarWhereWithAggregatesInput | ActivityLogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivityLog"> | number
    action?: StringWithAggregatesFilter<"ActivityLog"> | string
    type?: StringWithAggregatesFilter<"ActivityLog"> | string
    isRead?: BoolWithAggregatesFilter<"ActivityLog"> | boolean
    adminId?: IntNullableWithAggregatesFilter<"ActivityLog"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ActivityLog"> | Date | string
    extraText?: StringNullableWithAggregatesFilter<"ActivityLog"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"ActivityLog"> | number | null
  }

  export type BookDistributionWhereInput = {
    AND?: BookDistributionWhereInput | BookDistributionWhereInput[]
    OR?: BookDistributionWhereInput[]
    NOT?: BookDistributionWhereInput | BookDistributionWhereInput[]
    id?: IntFilter<"BookDistribution"> | number
    year?: IntFilter<"BookDistribution"> | number
    month?: IntFilter<"BookDistribution"> | number
    distributed?: IntFilter<"BookDistribution"> | number
    target?: IntFilter<"BookDistribution"> | number
    updatedAt?: DateTimeFilter<"BookDistribution"> | Date | string
    extraText?: StringNullableFilter<"BookDistribution"> | string | null
    extraNumber?: FloatNullableFilter<"BookDistribution"> | number | null
  }

  export type BookDistributionOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    distributed?: SortOrder
    target?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _relevance?: BookDistributionOrderByRelevanceInput
  }

  export type BookDistributionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    year_month?: BookDistributionYearMonthCompoundUniqueInput
    AND?: BookDistributionWhereInput | BookDistributionWhereInput[]
    OR?: BookDistributionWhereInput[]
    NOT?: BookDistributionWhereInput | BookDistributionWhereInput[]
    year?: IntFilter<"BookDistribution"> | number
    month?: IntFilter<"BookDistribution"> | number
    distributed?: IntFilter<"BookDistribution"> | number
    target?: IntFilter<"BookDistribution"> | number
    updatedAt?: DateTimeFilter<"BookDistribution"> | Date | string
    extraText?: StringNullableFilter<"BookDistribution"> | string | null
    extraNumber?: FloatNullableFilter<"BookDistribution"> | number | null
  }, "id" | "year_month">

  export type BookDistributionOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    distributed?: SortOrder
    target?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrderInput | SortOrder
    extraNumber?: SortOrderInput | SortOrder
    _count?: BookDistributionCountOrderByAggregateInput
    _avg?: BookDistributionAvgOrderByAggregateInput
    _max?: BookDistributionMaxOrderByAggregateInput
    _min?: BookDistributionMinOrderByAggregateInput
    _sum?: BookDistributionSumOrderByAggregateInput
  }

  export type BookDistributionScalarWhereWithAggregatesInput = {
    AND?: BookDistributionScalarWhereWithAggregatesInput | BookDistributionScalarWhereWithAggregatesInput[]
    OR?: BookDistributionScalarWhereWithAggregatesInput[]
    NOT?: BookDistributionScalarWhereWithAggregatesInput | BookDistributionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BookDistribution"> | number
    year?: IntWithAggregatesFilter<"BookDistribution"> | number
    month?: IntWithAggregatesFilter<"BookDistribution"> | number
    distributed?: IntWithAggregatesFilter<"BookDistribution"> | number
    target?: IntWithAggregatesFilter<"BookDistribution"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"BookDistribution"> | Date | string
    extraText?: StringNullableWithAggregatesFilter<"BookDistribution"> | string | null
    extraNumber?: FloatNullableWithAggregatesFilter<"BookDistribution"> | number | null
  }

  export type AdminCreateInput = {
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    books?: BookCreateNestedManyWithoutCreatedByInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    sections?: SectionCreateNestedManyWithoutCreatedByInput
    settings?: SettingCreateNestedManyWithoutUpdatedByInput
    mdMessages?: ManagingDirectorMessageCreateNestedManyWithoutUpdatedByInput
    activities?: ActivityLogCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    books?: BookUncheckedCreateNestedManyWithoutCreatedByInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    sections?: SectionUncheckedCreateNestedManyWithoutCreatedByInput
    settings?: SettingUncheckedCreateNestedManyWithoutUpdatedByInput
    mdMessages?: ManagingDirectorMessageUncheckedCreateNestedManyWithoutUpdatedByInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    books?: BookUpdateManyWithoutCreatedByNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    sections?: SectionUpdateManyWithoutCreatedByNestedInput
    settings?: SettingUpdateManyWithoutUpdatedByNestedInput
    mdMessages?: ManagingDirectorMessageUpdateManyWithoutUpdatedByNestedInput
    activities?: ActivityLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    books?: BookUncheckedUpdateManyWithoutCreatedByNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    sections?: SectionUncheckedUpdateManyWithoutCreatedByNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUpdatedByNestedInput
    mdMessages?: ManagingDirectorMessageUncheckedUpdateManyWithoutUpdatedByNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type AdminUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookCreateInput = {
    title: string
    classId: number
    subject?: string | null
    board?: string | null
    coverImageUrl?: string | null
    description?: string | null
    status?: $Enums.BookStatus
    sortOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    createdBy?: AdminCreateNestedOneWithoutBooksInput
    chapters?: BookChapterCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    title: string
    classId: number
    subject?: string | null
    board?: string | null
    coverImageUrl?: string | null
    description?: string | null
    status?: $Enums.BookStatus
    sortOrder?: number | null
    createdById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    chapters?: BookChapterUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    createdBy?: AdminUpdateOneWithoutBooksNestedInput
    chapters?: BookChapterUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    chapters?: BookChapterUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    title: string
    classId: number
    subject?: string | null
    board?: string | null
    coverImageUrl?: string | null
    description?: string | null
    status?: $Enums.BookStatus
    sortOrder?: number | null
    createdById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BookUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookChapterCreateInput = {
    chapterNumber: number
    title?: string | null
    hindiTitle?: string | null
    pdfUrl?: string | null
    sortOrder?: number | null
    createdAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    book: BookCreateNestedOneWithoutChaptersInput
  }

  export type BookChapterUncheckedCreateInput = {
    id?: number
    bookId: number
    chapterNumber: number
    title?: string | null
    hindiTitle?: string | null
    pdfUrl?: string | null
    sortOrder?: number | null
    createdAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BookChapterUpdateInput = {
    chapterNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    hindiTitle?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    book?: BookUpdateOneRequiredWithoutChaptersNestedInput
  }

  export type BookChapterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    chapterNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    hindiTitle?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookChapterCreateManyInput = {
    id?: number
    bookId: number
    chapterNumber: number
    title?: string | null
    hindiTitle?: string | null
    pdfUrl?: string | null
    sortOrder?: number | null
    createdAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BookChapterUpdateManyMutationInput = {
    chapterNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    hindiTitle?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookChapterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bookId?: IntFieldUpdateOperationsInput | number
    chapterNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    hindiTitle?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NoticeCreateInput = {
    title: string
    description?: string | null
    type?: $Enums.NoticeType
    category?: string | null
    isPinned?: boolean | null
    documentUrl?: string | null
    publishDate?: Date | string | null
    closingDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    createdBy?: AdminCreateNestedOneWithoutNoticesInput
  }

  export type NoticeUncheckedCreateInput = {
    id?: number
    title: string
    description?: string | null
    type?: $Enums.NoticeType
    category?: string | null
    isPinned?: boolean | null
    documentUrl?: string | null
    publishDate?: Date | string | null
    closingDate?: Date | string | null
    createdById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type NoticeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNoticeTypeFieldUpdateOperationsInput | $Enums.NoticeType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    createdBy?: AdminUpdateOneWithoutNoticesNestedInput
  }

  export type NoticeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNoticeTypeFieldUpdateOperationsInput | $Enums.NoticeType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NoticeCreateManyInput = {
    id?: number
    title: string
    description?: string | null
    type?: $Enums.NoticeType
    category?: string | null
    isPinned?: boolean | null
    documentUrl?: string | null
    publishDate?: Date | string | null
    closingDate?: Date | string | null
    createdById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type NoticeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNoticeTypeFieldUpdateOperationsInput | $Enums.NoticeType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NoticeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNoticeTypeFieldUpdateOperationsInput | $Enums.NoticeType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ManagingDirectorCreateInput = {
    name: string
    from: Date | string
    to: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ManagingDirectorUncheckedCreateInput = {
    id?: number
    name: string
    from: Date | string
    to: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ManagingDirectorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ManagingDirectorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ManagingDirectorCreateManyInput = {
    id?: number
    name: string
    from: Date | string
    to: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ManagingDirectorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ManagingDirectorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    from?: DateTimeFieldUpdateOperationsInput | Date | string
    to?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BoardDirectorCreateInput = {
    name: string
    designation: string
    since: string
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BoardDirectorUncheckedCreateInput = {
    id?: number
    name: string
    designation: string
    since: string
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BoardDirectorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    since?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BoardDirectorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    since?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BoardDirectorCreateManyInput = {
    id?: number
    name: string
    designation: string
    since: string
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BoardDirectorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    since?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BoardDirectorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    since?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type EmployeeCreateInput = {
    name: string
    designation: string
    type?: $Enums.EmployeeType
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    name: string
    designation: string
    type?: $Enums.EmployeeType
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type EmployeeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type EmployeeCreateManyInput = {
    id?: number
    name: string
    designation: string
    type?: $Enums.EmployeeType
    department: string
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type EmployeeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    type?: EnumEmployeeTypeFieldUpdateOperationsInput | $Enums.EmployeeType
    department?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ManagingDirectorMessageCreateInput = {
    id?: number
    name: string
    designation: string
    photoUrl?: string | null
    quote?: string | null
    welcomeNote: string
    qualityNote?: string | null
    collaboration?: string | null
    movingForward?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    updatedBy?: AdminCreateNestedOneWithoutMdMessagesInput
  }

  export type ManagingDirectorMessageUncheckedCreateInput = {
    id?: number
    name: string
    designation: string
    photoUrl?: string | null
    quote?: string | null
    welcomeNote: string
    qualityNote?: string | null
    collaboration?: string | null
    movingForward?: string | null
    updatedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ManagingDirectorMessageUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeNote?: StringFieldUpdateOperationsInput | string
    qualityNote?: NullableStringFieldUpdateOperationsInput | string | null
    collaboration?: NullableStringFieldUpdateOperationsInput | string | null
    movingForward?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedBy?: AdminUpdateOneWithoutMdMessagesNestedInput
  }

  export type ManagingDirectorMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeNote?: StringFieldUpdateOperationsInput | string
    qualityNote?: NullableStringFieldUpdateOperationsInput | string | null
    collaboration?: NullableStringFieldUpdateOperationsInput | string | null
    movingForward?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ManagingDirectorMessageCreateManyInput = {
    id?: number
    name: string
    designation: string
    photoUrl?: string | null
    quote?: string | null
    welcomeNote: string
    qualityNote?: string | null
    collaboration?: string | null
    movingForward?: string | null
    updatedById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ManagingDirectorMessageUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeNote?: StringFieldUpdateOperationsInput | string
    qualityNote?: NullableStringFieldUpdateOperationsInput | string | null
    collaboration?: NullableStringFieldUpdateOperationsInput | string | null
    movingForward?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ManagingDirectorMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeNote?: StringFieldUpdateOperationsInput | string
    qualityNote?: NullableStringFieldUpdateOperationsInput | string | null
    collaboration?: NullableStringFieldUpdateOperationsInput | string | null
    movingForward?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SectionCreateInput = {
    module: string
    title: string
    description?: string | null
    content?: string | null
    category?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    documentUrl?: string | null
    fileType?: string | null
    link?: string | null
    publishDate?: Date | string | null
    sortOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    createdBy?: AdminCreateNestedOneWithoutSectionsInput
  }

  export type SectionUncheckedCreateInput = {
    id?: number
    module: string
    title: string
    description?: string | null
    content?: string | null
    category?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    documentUrl?: string | null
    fileType?: string | null
    link?: string | null
    publishDate?: Date | string | null
    sortOrder?: number | null
    createdById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type SectionUpdateInput = {
    module?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    createdBy?: AdminUpdateOneWithoutSectionsNestedInput
  }

  export type SectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    module?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SectionCreateManyInput = {
    id?: number
    module: string
    title: string
    description?: string | null
    content?: string | null
    category?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    documentUrl?: string | null
    fileType?: string | null
    link?: string | null
    publishDate?: Date | string | null
    sortOrder?: number | null
    createdById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type SectionUpdateManyMutationInput = {
    module?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    module?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SettingCreateInput = {
    settingKey: string
    settingValue?: string | null
    category?: string | null
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    updatedBy?: AdminCreateNestedOneWithoutSettingsInput
  }

  export type SettingUncheckedCreateInput = {
    id?: number
    settingKey: string
    settingValue?: string | null
    category?: string | null
    updatedById?: number | null
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type SettingUpdateInput = {
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    updatedBy?: AdminUpdateOneWithoutSettingsNestedInput
  }

  export type SettingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SettingCreateManyInput = {
    id?: number
    settingKey: string
    settingValue?: string | null
    category?: string | null
    updatedById?: number | null
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type SettingUpdateManyMutationInput = {
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SettingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DirectoryCreateInput = {
    type: string
    name: string
    designation?: string | null
    department?: string | null
    tag?: string | null
    email?: string | null
    phone?: string | null
    photoUrl?: string | null
    tenureFrom?: string | null
    tenureTo?: string | null
    status?: string | null
    sortOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    boardPosition?: string | null
    extraText?: string | null
    extraNumber?: number | null
  }

  export type DirectoryUncheckedCreateInput = {
    id?: number
    type: string
    name: string
    designation?: string | null
    department?: string | null
    tag?: string | null
    email?: string | null
    phone?: string | null
    photoUrl?: string | null
    tenureFrom?: string | null
    tenureTo?: string | null
    status?: string | null
    sortOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    boardPosition?: string | null
    extraText?: string | null
    extraNumber?: number | null
  }

  export type DirectoryUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tenureFrom?: NullableStringFieldUpdateOperationsInput | string | null
    tenureTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boardPosition?: NullableStringFieldUpdateOperationsInput | string | null
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DirectoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tenureFrom?: NullableStringFieldUpdateOperationsInput | string | null
    tenureTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boardPosition?: NullableStringFieldUpdateOperationsInput | string | null
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DirectoryCreateManyInput = {
    id?: number
    type: string
    name: string
    designation?: string | null
    department?: string | null
    tag?: string | null
    email?: string | null
    phone?: string | null
    photoUrl?: string | null
    tenureFrom?: string | null
    tenureTo?: string | null
    status?: string | null
    sortOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    boardPosition?: string | null
    extraText?: string | null
    extraNumber?: number | null
  }

  export type DirectoryUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tenureFrom?: NullableStringFieldUpdateOperationsInput | string | null
    tenureTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boardPosition?: NullableStringFieldUpdateOperationsInput | string | null
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type DirectoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    designation?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    tag?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tenureFrom?: NullableStringFieldUpdateOperationsInput | string | null
    tenureTo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    boardPosition?: NullableStringFieldUpdateOperationsInput | string | null
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ActivityLogCreateInput = {
    action: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    admin?: AdminCreateNestedOneWithoutActivitiesInput
  }

  export type ActivityLogUncheckedCreateInput = {
    id?: number
    action: string
    type?: string
    isRead?: boolean
    adminId?: number | null
    createdAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ActivityLogUpdateInput = {
    action?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    admin?: AdminUpdateOneWithoutActivitiesNestedInput
  }

  export type ActivityLogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ActivityLogCreateManyInput = {
    id?: number
    action: string
    type?: string
    isRead?: boolean
    adminId?: number | null
    createdAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ActivityLogUpdateManyMutationInput = {
    action?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ActivityLogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    adminId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookDistributionCreateInput = {
    year: number
    month: number
    distributed?: number
    target?: number
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BookDistributionUncheckedCreateInput = {
    id?: number
    year: number
    month: number
    distributed?: number
    target?: number
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BookDistributionUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    distributed?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookDistributionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    distributed?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookDistributionCreateManyInput = {
    id?: number
    year: number
    month: number
    distributed?: number
    target?: number
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BookDistributionUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    distributed?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookDistributionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    distributed?: IntFieldUpdateOperationsInput | number
    target?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BookListRelationFilter = {
    every?: BookWhereInput
    some?: BookWhereInput
    none?: BookWhereInput
  }

  export type NoticeListRelationFilter = {
    every?: NoticeWhereInput
    some?: NoticeWhereInput
    none?: NoticeWhereInput
  }

  export type SectionListRelationFilter = {
    every?: SectionWhereInput
    some?: SectionWhereInput
    none?: SectionWhereInput
  }

  export type SettingListRelationFilter = {
    every?: SettingWhereInput
    some?: SettingWhereInput
    none?: SettingWhereInput
  }

  export type ManagingDirectorMessageListRelationFilter = {
    every?: ManagingDirectorMessageWhereInput
    some?: ManagingDirectorMessageWhereInput
    none?: ManagingDirectorMessageWhereInput
  }

  export type ActivityLogListRelationFilter = {
    every?: ActivityLogWhereInput
    some?: ActivityLogWhereInput
    none?: ActivityLogWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type BookOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoticeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SettingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ManagingDirectorMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActivityLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminOrderByRelevanceInput = {
    fields: AdminOrderByRelevanceFieldEnum | AdminOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
    extraNumber?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    passwordHash?: SortOrder
    avatarUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
    extraNumber?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumBookStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookStatus[]
    notIn?: $Enums.BookStatus[]
    not?: NestedEnumBookStatusFilter<$PrismaModel> | $Enums.BookStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AdminNullableScalarRelationFilter = {
    is?: AdminWhereInput | null
    isNot?: AdminWhereInput | null
  }

  export type BookChapterListRelationFilter = {
    every?: BookChapterWhereInput
    some?: BookChapterWhereInput
    none?: BookChapterWhereInput
  }

  export type BookChapterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookOrderByRelevanceInput = {
    fields: BookOrderByRelevanceFieldEnum | BookOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    classId?: SortOrder
    subject?: SortOrder
    board?: SortOrder
    coverImageUrl?: SortOrder
    description?: SortOrder
    status?: SortOrder
    sortOrder?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    sortOrder?: SortOrder
    createdById?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    classId?: SortOrder
    subject?: SortOrder
    board?: SortOrder
    coverImageUrl?: SortOrder
    description?: SortOrder
    status?: SortOrder
    sortOrder?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    classId?: SortOrder
    subject?: SortOrder
    board?: SortOrder
    coverImageUrl?: SortOrder
    description?: SortOrder
    status?: SortOrder
    sortOrder?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
    classId?: SortOrder
    sortOrder?: SortOrder
    createdById?: SortOrder
    extraNumber?: SortOrder
  }

  export type EnumBookStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookStatus[]
    notIn?: $Enums.BookStatus[]
    not?: NestedEnumBookStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookStatusFilter<$PrismaModel>
    _max?: NestedEnumBookStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type BookChapterOrderByRelevanceInput = {
    fields: BookChapterOrderByRelevanceFieldEnum | BookChapterOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookChapterCountOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    chapterNumber?: SortOrder
    title?: SortOrder
    hindiTitle?: SortOrder
    pdfUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookChapterAvgOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    chapterNumber?: SortOrder
    sortOrder?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookChapterMaxOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    chapterNumber?: SortOrder
    title?: SortOrder
    hindiTitle?: SortOrder
    pdfUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookChapterMinOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    chapterNumber?: SortOrder
    title?: SortOrder
    hindiTitle?: SortOrder
    pdfUrl?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookChapterSumOrderByAggregateInput = {
    id?: SortOrder
    bookId?: SortOrder
    chapterNumber?: SortOrder
    sortOrder?: SortOrder
    extraNumber?: SortOrder
  }

  export type EnumNoticeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NoticeType | EnumNoticeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NoticeType[]
    notIn?: $Enums.NoticeType[]
    not?: NestedEnumNoticeTypeFilter<$PrismaModel> | $Enums.NoticeType
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NoticeOrderByRelevanceInput = {
    fields: NoticeOrderByRelevanceFieldEnum | NoticeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NoticeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    category?: SortOrder
    isPinned?: SortOrder
    documentUrl?: SortOrder
    publishDate?: SortOrder
    closingDate?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type NoticeAvgOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    extraNumber?: SortOrder
  }

  export type NoticeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    category?: SortOrder
    isPinned?: SortOrder
    documentUrl?: SortOrder
    publishDate?: SortOrder
    closingDate?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type NoticeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    type?: SortOrder
    category?: SortOrder
    isPinned?: SortOrder
    documentUrl?: SortOrder
    publishDate?: SortOrder
    closingDate?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type NoticeSumOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    extraNumber?: SortOrder
  }

  export type EnumNoticeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NoticeType | EnumNoticeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NoticeType[]
    notIn?: $Enums.NoticeType[]
    not?: NestedEnumNoticeTypeWithAggregatesFilter<$PrismaModel> | $Enums.NoticeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNoticeTypeFilter<$PrismaModel>
    _max?: NestedEnumNoticeTypeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ManagingDirectorOrderByRelevanceInput = {
    fields: ManagingDirectorOrderByRelevanceFieldEnum | ManagingDirectorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ManagingDirectorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type ManagingDirectorAvgOrderByAggregateInput = {
    id?: SortOrder
    extraNumber?: SortOrder
  }

  export type ManagingDirectorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type ManagingDirectorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    from?: SortOrder
    to?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type ManagingDirectorSumOrderByAggregateInput = {
    id?: SortOrder
    extraNumber?: SortOrder
  }

  export type BoardDirectorOrderByRelevanceInput = {
    fields: BoardDirectorOrderByRelevanceFieldEnum | BoardDirectorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BoardDirectorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    since?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type BoardDirectorAvgOrderByAggregateInput = {
    id?: SortOrder
    extraNumber?: SortOrder
  }

  export type BoardDirectorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    since?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type BoardDirectorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    since?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type BoardDirectorSumOrderByAggregateInput = {
    id?: SortOrder
    extraNumber?: SortOrder
  }

  export type EnumEmployeeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[]
    notIn?: $Enums.EmployeeType[]
    not?: NestedEnumEmployeeTypeFilter<$PrismaModel> | $Enums.EmployeeType
  }

  export type EmployeeOrderByRelevanceInput = {
    fields: EmployeeOrderByRelevanceFieldEnum | EmployeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    type?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    extraNumber?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    type?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    type?: SortOrder
    department?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    extraNumber?: SortOrder
  }

  export type EnumEmployeeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[]
    notIn?: $Enums.EmployeeType[]
    not?: NestedEnumEmployeeTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeTypeFilter<$PrismaModel>
    _max?: NestedEnumEmployeeTypeFilter<$PrismaModel>
  }

  export type ManagingDirectorMessageOrderByRelevanceInput = {
    fields: ManagingDirectorMessageOrderByRelevanceFieldEnum | ManagingDirectorMessageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ManagingDirectorMessageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    photoUrl?: SortOrder
    quote?: SortOrder
    welcomeNote?: SortOrder
    qualityNote?: SortOrder
    collaboration?: SortOrder
    movingForward?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type ManagingDirectorMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    updatedById?: SortOrder
    extraNumber?: SortOrder
  }

  export type ManagingDirectorMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    photoUrl?: SortOrder
    quote?: SortOrder
    welcomeNote?: SortOrder
    qualityNote?: SortOrder
    collaboration?: SortOrder
    movingForward?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type ManagingDirectorMessageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    photoUrl?: SortOrder
    quote?: SortOrder
    welcomeNote?: SortOrder
    qualityNote?: SortOrder
    collaboration?: SortOrder
    movingForward?: SortOrder
    updatedById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type ManagingDirectorMessageSumOrderByAggregateInput = {
    id?: SortOrder
    updatedById?: SortOrder
    extraNumber?: SortOrder
  }

  export type SectionOrderByRelevanceInput = {
    fields: SectionOrderByRelevanceFieldEnum | SectionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SectionCountOrderByAggregateInput = {
    id?: SortOrder
    module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    documentUrl?: SortOrder
    fileType?: SortOrder
    link?: SortOrder
    publishDate?: SortOrder
    sortOrder?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type SectionAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    createdById?: SortOrder
    extraNumber?: SortOrder
  }

  export type SectionMaxOrderByAggregateInput = {
    id?: SortOrder
    module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    documentUrl?: SortOrder
    fileType?: SortOrder
    link?: SortOrder
    publishDate?: SortOrder
    sortOrder?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type SectionMinOrderByAggregateInput = {
    id?: SortOrder
    module?: SortOrder
    title?: SortOrder
    description?: SortOrder
    content?: SortOrder
    category?: SortOrder
    imageUrl?: SortOrder
    videoUrl?: SortOrder
    documentUrl?: SortOrder
    fileType?: SortOrder
    link?: SortOrder
    publishDate?: SortOrder
    sortOrder?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type SectionSumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    createdById?: SortOrder
    extraNumber?: SortOrder
  }

  export type SettingOrderByRelevanceInput = {
    fields: SettingOrderByRelevanceFieldEnum | SettingOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type SettingCountOrderByAggregateInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrder
    category?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type SettingAvgOrderByAggregateInput = {
    id?: SortOrder
    updatedById?: SortOrder
    extraNumber?: SortOrder
  }

  export type SettingMaxOrderByAggregateInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrder
    category?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type SettingMinOrderByAggregateInput = {
    id?: SortOrder
    settingKey?: SortOrder
    settingValue?: SortOrder
    category?: SortOrder
    updatedById?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type SettingSumOrderByAggregateInput = {
    id?: SortOrder
    updatedById?: SortOrder
    extraNumber?: SortOrder
  }

  export type DirectoryOrderByRelevanceInput = {
    fields: DirectoryOrderByRelevanceFieldEnum | DirectoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type DirectoryCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    tag?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    photoUrl?: SortOrder
    tenureFrom?: SortOrder
    tenureTo?: SortOrder
    status?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boardPosition?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type DirectoryAvgOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    extraNumber?: SortOrder
  }

  export type DirectoryMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    tag?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    photoUrl?: SortOrder
    tenureFrom?: SortOrder
    tenureTo?: SortOrder
    status?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boardPosition?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type DirectoryMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    name?: SortOrder
    designation?: SortOrder
    department?: SortOrder
    tag?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    photoUrl?: SortOrder
    tenureFrom?: SortOrder
    tenureTo?: SortOrder
    status?: SortOrder
    sortOrder?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    boardPosition?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type DirectorySumOrderByAggregateInput = {
    id?: SortOrder
    sortOrder?: SortOrder
    extraNumber?: SortOrder
  }

  export type ActivityLogOrderByRelevanceInput = {
    fields: ActivityLogOrderByRelevanceFieldEnum | ActivityLogOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ActivityLogCountOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type ActivityLogAvgOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    extraNumber?: SortOrder
  }

  export type ActivityLogMaxOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type ActivityLogMinOrderByAggregateInput = {
    id?: SortOrder
    action?: SortOrder
    type?: SortOrder
    isRead?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type ActivityLogSumOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookDistributionOrderByRelevanceInput = {
    fields: BookDistributionOrderByRelevanceFieldEnum | BookDistributionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BookDistributionYearMonthCompoundUniqueInput = {
    year: number
    month: number
  }

  export type BookDistributionCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    distributed?: SortOrder
    target?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookDistributionAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    distributed?: SortOrder
    target?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookDistributionMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    distributed?: SortOrder
    target?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookDistributionMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    distributed?: SortOrder
    target?: SortOrder
    updatedAt?: SortOrder
    extraText?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookDistributionSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    distributed?: SortOrder
    target?: SortOrder
    extraNumber?: SortOrder
  }

  export type BookCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<BookCreateWithoutCreatedByInput, BookUncheckedCreateWithoutCreatedByInput> | BookCreateWithoutCreatedByInput[] | BookUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreatedByInput | BookCreateOrConnectWithoutCreatedByInput[]
    createMany?: BookCreateManyCreatedByInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type NoticeCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<NoticeCreateWithoutCreatedByInput, NoticeUncheckedCreateWithoutCreatedByInput> | NoticeCreateWithoutCreatedByInput[] | NoticeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutCreatedByInput | NoticeCreateOrConnectWithoutCreatedByInput[]
    createMany?: NoticeCreateManyCreatedByInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type SectionCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SectionCreateWithoutCreatedByInput, SectionUncheckedCreateWithoutCreatedByInput> | SectionCreateWithoutCreatedByInput[] | SectionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCreatedByInput | SectionCreateOrConnectWithoutCreatedByInput[]
    createMany?: SectionCreateManyCreatedByInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type SettingCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<SettingCreateWithoutUpdatedByInput, SettingUncheckedCreateWithoutUpdatedByInput> | SettingCreateWithoutUpdatedByInput[] | SettingUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutUpdatedByInput | SettingCreateOrConnectWithoutUpdatedByInput[]
    createMany?: SettingCreateManyUpdatedByInputEnvelope
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
  }

  export type ManagingDirectorMessageCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<ManagingDirectorMessageCreateWithoutUpdatedByInput, ManagingDirectorMessageUncheckedCreateWithoutUpdatedByInput> | ManagingDirectorMessageCreateWithoutUpdatedByInput[] | ManagingDirectorMessageUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ManagingDirectorMessageCreateOrConnectWithoutUpdatedByInput | ManagingDirectorMessageCreateOrConnectWithoutUpdatedByInput[]
    createMany?: ManagingDirectorMessageCreateManyUpdatedByInputEnvelope
    connect?: ManagingDirectorMessageWhereUniqueInput | ManagingDirectorMessageWhereUniqueInput[]
  }

  export type ActivityLogCreateNestedManyWithoutAdminInput = {
    create?: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput> | ActivityLogCreateWithoutAdminInput[] | ActivityLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAdminInput | ActivityLogCreateOrConnectWithoutAdminInput[]
    createMany?: ActivityLogCreateManyAdminInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type BookUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<BookCreateWithoutCreatedByInput, BookUncheckedCreateWithoutCreatedByInput> | BookCreateWithoutCreatedByInput[] | BookUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreatedByInput | BookCreateOrConnectWithoutCreatedByInput[]
    createMany?: BookCreateManyCreatedByInputEnvelope
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
  }

  export type NoticeUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<NoticeCreateWithoutCreatedByInput, NoticeUncheckedCreateWithoutCreatedByInput> | NoticeCreateWithoutCreatedByInput[] | NoticeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutCreatedByInput | NoticeCreateOrConnectWithoutCreatedByInput[]
    createMany?: NoticeCreateManyCreatedByInputEnvelope
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
  }

  export type SectionUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<SectionCreateWithoutCreatedByInput, SectionUncheckedCreateWithoutCreatedByInput> | SectionCreateWithoutCreatedByInput[] | SectionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCreatedByInput | SectionCreateOrConnectWithoutCreatedByInput[]
    createMany?: SectionCreateManyCreatedByInputEnvelope
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
  }

  export type SettingUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<SettingCreateWithoutUpdatedByInput, SettingUncheckedCreateWithoutUpdatedByInput> | SettingCreateWithoutUpdatedByInput[] | SettingUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutUpdatedByInput | SettingCreateOrConnectWithoutUpdatedByInput[]
    createMany?: SettingCreateManyUpdatedByInputEnvelope
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
  }

  export type ManagingDirectorMessageUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<ManagingDirectorMessageCreateWithoutUpdatedByInput, ManagingDirectorMessageUncheckedCreateWithoutUpdatedByInput> | ManagingDirectorMessageCreateWithoutUpdatedByInput[] | ManagingDirectorMessageUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ManagingDirectorMessageCreateOrConnectWithoutUpdatedByInput | ManagingDirectorMessageCreateOrConnectWithoutUpdatedByInput[]
    createMany?: ManagingDirectorMessageCreateManyUpdatedByInputEnvelope
    connect?: ManagingDirectorMessageWhereUniqueInput | ManagingDirectorMessageWhereUniqueInput[]
  }

  export type ActivityLogUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput> | ActivityLogCreateWithoutAdminInput[] | ActivityLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAdminInput | ActivityLogCreateOrConnectWithoutAdminInput[]
    createMany?: ActivityLogCreateManyAdminInputEnvelope
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<BookCreateWithoutCreatedByInput, BookUncheckedCreateWithoutCreatedByInput> | BookCreateWithoutCreatedByInput[] | BookUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreatedByInput | BookCreateOrConnectWithoutCreatedByInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutCreatedByInput | BookUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: BookCreateManyCreatedByInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutCreatedByInput | BookUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: BookUpdateManyWithWhereWithoutCreatedByInput | BookUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type NoticeUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<NoticeCreateWithoutCreatedByInput, NoticeUncheckedCreateWithoutCreatedByInput> | NoticeCreateWithoutCreatedByInput[] | NoticeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutCreatedByInput | NoticeCreateOrConnectWithoutCreatedByInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutCreatedByInput | NoticeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: NoticeCreateManyCreatedByInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutCreatedByInput | NoticeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutCreatedByInput | NoticeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type SectionUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SectionCreateWithoutCreatedByInput, SectionUncheckedCreateWithoutCreatedByInput> | SectionCreateWithoutCreatedByInput[] | SectionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCreatedByInput | SectionCreateOrConnectWithoutCreatedByInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCreatedByInput | SectionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SectionCreateManyCreatedByInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCreatedByInput | SectionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCreatedByInput | SectionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type SettingUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<SettingCreateWithoutUpdatedByInput, SettingUncheckedCreateWithoutUpdatedByInput> | SettingCreateWithoutUpdatedByInput[] | SettingUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutUpdatedByInput | SettingCreateOrConnectWithoutUpdatedByInput[]
    upsert?: SettingUpsertWithWhereUniqueWithoutUpdatedByInput | SettingUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: SettingCreateManyUpdatedByInputEnvelope
    set?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    disconnect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    delete?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    update?: SettingUpdateWithWhereUniqueWithoutUpdatedByInput | SettingUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: SettingUpdateManyWithWhereWithoutUpdatedByInput | SettingUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: SettingScalarWhereInput | SettingScalarWhereInput[]
  }

  export type ManagingDirectorMessageUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<ManagingDirectorMessageCreateWithoutUpdatedByInput, ManagingDirectorMessageUncheckedCreateWithoutUpdatedByInput> | ManagingDirectorMessageCreateWithoutUpdatedByInput[] | ManagingDirectorMessageUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ManagingDirectorMessageCreateOrConnectWithoutUpdatedByInput | ManagingDirectorMessageCreateOrConnectWithoutUpdatedByInput[]
    upsert?: ManagingDirectorMessageUpsertWithWhereUniqueWithoutUpdatedByInput | ManagingDirectorMessageUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: ManagingDirectorMessageCreateManyUpdatedByInputEnvelope
    set?: ManagingDirectorMessageWhereUniqueInput | ManagingDirectorMessageWhereUniqueInput[]
    disconnect?: ManagingDirectorMessageWhereUniqueInput | ManagingDirectorMessageWhereUniqueInput[]
    delete?: ManagingDirectorMessageWhereUniqueInput | ManagingDirectorMessageWhereUniqueInput[]
    connect?: ManagingDirectorMessageWhereUniqueInput | ManagingDirectorMessageWhereUniqueInput[]
    update?: ManagingDirectorMessageUpdateWithWhereUniqueWithoutUpdatedByInput | ManagingDirectorMessageUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: ManagingDirectorMessageUpdateManyWithWhereWithoutUpdatedByInput | ManagingDirectorMessageUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: ManagingDirectorMessageScalarWhereInput | ManagingDirectorMessageScalarWhereInput[]
  }

  export type ActivityLogUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput> | ActivityLogCreateWithoutAdminInput[] | ActivityLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAdminInput | ActivityLogCreateOrConnectWithoutAdminInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutAdminInput | ActivityLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ActivityLogCreateManyAdminInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutAdminInput | ActivityLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutAdminInput | ActivityLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<BookCreateWithoutCreatedByInput, BookUncheckedCreateWithoutCreatedByInput> | BookCreateWithoutCreatedByInput[] | BookUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: BookCreateOrConnectWithoutCreatedByInput | BookCreateOrConnectWithoutCreatedByInput[]
    upsert?: BookUpsertWithWhereUniqueWithoutCreatedByInput | BookUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: BookCreateManyCreatedByInputEnvelope
    set?: BookWhereUniqueInput | BookWhereUniqueInput[]
    disconnect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    delete?: BookWhereUniqueInput | BookWhereUniqueInput[]
    connect?: BookWhereUniqueInput | BookWhereUniqueInput[]
    update?: BookUpdateWithWhereUniqueWithoutCreatedByInput | BookUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: BookUpdateManyWithWhereWithoutCreatedByInput | BookUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: BookScalarWhereInput | BookScalarWhereInput[]
  }

  export type NoticeUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<NoticeCreateWithoutCreatedByInput, NoticeUncheckedCreateWithoutCreatedByInput> | NoticeCreateWithoutCreatedByInput[] | NoticeUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: NoticeCreateOrConnectWithoutCreatedByInput | NoticeCreateOrConnectWithoutCreatedByInput[]
    upsert?: NoticeUpsertWithWhereUniqueWithoutCreatedByInput | NoticeUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: NoticeCreateManyCreatedByInputEnvelope
    set?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    disconnect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    delete?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    connect?: NoticeWhereUniqueInput | NoticeWhereUniqueInput[]
    update?: NoticeUpdateWithWhereUniqueWithoutCreatedByInput | NoticeUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: NoticeUpdateManyWithWhereWithoutCreatedByInput | NoticeUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
  }

  export type SectionUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<SectionCreateWithoutCreatedByInput, SectionUncheckedCreateWithoutCreatedByInput> | SectionCreateWithoutCreatedByInput[] | SectionUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: SectionCreateOrConnectWithoutCreatedByInput | SectionCreateOrConnectWithoutCreatedByInput[]
    upsert?: SectionUpsertWithWhereUniqueWithoutCreatedByInput | SectionUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: SectionCreateManyCreatedByInputEnvelope
    set?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    disconnect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    delete?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    connect?: SectionWhereUniqueInput | SectionWhereUniqueInput[]
    update?: SectionUpdateWithWhereUniqueWithoutCreatedByInput | SectionUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: SectionUpdateManyWithWhereWithoutCreatedByInput | SectionUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: SectionScalarWhereInput | SectionScalarWhereInput[]
  }

  export type SettingUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<SettingCreateWithoutUpdatedByInput, SettingUncheckedCreateWithoutUpdatedByInput> | SettingCreateWithoutUpdatedByInput[] | SettingUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: SettingCreateOrConnectWithoutUpdatedByInput | SettingCreateOrConnectWithoutUpdatedByInput[]
    upsert?: SettingUpsertWithWhereUniqueWithoutUpdatedByInput | SettingUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: SettingCreateManyUpdatedByInputEnvelope
    set?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    disconnect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    delete?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    connect?: SettingWhereUniqueInput | SettingWhereUniqueInput[]
    update?: SettingUpdateWithWhereUniqueWithoutUpdatedByInput | SettingUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: SettingUpdateManyWithWhereWithoutUpdatedByInput | SettingUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: SettingScalarWhereInput | SettingScalarWhereInput[]
  }

  export type ManagingDirectorMessageUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<ManagingDirectorMessageCreateWithoutUpdatedByInput, ManagingDirectorMessageUncheckedCreateWithoutUpdatedByInput> | ManagingDirectorMessageCreateWithoutUpdatedByInput[] | ManagingDirectorMessageUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: ManagingDirectorMessageCreateOrConnectWithoutUpdatedByInput | ManagingDirectorMessageCreateOrConnectWithoutUpdatedByInput[]
    upsert?: ManagingDirectorMessageUpsertWithWhereUniqueWithoutUpdatedByInput | ManagingDirectorMessageUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: ManagingDirectorMessageCreateManyUpdatedByInputEnvelope
    set?: ManagingDirectorMessageWhereUniqueInput | ManagingDirectorMessageWhereUniqueInput[]
    disconnect?: ManagingDirectorMessageWhereUniqueInput | ManagingDirectorMessageWhereUniqueInput[]
    delete?: ManagingDirectorMessageWhereUniqueInput | ManagingDirectorMessageWhereUniqueInput[]
    connect?: ManagingDirectorMessageWhereUniqueInput | ManagingDirectorMessageWhereUniqueInput[]
    update?: ManagingDirectorMessageUpdateWithWhereUniqueWithoutUpdatedByInput | ManagingDirectorMessageUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: ManagingDirectorMessageUpdateManyWithWhereWithoutUpdatedByInput | ManagingDirectorMessageUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: ManagingDirectorMessageScalarWhereInput | ManagingDirectorMessageScalarWhereInput[]
  }

  export type ActivityLogUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput> | ActivityLogCreateWithoutAdminInput[] | ActivityLogUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: ActivityLogCreateOrConnectWithoutAdminInput | ActivityLogCreateOrConnectWithoutAdminInput[]
    upsert?: ActivityLogUpsertWithWhereUniqueWithoutAdminInput | ActivityLogUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: ActivityLogCreateManyAdminInputEnvelope
    set?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    disconnect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    delete?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    connect?: ActivityLogWhereUniqueInput | ActivityLogWhereUniqueInput[]
    update?: ActivityLogUpdateWithWhereUniqueWithoutAdminInput | ActivityLogUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: ActivityLogUpdateManyWithWhereWithoutAdminInput | ActivityLogUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutBooksInput = {
    create?: XOR<AdminCreateWithoutBooksInput, AdminUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AdminCreateOrConnectWithoutBooksInput
    connect?: AdminWhereUniqueInput
  }

  export type BookChapterCreateNestedManyWithoutBookInput = {
    create?: XOR<BookChapterCreateWithoutBookInput, BookChapterUncheckedCreateWithoutBookInput> | BookChapterCreateWithoutBookInput[] | BookChapterUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookChapterCreateOrConnectWithoutBookInput | BookChapterCreateOrConnectWithoutBookInput[]
    createMany?: BookChapterCreateManyBookInputEnvelope
    connect?: BookChapterWhereUniqueInput | BookChapterWhereUniqueInput[]
  }

  export type BookChapterUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<BookChapterCreateWithoutBookInput, BookChapterUncheckedCreateWithoutBookInput> | BookChapterCreateWithoutBookInput[] | BookChapterUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookChapterCreateOrConnectWithoutBookInput | BookChapterCreateOrConnectWithoutBookInput[]
    createMany?: BookChapterCreateManyBookInputEnvelope
    connect?: BookChapterWhereUniqueInput | BookChapterWhereUniqueInput[]
  }

  export type EnumBookStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdminUpdateOneWithoutBooksNestedInput = {
    create?: XOR<AdminCreateWithoutBooksInput, AdminUncheckedCreateWithoutBooksInput>
    connectOrCreate?: AdminCreateOrConnectWithoutBooksInput
    upsert?: AdminUpsertWithoutBooksInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutBooksInput, AdminUpdateWithoutBooksInput>, AdminUncheckedUpdateWithoutBooksInput>
  }

  export type BookChapterUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookChapterCreateWithoutBookInput, BookChapterUncheckedCreateWithoutBookInput> | BookChapterCreateWithoutBookInput[] | BookChapterUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookChapterCreateOrConnectWithoutBookInput | BookChapterCreateOrConnectWithoutBookInput[]
    upsert?: BookChapterUpsertWithWhereUniqueWithoutBookInput | BookChapterUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookChapterCreateManyBookInputEnvelope
    set?: BookChapterWhereUniqueInput | BookChapterWhereUniqueInput[]
    disconnect?: BookChapterWhereUniqueInput | BookChapterWhereUniqueInput[]
    delete?: BookChapterWhereUniqueInput | BookChapterWhereUniqueInput[]
    connect?: BookChapterWhereUniqueInput | BookChapterWhereUniqueInput[]
    update?: BookChapterUpdateWithWhereUniqueWithoutBookInput | BookChapterUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookChapterUpdateManyWithWhereWithoutBookInput | BookChapterUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookChapterScalarWhereInput | BookChapterScalarWhereInput[]
  }

  export type BookChapterUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<BookChapterCreateWithoutBookInput, BookChapterUncheckedCreateWithoutBookInput> | BookChapterCreateWithoutBookInput[] | BookChapterUncheckedCreateWithoutBookInput[]
    connectOrCreate?: BookChapterCreateOrConnectWithoutBookInput | BookChapterCreateOrConnectWithoutBookInput[]
    upsert?: BookChapterUpsertWithWhereUniqueWithoutBookInput | BookChapterUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: BookChapterCreateManyBookInputEnvelope
    set?: BookChapterWhereUniqueInput | BookChapterWhereUniqueInput[]
    disconnect?: BookChapterWhereUniqueInput | BookChapterWhereUniqueInput[]
    delete?: BookChapterWhereUniqueInput | BookChapterWhereUniqueInput[]
    connect?: BookChapterWhereUniqueInput | BookChapterWhereUniqueInput[]
    update?: BookChapterUpdateWithWhereUniqueWithoutBookInput | BookChapterUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: BookChapterUpdateManyWithWhereWithoutBookInput | BookChapterUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: BookChapterScalarWhereInput | BookChapterScalarWhereInput[]
  }

  export type BookCreateNestedOneWithoutChaptersInput = {
    create?: XOR<BookCreateWithoutChaptersInput, BookUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: BookCreateOrConnectWithoutChaptersInput
    connect?: BookWhereUniqueInput
  }

  export type BookUpdateOneRequiredWithoutChaptersNestedInput = {
    create?: XOR<BookCreateWithoutChaptersInput, BookUncheckedCreateWithoutChaptersInput>
    connectOrCreate?: BookCreateOrConnectWithoutChaptersInput
    upsert?: BookUpsertWithoutChaptersInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutChaptersInput, BookUpdateWithoutChaptersInput>, BookUncheckedUpdateWithoutChaptersInput>
  }

  export type AdminCreateNestedOneWithoutNoticesInput = {
    create?: XOR<AdminCreateWithoutNoticesInput, AdminUncheckedCreateWithoutNoticesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutNoticesInput
    connect?: AdminWhereUniqueInput
  }

  export type EnumNoticeTypeFieldUpdateOperationsInput = {
    set?: $Enums.NoticeType
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AdminUpdateOneWithoutNoticesNestedInput = {
    create?: XOR<AdminCreateWithoutNoticesInput, AdminUncheckedCreateWithoutNoticesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutNoticesInput
    upsert?: AdminUpsertWithoutNoticesInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutNoticesInput, AdminUpdateWithoutNoticesInput>, AdminUncheckedUpdateWithoutNoticesInput>
  }

  export type EnumEmployeeTypeFieldUpdateOperationsInput = {
    set?: $Enums.EmployeeType
  }

  export type AdminCreateNestedOneWithoutMdMessagesInput = {
    create?: XOR<AdminCreateWithoutMdMessagesInput, AdminUncheckedCreateWithoutMdMessagesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMdMessagesInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneWithoutMdMessagesNestedInput = {
    create?: XOR<AdminCreateWithoutMdMessagesInput, AdminUncheckedCreateWithoutMdMessagesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutMdMessagesInput
    upsert?: AdminUpsertWithoutMdMessagesInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutMdMessagesInput, AdminUpdateWithoutMdMessagesInput>, AdminUncheckedUpdateWithoutMdMessagesInput>
  }

  export type AdminCreateNestedOneWithoutSectionsInput = {
    create?: XOR<AdminCreateWithoutSectionsInput, AdminUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutSectionsInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneWithoutSectionsNestedInput = {
    create?: XOR<AdminCreateWithoutSectionsInput, AdminUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutSectionsInput
    upsert?: AdminUpsertWithoutSectionsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutSectionsInput, AdminUpdateWithoutSectionsInput>, AdminUncheckedUpdateWithoutSectionsInput>
  }

  export type AdminCreateNestedOneWithoutSettingsInput = {
    create?: XOR<AdminCreateWithoutSettingsInput, AdminUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutSettingsInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneWithoutSettingsNestedInput = {
    create?: XOR<AdminCreateWithoutSettingsInput, AdminUncheckedCreateWithoutSettingsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutSettingsInput
    upsert?: AdminUpsertWithoutSettingsInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutSettingsInput, AdminUpdateWithoutSettingsInput>, AdminUncheckedUpdateWithoutSettingsInput>
  }

  export type AdminCreateNestedOneWithoutActivitiesInput = {
    create?: XOR<AdminCreateWithoutActivitiesInput, AdminUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutActivitiesInput
    connect?: AdminWhereUniqueInput
  }

  export type AdminUpdateOneWithoutActivitiesNestedInput = {
    create?: XOR<AdminCreateWithoutActivitiesInput, AdminUncheckedCreateWithoutActivitiesInput>
    connectOrCreate?: AdminCreateOrConnectWithoutActivitiesInput
    upsert?: AdminUpsertWithoutActivitiesInput
    disconnect?: AdminWhereInput | boolean
    delete?: AdminWhereInput | boolean
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutActivitiesInput, AdminUpdateWithoutActivitiesInput>, AdminUncheckedUpdateWithoutActivitiesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumBookStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookStatus[]
    notIn?: $Enums.BookStatus[]
    not?: NestedEnumBookStatusFilter<$PrismaModel> | $Enums.BookStatus
  }

  export type NestedEnumBookStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookStatus | EnumBookStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookStatus[]
    notIn?: $Enums.BookStatus[]
    not?: NestedEnumBookStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookStatusFilter<$PrismaModel>
    _max?: NestedEnumBookStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumNoticeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.NoticeType | EnumNoticeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NoticeType[]
    notIn?: $Enums.NoticeType[]
    not?: NestedEnumNoticeTypeFilter<$PrismaModel> | $Enums.NoticeType
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumNoticeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NoticeType | EnumNoticeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.NoticeType[]
    notIn?: $Enums.NoticeType[]
    not?: NestedEnumNoticeTypeWithAggregatesFilter<$PrismaModel> | $Enums.NoticeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNoticeTypeFilter<$PrismaModel>
    _max?: NestedEnumNoticeTypeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumEmployeeTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[]
    notIn?: $Enums.EmployeeType[]
    not?: NestedEnumEmployeeTypeFilter<$PrismaModel> | $Enums.EmployeeType
  }

  export type NestedEnumEmployeeTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EmployeeType | EnumEmployeeTypeFieldRefInput<$PrismaModel>
    in?: $Enums.EmployeeType[]
    notIn?: $Enums.EmployeeType[]
    not?: NestedEnumEmployeeTypeWithAggregatesFilter<$PrismaModel> | $Enums.EmployeeType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEmployeeTypeFilter<$PrismaModel>
    _max?: NestedEnumEmployeeTypeFilter<$PrismaModel>
  }

  export type BookCreateWithoutCreatedByInput = {
    title: string
    classId: number
    subject?: string | null
    board?: string | null
    coverImageUrl?: string | null
    description?: string | null
    status?: $Enums.BookStatus
    sortOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    chapters?: BookChapterCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    classId: number
    subject?: string | null
    board?: string | null
    coverImageUrl?: string | null
    description?: string | null
    status?: $Enums.BookStatus
    sortOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    chapters?: BookChapterUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCreatedByInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCreatedByInput, BookUncheckedCreateWithoutCreatedByInput>
  }

  export type BookCreateManyCreatedByInputEnvelope = {
    data: BookCreateManyCreatedByInput | BookCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type NoticeCreateWithoutCreatedByInput = {
    title: string
    description?: string | null
    type?: $Enums.NoticeType
    category?: string | null
    isPinned?: boolean | null
    documentUrl?: string | null
    publishDate?: Date | string | null
    closingDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type NoticeUncheckedCreateWithoutCreatedByInput = {
    id?: number
    title: string
    description?: string | null
    type?: $Enums.NoticeType
    category?: string | null
    isPinned?: boolean | null
    documentUrl?: string | null
    publishDate?: Date | string | null
    closingDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type NoticeCreateOrConnectWithoutCreatedByInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutCreatedByInput, NoticeUncheckedCreateWithoutCreatedByInput>
  }

  export type NoticeCreateManyCreatedByInputEnvelope = {
    data: NoticeCreateManyCreatedByInput | NoticeCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SectionCreateWithoutCreatedByInput = {
    module: string
    title: string
    description?: string | null
    content?: string | null
    category?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    documentUrl?: string | null
    fileType?: string | null
    link?: string | null
    publishDate?: Date | string | null
    sortOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type SectionUncheckedCreateWithoutCreatedByInput = {
    id?: number
    module: string
    title: string
    description?: string | null
    content?: string | null
    category?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    documentUrl?: string | null
    fileType?: string | null
    link?: string | null
    publishDate?: Date | string | null
    sortOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type SectionCreateOrConnectWithoutCreatedByInput = {
    where: SectionWhereUniqueInput
    create: XOR<SectionCreateWithoutCreatedByInput, SectionUncheckedCreateWithoutCreatedByInput>
  }

  export type SectionCreateManyCreatedByInputEnvelope = {
    data: SectionCreateManyCreatedByInput | SectionCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type SettingCreateWithoutUpdatedByInput = {
    settingKey: string
    settingValue?: string | null
    category?: string | null
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type SettingUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    settingKey: string
    settingValue?: string | null
    category?: string | null
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type SettingCreateOrConnectWithoutUpdatedByInput = {
    where: SettingWhereUniqueInput
    create: XOR<SettingCreateWithoutUpdatedByInput, SettingUncheckedCreateWithoutUpdatedByInput>
  }

  export type SettingCreateManyUpdatedByInputEnvelope = {
    data: SettingCreateManyUpdatedByInput | SettingCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type ManagingDirectorMessageCreateWithoutUpdatedByInput = {
    id?: number
    name: string
    designation: string
    photoUrl?: string | null
    quote?: string | null
    welcomeNote: string
    qualityNote?: string | null
    collaboration?: string | null
    movingForward?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ManagingDirectorMessageUncheckedCreateWithoutUpdatedByInput = {
    id?: number
    name: string
    designation: string
    photoUrl?: string | null
    quote?: string | null
    welcomeNote: string
    qualityNote?: string | null
    collaboration?: string | null
    movingForward?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ManagingDirectorMessageCreateOrConnectWithoutUpdatedByInput = {
    where: ManagingDirectorMessageWhereUniqueInput
    create: XOR<ManagingDirectorMessageCreateWithoutUpdatedByInput, ManagingDirectorMessageUncheckedCreateWithoutUpdatedByInput>
  }

  export type ManagingDirectorMessageCreateManyUpdatedByInputEnvelope = {
    data: ManagingDirectorMessageCreateManyUpdatedByInput | ManagingDirectorMessageCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type ActivityLogCreateWithoutAdminInput = {
    action: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ActivityLogUncheckedCreateWithoutAdminInput = {
    id?: number
    action: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ActivityLogCreateOrConnectWithoutAdminInput = {
    where: ActivityLogWhereUniqueInput
    create: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput>
  }

  export type ActivityLogCreateManyAdminInputEnvelope = {
    data: ActivityLogCreateManyAdminInput | ActivityLogCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type BookUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: BookWhereUniqueInput
    update: XOR<BookUpdateWithoutCreatedByInput, BookUncheckedUpdateWithoutCreatedByInput>
    create: XOR<BookCreateWithoutCreatedByInput, BookUncheckedCreateWithoutCreatedByInput>
  }

  export type BookUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: BookWhereUniqueInput
    data: XOR<BookUpdateWithoutCreatedByInput, BookUncheckedUpdateWithoutCreatedByInput>
  }

  export type BookUpdateManyWithWhereWithoutCreatedByInput = {
    where: BookScalarWhereInput
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type BookScalarWhereInput = {
    AND?: BookScalarWhereInput | BookScalarWhereInput[]
    OR?: BookScalarWhereInput[]
    NOT?: BookScalarWhereInput | BookScalarWhereInput[]
    id?: IntFilter<"Book"> | number
    title?: StringFilter<"Book"> | string
    classId?: IntFilter<"Book"> | number
    subject?: StringNullableFilter<"Book"> | string | null
    board?: StringNullableFilter<"Book"> | string | null
    coverImageUrl?: StringNullableFilter<"Book"> | string | null
    description?: StringNullableFilter<"Book"> | string | null
    status?: EnumBookStatusFilter<"Book"> | $Enums.BookStatus
    sortOrder?: IntNullableFilter<"Book"> | number | null
    createdById?: IntNullableFilter<"Book"> | number | null
    createdAt?: DateTimeFilter<"Book"> | Date | string
    updatedAt?: DateTimeFilter<"Book"> | Date | string
    extraText?: StringNullableFilter<"Book"> | string | null
    extraNumber?: FloatNullableFilter<"Book"> | number | null
  }

  export type NoticeUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: NoticeWhereUniqueInput
    update: XOR<NoticeUpdateWithoutCreatedByInput, NoticeUncheckedUpdateWithoutCreatedByInput>
    create: XOR<NoticeCreateWithoutCreatedByInput, NoticeUncheckedCreateWithoutCreatedByInput>
  }

  export type NoticeUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: NoticeWhereUniqueInput
    data: XOR<NoticeUpdateWithoutCreatedByInput, NoticeUncheckedUpdateWithoutCreatedByInput>
  }

  export type NoticeUpdateManyWithWhereWithoutCreatedByInput = {
    where: NoticeScalarWhereInput
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type NoticeScalarWhereInput = {
    AND?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
    OR?: NoticeScalarWhereInput[]
    NOT?: NoticeScalarWhereInput | NoticeScalarWhereInput[]
    id?: IntFilter<"Notice"> | number
    title?: StringFilter<"Notice"> | string
    description?: StringNullableFilter<"Notice"> | string | null
    type?: EnumNoticeTypeFilter<"Notice"> | $Enums.NoticeType
    category?: StringNullableFilter<"Notice"> | string | null
    isPinned?: BoolNullableFilter<"Notice"> | boolean | null
    documentUrl?: StringNullableFilter<"Notice"> | string | null
    publishDate?: DateTimeNullableFilter<"Notice"> | Date | string | null
    closingDate?: DateTimeNullableFilter<"Notice"> | Date | string | null
    createdById?: IntNullableFilter<"Notice"> | number | null
    createdAt?: DateTimeFilter<"Notice"> | Date | string
    updatedAt?: DateTimeFilter<"Notice"> | Date | string
    extraText?: StringNullableFilter<"Notice"> | string | null
    extraNumber?: FloatNullableFilter<"Notice"> | number | null
  }

  export type SectionUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: SectionWhereUniqueInput
    update: XOR<SectionUpdateWithoutCreatedByInput, SectionUncheckedUpdateWithoutCreatedByInput>
    create: XOR<SectionCreateWithoutCreatedByInput, SectionUncheckedCreateWithoutCreatedByInput>
  }

  export type SectionUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: SectionWhereUniqueInput
    data: XOR<SectionUpdateWithoutCreatedByInput, SectionUncheckedUpdateWithoutCreatedByInput>
  }

  export type SectionUpdateManyWithWhereWithoutCreatedByInput = {
    where: SectionScalarWhereInput
    data: XOR<SectionUpdateManyMutationInput, SectionUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type SectionScalarWhereInput = {
    AND?: SectionScalarWhereInput | SectionScalarWhereInput[]
    OR?: SectionScalarWhereInput[]
    NOT?: SectionScalarWhereInput | SectionScalarWhereInput[]
    id?: IntFilter<"Section"> | number
    module?: StringFilter<"Section"> | string
    title?: StringFilter<"Section"> | string
    description?: StringNullableFilter<"Section"> | string | null
    content?: StringNullableFilter<"Section"> | string | null
    category?: StringNullableFilter<"Section"> | string | null
    imageUrl?: StringNullableFilter<"Section"> | string | null
    videoUrl?: StringNullableFilter<"Section"> | string | null
    documentUrl?: StringNullableFilter<"Section"> | string | null
    fileType?: StringNullableFilter<"Section"> | string | null
    link?: StringNullableFilter<"Section"> | string | null
    publishDate?: DateTimeNullableFilter<"Section"> | Date | string | null
    sortOrder?: IntNullableFilter<"Section"> | number | null
    createdById?: IntNullableFilter<"Section"> | number | null
    createdAt?: DateTimeFilter<"Section"> | Date | string
    updatedAt?: DateTimeFilter<"Section"> | Date | string
    extraText?: StringNullableFilter<"Section"> | string | null
    extraNumber?: FloatNullableFilter<"Section"> | number | null
  }

  export type SettingUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: SettingWhereUniqueInput
    update: XOR<SettingUpdateWithoutUpdatedByInput, SettingUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<SettingCreateWithoutUpdatedByInput, SettingUncheckedCreateWithoutUpdatedByInput>
  }

  export type SettingUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: SettingWhereUniqueInput
    data: XOR<SettingUpdateWithoutUpdatedByInput, SettingUncheckedUpdateWithoutUpdatedByInput>
  }

  export type SettingUpdateManyWithWhereWithoutUpdatedByInput = {
    where: SettingScalarWhereInput
    data: XOR<SettingUpdateManyMutationInput, SettingUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type SettingScalarWhereInput = {
    AND?: SettingScalarWhereInput | SettingScalarWhereInput[]
    OR?: SettingScalarWhereInput[]
    NOT?: SettingScalarWhereInput | SettingScalarWhereInput[]
    id?: IntFilter<"Setting"> | number
    settingKey?: StringFilter<"Setting"> | string
    settingValue?: StringNullableFilter<"Setting"> | string | null
    category?: StringNullableFilter<"Setting"> | string | null
    updatedById?: IntNullableFilter<"Setting"> | number | null
    updatedAt?: DateTimeFilter<"Setting"> | Date | string
    extraText?: StringNullableFilter<"Setting"> | string | null
    extraNumber?: FloatNullableFilter<"Setting"> | number | null
  }

  export type ManagingDirectorMessageUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: ManagingDirectorMessageWhereUniqueInput
    update: XOR<ManagingDirectorMessageUpdateWithoutUpdatedByInput, ManagingDirectorMessageUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<ManagingDirectorMessageCreateWithoutUpdatedByInput, ManagingDirectorMessageUncheckedCreateWithoutUpdatedByInput>
  }

  export type ManagingDirectorMessageUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: ManagingDirectorMessageWhereUniqueInput
    data: XOR<ManagingDirectorMessageUpdateWithoutUpdatedByInput, ManagingDirectorMessageUncheckedUpdateWithoutUpdatedByInput>
  }

  export type ManagingDirectorMessageUpdateManyWithWhereWithoutUpdatedByInput = {
    where: ManagingDirectorMessageScalarWhereInput
    data: XOR<ManagingDirectorMessageUpdateManyMutationInput, ManagingDirectorMessageUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type ManagingDirectorMessageScalarWhereInput = {
    AND?: ManagingDirectorMessageScalarWhereInput | ManagingDirectorMessageScalarWhereInput[]
    OR?: ManagingDirectorMessageScalarWhereInput[]
    NOT?: ManagingDirectorMessageScalarWhereInput | ManagingDirectorMessageScalarWhereInput[]
    id?: IntFilter<"ManagingDirectorMessage"> | number
    name?: StringFilter<"ManagingDirectorMessage"> | string
    designation?: StringFilter<"ManagingDirectorMessage"> | string
    photoUrl?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    quote?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    welcomeNote?: StringFilter<"ManagingDirectorMessage"> | string
    qualityNote?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    collaboration?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    movingForward?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    updatedById?: IntNullableFilter<"ManagingDirectorMessage"> | number | null
    createdAt?: DateTimeFilter<"ManagingDirectorMessage"> | Date | string
    updatedAt?: DateTimeFilter<"ManagingDirectorMessage"> | Date | string
    extraText?: StringNullableFilter<"ManagingDirectorMessage"> | string | null
    extraNumber?: FloatNullableFilter<"ManagingDirectorMessage"> | number | null
  }

  export type ActivityLogUpsertWithWhereUniqueWithoutAdminInput = {
    where: ActivityLogWhereUniqueInput
    update: XOR<ActivityLogUpdateWithoutAdminInput, ActivityLogUncheckedUpdateWithoutAdminInput>
    create: XOR<ActivityLogCreateWithoutAdminInput, ActivityLogUncheckedCreateWithoutAdminInput>
  }

  export type ActivityLogUpdateWithWhereUniqueWithoutAdminInput = {
    where: ActivityLogWhereUniqueInput
    data: XOR<ActivityLogUpdateWithoutAdminInput, ActivityLogUncheckedUpdateWithoutAdminInput>
  }

  export type ActivityLogUpdateManyWithWhereWithoutAdminInput = {
    where: ActivityLogScalarWhereInput
    data: XOR<ActivityLogUpdateManyMutationInput, ActivityLogUncheckedUpdateManyWithoutAdminInput>
  }

  export type ActivityLogScalarWhereInput = {
    AND?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    OR?: ActivityLogScalarWhereInput[]
    NOT?: ActivityLogScalarWhereInput | ActivityLogScalarWhereInput[]
    id?: IntFilter<"ActivityLog"> | number
    action?: StringFilter<"ActivityLog"> | string
    type?: StringFilter<"ActivityLog"> | string
    isRead?: BoolFilter<"ActivityLog"> | boolean
    adminId?: IntNullableFilter<"ActivityLog"> | number | null
    createdAt?: DateTimeFilter<"ActivityLog"> | Date | string
    extraText?: StringNullableFilter<"ActivityLog"> | string | null
    extraNumber?: FloatNullableFilter<"ActivityLog"> | number | null
  }

  export type AdminCreateWithoutBooksInput = {
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    sections?: SectionCreateNestedManyWithoutCreatedByInput
    settings?: SettingCreateNestedManyWithoutUpdatedByInput
    mdMessages?: ManagingDirectorMessageCreateNestedManyWithoutUpdatedByInput
    activities?: ActivityLogCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutBooksInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    sections?: SectionUncheckedCreateNestedManyWithoutCreatedByInput
    settings?: SettingUncheckedCreateNestedManyWithoutUpdatedByInput
    mdMessages?: ManagingDirectorMessageUncheckedCreateNestedManyWithoutUpdatedByInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutBooksInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutBooksInput, AdminUncheckedCreateWithoutBooksInput>
  }

  export type BookChapterCreateWithoutBookInput = {
    chapterNumber: number
    title?: string | null
    hindiTitle?: string | null
    pdfUrl?: string | null
    sortOrder?: number | null
    createdAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BookChapterUncheckedCreateWithoutBookInput = {
    id?: number
    chapterNumber: number
    title?: string | null
    hindiTitle?: string | null
    pdfUrl?: string | null
    sortOrder?: number | null
    createdAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BookChapterCreateOrConnectWithoutBookInput = {
    where: BookChapterWhereUniqueInput
    create: XOR<BookChapterCreateWithoutBookInput, BookChapterUncheckedCreateWithoutBookInput>
  }

  export type BookChapterCreateManyBookInputEnvelope = {
    data: BookChapterCreateManyBookInput | BookChapterCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type AdminUpsertWithoutBooksInput = {
    update: XOR<AdminUpdateWithoutBooksInput, AdminUncheckedUpdateWithoutBooksInput>
    create: XOR<AdminCreateWithoutBooksInput, AdminUncheckedCreateWithoutBooksInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutBooksInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutBooksInput, AdminUncheckedUpdateWithoutBooksInput>
  }

  export type AdminUpdateWithoutBooksInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    sections?: SectionUpdateManyWithoutCreatedByNestedInput
    settings?: SettingUpdateManyWithoutUpdatedByNestedInput
    mdMessages?: ManagingDirectorMessageUpdateManyWithoutUpdatedByNestedInput
    activities?: ActivityLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    sections?: SectionUncheckedUpdateManyWithoutCreatedByNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUpdatedByNestedInput
    mdMessages?: ManagingDirectorMessageUncheckedUpdateManyWithoutUpdatedByNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type BookChapterUpsertWithWhereUniqueWithoutBookInput = {
    where: BookChapterWhereUniqueInput
    update: XOR<BookChapterUpdateWithoutBookInput, BookChapterUncheckedUpdateWithoutBookInput>
    create: XOR<BookChapterCreateWithoutBookInput, BookChapterUncheckedCreateWithoutBookInput>
  }

  export type BookChapterUpdateWithWhereUniqueWithoutBookInput = {
    where: BookChapterWhereUniqueInput
    data: XOR<BookChapterUpdateWithoutBookInput, BookChapterUncheckedUpdateWithoutBookInput>
  }

  export type BookChapterUpdateManyWithWhereWithoutBookInput = {
    where: BookChapterScalarWhereInput
    data: XOR<BookChapterUpdateManyMutationInput, BookChapterUncheckedUpdateManyWithoutBookInput>
  }

  export type BookChapterScalarWhereInput = {
    AND?: BookChapterScalarWhereInput | BookChapterScalarWhereInput[]
    OR?: BookChapterScalarWhereInput[]
    NOT?: BookChapterScalarWhereInput | BookChapterScalarWhereInput[]
    id?: IntFilter<"BookChapter"> | number
    bookId?: IntFilter<"BookChapter"> | number
    chapterNumber?: IntFilter<"BookChapter"> | number
    title?: StringNullableFilter<"BookChapter"> | string | null
    hindiTitle?: StringNullableFilter<"BookChapter"> | string | null
    pdfUrl?: StringNullableFilter<"BookChapter"> | string | null
    sortOrder?: IntNullableFilter<"BookChapter"> | number | null
    createdAt?: DateTimeFilter<"BookChapter"> | Date | string
    extraText?: StringNullableFilter<"BookChapter"> | string | null
    extraNumber?: FloatNullableFilter<"BookChapter"> | number | null
  }

  export type BookCreateWithoutChaptersInput = {
    title: string
    classId: number
    subject?: string | null
    board?: string | null
    coverImageUrl?: string | null
    description?: string | null
    status?: $Enums.BookStatus
    sortOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    createdBy?: AdminCreateNestedOneWithoutBooksInput
  }

  export type BookUncheckedCreateWithoutChaptersInput = {
    id?: number
    title: string
    classId: number
    subject?: string | null
    board?: string | null
    coverImageUrl?: string | null
    description?: string | null
    status?: $Enums.BookStatus
    sortOrder?: number | null
    createdById?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BookCreateOrConnectWithoutChaptersInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutChaptersInput, BookUncheckedCreateWithoutChaptersInput>
  }

  export type BookUpsertWithoutChaptersInput = {
    update: XOR<BookUpdateWithoutChaptersInput, BookUncheckedUpdateWithoutChaptersInput>
    create: XOR<BookCreateWithoutChaptersInput, BookUncheckedCreateWithoutChaptersInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutChaptersInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutChaptersInput, BookUncheckedUpdateWithoutChaptersInput>
  }

  export type BookUpdateWithoutChaptersInput = {
    title?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    createdBy?: AdminUpdateOneWithoutBooksNestedInput
  }

  export type BookUncheckedUpdateWithoutChaptersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AdminCreateWithoutNoticesInput = {
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    books?: BookCreateNestedManyWithoutCreatedByInput
    sections?: SectionCreateNestedManyWithoutCreatedByInput
    settings?: SettingCreateNestedManyWithoutUpdatedByInput
    mdMessages?: ManagingDirectorMessageCreateNestedManyWithoutUpdatedByInput
    activities?: ActivityLogCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutNoticesInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    books?: BookUncheckedCreateNestedManyWithoutCreatedByInput
    sections?: SectionUncheckedCreateNestedManyWithoutCreatedByInput
    settings?: SettingUncheckedCreateNestedManyWithoutUpdatedByInput
    mdMessages?: ManagingDirectorMessageUncheckedCreateNestedManyWithoutUpdatedByInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutNoticesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutNoticesInput, AdminUncheckedCreateWithoutNoticesInput>
  }

  export type AdminUpsertWithoutNoticesInput = {
    update: XOR<AdminUpdateWithoutNoticesInput, AdminUncheckedUpdateWithoutNoticesInput>
    create: XOR<AdminCreateWithoutNoticesInput, AdminUncheckedCreateWithoutNoticesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutNoticesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutNoticesInput, AdminUncheckedUpdateWithoutNoticesInput>
  }

  export type AdminUpdateWithoutNoticesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    books?: BookUpdateManyWithoutCreatedByNestedInput
    sections?: SectionUpdateManyWithoutCreatedByNestedInput
    settings?: SettingUpdateManyWithoutUpdatedByNestedInput
    mdMessages?: ManagingDirectorMessageUpdateManyWithoutUpdatedByNestedInput
    activities?: ActivityLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutNoticesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    books?: BookUncheckedUpdateManyWithoutCreatedByNestedInput
    sections?: SectionUncheckedUpdateManyWithoutCreatedByNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUpdatedByNestedInput
    mdMessages?: ManagingDirectorMessageUncheckedUpdateManyWithoutUpdatedByNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateWithoutMdMessagesInput = {
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    books?: BookCreateNestedManyWithoutCreatedByInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    sections?: SectionCreateNestedManyWithoutCreatedByInput
    settings?: SettingCreateNestedManyWithoutUpdatedByInput
    activities?: ActivityLogCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutMdMessagesInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    books?: BookUncheckedCreateNestedManyWithoutCreatedByInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    sections?: SectionUncheckedCreateNestedManyWithoutCreatedByInput
    settings?: SettingUncheckedCreateNestedManyWithoutUpdatedByInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutMdMessagesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutMdMessagesInput, AdminUncheckedCreateWithoutMdMessagesInput>
  }

  export type AdminUpsertWithoutMdMessagesInput = {
    update: XOR<AdminUpdateWithoutMdMessagesInput, AdminUncheckedUpdateWithoutMdMessagesInput>
    create: XOR<AdminCreateWithoutMdMessagesInput, AdminUncheckedCreateWithoutMdMessagesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutMdMessagesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutMdMessagesInput, AdminUncheckedUpdateWithoutMdMessagesInput>
  }

  export type AdminUpdateWithoutMdMessagesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    books?: BookUpdateManyWithoutCreatedByNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    sections?: SectionUpdateManyWithoutCreatedByNestedInput
    settings?: SettingUpdateManyWithoutUpdatedByNestedInput
    activities?: ActivityLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutMdMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    books?: BookUncheckedUpdateManyWithoutCreatedByNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    sections?: SectionUncheckedUpdateManyWithoutCreatedByNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUpdatedByNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateWithoutSectionsInput = {
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    books?: BookCreateNestedManyWithoutCreatedByInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    settings?: SettingCreateNestedManyWithoutUpdatedByInput
    mdMessages?: ManagingDirectorMessageCreateNestedManyWithoutUpdatedByInput
    activities?: ActivityLogCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutSectionsInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    books?: BookUncheckedCreateNestedManyWithoutCreatedByInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    settings?: SettingUncheckedCreateNestedManyWithoutUpdatedByInput
    mdMessages?: ManagingDirectorMessageUncheckedCreateNestedManyWithoutUpdatedByInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutSectionsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutSectionsInput, AdminUncheckedCreateWithoutSectionsInput>
  }

  export type AdminUpsertWithoutSectionsInput = {
    update: XOR<AdminUpdateWithoutSectionsInput, AdminUncheckedUpdateWithoutSectionsInput>
    create: XOR<AdminCreateWithoutSectionsInput, AdminUncheckedCreateWithoutSectionsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutSectionsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutSectionsInput, AdminUncheckedUpdateWithoutSectionsInput>
  }

  export type AdminUpdateWithoutSectionsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    books?: BookUpdateManyWithoutCreatedByNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    settings?: SettingUpdateManyWithoutUpdatedByNestedInput
    mdMessages?: ManagingDirectorMessageUpdateManyWithoutUpdatedByNestedInput
    activities?: ActivityLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    books?: BookUncheckedUpdateManyWithoutCreatedByNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUpdatedByNestedInput
    mdMessages?: ManagingDirectorMessageUncheckedUpdateManyWithoutUpdatedByNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateWithoutSettingsInput = {
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    books?: BookCreateNestedManyWithoutCreatedByInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    sections?: SectionCreateNestedManyWithoutCreatedByInput
    mdMessages?: ManagingDirectorMessageCreateNestedManyWithoutUpdatedByInput
    activities?: ActivityLogCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateWithoutSettingsInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    books?: BookUncheckedCreateNestedManyWithoutCreatedByInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    sections?: SectionUncheckedCreateNestedManyWithoutCreatedByInput
    mdMessages?: ManagingDirectorMessageUncheckedCreateNestedManyWithoutUpdatedByInput
    activities?: ActivityLogUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminCreateOrConnectWithoutSettingsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutSettingsInput, AdminUncheckedCreateWithoutSettingsInput>
  }

  export type AdminUpsertWithoutSettingsInput = {
    update: XOR<AdminUpdateWithoutSettingsInput, AdminUncheckedUpdateWithoutSettingsInput>
    create: XOR<AdminCreateWithoutSettingsInput, AdminUncheckedCreateWithoutSettingsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutSettingsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutSettingsInput, AdminUncheckedUpdateWithoutSettingsInput>
  }

  export type AdminUpdateWithoutSettingsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    books?: BookUpdateManyWithoutCreatedByNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    sections?: SectionUpdateManyWithoutCreatedByNestedInput
    mdMessages?: ManagingDirectorMessageUpdateManyWithoutUpdatedByNestedInput
    activities?: ActivityLogUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateWithoutSettingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    books?: BookUncheckedUpdateManyWithoutCreatedByNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    sections?: SectionUncheckedUpdateManyWithoutCreatedByNestedInput
    mdMessages?: ManagingDirectorMessageUncheckedUpdateManyWithoutUpdatedByNestedInput
    activities?: ActivityLogUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateWithoutActivitiesInput = {
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    books?: BookCreateNestedManyWithoutCreatedByInput
    notices?: NoticeCreateNestedManyWithoutCreatedByInput
    sections?: SectionCreateNestedManyWithoutCreatedByInput
    settings?: SettingCreateNestedManyWithoutUpdatedByInput
    mdMessages?: ManagingDirectorMessageCreateNestedManyWithoutUpdatedByInput
  }

  export type AdminUncheckedCreateWithoutActivitiesInput = {
    id?: number
    fullName: string
    email: string
    phone?: string | null
    passwordHash: string
    avatarUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
    books?: BookUncheckedCreateNestedManyWithoutCreatedByInput
    notices?: NoticeUncheckedCreateNestedManyWithoutCreatedByInput
    sections?: SectionUncheckedCreateNestedManyWithoutCreatedByInput
    settings?: SettingUncheckedCreateNestedManyWithoutUpdatedByInput
    mdMessages?: ManagingDirectorMessageUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type AdminCreateOrConnectWithoutActivitiesInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutActivitiesInput, AdminUncheckedCreateWithoutActivitiesInput>
  }

  export type AdminUpsertWithoutActivitiesInput = {
    update: XOR<AdminUpdateWithoutActivitiesInput, AdminUncheckedUpdateWithoutActivitiesInput>
    create: XOR<AdminCreateWithoutActivitiesInput, AdminUncheckedCreateWithoutActivitiesInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutActivitiesInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutActivitiesInput, AdminUncheckedUpdateWithoutActivitiesInput>
  }

  export type AdminUpdateWithoutActivitiesInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    books?: BookUpdateManyWithoutCreatedByNestedInput
    notices?: NoticeUpdateManyWithoutCreatedByNestedInput
    sections?: SectionUpdateManyWithoutCreatedByNestedInput
    settings?: SettingUpdateManyWithoutUpdatedByNestedInput
    mdMessages?: ManagingDirectorMessageUpdateManyWithoutUpdatedByNestedInput
  }

  export type AdminUncheckedUpdateWithoutActivitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    books?: BookUncheckedUpdateManyWithoutCreatedByNestedInput
    notices?: NoticeUncheckedUpdateManyWithoutCreatedByNestedInput
    sections?: SectionUncheckedUpdateManyWithoutCreatedByNestedInput
    settings?: SettingUncheckedUpdateManyWithoutUpdatedByNestedInput
    mdMessages?: ManagingDirectorMessageUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type BookCreateManyCreatedByInput = {
    id?: number
    title: string
    classId: number
    subject?: string | null
    board?: string | null
    coverImageUrl?: string | null
    description?: string | null
    status?: $Enums.BookStatus
    sortOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type NoticeCreateManyCreatedByInput = {
    id?: number
    title: string
    description?: string | null
    type?: $Enums.NoticeType
    category?: string | null
    isPinned?: boolean | null
    documentUrl?: string | null
    publishDate?: Date | string | null
    closingDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type SectionCreateManyCreatedByInput = {
    id?: number
    module: string
    title: string
    description?: string | null
    content?: string | null
    category?: string | null
    imageUrl?: string | null
    videoUrl?: string | null
    documentUrl?: string | null
    fileType?: string | null
    link?: string | null
    publishDate?: Date | string | null
    sortOrder?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type SettingCreateManyUpdatedByInput = {
    id?: number
    settingKey: string
    settingValue?: string | null
    category?: string | null
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ManagingDirectorMessageCreateManyUpdatedByInput = {
    id?: number
    name: string
    designation: string
    photoUrl?: string | null
    quote?: string | null
    welcomeNote: string
    qualityNote?: string | null
    collaboration?: string | null
    movingForward?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type ActivityLogCreateManyAdminInput = {
    id?: number
    action: string
    type?: string
    isRead?: boolean
    createdAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BookUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    chapters?: BookChapterUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
    chapters?: BookChapterUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    classId?: IntFieldUpdateOperationsInput | number
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    board?: NullableStringFieldUpdateOperationsInput | string | null
    coverImageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookStatusFieldUpdateOperationsInput | $Enums.BookStatus
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NoticeUpdateWithoutCreatedByInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNoticeTypeFieldUpdateOperationsInput | $Enums.NoticeType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NoticeUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNoticeTypeFieldUpdateOperationsInput | $Enums.NoticeType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type NoticeUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumNoticeTypeFieldUpdateOperationsInput | $Enums.NoticeType
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isPinned?: NullableBoolFieldUpdateOperationsInput | boolean | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    closingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SectionUpdateWithoutCreatedByInput = {
    module?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SectionUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    module?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SectionUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    module?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    documentUrl?: NullableStringFieldUpdateOperationsInput | string | null
    fileType?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    publishDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SettingUpdateWithoutUpdatedByInput = {
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SettingUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type SettingUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    settingKey?: StringFieldUpdateOperationsInput | string
    settingValue?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ManagingDirectorMessageUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeNote?: StringFieldUpdateOperationsInput | string
    qualityNote?: NullableStringFieldUpdateOperationsInput | string | null
    collaboration?: NullableStringFieldUpdateOperationsInput | string | null
    movingForward?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ManagingDirectorMessageUncheckedUpdateWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeNote?: StringFieldUpdateOperationsInput | string
    qualityNote?: NullableStringFieldUpdateOperationsInput | string | null
    collaboration?: NullableStringFieldUpdateOperationsInput | string | null
    movingForward?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ManagingDirectorMessageUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    designation?: StringFieldUpdateOperationsInput | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    quote?: NullableStringFieldUpdateOperationsInput | string | null
    welcomeNote?: StringFieldUpdateOperationsInput | string
    qualityNote?: NullableStringFieldUpdateOperationsInput | string | null
    collaboration?: NullableStringFieldUpdateOperationsInput | string | null
    movingForward?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ActivityLogUpdateWithoutAdminInput = {
    action?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ActivityLogUncheckedUpdateWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ActivityLogUncheckedUpdateManyWithoutAdminInput = {
    id?: IntFieldUpdateOperationsInput | number
    action?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookChapterCreateManyBookInput = {
    id?: number
    chapterNumber: number
    title?: string | null
    hindiTitle?: string | null
    pdfUrl?: string | null
    sortOrder?: number | null
    createdAt?: Date | string
    extraText?: string | null
    extraNumber?: number | null
  }

  export type BookChapterUpdateWithoutBookInput = {
    chapterNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    hindiTitle?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookChapterUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    chapterNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    hindiTitle?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BookChapterUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    chapterNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    hindiTitle?: NullableStringFieldUpdateOperationsInput | string | null
    pdfUrl?: NullableStringFieldUpdateOperationsInput | string | null
    sortOrder?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    extraText?: NullableStringFieldUpdateOperationsInput | string | null
    extraNumber?: NullableFloatFieldUpdateOperationsInput | number | null
  }



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