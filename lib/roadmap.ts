/**
 * Interview preparation roadmap.
 *
 * Three levels: phase, module, topic. The topic is the unit of work and the
 * only thing with a tick box, because "Async JavaScript" is not one evening,
 * it is nine of them. If a line here cannot be finished in a sitting it is in
 * the wrong place and should be split.
 *
 * Ids are `module.slug` and are what the browser stores, so a label can be
 * reworded freely but changing a slug loses that tick.
 */

export type Topic = { id: string; label: string };
export type Module = { id: string; title: string; note?: string; topics: Topic[] };
export type Phase = { id: string; n: string; title: string; note?: string; modules: Module[] };

/** Builds a module, prefixing every topic id with the module id. */
function mod(
  id: string,
  title: string,
  topics: [slug: string, label: string][],
  note?: string,
): Module {
  return { id, title, note, topics: topics.map(([slug, label]) => ({ id: `${id}.${slug}`, label })) };
}

export const GOAL =
  "Prepare for full stack and backend interviews with a focus on interview performance rather than exhaustive theory. Ordered by how often things actually get asked, not by how tidy the topics look.";

export const PHASES: Phase[] = [
  {
    id: "js",
    n: "01",
    title: "JavaScript core",
    note: "Async, closures and this come first. They get asked more than everything else here combined.",
    modules: [
      mod("js.async", "Async JavaScript", [
        ["stack", "Call stack and execution context"],
        ["loop", "The event loop"],
        ["webapis", "Web APIs and the task queue"],
        ["micro", "Microtasks vs macrotasks"],
        ["callbacks", "Callbacks and callback hell"],
        ["promises", "Promises: states and chaining"],
        ["asyncawait", "async and await"],
        ["errors", "Error handling: try/catch, .catch, unhandled rejections"],
        ["combinators", "Promise.all, allSettled, race, any"],
      ]),
      mod("js.fn", "Functions, closures and this", [
        ["decl", "Declarations vs expressions"],
        ["arrow", "Arrow functions vs regular functions"],
        ["lexical", "Lexical scope"],
        ["closures", "Closures"],
        ["this", "The four this binding rules"],
        ["bind", "call, apply and bind"],
        ["hof", "Higher order functions"],
        ["currying", "Currying and partial application"],
      ]),
      mod("js.mem", "Variables and memory", [
        ["keywords", "var, let and const"],
        ["scope", "Global, function and block scope"],
        ["hoisting", "Hoisting"],
        ["tdz", "The temporal dead zone"],
        ["refs", "Primitive vs reference types"],
        ["stackheap", "Stack vs heap"],
        ["gc", "Garbage collection, and what leaks"],
      ]),
      mod("js.obj", "Objects", [
        ["destructure", "Destructuring"],
        ["spread", "Spread and rest"],
        ["copy", "Shallow vs deep copy"],
        ["clone", "structuredClone, and the JSON round trip trap"],
        ["optional", "Optional chaining"],
        ["nullish", "Nullish coalescing"],
        ["statics", "Object.keys, values, entries, freeze"],
      ]),
      mod("js.arr", "Arrays", [
        ["mfr", "map, filter, reduce"],
        ["search", "find, findIndex, some, every"],
        ["flat", "flat and flatMap"],
        ["sort", "sort, and the comparator traps"],
        ["slice", "slice vs splice"],
        ["from", "Array-likes and Array.from"],
      ]),
      mod("js.oop", "OOP and prototypes", [
        ["chain", "The prototype chain"],
        ["proto", "__proto__ vs prototype"],
        ["classes", "Classes and constructors"],
        ["inherit", "Inheritance and super"],
        ["static", "Static vs instance members"],
        ["accessors", "Getters and setters"],
        ["instanceof", "instanceof and how it actually works"],
      ]),
      mod("js.es6", "ES6 modules and syntax", [
        ["imports", "import and export, default vs named"],
        ["esmcjs", "ESM vs CommonJS"],
        ["template", "Template literals and tagged templates"],
        ["symbols", "Symbols"],
      ]),
      mod(
        "js.gen",
        "Generators and iterators",
        [
          ["iterable", "Symbol.iterator and the iterable protocol"],
          ["async", "Know async generators exist"],
        ],
        "Fifteen minutes total. This is not where the marks are.",
      ),
      mod("js.machine", "Machine coding basics", [
        ["debounce", "debounce"],
        ["throttle", "throttle"],
        ["memoize", "memoize"],
        ["emitter", "EventEmitter"],
        ["deepclone", "deepClone"],
        ["pmap", "Polyfill: Array.prototype.map"],
        ["pall", "Polyfill: Promise.all"],
        ["pbind", "Polyfill: call, apply, bind"],
      ]),
    ],
  },
  {
    id: "ts",
    n: "02",
    title: "TypeScript",
    note: "Before React, because every React answer below is written in it.",
    modules: [
      mod("ts.shapes", "Types and shapes", [
        ["typevsint", "type vs interface"],
        ["union", "Union types"],
        ["intersect", "Intersection types"],
        ["literal", "Literal types"],
        ["enums", "Enums vs a union of literals"],
        ["modifiers", "Optional and readonly properties"],
      ]),
      mod("ts.generics", "Generics", [
        ["fn", "Generic functions"],
        ["types", "Generic types and interfaces"],
        ["extends", "Constraints with extends"],
        ["defaults", "Default type parameters"],
        ["keyof", "keyof and indexed access types"],
      ]),
      mod("ts.utility", "Utility types", [
        ["pick", "Pick"],
        ["omit", "Omit"],
        ["partial", "Partial"],
        ["required", "Required"],
        ["record", "Record"],
        ["returntype", "ReturnType"],
        ["awaited", "Awaited"],
      ]),
      mod("ts.narrow", "Narrowing", [
        ["typeof", "typeof and instanceof narrowing"],
        ["truthy", "Truthiness and equality narrowing"],
        ["guards", "User defined type guards, x is Y"],
        ["discriminated", "Discriminated unions"],
        ["exhaustive", "Exhaustiveness checking with never"],
      ]),
      mod("ts.unknown", "unknown, any and never", [
        ["any", "any, and how it spreads through a codebase"],
        ["unknown", "unknown, and narrowing it safely"],
        ["never", "never, and where it turns up"],
        ["assert", "Assertions vs narrowing, and when as is a lie"],
      ]),
      mod("ts.real", "TypeScript in real code", [
        ["api", "Typing API responses"],
        ["async", "Typing async functions and promises"],
        ["props", "Typing React props"],
        ["hooks", "Typing useState, useReducer and custom hooks"],
        ["events", "Typing events and refs"],
      ]),
    ],
  },
  {
    id: "react",
    n: "03",
    title: "React",
    note: "Hooks, then performance, then rendering, then SSR.",
    modules: [
      mod("react.hooks", "Hooks", [
        ["usestate", "useState"],
        ["useeffect", "useEffect and the dependency array"],
        ["cleanup", "Cleanup functions"],
        ["useref", "useRef"],
        ["usereducer", "useReducer"],
        ["usecontext", "useContext"],
        ["layout", "useLayoutEffect vs useEffect"],
        ["rules", "The rules of hooks, and why they exist"],
      ]),
      mod("react.custom", "Custom hooks", [
        ["extract", "Extracting one from a component"],
        ["logicstate", "Sharing logic vs sharing state"],
        ["fetch", "Write a data fetching hook"],
        ["test", "Testing a custom hook"],
      ]),
      mod("react.context", "Context API", [
        ["create", "Creating and providing context"],
        ["wrong", "When context is the wrong tool"],
        ["rerender", "Re-render behaviour of consumers"],
        ["split", "Splitting contexts to limit re-renders"],
      ]),
      mod("react.state", "State management", [
        ["levels", "Local vs lifted vs global state"],
        ["server", "Server state vs client state"],
        ["query", "React Query: caching and invalidation"],
        ["zustand", "Zustand basics"],
        ["none", "When you do not need a library"],
      ]),
      mod("react.perf", "Performance", [
        ["memo", "React.memo"],
        ["usememo", "useMemo"],
        ["usecallback", "useCallback"],
        ["referential", "Referential equality, and why memo silently fails"],
        ["keys", "Key stability in lists"],
        ["virtual", "Virtualisation"],
        ["profiler", "Profiling with React DevTools"],
      ]),
      mod("react.render", "Rendering and reconciliation", [
        ["phases", "Render phase vs commit phase"],
        ["diff", "The diffing algorithm and keys"],
        ["batching", "Batching"],
        ["strict", "StrictMode double render"],
        ["why", "Answer: why did this component re-render"],
      ]),
      mod("react.ssr", "Rendering strategies", [
        ["csr", "CSR"],
        ["ssr", "SSR"],
        ["ssg", "SSG"],
        ["isr", "ISR"],
        ["hydration", "Hydration, and hydration mismatch"],
        ["rsc", "Server components, conceptually"],
      ]),
      mod("react.boundaries", "Boundaries and loading", [
        ["error", "Error boundaries"],
        ["suspense", "Suspense"],
        ["lazy", "React.lazy and code splitting"],
        ["states", "Loading and error states that do not flash"],
      ]),
      mod("react.testing", "Testing", [
        ["queries", "React Testing Library queries"],
        ["events", "user-event and firing events"],
        ["async", "Testing async UI"],
        ["what", "What is not worth testing"],
      ]),
    ],
  },
  {
    id: "node",
    n: "04",
    title: "Node.js",
    note: "Event loop, then middleware and auth, then streams, then workers, then sockets.",
    modules: [
      mod("node.loop", "Node event loop", [
        ["phases", "The phases of the loop"],
        ["timers", "setTimeout vs setImmediate"],
        ["nexttick", "process.nextTick vs microtasks"],
        ["blocking", "Blocking the loop, and how to spot it"],
        ["libuv", "libuv and the thread pool"],
      ]),
      mod("node.express", "Middleware and Express", [
        ["lifecycle", "The request lifecycle"],
        ["chaining", "How middleware chaining works, and next()"],
        ["errorsig", "The error middleware signature, (err, req, res, next)"],
        ["routers", "Routers and mounting"],
        ["validation", "Body parsing and request validation"],
      ]),
      mod("node.auth", "Authentication", [
        ["sessionstoken", "Sessions vs tokens"],
        ["jwt", "JWT structure and signing"],
        ["refresh", "Access and refresh tokens"],
        ["storage", "Token storage: cookie vs localStorage"],
        ["hashing", "Password hashing, salting, bcrypt"],
        ["rbac", "RBAC enforced at the API boundary"],
        ["revoke", "Logout and revocation"],
      ]),
      mod("node.security", "Security", [
        ["owasp", "OWASP top ten, at an awareness level"],
        ["cors", "CORS"],
        ["xss", "XSS"],
        ["csrf", "CSRF"],
        ["injection", "SQL injection"],
        ["ratelimit", "Rate limiting"],
        ["headers", "Secure headers, helmet"],
        ["secrets", "Secrets handling"],
      ]),
      mod("node.cache", "Caching", [
        ["what", "What to cache, and what never to"],
        ["aside", "Cache-aside and read-through"],
        ["ttl", "Choosing a TTL"],
        ["invalidate", "Invalidating on write"],
        ["http", "HTTP caching headers and ETag"],
      ]),
      mod("node.logging", "Logging", [
        ["levels", "Log levels"],
        ["structured", "Structured logging, pino or winston"],
        ["correlation", "Request ids and correlation"],
        ["never", "What must never be logged"],
      ]),
      mod("node.streams", "Streams and buffers", [
        ["why", "Why streams exist"],
        ["readable", "Readable"],
        ["writable", "Writable"],
        ["duplex", "Duplex and Transform"],
        ["pipeline", "pipe vs pipeline"],
        ["backpressure", "Backpressure"],
        ["buffers", "Buffers and encodings"],
      ]),
      mod("node.concurrency", "Concurrency", [
        ["cluster", "cluster"],
        ["workers", "worker_threads"],
        ["child", "child_process"],
        ["which", "When to reach for which"],
        ["sharing", "Sharing state between workers"],
      ]),
      mod("node.sockets", "WebSockets", [
        ["choice", "WS vs SSE vs long polling"],
        ["handshake", "The socket.io handshake"],
        ["rooms", "Rooms and namespaces"],
        ["scale", "Scaling sockets with the Redis adapter"],
        ["reconnect", "Reconnection and heartbeats"],
      ]),
      mod("node.api", "API design", [
        ["rest", "REST resource conventions"],
        ["status", "Status codes"],
        ["pagination", "Pagination: offset vs cursor"],
        ["versioning", "Versioning"],
        ["idempotency", "Idempotency keys"],
        ["errors", "Error contracts"],
        ["uploads", "File uploads"],
      ]),
      mod("node.testing", "Testing", [
        ["jest", "Jest basics"],
        ["supertest", "supertest against routes"],
        ["mocking", "Mocking modules and the network"],
        ["fixtures", "Test data and fixtures"],
      ]),
    ],
  },
  {
    id: "db",
    n: "05",
    title: "Databases",
    modules: [
      mod("db.pg", "PostgreSQL fundamentals", [
        ["schema", "Schema design and normalisation"],
        ["joins", "Joins: inner, left, right, full"],
        ["agg", "Aggregation and GROUP BY"],
        ["tx", "Transactions and ACID"],
        ["isolation", "Isolation levels"],
        ["deadlock", "Deadlocks"],
        ["constraints", "Constraints and foreign keys"],
      ]),
      mod("db.index", "Indexes and query performance", [
        ["btree", "B-tree indexes"],
        ["composite", "Composite indexes and column order"],
        ["partial", "Partial and covering indexes"],
        ["unused", "Why an index is not being used"],
        ["explain", "EXPLAIN ANALYZE"],
        ["scans", "Sequential scan vs index scan"],
        ["nplusone", "The N+1 problem"],
      ]),
      mod("db.conn", "Connections", [
        ["pooling", "Connection pooling"],
        ["sizing", "Pool sizing"],
        ["prepared", "Prepared statements"],
        ["timeouts", "Timeouts and retries"],
      ]),
      mod("db.redis", "Redis", [
        ["types", "Data types and when to use each"],
        ["caching", "Caching patterns"],
        ["pubsub", "Pub/sub"],
        ["sessions", "Sessions"],
        ["persist", "Persistence: RDB vs AOF"],
      ]),
      mod("db.rediscache", "Redis cache behaviour", [
        ["eviction", "Eviction policies: LRU, LFU, volatile"],
        ["ttl", "TTL strategy"],
        ["invalidation", "Cache invalidation"],
        ["stampede", "Cache stampede, and how to avoid it"],
        ["hotkeys", "Hot keys"],
      ]),
    ],
  },
  {
    id: "lld",
    n: "06",
    title: "Low level design",
    modules: [
      mod("lld.solid", "SOLID", [
        ["srp", "Single responsibility"],
        ["ocp", "Open closed"],
        ["lsp", "Liskov substitution"],
        ["isp", "Interface segregation"],
        ["dip", "Dependency inversion"],
      ]),
      mod("lld.patterns", "Patterns", [
        ["factory", "Factory"],
        ["strategy", "Strategy"],
        ["observer", "Observer"],
        ["singleton", "Singleton"],
        ["wrong", "When each one is the wrong choice"],
      ]),
      mod("lld.practice", "Practice, written out in full", [
        ["parking", "Parking lot"],
        ["lru", "In-memory LRU cache"],
        ["ratelimit", "Rate limiter class"],
        ["dispatcher", "Notification dispatcher"],
      ]),
    ],
  },
  {
    id: "sd",
    n: "07",
    title: "System design",
    note: "A full distributed chat system is a five year question. It is off the list on purpose.",
    modules: [
      mod("sd.url", "URL shortener", [
        ["requirements", "Requirements and a scale estimate"],
        ["keygen", "Key generation: hash vs counter vs base62"],
        ["model", "Data model"],
        ["redirect", "The redirect path, and caching it"],
        ["collisions", "Collisions and custom aliases"],
        ["analytics", "Click analytics"],
      ]),
      mod("sd.ratelimit", "Rate limiter", [
        ["fixed", "Fixed window"],
        ["log", "Sliding window log"],
        ["counter", "Sliding window counter"],
        ["bucket", "Token bucket"],
        ["distributed", "Distributed limiting with Redis"],
        ["where", "Where in the stack to enforce it"],
      ]),
      mod("sd.notify", "Notification service", [
        ["requirements", "Requirements and channels"],
        ["queue", "Queue and worker design"],
        ["retries", "Retries and dead letter queues"],
        ["idempotency", "Idempotency and deduplication"],
        ["templates", "Templating and user preferences"],
        ["tracking", "Delivery tracking"],
      ]),
      mod("sd.realtime", "Real-time notifications over WebSockets", [
        ["pushpoll", "Push vs poll, and how to decide"],
        ["connections", "Connection management"],
        ["fanout", "Fan-out to rooms"],
        ["scale", "Scaling across instances"],
        ["offline", "Offline delivery and catch-up"],
        ["backpressure", "Backpressure on a slow client"],
      ]),
      mod("sd.upload", "Image upload", [
        ["presigned", "Presigned S3 URLs"],
        ["direct", "Direct to storage vs through the server"],
        ["validation", "Validation and size limits"],
        ["thumbnails", "Thumbnails off a queue"],
        ["cdn", "CDN and cache headers"],
        ["orphans", "Cleaning up orphaned uploads"],
      ]),
      mod("sd.caching", "Caching as a design decision", [
        ["where", "Where in the stack to cache"],
        ["strategies", "Cache-aside vs write-through vs write-behind"],
        ["invalidation", "Invalidation strategies"],
        ["stampede", "Stampede protection"],
        ["measure", "Measuring hit rate"],
      ]),
    ],
  },
  {
    id: "ops",
    n: "08",
    title: "Docker and deployment",
    note: "Last, and lowest weight. Do not let it eat a week.",
    modules: [
      mod("ops.docker", "Docker", [
        ["images", "Images vs containers"],
        ["dockerfile", "Dockerfile basics"],
        ["layers", "Layers and build cache"],
        ["volumes", "Volumes"],
        ["networks", "Networks"],
        ["ignore", ".dockerignore"],
      ]),
      mod("ops.compose", "Docker Compose", [
        ["services", "Services and dependencies"],
        ["env", "Environment and env_file"],
        ["devprod", "Local dev vs production compose"],
      ]),
      mod("ops.multistage", "Multi-stage builds", [
        ["stages", "Build stage vs runtime stage"],
        ["slim", "Slimming the final image"],
        ["nonroot", "Running as a non-root user"],
      ]),
      mod("ops.ci", "CI/CD", [
        ["stages", "Pipeline stages"],
        ["tests", "Running tests in CI"],
        ["image", "Build and push an image"],
        ["deploy", "Deploy and rollback"],
      ]),
      mod("ops.config", "Configuration", [
        ["envvars", "Environment variables"],
        ["secrets", "Secrets vs config"],
        ["twelve", "Twelve factor, briefly"],
      ]),
    ],
  },
  {
    id: "proj",
    n: "09",
    title: "Project deep dive and mocks",
    note: "Runs continuously from week two, not at the end. Highest return of anything on this page.",
    modules: [
      mod("proj.one", "Project one, written out", [
        ["problem", "The problem it solves"],
        ["architecture", "The architecture"],
        ["contribution", "Your specific contribution"],
        ["d1", "Hard decision one, and why"],
        ["d2", "Hard decision two, and why"],
        ["d3", "Hard decision three, and why"],
        ["broke", "What broke in production"],
        ["redo", "What you would redo"],
      ]),
      mod("proj.two", "Project two, written out", [
        ["problem", "The problem it solves"],
        ["architecture", "The architecture"],
        ["contribution", "Your specific contribution"],
        ["d1", "Hard decision one, and why"],
        ["d2", "Hard decision two, and why"],
        ["d3", "Hard decision three, and why"],
        ["broke", "What broke in production"],
        ["redo", "What you would redo"],
      ]),
      mod("proj.rehearse", "Rehearsal", [
        ["draw1", "Draw project one from memory"],
        ["draw2", "Draw project two from memory"],
        ["db", "Answer: why this database"],
        ["scale", "Answer: how does it scale"],
        ["bottleneck", "Answer: where is the bottleneck"],
        ["tenx", "Answer: what changes at ten times the traffic"],
      ]),
      mod("proj.mocks", "Mocks", [
        ["theory", "Study concise theory"],
        ["aloud", "Explain aloud, no notes"],
        ["followups", "Answer follow-up questions"],
        ["machine", "Machine coding round"],
        ["weak", "Review weak areas"],
        ["log", "Log mistakes and revisit them"],
      ]),
    ],
  },
];

