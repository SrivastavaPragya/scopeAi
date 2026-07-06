FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /app

COPY requirements.txt .
RUN python -m pip install --upgrade pip && \
    python -m pip install -r requirements.txt

RUN addgroup --system app && \
    adduser --system --ingroup app app && \
    mkdir -p /app/data /app/media /app/staticfiles && \
    chown -R app:app /app

COPY --chown=app:app . .
RUN chmod +x /app/entrypoint.sh

USER app

EXPOSE 7860

ENTRYPOINT ["/app/entrypoint.sh"]
CMD ["gunicorn", "scopeAi.wsgi:application", "--bind", "0.0.0.0:7860", "--workers", "2", "--timeout", "180", "--access-logfile", "-", "--error-logfile", "-"]
