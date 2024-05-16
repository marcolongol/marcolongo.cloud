FROM python:3.10-alpine as development

RUN apk update && apk upgrade

RUN pip install --no-cache-dir --upgrade poetry

WORKDIR /app

COPY ./poetry.toml ./
COPY ./pyproject.toml ./

COPY ./api ./api

RUN poetry install

EXPOSE 8000

CMD [ "poetry", "run", "uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000" ]

