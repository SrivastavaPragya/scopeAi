#!/usr/bin/env python3
"""
Test script to verify ScopeAI MCP server registration and tool schema.
"""

import sys
import asyncio
from pathlib import Path

# Add project root to sys.path
SERVER_DIR = Path(__file__).resolve().parent
if str(SERVER_DIR) not in sys.path:
    sys.path.insert(0, str(SERVER_DIR))

import mcp_server


async def main():
    print("Initializing ScopeAI FastMCP test...")
    print(f"MCP Server Name: {mcp_server.mcp.name}")

    tools = await mcp_server.mcp.list_tools()
    print(f"\nFound {len(tools)} registered tool(s):")
    for tool in tools:
        print(f" - Tool Name: {tool.name}")
        print(f"   Description: {tool.description}")
        print(f"   Parameters: {list(tool.parameters.get('properties', {}).keys())}")
        print(f"   Required: {tool.parameters.get('required', [])}")

    assert any(t.name == "analyze_startup_idea" for t in tools), "Tool 'analyze_startup_idea' was not found!"
    print("\nMCP server verification SUCCESS! Ready to connect to Claude Desktop / Antigravity.")


if __name__ == "__main__":
    asyncio.run(main())
