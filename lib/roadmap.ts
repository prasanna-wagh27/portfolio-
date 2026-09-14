/**
 * Interview preparation roadmap.
 *
 * Merged from the original seven phase plan and the revision that reordered it
 * by interview frequency, added TypeScript, low level design and the project
 * deep dive, and pulled DSA out into a daily track rather than a phase.
 *
 * Item ids are stable and are what gets stored in the browser, so renaming a
 * label is safe but changing an id loses that tick.
 */

export type Item = { id: string; label: string; detail?: string };
export type Phase = { id: string; n: string; title: string; note?: string; items: Item[] };

export const GOAL =
  "Prepare for full stack and backend interviews with a focus on interview performance rather than exhaustive theory. Ordered by how often things actually get asked, not by how tidy the topics look.";

export const PHASES: Phase[] = [
  {
    id: "js",
    n: "01",
    title: "JavaScript core",
    note: "Async, closures and this come first. They get asked more than everything else here combined.",
    items: [
      {
        id: "js.async",
        label: "Async JavaScript",
        detail:
          "Event loop, call stack, web APIs, microtasks and macrotasks, promises, async and await, the Promise APIs",
      },
      {
        id: "js.functions",
        label: "Functions, closures and this",
        detail:
          "Declarations, expressions, arrow functions, call, apply and bind, lexical scope, higher order functions, callbacks",
      },
      {
        id: "js.memory",
        label: "Variables and memory",
        detail: "var, let and const, scope, hoisting, the TDZ, primitive vs reference, stack vs heap",
      },
      {
        id: "js.objects",
        label: "Objects",
        detail:
          "Destructuring, spread and rest, shallow vs deep copy, optional chaining, nullish coalescing",
      },
      { id: "js.arrays", label: "Arrays", detail: "map, filter, reduce, find, some, every, flat, sort" },
      { id: "js.oop", label: "OOP and prototypes", detail: "Prototype chain, classes, inheritance" },
      { id: "js.es6", label: "ES6 modules and syntax", detail: "Modules, template literals" },
      {
        id: "js.generators",
        label: "Generators and iterators",
        detail:
          "Fifteen minutes. Know Symbol.iterator, know async generators exist, then stop. This is not where the marks are.",
      },
      {
        id: "js.machine",
        label: "Machine coding basics",
        detail: "debounce, throttle, memoize, EventEmitter, polyfills",
      },
    ],
  },
  {
    id: "ts",
    n: "02",
    title: "TypeScript",
    note: "Before React, because every React answer below is written in it.",
    items: [
      { id: "ts.shapes", label: "Type vs interface, unions vs intersections" },
      { id: "ts.generics", label: "Generics and constraints", detail: "Including extends" },
      {
        id: "ts.utility",
        label: "Utility types",
        detail: "Pick, Omit, Partial, Required, Record, ReturnType",
      },
      { id: "ts.narrowing", label: "Narrowing, type guards, discriminated unions" },
      { id: "ts.unknown", label: "unknown vs any vs never" },
      {
        id: "ts.applied",
        label: "Typing real code",
        detail: "API responses, async functions, React props and hooks",
      },
    ],
  },
  {
    id: "react",
    n: "03",
    title: "React",
    note: "Hooks, then performance, then rendering, then SSR.",
    items: [
      { id: "react.hooks", label: "Hooks" },
      { id: "react.custom", label: "Custom hooks" },
      { id: "react.context", label: "Context API" },
      { id: "react.state", label: "State management" },
      { id: "react.perf", label: "Performance", detail: "memo, useMemo, useCallback" },
      { id: "react.render", label: "Rendering and reconciliation" },
      {
        id: "react.ssr",
        label: "CSR vs SSR vs SSG vs ISR",
        detail: "Hydration mismatch, and server components conceptually",
      },
      { id: "react.boundaries", label: "Error boundaries, Suspense, lazy loading" },
      { id: "react.testing", label: "React Testing Library basics" },
    ],
  },
  {
    id: "node",
    n: "04",
    title: "Node.js",
    note: "Event loop, then middleware and auth, then streams, then workers, then sockets.",
    items: [
      { id: "node.loop", label: "Node event loop" },
      {
        id: "node.middleware",
        label: "Middleware and Express",
        detail:
          "How middleware chaining works and the error middleware signature. Express internals stop there.",
      },
      { id: "node.auth", label: "Authentication" },
      { id: "node.security", label: "Security" },
      { id: "node.caching", label: "Caching" },
      { id: "node.logging", label: "Logging" },
      {
        id: "node.streams",
        label: "Streams and buffers",
        detail: "Readable, Writable, Duplex, Transform. pipe vs pipeline, backpressure.",
      },
      {
        id: "node.concurrency",
        label: "Cluster vs worker_threads vs child_process",
        detail: "Chiefly: when to reach for which",
      },
      {
        id: "node.sockets",
        label: "WebSockets",
        detail: "WS vs SSE vs polling, socket.io rooms, scaling sockets with the Redis adapter",
      },
      {
        id: "node.api",
        label: "API design",
        detail:
          "REST conventions, pagination, versioning, idempotency, error contracts, file uploads",
      },
      { id: "node.testing", label: "Testing", detail: "Jest and supertest, mocking" },
    ],
  },
  {
    id: "db",
    n: "05",
    title: "Databases",
    items: [
      {
        id: "db.postgres",
        label: "PostgreSQL",
        detail: "Indexes, joins, transactions, isolation levels, optimisation",
      },
      { id: "db.plans", label: "Query plans", detail: "EXPLAIN ANALYZE, and the N+1 problem" },
      { id: "db.pooling", label: "Connection pooling" },
      { id: "db.redis", label: "Redis", detail: "Caching, pub/sub, sessions" },
      {
        id: "db.rediscache",
        label: "Redis cache behaviour",
        detail: "Eviction policies, TTL strategy, cache invalidation, cache stampede",
      },
    ],
  },
  {
    id: "lld",
    n: "06",
    title: "Low level design",
    items: [
      { id: "lld.solid", label: "SOLID" },
      { id: "lld.patterns", label: "Factory, Strategy, Observer, Singleton" },
      { id: "lld.parking", label: "Practice: parking lot" },
      { id: "lld.lru", label: "Practice: in-memory LRU cache" },
      { id: "lld.ratelimit", label: "Practice: rate limiter class" },
      { id: "lld.dispatch", label: "Practice: notification dispatcher" },
    ],
  },
  {
    id: "sd",
    n: "07",
    title: "System design",
    note: "A full distributed chat system is a five year question. It is off the list on purpose.",
    items: [
      { id: "sd.url", label: "URL shortener" },
      { id: "sd.ratelimit", label: "Rate limiter" },
      { id: "sd.notify", label: "Notification service" },
      { id: "sd.realtime", label: "Real-time notifications over WebSockets" },
      {
        id: "sd.upload",
        label: "Image upload",
        detail: "Presigned S3 URLs, direct to storage, CDN, thumbnails off a queue",
      },
      { id: "sd.caching", label: "Caching" },
    ],
  },
  {
    id: "ops",
    n: "08",
    title: "Docker and deployment",
    note: "Last, and lowest weight. Do not let it eat a week.",
    items: [
      { id: "ops.docker", label: "Docker" },
      { id: "ops.compose", label: "Docker Compose" },
      { id: "ops.multistage", label: "Multi-stage builds" },
      { id: "ops.ci", label: "CI/CD basics" },
      { id: "ops.env", label: "Environment variables" },
    ],
  },
  {
    id: "proj",
    n: "09",
    title: "Project deep dive and mocks",
    note: "Runs continuously from week two, not at the end. Highest return of anything on this page.",
    items: [
      { id: "proj.pick", label: "Pick two projects" },
      {
        id: "proj.write1",
        label: "Project one, written up",
        detail:
          "Problem, architecture, your specific contribution, three hard decisions and why, what broke in production, what you would redo",
      },
      { id: "proj.write2", label: "Project two, written up", detail: "The same six headings" },
      { id: "proj.draw", label: "Draw both architectures from memory" },
      { id: "proj.why", label: "Rehearse: why this database" },
      { id: "proj.scale", label: "Rehearse: how does it scale" },
      { id: "proj.bottleneck", label: "Rehearse: where is the bottleneck" },
      { id: "mock.theory", label: "Mocks: study concise theory" },
      { id: "mock.aloud", label: "Mocks: explain aloud" },
      { id: "mock.followups", label: "Mocks: answer follow-up questions" },
      { id: "mock.machine", label: "Mocks: machine coding" },
      { id: "mock.weak", label: "Mocks: review weak areas" },
    ],
  },
];

