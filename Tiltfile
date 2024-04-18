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
    only=["./apps", "./libs", "./package.json", "./nx.json", "./tsconfig.base.json"],
    live_update=[
        sync("./apps", "/app/apps"),
        sync("./libs", "/app/libs"),
        sync("./package.json", "/app/package.json"),
        sync("./nx.json", "/app/nx.json"),
        sync("./tsconfig.base.json", "/app/tsconfig.base.json"),
        run("npm install", trigger=["./package.json"]),
    ],
    target="development",
)

k8s_yaml(
    helm(
        "./chart",
        name="marcolongo-cloud-dev",
        namespace="marcolongo-cloud-dev",
        values=["./chart/values-dev.yaml"],
    )
)

k8s_resource("marcolongo-cloud-dev", port_forwards=port_forward(4200, name="web"))
