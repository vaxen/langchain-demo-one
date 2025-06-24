# API Examples

## Translation API
Translate text to different languages.

```bash
# Translate to Japanese
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello, how are you?", "targetLanguage": "japanese"}' \
  http://localhost:3000/api/translation
```
```bash
# Translate to Spanish
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello, how are you?", "targetLanguage": "spanish"}' \
  http://localhost:3000/api/translation
```

```bash
# Translate to French
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello, how are you?", "targetLanguage": "french"}' \
  http://localhost:3000/api/translation
```

## Encryption API
Encrypt text using different algorithms.

# Caesar cipher encryption
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello World", "algorithm": "caesar"}' \
  http://localhost:3000/api/encrypt
```
# Reverse text encryption
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello World", "algorithm": "reverse"}' \
  http://localhost:3000/api/encrypt
```
# Base64 encryption
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello World", "algorithm": "base64"}' \
  http://localhost:3000/api/encrypt
```
# ROT13 encryption
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello World", "algorithm": "rot13"}' \
  http://localhost:3000/api/encrypt
```

## Multi Agent collaboration Essay API
Generate essays about British authors with feedback.

```bash
# Generate essay about Jane Austen
curl -X POST -H "Content-Type: application/json" \
  -d '{"author":"Jane Austen"}' \
  http://localhost:3000/api/essay
```

```bash
# Generate essay about Charles Dickens
curl -X POST -H "Content-Type: application/json" \
  -d '{"author":"Charles Dickens"}' \
  http://localhost:3000/api/essay
```

```bash
# Generate essay about William Shakespeare
curl -X POST -H "Content-Type: application/json" \
  -d '{"author":"William Shakespeare"}' \
  http://localhost:3000/api/essay
```

Note: For better readability of JSON responses, you can pipe the output through `json_pp`:
```bash
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello World", "algorithm": "caesar"}' \
  http://localhost:3000/api/encrypt | json_pp
```

## Natural Language Query Agent

### Get Users by Organization

To retrieve users querying using natural language, send a POST request to `/api/nlq/users` with the organization name in the request body.

Example:

```bash
curl -X POST http://localhost:3000/api/nlq/users -H "Content-Type: application/json" -d '{"query": "Return all of the user for corporation-b"}'
```

```bash
curl -X POST http://localhost:3000/api/nlq/users -H "Content-Type: application/json" -d '{"query": "Return all of the user for corporation-b with the name that starts with a"}'
```

```bash
curl -X POST http://localhost:3000/api/nlq/users -H "Content-Type: application/json" -d '{"query": "get all of the users with the name starting with v and belongs to corporation-a"}'
```

```bash
curl -X POST http://localhost:3000/api/nlq/users -H "Content-Type: application/json" -d '{"query": "Return all of the user for corporation-b"}'
```

```bash
curl -X POST http://localhost:3000/api/nlq/users -H "Content-Type: application/json" -d '{"query": "Get all the users"}'
```

```bash
curl -X POST http://localhost:3000/api/nlq/users -H "Content-Type: application/json" -d '{"query": "Find all of the users that contains ca in their name"}'
```

Response:

```json
{
  "users": [
    { "id": 1, "name": "Alice", "org": "corporation-b", "creation_date": "2023-01-01", "address": "123 Main St" },
    { "id": 2, "name": "Bob", "org": "corporation-b", "creation_date": "2023-02-01", "address": "456 Oak Ave" }
  ]
}
``` 