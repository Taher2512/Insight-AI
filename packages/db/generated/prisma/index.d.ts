
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model WhaleAlert
 * 
 */
export type WhaleAlert = $Result.DefaultSelection<Prisma.$WhaleAlertPayload>
/**
 * Model Analysis
 * 
 */
export type Analysis = $Result.DefaultSelection<Prisma.$AnalysisPayload>
/**
 * Model X402Payment
 * 
 */
export type X402Payment = $Result.DefaultSelection<Prisma.$X402PaymentPayload>
/**
 * Model PriceSnapshot
 * 
 */
export type PriceSnapshot = $Result.DefaultSelection<Prisma.$PriceSnapshotPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs>;

  /**
   * `prisma.whaleAlert`: Exposes CRUD operations for the **WhaleAlert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WhaleAlerts
    * const whaleAlerts = await prisma.whaleAlert.findMany()
    * ```
    */
  get whaleAlert(): Prisma.WhaleAlertDelegate<ExtArgs>;

  /**
   * `prisma.analysis`: Exposes CRUD operations for the **Analysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Analyses
    * const analyses = await prisma.analysis.findMany()
    * ```
    */
  get analysis(): Prisma.AnalysisDelegate<ExtArgs>;

  /**
   * `prisma.x402Payment`: Exposes CRUD operations for the **X402Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more X402Payments
    * const x402Payments = await prisma.x402Payment.findMany()
    * ```
    */
  get x402Payment(): Prisma.X402PaymentDelegate<ExtArgs>;

  /**
   * `prisma.priceSnapshot`: Exposes CRUD operations for the **PriceSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PriceSnapshots
    * const priceSnapshots = await prisma.priceSnapshot.findMany()
    * ```
    */
  get priceSnapshot(): Prisma.PriceSnapshotDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
    User: 'User',
    Wallet: 'Wallet',
    WhaleAlert: 'WhaleAlert',
    Analysis: 'Analysis',
    X402Payment: 'X402Payment',
    PriceSnapshot: 'PriceSnapshot'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "wallet" | "whaleAlert" | "analysis" | "x402Payment" | "priceSnapshot"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      WhaleAlert: {
        payload: Prisma.$WhaleAlertPayload<ExtArgs>
        fields: Prisma.WhaleAlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhaleAlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhaleAlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhaleAlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhaleAlertPayload>
          }
          findFirst: {
            args: Prisma.WhaleAlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhaleAlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhaleAlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhaleAlertPayload>
          }
          findMany: {
            args: Prisma.WhaleAlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhaleAlertPayload>[]
          }
          create: {
            args: Prisma.WhaleAlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhaleAlertPayload>
          }
          createMany: {
            args: Prisma.WhaleAlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhaleAlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhaleAlertPayload>[]
          }
          delete: {
            args: Prisma.WhaleAlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhaleAlertPayload>
          }
          update: {
            args: Prisma.WhaleAlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhaleAlertPayload>
          }
          deleteMany: {
            args: Prisma.WhaleAlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhaleAlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WhaleAlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhaleAlertPayload>
          }
          aggregate: {
            args: Prisma.WhaleAlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhaleAlert>
          }
          groupBy: {
            args: Prisma.WhaleAlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhaleAlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhaleAlertCountArgs<ExtArgs>
            result: $Utils.Optional<WhaleAlertCountAggregateOutputType> | number
          }
        }
      }
      Analysis: {
        payload: Prisma.$AnalysisPayload<ExtArgs>
        fields: Prisma.AnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          findFirst: {
            args: Prisma.AnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          findMany: {
            args: Prisma.AnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[]
          }
          create: {
            args: Prisma.AnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          createMany: {
            args: Prisma.AnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>[]
          }
          delete: {
            args: Prisma.AnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          update: {
            args: Prisma.AnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          deleteMany: {
            args: Prisma.AnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnalysisPayload>
          }
          aggregate: {
            args: Prisma.AnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnalysis>
          }
          groupBy: {
            args: Prisma.AnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<AnalysisCountAggregateOutputType> | number
          }
        }
      }
      X402Payment: {
        payload: Prisma.$X402PaymentPayload<ExtArgs>
        fields: Prisma.X402PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.X402PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$X402PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.X402PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$X402PaymentPayload>
          }
          findFirst: {
            args: Prisma.X402PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$X402PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.X402PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$X402PaymentPayload>
          }
          findMany: {
            args: Prisma.X402PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$X402PaymentPayload>[]
          }
          create: {
            args: Prisma.X402PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$X402PaymentPayload>
          }
          createMany: {
            args: Prisma.X402PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.X402PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$X402PaymentPayload>[]
          }
          delete: {
            args: Prisma.X402PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$X402PaymentPayload>
          }
          update: {
            args: Prisma.X402PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$X402PaymentPayload>
          }
          deleteMany: {
            args: Prisma.X402PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.X402PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.X402PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$X402PaymentPayload>
          }
          aggregate: {
            args: Prisma.X402PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateX402Payment>
          }
          groupBy: {
            args: Prisma.X402PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<X402PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.X402PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<X402PaymentCountAggregateOutputType> | number
          }
        }
      }
      PriceSnapshot: {
        payload: Prisma.$PriceSnapshotPayload<ExtArgs>
        fields: Prisma.PriceSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PriceSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PriceSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>
          }
          findFirst: {
            args: Prisma.PriceSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PriceSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>
          }
          findMany: {
            args: Prisma.PriceSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>[]
          }
          create: {
            args: Prisma.PriceSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>
          }
          createMany: {
            args: Prisma.PriceSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PriceSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>[]
          }
          delete: {
            args: Prisma.PriceSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>
          }
          update: {
            args: Prisma.PriceSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.PriceSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PriceSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PriceSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PriceSnapshotPayload>
          }
          aggregate: {
            args: Prisma.PriceSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePriceSnapshot>
          }
          groupBy: {
            args: Prisma.PriceSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<PriceSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.PriceSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<PriceSnapshotCountAggregateOutputType> | number
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
    | 'createManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    analyses: number
    x402Payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | UserCountOutputTypeCountAnalysesArgs
    x402Payments?: boolean | UserCountOutputTypeCountX402PaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountX402PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: X402PaymentWhereInput
  }


  /**
   * Count Type WhaleAlertCountOutputType
   */

  export type WhaleAlertCountOutputType = {
    analyses: number
  }

  export type WhaleAlertCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | WhaleAlertCountOutputTypeCountAnalysesArgs
  }

  // Custom InputTypes
  /**
   * WhaleAlertCountOutputType without action
   */
  export type WhaleAlertCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhaleAlertCountOutputType
     */
    select?: WhaleAlertCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WhaleAlertCountOutputType without action
   */
  export type WhaleAlertCountOutputTypeCountAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    telegramId: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    telegramId: string | null
    username: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    telegramId: number
    username: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    telegramId?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    telegramId?: true
    username?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    telegramId?: true
    username?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    telegramId: string
    username: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    wallet?: boolean | User$walletArgs<ExtArgs>
    analyses?: boolean | User$analysesArgs<ExtArgs>
    x402Payments?: boolean | User$x402PaymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telegramId?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    telegramId?: boolean
    username?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    wallet?: boolean | User$walletArgs<ExtArgs>
    analyses?: boolean | User$analysesArgs<ExtArgs>
    x402Payments?: boolean | User$x402PaymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      wallet: Prisma.$WalletPayload<ExtArgs> | null
      analyses: Prisma.$AnalysisPayload<ExtArgs>[]
      x402Payments: Prisma.$X402PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      telegramId: string
      username: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    wallet<T extends User$walletArgs<ExtArgs> = {}>(args?: Subset<T, User$walletArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    analyses<T extends User$analysesArgs<ExtArgs> = {}>(args?: Subset<T, User$analysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findMany"> | Null>
    x402Payments<T extends User$x402PaymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$x402PaymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$X402PaymentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly telegramId: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.wallet
   */
  export type User$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
  }

  /**
   * User.analyses
   */
  export type User$analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    where?: AnalysisWhereInput
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    cursor?: AnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * User.x402Payments
   */
  export type User$x402PaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the X402Payment
     */
    select?: X402PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: X402PaymentInclude<ExtArgs> | null
    where?: X402PaymentWhereInput
    orderBy?: X402PaymentOrderByWithRelationInput | X402PaymentOrderByWithRelationInput[]
    cursor?: X402PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: X402PaymentScalarFieldEnum | X402PaymentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    balance: number | null
  }

  export type WalletSumAggregateOutputType = {
    balance: number | null
  }

  export type WalletMinAggregateOutputType = {
    id: string | null
    userId: string | null
    publicKey: string | null
    encryptedPrivateKey: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    publicKey: string | null
    encryptedPrivateKey: string | null
    balance: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    userId: number
    publicKey: number
    encryptedPrivateKey: number
    balance: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    balance?: true
  }

  export type WalletSumAggregateInputType = {
    balance?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    userId?: true
    publicKey?: true
    encryptedPrivateKey?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    userId?: true
    publicKey?: true
    encryptedPrivateKey?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    userId?: true
    publicKey?: true
    encryptedPrivateKey?: true
    balance?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: string
    userId: string
    publicKey: string
    encryptedPrivateKey: string
    balance: number
    createdAt: Date
    updatedAt: Date
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    publicKey?: boolean
    encryptedPrivateKey?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    publicKey?: boolean
    encryptedPrivateKey?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    id?: boolean
    userId?: boolean
    publicKey?: boolean
    encryptedPrivateKey?: boolean
    balance?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      publicKey: string
      encryptedPrivateKey: string
      balance: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Wallet model
   */ 
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'String'>
    readonly userId: FieldRef<"Wallet", 'String'>
    readonly publicKey: FieldRef<"Wallet", 'String'>
    readonly encryptedPrivateKey: FieldRef<"Wallet", 'String'>
    readonly balance: FieldRef<"Wallet", 'Float'>
    readonly createdAt: FieldRef<"Wallet", 'DateTime'>
    readonly updatedAt: FieldRef<"Wallet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model WhaleAlert
   */

  export type AggregateWhaleAlert = {
    _count: WhaleAlertCountAggregateOutputType | null
    _avg: WhaleAlertAvgAggregateOutputType | null
    _sum: WhaleAlertSumAggregateOutputType | null
    _min: WhaleAlertMinAggregateOutputType | null
    _max: WhaleAlertMaxAggregateOutputType | null
  }

  export type WhaleAlertAvgAggregateOutputType = {
    amount: number | null
  }

  export type WhaleAlertSumAggregateOutputType = {
    amount: number | null
  }

  export type WhaleAlertMinAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    amount: number | null
    token: string | null
    actionType: string | null
    exchange: string | null
    timestamp: Date | null
    analyzed: boolean | null
    createdAt: Date | null
  }

  export type WhaleAlertMaxAggregateOutputType = {
    id: string | null
    walletAddress: string | null
    amount: number | null
    token: string | null
    actionType: string | null
    exchange: string | null
    timestamp: Date | null
    analyzed: boolean | null
    createdAt: Date | null
  }

  export type WhaleAlertCountAggregateOutputType = {
    id: number
    walletAddress: number
    amount: number
    token: number
    actionType: number
    exchange: number
    timestamp: number
    analyzed: number
    createdAt: number
    _all: number
  }


  export type WhaleAlertAvgAggregateInputType = {
    amount?: true
  }

  export type WhaleAlertSumAggregateInputType = {
    amount?: true
  }

  export type WhaleAlertMinAggregateInputType = {
    id?: true
    walletAddress?: true
    amount?: true
    token?: true
    actionType?: true
    exchange?: true
    timestamp?: true
    analyzed?: true
    createdAt?: true
  }

  export type WhaleAlertMaxAggregateInputType = {
    id?: true
    walletAddress?: true
    amount?: true
    token?: true
    actionType?: true
    exchange?: true
    timestamp?: true
    analyzed?: true
    createdAt?: true
  }

  export type WhaleAlertCountAggregateInputType = {
    id?: true
    walletAddress?: true
    amount?: true
    token?: true
    actionType?: true
    exchange?: true
    timestamp?: true
    analyzed?: true
    createdAt?: true
    _all?: true
  }

  export type WhaleAlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhaleAlert to aggregate.
     */
    where?: WhaleAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhaleAlerts to fetch.
     */
    orderBy?: WhaleAlertOrderByWithRelationInput | WhaleAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhaleAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhaleAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhaleAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WhaleAlerts
    **/
    _count?: true | WhaleAlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WhaleAlertAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WhaleAlertSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhaleAlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhaleAlertMaxAggregateInputType
  }

  export type GetWhaleAlertAggregateType<T extends WhaleAlertAggregateArgs> = {
        [P in keyof T & keyof AggregateWhaleAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhaleAlert[P]>
      : GetScalarType<T[P], AggregateWhaleAlert[P]>
  }




  export type WhaleAlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhaleAlertWhereInput
    orderBy?: WhaleAlertOrderByWithAggregationInput | WhaleAlertOrderByWithAggregationInput[]
    by: WhaleAlertScalarFieldEnum[] | WhaleAlertScalarFieldEnum
    having?: WhaleAlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhaleAlertCountAggregateInputType | true
    _avg?: WhaleAlertAvgAggregateInputType
    _sum?: WhaleAlertSumAggregateInputType
    _min?: WhaleAlertMinAggregateInputType
    _max?: WhaleAlertMaxAggregateInputType
  }

  export type WhaleAlertGroupByOutputType = {
    id: string
    walletAddress: string
    amount: number
    token: string
    actionType: string
    exchange: string
    timestamp: Date
    analyzed: boolean
    createdAt: Date
    _count: WhaleAlertCountAggregateOutputType | null
    _avg: WhaleAlertAvgAggregateOutputType | null
    _sum: WhaleAlertSumAggregateOutputType | null
    _min: WhaleAlertMinAggregateOutputType | null
    _max: WhaleAlertMaxAggregateOutputType | null
  }

  type GetWhaleAlertGroupByPayload<T extends WhaleAlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhaleAlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhaleAlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhaleAlertGroupByOutputType[P]>
            : GetScalarType<T[P], WhaleAlertGroupByOutputType[P]>
        }
      >
    >


  export type WhaleAlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    amount?: boolean
    token?: boolean
    actionType?: boolean
    exchange?: boolean
    timestamp?: boolean
    analyzed?: boolean
    createdAt?: boolean
    analyses?: boolean | WhaleAlert$analysesArgs<ExtArgs>
    _count?: boolean | WhaleAlertCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whaleAlert"]>

  export type WhaleAlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    walletAddress?: boolean
    amount?: boolean
    token?: boolean
    actionType?: boolean
    exchange?: boolean
    timestamp?: boolean
    analyzed?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["whaleAlert"]>

  export type WhaleAlertSelectScalar = {
    id?: boolean
    walletAddress?: boolean
    amount?: boolean
    token?: boolean
    actionType?: boolean
    exchange?: boolean
    timestamp?: boolean
    analyzed?: boolean
    createdAt?: boolean
  }

  export type WhaleAlertInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    analyses?: boolean | WhaleAlert$analysesArgs<ExtArgs>
    _count?: boolean | WhaleAlertCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WhaleAlertIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WhaleAlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WhaleAlert"
    objects: {
      analyses: Prisma.$AnalysisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      walletAddress: string
      amount: number
      token: string
      actionType: string
      exchange: string
      timestamp: Date
      analyzed: boolean
      createdAt: Date
    }, ExtArgs["result"]["whaleAlert"]>
    composites: {}
  }

  type WhaleAlertGetPayload<S extends boolean | null | undefined | WhaleAlertDefaultArgs> = $Result.GetResult<Prisma.$WhaleAlertPayload, S>

  type WhaleAlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WhaleAlertFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WhaleAlertCountAggregateInputType | true
    }

  export interface WhaleAlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WhaleAlert'], meta: { name: 'WhaleAlert' } }
    /**
     * Find zero or one WhaleAlert that matches the filter.
     * @param {WhaleAlertFindUniqueArgs} args - Arguments to find a WhaleAlert
     * @example
     * // Get one WhaleAlert
     * const whaleAlert = await prisma.whaleAlert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhaleAlertFindUniqueArgs>(args: SelectSubset<T, WhaleAlertFindUniqueArgs<ExtArgs>>): Prisma__WhaleAlertClient<$Result.GetResult<Prisma.$WhaleAlertPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WhaleAlert that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WhaleAlertFindUniqueOrThrowArgs} args - Arguments to find a WhaleAlert
     * @example
     * // Get one WhaleAlert
     * const whaleAlert = await prisma.whaleAlert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhaleAlertFindUniqueOrThrowArgs>(args: SelectSubset<T, WhaleAlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhaleAlertClient<$Result.GetResult<Prisma.$WhaleAlertPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WhaleAlert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhaleAlertFindFirstArgs} args - Arguments to find a WhaleAlert
     * @example
     * // Get one WhaleAlert
     * const whaleAlert = await prisma.whaleAlert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhaleAlertFindFirstArgs>(args?: SelectSubset<T, WhaleAlertFindFirstArgs<ExtArgs>>): Prisma__WhaleAlertClient<$Result.GetResult<Prisma.$WhaleAlertPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WhaleAlert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhaleAlertFindFirstOrThrowArgs} args - Arguments to find a WhaleAlert
     * @example
     * // Get one WhaleAlert
     * const whaleAlert = await prisma.whaleAlert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhaleAlertFindFirstOrThrowArgs>(args?: SelectSubset<T, WhaleAlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhaleAlertClient<$Result.GetResult<Prisma.$WhaleAlertPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WhaleAlerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhaleAlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WhaleAlerts
     * const whaleAlerts = await prisma.whaleAlert.findMany()
     * 
     * // Get first 10 WhaleAlerts
     * const whaleAlerts = await prisma.whaleAlert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whaleAlertWithIdOnly = await prisma.whaleAlert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhaleAlertFindManyArgs>(args?: SelectSubset<T, WhaleAlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhaleAlertPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WhaleAlert.
     * @param {WhaleAlertCreateArgs} args - Arguments to create a WhaleAlert.
     * @example
     * // Create one WhaleAlert
     * const WhaleAlert = await prisma.whaleAlert.create({
     *   data: {
     *     // ... data to create a WhaleAlert
     *   }
     * })
     * 
     */
    create<T extends WhaleAlertCreateArgs>(args: SelectSubset<T, WhaleAlertCreateArgs<ExtArgs>>): Prisma__WhaleAlertClient<$Result.GetResult<Prisma.$WhaleAlertPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WhaleAlerts.
     * @param {WhaleAlertCreateManyArgs} args - Arguments to create many WhaleAlerts.
     * @example
     * // Create many WhaleAlerts
     * const whaleAlert = await prisma.whaleAlert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhaleAlertCreateManyArgs>(args?: SelectSubset<T, WhaleAlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WhaleAlerts and returns the data saved in the database.
     * @param {WhaleAlertCreateManyAndReturnArgs} args - Arguments to create many WhaleAlerts.
     * @example
     * // Create many WhaleAlerts
     * const whaleAlert = await prisma.whaleAlert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WhaleAlerts and only return the `id`
     * const whaleAlertWithIdOnly = await prisma.whaleAlert.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhaleAlertCreateManyAndReturnArgs>(args?: SelectSubset<T, WhaleAlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhaleAlertPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WhaleAlert.
     * @param {WhaleAlertDeleteArgs} args - Arguments to delete one WhaleAlert.
     * @example
     * // Delete one WhaleAlert
     * const WhaleAlert = await prisma.whaleAlert.delete({
     *   where: {
     *     // ... filter to delete one WhaleAlert
     *   }
     * })
     * 
     */
    delete<T extends WhaleAlertDeleteArgs>(args: SelectSubset<T, WhaleAlertDeleteArgs<ExtArgs>>): Prisma__WhaleAlertClient<$Result.GetResult<Prisma.$WhaleAlertPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WhaleAlert.
     * @param {WhaleAlertUpdateArgs} args - Arguments to update one WhaleAlert.
     * @example
     * // Update one WhaleAlert
     * const whaleAlert = await prisma.whaleAlert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhaleAlertUpdateArgs>(args: SelectSubset<T, WhaleAlertUpdateArgs<ExtArgs>>): Prisma__WhaleAlertClient<$Result.GetResult<Prisma.$WhaleAlertPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WhaleAlerts.
     * @param {WhaleAlertDeleteManyArgs} args - Arguments to filter WhaleAlerts to delete.
     * @example
     * // Delete a few WhaleAlerts
     * const { count } = await prisma.whaleAlert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhaleAlertDeleteManyArgs>(args?: SelectSubset<T, WhaleAlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WhaleAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhaleAlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WhaleAlerts
     * const whaleAlert = await prisma.whaleAlert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhaleAlertUpdateManyArgs>(args: SelectSubset<T, WhaleAlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WhaleAlert.
     * @param {WhaleAlertUpsertArgs} args - Arguments to update or create a WhaleAlert.
     * @example
     * // Update or create a WhaleAlert
     * const whaleAlert = await prisma.whaleAlert.upsert({
     *   create: {
     *     // ... data to create a WhaleAlert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WhaleAlert we want to update
     *   }
     * })
     */
    upsert<T extends WhaleAlertUpsertArgs>(args: SelectSubset<T, WhaleAlertUpsertArgs<ExtArgs>>): Prisma__WhaleAlertClient<$Result.GetResult<Prisma.$WhaleAlertPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WhaleAlerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhaleAlertCountArgs} args - Arguments to filter WhaleAlerts to count.
     * @example
     * // Count the number of WhaleAlerts
     * const count = await prisma.whaleAlert.count({
     *   where: {
     *     // ... the filter for the WhaleAlerts we want to count
     *   }
     * })
    **/
    count<T extends WhaleAlertCountArgs>(
      args?: Subset<T, WhaleAlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhaleAlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WhaleAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhaleAlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WhaleAlertAggregateArgs>(args: Subset<T, WhaleAlertAggregateArgs>): Prisma.PrismaPromise<GetWhaleAlertAggregateType<T>>

    /**
     * Group by WhaleAlert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhaleAlertGroupByArgs} args - Group by arguments.
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
      T extends WhaleAlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhaleAlertGroupByArgs['orderBy'] }
        : { orderBy?: WhaleAlertGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WhaleAlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhaleAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WhaleAlert model
   */
  readonly fields: WhaleAlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WhaleAlert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhaleAlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    analyses<T extends WhaleAlert$analysesArgs<ExtArgs> = {}>(args?: Subset<T, WhaleAlert$analysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the WhaleAlert model
   */ 
  interface WhaleAlertFieldRefs {
    readonly id: FieldRef<"WhaleAlert", 'String'>
    readonly walletAddress: FieldRef<"WhaleAlert", 'String'>
    readonly amount: FieldRef<"WhaleAlert", 'Float'>
    readonly token: FieldRef<"WhaleAlert", 'String'>
    readonly actionType: FieldRef<"WhaleAlert", 'String'>
    readonly exchange: FieldRef<"WhaleAlert", 'String'>
    readonly timestamp: FieldRef<"WhaleAlert", 'DateTime'>
    readonly analyzed: FieldRef<"WhaleAlert", 'Boolean'>
    readonly createdAt: FieldRef<"WhaleAlert", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WhaleAlert findUnique
   */
  export type WhaleAlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhaleAlert
     */
    select?: WhaleAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhaleAlertInclude<ExtArgs> | null
    /**
     * Filter, which WhaleAlert to fetch.
     */
    where: WhaleAlertWhereUniqueInput
  }

  /**
   * WhaleAlert findUniqueOrThrow
   */
  export type WhaleAlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhaleAlert
     */
    select?: WhaleAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhaleAlertInclude<ExtArgs> | null
    /**
     * Filter, which WhaleAlert to fetch.
     */
    where: WhaleAlertWhereUniqueInput
  }

  /**
   * WhaleAlert findFirst
   */
  export type WhaleAlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhaleAlert
     */
    select?: WhaleAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhaleAlertInclude<ExtArgs> | null
    /**
     * Filter, which WhaleAlert to fetch.
     */
    where?: WhaleAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhaleAlerts to fetch.
     */
    orderBy?: WhaleAlertOrderByWithRelationInput | WhaleAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhaleAlerts.
     */
    cursor?: WhaleAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhaleAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhaleAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhaleAlerts.
     */
    distinct?: WhaleAlertScalarFieldEnum | WhaleAlertScalarFieldEnum[]
  }

  /**
   * WhaleAlert findFirstOrThrow
   */
  export type WhaleAlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhaleAlert
     */
    select?: WhaleAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhaleAlertInclude<ExtArgs> | null
    /**
     * Filter, which WhaleAlert to fetch.
     */
    where?: WhaleAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhaleAlerts to fetch.
     */
    orderBy?: WhaleAlertOrderByWithRelationInput | WhaleAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WhaleAlerts.
     */
    cursor?: WhaleAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhaleAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhaleAlerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WhaleAlerts.
     */
    distinct?: WhaleAlertScalarFieldEnum | WhaleAlertScalarFieldEnum[]
  }

  /**
   * WhaleAlert findMany
   */
  export type WhaleAlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhaleAlert
     */
    select?: WhaleAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhaleAlertInclude<ExtArgs> | null
    /**
     * Filter, which WhaleAlerts to fetch.
     */
    where?: WhaleAlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WhaleAlerts to fetch.
     */
    orderBy?: WhaleAlertOrderByWithRelationInput | WhaleAlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WhaleAlerts.
     */
    cursor?: WhaleAlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WhaleAlerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WhaleAlerts.
     */
    skip?: number
    distinct?: WhaleAlertScalarFieldEnum | WhaleAlertScalarFieldEnum[]
  }

  /**
   * WhaleAlert create
   */
  export type WhaleAlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhaleAlert
     */
    select?: WhaleAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhaleAlertInclude<ExtArgs> | null
    /**
     * The data needed to create a WhaleAlert.
     */
    data: XOR<WhaleAlertCreateInput, WhaleAlertUncheckedCreateInput>
  }

  /**
   * WhaleAlert createMany
   */
  export type WhaleAlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WhaleAlerts.
     */
    data: WhaleAlertCreateManyInput | WhaleAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhaleAlert createManyAndReturn
   */
  export type WhaleAlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhaleAlert
     */
    select?: WhaleAlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WhaleAlerts.
     */
    data: WhaleAlertCreateManyInput | WhaleAlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WhaleAlert update
   */
  export type WhaleAlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhaleAlert
     */
    select?: WhaleAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhaleAlertInclude<ExtArgs> | null
    /**
     * The data needed to update a WhaleAlert.
     */
    data: XOR<WhaleAlertUpdateInput, WhaleAlertUncheckedUpdateInput>
    /**
     * Choose, which WhaleAlert to update.
     */
    where: WhaleAlertWhereUniqueInput
  }

  /**
   * WhaleAlert updateMany
   */
  export type WhaleAlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WhaleAlerts.
     */
    data: XOR<WhaleAlertUpdateManyMutationInput, WhaleAlertUncheckedUpdateManyInput>
    /**
     * Filter which WhaleAlerts to update
     */
    where?: WhaleAlertWhereInput
  }

  /**
   * WhaleAlert upsert
   */
  export type WhaleAlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhaleAlert
     */
    select?: WhaleAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhaleAlertInclude<ExtArgs> | null
    /**
     * The filter to search for the WhaleAlert to update in case it exists.
     */
    where: WhaleAlertWhereUniqueInput
    /**
     * In case the WhaleAlert found by the `where` argument doesn't exist, create a new WhaleAlert with this data.
     */
    create: XOR<WhaleAlertCreateInput, WhaleAlertUncheckedCreateInput>
    /**
     * In case the WhaleAlert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhaleAlertUpdateInput, WhaleAlertUncheckedUpdateInput>
  }

  /**
   * WhaleAlert delete
   */
  export type WhaleAlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhaleAlert
     */
    select?: WhaleAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhaleAlertInclude<ExtArgs> | null
    /**
     * Filter which WhaleAlert to delete.
     */
    where: WhaleAlertWhereUniqueInput
  }

  /**
   * WhaleAlert deleteMany
   */
  export type WhaleAlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WhaleAlerts to delete
     */
    where?: WhaleAlertWhereInput
  }

  /**
   * WhaleAlert.analyses
   */
  export type WhaleAlert$analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    where?: AnalysisWhereInput
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    cursor?: AnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * WhaleAlert without action
   */
  export type WhaleAlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WhaleAlert
     */
    select?: WhaleAlertSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhaleAlertInclude<ExtArgs> | null
  }


  /**
   * Model Analysis
   */

  export type AggregateAnalysis = {
    _count: AnalysisCountAggregateOutputType | null
    _avg: AnalysisAvgAggregateOutputType | null
    _sum: AnalysisSumAggregateOutputType | null
    _min: AnalysisMinAggregateOutputType | null
    _max: AnalysisMaxAggregateOutputType | null
  }

  export type AnalysisAvgAggregateOutputType = {
    cost: number | null
  }

  export type AnalysisSumAggregateOutputType = {
    cost: number | null
  }

  export type AnalysisMinAggregateOutputType = {
    id: string | null
    whaleAlertId: string | null
    userId: string | null
    cost: number | null
    createdAt: Date | null
  }

  export type AnalysisMaxAggregateOutputType = {
    id: string | null
    whaleAlertId: string | null
    userId: string | null
    cost: number | null
    createdAt: Date | null
  }

  export type AnalysisCountAggregateOutputType = {
    id: number
    whaleAlertId: number
    userId: number
    cost: number
    report: number
    createdAt: number
    _all: number
  }


  export type AnalysisAvgAggregateInputType = {
    cost?: true
  }

  export type AnalysisSumAggregateInputType = {
    cost?: true
  }

  export type AnalysisMinAggregateInputType = {
    id?: true
    whaleAlertId?: true
    userId?: true
    cost?: true
    createdAt?: true
  }

  export type AnalysisMaxAggregateInputType = {
    id?: true
    whaleAlertId?: true
    userId?: true
    cost?: true
    createdAt?: true
  }

  export type AnalysisCountAggregateInputType = {
    id?: true
    whaleAlertId?: true
    userId?: true
    cost?: true
    report?: true
    createdAt?: true
    _all?: true
  }

  export type AnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analysis to aggregate.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Analyses
    **/
    _count?: true | AnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnalysisMaxAggregateInputType
  }

  export type GetAnalysisAggregateType<T extends AnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnalysis[P]>
      : GetScalarType<T[P], AggregateAnalysis[P]>
  }




  export type AnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnalysisWhereInput
    orderBy?: AnalysisOrderByWithAggregationInput | AnalysisOrderByWithAggregationInput[]
    by: AnalysisScalarFieldEnum[] | AnalysisScalarFieldEnum
    having?: AnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnalysisCountAggregateInputType | true
    _avg?: AnalysisAvgAggregateInputType
    _sum?: AnalysisSumAggregateInputType
    _min?: AnalysisMinAggregateInputType
    _max?: AnalysisMaxAggregateInputType
  }

  export type AnalysisGroupByOutputType = {
    id: string
    whaleAlertId: string
    userId: string
    cost: number
    report: JsonValue | null
    createdAt: Date
    _count: AnalysisCountAggregateOutputType | null
    _avg: AnalysisAvgAggregateOutputType | null
    _sum: AnalysisSumAggregateOutputType | null
    _min: AnalysisMinAggregateOutputType | null
    _max: AnalysisMaxAggregateOutputType | null
  }

  type GetAnalysisGroupByPayload<T extends AnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], AnalysisGroupByOutputType[P]>
        }
      >
    >


  export type AnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whaleAlertId?: boolean
    userId?: boolean
    cost?: boolean
    report?: boolean
    createdAt?: boolean
    whaleAlert?: boolean | WhaleAlertDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysis"]>

  export type AnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    whaleAlertId?: boolean
    userId?: boolean
    cost?: boolean
    report?: boolean
    createdAt?: boolean
    whaleAlert?: boolean | WhaleAlertDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["analysis"]>

  export type AnalysisSelectScalar = {
    id?: boolean
    whaleAlertId?: boolean
    userId?: boolean
    cost?: boolean
    report?: boolean
    createdAt?: boolean
  }

  export type AnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whaleAlert?: boolean | WhaleAlertDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    whaleAlert?: boolean | WhaleAlertDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Analysis"
    objects: {
      whaleAlert: Prisma.$WhaleAlertPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      whaleAlertId: string
      userId: string
      cost: number
      report: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["analysis"]>
    composites: {}
  }

  type AnalysisGetPayload<S extends boolean | null | undefined | AnalysisDefaultArgs> = $Result.GetResult<Prisma.$AnalysisPayload, S>

  type AnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnalysisFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnalysisCountAggregateInputType | true
    }

  export interface AnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Analysis'], meta: { name: 'Analysis' } }
    /**
     * Find zero or one Analysis that matches the filter.
     * @param {AnalysisFindUniqueArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnalysisFindUniqueArgs>(args: SelectSubset<T, AnalysisFindUniqueArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Analysis that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnalysisFindUniqueOrThrowArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, AnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Analysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindFirstArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnalysisFindFirstArgs>(args?: SelectSubset<T, AnalysisFindFirstArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Analysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindFirstOrThrowArgs} args - Arguments to find a Analysis
     * @example
     * // Get one Analysis
     * const analysis = await prisma.analysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, AnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Analyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Analyses
     * const analyses = await prisma.analysis.findMany()
     * 
     * // Get first 10 Analyses
     * const analyses = await prisma.analysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const analysisWithIdOnly = await prisma.analysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnalysisFindManyArgs>(args?: SelectSubset<T, AnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Analysis.
     * @param {AnalysisCreateArgs} args - Arguments to create a Analysis.
     * @example
     * // Create one Analysis
     * const Analysis = await prisma.analysis.create({
     *   data: {
     *     // ... data to create a Analysis
     *   }
     * })
     * 
     */
    create<T extends AnalysisCreateArgs>(args: SelectSubset<T, AnalysisCreateArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Analyses.
     * @param {AnalysisCreateManyArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analysis = await prisma.analysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnalysisCreateManyArgs>(args?: SelectSubset<T, AnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Analyses and returns the data saved in the database.
     * @param {AnalysisCreateManyAndReturnArgs} args - Arguments to create many Analyses.
     * @example
     * // Create many Analyses
     * const analysis = await prisma.analysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Analyses and only return the `id`
     * const analysisWithIdOnly = await prisma.analysis.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, AnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Analysis.
     * @param {AnalysisDeleteArgs} args - Arguments to delete one Analysis.
     * @example
     * // Delete one Analysis
     * const Analysis = await prisma.analysis.delete({
     *   where: {
     *     // ... filter to delete one Analysis
     *   }
     * })
     * 
     */
    delete<T extends AnalysisDeleteArgs>(args: SelectSubset<T, AnalysisDeleteArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Analysis.
     * @param {AnalysisUpdateArgs} args - Arguments to update one Analysis.
     * @example
     * // Update one Analysis
     * const analysis = await prisma.analysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnalysisUpdateArgs>(args: SelectSubset<T, AnalysisUpdateArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Analyses.
     * @param {AnalysisDeleteManyArgs} args - Arguments to filter Analyses to delete.
     * @example
     * // Delete a few Analyses
     * const { count } = await prisma.analysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnalysisDeleteManyArgs>(args?: SelectSubset<T, AnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Analyses
     * const analysis = await prisma.analysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnalysisUpdateManyArgs>(args: SelectSubset<T, AnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Analysis.
     * @param {AnalysisUpsertArgs} args - Arguments to update or create a Analysis.
     * @example
     * // Update or create a Analysis
     * const analysis = await prisma.analysis.upsert({
     *   create: {
     *     // ... data to create a Analysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Analysis we want to update
     *   }
     * })
     */
    upsert<T extends AnalysisUpsertArgs>(args: SelectSubset<T, AnalysisUpsertArgs<ExtArgs>>): Prisma__AnalysisClient<$Result.GetResult<Prisma.$AnalysisPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Analyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisCountArgs} args - Arguments to filter Analyses to count.
     * @example
     * // Count the number of Analyses
     * const count = await prisma.analysis.count({
     *   where: {
     *     // ... the filter for the Analyses we want to count
     *   }
     * })
    **/
    count<T extends AnalysisCountArgs>(
      args?: Subset<T, AnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnalysisAggregateArgs>(args: Subset<T, AnalysisAggregateArgs>): Prisma.PrismaPromise<GetAnalysisAggregateType<T>>

    /**
     * Group by Analysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnalysisGroupByArgs} args - Group by arguments.
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
      T extends AnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnalysisGroupByArgs['orderBy'] }
        : { orderBy?: AnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Analysis model
   */
  readonly fields: AnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Analysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    whaleAlert<T extends WhaleAlertDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WhaleAlertDefaultArgs<ExtArgs>>): Prisma__WhaleAlertClient<$Result.GetResult<Prisma.$WhaleAlertPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Analysis model
   */ 
  interface AnalysisFieldRefs {
    readonly id: FieldRef<"Analysis", 'String'>
    readonly whaleAlertId: FieldRef<"Analysis", 'String'>
    readonly userId: FieldRef<"Analysis", 'String'>
    readonly cost: FieldRef<"Analysis", 'Float'>
    readonly report: FieldRef<"Analysis", 'Json'>
    readonly createdAt: FieldRef<"Analysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Analysis findUnique
   */
  export type AnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis findUniqueOrThrow
   */
  export type AnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis findFirst
   */
  export type AnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Analysis findFirstOrThrow
   */
  export type AnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analysis to fetch.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Analyses.
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Analyses.
     */
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Analysis findMany
   */
  export type AnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter, which Analyses to fetch.
     */
    where?: AnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Analyses to fetch.
     */
    orderBy?: AnalysisOrderByWithRelationInput | AnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Analyses.
     */
    cursor?: AnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Analyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Analyses.
     */
    skip?: number
    distinct?: AnalysisScalarFieldEnum | AnalysisScalarFieldEnum[]
  }

  /**
   * Analysis create
   */
  export type AnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a Analysis.
     */
    data: XOR<AnalysisCreateInput, AnalysisUncheckedCreateInput>
  }

  /**
   * Analysis createMany
   */
  export type AnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Analyses.
     */
    data: AnalysisCreateManyInput | AnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Analysis createManyAndReturn
   */
  export type AnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Analyses.
     */
    data: AnalysisCreateManyInput | AnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Analysis update
   */
  export type AnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a Analysis.
     */
    data: XOR<AnalysisUpdateInput, AnalysisUncheckedUpdateInput>
    /**
     * Choose, which Analysis to update.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis updateMany
   */
  export type AnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Analyses.
     */
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyInput>
    /**
     * Filter which Analyses to update
     */
    where?: AnalysisWhereInput
  }

  /**
   * Analysis upsert
   */
  export type AnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the Analysis to update in case it exists.
     */
    where: AnalysisWhereUniqueInput
    /**
     * In case the Analysis found by the `where` argument doesn't exist, create a new Analysis with this data.
     */
    create: XOR<AnalysisCreateInput, AnalysisUncheckedCreateInput>
    /**
     * In case the Analysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnalysisUpdateInput, AnalysisUncheckedUpdateInput>
  }

  /**
   * Analysis delete
   */
  export type AnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
    /**
     * Filter which Analysis to delete.
     */
    where: AnalysisWhereUniqueInput
  }

  /**
   * Analysis deleteMany
   */
  export type AnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Analyses to delete
     */
    where?: AnalysisWhereInput
  }

  /**
   * Analysis without action
   */
  export type AnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Analysis
     */
    select?: AnalysisSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnalysisInclude<ExtArgs> | null
  }


  /**
   * Model X402Payment
   */

  export type AggregateX402Payment = {
    _count: X402PaymentCountAggregateOutputType | null
    _avg: X402PaymentAvgAggregateOutputType | null
    _sum: X402PaymentSumAggregateOutputType | null
    _min: X402PaymentMinAggregateOutputType | null
    _max: X402PaymentMaxAggregateOutputType | null
  }

  export type X402PaymentAvgAggregateOutputType = {
    amount: number | null
    chainlinkPrice: number | null
    chainlinkConfidence: number | null
  }

  export type X402PaymentSumAggregateOutputType = {
    amount: number | null
    chainlinkPrice: number | null
    chainlinkConfidence: number | null
  }

  export type X402PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    endpoint: string | null
    amount: number | null
    signature: string | null
    status: string | null
    chainlinkPrice: number | null
    chainlinkConfidence: number | null
    priceTimestamp: Date | null
    createdAt: Date | null
  }

  export type X402PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    endpoint: string | null
    amount: number | null
    signature: string | null
    status: string | null
    chainlinkPrice: number | null
    chainlinkConfidence: number | null
    priceTimestamp: Date | null
    createdAt: Date | null
  }

  export type X402PaymentCountAggregateOutputType = {
    id: number
    userId: number
    endpoint: number
    amount: number
    signature: number
    status: number
    metadata: number
    chainlinkPrice: number
    chainlinkConfidence: number
    priceTimestamp: number
    createdAt: number
    _all: number
  }


  export type X402PaymentAvgAggregateInputType = {
    amount?: true
    chainlinkPrice?: true
    chainlinkConfidence?: true
  }

  export type X402PaymentSumAggregateInputType = {
    amount?: true
    chainlinkPrice?: true
    chainlinkConfidence?: true
  }

  export type X402PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    amount?: true
    signature?: true
    status?: true
    chainlinkPrice?: true
    chainlinkConfidence?: true
    priceTimestamp?: true
    createdAt?: true
  }

  export type X402PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    amount?: true
    signature?: true
    status?: true
    chainlinkPrice?: true
    chainlinkConfidence?: true
    priceTimestamp?: true
    createdAt?: true
  }

  export type X402PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    endpoint?: true
    amount?: true
    signature?: true
    status?: true
    metadata?: true
    chainlinkPrice?: true
    chainlinkConfidence?: true
    priceTimestamp?: true
    createdAt?: true
    _all?: true
  }

  export type X402PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which X402Payment to aggregate.
     */
    where?: X402PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of X402Payments to fetch.
     */
    orderBy?: X402PaymentOrderByWithRelationInput | X402PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: X402PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` X402Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` X402Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned X402Payments
    **/
    _count?: true | X402PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: X402PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: X402PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: X402PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: X402PaymentMaxAggregateInputType
  }

  export type GetX402PaymentAggregateType<T extends X402PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateX402Payment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateX402Payment[P]>
      : GetScalarType<T[P], AggregateX402Payment[P]>
  }




  export type X402PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: X402PaymentWhereInput
    orderBy?: X402PaymentOrderByWithAggregationInput | X402PaymentOrderByWithAggregationInput[]
    by: X402PaymentScalarFieldEnum[] | X402PaymentScalarFieldEnum
    having?: X402PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: X402PaymentCountAggregateInputType | true
    _avg?: X402PaymentAvgAggregateInputType
    _sum?: X402PaymentSumAggregateInputType
    _min?: X402PaymentMinAggregateInputType
    _max?: X402PaymentMaxAggregateInputType
  }

  export type X402PaymentGroupByOutputType = {
    id: string
    userId: string
    endpoint: string
    amount: number
    signature: string
    status: string
    metadata: JsonValue | null
    chainlinkPrice: number | null
    chainlinkConfidence: number | null
    priceTimestamp: Date | null
    createdAt: Date
    _count: X402PaymentCountAggregateOutputType | null
    _avg: X402PaymentAvgAggregateOutputType | null
    _sum: X402PaymentSumAggregateOutputType | null
    _min: X402PaymentMinAggregateOutputType | null
    _max: X402PaymentMaxAggregateOutputType | null
  }

  type GetX402PaymentGroupByPayload<T extends X402PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<X402PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof X402PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], X402PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], X402PaymentGroupByOutputType[P]>
        }
      >
    >


  export type X402PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    amount?: boolean
    signature?: boolean
    status?: boolean
    metadata?: boolean
    chainlinkPrice?: boolean
    chainlinkConfidence?: boolean
    priceTimestamp?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["x402Payment"]>

  export type X402PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    amount?: boolean
    signature?: boolean
    status?: boolean
    metadata?: boolean
    chainlinkPrice?: boolean
    chainlinkConfidence?: boolean
    priceTimestamp?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["x402Payment"]>

  export type X402PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    endpoint?: boolean
    amount?: boolean
    signature?: boolean
    status?: boolean
    metadata?: boolean
    chainlinkPrice?: boolean
    chainlinkConfidence?: boolean
    priceTimestamp?: boolean
    createdAt?: boolean
  }

  export type X402PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type X402PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $X402PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "X402Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      endpoint: string
      amount: number
      signature: string
      status: string
      metadata: Prisma.JsonValue | null
      chainlinkPrice: number | null
      chainlinkConfidence: number | null
      priceTimestamp: Date | null
      createdAt: Date
    }, ExtArgs["result"]["x402Payment"]>
    composites: {}
  }

  type X402PaymentGetPayload<S extends boolean | null | undefined | X402PaymentDefaultArgs> = $Result.GetResult<Prisma.$X402PaymentPayload, S>

  type X402PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<X402PaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: X402PaymentCountAggregateInputType | true
    }

  export interface X402PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['X402Payment'], meta: { name: 'X402Payment' } }
    /**
     * Find zero or one X402Payment that matches the filter.
     * @param {X402PaymentFindUniqueArgs} args - Arguments to find a X402Payment
     * @example
     * // Get one X402Payment
     * const x402Payment = await prisma.x402Payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends X402PaymentFindUniqueArgs>(args: SelectSubset<T, X402PaymentFindUniqueArgs<ExtArgs>>): Prisma__X402PaymentClient<$Result.GetResult<Prisma.$X402PaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one X402Payment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {X402PaymentFindUniqueOrThrowArgs} args - Arguments to find a X402Payment
     * @example
     * // Get one X402Payment
     * const x402Payment = await prisma.x402Payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends X402PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, X402PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__X402PaymentClient<$Result.GetResult<Prisma.$X402PaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first X402Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {X402PaymentFindFirstArgs} args - Arguments to find a X402Payment
     * @example
     * // Get one X402Payment
     * const x402Payment = await prisma.x402Payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends X402PaymentFindFirstArgs>(args?: SelectSubset<T, X402PaymentFindFirstArgs<ExtArgs>>): Prisma__X402PaymentClient<$Result.GetResult<Prisma.$X402PaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first X402Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {X402PaymentFindFirstOrThrowArgs} args - Arguments to find a X402Payment
     * @example
     * // Get one X402Payment
     * const x402Payment = await prisma.x402Payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends X402PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, X402PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__X402PaymentClient<$Result.GetResult<Prisma.$X402PaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more X402Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {X402PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all X402Payments
     * const x402Payments = await prisma.x402Payment.findMany()
     * 
     * // Get first 10 X402Payments
     * const x402Payments = await prisma.x402Payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const x402PaymentWithIdOnly = await prisma.x402Payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends X402PaymentFindManyArgs>(args?: SelectSubset<T, X402PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$X402PaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a X402Payment.
     * @param {X402PaymentCreateArgs} args - Arguments to create a X402Payment.
     * @example
     * // Create one X402Payment
     * const X402Payment = await prisma.x402Payment.create({
     *   data: {
     *     // ... data to create a X402Payment
     *   }
     * })
     * 
     */
    create<T extends X402PaymentCreateArgs>(args: SelectSubset<T, X402PaymentCreateArgs<ExtArgs>>): Prisma__X402PaymentClient<$Result.GetResult<Prisma.$X402PaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many X402Payments.
     * @param {X402PaymentCreateManyArgs} args - Arguments to create many X402Payments.
     * @example
     * // Create many X402Payments
     * const x402Payment = await prisma.x402Payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends X402PaymentCreateManyArgs>(args?: SelectSubset<T, X402PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many X402Payments and returns the data saved in the database.
     * @param {X402PaymentCreateManyAndReturnArgs} args - Arguments to create many X402Payments.
     * @example
     * // Create many X402Payments
     * const x402Payment = await prisma.x402Payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many X402Payments and only return the `id`
     * const x402PaymentWithIdOnly = await prisma.x402Payment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends X402PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, X402PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$X402PaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a X402Payment.
     * @param {X402PaymentDeleteArgs} args - Arguments to delete one X402Payment.
     * @example
     * // Delete one X402Payment
     * const X402Payment = await prisma.x402Payment.delete({
     *   where: {
     *     // ... filter to delete one X402Payment
     *   }
     * })
     * 
     */
    delete<T extends X402PaymentDeleteArgs>(args: SelectSubset<T, X402PaymentDeleteArgs<ExtArgs>>): Prisma__X402PaymentClient<$Result.GetResult<Prisma.$X402PaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one X402Payment.
     * @param {X402PaymentUpdateArgs} args - Arguments to update one X402Payment.
     * @example
     * // Update one X402Payment
     * const x402Payment = await prisma.x402Payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends X402PaymentUpdateArgs>(args: SelectSubset<T, X402PaymentUpdateArgs<ExtArgs>>): Prisma__X402PaymentClient<$Result.GetResult<Prisma.$X402PaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more X402Payments.
     * @param {X402PaymentDeleteManyArgs} args - Arguments to filter X402Payments to delete.
     * @example
     * // Delete a few X402Payments
     * const { count } = await prisma.x402Payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends X402PaymentDeleteManyArgs>(args?: SelectSubset<T, X402PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more X402Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {X402PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many X402Payments
     * const x402Payment = await prisma.x402Payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends X402PaymentUpdateManyArgs>(args: SelectSubset<T, X402PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one X402Payment.
     * @param {X402PaymentUpsertArgs} args - Arguments to update or create a X402Payment.
     * @example
     * // Update or create a X402Payment
     * const x402Payment = await prisma.x402Payment.upsert({
     *   create: {
     *     // ... data to create a X402Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the X402Payment we want to update
     *   }
     * })
     */
    upsert<T extends X402PaymentUpsertArgs>(args: SelectSubset<T, X402PaymentUpsertArgs<ExtArgs>>): Prisma__X402PaymentClient<$Result.GetResult<Prisma.$X402PaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of X402Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {X402PaymentCountArgs} args - Arguments to filter X402Payments to count.
     * @example
     * // Count the number of X402Payments
     * const count = await prisma.x402Payment.count({
     *   where: {
     *     // ... the filter for the X402Payments we want to count
     *   }
     * })
    **/
    count<T extends X402PaymentCountArgs>(
      args?: Subset<T, X402PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], X402PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a X402Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {X402PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends X402PaymentAggregateArgs>(args: Subset<T, X402PaymentAggregateArgs>): Prisma.PrismaPromise<GetX402PaymentAggregateType<T>>

    /**
     * Group by X402Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {X402PaymentGroupByArgs} args - Group by arguments.
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
      T extends X402PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: X402PaymentGroupByArgs['orderBy'] }
        : { orderBy?: X402PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, X402PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetX402PaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the X402Payment model
   */
  readonly fields: X402PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for X402Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__X402PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the X402Payment model
   */ 
  interface X402PaymentFieldRefs {
    readonly id: FieldRef<"X402Payment", 'String'>
    readonly userId: FieldRef<"X402Payment", 'String'>
    readonly endpoint: FieldRef<"X402Payment", 'String'>
    readonly amount: FieldRef<"X402Payment", 'Float'>
    readonly signature: FieldRef<"X402Payment", 'String'>
    readonly status: FieldRef<"X402Payment", 'String'>
    readonly metadata: FieldRef<"X402Payment", 'Json'>
    readonly chainlinkPrice: FieldRef<"X402Payment", 'Float'>
    readonly chainlinkConfidence: FieldRef<"X402Payment", 'Float'>
    readonly priceTimestamp: FieldRef<"X402Payment", 'DateTime'>
    readonly createdAt: FieldRef<"X402Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * X402Payment findUnique
   */
  export type X402PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the X402Payment
     */
    select?: X402PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: X402PaymentInclude<ExtArgs> | null
    /**
     * Filter, which X402Payment to fetch.
     */
    where: X402PaymentWhereUniqueInput
  }

  /**
   * X402Payment findUniqueOrThrow
   */
  export type X402PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the X402Payment
     */
    select?: X402PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: X402PaymentInclude<ExtArgs> | null
    /**
     * Filter, which X402Payment to fetch.
     */
    where: X402PaymentWhereUniqueInput
  }

  /**
   * X402Payment findFirst
   */
  export type X402PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the X402Payment
     */
    select?: X402PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: X402PaymentInclude<ExtArgs> | null
    /**
     * Filter, which X402Payment to fetch.
     */
    where?: X402PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of X402Payments to fetch.
     */
    orderBy?: X402PaymentOrderByWithRelationInput | X402PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for X402Payments.
     */
    cursor?: X402PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` X402Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` X402Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of X402Payments.
     */
    distinct?: X402PaymentScalarFieldEnum | X402PaymentScalarFieldEnum[]
  }

  /**
   * X402Payment findFirstOrThrow
   */
  export type X402PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the X402Payment
     */
    select?: X402PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: X402PaymentInclude<ExtArgs> | null
    /**
     * Filter, which X402Payment to fetch.
     */
    where?: X402PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of X402Payments to fetch.
     */
    orderBy?: X402PaymentOrderByWithRelationInput | X402PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for X402Payments.
     */
    cursor?: X402PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` X402Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` X402Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of X402Payments.
     */
    distinct?: X402PaymentScalarFieldEnum | X402PaymentScalarFieldEnum[]
  }

  /**
   * X402Payment findMany
   */
  export type X402PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the X402Payment
     */
    select?: X402PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: X402PaymentInclude<ExtArgs> | null
    /**
     * Filter, which X402Payments to fetch.
     */
    where?: X402PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of X402Payments to fetch.
     */
    orderBy?: X402PaymentOrderByWithRelationInput | X402PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing X402Payments.
     */
    cursor?: X402PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` X402Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` X402Payments.
     */
    skip?: number
    distinct?: X402PaymentScalarFieldEnum | X402PaymentScalarFieldEnum[]
  }

  /**
   * X402Payment create
   */
  export type X402PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the X402Payment
     */
    select?: X402PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: X402PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a X402Payment.
     */
    data: XOR<X402PaymentCreateInput, X402PaymentUncheckedCreateInput>
  }

  /**
   * X402Payment createMany
   */
  export type X402PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many X402Payments.
     */
    data: X402PaymentCreateManyInput | X402PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * X402Payment createManyAndReturn
   */
  export type X402PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the X402Payment
     */
    select?: X402PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many X402Payments.
     */
    data: X402PaymentCreateManyInput | X402PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: X402PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * X402Payment update
   */
  export type X402PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the X402Payment
     */
    select?: X402PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: X402PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a X402Payment.
     */
    data: XOR<X402PaymentUpdateInput, X402PaymentUncheckedUpdateInput>
    /**
     * Choose, which X402Payment to update.
     */
    where: X402PaymentWhereUniqueInput
  }

  /**
   * X402Payment updateMany
   */
  export type X402PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update X402Payments.
     */
    data: XOR<X402PaymentUpdateManyMutationInput, X402PaymentUncheckedUpdateManyInput>
    /**
     * Filter which X402Payments to update
     */
    where?: X402PaymentWhereInput
  }

  /**
   * X402Payment upsert
   */
  export type X402PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the X402Payment
     */
    select?: X402PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: X402PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the X402Payment to update in case it exists.
     */
    where: X402PaymentWhereUniqueInput
    /**
     * In case the X402Payment found by the `where` argument doesn't exist, create a new X402Payment with this data.
     */
    create: XOR<X402PaymentCreateInput, X402PaymentUncheckedCreateInput>
    /**
     * In case the X402Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<X402PaymentUpdateInput, X402PaymentUncheckedUpdateInput>
  }

  /**
   * X402Payment delete
   */
  export type X402PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the X402Payment
     */
    select?: X402PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: X402PaymentInclude<ExtArgs> | null
    /**
     * Filter which X402Payment to delete.
     */
    where: X402PaymentWhereUniqueInput
  }

  /**
   * X402Payment deleteMany
   */
  export type X402PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which X402Payments to delete
     */
    where?: X402PaymentWhereInput
  }

  /**
   * X402Payment without action
   */
  export type X402PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the X402Payment
     */
    select?: X402PaymentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: X402PaymentInclude<ExtArgs> | null
  }


  /**
   * Model PriceSnapshot
   */

  export type AggregatePriceSnapshot = {
    _count: PriceSnapshotCountAggregateOutputType | null
    _avg: PriceSnapshotAvgAggregateOutputType | null
    _sum: PriceSnapshotSumAggregateOutputType | null
    _min: PriceSnapshotMinAggregateOutputType | null
    _max: PriceSnapshotMaxAggregateOutputType | null
  }

  export type PriceSnapshotAvgAggregateOutputType = {
    price: number | null
    confidence: number | null
    oracleCount: number | null
    variance: number | null
  }

  export type PriceSnapshotSumAggregateOutputType = {
    price: number | null
    confidence: number | null
    oracleCount: number | null
    variance: number | null
  }

  export type PriceSnapshotMinAggregateOutputType = {
    id: string | null
    asset: string | null
    price: number | null
    confidence: number | null
    oracleCount: number | null
    variance: number | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type PriceSnapshotMaxAggregateOutputType = {
    id: string | null
    asset: string | null
    price: number | null
    confidence: number | null
    oracleCount: number | null
    variance: number | null
    timestamp: Date | null
    createdAt: Date | null
  }

  export type PriceSnapshotCountAggregateOutputType = {
    id: number
    asset: number
    price: number
    confidence: number
    oracleCount: number
    variance: number
    timestamp: number
    createdAt: number
    _all: number
  }


  export type PriceSnapshotAvgAggregateInputType = {
    price?: true
    confidence?: true
    oracleCount?: true
    variance?: true
  }

  export type PriceSnapshotSumAggregateInputType = {
    price?: true
    confidence?: true
    oracleCount?: true
    variance?: true
  }

  export type PriceSnapshotMinAggregateInputType = {
    id?: true
    asset?: true
    price?: true
    confidence?: true
    oracleCount?: true
    variance?: true
    timestamp?: true
    createdAt?: true
  }

  export type PriceSnapshotMaxAggregateInputType = {
    id?: true
    asset?: true
    price?: true
    confidence?: true
    oracleCount?: true
    variance?: true
    timestamp?: true
    createdAt?: true
  }

  export type PriceSnapshotCountAggregateInputType = {
    id?: true
    asset?: true
    price?: true
    confidence?: true
    oracleCount?: true
    variance?: true
    timestamp?: true
    createdAt?: true
    _all?: true
  }

  export type PriceSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceSnapshot to aggregate.
     */
    where?: PriceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceSnapshots to fetch.
     */
    orderBy?: PriceSnapshotOrderByWithRelationInput | PriceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PriceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PriceSnapshots
    **/
    _count?: true | PriceSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PriceSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PriceSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PriceSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PriceSnapshotMaxAggregateInputType
  }

  export type GetPriceSnapshotAggregateType<T extends PriceSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregatePriceSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePriceSnapshot[P]>
      : GetScalarType<T[P], AggregatePriceSnapshot[P]>
  }




  export type PriceSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PriceSnapshotWhereInput
    orderBy?: PriceSnapshotOrderByWithAggregationInput | PriceSnapshotOrderByWithAggregationInput[]
    by: PriceSnapshotScalarFieldEnum[] | PriceSnapshotScalarFieldEnum
    having?: PriceSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PriceSnapshotCountAggregateInputType | true
    _avg?: PriceSnapshotAvgAggregateInputType
    _sum?: PriceSnapshotSumAggregateInputType
    _min?: PriceSnapshotMinAggregateInputType
    _max?: PriceSnapshotMaxAggregateInputType
  }

  export type PriceSnapshotGroupByOutputType = {
    id: string
    asset: string
    price: number
    confidence: number
    oracleCount: number
    variance: number
    timestamp: Date
    createdAt: Date
    _count: PriceSnapshotCountAggregateOutputType | null
    _avg: PriceSnapshotAvgAggregateOutputType | null
    _sum: PriceSnapshotSumAggregateOutputType | null
    _min: PriceSnapshotMinAggregateOutputType | null
    _max: PriceSnapshotMaxAggregateOutputType | null
  }

  type GetPriceSnapshotGroupByPayload<T extends PriceSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PriceSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PriceSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PriceSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], PriceSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type PriceSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset?: boolean
    price?: boolean
    confidence?: boolean
    oracleCount?: boolean
    variance?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["priceSnapshot"]>

  export type PriceSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    asset?: boolean
    price?: boolean
    confidence?: boolean
    oracleCount?: boolean
    variance?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["priceSnapshot"]>

  export type PriceSnapshotSelectScalar = {
    id?: boolean
    asset?: boolean
    price?: boolean
    confidence?: boolean
    oracleCount?: boolean
    variance?: boolean
    timestamp?: boolean
    createdAt?: boolean
  }


  export type $PriceSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PriceSnapshot"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      asset: string
      price: number
      confidence: number
      oracleCount: number
      variance: number
      timestamp: Date
      createdAt: Date
    }, ExtArgs["result"]["priceSnapshot"]>
    composites: {}
  }

  type PriceSnapshotGetPayload<S extends boolean | null | undefined | PriceSnapshotDefaultArgs> = $Result.GetResult<Prisma.$PriceSnapshotPayload, S>

  type PriceSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PriceSnapshotFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PriceSnapshotCountAggregateInputType | true
    }

  export interface PriceSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PriceSnapshot'], meta: { name: 'PriceSnapshot' } }
    /**
     * Find zero or one PriceSnapshot that matches the filter.
     * @param {PriceSnapshotFindUniqueArgs} args - Arguments to find a PriceSnapshot
     * @example
     * // Get one PriceSnapshot
     * const priceSnapshot = await prisma.priceSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PriceSnapshotFindUniqueArgs>(args: SelectSubset<T, PriceSnapshotFindUniqueArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PriceSnapshot that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PriceSnapshotFindUniqueOrThrowArgs} args - Arguments to find a PriceSnapshot
     * @example
     * // Get one PriceSnapshot
     * const priceSnapshot = await prisma.priceSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PriceSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, PriceSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PriceSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotFindFirstArgs} args - Arguments to find a PriceSnapshot
     * @example
     * // Get one PriceSnapshot
     * const priceSnapshot = await prisma.priceSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PriceSnapshotFindFirstArgs>(args?: SelectSubset<T, PriceSnapshotFindFirstArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PriceSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotFindFirstOrThrowArgs} args - Arguments to find a PriceSnapshot
     * @example
     * // Get one PriceSnapshot
     * const priceSnapshot = await prisma.priceSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PriceSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, PriceSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PriceSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PriceSnapshots
     * const priceSnapshots = await prisma.priceSnapshot.findMany()
     * 
     * // Get first 10 PriceSnapshots
     * const priceSnapshots = await prisma.priceSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const priceSnapshotWithIdOnly = await prisma.priceSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PriceSnapshotFindManyArgs>(args?: SelectSubset<T, PriceSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PriceSnapshot.
     * @param {PriceSnapshotCreateArgs} args - Arguments to create a PriceSnapshot.
     * @example
     * // Create one PriceSnapshot
     * const PriceSnapshot = await prisma.priceSnapshot.create({
     *   data: {
     *     // ... data to create a PriceSnapshot
     *   }
     * })
     * 
     */
    create<T extends PriceSnapshotCreateArgs>(args: SelectSubset<T, PriceSnapshotCreateArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PriceSnapshots.
     * @param {PriceSnapshotCreateManyArgs} args - Arguments to create many PriceSnapshots.
     * @example
     * // Create many PriceSnapshots
     * const priceSnapshot = await prisma.priceSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PriceSnapshotCreateManyArgs>(args?: SelectSubset<T, PriceSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PriceSnapshots and returns the data saved in the database.
     * @param {PriceSnapshotCreateManyAndReturnArgs} args - Arguments to create many PriceSnapshots.
     * @example
     * // Create many PriceSnapshots
     * const priceSnapshot = await prisma.priceSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PriceSnapshots and only return the `id`
     * const priceSnapshotWithIdOnly = await prisma.priceSnapshot.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PriceSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, PriceSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PriceSnapshot.
     * @param {PriceSnapshotDeleteArgs} args - Arguments to delete one PriceSnapshot.
     * @example
     * // Delete one PriceSnapshot
     * const PriceSnapshot = await prisma.priceSnapshot.delete({
     *   where: {
     *     // ... filter to delete one PriceSnapshot
     *   }
     * })
     * 
     */
    delete<T extends PriceSnapshotDeleteArgs>(args: SelectSubset<T, PriceSnapshotDeleteArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PriceSnapshot.
     * @param {PriceSnapshotUpdateArgs} args - Arguments to update one PriceSnapshot.
     * @example
     * // Update one PriceSnapshot
     * const priceSnapshot = await prisma.priceSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PriceSnapshotUpdateArgs>(args: SelectSubset<T, PriceSnapshotUpdateArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PriceSnapshots.
     * @param {PriceSnapshotDeleteManyArgs} args - Arguments to filter PriceSnapshots to delete.
     * @example
     * // Delete a few PriceSnapshots
     * const { count } = await prisma.priceSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PriceSnapshotDeleteManyArgs>(args?: SelectSubset<T, PriceSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PriceSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PriceSnapshots
     * const priceSnapshot = await prisma.priceSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PriceSnapshotUpdateManyArgs>(args: SelectSubset<T, PriceSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PriceSnapshot.
     * @param {PriceSnapshotUpsertArgs} args - Arguments to update or create a PriceSnapshot.
     * @example
     * // Update or create a PriceSnapshot
     * const priceSnapshot = await prisma.priceSnapshot.upsert({
     *   create: {
     *     // ... data to create a PriceSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PriceSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends PriceSnapshotUpsertArgs>(args: SelectSubset<T, PriceSnapshotUpsertArgs<ExtArgs>>): Prisma__PriceSnapshotClient<$Result.GetResult<Prisma.$PriceSnapshotPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PriceSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotCountArgs} args - Arguments to filter PriceSnapshots to count.
     * @example
     * // Count the number of PriceSnapshots
     * const count = await prisma.priceSnapshot.count({
     *   where: {
     *     // ... the filter for the PriceSnapshots we want to count
     *   }
     * })
    **/
    count<T extends PriceSnapshotCountArgs>(
      args?: Subset<T, PriceSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PriceSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PriceSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PriceSnapshotAggregateArgs>(args: Subset<T, PriceSnapshotAggregateArgs>): Prisma.PrismaPromise<GetPriceSnapshotAggregateType<T>>

    /**
     * Group by PriceSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PriceSnapshotGroupByArgs} args - Group by arguments.
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
      T extends PriceSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PriceSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: PriceSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PriceSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPriceSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PriceSnapshot model
   */
  readonly fields: PriceSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PriceSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PriceSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PriceSnapshot model
   */ 
  interface PriceSnapshotFieldRefs {
    readonly id: FieldRef<"PriceSnapshot", 'String'>
    readonly asset: FieldRef<"PriceSnapshot", 'String'>
    readonly price: FieldRef<"PriceSnapshot", 'Float'>
    readonly confidence: FieldRef<"PriceSnapshot", 'Float'>
    readonly oracleCount: FieldRef<"PriceSnapshot", 'Int'>
    readonly variance: FieldRef<"PriceSnapshot", 'Float'>
    readonly timestamp: FieldRef<"PriceSnapshot", 'DateTime'>
    readonly createdAt: FieldRef<"PriceSnapshot", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PriceSnapshot findUnique
   */
  export type PriceSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which PriceSnapshot to fetch.
     */
    where: PriceSnapshotWhereUniqueInput
  }

  /**
   * PriceSnapshot findUniqueOrThrow
   */
  export type PriceSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which PriceSnapshot to fetch.
     */
    where: PriceSnapshotWhereUniqueInput
  }

  /**
   * PriceSnapshot findFirst
   */
  export type PriceSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which PriceSnapshot to fetch.
     */
    where?: PriceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceSnapshots to fetch.
     */
    orderBy?: PriceSnapshotOrderByWithRelationInput | PriceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceSnapshots.
     */
    cursor?: PriceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceSnapshots.
     */
    distinct?: PriceSnapshotScalarFieldEnum | PriceSnapshotScalarFieldEnum[]
  }

  /**
   * PriceSnapshot findFirstOrThrow
   */
  export type PriceSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which PriceSnapshot to fetch.
     */
    where?: PriceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceSnapshots to fetch.
     */
    orderBy?: PriceSnapshotOrderByWithRelationInput | PriceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PriceSnapshots.
     */
    cursor?: PriceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PriceSnapshots.
     */
    distinct?: PriceSnapshotScalarFieldEnum | PriceSnapshotScalarFieldEnum[]
  }

  /**
   * PriceSnapshot findMany
   */
  export type PriceSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * Filter, which PriceSnapshots to fetch.
     */
    where?: PriceSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PriceSnapshots to fetch.
     */
    orderBy?: PriceSnapshotOrderByWithRelationInput | PriceSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PriceSnapshots.
     */
    cursor?: PriceSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PriceSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PriceSnapshots.
     */
    skip?: number
    distinct?: PriceSnapshotScalarFieldEnum | PriceSnapshotScalarFieldEnum[]
  }

  /**
   * PriceSnapshot create
   */
  export type PriceSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * The data needed to create a PriceSnapshot.
     */
    data: XOR<PriceSnapshotCreateInput, PriceSnapshotUncheckedCreateInput>
  }

  /**
   * PriceSnapshot createMany
   */
  export type PriceSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PriceSnapshots.
     */
    data: PriceSnapshotCreateManyInput | PriceSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceSnapshot createManyAndReturn
   */
  export type PriceSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PriceSnapshots.
     */
    data: PriceSnapshotCreateManyInput | PriceSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PriceSnapshot update
   */
  export type PriceSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * The data needed to update a PriceSnapshot.
     */
    data: XOR<PriceSnapshotUpdateInput, PriceSnapshotUncheckedUpdateInput>
    /**
     * Choose, which PriceSnapshot to update.
     */
    where: PriceSnapshotWhereUniqueInput
  }

  /**
   * PriceSnapshot updateMany
   */
  export type PriceSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PriceSnapshots.
     */
    data: XOR<PriceSnapshotUpdateManyMutationInput, PriceSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which PriceSnapshots to update
     */
    where?: PriceSnapshotWhereInput
  }

  /**
   * PriceSnapshot upsert
   */
  export type PriceSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * The filter to search for the PriceSnapshot to update in case it exists.
     */
    where: PriceSnapshotWhereUniqueInput
    /**
     * In case the PriceSnapshot found by the `where` argument doesn't exist, create a new PriceSnapshot with this data.
     */
    create: XOR<PriceSnapshotCreateInput, PriceSnapshotUncheckedCreateInput>
    /**
     * In case the PriceSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PriceSnapshotUpdateInput, PriceSnapshotUncheckedUpdateInput>
  }

  /**
   * PriceSnapshot delete
   */
  export type PriceSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
    /**
     * Filter which PriceSnapshot to delete.
     */
    where: PriceSnapshotWhereUniqueInput
  }

  /**
   * PriceSnapshot deleteMany
   */
  export type PriceSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PriceSnapshots to delete
     */
    where?: PriceSnapshotWhereInput
  }

  /**
   * PriceSnapshot without action
   */
  export type PriceSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PriceSnapshot
     */
    select?: PriceSnapshotSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    telegramId: 'telegramId',
    username: 'username',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    publicKey: 'publicKey',
    encryptedPrivateKey: 'encryptedPrivateKey',
    balance: 'balance',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const WhaleAlertScalarFieldEnum: {
    id: 'id',
    walletAddress: 'walletAddress',
    amount: 'amount',
    token: 'token',
    actionType: 'actionType',
    exchange: 'exchange',
    timestamp: 'timestamp',
    analyzed: 'analyzed',
    createdAt: 'createdAt'
  };

  export type WhaleAlertScalarFieldEnum = (typeof WhaleAlertScalarFieldEnum)[keyof typeof WhaleAlertScalarFieldEnum]


  export const AnalysisScalarFieldEnum: {
    id: 'id',
    whaleAlertId: 'whaleAlertId',
    userId: 'userId',
    cost: 'cost',
    report: 'report',
    createdAt: 'createdAt'
  };

  export type AnalysisScalarFieldEnum = (typeof AnalysisScalarFieldEnum)[keyof typeof AnalysisScalarFieldEnum]


  export const X402PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    endpoint: 'endpoint',
    amount: 'amount',
    signature: 'signature',
    status: 'status',
    metadata: 'metadata',
    chainlinkPrice: 'chainlinkPrice',
    chainlinkConfidence: 'chainlinkConfidence',
    priceTimestamp: 'priceTimestamp',
    createdAt: 'createdAt'
  };

  export type X402PaymentScalarFieldEnum = (typeof X402PaymentScalarFieldEnum)[keyof typeof X402PaymentScalarFieldEnum]


  export const PriceSnapshotScalarFieldEnum: {
    id: 'id',
    asset: 'asset',
    price: 'price',
    confidence: 'confidence',
    oracleCount: 'oracleCount',
    variance: 'variance',
    timestamp: 'timestamp',
    createdAt: 'createdAt'
  };

  export type PriceSnapshotScalarFieldEnum = (typeof PriceSnapshotScalarFieldEnum)[keyof typeof PriceSnapshotScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    telegramId?: StringFilter<"User"> | string
    username?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    wallet?: XOR<WalletNullableRelationFilter, WalletWhereInput> | null
    analyses?: AnalysisListRelationFilter
    x402Payments?: X402PaymentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    wallet?: WalletOrderByWithRelationInput
    analyses?: AnalysisOrderByRelationAggregateInput
    x402Payments?: X402PaymentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telegramId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    wallet?: XOR<WalletNullableRelationFilter, WalletWhereInput> | null
    analyses?: AnalysisListRelationFilter
    x402Payments?: X402PaymentListRelationFilter
  }, "id" | "telegramId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    telegramId?: StringWithAggregatesFilter<"User"> | string
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: StringFilter<"Wallet"> | string
    userId?: StringFilter<"Wallet"> | string
    publicKey?: StringFilter<"Wallet"> | string
    encryptedPrivateKey?: StringFilter<"Wallet"> | string
    balance?: FloatFilter<"Wallet"> | number
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    publicKey?: SortOrder
    encryptedPrivateKey?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    publicKey?: string
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    encryptedPrivateKey?: StringFilter<"Wallet"> | string
    balance?: FloatFilter<"Wallet"> | number
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeFilter<"Wallet"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId" | "publicKey">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    publicKey?: SortOrder
    encryptedPrivateKey?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wallet"> | string
    userId?: StringWithAggregatesFilter<"Wallet"> | string
    publicKey?: StringWithAggregatesFilter<"Wallet"> | string
    encryptedPrivateKey?: StringWithAggregatesFilter<"Wallet"> | string
    balance?: FloatWithAggregatesFilter<"Wallet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
  }

  export type WhaleAlertWhereInput = {
    AND?: WhaleAlertWhereInput | WhaleAlertWhereInput[]
    OR?: WhaleAlertWhereInput[]
    NOT?: WhaleAlertWhereInput | WhaleAlertWhereInput[]
    id?: StringFilter<"WhaleAlert"> | string
    walletAddress?: StringFilter<"WhaleAlert"> | string
    amount?: FloatFilter<"WhaleAlert"> | number
    token?: StringFilter<"WhaleAlert"> | string
    actionType?: StringFilter<"WhaleAlert"> | string
    exchange?: StringFilter<"WhaleAlert"> | string
    timestamp?: DateTimeFilter<"WhaleAlert"> | Date | string
    analyzed?: BoolFilter<"WhaleAlert"> | boolean
    createdAt?: DateTimeFilter<"WhaleAlert"> | Date | string
    analyses?: AnalysisListRelationFilter
  }

  export type WhaleAlertOrderByWithRelationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    token?: SortOrder
    actionType?: SortOrder
    exchange?: SortOrder
    timestamp?: SortOrder
    analyzed?: SortOrder
    createdAt?: SortOrder
    analyses?: AnalysisOrderByRelationAggregateInput
  }

  export type WhaleAlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhaleAlertWhereInput | WhaleAlertWhereInput[]
    OR?: WhaleAlertWhereInput[]
    NOT?: WhaleAlertWhereInput | WhaleAlertWhereInput[]
    walletAddress?: StringFilter<"WhaleAlert"> | string
    amount?: FloatFilter<"WhaleAlert"> | number
    token?: StringFilter<"WhaleAlert"> | string
    actionType?: StringFilter<"WhaleAlert"> | string
    exchange?: StringFilter<"WhaleAlert"> | string
    timestamp?: DateTimeFilter<"WhaleAlert"> | Date | string
    analyzed?: BoolFilter<"WhaleAlert"> | boolean
    createdAt?: DateTimeFilter<"WhaleAlert"> | Date | string
    analyses?: AnalysisListRelationFilter
  }, "id">

  export type WhaleAlertOrderByWithAggregationInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    token?: SortOrder
    actionType?: SortOrder
    exchange?: SortOrder
    timestamp?: SortOrder
    analyzed?: SortOrder
    createdAt?: SortOrder
    _count?: WhaleAlertCountOrderByAggregateInput
    _avg?: WhaleAlertAvgOrderByAggregateInput
    _max?: WhaleAlertMaxOrderByAggregateInput
    _min?: WhaleAlertMinOrderByAggregateInput
    _sum?: WhaleAlertSumOrderByAggregateInput
  }

  export type WhaleAlertScalarWhereWithAggregatesInput = {
    AND?: WhaleAlertScalarWhereWithAggregatesInput | WhaleAlertScalarWhereWithAggregatesInput[]
    OR?: WhaleAlertScalarWhereWithAggregatesInput[]
    NOT?: WhaleAlertScalarWhereWithAggregatesInput | WhaleAlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WhaleAlert"> | string
    walletAddress?: StringWithAggregatesFilter<"WhaleAlert"> | string
    amount?: FloatWithAggregatesFilter<"WhaleAlert"> | number
    token?: StringWithAggregatesFilter<"WhaleAlert"> | string
    actionType?: StringWithAggregatesFilter<"WhaleAlert"> | string
    exchange?: StringWithAggregatesFilter<"WhaleAlert"> | string
    timestamp?: DateTimeWithAggregatesFilter<"WhaleAlert"> | Date | string
    analyzed?: BoolWithAggregatesFilter<"WhaleAlert"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"WhaleAlert"> | Date | string
  }

  export type AnalysisWhereInput = {
    AND?: AnalysisWhereInput | AnalysisWhereInput[]
    OR?: AnalysisWhereInput[]
    NOT?: AnalysisWhereInput | AnalysisWhereInput[]
    id?: StringFilter<"Analysis"> | string
    whaleAlertId?: StringFilter<"Analysis"> | string
    userId?: StringFilter<"Analysis"> | string
    cost?: FloatFilter<"Analysis"> | number
    report?: JsonNullableFilter<"Analysis">
    createdAt?: DateTimeFilter<"Analysis"> | Date | string
    whaleAlert?: XOR<WhaleAlertRelationFilter, WhaleAlertWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AnalysisOrderByWithRelationInput = {
    id?: SortOrder
    whaleAlertId?: SortOrder
    userId?: SortOrder
    cost?: SortOrder
    report?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    whaleAlert?: WhaleAlertOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnalysisWhereInput | AnalysisWhereInput[]
    OR?: AnalysisWhereInput[]
    NOT?: AnalysisWhereInput | AnalysisWhereInput[]
    whaleAlertId?: StringFilter<"Analysis"> | string
    userId?: StringFilter<"Analysis"> | string
    cost?: FloatFilter<"Analysis"> | number
    report?: JsonNullableFilter<"Analysis">
    createdAt?: DateTimeFilter<"Analysis"> | Date | string
    whaleAlert?: XOR<WhaleAlertRelationFilter, WhaleAlertWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    whaleAlertId?: SortOrder
    userId?: SortOrder
    cost?: SortOrder
    report?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnalysisCountOrderByAggregateInput
    _avg?: AnalysisAvgOrderByAggregateInput
    _max?: AnalysisMaxOrderByAggregateInput
    _min?: AnalysisMinOrderByAggregateInput
    _sum?: AnalysisSumOrderByAggregateInput
  }

  export type AnalysisScalarWhereWithAggregatesInput = {
    AND?: AnalysisScalarWhereWithAggregatesInput | AnalysisScalarWhereWithAggregatesInput[]
    OR?: AnalysisScalarWhereWithAggregatesInput[]
    NOT?: AnalysisScalarWhereWithAggregatesInput | AnalysisScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Analysis"> | string
    whaleAlertId?: StringWithAggregatesFilter<"Analysis"> | string
    userId?: StringWithAggregatesFilter<"Analysis"> | string
    cost?: FloatWithAggregatesFilter<"Analysis"> | number
    report?: JsonNullableWithAggregatesFilter<"Analysis">
    createdAt?: DateTimeWithAggregatesFilter<"Analysis"> | Date | string
  }

  export type X402PaymentWhereInput = {
    AND?: X402PaymentWhereInput | X402PaymentWhereInput[]
    OR?: X402PaymentWhereInput[]
    NOT?: X402PaymentWhereInput | X402PaymentWhereInput[]
    id?: StringFilter<"X402Payment"> | string
    userId?: StringFilter<"X402Payment"> | string
    endpoint?: StringFilter<"X402Payment"> | string
    amount?: FloatFilter<"X402Payment"> | number
    signature?: StringFilter<"X402Payment"> | string
    status?: StringFilter<"X402Payment"> | string
    metadata?: JsonNullableFilter<"X402Payment">
    chainlinkPrice?: FloatNullableFilter<"X402Payment"> | number | null
    chainlinkConfidence?: FloatNullableFilter<"X402Payment"> | number | null
    priceTimestamp?: DateTimeNullableFilter<"X402Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"X402Payment"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type X402PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    amount?: SortOrder
    signature?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    chainlinkPrice?: SortOrderInput | SortOrder
    chainlinkConfidence?: SortOrderInput | SortOrder
    priceTimestamp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type X402PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    signature?: string
    AND?: X402PaymentWhereInput | X402PaymentWhereInput[]
    OR?: X402PaymentWhereInput[]
    NOT?: X402PaymentWhereInput | X402PaymentWhereInput[]
    userId?: StringFilter<"X402Payment"> | string
    endpoint?: StringFilter<"X402Payment"> | string
    amount?: FloatFilter<"X402Payment"> | number
    status?: StringFilter<"X402Payment"> | string
    metadata?: JsonNullableFilter<"X402Payment">
    chainlinkPrice?: FloatNullableFilter<"X402Payment"> | number | null
    chainlinkConfidence?: FloatNullableFilter<"X402Payment"> | number | null
    priceTimestamp?: DateTimeNullableFilter<"X402Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"X402Payment"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "signature">

  export type X402PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    amount?: SortOrder
    signature?: SortOrder
    status?: SortOrder
    metadata?: SortOrderInput | SortOrder
    chainlinkPrice?: SortOrderInput | SortOrder
    chainlinkConfidence?: SortOrderInput | SortOrder
    priceTimestamp?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: X402PaymentCountOrderByAggregateInput
    _avg?: X402PaymentAvgOrderByAggregateInput
    _max?: X402PaymentMaxOrderByAggregateInput
    _min?: X402PaymentMinOrderByAggregateInput
    _sum?: X402PaymentSumOrderByAggregateInput
  }

  export type X402PaymentScalarWhereWithAggregatesInput = {
    AND?: X402PaymentScalarWhereWithAggregatesInput | X402PaymentScalarWhereWithAggregatesInput[]
    OR?: X402PaymentScalarWhereWithAggregatesInput[]
    NOT?: X402PaymentScalarWhereWithAggregatesInput | X402PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"X402Payment"> | string
    userId?: StringWithAggregatesFilter<"X402Payment"> | string
    endpoint?: StringWithAggregatesFilter<"X402Payment"> | string
    amount?: FloatWithAggregatesFilter<"X402Payment"> | number
    signature?: StringWithAggregatesFilter<"X402Payment"> | string
    status?: StringWithAggregatesFilter<"X402Payment"> | string
    metadata?: JsonNullableWithAggregatesFilter<"X402Payment">
    chainlinkPrice?: FloatNullableWithAggregatesFilter<"X402Payment"> | number | null
    chainlinkConfidence?: FloatNullableWithAggregatesFilter<"X402Payment"> | number | null
    priceTimestamp?: DateTimeNullableWithAggregatesFilter<"X402Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"X402Payment"> | Date | string
  }

  export type PriceSnapshotWhereInput = {
    AND?: PriceSnapshotWhereInput | PriceSnapshotWhereInput[]
    OR?: PriceSnapshotWhereInput[]
    NOT?: PriceSnapshotWhereInput | PriceSnapshotWhereInput[]
    id?: StringFilter<"PriceSnapshot"> | string
    asset?: StringFilter<"PriceSnapshot"> | string
    price?: FloatFilter<"PriceSnapshot"> | number
    confidence?: FloatFilter<"PriceSnapshot"> | number
    oracleCount?: IntFilter<"PriceSnapshot"> | number
    variance?: FloatFilter<"PriceSnapshot"> | number
    timestamp?: DateTimeFilter<"PriceSnapshot"> | Date | string
    createdAt?: DateTimeFilter<"PriceSnapshot"> | Date | string
  }

  export type PriceSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    asset?: SortOrder
    price?: SortOrder
    confidence?: SortOrder
    oracleCount?: SortOrder
    variance?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PriceSnapshotWhereInput | PriceSnapshotWhereInput[]
    OR?: PriceSnapshotWhereInput[]
    NOT?: PriceSnapshotWhereInput | PriceSnapshotWhereInput[]
    asset?: StringFilter<"PriceSnapshot"> | string
    price?: FloatFilter<"PriceSnapshot"> | number
    confidence?: FloatFilter<"PriceSnapshot"> | number
    oracleCount?: IntFilter<"PriceSnapshot"> | number
    variance?: FloatFilter<"PriceSnapshot"> | number
    timestamp?: DateTimeFilter<"PriceSnapshot"> | Date | string
    createdAt?: DateTimeFilter<"PriceSnapshot"> | Date | string
  }, "id">

  export type PriceSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    asset?: SortOrder
    price?: SortOrder
    confidence?: SortOrder
    oracleCount?: SortOrder
    variance?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
    _count?: PriceSnapshotCountOrderByAggregateInput
    _avg?: PriceSnapshotAvgOrderByAggregateInput
    _max?: PriceSnapshotMaxOrderByAggregateInput
    _min?: PriceSnapshotMinOrderByAggregateInput
    _sum?: PriceSnapshotSumOrderByAggregateInput
  }

  export type PriceSnapshotScalarWhereWithAggregatesInput = {
    AND?: PriceSnapshotScalarWhereWithAggregatesInput | PriceSnapshotScalarWhereWithAggregatesInput[]
    OR?: PriceSnapshotScalarWhereWithAggregatesInput[]
    NOT?: PriceSnapshotScalarWhereWithAggregatesInput | PriceSnapshotScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PriceSnapshot"> | string
    asset?: StringWithAggregatesFilter<"PriceSnapshot"> | string
    price?: FloatWithAggregatesFilter<"PriceSnapshot"> | number
    confidence?: FloatWithAggregatesFilter<"PriceSnapshot"> | number
    oracleCount?: IntWithAggregatesFilter<"PriceSnapshot"> | number
    variance?: FloatWithAggregatesFilter<"PriceSnapshot"> | number
    timestamp?: DateTimeWithAggregatesFilter<"PriceSnapshot"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"PriceSnapshot"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    telegramId: string
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    analyses?: AnalysisCreateNestedManyWithoutUserInput
    x402Payments?: X402PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    telegramId: string
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    x402Payments?: X402PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
    x402Payments?: X402PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    x402Payments?: X402PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    telegramId: string
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateInput = {
    id?: string
    publicKey: string
    encryptedPrivateKey: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: string
    userId: string
    publicKey: string
    encryptedPrivateKey: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    encryptedPrivateKey?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    encryptedPrivateKey?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletCreateManyInput = {
    id?: string
    userId: string
    publicKey: string
    encryptedPrivateKey: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    encryptedPrivateKey?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    encryptedPrivateKey?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhaleAlertCreateInput = {
    id?: string
    walletAddress: string
    amount: number
    token: string
    actionType: string
    exchange?: string
    timestamp: Date | string
    analyzed?: boolean
    createdAt?: Date | string
    analyses?: AnalysisCreateNestedManyWithoutWhaleAlertInput
  }

  export type WhaleAlertUncheckedCreateInput = {
    id?: string
    walletAddress: string
    amount: number
    token: string
    actionType: string
    exchange?: string
    timestamp: Date | string
    analyzed?: boolean
    createdAt?: Date | string
    analyses?: AnalysisUncheckedCreateNestedManyWithoutWhaleAlertInput
  }

  export type WhaleAlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    analyzed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUpdateManyWithoutWhaleAlertNestedInput
  }

  export type WhaleAlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    analyzed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUncheckedUpdateManyWithoutWhaleAlertNestedInput
  }

  export type WhaleAlertCreateManyInput = {
    id?: string
    walletAddress: string
    amount: number
    token: string
    actionType: string
    exchange?: string
    timestamp: Date | string
    analyzed?: boolean
    createdAt?: Date | string
  }

  export type WhaleAlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    analyzed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhaleAlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    analyzed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCreateInput = {
    id?: string
    cost?: number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    whaleAlert: WhaleAlertCreateNestedOneWithoutAnalysesInput
    user: UserCreateNestedOneWithoutAnalysesInput
  }

  export type AnalysisUncheckedCreateInput = {
    id?: string
    whaleAlertId: string
    userId: string
    cost?: number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whaleAlert?: WhaleAlertUpdateOneRequiredWithoutAnalysesNestedInput
    user?: UserUpdateOneRequiredWithoutAnalysesNestedInput
  }

  export type AnalysisUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    whaleAlertId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCreateManyInput = {
    id?: string
    whaleAlertId: string
    userId: string
    cost?: number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    whaleAlertId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type X402PaymentCreateInput = {
    id?: string
    endpoint: string
    amount: number
    signature: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: number | null
    chainlinkConfidence?: number | null
    priceTimestamp?: Date | string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutX402PaymentsInput
  }

  export type X402PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    endpoint: string
    amount: number
    signature: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: number | null
    chainlinkConfidence?: number | null
    priceTimestamp?: Date | string | null
    createdAt?: Date | string
  }

  export type X402PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    chainlinkConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutX402PaymentsNestedInput
  }

  export type X402PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    chainlinkConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type X402PaymentCreateManyInput = {
    id?: string
    userId: string
    endpoint: string
    amount: number
    signature: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: number | null
    chainlinkConfidence?: number | null
    priceTimestamp?: Date | string | null
    createdAt?: Date | string
  }

  export type X402PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    chainlinkConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type X402PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    chainlinkConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceSnapshotCreateInput = {
    id?: string
    asset: string
    price: number
    confidence: number
    oracleCount: number
    variance: number
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type PriceSnapshotUncheckedCreateInput = {
    id?: string
    asset: string
    price: number
    confidence: number
    oracleCount: number
    variance: number
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type PriceSnapshotUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    oracleCount?: IntFieldUpdateOperationsInput | number
    variance?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceSnapshotUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    oracleCount?: IntFieldUpdateOperationsInput | number
    variance?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceSnapshotCreateManyInput = {
    id?: string
    asset: string
    price: number
    confidence: number
    oracleCount: number
    variance: number
    timestamp: Date | string
    createdAt?: Date | string
  }

  export type PriceSnapshotUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    oracleCount?: IntFieldUpdateOperationsInput | number
    variance?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PriceSnapshotUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    asset?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    confidence?: FloatFieldUpdateOperationsInput | number
    oracleCount?: IntFieldUpdateOperationsInput | number
    variance?: FloatFieldUpdateOperationsInput | number
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type WalletNullableRelationFilter = {
    is?: WalletWhereInput | null
    isNot?: WalletWhereInput | null
  }

  export type AnalysisListRelationFilter = {
    every?: AnalysisWhereInput
    some?: AnalysisWhereInput
    none?: AnalysisWhereInput
  }

  export type X402PaymentListRelationFilter = {
    every?: X402PaymentWhereInput
    some?: X402PaymentWhereInput
    none?: X402PaymentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type X402PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    telegramId?: SortOrder
    username?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicKey?: SortOrder
    encryptedPrivateKey?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicKey?: SortOrder
    encryptedPrivateKey?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    publicKey?: SortOrder
    encryptedPrivateKey?: SortOrder
    balance?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    balance?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type WhaleAlertCountOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    token?: SortOrder
    actionType?: SortOrder
    exchange?: SortOrder
    timestamp?: SortOrder
    analyzed?: SortOrder
    createdAt?: SortOrder
  }

  export type WhaleAlertAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WhaleAlertMaxOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    token?: SortOrder
    actionType?: SortOrder
    exchange?: SortOrder
    timestamp?: SortOrder
    analyzed?: SortOrder
    createdAt?: SortOrder
  }

  export type WhaleAlertMinOrderByAggregateInput = {
    id?: SortOrder
    walletAddress?: SortOrder
    amount?: SortOrder
    token?: SortOrder
    actionType?: SortOrder
    exchange?: SortOrder
    timestamp?: SortOrder
    analyzed?: SortOrder
    createdAt?: SortOrder
  }

  export type WhaleAlertSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WhaleAlertRelationFilter = {
    is?: WhaleAlertWhereInput
    isNot?: WhaleAlertWhereInput
  }

  export type AnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    whaleAlertId?: SortOrder
    userId?: SortOrder
    cost?: SortOrder
    report?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type AnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    whaleAlertId?: SortOrder
    userId?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    whaleAlertId?: SortOrder
    userId?: SortOrder
    cost?: SortOrder
    createdAt?: SortOrder
  }

  export type AnalysisSumOrderByAggregateInput = {
    cost?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type X402PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    amount?: SortOrder
    signature?: SortOrder
    status?: SortOrder
    metadata?: SortOrder
    chainlinkPrice?: SortOrder
    chainlinkConfidence?: SortOrder
    priceTimestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type X402PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    chainlinkPrice?: SortOrder
    chainlinkConfidence?: SortOrder
  }

  export type X402PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    amount?: SortOrder
    signature?: SortOrder
    status?: SortOrder
    chainlinkPrice?: SortOrder
    chainlinkConfidence?: SortOrder
    priceTimestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type X402PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    endpoint?: SortOrder
    amount?: SortOrder
    signature?: SortOrder
    status?: SortOrder
    chainlinkPrice?: SortOrder
    chainlinkConfidence?: SortOrder
    priceTimestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type X402PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    chainlinkPrice?: SortOrder
    chainlinkConfidence?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type PriceSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    asset?: SortOrder
    price?: SortOrder
    confidence?: SortOrder
    oracleCount?: SortOrder
    variance?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceSnapshotAvgOrderByAggregateInput = {
    price?: SortOrder
    confidence?: SortOrder
    oracleCount?: SortOrder
    variance?: SortOrder
  }

  export type PriceSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    asset?: SortOrder
    price?: SortOrder
    confidence?: SortOrder
    oracleCount?: SortOrder
    variance?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    asset?: SortOrder
    price?: SortOrder
    confidence?: SortOrder
    oracleCount?: SortOrder
    variance?: SortOrder
    timestamp?: SortOrder
    createdAt?: SortOrder
  }

  export type PriceSnapshotSumOrderByAggregateInput = {
    price?: SortOrder
    confidence?: SortOrder
    oracleCount?: SortOrder
    variance?: SortOrder
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

  export type WalletCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type AnalysisCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
  }

  export type X402PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<X402PaymentCreateWithoutUserInput, X402PaymentUncheckedCreateWithoutUserInput> | X402PaymentCreateWithoutUserInput[] | X402PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: X402PaymentCreateOrConnectWithoutUserInput | X402PaymentCreateOrConnectWithoutUserInput[]
    createMany?: X402PaymentCreateManyUserInputEnvelope
    connect?: X402PaymentWhereUniqueInput | X402PaymentWhereUniqueInput[]
  }

  export type WalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type AnalysisUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
  }

  export type X402PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<X402PaymentCreateWithoutUserInput, X402PaymentUncheckedCreateWithoutUserInput> | X402PaymentCreateWithoutUserInput[] | X402PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: X402PaymentCreateOrConnectWithoutUserInput | X402PaymentCreateOrConnectWithoutUserInput[]
    createMany?: X402PaymentCreateManyUserInputEnvelope
    connect?: X402PaymentWhereUniqueInput | X402PaymentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WalletUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type AnalysisUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisUpsertWithWhereUniqueWithoutUserInput | AnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    update?: AnalysisUpdateWithWhereUniqueWithoutUserInput | AnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisUpdateManyWithWhereWithoutUserInput | AnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
  }

  export type X402PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<X402PaymentCreateWithoutUserInput, X402PaymentUncheckedCreateWithoutUserInput> | X402PaymentCreateWithoutUserInput[] | X402PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: X402PaymentCreateOrConnectWithoutUserInput | X402PaymentCreateOrConnectWithoutUserInput[]
    upsert?: X402PaymentUpsertWithWhereUniqueWithoutUserInput | X402PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: X402PaymentCreateManyUserInputEnvelope
    set?: X402PaymentWhereUniqueInput | X402PaymentWhereUniqueInput[]
    disconnect?: X402PaymentWhereUniqueInput | X402PaymentWhereUniqueInput[]
    delete?: X402PaymentWhereUniqueInput | X402PaymentWhereUniqueInput[]
    connect?: X402PaymentWhereUniqueInput | X402PaymentWhereUniqueInput[]
    update?: X402PaymentUpdateWithWhereUniqueWithoutUserInput | X402PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: X402PaymentUpdateManyWithWhereWithoutUserInput | X402PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: X402PaymentScalarWhereInput | X402PaymentScalarWhereInput[]
  }

  export type WalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type AnalysisUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput> | AnalysisCreateWithoutUserInput[] | AnalysisUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutUserInput | AnalysisCreateOrConnectWithoutUserInput[]
    upsert?: AnalysisUpsertWithWhereUniqueWithoutUserInput | AnalysisUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnalysisCreateManyUserInputEnvelope
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    update?: AnalysisUpdateWithWhereUniqueWithoutUserInput | AnalysisUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnalysisUpdateManyWithWhereWithoutUserInput | AnalysisUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
  }

  export type X402PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<X402PaymentCreateWithoutUserInput, X402PaymentUncheckedCreateWithoutUserInput> | X402PaymentCreateWithoutUserInput[] | X402PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: X402PaymentCreateOrConnectWithoutUserInput | X402PaymentCreateOrConnectWithoutUserInput[]
    upsert?: X402PaymentUpsertWithWhereUniqueWithoutUserInput | X402PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: X402PaymentCreateManyUserInputEnvelope
    set?: X402PaymentWhereUniqueInput | X402PaymentWhereUniqueInput[]
    disconnect?: X402PaymentWhereUniqueInput | X402PaymentWhereUniqueInput[]
    delete?: X402PaymentWhereUniqueInput | X402PaymentWhereUniqueInput[]
    connect?: X402PaymentWhereUniqueInput | X402PaymentWhereUniqueInput[]
    update?: X402PaymentUpdateWithWhereUniqueWithoutUserInput | X402PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: X402PaymentUpdateManyWithWhereWithoutUserInput | X402PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: X402PaymentScalarWhereInput | X402PaymentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type AnalysisCreateNestedManyWithoutWhaleAlertInput = {
    create?: XOR<AnalysisCreateWithoutWhaleAlertInput, AnalysisUncheckedCreateWithoutWhaleAlertInput> | AnalysisCreateWithoutWhaleAlertInput[] | AnalysisUncheckedCreateWithoutWhaleAlertInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutWhaleAlertInput | AnalysisCreateOrConnectWithoutWhaleAlertInput[]
    createMany?: AnalysisCreateManyWhaleAlertInputEnvelope
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
  }

  export type AnalysisUncheckedCreateNestedManyWithoutWhaleAlertInput = {
    create?: XOR<AnalysisCreateWithoutWhaleAlertInput, AnalysisUncheckedCreateWithoutWhaleAlertInput> | AnalysisCreateWithoutWhaleAlertInput[] | AnalysisUncheckedCreateWithoutWhaleAlertInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutWhaleAlertInput | AnalysisCreateOrConnectWithoutWhaleAlertInput[]
    createMany?: AnalysisCreateManyWhaleAlertInputEnvelope
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type AnalysisUpdateManyWithoutWhaleAlertNestedInput = {
    create?: XOR<AnalysisCreateWithoutWhaleAlertInput, AnalysisUncheckedCreateWithoutWhaleAlertInput> | AnalysisCreateWithoutWhaleAlertInput[] | AnalysisUncheckedCreateWithoutWhaleAlertInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutWhaleAlertInput | AnalysisCreateOrConnectWithoutWhaleAlertInput[]
    upsert?: AnalysisUpsertWithWhereUniqueWithoutWhaleAlertInput | AnalysisUpsertWithWhereUniqueWithoutWhaleAlertInput[]
    createMany?: AnalysisCreateManyWhaleAlertInputEnvelope
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    update?: AnalysisUpdateWithWhereUniqueWithoutWhaleAlertInput | AnalysisUpdateWithWhereUniqueWithoutWhaleAlertInput[]
    updateMany?: AnalysisUpdateManyWithWhereWithoutWhaleAlertInput | AnalysisUpdateManyWithWhereWithoutWhaleAlertInput[]
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
  }

  export type AnalysisUncheckedUpdateManyWithoutWhaleAlertNestedInput = {
    create?: XOR<AnalysisCreateWithoutWhaleAlertInput, AnalysisUncheckedCreateWithoutWhaleAlertInput> | AnalysisCreateWithoutWhaleAlertInput[] | AnalysisUncheckedCreateWithoutWhaleAlertInput[]
    connectOrCreate?: AnalysisCreateOrConnectWithoutWhaleAlertInput | AnalysisCreateOrConnectWithoutWhaleAlertInput[]
    upsert?: AnalysisUpsertWithWhereUniqueWithoutWhaleAlertInput | AnalysisUpsertWithWhereUniqueWithoutWhaleAlertInput[]
    createMany?: AnalysisCreateManyWhaleAlertInputEnvelope
    set?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    disconnect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    delete?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    connect?: AnalysisWhereUniqueInput | AnalysisWhereUniqueInput[]
    update?: AnalysisUpdateWithWhereUniqueWithoutWhaleAlertInput | AnalysisUpdateWithWhereUniqueWithoutWhaleAlertInput[]
    updateMany?: AnalysisUpdateManyWithWhereWithoutWhaleAlertInput | AnalysisUpdateManyWithWhereWithoutWhaleAlertInput[]
    deleteMany?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
  }

  export type WhaleAlertCreateNestedOneWithoutAnalysesInput = {
    create?: XOR<WhaleAlertCreateWithoutAnalysesInput, WhaleAlertUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: WhaleAlertCreateOrConnectWithoutAnalysesInput
    connect?: WhaleAlertWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnalysesInput = {
    create?: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysesInput
    connect?: UserWhereUniqueInput
  }

  export type WhaleAlertUpdateOneRequiredWithoutAnalysesNestedInput = {
    create?: XOR<WhaleAlertCreateWithoutAnalysesInput, WhaleAlertUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: WhaleAlertCreateOrConnectWithoutAnalysesInput
    upsert?: WhaleAlertUpsertWithoutAnalysesInput
    connect?: WhaleAlertWhereUniqueInput
    update?: XOR<XOR<WhaleAlertUpdateToOneWithWhereWithoutAnalysesInput, WhaleAlertUpdateWithoutAnalysesInput>, WhaleAlertUncheckedUpdateWithoutAnalysesInput>
  }

  export type UserUpdateOneRequiredWithoutAnalysesNestedInput = {
    create?: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnalysesInput
    upsert?: UserUpsertWithoutAnalysesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnalysesInput, UserUpdateWithoutAnalysesInput>, UserUncheckedUpdateWithoutAnalysesInput>
  }

  export type UserCreateNestedOneWithoutX402PaymentsInput = {
    create?: XOR<UserCreateWithoutX402PaymentsInput, UserUncheckedCreateWithoutX402PaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutX402PaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutX402PaymentsNestedInput = {
    create?: XOR<UserCreateWithoutX402PaymentsInput, UserUncheckedCreateWithoutX402PaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutX402PaymentsInput
    upsert?: UserUpsertWithoutX402PaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutX402PaymentsInput, UserUpdateWithoutX402PaymentsInput>, UserUncheckedUpdateWithoutX402PaymentsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type WalletCreateWithoutUserInput = {
    id?: string
    publicKey: string
    encryptedPrivateKey: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: string
    publicKey: string
    encryptedPrivateKey: string
    balance?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type AnalysisCreateWithoutUserInput = {
    id?: string
    cost?: number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    whaleAlert: WhaleAlertCreateNestedOneWithoutAnalysesInput
  }

  export type AnalysisUncheckedCreateWithoutUserInput = {
    id?: string
    whaleAlertId: string
    cost?: number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisCreateOrConnectWithoutUserInput = {
    where: AnalysisWhereUniqueInput
    create: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput>
  }

  export type AnalysisCreateManyUserInputEnvelope = {
    data: AnalysisCreateManyUserInput | AnalysisCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type X402PaymentCreateWithoutUserInput = {
    id?: string
    endpoint: string
    amount: number
    signature: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: number | null
    chainlinkConfidence?: number | null
    priceTimestamp?: Date | string | null
    createdAt?: Date | string
  }

  export type X402PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    endpoint: string
    amount: number
    signature: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: number | null
    chainlinkConfidence?: number | null
    priceTimestamp?: Date | string | null
    createdAt?: Date | string
  }

  export type X402PaymentCreateOrConnectWithoutUserInput = {
    where: X402PaymentWhereUniqueInput
    create: XOR<X402PaymentCreateWithoutUserInput, X402PaymentUncheckedCreateWithoutUserInput>
  }

  export type X402PaymentCreateManyUserInputEnvelope = {
    data: X402PaymentCreateManyUserInput | X402PaymentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WalletUpsertWithoutUserInput = {
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutUserInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    encryptedPrivateKey?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    publicKey?: StringFieldUpdateOperationsInput | string
    encryptedPrivateKey?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisUpsertWithWhereUniqueWithoutUserInput = {
    where: AnalysisWhereUniqueInput
    update: XOR<AnalysisUpdateWithoutUserInput, AnalysisUncheckedUpdateWithoutUserInput>
    create: XOR<AnalysisCreateWithoutUserInput, AnalysisUncheckedCreateWithoutUserInput>
  }

  export type AnalysisUpdateWithWhereUniqueWithoutUserInput = {
    where: AnalysisWhereUniqueInput
    data: XOR<AnalysisUpdateWithoutUserInput, AnalysisUncheckedUpdateWithoutUserInput>
  }

  export type AnalysisUpdateManyWithWhereWithoutUserInput = {
    where: AnalysisScalarWhereInput
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyWithoutUserInput>
  }

  export type AnalysisScalarWhereInput = {
    AND?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
    OR?: AnalysisScalarWhereInput[]
    NOT?: AnalysisScalarWhereInput | AnalysisScalarWhereInput[]
    id?: StringFilter<"Analysis"> | string
    whaleAlertId?: StringFilter<"Analysis"> | string
    userId?: StringFilter<"Analysis"> | string
    cost?: FloatFilter<"Analysis"> | number
    report?: JsonNullableFilter<"Analysis">
    createdAt?: DateTimeFilter<"Analysis"> | Date | string
  }

  export type X402PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: X402PaymentWhereUniqueInput
    update: XOR<X402PaymentUpdateWithoutUserInput, X402PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<X402PaymentCreateWithoutUserInput, X402PaymentUncheckedCreateWithoutUserInput>
  }

  export type X402PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: X402PaymentWhereUniqueInput
    data: XOR<X402PaymentUpdateWithoutUserInput, X402PaymentUncheckedUpdateWithoutUserInput>
  }

  export type X402PaymentUpdateManyWithWhereWithoutUserInput = {
    where: X402PaymentScalarWhereInput
    data: XOR<X402PaymentUpdateManyMutationInput, X402PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type X402PaymentScalarWhereInput = {
    AND?: X402PaymentScalarWhereInput | X402PaymentScalarWhereInput[]
    OR?: X402PaymentScalarWhereInput[]
    NOT?: X402PaymentScalarWhereInput | X402PaymentScalarWhereInput[]
    id?: StringFilter<"X402Payment"> | string
    userId?: StringFilter<"X402Payment"> | string
    endpoint?: StringFilter<"X402Payment"> | string
    amount?: FloatFilter<"X402Payment"> | number
    signature?: StringFilter<"X402Payment"> | string
    status?: StringFilter<"X402Payment"> | string
    metadata?: JsonNullableFilter<"X402Payment">
    chainlinkPrice?: FloatNullableFilter<"X402Payment"> | number | null
    chainlinkConfidence?: FloatNullableFilter<"X402Payment"> | number | null
    priceTimestamp?: DateTimeNullableFilter<"X402Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"X402Payment"> | Date | string
  }

  export type UserCreateWithoutWalletInput = {
    id?: string
    telegramId: string
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisCreateNestedManyWithoutUserInput
    x402Payments?: X402PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: string
    telegramId: string
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
    x402Payments?: X402PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
    x402Payments?: X402PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
    x402Payments?: X402PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnalysisCreateWithoutWhaleAlertInput = {
    id?: string
    cost?: number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAnalysesInput
  }

  export type AnalysisUncheckedCreateWithoutWhaleAlertInput = {
    id?: string
    userId: string
    cost?: number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisCreateOrConnectWithoutWhaleAlertInput = {
    where: AnalysisWhereUniqueInput
    create: XOR<AnalysisCreateWithoutWhaleAlertInput, AnalysisUncheckedCreateWithoutWhaleAlertInput>
  }

  export type AnalysisCreateManyWhaleAlertInputEnvelope = {
    data: AnalysisCreateManyWhaleAlertInput | AnalysisCreateManyWhaleAlertInput[]
    skipDuplicates?: boolean
  }

  export type AnalysisUpsertWithWhereUniqueWithoutWhaleAlertInput = {
    where: AnalysisWhereUniqueInput
    update: XOR<AnalysisUpdateWithoutWhaleAlertInput, AnalysisUncheckedUpdateWithoutWhaleAlertInput>
    create: XOR<AnalysisCreateWithoutWhaleAlertInput, AnalysisUncheckedCreateWithoutWhaleAlertInput>
  }

  export type AnalysisUpdateWithWhereUniqueWithoutWhaleAlertInput = {
    where: AnalysisWhereUniqueInput
    data: XOR<AnalysisUpdateWithoutWhaleAlertInput, AnalysisUncheckedUpdateWithoutWhaleAlertInput>
  }

  export type AnalysisUpdateManyWithWhereWithoutWhaleAlertInput = {
    where: AnalysisScalarWhereInput
    data: XOR<AnalysisUpdateManyMutationInput, AnalysisUncheckedUpdateManyWithoutWhaleAlertInput>
  }

  export type WhaleAlertCreateWithoutAnalysesInput = {
    id?: string
    walletAddress: string
    amount: number
    token: string
    actionType: string
    exchange?: string
    timestamp: Date | string
    analyzed?: boolean
    createdAt?: Date | string
  }

  export type WhaleAlertUncheckedCreateWithoutAnalysesInput = {
    id?: string
    walletAddress: string
    amount: number
    token: string
    actionType: string
    exchange?: string
    timestamp: Date | string
    analyzed?: boolean
    createdAt?: Date | string
  }

  export type WhaleAlertCreateOrConnectWithoutAnalysesInput = {
    where: WhaleAlertWhereUniqueInput
    create: XOR<WhaleAlertCreateWithoutAnalysesInput, WhaleAlertUncheckedCreateWithoutAnalysesInput>
  }

  export type UserCreateWithoutAnalysesInput = {
    id?: string
    telegramId: string
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    x402Payments?: X402PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnalysesInput = {
    id?: string
    telegramId: string
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    x402Payments?: X402PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnalysesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
  }

  export type WhaleAlertUpsertWithoutAnalysesInput = {
    update: XOR<WhaleAlertUpdateWithoutAnalysesInput, WhaleAlertUncheckedUpdateWithoutAnalysesInput>
    create: XOR<WhaleAlertCreateWithoutAnalysesInput, WhaleAlertUncheckedCreateWithoutAnalysesInput>
    where?: WhaleAlertWhereInput
  }

  export type WhaleAlertUpdateToOneWithWhereWithoutAnalysesInput = {
    where?: WhaleAlertWhereInput
    data: XOR<WhaleAlertUpdateWithoutAnalysesInput, WhaleAlertUncheckedUpdateWithoutAnalysesInput>
  }

  export type WhaleAlertUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    analyzed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhaleAlertUncheckedUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    walletAddress?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    actionType?: StringFieldUpdateOperationsInput | string
    exchange?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    analyzed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutAnalysesInput = {
    update: XOR<UserUpdateWithoutAnalysesInput, UserUncheckedUpdateWithoutAnalysesInput>
    create: XOR<UserCreateWithoutAnalysesInput, UserUncheckedCreateWithoutAnalysesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnalysesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnalysesInput, UserUncheckedUpdateWithoutAnalysesInput>
  }

  export type UserUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    x402Payments?: X402PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnalysesInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    x402Payments?: X402PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutX402PaymentsInput = {
    id?: string
    telegramId: string
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletCreateNestedOneWithoutUserInput
    analyses?: AnalysisCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutX402PaymentsInput = {
    id?: string
    telegramId: string
    username?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
    analyses?: AnalysisUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutX402PaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutX402PaymentsInput, UserUncheckedCreateWithoutX402PaymentsInput>
  }

  export type UserUpsertWithoutX402PaymentsInput = {
    update: XOR<UserUpdateWithoutX402PaymentsInput, UserUncheckedUpdateWithoutX402PaymentsInput>
    create: XOR<UserCreateWithoutX402PaymentsInput, UserUncheckedCreateWithoutX402PaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutX402PaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutX402PaymentsInput, UserUncheckedUpdateWithoutX402PaymentsInput>
  }

  export type UserUpdateWithoutX402PaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUpdateOneWithoutUserNestedInput
    analyses?: AnalysisUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutX402PaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telegramId?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
    analyses?: AnalysisUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnalysisCreateManyUserInput = {
    id?: string
    whaleAlertId: string
    cost?: number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type X402PaymentCreateManyUserInput = {
    id?: string
    endpoint: string
    amount: number
    signature: string
    status?: string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: number | null
    chainlinkConfidence?: number | null
    priceTimestamp?: Date | string | null
    createdAt?: Date | string
  }

  export type AnalysisUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    whaleAlert?: WhaleAlertUpdateOneRequiredWithoutAnalysesNestedInput
  }

  export type AnalysisUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    whaleAlertId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    whaleAlertId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type X402PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    chainlinkConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type X402PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    chainlinkConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type X402PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    endpoint?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    signature?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    metadata?: NullableJsonNullValueInput | InputJsonValue
    chainlinkPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    chainlinkConfidence?: NullableFloatFieldUpdateOperationsInput | number | null
    priceTimestamp?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisCreateManyWhaleAlertInput = {
    id?: string
    userId: string
    cost?: number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AnalysisUpdateWithoutWhaleAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnalysesNestedInput
  }

  export type AnalysisUncheckedUpdateWithoutWhaleAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnalysisUncheckedUpdateManyWithoutWhaleAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    cost?: FloatFieldUpdateOperationsInput | number
    report?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WhaleAlertCountOutputTypeDefaultArgs instead
     */
    export type WhaleAlertCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WhaleAlertCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WalletDefaultArgs instead
     */
    export type WalletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WalletDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WhaleAlertDefaultArgs instead
     */
    export type WhaleAlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WhaleAlertDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnalysisDefaultArgs instead
     */
    export type AnalysisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnalysisDefaultArgs<ExtArgs>
    /**
     * @deprecated Use X402PaymentDefaultArgs instead
     */
    export type X402PaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = X402PaymentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PriceSnapshotDefaultArgs instead
     */
    export type PriceSnapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PriceSnapshotDefaultArgs<ExtArgs>

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