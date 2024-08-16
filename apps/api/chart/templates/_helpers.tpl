{{/*
Expand the name of the chart.
*/}}
{{- define "chart.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "chart.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "chart.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "chart.labels" -}}
helm.sh/chart: {{ include "chart.chart" . }}
{{ include "chart.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Selector labels
*/}}
{{- define "chart.selectorLabels" -}}
app.kubernetes.io/name: {{ include "chart.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end -}}

{{/*
Create the name of the service account to use
*/}}
{{- define "chart.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "chart.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}

{{/*
Create a default fully qualified postgresql name.
*/}}
{{- define "api.postgresql.fullname" -}}
{{- include "common.names.dependency.fullname" (dict "chartName" "postgresql" "chartValues" .Values.postgresql "context" $) -}}
{{- end -}}

{{/*
Add environment variables to configure database name
*/}}
{{- define "api.database.name" -}}
{{- ternary .Values.postgresql.auth.database .Values.externalDatabase.database .Values.postgresql.enabled | quote -}}
{{- end -}}

{{/*
Add environment variables to configure database host
*/}}
{{- define "api.database.host" -}}
{{- ternary (include "api.postgresql.fullname" .) .Values.externalDatabase.host .Values.postgresql.enabled | quote -}}
{{- end -}}

{{/*
Add environment variables to configure database port
*/}}
{{- define "api.database.port" -}}
{{- ternary "5432" .Values.externalDatabase.port .Values.postgresql.enabled | quote -}}
{{- end -}}

{{/*
Add environment variables to configure database user
*/}}
{{- define "api.database.user" -}}
{{- ternary .Values.postgresql.auth.username .Values.externalDatabase.user .Values.postgresql.enabled | quote -}}
{{- end -}}

{{/*
Get the postgresql credentials secret
*/}}
{{- define "api.database.secretName" -}}
{{- if .Values.postgresql.enabled -}}
  {{- default (include "api.postgresql.fullname" .) (tpl .Values.postgresql.auth.existingSecret $) -}}
{{- else -}}
  {{- default (printf "%s-externaldb" .Release.Name) (tpl .Values.externalDatabase.existingSecret $) -}}
{{- end -}}
{{- end -}}

{{/*
Get the postgresql credentials secret key
*/}}
{{- define "api.database.existingSecret.key" -}}
{{- if .Values.postgresql.enabled -}}
  {{- printf "%s" "password" -}}
{{- else -}}
  {{- if .Values.externalDatabase.existingSecret -}}
    {{- if .Values.externalDatabase.existingSecretPasswordKey -}}
      {{- printf "%s" .Values.externalDatabase.existingSecretPasswordKey -}}
    {{- else -}}
      {{- printf "%s" "password" -}}
    {{- end -}}
  {{- end -}}
{{- end -}}
{{- end -}}

{{/*
Add environment variables to configure database values
*/}}
{{- define "api.configure.database" -}}
- name: API_DATABASE_NAME
  value: {{ include "api.database.name" . }}
- name: API_DATABASE_USERNAME
  value: {{ include "api.database.user" . }}
{{- if or (not .Values.postgresql.enabled) .Values.postgresql.auth.enablePostgresUser }}
- name: API_DATABASE_PASSWORD
  valueFrom:
    secretKeyRef:
      name: {{ include "api.database.secretName" . }}
      key: {{ include "api.database.existingSecret.key" . }}
{{- else }}
- name: ALLOW_EMPTY_PASSWORD
  value: "yes"
{{- end }}
- name: API_DATABASE_HOST
  value: {{ include "api.database.host" . }}
- name: API_DATABASE_PORT
  value: {{ include "api.database.port" . }}
- name: API_DATABASE_URL
  value: "postgresql://$(API_DATABASE_USERNAME):$(API_DATABASE_PASSWORD)@$(API_DATABASE_HOST):$(API_DATABASE_PORT)/$(API_DATABASE_NAME)"
{{- end -}}

