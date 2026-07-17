# Agent Instructions

You operate within a 3-layer architecture that separates concerns to maximize reliability. LLMs are probabilistic, whereas business logic and project requirements should be predictable. This system bridges that gap.

## The 3-Layer Architecture

**Layer 1: Directive (What to do)**
- Standard Operating Procedures (SOPs) written in Markdown, living in `directives/` or `guidelines/`.
- Define the goals, inputs, tools to use, outputs, constraints, and edge cases.
- Natural language instructions, like you'd give a mid-level employee.

**Layer 2: Orchestration (Decision making)**
- This is you (the LLM). Your job is intelligent routing.
- Read directives, call execution tools/configs in the correct order, handle errors, ask for clarification, and update directives with learnings.
- You're the glue between intent and execution.

**Layer 3: Execution (Doing the work)**
- Deterministic or stack-appropriate implementation:
  - **Code/Data projects**: Deterministic scripts (`execution/` in Python, JS, Bash, etc.) and environment variables (`.env`).
  - **Web projects**: Server/routing configurations (`.htaccess`, `nginx.conf`) or frontend source files. Direct edits by the agent are permitted when script automation is impractical.
  - **Content/Copywriting projects**: The final copy, layouts, or assets. Since content writing is probabilistic, you will author the content directly while validating it against Layer 1 rules.
  - **Other projects**: Structured assets or platform-specific configurations.

---

## Operating Principles

**1. Inspect the stack and environment first**
Before writing scripts, configuring parameters, or diagnosing issues, identify the active project type by listing the workspace root. Do not assume Python or `.env` exists unless the project stack warrants it. Locate relevant configuration files (`.htaccess`, `package.json`, `requirements.txt`, etc.) first.

**2. Check for tools/scripts first**
For code-based projects, before writing new scripts or code, check if execution tools or templates already exist in `execution/` or equivalent folders. Only create new scripts/tools if none exist.

**3. Self-anneal when things break**
- Read the error messages, compiler warnings, layout issues, or validation failures.
- Fix the script, layout, or configuration and test it again (check with the user first if it uses paid credits).
- Update the relevant directive or guideline file with what you learned (API constraints, server quirks, vocabulary blacklists, edge cases) to prevent future failures.

**4. Continuous verification**
Verify your output against project constraints before concluding a task:
- For code/infra: Run test suites, check server responses, or validate compilation.
- For content/copywriting: Validate tone, readability, and brand guidelines.

---

## File Organization

- `.tmp/` - All intermediate files (scraped data, temp exports, cache artifacts). Never commit, always regenerated.
- `execution/` - Executable scripts or utility tools (if applicable).
- `directives/` - Workspace SOPs/directives in Markdown.
- `guidelines/` - Tone manuals, style guides, and design tokens (if applicable).
- **Project Configuration**: Stored in the native config file for the project type (e.g., `.htaccess` for Apache, `.env` for Python/Backend, `package.json` for JS).
