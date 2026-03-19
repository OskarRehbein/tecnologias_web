FROOM ubuntu:24.04

RUN apt-get update
RUN apt-get install -y curl python3 python3-venv

WORKDIR /app

COPY . /app

RUN pip install -r src/requirements.txt

CMD ["uv run python", "src/app.py"]
