print(
    """
-----------------------------------------------------------------
✨ Hello Tilt! This appears in the (Tiltfile) pane whenever Tilt
   evaluates this file.
-----------------------------------------------------------------
""".strip()
)

allow_k8s_contexts("admin@marcolongo.cloud")


docker_build(
    "marcolongo.cloud-app",
    context=".",
    dockerfile="./apps/marcolongo.cloud/Dockerfile",
    only=[
        "./dist/apps/marcolongo.cloud/browser",
    ],
    live_update=[
        sync("./dist/apps/marcolongo.cloud/browser", "/usr/share/nginx/html/")
    ],
)

local_resource(
    "serve:app:dev",
    serve_cmd="npm run serve:app:dev",
    labels=["app"],
    trigger_mode=TRIGGER_MODE_AUTO,
    auto_init=False,
    links=[link("http://localhost:4200", "web")],
)

local_resource(
    "build:app:dev",
    serve_cmd="npm run build:app:dev -- --watch",
    labels=["app"],
    trigger_mode=TRIGGER_MODE_AUTO,
    auto_init=False,
)


docker_build(
    "marcolongo.cloud-api",
    context=".",
    dockerfile="./apps/marcolongo.cloud-api/Dockerfile",
    only=[
        "./dist/apps/marcolongo.cloud-api",
    ],
    live_update=[sync("./dist/apps/marcolongo.cloud-api", "/app")],
    target="dev",
)

local_resource(
    "build:api:dev",
    serve_cmd="npm run build:api:dev -- --watch",
    labels=["api"],
    trigger_mode=TRIGGER_MODE_AUTO,
    auto_init=False,
)

local_resource(
    "serve:api:dev",
    serve_cmd="npm run serve:api:dev",
    labels=["api"],
    trigger_mode=TRIGGER_MODE_AUTO,
    auto_init=False,
    links=[link("http://localhost:3000", "api")],
)

k8s_resource(
    "marcolongo-cloud-app",
    port_forwards=[
        port_forward(4200, name="web"),
    ],
    labels=["app"],
    auto_init=False,
)

k8s_resource(
    "marcolongo-cloud-api",
    port_forwards=[
        port_forward(3000, name="api"),
    ],
    labels=["api"],
    auto_init=False,
)

local_resource(
    "marcolongo.cloud",
    serve_cmd="npm run storybook:app",
    links=[link("http://localhost:4400", "storybook")],
    trigger_mode=TRIGGER_MODE_MANUAL,
    auto_init=False,
    labels=["storybook"],
)

local_resource(
    "common-ui",
    serve_cmd="npm run storybook:common-ui",
    links=[link("http://localhost:4401", "storybook")],
    trigger_mode=TRIGGER_MODE_MANUAL,
    auto_init=False,
    labels=["storybook"],
)

local_resource(
    "core",
    serve_cmd="npm run storybook:core",
    links=[link("http://localhost:4402", "storybook")],
    trigger_mode=TRIGGER_MODE_MANUAL,
    auto_init=False,
    labels=["storybook"],
)

local_resource(
    "gradient-os",
    serve_cmd="npm run storybook:gradient-os",
    links=[link("http://localhost:4403", "storybook")],
    trigger_mode=TRIGGER_MODE_MANUAL,
    auto_init=False,
    labels=["storybook"],
)

local_resource(
    "test:unit",
    serve_cmd="npm run test:unit -- --watch --parallel 10",
    trigger_mode=TRIGGER_MODE_MANUAL,
    labels=["tests"],
)

local_resource(
    "test:e2e",
    cmd="npm run test:e2e -- --parallel 10",
    trigger_mode=TRIGGER_MODE_MANUAL,
    auto_init=False,
    labels=["tests"],
)
