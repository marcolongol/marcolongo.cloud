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
    "build:app:dev",
    serve_cmd="npm run build:app:dev -- --watch",
    labels=["app"],
    trigger_mode=TRIGGER_MODE_AUTO,
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
)


k8s_yaml(
    helm(
        "./chart",
        name="marcolongo-cloud",
        namespace="marcolongo-cloud",
        values=["./chart/values-dev.yaml"],
    )
)

k8s_resource(
    "marcolongo-cloud-app",
    port_forwards=[
        port_forward(4200, name="web"),
    ],
    labels=["app"],
)

k8s_resource(
    "marcolongo-cloud-api",
    port_forwards=[
        port_forward(3000, name="api"),
    ],
    labels=["api"],
)

local_resource(
    "marcolongo.cloud",
    serve_cmd="npx nx run marcolongo.cloud:storybook",
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
    serve_cmd=" npx nx run core:storybook",
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