/** DSA runs daily alongside the phases. It is not one of them. */
export const DSA_PHASE: Phase = {
  id: "dsa",
  n: "—",
  title: "DSA",
  note: "45 minutes a day, every day. Not a phase, and not something to catch up on later.",
  modules: [
    mod("dsa.arrays", "Arrays", [
      ["traversal", "Traversal and in-place updates"],
      ["prefix", "Prefix sums"],
      ["kadane", "Kadane's algorithm"],
      ["rotate", "Rotation"],
    ]),
    mod("dsa.strings", "Strings", [
      ["palindrome", "Palindromes"],
      ["anagram", "Anagrams"],
      ["substring", "Substrings"],
      ["building", "Building strings efficiently"],
    ]),
    mod("dsa.hash", "Hashmaps", [
      ["frequency", "Frequency counting"],
      ["twosum", "The two sum family"],
      ["grouping", "Grouping and bucketing"],
    ]),
    mod("dsa.pointers", "Two pointers", [
      ["opposite", "Opposite ends"],
      ["fastslow", "Fast and slow"],
      ["pairs", "Pairs in a sorted array"],
    ]),
    mod("dsa.window", "Sliding window", [
      ["fixed", "Fixed size window"],
      ["variable", "Variable size window"],
      ["longest", "Longest substring problems"],
    ]),
    mod("dsa.recursion", "Recursion", [
      ["base", "Base case and the recursion tree"],
      ["backtrack", "Backtracking"],
      ["subsets", "Subsets and permutations"],
    ]),
    mod("dsa.sorting", "Sorting and searching", [
      ["comparator", "Built-in sort with comparators"],
      ["merge", "Merge sort"],
      ["quick", "Quick sort"],
      ["binary", "Binary search"],
    ]),
    mod("dsa.stacks", "Stacks and queues", [
      ["monotonic", "Monotonic stack"],
      ["parens", "Valid parentheses family"],
      ["queuestack", "Queue from two stacks"],
    ]),
    mod("dsa.trees", "Basic trees", [
      ["traversals", "In-order, pre-order, post-order"],
      ["bfs", "Level order traversal"],
      ["depth", "Depth and height"],
      ["bst", "BST insert and search"],
    ]),
  ],
};

export const ALL_PHASES: Phase[] = [...PHASES, DSA_PHASE];

export const DSA_TARGET = { easy: 70, medium: 30 };

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

export const ALL_TOPIC_IDS = ALL_PHASES.flatMap((p) =>
  p.modules.flatMap((m) => m.topics.map((t) => t.id)),
);
