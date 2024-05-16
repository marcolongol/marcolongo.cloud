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
        "./apps",
        "./libs",
        "./package.json",
        "./nx.json",
        "./tsconfig.base.json",
        "./.eslintrc.json",
    ],
    live_update=[
        sync("./apps", "/app/apps"),
        sync("./libs", "/app/libs"),
        sync("./package.json", "/app/package.json"),
        sync("./nx.json", "/app/nx.json"),
        sync("./.eslintrc.json", "/app/.eslintrc.json"),
        sync("./tsconfig.base.json", "/app/tsconfig.base.json"),
        run("npm install", trigger=["./package.json"]),
    ],
    target="development",
)


docker_build(
    "marcolongo.cloud-api",
    context=".",
    dockerfile="./api/Dockerfile",
    only=[
        "./api",
        "./poetry.toml",
        "./pyproject.toml",
    ],
    live_update=[
        sync("./api", "/app/api"),
        sync("./poetry.toml", "/app/poetry.toml"),
        sync("./pyproject.toml", "/app/pyproject.toml"),
        run("poetry install", trigger=["./poetry.toml", "./pyproject.toml"]),
    ],
    target="development",
)

k8s_yaml(
    helm(
        "./chart",
        name="marcolongo-cloud",
        namespace="marcolongo-cloud",
        values=["./chart/values-dev.yaml"],
    )
)

k8s_resource("marcolongo-cloud-app", port_forwards=port_forward(4200, name="web"))
k8s_resource("marcolongo-cloud-api", port_forwards=port_forward(8000, name="api"))

