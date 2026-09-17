"""
ASGI config for scopeAi project.

It exposes the ASGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/asgi/
"""

import os
from django.core.asgi import get_asgi_application
from starlette.applications import Starlette
from starlette.routing import Mount

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'scopeAi.settings')

django_app = get_asgi_application()

try:
    import mcp_server
    mcp_app = mcp_server.mcp.http_app(transport="sse")
    # asgi change
    application = Starlette(routes=list(mcp_app.routes) + [Mount("/", app=django_app)])
except Exception as e:
    import sys
    print(f"Notice: Running standard Django ASGI ({e})", file=sys.stderr)
    application = django_app