/** DSA is a daily track alongside the phases, not one of them. */
export const DSA = {
  note: "45 minutes a day, every day. Not a phase, and not something to catch up on later.",
  target: { easy: 70, medium: 30 },
  items: [
    { id: "dsa.arrays", label: "Arrays" },
    { id: "dsa.strings", label: "Strings" },
    { id: "dsa.hashmaps", label: "Hashmaps" },
    { id: "dsa.twopointers", label: "Two pointers" },
    { id: "dsa.sliding", label: "Sliding window" },
    { id: "dsa.recursion", label: "Recursion" },
    { id: "dsa.sorting", label: "Sorting" },
    { id: "dsa.stacks", label: "Stacks and queues" },
    { id: "dsa.trees", label: "Basic trees" },
  ] as Item[],
};

/** The bar a module has to clear before it counts as done. */
export const PASS_BAR = [
  "Explain it in three minutes, with no notes.",
  "Answer three follow-up questions on it.",
  "Write one code example from scratch.",
];

export const SPACED_REVISION =
  "Re-explain each module aloud on day 3 and again on day 10 after learning it. Ten minutes each time.";

export const DAILY = [
  { minutes: 45, task: "DSA", note: "Non-negotiable, every day" },
  { minutes: 45, task: "Learn one module" },
  { minutes: 15, task: "Explain it aloud", note: "No notes" },
  { minutes: 30, task: "Mock Q and A, or machine coding" },
  { minutes: 15, task: "Spaced revision of an older module" },
  { minutes: 10, task: "Log mistakes" },
];

export const ALL_ITEM_IDS = [
  ...PHASES.flatMap((p) => p.items.map((i) => i.id)),
  ...DSA.items.map((i) => i.id),
];
