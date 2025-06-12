# API Examples

## Translation API
Translate text to different languages.

```bash
# Translate to Japanese
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello, how are you?", "targetLanguage": "japanese"}' \
  http://localhost:3000/api/translation

# Translate to Spanish
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello, how are you?", "targetLanguage": "spanish"}' \
  http://localhost:3000/api/translation

# Translate to French
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello, how are you?", "targetLanguage": "french"}' \
  http://localhost:3000/api/translation
```

## Encryption API
Encrypt text using different algorithms.

```bash
# Caesar cipher encryption
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello World", "algorithm": "caesar"}' \
  http://localhost:3000/api/encrypt

# Reverse text encryption
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello World", "algorithm": "reverse"}' \
  http://localhost:3000/api/encrypt

# Base64 encryption
curl -X POST -H "Content-Type: application/json" \
  -d '{"text":"Hello World", "algorithm": "base64"}' \
  http://localhost:3000/api/encrypt

# ROT13 encryption
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

# Generate essay about Charles Dickens
curl -X POST -H "Content-Type: application/json" \
  -d '{"author":"Charles Dickens"}' \
  http://localhost:3000/api/essay

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