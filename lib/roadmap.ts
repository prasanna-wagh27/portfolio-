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
        ["stack", "Explain the call stack and what an execution context holds"],
        ["loop", "Name the event loop phases and what each one drains"],
        ["webapis", "Explain how web APIs hand work back to the task queue"],
        ["micro", "Predict output order when microtasks and macrotasks interleave"],
        ["callbacks", "Explain why callback nesting became a problem, and what replaced it"],
        ["promises", "Explain promise states, chaining, and what .then returns"],
        ["asyncawait", "Rewrite a promise chain as async/await and say what await really does"],
        ["errors", "Handle async errors: try/catch, .catch, unhandled rejection"],
        ["combinators", "Choose between Promise.all, allSettled, race and any for a case"],
      ]),
      mod("js.fn", "Functions, closures and this", [
        ["decl", "Explain declarations vs expressions and how hoisting differs between them"],
        ["arrow", "Explain what an arrow function does to this, and when not to use one"],
        ["lexical", "Explain lexical scope and how the scope chain resolves a name"],
        ["closures", "Explain a closure, and write one that fixes the loop variable trap"],
        ["this", "Determine this for all four call patterns"],
        ["bind", "Use call, apply and bind, and say how bind differs"],
        ["hof", "Write a function that takes a function and returns a function"],
        ["currying", "Curry a function and explain partial application"],
      ]),
      mod("js.mem", "Variables and memory", [
        ["keywords", "Compare var, let and const, including re-assignment vs mutation"],
        ["scope", "Explain global, function and block scope with an example"],
        ["hoisting", "Explain what actually gets hoisted, and what does not"],
        ["tdz", "Explain the temporal dead zone and what triggers it"],
        ["refs", "Explain primitive vs reference, and what that does to equality"],
        ["stackheap", "Explain what lives on the stack and what lives on the heap"],
        ["gc", "Name the common leak sources: timers, listeners, closures over big objects"],
      ]),
      mod("js.obj", "Objects", [
        ["destructure", "Destructure nested objects with defaults and renaming"],
        ["spread", "Use spread and rest, and say where each is allowed"],
        ["copy", "Explain shallow vs deep copy, and show where a shallow copy bites"],
        ["clone", "Compare structuredClone with the JSON round trip and what that loses"],
        ["optional", "Use optional chaining, including on calls and index access"],
        ["nullish", "Explain ?? against ||, and when the difference matters"],
        ["statics", "Use Object.keys, values, entries and freeze"],
      ]),
      mod("js.arr", "Arrays", [
        ["mfr", "Write a reduce that groups, and say when map beats reduce"],
        ["search", "Choose between find, findIndex, some and every"],
        ["flat", "Use flat and flatMap on nested data"],
        ["sort", "Explain why sort needs a comparator, and that it mutates"],
        ["slice", "Explain slice against splice, and which one mutates"],
        ["from", "Convert an array-like or iterable with Array.from"],
      ]),
      mod("js.oop", "OOP and prototypes", [
        ["chain", "Explain the prototype chain and how a lookup walks it"],
        ["proto", "Explain the difference between __proto__ and prototype"],
        ["classes", "Write a class and explain what it desugars to"],
        ["inherit", "Use extends and super, and say what super actually does"],
        ["static", "Explain static against instance members"],
        ["accessors", "Write a getter and a setter, and justify them"],
        ["instanceof", "Explain what instanceof actually checks"],
      ]),
      mod("js.es6", "ES6 modules and syntax", [
        ["imports", "Use default and named exports, and explain the difference"],
        ["esmcjs", "Compare ESM and CommonJS: loading, hoisting, interop"],
        ["template", "Use template literals and write a tagged template"],
        ["symbols", "Explain what a Symbol is for"],
      ]),
      mod(
        "js.gen",
        "Generators and iterators",
        [
          ["iterable", "Make an object iterable with Symbol.iterator"],
          ["async", "Know async generators exist and roughly what they solve"],
        ],
        "Fifteen minutes total. This is not where the marks are.",
      ),
      mod("js.machine", "Machine coding basics", [
        ["debounce", "Implement debounce from scratch, with a cancel"],
        ["throttle", "Implement throttle, and explain it against debounce"],
        ["memoize", "Implement memoize, and choose a cache key strategy"],
        ["emitter", "Implement an EventEmitter with on, off, once and emit"],
        ["deepclone", "Implement deepClone for nested objects, arrays and dates"],
        ["pmap", "Write Array.prototype.map as a polyfill"],
        ["pall", "Write Promise.all as a polyfill"],
        ["pbind", "Write call, apply and bind as polyfills"],
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
        ["typevsint", "Choose type or interface and justify it: merging, unions, extends"],
        ["union", "Model a value that can be one of several shapes"],
        ["intersect", "Combine types with &, and explain what happens on conflict"],
        ["literal", "Use literal types to constrain a string or number"],
        ["enums", "Compare an enum with a union of literals, and pick one"],
        ["modifiers", "Use optional and readonly, and say what readonly does not do"],
      ]),
      mod("ts.generics", "Generics", [
        ["fn", "Write a generic function whose return type follows its input"],
        ["types", "Write a generic interface, such as an API envelope"],
        ["extends", "Constrain a type parameter with extends"],
        ["defaults", "Give a type parameter a sensible default"],
        ["keyof", "Use keyof and T[K] to type a property getter"],
      ]),
      mod("ts.utility", "Utility types", [
        ["pick", "Use Pick to build a narrower type from a wider one"],
        ["omit", "Use Omit, and explain why a typo in a key does not error"],
        ["partial", "Use Partial for a patch payload"],
        ["required", "Use Required to invert optionality"],
        ["record", "Use Record to type a lookup map"],
        ["returntype", "Use ReturnType with typeof to derive a type from a function"],
        ["awaited", "Use Awaited to unwrap a promise type"],
      ]),
      mod("ts.narrow", "Narrowing", [
        ["typeof", "Narrow with typeof and instanceof"],
        ["truthy", "Narrow on truthiness and equality, and avoid the empty string trap"],
        ["guards", "Write a user defined type guard, x is Y"],
        ["discriminated", "Model a result as a discriminated union and switch on the tag"],
        ["exhaustive", "Force exhaustiveness with a never in the default case"],
      ]),
      mod("ts.unknown", "unknown, any and never", [
        ["any", "Explain how any spreads, and where it is still acceptable"],
        ["unknown", "Take unknown input and narrow it safely"],
        ["never", "Explain where never turns up and what it means"],
        ["assert", "Explain why as is an assertion rather than a check"],
      ]),
      mod("ts.real", "TypeScript in real code", [
        ["api", "Type an API response and validate it at the boundary"],
        ["async", "Type an async function and its error path"],
        ["props", "Type React props, including children and optional callbacks"],
        ["hooks", "Type useState, useReducer and a custom hook's return"],
        ["events", "Type a DOM event handler and a ref"],
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
        ["usestate", "Explain batching, and when you need the functional updater"],
        ["useeffect", "Explain when an effect runs and what the dependency array controls"],
        ["cleanup", "Write a cleanup that cancels a fetch, and name the race it prevents"],
        ["useref", "Use a ref for a DOM node, and for a value that must not re-render"],
        ["usereducer", "Move tangled state into a reducer, and justify the move"],
        ["usecontext", "Read context, and explain what makes consumers re-render"],
        ["layout", "Explain useLayoutEffect against useEffect, and when it matters"],
        ["rules", "State the rules of hooks and what breaks if you bend them"],
      ]),
      mod("react.custom", "Custom hooks", [
        ["extract", "Extract a custom hook out of a component"],
        ["logicstate", "Explain that two components using one hook do not share state"],
        ["fetch", "Write useFetch with loading, error and cancellation"],
        ["test", "Test a hook in isolation"],
      ]),
      mod("react.perf", "Performance", [
        ["memo", "Use React.memo, and explain when it does nothing at all"],
        ["usememo", "Use useMemo for a cost you can actually name"],
        ["usecallback", "Use useCallback, and say which problem it solves"],
        ["referential", "Explain why a fresh object or function silently breaks memoisation"],
        ["keys", "Explain what a bad key does to list reconciliation"],
        ["virtual", "Explain when a long list needs virtualising"],
        ["profiler", "Find a slow render with the Profiler"],
      ]),
      mod("react.render", "Rendering and reconciliation", [
        ["phases", "Explain the render phase against the commit phase"],
        ["diff", "Explain reconciliation, and how keys drive it"],
        ["batching", "Explain what gets batched and what does not"],
        ["strict", "Explain why StrictMode renders twice in development"],
        ["why", "Name the five reasons a component re-rendered"],
      ]),
      mod("react.ssr", "Rendering strategies", [
        ["csr", "Explain CSR and the first paint cost it carries"],
        ["ssr", "Explain SSR and what it does to TTFB and to server load"],
        ["ssg", "Explain SSG and the content it suits"],
        ["isr", "Explain ISR and what revalidation actually does"],
        ["hydration", "Explain hydration, and what causes a mismatch warning"],
        ["rsc", "Explain what a server component can and cannot do"],
      ]),
      mod("react.context", "Context API", [
        ["create", "Create and provide a typed context"],
        ["wrong", "Say when context is the wrong tool, and what to reach for instead"],
        ["rerender", "Explain why a new context value object re-renders every consumer"],
        ["split", "Split one context into two to limit re-renders"],
      ]),
      mod("react.state", "State management", [
        ["levels", "Decide between local, lifted and global state"],
        ["server", "Separate server state from client state, and say why it matters"],
        ["query", "Explain React Query caching, staleness and invalidation"],
        ["zustand", "Create a store and select from it without over-rendering"],
        ["none", "Argue the case for no state library at all"],
      ]),
      mod("react.boundaries", "Boundaries and loading", [
        ["error", "Add an error boundary, and say what it cannot catch"],
        ["suspense", "Use Suspense for a loading fallback"],
        ["lazy", "Code split a route with React.lazy"],
        ["states", "Design loading and error states that do not flash"],
      ]),
      mod("react.testing", "Testing", [
        ["queries", "Query by role and label rather than by test id"],
        ["events", "Drive an interaction with user-event"],
        ["async", "Test UI that waits on a promise"],
        ["what", "Argue what is not worth testing"],
      ]),    ],
  },
  {
    id: "node",
    n: "04",
    title: "Node.js",
    note: "Event loop, then middleware and auth, then streams, then workers, then sockets.",
    modules: [
      mod("node.loop", "Node event loop", [
        ["phases", "Name the event loop phases and what each one drains"],
        ["timers", "Explain setTimeout against setImmediate, and when order is deterministic"],
        ["nexttick", "Explain process.nextTick against promise microtasks, and which wins"],
        ["blocking", "Identify what blocks the loop, and how you would detect it in production"],
        ["libuv", "Explain the libuv thread pool and what gets offloaded to it"],
      ]),
      mod("node.express", "Middleware and Express", [
        ["lifecycle", "Trace a request from the server through to the response"],
        ["chaining", "Explain how next() chains middleware, and what a missing next() does"],
        ["errorsig", "Write error middleware, and explain the four argument signature"],
        ["routers", "Mount routers, and explain how the path resolves"],
        ["validation", "Parse and validate a request body at the boundary"],
      ]),
      mod("node.auth", "Authentication", [
        ["sessionstoken", "Compare sessions with tokens, and pick one for a given product"],
        ["jwt", "Explain the three parts of a JWT and what the signature proves"],
        ["refresh", "Design access and refresh tokens, including rotation"],
        ["storage", "Argue cookie against localStorage for token storage"],
        ["hashing", "Explain salting, and why bcrypt is slow on purpose"],
        ["rbac", "Enforce roles at the API boundary rather than in the UI"],
        ["revoke", "Revoke a token before it expires"],
      ]),
      mod("node.streams", "Streams and buffers", [
        ["why", "Explain why a stream beats loading the whole file into memory"],
        ["readable", "Consume a Readable and handle its events"],
        ["writable", "Write to a Writable and handle drain"],
        ["duplex", "Write a Transform that maps a stream as it passes"],
        ["pipeline", "Explain why pipeline beats pipe for error handling and cleanup"],
        ["backpressure", "Explain backpressure, and what happens when you ignore it"],
        ["buffers", "Work with Buffers and encodings"],
      ]),
      mod("node.concurrency", "Concurrency", [
        ["cluster", "Use cluster to fill every core, and say what it does not share"],
        ["workers", "Move CPU bound work onto a worker thread"],
        ["child", "Spawn a child process and stream its output"],
        ["which", "Choose between cluster, worker_threads and child_process for a case"],
        ["sharing", "Share state across workers without corrupting it"],
      ]),
      mod("node.sockets", "WebSockets", [
        ["choice", "Choose between WebSockets, SSE and polling, and defend it"],
        ["handshake", "Explain the upgrade handshake and the fallback path"],
        ["rooms", "Use rooms and namespaces to target a broadcast"],
        ["scale", "Scale sockets across instances with the Redis adapter"],
        ["reconnect", "Handle reconnection, heartbeats and messages missed while away"],
      ]),
      mod("node.api", "API design", [
        ["rest", "Design resource URLs and pick the right verb"],
        ["status", "Pick the right status code, including 409 and 422"],
        ["pagination", "Compare offset with cursor pagination, and pick one"],
        ["versioning", "Version an API without breaking existing clients"],
        ["idempotency", "Make a POST safe to retry with an idempotency key"],
        ["errors", "Design one error shape the whole API returns"],
        ["uploads", "Handle a file upload, and explain multipart"],
      ]),
      mod("node.security", "Security", [
        ["owasp", "Name the OWASP risks that actually apply to your API"],
        ["cors", "Explain CORS and preflight, and what the browser is protecting"],
        ["xss", "Explain stored against reflected XSS, and how encoding stops it"],
        ["csrf", "Explain CSRF, and why SameSite cookies help"],
        ["injection", "Explain SQL injection, and why parameterised queries fix it"],
        ["ratelimit", "Rate limit an endpoint, and choose where to enforce it"],
        ["headers", "Set the security headers that matter, and say what each does"],
        ["secrets", "Keep secrets out of the image, the repo and the logs"],
      ]),
      mod("node.cache", "Caching", [
        ["what", "Decide what is safe to cache, and what never is"],
        ["aside", "Implement cache-aside, and walk the read path"],
        ["ttl", "Choose a TTL, and justify it against staleness"],
        ["invalidate", "Invalidate on write, and name the race you just created"],
        ["http", "Use Cache-Control and ETag on a response"],
      ]),
      mod("node.logging", "Logging", [
        ["levels", "Use log levels consistently, and say what belongs at each"],
        ["structured", "Emit structured logs a machine can query"],
        ["correlation", "Thread a request id through a whole call chain"],
        ["never", "Name what must never reach a log line"],
      ]),
      mod("node.testing", "Testing", [
        ["jest", "Write a unit test with mocks and meaningful assertions"],
        ["supertest", "Test a route end to end with supertest"],
        ["mocking", "Mock a module and a network call"],
        ["fixtures", "Build test data that does not leak between tests"],
      ]),    ],
  },
  {
    id: "db",
    n: "05",
    title: "Databases",
    modules: [
      mod("db.pg", "PostgreSQL fundamentals", [
        ["schema", "Design a schema, and justify the normal form you stopped at"],
        ["joins", "Write inner, left and full joins, and predict the row counts"],
        ["agg", "Aggregate with GROUP BY, and filter with HAVING"],
        ["tx", "Explain ACID with a concrete failure for each letter"],
        ["isolation", "Explain isolation levels by the anomaly each one prevents"],
        ["deadlock", "Explain how a deadlock forms, and how to avoid it"],
        ["constraints", "Use constraints and foreign keys to make bad data impossible"],
      ]),
      mod("db.index", "Indexes and query performance", [
        ["btree", "Explain what a B-tree index costs on write and saves on read"],
        ["composite", "Explain why composite index column order decides usefulness"],
        ["partial", "Use a partial or covering index, and say what it buys"],
        ["unused", "Diagnose why the planner ignored the index you added"],
        ["explain", "Read an EXPLAIN ANALYZE and name the expensive node"],
        ["scans", "Explain when a sequential scan is the right choice"],
        ["nplusone", "Spot an N+1 in an ORM, and fix it with a join or a batch"],
      ]),
      mod("db.conn", "Connections", [
        ["pooling", "Explain why pooling exists, and what happens when the pool runs out"],
        ["sizing", "Size a pool against the database's connection limit"],
        ["prepared", "Explain what a prepared statement saves"],
        ["timeouts", "Set statement and connection timeouts, and justify the values"],
      ]),
      mod("db.redis", "Redis", [
        ["types", "Pick the right type: string, hash, set, sorted set, list"],
        ["caching", "Cache a read path in Redis, and measure the hit rate"],
        ["pubsub", "Use pub/sub, and explain what it does not guarantee"],
        ["sessions", "Store sessions in Redis and handle expiry"],
        ["persist", "Compare RDB with AOF, and what you lose on a crash"],
      ]),
      mod("db.rediscache", "Redis cache behaviour", [
        ["eviction", "Choose an eviction policy: LRU, LFU, volatile, noeviction"],
        ["ttl", "Design a TTL strategy, including jitter"],
        ["invalidation", "Invalidate on write, and explain the ordering hazard"],
        ["stampede", "Explain a stampede, and stop one with a lock or early refresh"],
        ["hotkeys", "Detect a hot key and spread the load off it"],
      ]),
    ],
  },
  {
    id: "lld",
    n: "06",
    title: "Low level design",
    modules: [
      mod("lld.solid", "SOLID", [
        ["srp", "Explain single responsibility with a class you would split"],
        ["ocp", "Extend behaviour without editing the original class"],
        ["lsp", "Give a concrete Liskov violation and the fix"],
        ["isp", "Split a fat interface, and say who benefits"],
        ["dip", "Depend on an abstraction, and show the injection point"],
      ]),
      mod("lld.patterns", "Patterns", [
        ["factory", "Implement a factory, and say what it decouples"],
        ["strategy", "Replace a growing switch with a strategy"],
        ["observer", "Implement observer, and name the leak it invites"],
        ["singleton", "Implement a singleton, and explain what it does to tests"],
        ["wrong", "Name a case where each of these four is the wrong choice"],
      ]),
      mod("lld.practice", "Practice, written out in full", [
        ["parking", "Design a parking lot: entities, interfaces, pricing, allocation"],
        ["lru", "Implement an LRU cache in O(1) with a map and a linked list"],
        ["ratelimit", "Implement a rate limiter class with a pluggable algorithm"],
        ["dispatcher", "Design a notification dispatcher across channels, with retries"],
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
        ["requirements", "State the requirements, and estimate reads, writes and storage"],
        ["keygen", "Choose between hashing, a counter and base62, and defend it"],
        ["model", "Design the table and the index that serves the redirect"],
        ["redirect", "Serve the redirect fast, and pick 301 against 302 deliberately"],
        ["collisions", "Handle collisions and custom aliases"],
        ["analytics", "Count clicks without slowing the redirect down"],
      ]),
      mod("sd.ratelimit", "Rate limiter", [
        ["fixed", "Explain fixed window, and the burst at its boundary"],
        ["log", "Explain sliding window log, and what it costs in memory"],
        ["counter", "Explain sliding window counter, the usual compromise"],
        ["bucket", "Explain token bucket, and the bursts it deliberately allows"],
        ["distributed", "Make a limiter correct across instances with Redis"],
        ["where", "Decide where to enforce it: edge, gateway or service"],
      ]),
      mod("sd.notify", "Notification service", [
        ["requirements", "State the channels, the volume and the delivery guarantee"],
        ["queue", "Design the queue and worker topology"],
        ["retries", "Design retries with backoff, and a dead letter queue"],
        ["idempotency", "Deduplicate so a retry cannot send twice"],
        ["templates", "Template messages, and respect user preferences"],
        ["tracking", "Track delivery, opens and failures"],
      ]),
      mod("sd.realtime", "Real-time notifications over WebSockets", [
        ["pushpoll", "Decide push against poll from update rate and client count"],
        ["connections", "Budget memory and file descriptors per open connection"],
        ["fanout", "Fan out to a room without looping per user"],
        ["scale", "Route messages between instances so any socket can be reached"],
        ["offline", "Deliver what a client missed while it was disconnected"],
        ["backpressure", "Handle a client too slow to keep up"],
      ]),
      mod("sd.upload", "Image upload", [
        ["presigned", "Issue a presigned URL, and scope it tightly"],
        ["direct", "Argue direct to storage against proxying through the server"],
        ["validation", "Validate type and size, before and after the upload"],
        ["thumbnails", "Generate thumbnails off a queue, and handle failure"],
        ["cdn", "Serve through a CDN with the right cache headers"],
        ["orphans", "Clean up uploads whose database row never got written"],
      ]),
      mod("sd.caching", "Caching as a design decision", [
        ["where", "Decide which layer to cache at: client, CDN, app or database"],
        ["strategies", "Compare cache-aside, write-through and write-behind"],
        ["invalidation", "Pick an invalidation strategy, and name its failure mode"],
        ["stampede", "Protect a cold key against a stampede"],
        ["measure", "Measure hit rate, and decide whether the cache earns its place"],
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
        ["images", "Explain images against containers, and what a layer is"],
        ["dockerfile", "Write a Dockerfile for a Node service from scratch"],
        ["layers", "Order a Dockerfile so the build cache actually helps"],
        ["volumes", "Persist data with a volume, and explain bind mounts"],
        ["networks", "Let two containers talk to each other"],
        ["ignore", "Use .dockerignore, and say what it keeps out and why"],
      ]),
      mod("ops.compose", "Docker Compose", [
        ["services", "Compose an app with its database, and set depends_on"],
        ["env", "Pass environment through env_file, and explain precedence"],
        ["devprod", "Explain why the dev compose file is not the production one"],
      ]),
      mod("ops.multistage", "Multi-stage builds", [
        ["stages", "Write a multi-stage build that leaves the toolchain behind"],
        ["slim", "Cut the final image size, and say exactly what you removed"],
        ["nonroot", "Run as a non-root user, and explain why it matters"],
      ]),
      mod("ops.ci", "CI/CD", [
        ["stages", "Lay out a pipeline: install, lint, typecheck, test, build, deploy"],
        ["tests", "Run the tests in CI, and fail the build on red"],
        ["image", "Build and push a tagged image from CI"],
        ["deploy", "Deploy from CI, and describe your rollback"],
      ]),
      mod("ops.config", "Configuration", [
        ["envvars", "Configure per environment without rebuilding the image"],
        ["secrets", "Separate secrets from config, and keep them out of the repo"],
        ["twelve", "Name the twelve factor rules you actually follow"],
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
        ["problem", "State the problem it solves in two sentences, no jargon"],
        ["architecture", "Describe the architecture from client through to database"],
        ["contribution", "State exactly what you built, and what you did not"],
        ["d1", "Hard decision one: the options, the choice, the cost"],
        ["d2", "Hard decision two: the options, the choice, the cost"],
        ["d3", "Hard decision three: the options, the choice, the cost"],
        ["broke", "An incident: symptom, cause, fix, and what you changed after"],
        ["redo", "Name what you would build differently, and why"],
      ]),
      mod("proj.two", "Project two, written out", [
        ["problem", "State the problem it solves in two sentences, no jargon"],
        ["architecture", "Describe the architecture from client through to database"],
        ["contribution", "State exactly what you built, and what you did not"],
        ["d1", "Hard decision one: the options, the choice, the cost"],
        ["d2", "Hard decision two: the options, the choice, the cost"],
        ["d3", "Hard decision three: the options, the choice, the cost"],
        ["broke", "An incident: symptom, cause, fix, and what you changed after"],
        ["redo", "Name what you would build differently, and why"],
      ]),
      mod("proj.rehearse", "Rehearsal", [
        ["draw1", "Draw project one's architecture from memory in under five minutes"],
        ["draw2", "Draw project two's architecture from memory in under five minutes"],
        ["db", "Answer why this database, with the alternative you rejected"],
        ["scale", "Answer how it scales, and what breaks first"],
        ["bottleneck", "Answer where the bottleneck is, with a number attached"],
        ["tenx", "Answer what changes at ten times the traffic"],
      ]),
      mod("proj.mocks", "Mocks", [
        ["theory", "Compress each phase into notes you can revise in ten minutes"],
        ["aloud", "Explain a module for three minutes with no notes"],
        ["followups", "Take three follow-ups on it without losing the thread"],
        ["machine", "Do a timed machine coding round end to end"],
        ["weak", "List the questions you fumbled, and re-answer them properly"],
        ["log", "Keep a mistake log, and revisit it on day 3 and day 10"],
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
      ["traversal", "Modify an array in place without a second pass"],
      ["prefix", "Answer range sum queries with a prefix array"],
      ["kadane", "Find the maximum subarray sum in one pass"],
      ["rotate", "Rotate an array in place with the reversal trick"],
    ]),
    mod("dsa.strings", "Strings", [
      ["palindrome", "Check a palindrome with two pointers, ignoring punctuation"],
      ["anagram", "Detect anagrams by counting rather than sorting"],
      ["substring", "Find the longest substring without repeating characters"],
      ["building", "Build strings without quadratic concatenation"],
    ]),
    mod("dsa.hash", "Hashmaps", [
      ["frequency", "Count frequencies, and answer top-k from them"],
      ["twosum", "Solve two sum in one pass with a map"],
      ["grouping", "Group items by a derived key"],
    ]),
    mod("dsa.pointers", "Two pointers", [
      ["opposite", "Walk two pointers inward on a sorted array"],
      ["fastslow", "Detect a cycle with fast and slow pointers"],
      ["pairs", "Find pairs or triplets summing to a target"],
    ]),
    mod("dsa.window", "Sliding window", [
      ["fixed", "Slide a fixed window while keeping the running answer"],
      ["variable", "Grow and shrink a window against a constraint"],
      ["longest", "Solve longest substring problems with a window and a map"],
    ]),
    mod("dsa.recursion", "Recursion", [
      ["base", "Write the base case first, and draw the recursion tree"],
      ["backtrack", "Backtrack with choose, explore, un-choose"],
      ["subsets", "Generate all subsets and all permutations"],
    ]),
    mod("dsa.sorting", "Sorting and searching", [
      ["comparator", "Sort objects with a custom comparator"],
      ["merge", "Implement merge sort, and state its complexity"],
      ["quick", "Implement quick sort, and name its worst case"],
      ["binary", "Binary search, including first and last occurrence"],
    ]),
    mod("dsa.stacks", "Stacks and queues", [
      ["monotonic", "Use a monotonic stack for next greater element"],
      ["parens", "Validate brackets with a stack"],
      ["queuestack", "Implement a queue with two stacks"],
    ]),
    mod("dsa.trees", "Basic trees", [
      ["traversals", "Write in-order, pre-order and post-order, recursive and iterative"],
      ["bfs", "Level order traversal with a queue"],
      ["depth", "Compute depth, and check whether a tree is balanced"],
      ["bst", "Insert and search in a BST, and state the complexity"],
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

/**
 * The Pareto set: the topics that carry most of the interview outcome.
 *
 * Chosen against what September 2026 reports say is actually being asked, not
 * against what is tidy to teach. The strongest signals behind this list:
 *
 *   - The Node event loop is described as the single most-tested concept at
 *     every level, with nextTick vs setImmediate ordering and micro vs macro
 *     task ordering used to separate memorised definitions from real reasoning.
 *     All five event loop topics are in.
 *   - React interviews expect a candidate with production experience to raise
 *     useEffect cleanup and fetch race conditions unprompted. Cleanup, the
 *     dependency array and a custom fetch hook are in; RTL and Suspense are not.
 *   - Live coding converges on a debounced input and a reusable data fetching
 *     hook, so both are in and the polyfill drills are out.
 *   - Database rounds ask for indexes, EXPLAIN, the N+1 problem, transactions
 *     and isolation. Those are in; normalisation theory is not.
 *   - TypeScript fluency during live coding is now assumed rather than tested
 *     separately, so the utility types and narrowing that appear in real code
 *     are in, and the type system corners are out.
 *
 * Kept deliberately despite being lower yield, because shipping without them
 * reads badly for someone who claims production ownership: Docker basics and
 * a CI pipeline you can describe end to end.
 *
 * This is a judgement call built on those reports, not a measurement. Edit it.
 * Anything not in here still exists on the full track.
 */
export const CORE: ReadonlySet<string> = new Set([
  // JavaScript core: async and closures carry this phase
  "js.async.stack", "js.async.loop", "js.async.micro", "js.async.promises",
  "js.async.asyncawait", "js.async.errors", "js.async.combinators",
  "js.fn.arrow", "js.fn.closures", "js.fn.this", "js.fn.bind",
  "js.mem.hoisting", "js.mem.tdz", "js.mem.refs", "js.mem.gc",
  "js.obj.copy",
  "js.machine.debounce", "js.machine.throttle",

  // TypeScript: what shows up in real code, not the type system's corners
  "ts.shapes.typevsint", "ts.shapes.union",
  "ts.generics.fn", "ts.generics.extends",
  "ts.utility.pick", "ts.utility.omit", "ts.utility.partial", "ts.utility.record",
  "ts.narrow.guards", "ts.narrow.discriminated",
  "ts.real.props",

  // React: cleanup, re-renders and memoisation
  "react.hooks.usestate", "react.hooks.useeffect", "react.hooks.cleanup",
  "react.hooks.usecontext", "react.hooks.rules",
  "react.custom.fetch",
  "react.context.rerender",
  "react.perf.memo", "react.perf.usememo", "react.perf.usecallback",
  "react.perf.referential",
  "react.render.diff", "react.render.why",
  "react.ssr.ssr", "react.ssr.hydration",

  // Node: the heaviest phase, and the event loop is the heaviest module in it
  "node.loop.phases", "node.loop.timers", "node.loop.nexttick",
  "node.loop.blocking", "node.loop.libuv",
  "node.express.chaining", "node.express.errorsig",
  "node.auth.sessionstoken", "node.auth.jwt", "node.auth.refresh", "node.auth.rbac",
  "node.security.xss", "node.security.csrf", "node.security.injection",
  "node.cache.aside", "node.cache.ttl",
  "node.streams.pipeline", "node.streams.backpressure",
  "node.concurrency.cluster", "node.concurrency.workers",
  "node.sockets.choice", "node.sockets.rooms",
  "node.api.rest", "node.api.pagination",

  // Databases
  "db.pg.joins", "db.pg.tx", "db.pg.isolation", "db.pg.deadlock",
  "db.index.btree", "db.index.composite", "db.index.explain", "db.index.nplusone",
  "db.conn.pooling",
  "db.redis.caching",
  "db.rediscache.eviction", "db.rediscache.invalidation",

  // Low level design
  "lld.solid.srp", "lld.solid.ocp", "lld.solid.dip",
  "lld.patterns.strategy",
  "lld.practice.lru",

  // System design: two exercises done properly beat six done shallowly
  "sd.url.requirements", "sd.url.keygen", "sd.url.model",
  "sd.ratelimit.counter", "sd.ratelimit.bucket", "sd.ratelimit.distributed",
  "sd.notify.queue", "sd.notify.idempotency",
  "sd.realtime.pushpoll",
  "sd.caching.strategies",

  // Docker and CI: basics only, but not nothing
  "ops.docker.images", "ops.docker.dockerfile", "ops.docker.layers",
  "ops.multistage.stages",
  "ops.ci.stages", "ops.ci.tests", "ops.ci.deploy",
  "ops.config.envvars",

  // Project deep dive: the highest yield block on the page, so it survives
  // almost intact. It is recall rather than learning, so it is also the fastest.
  "proj.one.problem", "proj.one.architecture", "proj.one.contribution",
  "proj.one.d1", "proj.one.d2", "proj.one.d3", "proj.one.broke", "proj.one.redo",
  "proj.two.problem", "proj.two.architecture", "proj.two.contribution", "proj.two.d1",
  "proj.rehearse.draw1", "proj.rehearse.db", "proj.rehearse.scale",
  "proj.rehearse.bottleneck",
  "proj.mocks.aloud", "proj.mocks.followups", "proj.mocks.machine",

  // DSA: the patterns that screening rounds actually draw from
  "dsa.arrays.traversal", "dsa.arrays.prefix",
  "dsa.strings.palindrome",
  "dsa.hash.frequency", "dsa.hash.twosum",
  "dsa.pointers.opposite", "dsa.pointers.fastslow",
  "dsa.window.variable",
  "dsa.recursion.backtrack",
  "dsa.sorting.binary",
  "dsa.stacks.parens",
  "dsa.trees.traversals", "dsa.trees.bfs",
]);

export function isCore(id: string): boolean {
  return CORE.has(id);
}

export const ALL_TOPIC_IDS = ALL_PHASES.flatMap((p) =>
  p.modules.flatMap((m) => m.topics.map((t) => t.id)),
);

export const CORE_TOPIC_IDS = ALL_TOPIC_IDS.filter(isCore);

/** DSA target on the Pareto track: enough to clear a screen, not 100. */
export const DSA_TARGET_CORE = { easy: 35, medium: 15 };
