print(
    """
-----------------------------------------------------------------
✨ Hello Tilt! This appears in the (Tiltfile) pane whenever Tilt
   evaluates this file.
-----------------------------------------------------------------
""".strip()
)


# SECTION: APP
# ---
docker_build(
    "app",
    context=".",
    dockerfile="./apps/app/Dockerfile",
    only=[
        "./dist/apps/app/browser/",
        "./apps/app/nginx.conf",
    ],
    live_update=[
        sync("./dist/apps/app/browser", "/usr/share/nginx/html/"),
        sync("./apps/app/nginx.conf", "/etc/nginx/conf.d/default.conf"),
    ],
)

local_resource(
    "serve:app:dev",
    serve_cmd="npx nx run app:serve:development",
    labels=["app"],
    trigger_mode=TRIGGER_MODE_AUTO,
    auto_init=False,
    links=[link("http://localhost:4200", "web")],
)

local_resource(
    "build:app:dev",
    serve_cmd="npx nx run app:build:development -- --watch",
    labels=["app"],
    trigger_mode=TRIGGER_MODE_AUTO,
    auto_init=False,
)


# SECTION: API
# ---
docker_build(
    "api",
    context=".",
    dockerfile="./apps/api/Dockerfile",
    only=[
        "./dist/apps/api",
    ],
    live_update=[sync("./dist/apps/api", "/app")],
    target="development",
)

local_resource(
    "build:api:dev",
    serve_cmd="npx nx run api:build:development -- --watch",
    labels=["api"],
    trigger_mode=TRIGGER_MODE_AUTO,
    auto_init=False,
)

local_resource(
    "serve:api:dev",
    serve_cmd="npx nx run api:serve:development",
    labels=["api"],
    trigger_mode=TRIGGER_MODE_AUTO,
    auto_init=False,
    links=[link("http://localhost:3000", "api")],
)

# SECTION: K8s
# ---
k8s_yaml(helm("./chart", "marcolongo-cloud", "marcolongo-cloud", "./chart/values.yaml"))

k8s_resource(
    "marcolongo-cloud-app",
    port_forwards=[
        port_forward(80, name="web"),
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

# SECTION: Storybook
# ------------------
local_resource(
    "app",
    serve_cmd="npx nx run app:storybook",
    links=[link("http://localhost:4400", "storybook")],
    trigger_mode=TRIGGER_MODE_MANUAL,
    auto_init=False,
    labels=["storybook"],
)

local_resource(
    "common-ui",
    serve_cmd="npx nx run common-ui:storybook",
    links=[link("http://localhost:4401", "storybook")],
    trigger_mode=TRIGGER_MODE_MANUAL,
    auto_init=False,
    labels=["storybook"],
)

local_resource(
    "core",
    serve_cmd="npx nx run core:storybook",
    links=[link("http://localhost:4402", "storybook")],
    trigger_mode=TRIGGER_MODE_MANUAL,
    auto_init=False,
    labels=["storybook"],
)

local_resource(
    "gradient-os",
    serve_cmd="npx nx run gradient-os:storybook",
    links=[link("http://localhost:4403", "storybook")],
    trigger_mode=TRIGGER_MODE_MANUAL,
    auto_init=False,
    labels=["storybook"],
)

# SECTION: Tests
# --------------
local_resource(
    "test:unit",
    serve_cmd="npx nx run-many --target=test --parallel 10 --configuration ci -- --watch",
    trigger_mode=TRIGGER_MODE_MANUAL,
    labels=["tests"],
)


# SECTION: E2E
# ------------
local_resource(
    "test:e2e",
    cmd="npx nx run-many --target=e2e --parallel 10",
    trigger_mode=TRIGGER_MODE_MANUAL,
    auto_init=False,
    labels=["tests"],
)
